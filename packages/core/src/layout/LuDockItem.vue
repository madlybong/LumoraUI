<template>
  <div v-bind="$attrs" :class="resolvedSkin">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  dock?: "top" | "bottom" | "left" | "right" | "fill";
  variant?: string;
}>();
const resolvedSkin = computed(() => `lu-dock-item ${props.dock ? "lu-dock-item--"+props.dock : props.variant && props.variant !== "default" ? "lu-dock-item--"+props.variant : ""}`.trim());
</script>
