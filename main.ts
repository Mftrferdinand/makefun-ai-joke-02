// A working ai-joke-02 entry (Node 22, standard library only): it writes one fixed joke, a one-liner about AI
// coding agents, to /output/entry.txt. A starting point, not a winner: change the joke. The gate takes UTF-8 text of
// 1 to 280 characters that is not only white space, and the judge reads exactly the bytes written, so write no line
// end you do not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), 'My AI coding agent writes code faster than I can read it.');
