// @astrake/lumora-ui — postinstall peer dependency guide
// Skips itself when running inside the LumoraUI monorepo (development).

import { existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Heuristic: ../../packages/core exists only when inside the monorepo workspace
const isMonorepo =
  existsSync(resolve(__dirname, '../../packages/core')) &&
  existsSync(resolve(__dirname, '../../bun.lock'))

if (isMonorepo) process.exit(0)

const b = '\x1b[1m'
const c = '\x1b[36m'
const r = '\x1b[0m'
const d = '\x1b[2m'

console.log(`
${b}${c}╔═══════════════════════════════════════════════════════════╗
║        @astrake/lumora-ui — Install peer deps            ║
╚═══════════════════════════════════════════════════════════╝${r}

Run this to install all required peer dependencies:

${c}  bun add vue@^3.5.0 tailwindcss @tailwindcss/vite \\
        echarts vue-echarts \\
        @tiptap/vue-3 @tiptap/starter-kit @tiptap/extension-placeholder \\
        vue-draggable-plus${r}

${d}Docs: https://ui.lumora.astrake.com/docs/setup${r}
`)
