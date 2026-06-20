<template>
  <component :is="as" v-bind="$attrs" :class="resolvedSkin" :style="gridStyle">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

/**
 * CSS Grid layout container.
 * 
 * 🤖 **AI Agent Usage Notes (Zero-Raw-HTML Adherence)**:
 * - Use `LuGrid` as the primary tool for building multi-column Grid layouts.
 * - NEVER use `<div style="display:grid">` or `<div class="grid">`.
 * - Similar to `LuStack`, `LuGrid` supports a `pad` prop. Set `pad="0"` if you are using the grid purely for column arrangement without needing internal bounding padding.
 * 
 * ⛔ Do NOT add a `class` prop with Tailwind utilities for column definitions, use the `cols`, `smCols`, `mdCols`, and `lgCols` props.
 */
interface LuGridProps {
  /** Total number of columns. */
  cols?: number;
  /** Columns at the 'sm' breakpoint. */
  smCols?: number;
  /** Columns at the 'md' breakpoint. */
  mdCols?: number;
  /** Columns at the 'lg' breakpoint. */
  lgCols?: number;
  /** Visual variant. Resolves to BEM modifier `lu-grid--{variant}`. */
  variant?: string;
  /** HTML element to render as. @default 'div' */
  as?: string;
  /** Space token scale padding, e.g. pad="4" → padding: var(--lu-space-4) */
  pad?: string | number;
}

const props = withDefaults(defineProps<LuGridProps>(), {
  as: 'div'
});

const colsClass = computed(() => {
  const map: Record<number, string> = {1:'grid-cols-1',2:'grid-cols-2',3:'grid-cols-3',4:'grid-cols-4',5:'grid-cols-5',6:'grid-cols-6',12:'grid-cols-12'};
  const sm = props.smCols && map[props.smCols] ? `sm:${map[props.smCols]}` : '';
  const md = props.mdCols && map[props.mdCols] ? `md:${map[props.mdCols]}` : '';
  const lg = props.lgCols && map[props.lgCols] ? `lg:${map[props.lgCols]}` : '';
  return [sm, md, lg].filter(Boolean).join(' ');
});
const resolvedSkin = computed(() => [`lu-grid ${props.variant && props.variant !== "default" ? "lu-grid--"+props.variant : ""}`.trim(), colsClass.value].filter(Boolean).join(" "));

const gridStyle = computed(() => {
  const baseStyle: Record<string, string> = {};
  if (props.pad !== undefined) {
    baseStyle.padding = `var(--lu-space-${props.pad})`;
  }
  if (props.cols) {
    baseStyle.gridTemplateColumns = `repeat(${props.cols}, minmax(0, 1fr))`;
  }
  return baseStyle;
});
</script>
