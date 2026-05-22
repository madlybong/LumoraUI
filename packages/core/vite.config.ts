import { resolve } from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const entries = {
  index: resolve(__dirname, "src/index.ts"),
  "components/index": resolve(__dirname, "src/components/index.ts"),
  "layout/index": resolve(__dirname, "src/layout/index.ts"),
  "shell/index": resolve(__dirname, "src/shell/index.ts"),
  "composables/index": resolve(__dirname, "src/composables/index.ts"),
  "skins/index": resolve(__dirname, "src/skins/index.ts"),
  tailwind: resolve(__dirname, "src/tailwind.ts"),
};

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: "dist",
    emptyOutDir: false,
    sourcemap: false,
    lib: {
      entry: entries.index,
      formats: ["es"],
    },
    rollupOptions: {
      input: entries,
      external: ["vue", "shiki", "clsx", "tailwind-merge", "vue-echarts", /^@tiptap\//, /^echarts/, /^node:/],
      output: {
        format: "es",
        entryFileNames: "[name].js",
      },
    },
  },
});
