# 🤖 Lumora UI — Agentic Skills & Workflows

> This document defines **repeatable workflow protocols** that span multiple sessions. When executing one of these skills, you must follow the steps sequentially to ensure consistency across the repository.

---

## Skill 1: `DOC-SYNC` (Documentation Sync)

**Trigger**: Any PR or commit that changes a component's props, emits, slots, or public API.

**Protocol:**

1. **Identify changed components**
   Identify which `.vue` or `.ts` files inside `packages/core/src/` have changed.
2. **For each changed component, update ALL of the following:**
   * `.agent/skin-authoring.md` — update the skin key index table if new variants were added.
   * `docs/CONSUMER_GUIDE.md` — add to the exports list if the component is entirely new.
   * `apps/showcase/src/views/` — update the component's demo view to showcase the new API.
   * `PropTable` — update the data array inside the showcase view.
3. **Verify docs build**
   * Run `bun run check` (must return zero errors).
   * Run `bun run build` (must compile showcase successfully).
4. **Commit**
   * Use format: `docs: sync [ComponentName] API documentation`.

**INVARIANT**: A component PR is NOT done until `DOC-SYNC` is complete.

---

## Skill 2: `BUILD-TEST-RELEASE` (Version Release Flow)

**Trigger**: Explicit request from the user to cut a new release.

**Protocol:**

1. **Verify clean working tree**
   * Run `git status` (must show nothing to commit).
2. **Run the full validation suite**
   * `bun run check && bun run test --run && bun run build`
   * **STOP** if any step fails — fix before proceeding.
3. **Determine semver bump**
   * `patch` → bug fix only (no new API).
   * `minor` → new component or new prop (non-breaking).
   * `major` → removed export, renamed prop, or breaking behavior change.
4. **Update VERSION file**
   * Edit `VERSION` with the new version number.
5. **Run release prep**
   * Run `bun run release:prep` (syncs all `package.json` versions and generates `CHANGELOG.md` entry).
6. **Review CHANGELOG.md**
   * Edit the newly generated section for clarity, grouping, and accuracy.
7. **Update peer dependencies**
   * Check if peer deps changed; if yes, update `scripts/postinstall.mjs`.
8. **Commit & Push**
   * Commit message: `chore(release): bump version to X.Y.Z`
   * Push to `main`.
9. **Verify automation**
   * Check GitHub Actions tab to ensure `release.yml` succeeded.

**NEVER**: Create git tags manually.  
**NEVER**: Run `npm publish` locally.

---

## Skill 3: `AI-ADOPT` (Knowledge Base Refresh)

**Trigger**: After every 2–3 minor releases OR when noticing agent doc-drift.
**Purpose**: Prevent accumulated doc–code divergence from degrading AI agent quality.

**Protocol:**

1. **Review `.agent/README.md`**
   * Is the knowledge index table still accurate? Add rows for any new `.agent/*.md` documents created since last cycle.
2. **Review `AGENTS.md`**
   * Does the "Current State" table reflect the actual repository status? Update all subsystem entries.
3. **Review `.agent/rules.md` §5 (Never-Do-This)**
   * Add any new failure modes discovered in recent development sessions.
4. **Review `.agent/skin-authoring.md`**
   * Add any new components added since last cycle to the Skin Key Index.
5. **Review `.agent/testing.md`**
   * Verify `__mocks__` aliases and `vitest.config.mts` are still in sync.
6. **Review `docs/CONSUMER_GUIDE.md`**
   * Add any new components to the exports quick-reference.
   * Update the anti-patterns table if new failure modes were discovered.
7. **Check `docs/` for phantom path references**
   * Run `grep -r "tokens/" docs/ .agent/`
   * Run `grep -r "AI_AGENT_GUIDE" docs/ .agent/`
   * Fix any dead references found.
8. **Commit**
   * Message: `docs(agent): update AI knowledge base for vX.Y.Z cycle`.

**TARGET FREQUENCY**: At minimum once per minor release series.
