<template>
  <tr v-bind="$attrs" :class="['lu-table-row', variant && `lu-table-row--${variant}`]">
    <slot />
  </tr>
</template>

<script setup lang="ts">
const props = defineProps<{ variant?: string }>();
</script>
