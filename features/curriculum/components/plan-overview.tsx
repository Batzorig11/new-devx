import { lessonKindLabel, weekModules } from "@/features/course/data/curriculum";

export function PlanOverview() {
  return (
    <>
      <section className="plan-overview" aria-labelledby="overview-title">
        <div><span className="plan-section-number">01</span><h2 id="overview-title">Хөтөлбөрийн бүтэц</h2></div>
        <p>
          Долоо хоног бүр 4 удаагийн, тус бүр 2 цагийн багш удирдах лекцтэй.
          Хичээл бүр нээлтийн асуулт, дэлгэрэнгүй тайлбар, live demo, удирдамжтай
          дадлага, AI лаборатори, ойлголтын checkpoint гэсэн дарааллаар явагдана.
        </p>
        <div className="plan-legend" aria-label="Хичээлийн төрлүүд">
          {Object.entries(lessonKindLabel).map(([kind, label]) => (
            <span className={`plan-kind ${kind}`} key={kind}>{label}</span>
          ))}
        </div>
      </section>

      <nav className="week-jump-nav" aria-label="Долоо хоног сонгох">
        {weekModules.map(({ week }) => (
          <a href={`#week-${week}`} key={week}>{String(week).padStart(2, "0")}</a>
        ))}
      </nav>
    </>
  );
}
