import type { ReactNode } from "react";
import type { ReferenceLessonSectionId } from "../types";

type LessonSectionProps = {
  id: ReferenceLessonSectionId;
  number: string;
  eyebrow: string;
  title: string;
  introduction?: string;
  children: ReactNode;
  className?: string;
};

export function LessonSection({
  id,
  number,
  eyebrow,
  title,
  introduction,
  children,
  className = "",
}: LessonSectionProps) {
  return (
    <section id={id} className={`reference-section ${className}`.trim()}>
      <header className="reference-section-heading">
        <span>{number}</span>
        <div>
          <small>{eyebrow}</small>
          <h2>{title}</h2>
          {introduction && <p>{introduction}</p>}
        </div>
      </header>
      {children}
    </section>
  );
}
