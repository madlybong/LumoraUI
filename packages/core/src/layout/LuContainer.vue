<template>
  <component :is="as" :class="resolvedSkin" :style="resolvedStyle">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

/**
 * Responsive layout container.
 * 
 * 🤖 **AI Agent Usage Notes (Zero-Raw-HTML Adherence)**:
 * - Use `LuContainer` as the main wrapper for page content to constrain maximum width and provide responsive padding.
 * - This replaces the deprecated `<LuStack variant="container">`.
 * - **Variants**:
 *   - `sm`: 40rem (640px) — use for tight prose, login forms, or small modals.
 *   - `md`: 56rem (896px) — use for medium content.
 *   - `lg` (default): 72rem (1152px) — use for documentation and standard pages.
 *   - `xl`: 88rem (1408px) — use for wide dashboard layouts.
 *   - `fluid`: 100% width — use when you want edge-to-edge content (maintains side gutters).
 * - NEVER use `<div style="max-width: ...">` or `class="max-w-*"`.
 */
interface LuContainerProps {
  /** Size preset determining max-width. @default 'lg' */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'fluid';
  /** Per-instance max-width override (CSS value, e.g. '80rem'). Overrides size preset. */
  maxWidth?: string;
  /** HTML element to render as. @default 'div' */
  as?: string;
}

const props = withDefaults(defineProps<LuContainerProps>(), {
  as: 'div',
  size: 'lg'
});

const resolvedSkin = computed(() => {
  return `lu-container lu-container--${props.size}`;
});

const resolvedStyle = computed(() => {
  const styles: Record<string, string> = {};
  if (props.maxWidth) {
    styles.maxWidth = props.maxWidth;
  }
  return styles;
});
</script>
