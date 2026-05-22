import { computed, type Ref } from "vue";

/**
 * Maps semantic colour tokens to resolved CSS colour values.
 * Reads `--lu-pipeline-*` custom properties from the document root so the
 * theme is always skin-aware and dark-mode-reactive.
 */
export function useChartTheme(isDark?: Ref<boolean>) {
  function getCSSVar(name: string, fallback: string): string {
    if (typeof window === "undefined") return fallback;
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
  }

  const SEMANTIC_COLORS: Record<string, () => string> = {
    primary:  () => getCSSVar("--color-rose-500",    "#f43f5e"),
    success:  () => getCSSVar("--lu-pipeline-success", "#10b981"),
    warning:  () => getCSSVar("--lu-pipeline-warning", "#f59e0b"),
    danger:   () => getCSSVar("--lu-pipeline-danger",  "#f43f5e"),
    info:     () => getCSSVar("--lu-pipeline-info",    "#3b82f6"),
    zinc:     () => getCSSVar("--color-zinc-400",     "#a1a1aa"),
  };

  function resolveColor(token: string): string {
    const resolver = SEMANTIC_COLORS[token];
    if (resolver) return resolver();
    // If consumer passes a raw CSS colour, use it directly
    return token;
  }

  /** Build an ECharts theme object that respects dark/light mode */
  const echartsTheme = computed(() => {
    const dark = isDark?.value ?? false;

    return {
      backgroundColor: "transparent",
      textStyle: {
        color: dark ? "#a1a1aa" : "#52525b",
        fontFamily: "inherit",
        fontSize: 12,
      },
      title: {
        textStyle: { color: dark ? "#fafafa" : "#18181b" },
      },
      legend: {
        textStyle: { color: dark ? "#a1a1aa" : "#52525b" },
      },
      tooltip: {
        backgroundColor: dark ? "#27272a" : "#ffffff",
        borderColor: dark ? "#3f3f46" : "#e4e4e7",
        textStyle: { color: dark ? "#fafafa" : "#18181b" },
        extraCssText: "border-radius:10px;box-shadow:0 4px 24px rgba(0,0,0,.12);",
      },
      categoryAxis: {
        axisLine:  { lineStyle: { color: dark ? "#3f3f46" : "#e4e4e7" } },
        axisLabel: { color: dark ? "#71717a" : "#71717a" },
        splitLine: { lineStyle: { color: dark ? "#27272a" : "#f4f4f5" } },
      },
      valueAxis: {
        axisLine:  { lineStyle: { color: dark ? "#3f3f46" : "#e4e4e7" } },
        axisLabel: { color: dark ? "#71717a" : "#71717a" },
        splitLine: { lineStyle: { color: dark ? "#27272a" : "#f4f4f5" } },
      },
    };
  });

  return { resolveColor, echartsTheme };
}
