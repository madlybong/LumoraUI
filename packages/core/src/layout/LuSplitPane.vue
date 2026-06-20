<template>
  <div v-bind="$attrs" :class="resolvedSkin" :style="style">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject, ref, unref, type Ref } from "vue";

const props = defineProps<{
  minSize?: number;
  maxSize?: number;
  defaultSize?: number;
  variant?: string;
  /** Space token scale padding, e.g. pad="4" → padding: var(--lu-space-4) */
  pad?: string | number;
}>();

const direction = inject<Ref<"horizontal" | "vertical"> | "horizontal">("lu-split-direction", "horizontal");
const size = ref(props.defaultSize);

const style = computed(() => {
  const baseStyle: Record<string, string> = {};
  if (props.pad !== undefined) {
    baseStyle.padding = `var(--lu-space-${props.pad})`;
  }
  if (size.value === undefined) return { ...baseStyle, flex: "1 1 0%" };
  const dim = `${size.value}px`;
  return unref(direction) === "horizontal"
    ? { ...baseStyle, width: dim, flex: `0 0 ${dim}` }
    : { ...baseStyle, height: dim, flex: `0 0 ${dim}` };
});
const resolvedSkin = computed(() => `lu-split-pane ${props.variant && props.variant !== "default" ? "lu-split-pane--"+props.variant : ""}`.trim());
</script>
