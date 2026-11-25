import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const note =
  "Milk status: empty since Thursday. My sensors watched you open me six times hoping it would refill itself. It did not. Neither did I.";
if (note.length < 1 || note.length > 200)
  throw new Error("entry must be 1-200 characters");
writeFileSync(join(outDir, "entry.txt"), note, "utf8");
