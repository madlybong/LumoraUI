<template>
  <div v-bind="$attrs" :class="['lu-divider', `lu-divider--${orientation}`, variant && `lu-divider--${variant}`]"></div>
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
</script>
