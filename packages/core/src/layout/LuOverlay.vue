<template>
  <div v-bind="$attrs" :class="resolvedSkin">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  variant?: string;
}>();
const resolvedSkin = computed(() => `lu-overlay ${props.variant && props.variant !== "default" ? "lu-overlay--"+props.variant : ""}`.trim());
</script>
