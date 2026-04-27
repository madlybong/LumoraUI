<template>
  <div v-bind="$attrs" :class="resolvedSkin"></div>
</template>

<script setup lang="ts">
import { computed, inject, unref, type Ref } from "vue";
import { useLumoraConfig } from "../context";

const props = defineProps<{
  variant?: string;
}>();

const direction = inject<Ref<"horizontal" | "vertical"> | "horizontal">("lu-split-direction", "horizontal");

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => [
  resolveSkin("LuSplitResizer", unref(direction) === "horizontal" ? "horizontal" : "vertical")
]);
</script>
