<template>
  <div v-bind="$attrs" :class="resolvedSkin">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";

const props = defineProps<{
  direction?: "vertical" | "horizontal";
  variant?: string;
}>();

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() =>
  resolveSkin("LuDock", props.direction ?? props.variant) ||
  (props.direction === "horizontal"
    ? "flex flex-row h-full w-full overflow-hidden"
    : "flex flex-col h-full w-full overflow-hidden")
);
</script>
