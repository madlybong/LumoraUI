<template>
  <div v-bind="$attrs" :class="resolvedSkin">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";

const props = defineProps<{
  dock?: "top" | "bottom" | "left" | "right" | "fill";
  variant?: string;
}>();

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => [
  resolveSkin("LuDockItem", props.dock ?? props.variant)
]);
</script>
