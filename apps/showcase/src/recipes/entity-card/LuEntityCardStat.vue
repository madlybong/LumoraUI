<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from '@astrake/lumora-ui';
import { LuText } from '@astrake/lumora-ui';

defineOptions({ name: "LuEntityCardStat" });

const props = defineProps<{
  label: string;
  value: string | number;
  delta?: string;
  deltaUp?: boolean;
}>();

const { resolveSkin } = useLumoraConfig();

const skinStat = computed(() => resolveSkin("LuEntityCardStat"));
const skinLabel = computed(() => resolveSkin("LuEntityCardStatLabel"));
const skinValue = computed(() => resolveSkin("LuEntityCardStatValue"));
</script>

<template>
  <div :class="skinStat">
    <LuText :class="skinLabel">{{ label }}</LuText>
    <LuText :class="skinValue">{{ value }}</LuText>
    <LuText
      v-if="delta !== undefined"
      :variant="deltaUp ? 'metric-delta-up' : 'metric-delta-down'"
    >
      {{ deltaUp ? "▲" : "▼" }} {{ delta }}
    </LuText>
  </div>
</template>
