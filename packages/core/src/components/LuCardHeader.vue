<template>
  <component :is="as" :class="['lu-card__header', variant && `lu-card__header--${variant}`]">
    <slot />
  </component>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  as?: string;
  variant?: string;
}>(), {
  as: 'div'
});
</script>
