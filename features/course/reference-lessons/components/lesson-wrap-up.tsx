import { ArrowRight, Check, MessageSquareQuote } from "lucide-react";
import type { ReferenceLesson, LessonMode } from "../types";
import { LessonSection } from "./lesson-section";
import { AnswerDisclosure, TeacherOnly } from "./teacher-content";

export function LessonWrapUp({
  lesson,
  mode,
}: {
  lesson: ReferenceLesson;
  mode: LessonMode;
}) {
  const wrap = lesson.wrapUp;

  return (
    <LessonSection
      id="wrap-up"
      number="07"
      eyebrow="Хичээлийг хаах"
      title="Wrap-up — нэг mental model-той гар"
    >
      <div className="wrap-summary-grid">
        <article>
          <div className="reference-card-label">ӨНӨӨДӨР СУРСАН</div>
          <ul>{wrap.summary.map((item) => <li key={item}><Check size={14} />{item}</li>)}</ul>
        </article>
        <aside>
          <span>FINAL MENTAL MODEL</span>
          <p>{wrap.finalModel}</p>
        </aside>
      </div>

      <div className="reference-preflight-grid wrap-readiness-grid">
        <article>
          <span>ОДОО ӨӨРӨӨ ХИЙЖ ЧАДНА</span>
          <ul>{wrap.abilities.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
        <article>
          <span>ДАРААГИЙН ХИЧЭЭЛЭЭС ӨМНӨ</span>
          <ul>{wrap.beforeNextLesson.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
      </div>

      <section className="exit-ticket-reference">
        <div className="reference-subheading"><div><MessageSquareQuote size={17} /><span>EXIT TICKET</span></div><small>Сурагч бүр 3 хариу өгнө</small></div>
        <div>
          {wrap.exitTicket.map((item, index) => (
            <article key={item.question}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item.question}</p>
              <AnswerDisclosure mode={mode}><p>{item.answer}</p></AnswerDisclosure>
            </article>
          ))}
        </div>
      </section>

      <div className="next-lesson-bridge">
        <div><span>ДАРААГИЙН ХИЧЭЭЛ</span><h3>{wrap.nextLesson.title}</h3></div>
        <ArrowRight size={24} />
        <p>{wrap.nextLesson.connection}</p>
      </div>

      <TeacherOnly mode={mode}>
        <blockquote className="teacher-close-quote"><span>ХААЛТЫН ӨГҮҮЛБЭР</span><p>{wrap.teacherClose}</p></blockquote>
      </TeacherOnly>
    </LessonSection>
  );
}
