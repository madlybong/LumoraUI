<template>
  <td v-bind="$attrs" :class="['lu-table-cell', variant && `lu-table-cell--${variant}`]">
    <slot />
  </td>
</template>

<script setup lang="ts">
const props = defineProps<{ variant?: string }>();
</script>
