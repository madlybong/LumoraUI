---
id: build-test-release
name: "BUILD-TEST-RELEASE: Version Release Flow"
category: workflows
trigger:
  - on: release_request
requires_tools:
  - run_command
  - write_to_file
  - replace_file_content
---

# BUILD-TEST-RELEASE: Version Release Flow

Trigger this workflow upon an explicit request from the user to cut a new release of the monorepo packages.

## Steps

1. **Verify Clean Tree**: Check `git status` to ensure there are no uncommitted changes.
2. **Run Validation Suite**: Execute `bun run check && bun run test --run && bun run build`. If any step fails, STOP and report.
3. **Determine SemVer Level**:
   - `patch`: Bug fixes only (zero public API additions).
   - `minor`: Added features/props/components (backwards-compatible).
   - `major`: Replaced or removed interfaces/components (breaking changes).
4. **Update VERSION File**: Read the old version, increment according to SemVer rules, and overwrite the root `VERSION` file.
5. **Sync Versions & Changelog**: Run `bun run release:prep` (runs monorepo version synchronization to all sub-package.json files and writes a placeholder changelog block).
6. **Review CHANGELOG.md**: Open `CHANGELOG.md` and edit the newly injected section to list details clearly.
7. **Verify peerDependencies**: Check if packages require peer dependency bumps; if yes, synchronize `scripts/postinstall.mjs`.
8. **Commit release**:
   - Commit message: `chore(release): bump version to X.Y.Z`
   - Push to `main` branch.
9. **Automation verification**: Monitor GitHub actions for release build and publish success.

## Invariants

- **[NEVER]** Create git tags manually.
- **[NEVER]** Run `npm publish` locally.
