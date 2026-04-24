<template>
  <div v-bind="$attrs" :class="resolvedSkin" ref="splitRef">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, provide, ref, readonly } from "vue";
import { useLumoraConfig } from "../context";

const props = defineProps<{
  direction?: "horizontal" | "vertical";
  variant?: string;
}>();

const direction = computed(() => props.direction ?? "horizontal");
provide("lu-split-direction", readonly(direction));

const splitRef = ref<HTMLElement | null>(null);

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => resolveSkin("LuSplit", props.direction ?? props.variant));
</script>
