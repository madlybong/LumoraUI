<script setup lang="ts">
import { computed, ref } from "vue";
import { useLumoraConfig } from "../context";
import { useChartTheme } from "../composables/useChartTheme";
import { lazyVChart } from "../composables/lazyVChart";

defineOptions({ name: "LuDoughnutChart" });

export interface DoughnutDataset {
  label: string;
  value: number;
  color?: string;
}

const props = withDefaults(defineProps<{
  datasets: DoughnutDataset[];
  height?: number;
  showLegend?: boolean;
  innerLabel?: string;
  formatValue?: (v: number) => string;
}>(), {
  height: 260,
  showLegend: true,
});

const { resolveSkin } = useLumoraConfig();

const VChart = lazyVChart("LuDoughnutChart");

const isDark = ref(
  typeof window !== "undefined" && document.documentElement.classList.contains("dark")
);
const { resolveColor, echartsTheme } = useChartTheme(isDark);

const FALLBACK_COLORS = ["primary", "success", "info", "warning", "danger", "zinc"];

const option = computed(() => ({
  ...echartsTheme.value,
  legend: props.showLegend ? {
    ...echartsTheme.value.legend,
    orient: "horizontal",
    bottom: 0,
  } : undefined,
  tooltip: {
    ...echartsTheme.value.tooltip,
    trigger: "item",
  },
  series: [{
    type: "pie",
    radius: ["50%", "75%"],
    center: ["50%", props.showLegend ? "45%" : "50%"],
    label: props.innerLabel
      ? {
          show: true,
          position: "center",
          formatter: props.innerLabel,
          fontSize: 16,
          fontWeight: "bold",
          color: isDark.value ? "#fafafa" : "#18181b",
        }
      : { show: false },
    data: props.datasets.map((d, i) => ({
      name: d.label,
      value: d.value,
      itemStyle: {
        color: resolveColor(d.color ?? FALLBACK_COLORS[i % FALLBACK_COLORS.length]),
      },
    })),
  }],
}));

const skinContainer = computed(() => resolveSkin("LuDoughnutChart"));
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
