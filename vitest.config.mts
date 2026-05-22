import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue() as any],
  test: {
    environment: "happy-dom",
    globals: true,
    alias: {
      "vue-echarts": resolve(__dirname, "packages/core/src/__mocks__/empty.ts"),
      "@tiptap/vue-3": resolve(__dirname, "packages/core/src/__mocks__/empty.ts"),
      "@tiptap/starter-kit": resolve(__dirname, "packages/core/src/__mocks__/empty.ts"),
      "@tiptap/extension-placeholder": resolve(__dirname, "packages/core/src/__mocks__/empty.ts"),
      "echarts/core": resolve(__dirname, "packages/core/src/__mocks__/empty.ts"),
      "echarts/charts": resolve(__dirname, "packages/core/src/__mocks__/empty.ts"),
      "echarts/components": resolve(__dirname, "packages/core/src/__mocks__/empty.ts"),
      "echarts/renderers": resolve(__dirname, "packages/core/src/__mocks__/empty.ts")
    }
  },
});
