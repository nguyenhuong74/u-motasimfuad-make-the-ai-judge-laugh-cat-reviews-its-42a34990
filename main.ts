// Make the AI Judge Laugh: Cat Reviews Its Human
// One funny single-line one-star review from a house cat about its human.
// Writes the review to /output/entry.txt — exactly the line, no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "★☆☆☆☆ She recycled my favourite box. It was my house. I am now homeless, and she still expects me to purr.";

function validate(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

validate(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
