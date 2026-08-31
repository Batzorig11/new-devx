import { ArrowRight, Check, Columns3, Info, ListChecks, Route, TriangleAlert } from "lucide-react";
import type { LessonFormatBlock } from "../types";

export function LessonFormatBlocks({ blocks }: { blocks: LessonFormatBlock[] }) {
  return (
    <div className="lesson-format-stack">
      {blocks.map((block) => {
        if (block.type === "comparison") {
          return (
            <section className="lesson-format-block format-comparison" key={block.title}>
              <header><Columns3 size={17} /><strong>{block.title}</strong></header>
              <div className="format-comparison-grid" role="table" aria-label={block.title}>
                <div className="format-comparison-row format-comparison-head" role="row">
                  <span role="columnheader">ШАЛГУУР</span>
                  <span role="columnheader">{block.columns[0]}</span>
                  <span role="columnheader">{block.columns[1]}</span>
                </div>
                {block.rows.map((row) => (
                  <div className="format-comparison-row" role="row" key={row.label}>
                    <strong role="cell">{row.label}</strong>
                    <p role="cell">{row.left}</p>
                    <p role="cell">{row.right}</p>
                  </div>
                ))}
              </div>
            </section>
          );
        }

        if (block.type === "sequence") {
          return (
            <section className="lesson-format-block format-sequence" key={block.title}>
              <header><Route size={17} /><strong>{block.title}</strong></header>
              <ol>
                {block.items.map((item, index) => (
                  <li key={item.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div><strong>{item.title}</strong><p>{item.detail}</p></div>
                    {index < block.items.length - 1 && <ArrowRight size={17} aria-hidden="true" />}
                  </li>
                ))}
              </ol>
            </section>
          );
        }

        if (block.type === "checklist") {
          return (
            <section className="lesson-format-block format-checklist" key={block.title}>
              <header><ListChecks size={17} /><strong>{block.title}</strong></header>
              <ul>{block.items.map((item) => <li key={item}><Check size={15} /><span>{item}</span></li>)}</ul>
            </section>
          );
        }

        const CalloutIcon = block.tone === "warning" ? TriangleAlert : Info;
        return (
          <aside className={`lesson-format-block format-callout format-callout--${block.tone ?? "info"}`} key={`${block.eyebrow}-${block.title}`}>
            <CalloutIcon size={20} />
            <div><span>{block.eyebrow}</span><strong>{block.title}</strong><p>{block.body}</p></div>
          </aside>
        );
      })}
    </div>
  );
}
