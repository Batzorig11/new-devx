import type { ReferenceLesson, LessonMode } from "../types";
import { LessonConceptCard } from "./lesson-concept-card";
import { LessonSection } from "./lesson-section";
import { LessonResourceLinks } from "./lesson-resource-links";
import { LessonSyntaxGuide } from "./lesson-syntax-guide";

export function LessonTeach({
  lesson,
  mode,
}: {
  lesson: ReferenceLesson;
  mode: LessonMode;
}) {
  const tutorial = lesson.teachStyle === "tutorial";
  const content = lesson.teachContent;

  return (
    <LessonSection
      id="teach"
      number="02"
      eyebrow={content?.eyebrow ?? (tutorial ? "Алхамчилсан tutorial" : "Үндсэн лекц")}
      title={content?.title ?? (tutorial ? "Агуулга — тайлбар, жишээ, нотолгоо" : "Teach — ойлголтыг урсгал болгон холбо")}
      introduction={content?.introduction ?? (tutorial
        ? "Бүлэг бүрийг дарааллаар нь уншаад жижиг example-ийг ажиллуул. Шинэ ойлголт бүрийг mental model, дүрслэл, харьцуулалт болон бодит нотолгоотой холбосны дараа Practice хэсэгт өөрөө туршина."
        : "Concept бүрийг тодорхойлолтоор эхлүүлээд зогсохгүй яагаад хэрэгтэй, бодит системд хаана байрлах, юугаар батлахыг дарааллаар нь заана.")}
    >
      {tutorial && (
        <nav className="tutorial-chapter-nav" aria-label={content?.chapterLabel ?? "Хичээлийн агуулгын бүлгүүд"}>
          <strong>{content?.chapterLabel ?? "ЭНЭ ХИЧЭЭЛИЙН БҮЛГҮҮД"}</strong>
          <div>
            {lesson.concepts.map((concept) => (
              <a href={`#concept-${concept.id}`} key={concept.id}>
                <span>{concept.number}</span>{concept.tutorialLabel ?? concept.title}
              </a>
            ))}
          </div>
        </nav>
      )}

      {lesson.resources?.length ? <LessonResourceLinks resources={lesson.resources} /> : null}

      {lesson.syntaxGuide && <LessonSyntaxGuide guide={lesson.syntaxGuide} />}

      <div className="reference-concept-stack">
        {lesson.concepts.map((concept) => (
          <LessonConceptCard concept={concept} mode={mode} tutorial={tutorial} key={concept.id} />
        ))}
      </div>
    </LessonSection>
  );
}
