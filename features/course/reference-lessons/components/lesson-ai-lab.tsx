import { CheckCircle2, Sparkles } from "lucide-react";
import type { ReferenceLesson, LessonMode } from "../types";
import { CopyCodeBlock } from "../../components/copy-code-block";
import { LessonSection } from "./lesson-section";
import { LessonStepList } from "./lesson-step-list";
import { TeacherOnly, TeachingNote } from "./teacher-content";

export function LessonAiLab({
  lesson,
  mode,
}: {
  lesson: ReferenceLesson;
  mode: LessonMode;
}) {
  const lab = lesson.aiLab;

  return (
    <LessonSection
      id="ai-lab"
      number="05"
      eyebrow={`${lab.duration} · AI + verification`}
      title={`AI Lab — ${lab.title}`}
      introduction={lab.goal}
      className="reference-ai-section"
    >
      <div className="ai-lab-principle">
        <Sparkles size={20} />
        <p><strong>AI OUTPUT ≠ EVIDENCE.</strong> AI claim гаргана. Инженер тохирох tool, runtime эсвэл documentation-аар шалгана.</p>
      </div>

      <CopyCodeBlock block={{ title: "Ангид ашиглах prompt", language: "prompt", code: lab.prompt }} />
      <LessonStepList steps={lab.steps} mode={mode} />

      <div className="verification-table" role="table" aria-label="AI claim verification matrix">
        <div className="verification-row verification-head" role="row">
          <span role="columnheader">AI CLAIM</span>
          <span role="columnheader">ENGINEERING EVIDENCE</span>
          <span role="columnheader">PASS CONDITION</span>
        </div>
        {lab.verificationTable.map((item) => (
          <div className="verification-row" role="row" key={item.claim}>
            <strong role="cell">{item.claim}</strong>
            <p role="cell">{item.evidence}</p>
            <p role="cell"><CheckCircle2 size={14} />{item.pass}</p>
          </div>
        ))}
      </div>

      <TeacherOnly mode={mode}><TeachingNote notes={lab.teacherNotes} /></TeacherOnly>
    </LessonSection>
  );
}
