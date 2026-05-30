# 🚀 Lumora UI — Betterment Proposals

> This is a living document containing forward-looking improvements, technical debt backlog, and systemic upgrades for the repository. Agents should consult this document when tasked with "improving the codebase" or when waiting for user input.

---

## A. Anti-Hallucination Infrastructure

Historically, AI agents have hallucinated phantom paths based on outdated documentation (e.g., `src/tokens/`, `docs/AI_AGENT_GUIDE.md`). 

**Proposed Mitigation:**
Create a `tools/doc-check.ts` validation script that runs in CI. It should verify:
1. Every exported component in `components/index.ts` has a matching skin key in `skin-authoring.md`.
2. Every component in the `components/` directory has a corresponding test file in `__tests__/`.
3. No documentation file (`.md`) references a path that does not exist in the actual source tree.

---

## B. Test Coverage Backlog

Currently, around 35+ components lack unit tests. These must be written to ensure stability.

**Priority 1 — Core primitives (highest ROI):**
`LuButton`, `LuInput`, `LuCard`, `LuBadge`, `LuIcon`, `LuSpinner`, `LuText`, `LuDivider`

**Priority 2 — Interactive components (behavioral logic):**
`LuModal`, `LuTabs` (and `LuTab`, `LuTabList`), `LuMenu` (and `LuMenuItem`), `LuTooltip`, `LuCollapsible`, `LuFormField`, `LuFormWizard`, `LuTag`, `LuAlert`, `LuAvatar`

**Priority 3 — Complex components (state-heavy):**
`LuCodeBlock`, `LuCommandPalette`, `LuDateRangePicker`, `LuPagination`, `LuProgressBar`, `LuRichTextEditor`, `LuSkeleton`, `LuBreadcrumb`, `LuLink`, `LuTextarea`, `LuToggleGroup`, `LuToggleButton`, `LuTree`, `LuMediaGallery`

**Priority 4 — Charts (currently mocked, require minimal data testing):**
`LuBarChart`, `LuLineChart`, `LuDoughnutChart`, `LuGaugeChart`, `LuSparkline`

---

## C. Composables Documentation Gap

The following composables are exported and actively used, but lack documentation in any agent guide. We need to create `.agent/composables.md` to document their purpose and API.

| Composable | Purpose | Agent Awareness |
|---|---|---|
| `useDataGrid` | Sorting/filtering/selection logic for LuDataGrid | ❌ None |
| `useFloating` | Anchor + flip logic for Popover/Tooltip/Menu | ❌ None |
| `useLuToast` | Toast notification queue management | ❌ None |
| `useChartTheme` | ECharts theme coordination with skin | ❌ None |
| `useTheme` | Dark/light mode detection and switching | ❌ None |
| `useRail` | Desktop rail expand/collapse state | ❌ None |
| `useSplit` | Resizable split pane drag tracking | ❌ None |
| `useShiki` | Shiki syntax highlighter lazy-init | ❌ None |
| `lazyVChart` | Lazy-loads vue-echarts component | ❌ None |

---

## D. Naming Convention Disambiguation Enforcement

The codebase previously used shorthand prefixes (`LuM*`, `LuD*`, `LuE*`). The new standard is full surface prefixes (`LuMobile*`, `LuDesktop*`, `LuEmbedded*`). 
A linter rule (e.g., via `eslint-plugin-vue`) should be created to prevent the creation or import of components using the deprecated shorthand prefixes.
