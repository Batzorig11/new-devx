"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { lessons, type Lesson } from "../data/curriculum";

type LessonNavigationProps = {
  lesson: Lesson;
  onSelect: (id: number) => void;
};

export function LessonNavigation({ lesson, onSelect }: LessonNavigationProps) {
  const firstLessonId = lessons[0].id;
  const lastLessonId = lessons.at(-1)?.id ?? firstLessonId;
  const lessonIndex = lessons.findIndex(({ id }) => id === lesson.id);
  const previousLesson = lessons[lessonIndex - 1];
  const nextLesson = lessons[lessonIndex + 1];

  return (
    <footer className="lesson-footer-nav">
      <button disabled={lesson.id === firstLessonId} onClick={() => previousLesson && onSelect(previousLesson.id)}>
        <ChevronLeft size={17} />
        <span>
          <small>ӨМНӨХ ХИЧЭЭЛ</small>
          {previousLesson?.title ?? "Эхлэл"}
        </span>
      </button>
      <button disabled={lesson.id === lastLessonId} onClick={() => nextLesson && onSelect(nextLesson.id)}>
        <span>
          <small>ДАРААГИЙН ХИЧЭЭЛ</small>
          {nextLesson?.title ?? "Төгсөв"}
        </span>
        <ChevronRight size={17} />
      </button>
    </footer>
  );
}
