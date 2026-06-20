import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pkgRoot = path.resolve(__dirname, '..');
const srcDir = path.join(pkgRoot, 'src');

let fullText = `# Lumora UI Full Component Documentation\n\nThis file contains automatically concatenated component APIs.\n\n`;

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      scanDir(fullPath);
    } else if (fullPath.endsWith('.vue')) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      const tsMatch = content.match(/<script.*?lang="ts".*?>([\s\S]*?)<\/script>/);
      if (tsMatch) {
        const tsContent = tsMatch[1];
        // extract JSDoc and interfaces
        const interfaceMatch = tsContent.match(/(\/\*\*[\s\S]*?\*\/[\s\n]*interface\s+\w+\s*\{[\s\S]*?\})/);
        if (interfaceMatch) {
          fullText += `## ${file}\n\n\`\`\`ts\n${interfaceMatch[1].trim()}\n\`\`\`\n\n`;
        }
      }
    }
  }
}

try {
  scanDir(path.join(srcDir, 'components'));
  scanDir(path.join(srcDir, 'layout'));
  scanDir(path.join(srcDir, 'shell'));
  fs.writeFileSync(path.join(pkgRoot, 'llms-full.txt'), fullText);
  console.log("Built llms-full.txt successfully.");
} catch (error) {
  console.error("Failed to build llms-full.txt:", error);
  process.exit(1);
}
