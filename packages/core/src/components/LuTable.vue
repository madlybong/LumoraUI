<template>
  <table v-bind="$attrs" :class="['lu-table', variant && `lu-table--${variant}`]">
    <slot />
  </table>
</template>

<script setup lang="ts">
const props = defineProps<{ variant?: string }>();
</script>
