import { ArrowRight } from "lucide-react";
import type { LessonDiagram as LessonDiagramData } from "../types";

export function LessonDiagram({ diagram }: { diagram: LessonDiagramData }) {
  return (
    <figure className="reference-diagram">
      <figcaption>{diagram.label}</figcaption>
      <div>
        {diagram.nodes.map((node, index) => (
          <div className="diagram-node-group" key={`${node.title}-${index}`}>
            <div className="diagram-node">
              <strong>{node.title}</strong>
              <span>{node.detail}</span>
            </div>
            {index < diagram.nodes.length - 1 && <ArrowRight size={18} aria-hidden="true" />}
          </div>
        ))}
      </div>
    </figure>
  );
}
