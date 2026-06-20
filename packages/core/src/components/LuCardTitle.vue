<template>
  <component :is="as" :class="['lu-card__title', variant && `lu-card__title--${variant}`]">
    <slot />
  </component>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  as?: string;
  variant?: string;
}>(), {
  as: 'h3'
});
</script>
