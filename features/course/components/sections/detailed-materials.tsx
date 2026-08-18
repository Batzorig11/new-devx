import { Check, ExternalLink } from "lucide-react";
import type { DetailedLessonMaterial } from "../../data/foundation-lessons";
import { CopyCodeBlock } from "../copy-code-block";

export function DetailedMaterials({ material }: { material: DetailedLessonMaterial }) {
  return (
    <div className="content-section detailed-materials">
      <section className="study-intro">
        <div className="section-heading">
          <span>01</span>
          <h2>Багшийн дэлгэрэнгүй лекцийн материал</h2>
        </div>
        <p>
          Доорх бүлгүүдийг дарааллаар нь заана. Тайлбар бүрийг самбарын зураглал,
          live demo, сурагчдаар урьдчилан таалгах асуулт болон богино ойлголтын
          шалгалттай холбоорой. Кодын блок бүрийг лекцээс өмнө ажиллуулж шалгана.
        </p>
      </section>

      <div className="chapter-stack">
        {material.chapters.map((chapter, index) => {
          const checkpoint = chapter.points?.at(-1) ?? chapter.lead;

          return (
            <article className="lesson-chapter" key={chapter.title}>
              <h2>{chapter.title}</h2>
              <p className="chapter-lead">{chapter.lead}</p>
              <div className="teacher-cue">
                <span>БАГШИЙН ЗААХ ТЭМДЭГЛЭЛ · {String(index + 1).padStart(2, "0")}</span>
                <p><strong>Нээх асуулт:</strong> “Энэ ойлголт байхгүй бол хэрэглэгч эсвэл хөгжүүлэгчид ямар асуудал харагдах вэ?”</p>
                <p><strong>Тайлбарын дараалал:</strong> эхлээд шалтгаан, дараа нь механизм, эцэст нь бодит evidence-ийг харуулна. Demo-гийн үр дүнг ажиллуулахаас өмнө сурагчдаар таалгана.</p>
                <p><strong>Checkpoint:</strong> сурагч “{checkpoint}” санааг өөрийн жишээгээр тайлбарлаж чадаж байгаа эсэхийг шалгана.</p>
              </div>
              {chapter.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {chapter.points && (
                <ul className="chapter-points">
                  {chapter.points.map((point) => (
                    <li key={point}><Check size={14} aria-hidden="true" /><span>{point}</span></li>
                  ))}
                </ul>
              )}
              {chapter.blocks?.map((block) => <CopyCodeBlock block={block} key={block.title} />)}
            </article>
          );
        })}
      </div>

      <section className="glossary-section">
        <div className="section-heading">
          <span>02</span>
          <h2>Лекцэд тайлбарлах нэр томьёо</h2>
        </div>
        <dl className="glossary-grid">
          {material.glossary.map((item) => (
            <div key={item.term}><dt>{item.term}</dt><dd>{item.definition}</dd></div>
          ))}
        </dl>
      </section>

      <section className="ai-workshop">
        <div className="section-heading">
          <span>03</span>
          <h2>{material.aiLab.title}</h2>
        </div>
        <p className="chapter-lead">{material.aiLab.purpose}</p>
        <CopyCodeBlock
          block={{
            title: "AI лабораторийн prompt",
            language: "prompt",
            code: material.aiLab.prompt,
            note: "Багш [ ] доторх хэсгийг ангийн бодит баримт, код эсвэл алдаагаар сольж ашиглана.",
          }}
        />
        <div className="lab-grid">
          <div>
            <span>БАГШИЙН УДИРДАХ ДАРААЛАЛ</span>
            <ol>{material.aiLab.steps.map((step) => <li key={step}>{step}</li>)}</ol>
          </div>
          <div>
            <span>ОЙЛГОЛТЫН CHECKPOINT</span>
            <ul>
              {material.aiLab.checks.map((check) => (
                <li key={check}><Check size={13} />{check}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {material.references && (
        <section className="reference-section">
          <div className="section-heading">
            <span>04</span>
            <h2>Албан ёсны лавлах</h2>
          </div>
          <div className="reference-list">
            {material.references.map((reference) => (
              <a href={reference.url} target="_blank" rel="noreferrer" key={reference.url}>
                <span><strong>{reference.label}</strong><small>{reference.note}</small></span>
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
