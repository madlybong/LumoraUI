<template>
  <component :is="as" v-bind="$attrs" :class="resolvedSkin" :style="resolvedStyles">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

/**
 * A flex child that never shrinks. Declares a fixed dimension.
 * ⛔ Do NOT use inline `style="width:"` — use the `width` prop instead.
 */
interface LuFixedProps {
  /** HTML element to render as. @default 'div' */
  as?: string;
  /** Fixed width in px (number) or any CSS value (string). Sets `width` + `flex-basis`. */
  width?: string | number;
  /** Fixed height in px (number) or any CSS value (string). Sets `height` + `flex-basis`. */
  height?: string | number;
  /** Minimum width floor. */
  minWidth?: string | number;
  /** Minimum height floor. */
  minHeight?: string | number;
  /** Explicit flex-basis override. */
  basis?: string;
  /** Visual variant. */
  variant?: string;
}

const props = withDefaults(defineProps<LuFixedProps>(), {
  as: 'div'
});

const resolvedSkin = computed(() => `lu-fixed ${props.variant && props.variant !== "default" ? "lu-fixed--"+props.variant : ""}`.trim());

const formatDimension = (val: string | number | undefined): string | undefined => {
  if (val === undefined) return undefined;
  return typeof val === 'number' ? `${val}px` : val;
};

const resolvedStyles = computed(() => {
  const styles: Record<string, string> = {};
  
  if (props.width !== undefined) {
    const w = formatDimension(props.width);
    if (w) {
      styles.width = w;
      styles.flexBasis = w;
    }
  }
  
  if (props.height !== undefined) {
    const h = formatDimension(props.height);
    if (h) {
      styles.height = h;
      styles.flexBasis = h;
    }
  }
  
  if (props.minWidth !== undefined) {
    const mw = formatDimension(props.minWidth);
    if (mw) {
      styles.minWidth = mw;
    }
  }
  
  if (props.minHeight !== undefined) {
    const mh = formatDimension(props.minHeight);
    if (mh) {
      styles.minHeight = mh;
    }
  }
  
  if (props.basis !== undefined) {
    styles.flexBasis = props.basis;
  }
  
  return styles;
});
</script>

