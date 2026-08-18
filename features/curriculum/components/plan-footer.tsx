import { PlanBrand } from "./plan-brand";
import { COURSE_DURATION_HOURS } from "@/features/course/data/curriculum";

export function PlanFooter() {
  return (
    <footer className="plan-footer">
      <PlanBrand />
      <p>12 долоо хоног · 48 хичээл · {COURSE_DURATION_HOURS} цаг</p>
      <a href="#top">Дээш буцах ↑</a>
    </footer>
  );
}
