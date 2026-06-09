<script setup lang="ts">
import { computed, inject, useSlots } from "vue";
import LuIcon from "./LuIcon.vue";
import LuText from "./LuText.vue";
import LuCheckbox from "./LuCheckbox.vue";
import { LuTreeContextKey } from "./LuTree.types";

defineOptions({ name: "LuTreeItem" });

const props = withDefaults(defineProps<{
  id: string;
  label?: string;
  icon?: string;
  disabled?: boolean;
  depth?: number;
}>(), {
  disabled: false,
  depth: 0,
});

const emit = defineEmits<{
  (e: "select", id: string): void;
  (e: "expand", id: string): void;
  (e: "check", id: string, checked: boolean): void;
}>();

const slots = useSlots();
const context = inject(LuTreeContextKey, null);

const hasChildren = computed(() => !!slots.default);
const isExpanded = computed(() => context?.expanded.value.includes(props.id) ?? false);
const isSelected = computed(() => context?.selected.value.includes(props.id) ?? false);
const checkable = computed(() => context?.checkable.value ?? false);

function handleToggle(e: Event) {
  e.stopPropagation();
  if (context) {
    context.handleExpand(props.id);
  } else {
    emit("expand", props.id);
  }
}

function handleSelect() {
  if (props.disabled) return;
  if (context) {
    if (context.selectable.value) context.handleSelect(props.id);
    if (hasChildren.value) context.handleExpand(props.id);
  } else {
    emit("select", props.id);
    if (hasChildren.value) emit("expand", props.id);
  }
}

function handleCheck(v: boolean) {
  if (context) {
    context.handleCheck(props.id, v);
  } else {
    emit("check", props.id, v);
  }
}

const skinNode = computed(() => `lu-tree-node`);
const skinNodeContent = computed(() =>
  `lu-tree-node__content ${props.disabled ? 'lu-tree-node__content--disabled' : isSelected.value ? 'lu-tree-node__content--selected' : ''}`.trim()
);
const skinToggle = computed(() => `lu-tree-node__toggle`);
const skinLabel = computed(() => `lu-tree-node__label`);
const skinChildren = computed(() => `lu-tree-node__children`);
</script>

<template>
  <div :class="skinNode" role="treeitem" :aria-expanded="hasChildren ? isExpanded : undefined">
    <!-- Node content row -->
    <div
      :class="skinNodeContent"
      :style="`--lu-tree-depth: ${depth};`"
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
        :class="['lu-tree-node__checkbox']"
        :model-value="isSelected"
        @update:model-value="handleCheck"
        @click.stop
      />

      <!-- Icon -->
      <LuIcon v-if="icon" :name="icon" :size="14" class="shrink-0" />

      <!-- Label -->
      <LuText :class="skinLabel">
        <slot name="label" :expanded="isExpanded" :selected="isSelected">
          {{ label }}
        </slot>
      </LuText>
    </div>

    <!-- Children -->
    <Transition name="lu-collapsible">
      <div
        v-if="hasChildren && isExpanded"
        :class="skinChildren"
        role="group"
      >
        <slot />
      </div>
    </Transition>
  </div>
</template>
