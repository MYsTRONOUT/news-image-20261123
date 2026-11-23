// news-image-20261123: one image that sums up Monday 23 November 2026.
// The image is entry.png beside this file; the program copies it to the
// output directory the grader reads (/output in the sandbox, or the
// MAKEFUN_OUTPUT_DIR stand-in outside it). It checks the file is really
// a PNG first (magic bytes), and makes the output directory when needed.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const src = new URL("./entry.png", import.meta.url);
const head = readFileSync(src).subarray(0, 8);
const PNG_MAGIC = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
if (!PNG_MAGIC.every((b, i) => head[i] === b)) {
  throw new Error("entry.png is not a PNG file");
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "entry.png"));
