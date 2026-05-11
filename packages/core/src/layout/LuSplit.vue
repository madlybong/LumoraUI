<template>
  <div v-bind="$attrs" :class="resolvedSkin">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, provide, readonly } from "vue";
import { useLumoraConfig } from "../context";

const props = defineProps<{
  direction?: "horizontal" | "vertical";
  variant?: string;
}>();

const direction = computed(() => props.direction ?? "horizontal");
provide("lu-split-direction", readonly(direction));

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => resolveSkin("LuSplit", props.direction ?? props.variant));
</script>
