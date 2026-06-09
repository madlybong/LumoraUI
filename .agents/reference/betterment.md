# 🚀 Lumora UI — Betterment Proposals

This is a living document containing forward-looking improvements, technical debt backlog, and systemic upgrades for the repository.

---

## A. Anti-Hallucination Infrastructure

Historically, AI agents have hallucinated phantom paths based on outdated documentation (e.g., `src/tokens/`, `docs/AI_AGENT_GUIDE.md`). 

**Proposed Mitigation:**
Create a `tools/doc-check.ts` validation script that runs in CI. It should verify:
1. Every exported component in `components/index.ts` has a matching class entry in `.agents/reference/bem-class-index.md`.
2. Every component in the `components/` directory has a corresponding test file in `__tests__/`.
3. No documentation file (`.md`) references a path that does not exist in the actual source tree.

---

## B. Test Coverage Backlog

Currently, around 35+ components lack unit tests. These must be written to ensure stability.

### Priority 1 — Core primitives (highest ROI)
`LuButton`, `LuInput`, `LuCard`, `LuBadge`, `LuIcon`, `LuSpinner`, `LuText`, `LuDivider`

### Priority 2 — Interactive components (behavioral logic)
`LuModal`, `LuTabs` (and `LuTab`, `LuTabList`), `LuMenu` (and `LuMenuItem`), `LuTooltip`, `LuCollapsible`, `LuFormField`, `LuFormWizard`, `LuTag`, `LuAlert`, `LuAvatar`

### Priority 3 — Complex components (state-heavy)
`LuCodeBlock`, `LuCommandPalette`, `LuDateRangePicker`, `LuPagination`, `LuProgressBar`, `LuSkeleton`, `LuBreadcrumb`, `LuLink`, `LuTextarea`, `LuToggleGroup`, `LuToggleButton`, `LuTree`, `LuMediaGallery`

---

## C. Composables Documentation Gap

*Status: Resolved! See [.agents/reference/composables.md](file:///.agents/reference/composables.md) for full descriptions of hooks.*

---

## D. Naming Convention Disambiguation Enforcement

*Status: Resolved! The shorthand prefix rule is now enforced structurally via the strict Tier 3B static BEM class architecture.*

---

## E. Showcase Recipe Coverage

All showcase recipes (`apps/showcase/src/recipes/`) now have complete standalone BEM styling in `sc-recipes.css`. However, they currently lack component integration tests.

**Proposed Mitigation:**
Add Vitest snapshot or visual regression tests for all `sc-*` components inside `apps/showcase/src/recipes/` to ensure complex compositions don't break during future core framework updates.
