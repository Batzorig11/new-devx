import { Eye, MessageSquareText } from "lucide-react";
import type { LessonMode, LessonStep } from "../types";
import { CopyCodeBlock } from "../../components/copy-code-block";
import { TeacherOnly } from "./teacher-content";

export function LessonStepList({
  steps,
  mode,
}: {
  steps: LessonStep[];
  mode: LessonMode;
}) {
  return (
    <ol className="reference-step-list">
      {steps.map((step, index) => (
        <li key={step.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <div className="step-main">
            <h3>{step.title}</h3>
            <p>{step.instruction}</p>
            {step.code && <CopyCodeBlock block={step.code} />}
            {step.observe && (
              <div className="step-observe"><Eye size={15} /><p><strong>Сурагчид ажиглах:</strong> {step.observe}</p></div>
            )}
            <TeacherOnly mode={mode}>
              {(step.explain || step.expected) && (
                <div className="step-explain">
                  <MessageSquareText size={15} />
                  <p><strong>{step.explain ? "Багш тайлбарлах:" : "Expected:"}</strong> {step.explain ?? step.expected}</p>
                </div>
              )}
            </TeacherOnly>
          </div>
        </li>
      ))}
    </ol>
  );
}
