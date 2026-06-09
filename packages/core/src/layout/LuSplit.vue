<template>
  <div v-bind="$attrs" :class="resolvedSkin">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, provide, readonly } from "vue";

const props = defineProps<{
  direction?: "horizontal" | "vertical";
  variant?: string;
}>();

const direction = computed(() => props.direction ?? "horizontal");
provide("lu-split-direction", readonly(direction));
const resolvedSkin = computed(() => `lu-split ${props.direction ? "lu-split--"+props.direction : props.variant && props.variant !== "default" ? "lu-split--"+props.variant : ""}`.trim());
</script>
