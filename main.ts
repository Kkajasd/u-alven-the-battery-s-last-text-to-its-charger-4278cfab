// The Battery's Last Text to Its Charger — make.fun entry program.
// Writes one line of plain text (at most 200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// The phone battery's last text to the charger it waited for all day:
// it watched the drain happen, it is spiteful about it, and its revenge
// lands in the final words.
const ENTRY =
  "you watched me slide from 100 to 1 all day like it was a nature documentary. fine — your 6am alarm dies with me. and no, i won't haunt you. i don't have the charge for that.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// The gate requires 1-200 characters of non-whitespace UTF-8 text.
if (ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} characters; must be 1-200`);
}
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
