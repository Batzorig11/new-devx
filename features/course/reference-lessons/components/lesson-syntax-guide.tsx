import { Braces, ChevronRight } from "lucide-react";
import type { ReferenceLesson } from "../types";
import { CopyCodeBlock } from "../../components/copy-code-block";

export function LessonSyntaxGuide({
  guide,
}: {
  guide: NonNullable<ReferenceLesson["syntaxGuide"]>;
}) {
  const columns = guide.columnLabels ?? ["PROPERTY", "ТҮГЭЭМЭЛ УТГА", "ЯМАР ҮҮРЭГТЭЙ ВЭ?"];

  return (
    <section className="lesson-syntax-guide" aria-labelledby="lesson-syntax-title">
      <header>
        <div className="reference-card-label"><Braces size={16} />{guide.eyebrow ?? "SYNTAX GUIDE"}</div>
        <h3 id="lesson-syntax-title">{guide.title}</h3>
        <p>{guide.introduction}</p>
      </header>

      <div className="lesson-syntax-stack">
        {guide.groups.map((group) => (
          <article className="lesson-syntax-group" key={group.title}>
            <div className="lesson-syntax-group__intro">
              <span>{group.badge ?? (group.appliesTo === "container" ? "CONTAINER" : "ITEM")}</span>
              <h4>{group.title}</h4>
              <p>{group.explanation}</p>
            </div>

            <CopyCodeBlock block={group.code} />

            <div className="syntax-property-list" role="list" aria-label={`${group.title} property тайлбар`}>
              <div className="syntax-property-head" aria-hidden="true">
                <span>{columns[0]}</span>
                <span>{columns[1]}</span>
                <span>{columns[2]}</span>
              </div>
              {group.properties.map((property) => (
                <div role="listitem" key={property.property}>
                  <code>{property.property}</code>
                  <code>{property.values}</code>
                  <p>{property.meaning}</p>
                </div>
              ))}
            </div>

            <a className="tutorial-try-button" href="#practice">
              Өөрөө турших <ChevronRight size={16} aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
