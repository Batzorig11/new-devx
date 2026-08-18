import { Check, Flag, ShieldCheck } from "lucide-react";
import type { ReferenceLesson, LessonMode } from "../types";
import { CopyCodeBlock } from "../../components/copy-code-block";
import { AnswerDisclosure } from "./teacher-content";
import { LessonSection } from "./lesson-section";

export function LessonGuidedPractice({
  lesson,
  mode,
}: {
  lesson: ReferenceLesson;
  mode: LessonMode;
}) {
  const practice = lesson.guidedPractice;

  return (
    <LessonSection
      id="practice"
      number="04"
      eyebrow={`${practice.duration} · хосоор ажиллана`}
      title={`Guided Practice — ${practice.title}`}
      introduction={practice.goal}
    >
      {practice.starterCode?.map((block) => <CopyCodeBlock block={block} key={block.title} />)}

      <div className="practice-layout">
        <article className="practice-instructions">
          <div className="reference-card-label">ГҮЙЦЭТГЭХ ДАРААЛАЛ</div>
          <ol>
            {practice.instructions.map((item, index) => (
              <li key={item}><span>{index + 1}</span><p>{item}</p></li>
            ))}
          </ol>
        </article>
        <aside className="practice-constraints">
          <div className="reference-card-label"><ShieldCheck size={16} />ХЯЗГААРЛАЛТ</div>
          <ul>{practice.constraints.map((item) => <li key={item}>{item}</li>)}</ul>
        </aside>
      </div>

      <details className="reference-disclosure reference-hints">
        <summary>Гацсан үед нээх hints</summary>
        <ul>{practice.hints.map((hint) => <li key={hint}>{hint}</li>)}</ul>
      </details>

      <AnswerDisclosure mode={mode} label="Expected result — багш шалгах">
        <ul className="expected-checklist">
          {practice.expectedResult.map((item) => <li key={item}><Check size={14} />{item}</li>)}
        </ul>
        {practice.solutionCode?.map((block) => <CopyCodeBlock block={block} key={block.title} />)}
      </AnswerDisclosure>

      <div className="stretch-task">
        <Flag size={19} />
        <div><span>OPTIONAL STRETCH</span><p>{practice.stretchTask}</p></div>
      </div>

      <div className="practice-debrief">
        <div className="reference-card-label">DEBRIEF АСУУЛТ</div>
        {practice.debriefQuestions.map((item) => (
          <div key={item.question}>
            <p>{item.question}</p>
            <AnswerDisclosure mode={mode}><p>{item.answer}</p></AnswerDisclosure>
          </div>
        ))}
      </div>
    </LessonSection>
  );
}
