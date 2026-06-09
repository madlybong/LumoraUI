<template>
  <tbody v-bind="$attrs" :class="['lu-table-body', variant && `lu-table-body--${variant}`]">
    <slot />
  </tbody>
</template>

<script setup lang="ts">
const props = defineProps<{ variant?: string }>();
</script>
