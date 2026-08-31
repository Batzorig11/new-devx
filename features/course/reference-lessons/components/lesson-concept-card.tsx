import { AlertTriangle, BookOpenText, CheckCircle2, ChevronRight, MessageCircleQuestion, Sparkles } from "lucide-react";
import type { LessonConcept, LessonMode } from "../types";
import { CopyCodeBlock } from "../../components/copy-code-block";
import { LessonDiagram } from "./lesson-diagram";
import { LessonFormatBlocks } from "./lesson-format-blocks";
import { AnswerDisclosure, TeacherOnly, TeachingNote } from "./teacher-content";

export function LessonConceptCard({
  concept,
  mode,
  tutorial = false,
}: {
  concept: LessonConcept;
  mode: LessonMode;
  tutorial?: boolean;
}) {
  return (
    <article id={`concept-${concept.id}`} className="reference-concept-card">
      <header>
        <span>{concept.number}</span>
        <div>
          <small>{concept.eyebrow} · {concept.duration}</small>
          <h3>{concept.title}</h3>
        </div>
      </header>

      <div className="concept-why">
        <strong>ЯАГААД ЧУХАЛ ВЭ?</strong>
        <p>{concept.whyItMatters}</p>
      </div>

      <div className="concept-explanation">
        <div className="reference-card-label"><BookOpenText size={16} />ТАЙЛБАР</div>
        {concept.explanation.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>

      <div className={`concept-model-grid${concept.example.blocks?.length ? " concept-model-grid--commands" : ""}`}>
        <div className="mental-model-card">
          <span><Sparkles size={15} />MENTAL MODEL</span>
          <strong>{concept.mentalModel.title}</strong>
          <p>{concept.mentalModel.explanation}</p>
        </div>
        <div className="concrete-example-card">
          <span>{tutorial ? "EXAMPLE" : "БОДИТ ЖИШЭЭ"}</span>
          <strong>{concept.example.title}</strong>
          <p>{concept.example.explanation}</p>
          {concept.example.code && (
            <CopyCodeBlock
              block={{
                title: concept.example.title,
                language: concept.example.language ?? "text",
                code: concept.example.code,
              }}
            />
          )}
          {concept.example.blocks?.length ? (
            <div className="example-block-stack">
              {concept.example.blocks.map((block) => <CopyCodeBlock block={block} key={block.title} />)}
            </div>
          ) : null}
          {tutorial && (
            <a className="tutorial-try-button" href="#practice">
              Өөрөө турших <ChevronRight size={16} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      {concept.formatBlocks?.length ? <LessonFormatBlocks blocks={concept.formatBlocks} /> : null}

      {concept.diagram && <LessonDiagram diagram={concept.diagram} />}

      <section className="concept-questions">
        <div className="reference-subheading">
          <div><MessageCircleQuestion size={17} /><span>СУРАГЧДААС АСУУ</span></div>
          <small>Хариулахаас нь өмнө 5–10 секунд хүлээ</small>
        </div>
        <ol>
          {concept.questions.map((item, index) => (
            <li key={item.question}>
              <div><span>{String(index + 1).padStart(2, "0")}</span><p>{item.question}</p></div>
              <AnswerDisclosure mode={mode}>
                <p><strong>Хариу:</strong> {item.answer}</p>
                {item.followUp && <p><strong>Follow-up:</strong> {item.followUp}</p>}
              </AnswerDisclosure>
            </li>
          ))}
        </ol>
      </section>

      <TeacherOnly mode={mode}>
        <div className="misconception-list">
          <div className="reference-card-label"><AlertTriangle size={16} />ТҮГЭЭМЭЛ ЭНДҮҮРЭЛ</div>
          {concept.misconceptions.map((item) => (
            <div key={item.claim}>
              <p><del>{item.claim}</del></p>
              <p><CheckCircle2 size={14} />{item.correction}</p>
            </div>
          ))}
        </div>
        <TeachingNote notes={concept.teachingNotes} />
      </TeacherOnly>

      <footer className="concept-takeaway">
        <span>KEY TAKEAWAY</span>
        <p>{concept.takeaway}</p>
      </footer>
    </article>
  );
}
