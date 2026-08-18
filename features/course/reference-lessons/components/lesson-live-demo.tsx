import { CheckCircle2, MonitorPlay, Wrench } from "lucide-react";
import type { ReferenceLesson, LessonMode } from "../types";
import { LessonSection } from "./lesson-section";
import { LessonStepList } from "./lesson-step-list";
import { TeacherOnly } from "./teacher-content";

export function LessonLiveDemo({
  lesson,
  mode,
}: {
  lesson: ReferenceLesson;
  mode: LessonMode;
}) {
  const demo = lesson.liveDemo;

  return (
    <LessonSection
      id="demo"
      number="03"
      eyebrow={`${demo.duration} · багш удирдана`}
      title={`Live Demo — ${demo.title}`}
      introduction={demo.goal}
      className="reference-demo-section"
    >
      <TeacherOnly mode={mode}>
        <div className="demo-setup-card">
          <div className="reference-card-label"><MonitorPlay size={16} />DEMO-ГИЙН ӨМНӨХ SETUP</div>
          <ul>{demo.setup.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </TeacherOnly>

      <LessonStepList steps={demo.steps} mode={mode} />

      <TeacherOnly mode={mode}>
        <div className="demo-result-grid">
          <article>
            <div className="reference-card-label"><CheckCircle2 size={16} />EXPECTED OUTPUT</div>
            <ul>{demo.expectedOutput.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article>
            <div className="reference-card-label"><Wrench size={16} />DEMO ЭВДЭРВЭЛ</div>
            <ul>{demo.recovery.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        </div>
      </TeacherOnly>
    </LessonSection>
  );
}
