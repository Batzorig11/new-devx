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

export function TeachingNote({ notes, label = "БАГШИЙН ТЭМДЭГЛЭЛ" }: { notes: string[]; label?: string }) {
  return (
    <aside className="reference-teaching-note">
      <div><Lightbulb size={17} /><span>{label}</span></div>
      <ul>{notes.map((note) => <li key={note}>{note}</li>)}</ul>
    </aside>
  );
}

export function AnswerDisclosure({
  mode,
  label = "Багшийн хариу",
  alwaysVisible = false,
  children,
}: {
  mode: LessonMode;
  label?: string;
  alwaysVisible?: boolean;
  children: ReactNode;
}) {
  const disclosure = (
    <details className="reference-disclosure" open={!alwaysVisible}>
      <summary><LockKeyhole size={14} />{label}</summary>
      <div>{children}</div>
    </details>
  );

  if (alwaysVisible) return disclosure;

  return (
    <TeacherOnly mode={mode}>
      {disclosure}
    </TeacherOnly>
  );
}
