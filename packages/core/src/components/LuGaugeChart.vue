<script setup lang="ts">
import { computed, ref } from "vue";
import { useLumoraConfig } from "../context";
import { useChartTheme } from "../composables/useChartTheme";
import { lazyVChart } from "../composables/lazyVChart";

defineOptions({ name: "LuGaugeChart" });

const props = withDefaults(defineProps<{
  value: number;
  min?: number;
  max?: number;
  color?: string;
  label?: string;
  height?: number;
  formatValue?: (v: number) => string;
}>(), {
  min: 0,
  max: 100,
  color: "primary",
  height: 220,
});

const { resolveSkin } = useLumoraConfig();

const VChart = lazyVChart("LuGaugeChart");

const isDark = ref(
  typeof window !== "undefined" && document.documentElement.classList.contains("dark")
);
const { resolveColor, echartsTheme } = useChartTheme(isDark);

const displayValue = computed(() =>
  props.formatValue ? props.formatValue(props.value) : `${props.value}`
);

const option = computed(() => ({
  backgroundColor: "transparent",
  tooltip: { ...echartsTheme.value.tooltip, formatter: "{a} <br/>{b} : {c}" },
  series: [{
    type: "gauge",
    min: props.min,
    max: props.max,
    progress: {
      show: true,
      roundCap: true,
      width: 12,
      itemStyle: { color: resolveColor(props.color) },
    },
    axisLine: {
      lineStyle: {
        width: 12,
        color: [[1, isDark.value ? "#27272a" : "#f4f4f5"]],
      },
    },
    pointer: { show: false },
    axisTick: { show: false },
    splitLine: { show: false },
    axisLabel: { show: false },
    anchor: { show: false },
    title: {
      show: !!props.label,
      offsetCenter: [0, "80%"],
      color: isDark.value ? "#71717a" : "#71717a",
      fontSize: 12,
    },
    detail: {
      valueAnimation: true,
      offsetCenter: [0, "20%"],
      fontSize: 28,
      fontWeight: "bold",
      color: isDark.value ? "#fafafa" : "#18181b",
      formatter: displayValue.value,
    },
    data: [{ value: props.value, name: props.label }],
  }],
}));

const skinContainer = computed(() => resolveSkin("LuGaugeChart"));
</script>

<template>
  <div :class="skinContainer" :style="{ height: `${height}px` }">
    <Suspense>
      <VChart :option="option" autoresize />
      <template #fallback>
        <div class="flex items-center justify-center h-full">
          <span :class="resolveSkin('LuChartFallbackText')">Loading chart…</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>
