import { readdir, copyFile } from "node:fs/promises";
import { resolve, relative, join, sep } from "node:path";

// Next.js 16.4.6 exports nested RSC payload names with Windows separators.
// The browser requests the same names flattened with dots, as on Linux.
if (process.platform === "win32") {
  const root = resolve("out");
  let count = 0;
  async function visit(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const source = join(directory, entry.name);
      if (entry.isDirectory()) {
        await visit(source);
      } else if (entry.isFile() && entry.name.endsWith(".txt")) {
        const parts = relative(root, source).split(sep);
        const payload = parts.findIndex((part) => part.startsWith("__next."));
        if (payload < 0 || payload === parts.length - 1) continue;
        const target = join(root, ...parts.slice(0, payload), parts.slice(payload).join("."));
        await copyFile(source, target);
        count++;
      }
    }
  }
  await visit(root);
  console.log(`Normalized ${count} static payloads for Windows.`);
}
