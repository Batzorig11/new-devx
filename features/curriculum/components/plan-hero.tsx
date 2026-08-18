import Link from "next/link";
import { courseStats } from "../data/course-plan";
import { PlanBrand } from "./plan-brand";

export function PlanHero() {
  return (
    <header className="plan-hero">
      <nav className="plan-nav" aria-label="Үндсэн цэс">
        <PlanBrand linked />
        <div>
          <Link href="/">Хичээлүүд</Link>
          <a href="#curriculum">Хөтөлбөр</a>
          <a href="#outcomes">Үр дүн</a>
        </div>
      </nav>

      <div className="plan-hero-content" id="top">
        <div className="plan-edition">2026 · СУРГАЛТЫН НЭГДСЭН ТӨЛӨВЛӨГӨӨ</div>
        <h1>AI-Native<br />Frontend Engineering</h1>
        <p>
          Багш хичээл бүрээ шууд удирдан заахад зориулсан дэлгэрэнгүй lecture guide.
          Вебийн сууриас production түвшний AI бүтээгдэхүүн хүртэлх тайлбар,
          live demo, ангийн асуулт, дадлага, үнэлгээг нэг урсгалд нэгтгэнэ.
        </p>
      </div>

      <div className="plan-stats" aria-label="Сургалтын тоон мэдээлэл">
        {courseStats.map((stat) => (
          <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>
        ))}
      </div>
    </header>
  );
}
