import Link from "next/link";
import { lessonKindLabel, lessons, weekModules } from "./curriculum";

const courseStats = [
  { value: "12", label: "долоо хоног" },
  { value: "48", label: "хичээл" },
  { value: "144", label: "нийт цаг" },
  { value: "4", label: "бодит төсөл" },
];

const courseOutcomes = [
  "Responsive, хүртээмжтэй веб интерфэйсийг сууриас нь бүтээнэ.",
  "JavaScript, React, Next.js ашиглан production апп хөгжүүлнэ.",
  "AI редактор, CLI агент, prompt ба context engineering-ийг зөв ашиглана.",
  "LLM API, streaming, tool calling бүхий AI бүтээгдэхүүн бүтээнэ.",
];

export default function CoursePlan() {
  return (
    <main className="course-plan-page">
      <header className="plan-hero">
        <nav className="plan-nav" aria-label="Үндсэн цэс">
          <Link className="plan-brand" href="/" aria-label="Хичээлүүд рүү буцах">
            <span>AI</span>
            <strong>FRONTEND ENGINEERING</strong>
          </Link>
          <div>
            <Link href="/">Хичээлүүд</Link>
            <a href="#curriculum">Хөтөлбөр</a>
            <a href="#outcomes">Үр дүн</a>
          </div>
        </nav>

        <div className="plan-hero-content" id="top">
          <div className="plan-edition">2026 · СУРГАЛТЫН НЭГДСЭН ТӨЛӨВЛӨГӨӨ</div>
          <h1>
            AI-Native
            <br />
            Frontend Engineering
          </h1>
          <p>
            Вебийн сууриас production түвшний AI бүтээгдэхүүн хүртэлх мэдлэг,
            гардан дадлага, агенттай хөгжүүлэлтийг нэг урсгалд нэгтгэсэн
            эрчимжүүлсэн хөтөлбөр.
          </p>
        </div>

        <div className="plan-stats" aria-label="Сургалтын тоон мэдээлэл">
          {courseStats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </header>

      <section className="plan-overview" aria-labelledby="overview-title">
        <div>
          <span className="plan-section-number">01</span>
          <h2 id="overview-title">Хөтөлбөрийн бүтэц</h2>
        </div>
        <p>
          Долоо хоног бүр 4 удаагийн, тус бүр 3 цагийн хичээлтэй. Үндсэн
          ойлголт, AI лаборатори, гардан дадлага болон төслийн ажлыг шаталсан
          байдлаар гүйцэтгэнэ.
        </p>
        <div className="plan-legend" aria-label="Хичээлийн төрлүүд">
          {Object.entries(lessonKindLabel).map(([kind, label]) => (
            <span className={`plan-kind ${kind}`} key={kind}>
              {label}
            </span>
          ))}
        </div>
      </section>

      <nav className="week-jump-nav" aria-label="Долоо хоног сонгох">
        {weekModules.map(({ week }) => (
          <a href={`#week-${week}`} key={week}>
            {String(week).padStart(2, "0")}
          </a>
        ))}
      </nav>

      <section className="curriculum-list" id="curriculum">
        {weekModules.map(({ week, module }) => {
          const weekLessons = lessons.filter((lesson) => lesson.week === week);

          return (
            <article className="curriculum-week" id={`week-${week}`} key={week}>
              <header className="week-title-block">
                <div>
                  <span>ДОЛОО ХОНОГ</span>
                  <strong>{String(week).padStart(2, "0")}</strong>
                </div>
                <div>
                  <span>МОДУЛЬ</span>
                  <h2>{module}</h2>
                </div>
                <small>12 ЦАГ · 4 ХИЧЭЭЛ</small>
              </header>

              <ol className="week-lessons">
                {weekLessons.map((lesson) => (
                  <li className={`plan-lesson ${lesson.kind}`} key={lesson.id}>
                    <div className="plan-lesson-head">
                      <span className="plan-lesson-number">
                        {String(lesson.id).padStart(2, "0")}
                      </span>
                      <span className={`plan-kind ${lesson.kind}`}>
                        {lessonKindLabel[lesson.kind]}
                      </span>
                      <small>3 ЦАГ</small>
                    </div>
                    <h3>{lesson.title}</h3>
                    <p>{lesson.summary}.</p>
                    <div className="plan-ai-angle">
                      <span>AI ДАДЛАГА</span>
                      <p>{lesson.aiAngle}.</p>
                    </div>
                  </li>
                ))}
              </ol>
            </article>
          );
        })}
      </section>

      <section className="plan-outcomes" id="outcomes">
        <div className="outcomes-heading">
          <span className="plan-section-number">02</span>
          <h2>Сургалтын төгсгөлд</h2>
          <p>
            Суралцагч зөвхөн код бичих бус, AI-тай хамтарсан хөгжүүлэлтийн
            шийдвэр бүрээ тайлбарлаж, шалгаж, хамгаалж чаддаг болно.
          </p>
        </div>
        <ol>
          {courseOutcomes.map((outcome, index) => (
            <li key={outcome}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {outcome}
            </li>
          ))}
        </ol>
      </section>

      <footer className="plan-footer">
        <div className="plan-brand">
          <span>AI</span>
          <strong>FRONTEND ENGINEERING</strong>
        </div>
        <p>12 долоо хоног · 48 хичээл · 144 цаг</p>
        <a href="#top">Дээш буцах ↑</a>
      </footer>
    </main>
  );
}
