<template>
  <div v-bind="$attrs" :class="resolvedSkin">
    <LuText :as="level" variant="page-title">{{ title }}</LuText>
    <LuText v-if="description" as="p" variant="page-subtitle" class="mt-2">{{ description }}</LuText>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { LuText } from '@astrake/lumora-ui';

const props = withDefaults(defineProps<{
  variant?: string;
  title: string;
  description?: string;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}>(), {
  level: "h1"
});
const resolvedSkin = computed(() => `sc-page-header ${props.variant && props.variant !== "default" ? "sc-page-header--"+props.variant : ""}`.trim());
</script>
