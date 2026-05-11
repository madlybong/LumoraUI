import { createRequire } from "node:module";
import path from "node:path";

// getLumoraSourceDir() — resolves the absolute path to @astrake/lumora-ui
//
// PRIMARY use: Tailwind CSS v4 via @tailwindcss/vite
//   In your CSS entry file:
//     @import "tailwindcss";
//     @source "/absolute/path/from/getLumoraSourceDir()/src";
//   Or use the @source directive with a relative path manually:
//     @source "../../node_modules/@astrake/lumora-ui";
//
// NOTE: The framework ships lumora.css for all structural layout.
// You only need this helper if your skin strings use Tailwind utility classes.

export function getLumoraSourceDir(importerUrl?: string): string {
  try {
    const req = createRequire(importerUrl ?? import.meta.url);
    return path.dirname(req.resolve("@astrake/lumora-ui/package.json"));
  } catch {
    // Fallback: relative path from project root
    return "./node_modules/@astrake/lumora-ui";
  }
}
