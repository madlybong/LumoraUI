<script setup lang="ts">
import { computed, ref } from "vue";
import { useLumoraConfig } from "../context";
import LuIcon from "./LuIcon.vue";
import LuText from "./LuText.vue";
import LuCheckbox from "./LuCheckbox.vue";
import type { TreeNodeData } from "./LuTree.types";

defineOptions({ name: "LuTreeNode" });

const props = withDefaults(defineProps<{
  node: TreeNodeData;
  selected?: string[];
  expanded?: string[];
  selectable?: boolean;
  checkable?: boolean;
  depth?: number;
}>(), {
  selected: () => [],
  expanded: () => [],
  selectable: false,
  checkable: false,
  depth: 0,
});

const emit = defineEmits<{
  (e: "select", id: string): void;
  (e: "expand", id: string): void;
  (e: "check", id: string, checked: boolean): void;
}>();

const { resolveSkin } = useLumoraConfig();

const hasChildren = computed(() => (props.node.children?.length ?? 0) > 0);
const isExpanded = computed(() => props.expanded.includes(props.node.id));
const isSelected = computed(() => props.selected.includes(props.node.id));

function handleToggle(e: Event) {
  e.stopPropagation();
  emit("expand", props.node.id);
}

function handleSelect() {
  if (props.node.disabled) return;
  if (props.selectable) emit("select", props.node.id);
}

const skinNode = computed(() => resolveSkin("LuTreeNode"));
const skinNodeContent = computed(() =>
  resolveSkin("LuTreeNodeContent",
    props.node.disabled ? "disabled" : isSelected.value ? "selected" : undefined)
);
const skinToggle = computed(() => resolveSkin("LuTreeNodeToggle"));
const skinLabel = computed(() => resolveSkin("LuTreeNodeLabel"));
const skinChildren = computed(() => resolveSkin("LuTreeChildren"));
</script>

<template>
  <div :class="skinNode" role="treeitem" :aria-expanded="hasChildren ? isExpanded : undefined">
    <!-- Node content row -->
    <div
      :class="skinNodeContent"
      tabindex="0"
      @click="handleSelect"
      @keydown.enter="handleSelect"
      @keydown.space.prevent="handleSelect"
    >
      <!-- Expand/collapse toggle -->
      <span
        v-if="hasChildren"
        :class="skinToggle"
        @click.stop="handleToggle"
        :aria-label="isExpanded ? 'Collapse' : 'Expand'"
      >
        <LuIcon :name="isExpanded ? 'chevron-down' : 'chevron-right'" :size="14" />
      </span>
      <span v-else :class="skinToggle" />

      <!-- Checkbox -->
      <LuCheckbox
        v-if="checkable"
        :class="resolveSkin('LuTreeNodeCheckbox')"
        :model-value="isSelected"
        @update:model-value="(v) => emit('check', node.id, v)"
        @click.stop
      />

      <!-- Icon -->
      <LuIcon v-if="node.icon" :name="node.icon" :size="14" class="shrink-0 text-zinc-400 dark:text-zinc-500" />

      <!-- Label -->
      <LuText :class="skinLabel">
        <slot :node="node">{{ node.label }}</slot>
      </LuText>
    </div>

    <!-- Children -->
    <Transition name="lu-collapsible">
      <div
        v-if="hasChildren && isExpanded"
        :class="skinChildren"
        role="group"
      >
        <LuTreeNode
          v-for="child in node.children"
          :key="child.id"
          :node="child"
          :selected="selected"
          :expanded="expanded"
          :selectable="selectable"
          :checkable="checkable"
          :depth="depth + 1"
          @select="(id) => emit('select', id)"
          @expand="(id) => emit('expand', id)"
          @check="(id, v) => emit('check', id, v)"
        />
      </div>
    </Transition>
  </div>
</template>
