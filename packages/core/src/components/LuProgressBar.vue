<template>
  <div v-bind="$attrs" :class="['lu-progress-bar', variant && `lu-progress-bar--${variant}`]">
    <div class="lu-progress-bar__indicator" :style="{ width: `${percent}%` }"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";

const props = defineProps<{ variant?: string; value: number; max?: number }>();

const percent = computed(() => {
  const m = props.max ?? 100;
  return Math.max(0, Math.min(100, (props.value / m) * 100));
});
</script>
