<template>
  <div v-bind="$attrs" :class="trackSkin">
    <div :class="fillSkin" :style="{ width: `${percent}%` }"></div>
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

const { resolveSkin } = useLumoraConfig();
const trackSkin = computed(() => resolveSkin("LuProgressBar", props.variant));
const fillSkin = computed(() => resolveSkin("LuProgressBarFill", props.variant));
</script>
