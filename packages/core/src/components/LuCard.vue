<template>
  <component :is="as" v-bind="$attrs" :class="['lu-card', variant && `lu-card--${variant}`]">
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: string;
  as?: string;
}>(), {
  as: "div"
});
</script>
