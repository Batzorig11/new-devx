import type { ReferenceLesson, LessonMode } from "../types";
import { LessonConceptCard } from "./lesson-concept-card";
import { LessonSection } from "./lesson-section";

export function LessonTeach({
  lesson,
  mode,
}: {
  lesson: ReferenceLesson;
  mode: LessonMode;
}) {
  return (
    <LessonSection
      id="teach"
      number="02"
      eyebrow="Үндсэн лекц"
      title="Teach — ойлголтыг урсгал болгон холбо"
      introduction="Concept бүрийг тодорхойлолтоор эхлүүлээд зогсохгүй яагаад хэрэгтэй, бодит системд хаана байрлах, юугаар батлахыг дарааллаар нь заана."
    >
      <div className="reference-concept-stack">
        {lesson.concepts.map((concept) => (
          <LessonConceptCard concept={concept} mode={mode} key={concept.id} />
        ))}
      </div>
    </LessonSection>
  );
}
