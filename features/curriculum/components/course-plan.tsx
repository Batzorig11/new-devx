import { CurriculumList } from "./curriculum-list";
import { PlanFooter } from "./plan-footer";
import { PlanHero } from "./plan-hero";
import { PlanOutcomes } from "./plan-outcomes";
import { PlanOverview } from "./plan-overview";

export function CoursePlan() {
  return (
    <main className="course-plan-page">
      <PlanHero />
      <PlanOverview />
      <CurriculumList />
      <PlanOutcomes />
      <PlanFooter />
    </main>
  );
}
