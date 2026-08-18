import { Lightbulb, LockKeyhole } from "lucide-react";
import type { ReactNode } from "react";
import type { LessonMode } from "../types";

export function TeacherOnly({
  mode,
  children,
}: {
  mode: LessonMode;
  children: ReactNode;
}) {
  if (mode !== "teacher") return null;
  return <div className="teacher-only-content">{children}</div>;
}

export function TeachingNote({ notes }: { notes: string[] }) {
  return (
    <aside className="reference-teaching-note">
      <div><Lightbulb size={17} /><span>БАГШИЙН ТЭМДЭГЛЭЛ</span></div>
      <ul>{notes.map((note) => <li key={note}>{note}</li>)}</ul>
    </aside>
  );
}

export function AnswerDisclosure({
  mode,
  label = "Багшийн хариу",
  children,
}: {
  mode: LessonMode;
  label?: string;
  children: ReactNode;
}) {
  return (
    <TeacherOnly mode={mode}>
      <details className="reference-disclosure" open>
        <summary><LockKeyhole size={14} />{label}</summary>
        <div>{children}</div>
      </details>
    </TeacherOnly>
  );
}
