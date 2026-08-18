import { courseOutcomes } from "../data/course-plan";

export function PlanOutcomes() {
  return (
    <section className="plan-outcomes" id="outcomes">
      <div className="outcomes-heading">
        <span className="plan-section-number">02</span>
        <h2>Сургалтын төгсгөлд</h2>
        <p>
          Багш энэхүү lecture guide-ийг ашиглан суралцагчдыг зөвхөн код бичүүлэх бус,
          AI-тай хамтарсан хөгжүүлэлтийн шийдвэр бүрээ тайлбарлаж, шалгаж,
          хамгаалдаг түвшинд шаталж хүргэнэ.
        </p>
      </div>
      <ol>
        {courseOutcomes.map((outcome, index) => (
          <li key={outcome}><span>{String(index + 1).padStart(2, "0")}</span>{outcome}</li>
        ))}
      </ol>
    </section>
  );
}
