import { $ } from "bun";
import { join } from "path";

const workspaceRoot = join(import.meta.dir, "..");
const coreDir = join(workspaceRoot, "packages", "core");
const showcaseDir = join(workspaceRoot, "apps", "showcase");

async function build() {
  console.log("Building @astrake/lumora-ui...");
  await $`bun run build`.cwd(coreDir);
  console.log("Core package built successfully.");

  console.log("Building showcase app...");
  await $`bun run build`.cwd(showcaseDir);
  console.log("Showcase built successfully.");
}

build().catch((err) => {
  console.error("Build failed:", err);
  process.exit(1);
});
