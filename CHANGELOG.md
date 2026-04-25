# Changelog

## Unreleased

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
