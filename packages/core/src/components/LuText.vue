<template>
  <component :is="as ?? 'span'" v-bind="$attrs" :class="['lu-text', variant && `lu-text--${variant}`]">
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant?: string;
  as?: string;
}>();
</script>
