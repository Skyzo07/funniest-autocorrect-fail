// Funniest Autocorrect Fail — one-line entry.
// Writes the winning line exactly to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic: no network, no clock, no randomness.

import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE = "I have a job intervention at 10am, wish me luck.";

function main(): void {
  if (LINE.length < 1 || LINE.length > 199) {
    throw new Error(`line must be 1-199 chars, got ${LINE.length}`);
  }
  if (LINE !== LINE.trim() || LINE.includes("\n") || LINE.includes("\r") || LINE.includes("\t")) {
    throw new Error("line must be a single unpadded line with no line breaks or tabs");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
}

main();
