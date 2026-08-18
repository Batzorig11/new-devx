import { BookOpen, Clock3, Code2, Sparkles } from "lucide-react";
import {
  LESSON_DURATION_MINUTES,
  lessonKindLabel,
  type Lesson,
} from "../data/curriculum";
import { foundationMaterialById } from "../data/foundation-lessons";

export function LessonHeader({ lesson }: { lesson: Lesson }) {
  return (
    <header className="lesson-header">
      <div className="lesson-kicker">
        <span className={`kind-badge ${lesson.kind}`}>{lessonKindLabel[lesson.kind]}</span>
        <span>ХИЧЭЭЛ {String(lesson.id).padStart(2, "0")}</span>
        {foundationMaterialById[lesson.id] && (
          <span className="teacher-lecture-badge">БАГШИЙН ДЭЛГЭРЭНГҮЙ ЛЕКЦ</span>
        )}
      </div>
      <div className="lesson-title-row">
        <div>
          <h1>{lesson.title}</h1>
          <p>{lesson.summary}.</p>
        </div>
        <div className="duration-badge">
          <strong>{LESSON_DURATION_MINUTES / 60}</strong>
          <span>ЦАГ</span>
          <small>{LESSON_DURATION_MINUTES} минут</small>
        </div>
      </div>
      <div className="lesson-meta">
        <span><Clock3 size={15} /> {LESSON_DURATION_MINUTES / 60} цаг</span>
        <span><BookOpen size={15} /> {lesson.module}</span>
        <span><Code2 size={15} /> Гардан дадлага</span>
        {lesson.kind === "ai" && (
          <span className="ai-meta"><Sparkles size={15} /> AI лаборатори</span>
        )}
      </div>
    </header>
  );
}
