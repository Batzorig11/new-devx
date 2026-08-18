import { Check, Clock3, Laptop, Target } from "lucide-react";
import type { ReferenceLesson, LessonMode } from "../types";
import { LessonSection } from "./lesson-section";
import { TeacherOnly, TeachingNote } from "./teacher-content";

export function LessonOverview({
  lesson,
  mode,
}: {
  lesson: ReferenceLesson;
  mode: LessonMode;
}) {
  return (
    <LessonSection
      id="overview"
      number="01"
      eyebrow="Хичээл эхлэхийн өмнө"
      title="Overview — өнөөдөр хаашаа хүрэх вэ?"
      introduction={lesson.teacherGoal}
    >
      <div className="reference-overview-grid">
        <article className="overview-objectives">
          <div className="reference-card-label"><Target size={16} />СУРАЛЦАХ ЗОРИЛГО</div>
          <ul>
            {lesson.overview.objectives.map((objective) => (
              <li key={objective}><Check size={14} /><span>{objective}</span></li>
            ))}
          </ul>
        </article>
        <article className="overview-outcomes">
          <span>ХИЧЭЭЛИЙН ЭЦЭСТ</span>
          <strong>Сурагч нотолгоонд тулгуурлан тайлбарлана.</strong>
          <ul>{lesson.overview.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul>
        </article>
      </div>

      <div className="reference-preflight-grid">
        <article>
          <span>PREREQUISITES</span>
          <ul>{lesson.overview.prerequisites.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
        <article>
          <span><Laptop size={14} />TOOLS</span>
          <ul>{lesson.overview.tools.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
      </div>

      <TeacherOnly mode={mode}>
        <TeachingNote notes={lesson.overview.preparation} />
      </TeacherOnly>

      <div className="reference-timeline">
        <div className="reference-subheading">
          <div><Clock3 size={17} /><span>120 МИНУТЫН УРСГАЛ</span></div>
          <small>Нийт {lesson.durationMinutes} минут</small>
        </div>
        <ol>
          {lesson.overview.timeline.map((item) => (
            <li key={`${item.start}-${item.title}`}>
              <time>{item.start}</time>
              <div><strong>{item.title}</strong><p>{item.teacherAction}</p></div>
              <span>{item.duration}</span>
            </li>
          ))}
        </ol>
      </div>
    </LessonSection>
  );
}
