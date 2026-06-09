<script setup lang="ts">
import { computed } from "vue";
import { LuText } from '@astrake/lumora-ui';

defineOptions({ name: "LuEntityCardStat" });

const props = defineProps<{
  label: string;
  value: string | number;
  delta?: string;
  deltaUp?: boolean;
}>();

const skinStat = computed(() => `sc-entity-card-stat`);
const skinLabel = computed(() => `sc-entity-card-stat-label`);
const skinValue = computed(() => `sc-entity-card-stat-value`);
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
