import { Brain, PenLine } from "lucide-react";
import type { ReferenceLesson, LessonMode } from "../types";
import { LessonSection } from "./lesson-section";
import { AnswerDisclosure } from "./teacher-content";

export function LessonCheckpoint({
  lesson,
  mode,
}: {
  lesson: ReferenceLesson;
  mode: LessonMode;
}) {
  return (
    <LessonSection
      id="checkpoint"
      number="06"
      eyebrow={`${lesson.checkpoint.duration} · AI ашиглахгүй`}
      title="Checkpoint — ойлголт ба хэрэглээг шалгах"
      introduction={lesson.checkpoint.instructions}
    >
      <div className="checkpoint-groups">
        {(["concept", "application"] as const).map((type) => (
          <section key={type}>
            <div className="reference-subheading">
              <div>
                {type === "concept" ? <Brain size={17} /> : <PenLine size={17} />}
                <span>{type === "concept" ? "CONCEPT QUESTIONS" : "APPLICATION QUESTIONS"}</span>
              </div>
            </div>
            <ol>
              {lesson.checkpoint.questions.filter((item) => item.type === type).map((item, index) => (
                <li key={item.question}>
                  <div className="checkpoint-question">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{item.question}</p>
                  </div>
                  <AnswerDisclosure mode={mode}>
                    <p><strong>Хариу:</strong> {item.answer}</p>
                    {item.followUp && <p><strong>Follow-up:</strong> {item.followUp}</p>}
                  </AnswerDisclosure>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </LessonSection>
  );
}
