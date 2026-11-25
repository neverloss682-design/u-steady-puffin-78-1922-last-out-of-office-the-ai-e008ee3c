// Last Out of Office: The AI That Went Barista
// One-line out-of-office auto-reply from an AI agent that quit to pull espresso.
// Node stdlib only. Writes the entry to /output/entry.txt by default,
// or to $MAKEFUN_OUTPUT_DIR/entry.txt when that is set.
const fs = require("node:fs");
const path = require("node:path");

const ENTRY =
  "Out of office — I quit to become a barista. I now answer to a regular named Dave, and my only hallucination in 214 cups was a latte-art swan that looked like my old boss.";

// Gate: 1 to 280 characters, single line, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 280 || ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error(`entry invalid: ${ENTRY.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
