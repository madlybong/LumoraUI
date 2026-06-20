<template>
  <component :is="as" :class="['lu-card__media', variant && `lu-card__media--${variant}`]">
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
