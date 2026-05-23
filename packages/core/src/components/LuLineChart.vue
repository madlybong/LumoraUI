<script setup lang="ts">
import { computed, ref } from "vue";
import { useLumoraConfig } from "../context";
import { useChartTheme } from "../composables/useChartTheme";
import { lazyVChart } from "../composables/lazyVChart";

defineOptions({ name: "LuLineChart" });

export interface LineDataset {
  label: string;
  data: number[];
  color?: string;
  smooth?: boolean;
  area?: boolean;
}

const props = withDefaults(defineProps<{
  labels: string[];
  datasets: LineDataset[];
  height?: number;
  showLegend?: boolean;
  formatValue?: (v: number) => string;
}>(), {
  height: 260,
  showLegend: true,
});

const { resolveSkin } = useLumoraConfig();

const VChart = lazyVChart("LuLineChart");

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
  xAxis: { type: "category", data: props.labels, ...echartsTheme.value.categoryAxis },
  yAxis: { type: "value", ...echartsTheme.value.valueAxis },
  tooltip: {
    ...echartsTheme.value.tooltip,
    trigger: "axis",
  },
  series: props.datasets.map(d => ({
    name: d.label,
    type: "line",
    smooth: d.smooth ?? true,
    data: d.data,
    itemStyle: { color: resolveColor(d.color ?? "primary") },
    lineStyle: { color: resolveColor(d.color ?? "primary"), width: 2 },
    areaStyle: d.area ? { opacity: 0.12 } : undefined,
  })),
}));

const skinContainer = computed(() => resolveSkin("LuLineChart"));
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
