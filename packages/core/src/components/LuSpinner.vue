<template>
  <span :class="['lu-spinner', variant && `lu-spinner--${variant}`]" role="status" aria-label="Loading"></span>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant?: string;
}>();
</script>
