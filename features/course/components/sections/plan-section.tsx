import { Check, Target } from "lucide-react";
import { LESSON_DURATION_MINUTES, type Lesson } from "../../data/curriculum";
import { foundationMaterialById } from "../../data/foundation-lessons";
import {
  getLearningGoals,
  getLessonOutcome,
  getLessonTimeline,
  fitTimelineToLesson,
  toolsets,
} from "../../lib/course-content";

export function PlanSection({ lesson }: { lesson: Lesson }) {
  const material = foundationMaterialById[lesson.id];
  const goals = material?.goals ?? getLearningGoals(lesson);
  const timeline = fitTimelineToLesson(material?.schedule ?? getLessonTimeline(lesson));

  return (
    <div className="content-section">
      <div className="lesson-grid">
        <section>
          <div className="section-heading"><span>01</span><h2>Лекцийн зорилго</h2></div>
          <div className="goal-list">
            {goals.map((goal) => <div key={goal}><i><Check size={13} /></i><p>{goal}</p></div>)}
          </div>
        </section>
        <aside className="outcome-note">
          <span>ХИЧЭЭЛИЙН ЭЦЭСТ</span>
          <Target size={22} aria-hidden="true" />
          <p>{material?.outcome ?? getLessonOutcome(lesson)}</p>
        </aside>
      </div>

      <section className="timeline-section">
        <div className="section-heading"><span>02</span><h2>2 цагийн лекцийн урсгал</h2><small>Нийт {LESSON_DURATION_MINUTES} минут</small></div>
        <div className="timeline-list">
          {timeline.map((item, index) => (
            <div className={`timeline-item ${item.kind ?? ""}`} key={`${item.start}-${item.title}`}>
              <div className="timeline-time"><time>{item.start}</time><small>{item.duration} мин</small></div>
              <div className="timeline-rail"><i>{index + 1}</i></div>
              <div className="timeline-copy"><h3>{item.title}</h3><p>{item.description}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="class-checklist">
        <div className="section-heading"><span>03</span><h2>Багшийн бэлтгэл</h2></div>
        <div className="checklist-grid">
          <div>
            <span>ӨМНӨ НЬ</span>
            {material ? (
              <ul>{material.prerequisites.map((item) => <li key={item}>{item}</li>)}</ul>
            ) : (
              <p>Өмнөх хичээлийн гол ойлголтыг сэргээх 2 асуулт, энэ лекцийг нээх нэг бодит жишээг бэлдэнэ.</p>
            )}
          </div>
          <div><span>ХЭРЭГСЭЛ</span><p>{(material?.tools ?? toolsets[lesson.module] ?? toolsets.Суурь).join(" · ")}</p></div>
          <div><span>НОТОЛГОО</span><p>{material?.evidence ?? "Код, screenshot, prompt ба review тэмдэглэлээс тохирохыг хичээлийн төгсгөлд өгнө."}</p></div>
        </div>
        {material && (
          <div className="readiness-note">
            <div><span>БЭЛТГЭЛ</span><p>{material.preparation}</p></div>
            <div><span>ЭНЭ ХИЧЭЭЛД ШААРДАХГҮЙ</span><p>{material.notRequired.join(" · ")}</p></div>
          </div>
        )}
      </section>
    </div>
  );
}
