import type { ReferenceLesson } from "../types";
import { lesson01Reference } from "./lesson-01";
import { lesson02Reference } from "./lesson-02";
import { lesson03Reference } from "./lesson-03";
import { lesson04Reference } from "./lesson-04";
import { lesson05Reference } from "./lesson-05";
import { lesson06Reference } from "./lesson-06";
import { lesson07Reference } from "./lesson-07";
import { lesson08Reference } from "./lesson-08";
import { lesson09Reference } from "./lesson-09";

export const referenceLessonById: Partial<Record<number, ReferenceLesson>> = {
  1: lesson01Reference,
  2: lesson02Reference,
  3: lesson03Reference,
  4: lesson04Reference,
  5: lesson05Reference,
  6: lesson06Reference,
  7: lesson07Reference,
  8: lesson08Reference,
  9: lesson09Reference,
};
