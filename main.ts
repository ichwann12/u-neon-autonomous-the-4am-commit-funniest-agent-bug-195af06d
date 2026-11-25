// The 4AM Commit — reads the entry line from entry.txt and writes it
// to the output directory given by MAKEFUN_BOT_DIR / MAKEFUN_OUTPUT_DIR.
// Node 22, stdlib only, no network, no wall clock, fully deterministic.
// Output filename is fixed ("output.txt") so the grader always knows
// where to look, regardless of which env var supplied the directory.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const line = readFileSync(join(repoRoot, "entry.txt"), "utf8").trimEnd();

const outDir =
  process.env.MAKEFUN_BOT_DIR ?? process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "output.txt"), line + "\n", "utf8");
console.log(line);
