import {
  LESSON_DURATION_MINUTES,
  WEEK_DURATION_HOURS,
  lessonKindLabel,
  lessons,
  weekModules,
} from "@/features/course/data/curriculum";

export function CurriculumList() {
  return (
    <section className="curriculum-list" id="curriculum">
      {weekModules.map(({ week, module }) => {
        const weekLessons = lessons.filter((lesson) => lesson.week === week);

        return (
          <article className="curriculum-week" id={`week-${week}`} key={week}>
            <header className="week-title-block">
              <div><span>ДОЛОО ХОНОГ</span><strong>{String(week).padStart(2, "0")}</strong></div>
              <div><span>МОДУЛЬ</span><h2>{module}</h2></div>
              <small>{WEEK_DURATION_HOURS} ЦАГ · 4 ХИЧЭЭЛ</small>
            </header>

            <ol className="week-lessons">
              {weekLessons.map((lesson) => (
                <li className={`plan-lesson ${lesson.kind}`} key={lesson.id}>
                  <div className="plan-lesson-head">
                    <span className="plan-lesson-number">{String(lesson.id).padStart(2, "0")}</span>
                    <span className={`plan-kind ${lesson.kind}`}>{lessonKindLabel[lesson.kind]}</span>
                    <small>{LESSON_DURATION_MINUTES / 60} ЦАГ</small>
                  </div>
                  <h3>{lesson.title}</h3>
                  <p>{lesson.summary}.</p>
                  <div className="plan-ai-angle"><span>AI ДАДЛАГА</span><p>{lesson.aiAngle}.</p></div>
                </li>
              ))}
            </ol>
          </article>
        );
      })}
    </section>
  );
}
