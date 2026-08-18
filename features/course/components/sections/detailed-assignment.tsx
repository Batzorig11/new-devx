import { Check, CheckCircle2, FileCheck2 } from "lucide-react";
import type { DetailedLessonMaterial } from "../../data/foundation-lessons";
import { CopyCodeBlock } from "../copy-code-block";

export function DetailedAssignment({ material }: { material: DetailedLessonMaterial }) {
  return (
    <div className="content-section detailed-assignment">
      <section className="exercise-section">
        <div className="section-heading">
          <span>01</span>
          <h2>Багшийн удирдах ангийн дасгал</h2>
        </div>
        <div className="exercise-stack">
          {material.exercises.map((exercise) => (
            <article className="exercise-card" key={exercise.title}>
              <div className="exercise-title">
                <div><span>{exercise.duration}</span><h3>{exercise.title}</h3></div>
                <p>{exercise.objective}</p>
              </div>
              <ol className="exercise-steps">
                {exercise.steps.map((step, index) => (
                  <li key={step}><span>{index + 1}</span><p>{step}</p></li>
                ))}
              </ol>
              {exercise.blocks?.map((block) => <CopyCodeBlock block={block} key={block.title} />)}
              <div className="exercise-checks">
                <strong>Багш дараах баримтаар шалгана</strong>
                <ul>
                  {exercise.checks.map((check) => (
                    <li key={check}><CheckCircle2 size={15} />{check}</li>
                  ))}
                </ul>
              </div>
              {(exercise.hint || exercise.solution) && (
                <div className="answer-details">
                  {exercise.hint && <details><summary>Гацвал hint харах</summary><p>{exercise.hint}</p></details>}
                  {exercise.solution && <details><summary>Шалгасны дараа тайлбар харах</summary><p>{exercise.solution}</p></details>}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="homework-card">
        <div className="homework-head">
          <div className="deliverable-icon"><FileCheck2 size={24} /></div>
          <div>
            <span>СУРАГЧДАД ӨГӨХ БИЕ ДААЛТ · {material.assignment.due}</span>
            <h2>{material.assignment.title}</h2>
            <p>{material.assignment.description}</p>
          </div>
        </div>
        {material.assignment.starter && <CopyCodeBlock block={material.assignment.starter} />}
        {material.assignment.blocks?.map((block) => <CopyCodeBlock block={block} key={block.title} />)}
        <div className="homework-grid">
          <div>
            <h3>Гүйцэтгэх дараалал</h3>
            <ol>{material.assignment.steps.map((step) => <li key={step}>{step}</li>)}</ol>
          </div>
          <div>
            <h3>Хүлээлгэн өгөх зүйл</h3>
            <ul>
              {material.assignment.deliverables.map((item) => <li key={item}><Check size={14} />{item}</li>)}
            </ul>
            <h3>Дууссан гэж үзэх шалгуур</h3>
            <ul>
              {material.assignment.criteria.map((item) => <li key={item}><Check size={14} />{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="quiz-section">
        <div className="section-heading">
          <span>02</span>
          <h2>Ангид асуух мэдлэг шалгах асуултууд</h2>
        </div>
        <div className="quiz-list">
          {material.quiz.map((item, index) => (
            <details key={item.question}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.question}</summary>
              <p><strong>{item.answer}</strong> {item.explanation}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
