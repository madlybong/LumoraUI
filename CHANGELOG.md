# Changelog

## Unreleased

---

## [0.10.0] — 2026-06-21

### Added

- Added `LuContainer` component for fluid container widths.
- Added `#icon` and `#trailingIcon` slots to `LuButton` for standard icon support.

### Fixed

- Overhauled layout primitives.
- Fixed layout alignment in `DocsSidebar`.
- Removed raw CSS padding styles (`pad="2"`, `justify="between"`) from list structures and improved BEM usage.

### Documentation

- Synced showcase and consumer layout documentation for Auruvi usage context.

---

## [0.9.2] — 2026-06-20

### Documentation
- Updated `CONSUMER_GUIDE.md` with explicit details on using `LuAccordion` `variant="ghost"` for sidebar usage.
- Synchronized repository agent documentation and showcase guidelines with latest v0.8.0 zero-raw-HTML adherence policies.


---

## [0.9.1] — 2026-06-20

### Added
- Added comprehensive AI Agent JSDoc notes to `LuStack`, `LuGrid`, `LuCard`, `LuAccordion`, `LuSplit`, and `LuDock` explaining Zero-Raw-HTML adherence constraints.
- `LuToggleGroup`: Added support for multiple selection via `multiple` prop.
- `LuButton`: Added `size` (`sm`, `md`, `lg`) and `loading` props.
- `LuText`: Added `color` and `weight` props for automatic design token mapping.

### Fixed
- **Layout primitives**: Eliminated layout bloat ("blowfish" padding effect) by enforcing `pad="0"` explicitly across showcase applications and recipes.
- `LuCard`: Overhauled subcomponents (`LuCardHeader`, `LuCardTitle`, `LuCardSubtitle`, `LuCardBody`, `LuCardFooter`, `LuCardMedia`) for strict zero-raw-HTML layout enforcement.
- `LuAccordion`: Added `ghost` variant and repaired sidebar layout styles.
- `LuStack`: Refactored to use static inline CSS gap/alignment instead of Tailwind utilities.

### Documentation
- Updated `CONSUMER_GUIDE.md` and `.agents/reference/showcase.md` to explicitly describe `LuStack` structural alignment and layout bloat anti-patterns.
- Updated AI knowledge base for v0.8.0 architecture.


---

## [0.9.0] — 2026-06-15

### Added

- `LuToggleGroup`: Added support for multiple selection via `multiple` prop.
- `LuButton`: Added `size` (`sm`, `md`, `lg`) and `loading` props.
- `LuStack`: Refactored to use static inline CSS gap/alignment instead of Tailwind utilities.
- `LuText`: Added `color` and `weight` props for automatic design token mapping.

### Documentation

- Updated AI agent knowledge base to reflect the finalized static BEM styling architecture.


---

## [0.8.0] — 2026-06-09

### ⚠ Breaking / Structural Changes
- **Tier 3B BEM migration**: All ~100 framework components migrated from dynamic `resolveSkin()` / SkinMap to static BEM class names in `packages/core/src/styles/`. The `src/skins/` directory and `src/lumora.css` escape hatch are deleted.
- **Chart components removed**: `LuBarChart`, `LuLineChart`, `LuDoughnutChart`, `LuGaugeChart`, `LuSparkline`, `LuRichTextEditor` removed (were experimental/unstable).
- **Shell height fixed**: `LuDesktopShell`, `LuMobileShell`, `LuEmbeddedShell` now use `height: 100dvh` natively — consumers no longer need to set `html/body/#app` heights.
- **Context API simplified**: `context.ts`, `types.ts`, `plugin.ts` cleaned up. `resolveSkin`, `extendSkin`, `SkinMap`, `createLumoraUI({ skin })` are removed.

### Added
- `LuTreeItem.vue` new component.
- `LuMobileNavBarItem.vue` extracted as standalone component.
- `packages/core/src/styles/` new directory with modular BEM CSS (`components.css`, `shell.css`, `layout.css`, `forms.css`, `tokens.css`).
- `packages/core/src/tokens/` new design token directory.
- `apps/showcase/src/sc-recipes.css` — new; recipe CSS namespace with `sc-*` prefix.

### Changed
- All recipe components renamed from `lu-*` to `sc-*` class prefix.
- `DocsTopBar`, `DocsLayout` fixed.
- `ThemeToggle` variant restored.

### Maintenance
- Dependency pruning: `vue-chartjs`, `chart.js` removed.
- `lazyVChart.ts`, `useChartTheme.ts` composables removed.
- `utils.ts` cleaned up.


---

## [0.7.4] — 2026-05-30

### Maintenance

- overhaul agentic infrastructure for fail-safe development (`3b081cd`)

---

## [0.7.3] — 2026-05-23

### Added

- update shared skins for select, forms, timeline, calendar, and planner (`10cf2ba`)
- extend LuCalendar with mini size and showEventLabels prop (`41462de`)
- add LuPlanner weekly scheduling component (`759cc1f`)
- redesign LuTimeline with compact, numbered, and status variants (`ed6ff6c`)
- enhance LuDataGrid with sorting, select-all, and local search/filter (`8374caf`)
- overhaul LuCheckbox, LuRadio, LuSwitch with improved skins and tri-state switch (`2248907`)
- redesign LuSelect with search, groups, and chip multi-select (`b6c8d4f`)
- add LuToast, LuChip, LuAccordion (`f85b57e`)
- add LuDrawer, LuList, LuPopover, LuBottomSheet; integrate floating-ui (`04fd13b`)
- complete v0.3.0 to v0.5.0 roadmap (`14ec1c8`)

### Fixed

- restore LuThemeSwitch recipe (`35f5988`)
- repair LuFormWizard step navigation and layout (`c8a5ba9`)
- resolve remaining headless violations and strengthen tests (`d4f8e25`)

### Changed

- restructure navigation into functional categories (`c2575d6`)
- remove domain-specific components from core exports (`1310993`)

### Documentation

- add LuCodeBlock documentation page (`02a6f77`)
- integrate missing v0.5.0 components and fix charts renderer error (`ffbf80d`)

### Maintenance

- bump version to 0.7.2 (`b4ea3c4`)
- bump version to 0.7.1 (`754ee2b`)
- bump version to 0.7.0 (`0fe5c37`)
- bump version to 0.6.0 (`2e62243`)
- bump version to 0.5.0 (`18b82f6`)


---

## [0.7.2] — 2026-05-23

### Fixed
- Fixed CI release workflow git authentication: added `token: ${{ secrets.GITHUB_TOKEN }}` to checkout step and explicit remote URL configuration before tag push to resolve "No such device or address" error.

---

## [0.7.1] — 2026-05-23

### Fixed
- Fixed GitHub Actions release workflow `npm publish` double-packing issue.

---

## [0.7.0] — 2026-05-23

### Added
- `LuPlanner` — Weekly scheduling grid with absolute-positioned time slots, event blocks, and `slot-click` / `event-click` emissions
- `LuSelect` — Rebuilt with text search/filter, option groups, chip-based multi-select, clearable state, and async-ready slot API
- `LuDataGrid` — Column sorting (asc/desc/none cycle), header select-all checkbox, local text search bar, per-column filter support
- `LuTimeline` — `compact` and `numbered` layout variants; `status` prop for per-item color coding (success/warning/error/info)
- `LuSwitch` — Indeterminate / tri-state variant via `indeterminate` prop
- `LuCalendar` — `size="mini"` compact variant and `showEventLabels` boolean prop
- Showcase: `LuCodeBlock` dedicated documentation page
- New skin keys: `timeline.*`, `calendar.*`, `planner.*`, `select.*` (chip, group, search, clearable styles)
- Test coverage: 5 new test files — `LuCheckbox`, `LuRadio`, `LuSwitch`, `LuSelect`, `LuPlanner`

### Fixed
- `LuFormWizard` — Step navigation regressions and layout rendering corrected
- `LuCheckbox` / `LuRadio` / `LuSwitch` — Complete default-skin visual overhaul: accessible focus rings, checked/disabled states, label alignment

---

## [0.6.0] — 2026-05-23

### ⚠ Breaking Changes
- Removed from core exports: `LuEntityCard`, `LuEntityCardStat`, `LuPageHeader`, `LuNotificationCenter`, `LuDashboardGrid`, `LuThemeSwitch`, `LuThemeSelect`, `LuEmbeddedPOS*` (5 components). Moved to showcase recipes.

### Added
- `LuDrawer` — Overlay/push drawer panel (left/right/top/bottom)
- `LuList`, `LuListItem`, `LuListDivider`, `LuListSubheader` — Structured list primitives
- `LuPopover` — Rich content anchored to trigger (floating-ui)
- `LuBottomSheet` — Mobile-friendly bottom panel with drag support
- `LuToast` + `useLuToast()` — Non-blocking notification system
- `LuChip`, `LuChipGroup` — Interactive selection chips
- `LuAccordion` — Grouped collapsibles with exclusive-open mode
- `useFloating()` — Shared floating-ui composable
- Showcase: 11 functional navigation categories + Recipes section

### Changed
- `LuTooltip` — Now uses floating-ui for precise positioning with auto-flip
- `LuMenu` — Now uses floating-ui, replaces hardcoded CSS alignment
- `LuDesktopRailBar` promoted as the recommended rail/mini-drawer pattern

---

## [0.5.0] — 2026-05-22

### Added

- **`LuEntityCard` + `LuEntityCardStat`** — Rich entity summary cards with avatar, meta, stats grid, and actions slots.
- Complete v0.3.0 to v0.5.0 roadmap implementation.

---

## [0.2.2] — 2026-05-14

### Fixed

- **`LuButton`** — `to` and `href` declared props are now explicitly re-bound on the dynamic
  `<component>`, fixing Vue Router console warnings (`Missing required prop: "to"`) when rendering
  as `RouterLink` with `inheritAttrs: false`.
- **`LuTab` active indicator** — Changed `border-rose-500` → `border-b-rose-500` so the bottom
  underline correctly overrides the `border-transparent` default in light mode (was invisible).
- **`LuToggleButton` active skin** — `activeSkin` resolver is now variant-aware: resolves
  `${variant}-active` (e.g. `ghost-active`) before falling back to the generic `active` skin key.
- **`LuCodeBlock` copy button** — Hover style uses `hover:bg-white/10 hover:text-zinc-100`
  (alpha overlay) instead of the mode-sensitive `hover:bg-zinc-700 hover:text-white`, ensuring
  icon visibility on the always-dark `#282c34` code header in both light and dark themes.
- **`LuCollapsibleTrigger` default skin** — Removed hard-coded sidebar typography
  (`text-[10px] uppercase tracking-widest text-zinc-400`). The skin is now a generic neutral
  trigger container; label typography is delegated to slot content via `LuText variant="label"`.
- **Tab list borders** — `LuTabList` default and `card-header` variants changed from
  `dark:border-zinc-800` → `dark:border-zinc-700`, normalising separator visual weight across modes.
- **Showcase build** — `apps/showcase/vite.config.ts` now uses an ordered alias array covering all
  `@astrake/lumora-ui` sub-path exports (`/style`, `/composables`, `/layout`, `/shell`,
  `/components`, `/skins`), fixing standalone `bun run build` without pre-built core artifacts.

### Added

- **`LuToggleGroup ghost` variant** — Removes the segmented-control background container for use
  in minimal topbar / toolbar contexts.
- **`LuToggleButton ghost` + `ghost-active` variants** — Subtle icon-button states with an elevated
  `ring` on the active element; consumed by the documentation `ThemeToggle` topbar widget.

### Refactored (Showcase)

- **`DocsSearch`** — Rebuilt as a floating dropdown (`absolute top-full z-50`) with styled result
  rows: muted section caption, bold item label, per-row hover highlight, Escape-key dismiss, and
  external-link icon indicator.
- **`DocsSidebar`** — Removed redundant nested `LuStack` wrappers inside the `#trigger` slot that
  created double padding and triple hover-layer stacking in dark mode.

---

## [0.2.1] — 2026-05-12

- Package publishing now ships compiled `dist` outputs (`.js` + `.d.ts`) and exports no longer point to raw `src/*.ts` entrypoints, preventing downstream strict TypeScript checks from surfacing Lumora internals.
- Cleaned internal type noise in core source (`unused imports/params`, `type`-only `VNode` import) so workspace `vue-tsc` checks remain clean.

---

## [0.2.0] — 2026-04-27

### Added
- `LuCodeBlock` — Native Shiki-powered syntax highlighter with `default` and `preview` variants (supporting `tabbed` and `split` layouts).
- `LuToggleGroup` & `LuToggleButton` — New layout primitives for grouped button selections.
- `LuMenu` — Refactored and renamed from legacy `LuDropdown` to align with the core primitives naming convention.
- New showcase documentation dedicated to Toggle Group and components.

### Fixed
- WPF-like edge-docking regressions in `LuDock` via a newly implemented programmatic render function.
- Reactivity bugs in `LuSplit` (`LuSplitPane`, `LuSplitResizer`) failing to unwrap injected `direction` refs.
- Missing `LuSplit` component skins.
- Various visual hierarchy issues in documentation via typography `LuText` adjustments.

### Changed
- **Zero-Raw-HTML Adherence**: Removed all raw DOM nodes (`div`, `span`, etc.) and `PreviewBlock` from the showcase application in favor of 100% native `Lu*` primitives.
- Integrated Shiki to `@astrake/lumora-ui` core package dependencies.

---

## [0.1.7] — 2026-04-26

### Breaking Changes (structurally additive — no API surface removed)
- Framework now ships `lumora.css` — consumers must add `import '@astrake/lumora-ui/style'` to their app entry

### Fixed
- Shell components (`LuDesktopShell`, `LuMobileShell`, `LuEmbeddedShell`) no longer require Tailwind CSS to be configured for `node_modules` — structural layout is now framework-owned CSS
- Layout primitives (`LuDock`, `LuStack`, `LuFill`, `LuScroll`, `LuGrid`, etc.) structural classes are now framework-owned, not Tailwind fallbacks
- `LuDesktopRailItem` icon and label structural defaults are now framework-owned
- Plugin config is now `shallowReactive` — dynamic skin switching and `config.skin = newSkin` mutations now correctly trigger reactive re-renders in all components

### Added
- `lumora.css` — zero-dependency CSS baseline for all structural/layout defaults; exported at `@astrake/lumora-ui/style`
- `tailwindContent()` helper exported at `@astrake/lumora-ui/tailwind` — resolves correct `node_modules` source glob for Tailwind `content` config

---

## [0.1.6] — 2026-04-26

### Added
- `LuForm` — headless validation orchestrator component with slot-based API
- `LuForm.types.ts` — `LuFormRules`, `LuFormErrors`, `LuFormValidator`, `LuFormContext` types
- Form context integration for `LuInput`, `LuSelect`, `LuSwitch` — `name`, `error` props; register/unregister lifecycle
- `LuFormContextKey` injection key (internal Symbol) for child-field coordination
- 10 vitest test cases covering submit, validation, reset, blur, disabled, and programmatic API

---

## [0.1.5] — 2026-04-25

### Fixed

- ci workflow errors — npm publish auth and correct artifact path (`af81e69`)

---

## [0.1.4] — 2026-04-25

### Fixed

- prepack hook to include README and CHANGELOG in npm tarball (`e69bdfb`)

---

## [0.1.3] — 2026-04-25

### Maintenance

- fix CI pipeline failures (`cde8248`)
- verify automated release pipeline (`c153464`)

All notable changes to `@astrake/lumora-ui` are documented here.

Format: [Keep a Changelog](https://keepachangelog.com/) · Commits: [Conventional Commits](https://www.conventionalcommits.org/)

---

## [0.1.0] — 2026-04-25

### Added

- Initial workspace scaffold (`packages/core`, `apps/showcase`, `tools/`)
- Headless Vue 3 primitive component library targeting three surface types:
  - **Mobile (`LuM*`):** touch-first components for PWA apps (≥44px targets, bottom nav, swipe)
  - **Desktop (`LuD*`):** feature-rich browser/Electron components (sidebars, tables, modals)
  - **Embedded (`LuE*`):** fixed-viewport components for kiosk/IoT/in-car screens
  - **Shared (`Lu*`):** cross-surface primitives (`LuIcon`, `LuSpinner`, `LuBadge`, `LuPortal`)
- Design token system (`--lu-*` CSS custom properties) — color, typography, spacing, radius, shadow, motion
- Three package entry points: `@astrake/lumora-ui`, `/mobile`, `/desktop`, `/embedded`
- Skin configuration system via `LumoraUI` Vue plugin
- Shell components (`LuMobileShell`, `LuDesktopShell`, `LuEmbeddedShell`) with named-slot architecture
- Layout primitives and composable layer
- Reference showcase app (Vite + Vue 3) with `/mobile`, `/desktop`, `/embedded` routes
- `tools/build.ts` — Vite library-mode build (three entry points)
- `tools/check.ts` — vue-tsc typecheck
- `tools/version.ts` — VERSION → package.json sync
- `tools/changelog.ts` — automated changelog generator (zero npm deps)
- `LICENSE` — MIT license
- `SECURITY.md` — responsible disclosure policy
- `README.md` — badges, install, usage, design token overview, automation table, disclaimer
- `docs/LEGAL.md` — full warranty disclaimer and legal notice
- `docs/PROJECT.md` — project overview
- `docs/ARCHITECTURE.md` — architecture guide
- `docs/DEVELOPMENT.md` — development workflow
- `docs/RELEASES.md` — release workflow documentation
- `docs/AI_AGENT_GUIDE.md` — AI coding agent guide
- `AGENTS.md` — agent working rules and repo map
- `.npmrc` — `@astrake` scope, `git-tag-version=false`
- GitHub Actions: `ci.yml` — install, version-check, typecheck, test, build, artifact upload
- GitHub Actions: `release.yml` — dual trigger, changelog, GitHub Release, npm publish
- GitHub Actions: `version-check.yml` — VERSION single-source-of-truth enforcement
- GitHub Actions: `codeql.yml` — weekly TypeScript security scan
