import { Check, Sparkles } from "lucide-react";
import type { Lesson } from "../../data/curriculum";
import { foundationMaterialById } from "../../data/foundation-lessons";
import {
  getLectureTopics,
  getMentorPrompt,
  moduleNotes,
} from "../../lib/course-content";
import { DetailedMaterials } from "./detailed-materials";

const reviewRules = [
  {
    title: "Ажиллаж байна уу?",
    description: "Browser, test эсвэл compiler-оор нотолсон уу?",
  },
  {
    title: "Шаардлагатай нийцэж байна уу?",
    description: "Өгсөн хязгаарлалт бүр биелсэн үү?",
  },
  {
    title: "Сурагч тайлбарлаж чадаж байна уу?",
    description: "Мөр бүрийн үүрэг, шалтгаан, trade-off-ийг өөрийн үгээр хэлж чадаж байна уу?",
  },
  {
    title: "Аюулгүй юу?",
    description: "Нууц, өгөгдөл, edge case, зардалд эрсдэл нэмсэн үү?",
  },
];

export function MaterialsSection({ lesson }: { lesson: Lesson }) {
  const detailed = foundationMaterialById[lesson.id];
  if (detailed) return <DetailedMaterials material={detailed} />;

  const lectureTopics = getLectureTopics(lesson);
  const notes = moduleNotes[lesson.module] ?? moduleNotes.Суурь;

  return (
    <div className="content-section materials-section">
      <section className="reading-note">
        <div className="section-heading"><span>01</span><h2>Багшийн лекцийн үндсэн тайлбар</h2></div>
        <p className="lead-note"><strong>{lesson.title}</strong> — {lesson.summary.toLocaleLowerCase("mn")}.</p>
        {notes.map((note) => <p key={note}>{note}</p>)}
        <div className="ai-callout">
          <Sparkles size={19} />
          <div><span>AI ИНЖЕНЕРИЙН ӨНЦӨГ</span><p>{lesson.aiAngle}.</p></div>
        </div>
      </section>

      <section className="concept-section">
        <div className="section-heading"><span>02</span><h2>Дэлгэрэнгүй үзэх сэдвүүд</h2></div>
        <div className="chapter-stack">
          {lectureTopics.map((topic) => (
            <article className="lesson-chapter" key={topic.title}>
              <h2>{topic.title}</h2>
              <p className="chapter-lead">{topic.lead}</p>
              {topic.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <ul className="chapter-points">
                {topic.points.map((point) => (
                  <li key={point}><Check size={14} aria-hidden="true" /><span>{point}</span></li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="prompt-lab">
        <div className="prompt-head">
          <div><Sparkles size={17} /><span>Ангид ашиглах AI prompt</span></div>
          <small>Багш [ ] хэсгийг тухайн ангийн бодит жишээ, код, алдаагаар бөглөнө</small>
        </div>
        <pre><code>{getMentorPrompt(lesson)}</code></pre>
      </section>

      <section className="review-rules">
        <div className="section-heading"><span>03</span><h2>Багшийн verification checkpoint</h2></div>
        <ol>
          {reviewRules.map((rule, index) => (
            <li key={rule.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p><strong>{rule.title}</strong> {rule.description}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
