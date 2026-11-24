// One-Line Roast: The Gadget You Use Every Day (Node 22, standard library only).
//
// The program writes one fixed, original roast line to entry.txt in the
// output directory. The grader reads exactly the bytes written, so the
// line carries no trailing line end. The output is fully deterministic:
// the same bytes on every run.
//
// The roast targets a printer — a gadget used every day — and its one
// absurd, specific behaviour: it refuses to print in black and white
// because the cyan ink is empty, holding a boarding pass hostage over
// a colour it never needed.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ROAST =
  'My printer refuses to print in black and white because the cyan is empty \u2014 it is holding my boarding pass hostage over a color it never needed.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ROAST, 'utf8');
