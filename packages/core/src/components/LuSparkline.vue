<script setup lang="ts">
import { computed, ref } from "vue";
import { useLumoraConfig } from "../context";
import { useChartTheme } from "../composables/useChartTheme";
import { lazyVChart } from "../composables/lazyVChart";

defineOptions({ name: "LuSparkline" });

const props = withDefaults(defineProps<{
  data: number[];
  color?: string;
  width?: number;
  height?: number;
  area?: boolean;
}>(), {
  color: "primary",
  width: 80,
  height: 32,
  area: false,
});

const { resolveSkin } = useLumoraConfig();

const VChart = lazyVChart("LuSparkline");

const isDark = ref(
  typeof window !== "undefined" && document.documentElement.classList.contains("dark")
);
const { resolveColor, echartsTheme } = useChartTheme(isDark);

const option = computed(() => ({
  backgroundColor: "transparent",
  grid: { top: 0, bottom: 0, left: 0, right: 0 },
  xAxis: { type: "category", show: false },
  yAxis: { type: "value", show: false },
  tooltip: { show: false },
  series: [{
    type: "line",
    data: props.data,
    smooth: true,
    showSymbol: false,
    itemStyle: { color: resolveColor(props.color) },
    lineStyle: { color: resolveColor(props.color), width: 1.5 },
    areaStyle: props.area ? { opacity: 0.15 } : undefined,
  }],
}));

const skinContainer = computed(() => resolveSkin("LuSparkline"));
</script>

<template>
  <span :class="skinContainer" :style="{ width: `${width}px`, height: `${height}px` }">
    <Suspense>
      <VChart :option="option" autoresize />
      <template #fallback><span /></template>
    </Suspense>
  </span>
</template>
