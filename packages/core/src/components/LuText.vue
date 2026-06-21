<template>
  <component :is="as ?? 'span'" v-bind="$attrs" :class="['lu-text', variant && `lu-text--${variant}`]" :style="resolvedStyles">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

/**
 * Text primitive for typography.
 *
 * 🤖 **AI Agent Usage Notes (Zero-Raw-HTML Adherence)**:
 * - ⛔ NEVER use raw `<span>` or `<div>` with text sizing classes (e.g., `text-sm`, `font-bold`).
 * - Always use `<LuText>` for readable text.
 * - Variants control size and intent: `h1`, `h2`, `h3`, `body`, `caption`, `muted`, `label`.
 * - To map to semantic tags, use the `as` prop (e.g., `<LuText as="h2" variant="h3">`).
 */
const props = defineProps<{
  variant?: string;
  as?: string;
  color?: string;
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
}>();

const resolvedStyles = computed(() => {
  const styles: Record<string, string> = {};
  
  if (props.color) {
    if (props.color.startsWith('--') || /[^a-zA-Z0-9-]/.test(props.color)) {
      styles.color = props.color;
    } else {
      styles.color = `var(--lu-color-${props.color})`;
    }
  }

  if (props.weight) {
    styles.fontWeight = `var(--lu-font-${props.weight})`;
  }

  return styles;
});
</script>
