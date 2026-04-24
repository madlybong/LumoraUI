<template>
  <div v-bind="$attrs" :class="resolvedSkin">
    <LuText :as="level" variant="page-title">{{ title }}</LuText>
    <LuText v-if="description" as="p" variant="page-subtitle" class="mt-2">{{ description }}</LuText>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";
import LuText from "./LuText.vue";

const props = withDefaults(defineProps<{
  variant?: string;
  title: string;
  description?: string;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}>(), {
  level: "h1"
});

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => resolveSkin("LuPageHeader", props.variant));
</script>
