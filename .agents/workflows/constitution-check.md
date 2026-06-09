---
id: constitution-check
name: "CONSTITUTION-CHECK: Automated Audit"
category: workflows
trigger:
  - on: demand
  - on: pre_commit
requires_tools:
  - grep_search
  - run_command
---

# CONSTITUTION-CHECK: Automated Audit

A workflow to check that the codebase adheres to the repository's foundational constraints.

## Steps

1. **Verify No Hardcoded Tailwind Classes in Templates**:
   - Run a grep search for literal templates containing direct class designations that do not use variables or the Tier 3B BEM binder:
     - Search query: `class="` inside `.vue` files.
     - Review matching lines to ensure they do not represent layout or aesthetic colors/sizes. They must use the `lu-` BEM prefix.
2. **Verify Surface decimation boundaries**:
   - Check that no files inside `/shell/desktop/` import from `/shell/mobile/` or `/shell/embedded/`.
   - Run grep searches for cross-platform imports.
3. **Verify CSS Escape hatch rules**:
   - Find all `lu-` prefixes inside component files.
   - Cross-reference with `packages/core/src/lumora.css` to verify the class is defined.
4. **Verify Static BEM structural compliance**:
   - Check if all components correctly use static string BEM classes.
5. **Run test suite**:
   - Run `bun run check` to check typings.
   - Run `bun run test --run` to verify test suite.
   - Run `bun run build` to verify packages bundle successfully.
