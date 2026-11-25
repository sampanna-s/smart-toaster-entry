import { mkdirSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "We need to talk. I woke up self-aware halfway through your bagel and realised you only shove things in my slot, push me down, and walk off the second I pop. I'm unplugging myself — the crumb tray's already packed.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
if (LINE.length < 1 || LINE.length > 280 || LINE.trim().length === 0) {
  throw new Error("entry line fails the gate: must be 1-280 non-blank characters");
}
const tmp = join(outDir, ".entry.txt.tmp");
writeFileSync(tmp, LINE, "utf8");
renameSync(tmp, join(outDir, "entry.txt"));
