<template>
  <svg :class="['lu-spinner', variant && `lu-spinner--${variant}`]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" role="status" aria-label="Loading">
    <circle cx="12" cy="12" r="10" class="lu-spinner__circle" />
  </svg>
</template>

<script setup lang="ts">
/**
 * Loading spinner component.
 *
 * 🤖 **AI Agent Usage Notes (Zero-Raw-HTML Adherence)**:
 * - ⛔ NEVER use raw SVGs or CSS spin animations for loading states.
 * - Always use `<LuSpinner>` to indicate background work.
 */
const props = defineProps<{
  variant?: string;
}>();
</script>
