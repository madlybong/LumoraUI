<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../../context";
import LuText from "../../components/LuText.vue";

defineOptions({ name: "LuEmbeddedPOSSummary" });

export interface POSSummaryLine {
  label: string;
  value: string | number;
  muted?: boolean;
}

const props = withDefaults(defineProps<{
  lines: POSSummaryLine[];
  total: number | string;
  totalLabel?: string;
  formatCurrency?: (v: number | string) => string;
}>(), {
  totalLabel: "Total",
  formatCurrency: (v: number | string): string => typeof v === "number" ? `$${v.toFixed(2)}` : v,
});

const { resolveSkin } = useLumoraConfig();

const skinSummary = computed(() => resolveSkin("LuEmbeddedPOSSummary"));
const skinRow = computed(() => resolveSkin("LuEmbeddedPOSSummaryRow"));
const skinTotal = computed(() => resolveSkin("LuEmbeddedPOSSummaryTotal"));
</script>

<template>
  <div :class="skinSummary">
    <div
      v-for="line in lines"
      :key="line.label"
      :class="skinRow"
    >
      <LuText :variant="line.muted ? 'muted' : 'body'">{{ line.label }}</LuText>
      <LuText :variant="line.muted ? 'muted' : 'body'" class="tabular-nums">
        {{ formatCurrency(line.value) }}
      </LuText>
    </div>
    <div :class="skinTotal">
      <span>{{ totalLabel }}</span>
      <span class="tabular-nums">{{ formatCurrency(total) }}</span>
    </div>
  </div>
</template>
