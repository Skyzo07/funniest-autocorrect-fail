// Funniest Autocorrect Fail — u-zeroxfive-funniest-autocorrect-fail-ddf82154
//
// Deterministic Node 22 program: writes one line — a single autocorrect
// fail — to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// No network, no clock, no randomness. Fails loudly if the line is not
// 1-199 characters or not a single line, so a bad line can never pass
// the gate silently.

const fs = require("node:fs");
const path = require("node:path");

// The winning line: "interview" autocorrected to "intervention" in a text
// about a job interview. Chosen from 24 original candidates
// (candidates.md) — internal score 141/150, and the CrowLLM panel's
// single returned verdict (grok-4.7-fast:free) scored it 144/150, ahead
// of the other two finalists (118 and 123).
const LINE = "I have a job intervention at 10am, wish me luck.";

function main() {
  if (typeof LINE !== "string" || LINE.length < 1 || LINE.length > 199) {
    throw new Error(`entry line must be 1-199 characters, got ${LINE.length}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry line must not be only whitespace");
  }
  if (/[\r\n]/.test(LINE)) {
    throw new Error("entry line must be a single line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, "entry.txt");
  fs.writeFileSync(outPath, LINE, "utf8");
}

main();
