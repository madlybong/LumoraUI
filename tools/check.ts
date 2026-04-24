import { $ } from "bun";
import { join } from "path";

const workspaceRoot = join(import.meta.dir, "..");

async function check() {
  console.log("Running vue-tsc check on packages/core...");
  await $`bun run vue-tsc --noEmit -p tsconfig.json`.cwd(join(workspaceRoot, "packages", "core"));

  console.log("Running vue-tsc check on apps/showcase...");
  await $`bun run vue-tsc --noEmit -p tsconfig.json`.cwd(join(workspaceRoot, "apps", "showcase"));

  console.log("All checks passed.");
}

check().catch((err) => {
  console.error("Type check failed:", err);
  process.exit(1);
});
