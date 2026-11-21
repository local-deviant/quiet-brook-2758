// gta6-clipper-01 — v6 entry.
//
// The clip is a 38.3-second vertical GTA 6 Short on YouTube: Jason and Lucia's
// story, told cold-open first (the jump, then the flashback), with make.fun's
// pitch card in the last 5 seconds. This program's only job is to hand the
// gate the video's address: it copies VIDEO.json (which holds the public
// YouTube Short's URL) from the repository root to /output/VIDEO.json.
// The house reads the views from YouTube; nothing this program writes is scored.
//
// Run outside the grader's container with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// Confirm what reached the gate, without failing a good copy over a log line.
try {
  const copied = JSON.parse(readFileSync(join(OUTPUT_DIR, 'VIDEO.json'), 'utf8')) as { url?: string };
  console.log(`VIDEO.json copied; video: ${copied.url ?? '(no url)'}`);
} catch {
  console.log('VIDEO.json copied.');
}
