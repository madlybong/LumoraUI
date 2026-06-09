import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { readFileSync } from 'fs'

import tailwindcss from '@tailwindcss/vite'

const coreDir = resolve(__dirname, '../../packages/core/src')

// Read version from the canonical VERSION file — works under Bun, npm, yarn, pnpm
const appVersion = readFileSync(resolve(__dirname, '../../VERSION'), 'utf8').trim()

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    // Use ordered array — specific paths MUST come before the generic package alias
    alias: [
      { find: '@astrake/lumora-ui/style',        replacement: resolve(coreDir, 'styles/index.css') },
      { find: '@astrake/lumora-ui/composables',  replacement: resolve(coreDir, 'composables/index.ts') },
      { find: '@astrake/lumora-ui/layout',       replacement: resolve(coreDir, 'layout/index.ts') },
      { find: '@astrake/lumora-ui/shell',        replacement: resolve(coreDir, 'shell/index.ts') },
      { find: '@astrake/lumora-ui/components',   replacement: resolve(coreDir, 'components/index.ts') },
      { find: '@astrake/lumora-ui',              replacement: resolve(coreDir, 'index.ts') },
      { find: '@',                               replacement: resolve(__dirname, './src') },
    ],
  },
  define: {
    __APP_VERSION__: JSON.stringify(appVersion),
  },
  build: {
    sourcemap: false,
  },
})
