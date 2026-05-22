# Lumora UI — AI Agent Knowledge Base

Welcome! This folder (`.agent/`) contains the localized, authoritative developer and architecture context for the `@astrake/lumora-ui` monorepo. 

Before making any changes, please read the relevant markdown context file below depending on the task you are performing.

---

## Knowledge Index

| Document | When to Read | Focus Area |
|:---|:---|:---|
| 📜 **[rules.md](./rules.md)** | **Read First** | Non-negotiable architectural principles, headless-first coding, surface boundaries, validation commands. |
| 🏗️ **[architecture.md](./architecture.md)** | When refactoring core APIs | Layer model, skin resolution flow, `shallowReactive` context, Tailwind v4 integration. |
| 🧩 **[component-authoring.md](./component-authoring.md)** | When creating or modifying components | Step-by-step checklist to write `Lu*`, `LuDesktop*`, `LuMobile*`, and `LuEmbedded*` components. |
| 🎨 **[skin-authoring.md](./skin-authoring.md)** | When styling components or updating presets | `SkinMap` type specifications, default skin structures, slot keys, merge precedence. |
| 🧪 **[testing.md](./testing.md)** | When writing tests or fixing logic bugs | Vitest configurations, `happy-dom` instructions, `@vue/test-utils` examples. |
| 📦 **[release.md](./release.md)** | When releasing or prepping a new package version | Version syncing workflow, conventional commit guidelines, automated release pipelines. |
| 💻 **[showcase.md](./showcase.md)** | When demonstrating component capabilities | Showcase app layout, how to write preview views, Zero-Raw-HTML layout rule. |
| 📖 **[consumer-quick-ref.md](./consumer-quick-ref.md)** | When writing documentation or consumer apps | A cheat sheet of API usage, integration rules, and package dependencies for consumer apps. |

---

## Quick Command Checklist

Run these commands at the monorepo root to verify changes:
* **Vite Showcase Dev Server**: `bun run dev`
* **Static Typecheck**: `bun run check`
* **Run Unit Tests**: `bun test`
* **Vite Library & Showcase Build**: `bun run build`
