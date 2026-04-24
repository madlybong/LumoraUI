<template>
  <div v-bind="$attrs" :class="resolvedSkin"></div>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import { useLumoraConfig } from "../context";

const props = defineProps<{
  variant?: string;
}>();

const direction = inject<"horizontal" | "vertical">("lu-split-direction", "horizontal");

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => resolveSkin("LuSplitResizer", direction === "horizontal" ? "horizontal" : "vertical"));
</script>
