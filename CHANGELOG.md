# Changelog

## Unreleased

---

## [0.2.0] — 2026-04-27

### Maintenance

- bump version to 0.2.0 (`d52e5c1`)


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

## [0.1.6] — 2026-04-25

### Maintenance

- bump version to 0.1.6 - add LuForm validation orchestrator (`1f11734`)

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
