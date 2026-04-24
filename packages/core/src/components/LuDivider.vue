<template>
  <div v-bind="$attrs" :class="resolvedSkin"></div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";

const props = withDefaults(defineProps<{
  variant?: string;
  orientation?: "horizontal" | "vertical";
}>(), {
  orientation: "horizontal"
});

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => resolveSkin("LuDivider", props.variant || props.orientation));
</script>
