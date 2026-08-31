"use client";

import { useEffect, useState } from "react";
import type {
  LessonMode,
  ReferenceLesson as ReferenceLessonData,
  ReferenceLessonSectionId,
} from "../types";
import { LessonAiLab } from "./lesson-ai-lab";
import { LessonCheckpoint } from "./lesson-checkpoint";
import { LessonGuidedPractice } from "./lesson-guided-practice";
import { LessonLiveDemo } from "./lesson-live-demo";
import { LessonModeToolbar } from "./lesson-mode-toolbar";
import { LessonOverview } from "./lesson-overview";
import { LessonSectionNav } from "./lesson-section-nav";
import { LessonTeach } from "./lesson-teach";
import { LessonWrapUp } from "./lesson-wrap-up";

const LESSON_MODE_STORAGE_KEY = "devx-classroom-view";

export function ReferenceLesson({ lesson }: { lesson: ReferenceLessonData }) {
  const [mode, setMode] = useState<LessonMode>("projector");
  const [activeId, setActiveId] = useState<ReferenceLessonSectionId>("overview");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const storedMode = window.localStorage.getItem(LESSON_MODE_STORAGE_KEY);
        if (storedMode === "teacher" || storedMode === "projector") setMode(storedMode);
      } catch {
        // Keep Projector Mode when browser storage is unavailable.
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const sections = lesson.sections
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

        if (visible) setActiveId(visible.target.id as ReferenceLessonSectionId);
      },
      { rootMargin: "-145px 0px -68% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [lesson.sections]);

  function handleModeChange(nextMode: LessonMode) {
    setMode(nextMode);
    try {
      window.localStorage.setItem(LESSON_MODE_STORAGE_KEY, nextMode);
    } catch {
      // Keep the preference in memory when browser storage is unavailable.
    }
  }

  return (
    <div className={`reference-lesson ${mode === "projector" ? "projector-mode" : "teacher-mode"}${lesson.teachStyle === "tutorial" ? " tutorial-lesson" : ""}`}>
      <LessonModeToolbar mode={mode} onChange={handleModeChange} />
      <LessonSectionNav lessonId={lesson.id} items={lesson.sections} activeId={activeId} onNavigate={setActiveId} />
      <LessonOverview lesson={lesson} mode={mode} />
      <LessonTeach lesson={lesson} mode={mode} />
      <LessonLiveDemo lesson={lesson} mode={mode} />
      <LessonGuidedPractice lesson={lesson} mode={mode} />
      <LessonAiLab lesson={lesson} mode={mode} />
      <LessonCheckpoint lesson={lesson} mode={mode} />
      <LessonWrapUp lesson={lesson} mode={mode} />
    </div>
  );
}
