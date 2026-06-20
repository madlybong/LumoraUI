<template>
  <component :is="as" v-bind="$attrs" :class="resolvedClasses" :style="resolvedStyles">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

/**
 * Flexbox stack layout container.
 * 
 * 🤖 **AI Agent Usage Notes (Zero-Raw-HTML Adherence)**:
 * - Use `LuStack` as the primary tool for building Flexbox-based layouts. 
 * - NEVER use `<div style="display:flex">` or `<div class="flex">`.
 * - **IMPORTANT**: By default, `LuStack` has intrinsic padding to prevent cramped content. 
 *   If you are using `LuStack` PURELY as a structural/alignment wrapper (e.g., to align items in a header), 
 *   you MUST explicitly set `pad="0"` to avoid the "blowfish" layout inflation bug.
 * 
 * ⛔ Do NOT add a `class` prop with Tailwind utilities for layout, rely on `gap`, `pad`, `align`, and `justify`.
 */
interface LuStackProps {
  /** Flex direction. @default 'horizontal' (if unset) */
  direction?: "vertical" | "horizontal";
  /** Visual variant. Resolves to BEM modifier `lu-stack--{variant}`. */
  variant?: string;
  /** HTML element to render as. @default 'div' */
  as?: string;
  /** Space token scale gap, e.g. gap="4" → gap: var(--lu-space-4) */
  gap?: string | number;
  /** Flexbox align-items property */
  align?: "center" | "start" | "end" | "stretch" | "baseline";
  /** Flexbox justify-content property */
  justify?: "center" | "start" | "end" | "between" | "around" | "evenly";
  /** Space token scale padding, e.g. pad="4" → padding: var(--lu-space-4) */
  pad?: string | number;
}

const props = withDefaults(defineProps<LuStackProps>(), {
  as: 'div'
});

const ALIGN_VALUES: Record<string, string> = {
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
  stretch: 'stretch',
  baseline: 'baseline',
};

const JUSTIFY_VALUES: Record<string, string> = {
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
};

const resolvedClasses = computed(() => {
  return `lu-stack ${props.direction ? "lu-stack--"+props.direction : props.variant && props.variant !== "default" ? "lu-stack--"+props.variant : ""}`.trim();
});

const resolvedStyles = computed(() => {
  return {
    gap: props.gap !== undefined ? `var(--lu-space-${props.gap})` : undefined,
    padding: props.pad !== undefined ? `var(--lu-space-${props.pad})` : undefined,
    alignItems: props.align ? ALIGN_VALUES[props.align] : undefined,
    justifyContent: props.justify ? JUSTIFY_VALUES[props.justify] : undefined,
  };
});
</script>
