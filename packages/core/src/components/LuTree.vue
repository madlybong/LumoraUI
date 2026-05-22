<script setup lang="ts">
import { computed, ref } from "vue";
import { useLumoraConfig } from "../context";
import LuTreeNode from "./LuTreeNode.vue";
import type { TreeNodeData } from "./LuTree.types";

defineOptions({ name: "LuTree" });

const props = withDefaults(defineProps<{
  nodes: TreeNodeData[];
  modelValue?: string[];
  expanded?: string[];
  selectable?: boolean;
  checkable?: boolean;
  defaultExpanded?: boolean;
}>(), {
  modelValue: () => [],
  expanded: () => [],
  selectable: false,
  checkable: false,
  defaultExpanded: false,
});

const emit = defineEmits<{
  (e: "update:modelValue", selected: string[]): void;
  (e: "update:expanded", expanded: string[]): void;
  (e: "select", id: string, node: TreeNodeData | undefined): void;
}>();

const { resolveSkin } = useLumoraConfig();

// ── Internal expanded state ──────────────────────────────────────────────────
const internalExpanded = ref<string[]>(
  props.defaultExpanded
    ? getAllIds(props.nodes)
    : [...props.expanded]
);

function getAllIds(nodes: TreeNodeData[]): string[] {
  const ids: string[] = [];
  for (const n of nodes) {
    ids.push(n.id);
    if (n.children?.length) ids.push(...getAllIds(n.children));
  }
  return ids;
}

function findNode(nodes: TreeNodeData[], id: string): TreeNodeData | undefined {
  for (const n of nodes) {
    if (n.id === id) return n;
    if (n.children) {
      const found = findNode(n.children, id);
      if (found) return found;
    }
  }
}

function handleSelect(id: string) {
  const node = findNode(props.nodes, id);
  emit("select", id, node);

  if (!props.selectable && !props.checkable) return;
  const current = [...props.modelValue];
  const idx = current.indexOf(id);
  if (idx >= 0) {
    current.splice(idx, 1);
  } else {
    current.push(id);
  }
  emit("update:modelValue", current);
}

function handleExpand(id: string) {
  const expanded = [...internalExpanded.value];
  const idx = expanded.indexOf(id);
  if (idx >= 0) {
    expanded.splice(idx, 1);
  } else {
    expanded.push(id);
  }
  internalExpanded.value = expanded;
  emit("update:expanded", expanded);
}

function handleCheck(id: string, checked: boolean) {
  const current = [...props.modelValue];
  if (checked && !current.includes(id)) {
    current.push(id);
  } else {
    const idx = current.indexOf(id);
    if (idx >= 0) current.splice(idx, 1);
  }
  emit("update:modelValue", current);
}

const skinTree = computed(() => resolveSkin("LuTree"));
</script>

<template>
  <div :class="skinTree" role="tree">
    <LuTreeNode
      v-for="node in nodes"
      :key="node.id"
      :node="node"
      :selected="modelValue"
      :expanded="internalExpanded"
      :selectable="selectable"
      :checkable="checkable"
      @select="handleSelect"
      @expand="handleExpand"
      @check="handleCheck"
    />
  </div>
</template>
