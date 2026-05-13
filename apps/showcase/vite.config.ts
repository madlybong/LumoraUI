import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

import tailwindcss from '@tailwindcss/vite'

const coreDir = resolve(__dirname, '../../packages/core/src')

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    // Use ordered array — specific paths MUST come before the generic package alias
    alias: [
      { find: '@astrake/lumora-ui/style',        replacement: resolve(coreDir, 'lumora.css') },
      { find: '@astrake/lumora-ui/composables',  replacement: resolve(coreDir, 'composables/index.ts') },
      { find: '@astrake/lumora-ui/layout',       replacement: resolve(coreDir, 'layout/index.ts') },
      { find: '@astrake/lumora-ui/shell',        replacement: resolve(coreDir, 'shell/index.ts') },
      { find: '@astrake/lumora-ui/components',   replacement: resolve(coreDir, 'components/index.ts') },
      { find: '@astrake/lumora-ui/skins',        replacement: resolve(coreDir, 'skins/index.ts') },
      { find: '@astrake/lumora-ui',              replacement: resolve(coreDir, 'index.ts') },
      { find: '@',                               replacement: resolve(__dirname, './src') },
    ],
  },
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
  build: {
    sourcemap: false,
  },
})
