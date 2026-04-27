import fs from "fs";
import path from "path";

function walk(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else if (fullPath.endsWith(".vue")) {
      results.push(fullPath);
    }
  }
  return results;
}

const vueFiles = walk("packages/core/src");

let changedCount = 0;

for (const file of vueFiles) {
  let content = fs.readFileSync(file, "utf-8");
  const original = content;

  // Replace: resolveSkin("LuGrid", props.variant) || "lu-grid"
  // With:    resolveSkin("LuGrid", props.variant)
  content = content.replace(/(resolveSkin\([^)]+\))\s*\|\|\s*["']lu-[a-zA-Z0-9-]+["']/g, "$1");

  // Replace: [resolveSkin("LuFixed", props.variant), "lu-fixed"]
  // With:    resolveSkin("LuFixed", props.variant)
  content = content.replace(/\[(resolveSkin\([^)]+\)),\s*["']lu-[a-zA-Z0-9-]+["']\]/g, "$1");

  // Some might be formatting with newlines:
  // [
  //   resolveSkin("...", ...),
  //   "lu-..."
  // ]
  // Let's do a more generic regex for the array syntax
  content = content.replace(/\[\s*(resolveSkin\([^)]+\))\s*,\s*["']lu-[a-zA-Z0-9-]+["']\s*\]/g, "$1");

  // Also catch the specific one in LuMobileShell: resolveSkin("LuMobileShellContent") || "lu-mobile-shell-content"
  
  if (content !== original) {
    fs.writeFileSync(file, content);
    changedCount++;
    console.log(`Updated ${path.basename(file)}`);
  }
}

console.log(`\nRefactored ${changedCount} files.`);
