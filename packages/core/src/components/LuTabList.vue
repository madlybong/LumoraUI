<template>
  <div v-bind="$attrs" :class="['lu-tab-list', variant && `lu-tab-list--${variant}`]">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ variant?: string }>();
</script>
