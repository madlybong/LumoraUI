<script setup lang="ts">
/**
 * LuBarChart — skin-aware bar chart powered by Apache ECharts (vue-echarts peer dep).
 * Peer dep: echarts + vue-echarts must be installed by the consumer.
 */
import { computed, ref } from "vue";
import { useLumoraConfig } from "../context";
import { useChartTheme } from "../composables/useChartTheme";
import { lazyVChart } from "../composables/lazyVChart";

defineOptions({ name: "LuBarChart" });

export interface BarDataset {
  label: string;
  data: number[];
  color?: string;
  stack?: string;
}

const props = withDefaults(defineProps<{
  labels: string[];
  datasets: BarDataset[];
  height?: number;
  showLegend?: boolean;
  horizontal?: boolean;
  stacked?: boolean;
  formatValue?: (v: number) => string;
}>(), {
  height: 260,
  showLegend: true,
  horizontal: false,
  stacked: false,
});

const { resolveSkin } = useLumoraConfig();

const VChart = lazyVChart("LuBarChart");

const isDark = ref(
  typeof window !== "undefined" && document.documentElement.classList.contains("dark")
);
const { resolveColor, echartsTheme } = useChartTheme(isDark);

const option = computed(() => ({
  ...echartsTheme.value,
  legend: props.showLegend ? {
    ...echartsTheme.value.legend,
    data: props.datasets.map(d => d.label),
  } : undefined,
  xAxis: props.horizontal
    ? { type: "value", ...echartsTheme.value.valueAxis }
    : { type: "category", data: props.labels, ...echartsTheme.value.categoryAxis },
  yAxis: props.horizontal
    ? { type: "category", data: props.labels, ...echartsTheme.value.categoryAxis }
    : { type: "value", ...echartsTheme.value.valueAxis },
  tooltip: {
    ...echartsTheme.value.tooltip,
    trigger: "axis",
    formatter: props.formatValue
      ? (params: unknown[]) =>
          (params as Array<{ seriesName: string; value: number; marker: string }>)
            .map(p => `${p.marker} ${p.seriesName}: <b>${props.formatValue!(p.value)}</b>`)
            .join("<br/>")
      : undefined,
  },
  series: props.datasets.map(d => ({
    name: d.label,
    type: "bar",
    stack: props.stacked ? (d.stack ?? "total") : undefined,
    data: d.data,
    itemStyle: { color: resolveColor(d.color ?? "primary"), borderRadius: [4, 4, 0, 0] },
  })),
}));

const skinContainer = computed(() => resolveSkin("LuBarChart"));
</script>

<template>
  <div :class="skinContainer" :style="{ height: `${height}px` }">
    <Suspense>
      <VChart :option="option" autoresize />
      <template #fallback>
        <div class="flex items-center justify-center h-full">
          <span class="text-xs text-zinc-400 dark:text-zinc-500">Loading chart…</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>
