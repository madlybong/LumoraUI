import { $ } from "bun";
import { join } from "path";

const workspaceRoot = join(import.meta.dir, "..");
const coreDir = join(workspaceRoot, "packages", "core");
const showcaseDir = join(workspaceRoot, "apps", "showcase");

async function build() {
  console.log("Building @astrake/lumora-ui...");
  // For a real package, you'd use vite library mode or tsup here
  // We'll just run vue-tsc for now to verify types since we're unbundled pure source
  await $`bun run vue-tsc --project tsconfig.json`.cwd(coreDir);
  console.log("Core types checked successfully.");

  console.log("Building showcase app...");
  await $`bun run build`.cwd(showcaseDir);
  console.log("Showcase built successfully.");
}

build().catch((err) => {
  console.error("Build failed:", err);
  process.exit(1);
});
