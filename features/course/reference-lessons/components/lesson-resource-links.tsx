import { ExternalLink, Library } from "lucide-react";
import type { ReferenceLesson } from "../types";

export function LessonResourceLinks({ resources }: { resources: NonNullable<ReferenceLesson["resources"]> }) {
  return (
    <aside className="lesson-resource-links" aria-labelledby="lesson-resource-links-title">
      <header>
        <Library size={17} aria-hidden="true" />
        <div><span>LIVE SOURCE CHECK</span><strong id="lesson-resource-links-title">Ангид нээх албан ёсны эх сурвалж</strong></div>
      </header>
      <div>
        {resources.map((resource) => (
          <a href={resource.href} target="_blank" rel="noreferrer" key={resource.href}>
            <span><strong>{resource.title}</strong><small>{resource.description}</small></span>
            <ExternalLink size={15} aria-hidden="true" />
          </a>
        ))}
      </div>
    </aside>
  );
}
