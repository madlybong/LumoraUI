<template>
  <component :is="as" :class="['lu-card__subtitle', variant && `lu-card__subtitle--${variant}`]">
    <slot />
  </component>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  as?: string;
  variant?: string;
}>(), {
  as: 'p'
});
</script>
