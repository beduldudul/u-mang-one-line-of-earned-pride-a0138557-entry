import { mkdirSync, writeFileSync } from "node:fs";

// One quiet, earned moment: a small recovery, finished work, pride in the stripes.
const line =
  "He mowed the lawn in straight lines for the first time since his stroke, then stood at the edge admiring the stripes.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
