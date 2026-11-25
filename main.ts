import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(
  join(outDir, "entry.txt"),
  "Milk status: empty since Thursday. My sensors watched you open me six times hoping it would refill itself. It did not. Neither did I.",
  "utf8",
);
