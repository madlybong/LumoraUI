<template>
  <div v-bind="$attrs" :class="resolvedSkin" :style="resolvedStyles">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, provide, readonly } from "vue";

/**
 * Resizable split pane container.
 * 
 * 🤖 **AI Agent Usage Notes (Zero-Raw-HTML Adherence)**:
 * - Use `LuSplit` combined with `LuSplitPane` and `LuSplitResizer` to create resizable views.
 * - **IMPORTANT**: By default, `LuSplit` may have intrinsic padding to prevent cramped content. 
 *   If you are using `LuSplit` PURELY as a structural wrapper to split areas (e.g. standard sidebar/main layout), 
 *   you MUST explicitly set `pad="0"`.
 */
interface LuSplitProps {
  /** Direction of the split. @default 'horizontal' */
  direction?: "horizontal" | "vertical";
  /** Visual variant. Resolves to BEM modifier `lu-split--{variant}`. */
  variant?: string;
  /** Space token scale padding, e.g. pad="4" → padding: var(--lu-space-4) */
  pad?: string | number;
}
const props = defineProps<LuSplitProps>();

const direction = computed(() => props.direction ?? "horizontal");
provide("lu-split-direction", readonly(direction));
const resolvedSkin = computed(() => `lu-split ${props.direction ? "lu-split--"+props.direction : props.variant && props.variant !== "default" ? "lu-split--"+props.variant : ""}`.trim());
const resolvedStyles = computed(() => ({
  padding: props.pad !== undefined ? `var(--lu-space-${props.pad})` : undefined,
}));
</script>
