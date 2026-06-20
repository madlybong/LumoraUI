<template>
  <component :is="as" :class="['lu-card__footer', variant && `lu-card__footer--${variant}`]">
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
