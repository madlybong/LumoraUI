<template>
  <component :is="as" v-bind="$attrs" :class="resolvedSkin">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(defineProps<{
  variant?: string;
  as?: string;
}>(), {
  as: 'div'
});
const resolvedSkin = computed(() => `lu-fill ${props.variant && props.variant !== "default" ? "lu-fill--"+props.variant : ""}`.trim());
</script>
