<template>
  <svg :class="['lu-spinner', variant && `lu-spinner--${variant}`]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" role="status" aria-label="Loading">
    <circle cx="12" cy="12" r="10" class="lu-spinner__circle" />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant?: string;
}>();
</script>
