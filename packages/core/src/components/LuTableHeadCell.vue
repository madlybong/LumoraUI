<template>
  <th v-bind="$attrs" :class="['lu-table-head-cell', variant && `lu-table-head-cell--${variant}`]">
    <slot />
  </th>
</template>

<script setup lang="ts">
const props = defineProps<{ variant?: string }>();
</script>
