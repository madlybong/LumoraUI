import { defineAsyncComponent } from "vue";

/**
 * Lazily loads the VChart component from vue-echarts (peer dep).
 * Prints a helpful install message if the peer dep is absent.
 *
 * We cast through `unknown` to avoid vue-tsc failing when vue-echarts
 * is not installed as a direct dependency of this library.
 */
export function lazyVChart(componentName: string) {
  return defineAsyncComponent(() =>
    // @ts-ignore vue-echarts is a peer dep not bundled with the library
    (import("vue-echarts" /* @vite-ignore */) as Promise<{ default?: object } & Record<string, object>>)
      .then((m: { default?: object } & Record<string, object>) => (m.default ?? m) as object)
      .catch(() => {
        console.warn(
          `[${componentName}] "vue-echarts" peer dep not found.\n` +
          "Install it with: npm i vue-echarts echarts"
        );
        return { template: "<div></div>" };
      })
  );
}
