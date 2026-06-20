<template>
  <component :is="as" :class="['lu-card__body', variant && `lu-card__body--${variant}`]">
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
