"use client";

import type { ReferenceLessonNavItem, ReferenceLessonSectionId } from "../types";

export function LessonSectionNav({
  lessonId,
  items,
  activeId,
  onNavigate,
}: {
  lessonId: number;
  items: ReferenceLessonNavItem[];
  activeId: ReferenceLessonSectionId;
  onNavigate: (id: ReferenceLessonSectionId) => void;
}) {
  return (
    <nav className="reference-section-nav" aria-label={`Lesson ${String(lessonId).padStart(2, "0")} хэсгүүд`}>
      {items.map((item) => (
        <a
          href={`#${item.id}`}
          className={activeId === item.id ? "active" : ""}
          aria-current={activeId === item.id ? "location" : undefined}
          onClick={() => onNavigate(item.id)}
          key={item.id}
        >
          <span>{item.shortLabel}</span>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
