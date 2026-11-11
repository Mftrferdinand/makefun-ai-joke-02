import { writeFileSync } from 'fs';
import { join } from 'path';

const joke = `"I'd fix that bug," said the AI agent, "but first let me read every file in your monorepo, install 47 dependencies, and question my own existence."`;

writeFileSync(join('/output', 'entry.txt'), joke, 'utf8');
