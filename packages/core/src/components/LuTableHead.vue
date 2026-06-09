<template>
  <thead v-bind="$attrs" :class="['lu-table-head', variant && `lu-table-head--${variant}`]">
    <slot />
  </thead>
</template>

<script setup lang="ts">
const props = defineProps<{ variant?: string }>();
</script>
