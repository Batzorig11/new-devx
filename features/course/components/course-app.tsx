"use client";

import { useCourse } from "../hooks/use-course";
import { CourseSidebar } from "./course-sidebar";
import { CourseTopbar } from "./course-topbar";
import { LessonHeader } from "./lesson-header";
import { LessonNavigation } from "./lesson-navigation";
import { SearchDialog } from "./search-dialog";
import { SectionTabs } from "./section-tabs";
import { AssignmentSection } from "./sections/assignment-section";
import { MaterialsSection } from "./sections/materials-section";
import { PlanSection } from "./sections/plan-section";

export function CourseApp() {
  const course = useCourse();

  return (
    <main className={`course-app ${course.sidebarCollapsed ? "sidebar-collapsed" : ""}`}>
      <CourseSidebar
        lesson={course.lesson}
        completed={course.completed}
        open={course.menuOpen}
        collapsed={course.sidebarCollapsed}
        onClose={() => course.setMenuOpen(false)}
        onToggleCollapse={course.toggleSidebar}
        onSelect={course.selectLesson}
      />

      <section className="lesson-main">
        <CourseTopbar
          lesson={course.lesson}
          isComplete={course.isComplete}
          onOpenMenu={() => course.setMenuOpen(true)}
          onOpenSearch={() => course.setSearchOpen(true)}
          onToggleComplete={course.toggleComplete}
        />

        <article className="lesson-article">
          <LessonHeader lesson={course.lesson} />
          <SectionTabs activeSection={course.section} onSelect={course.setSection} />

          {course.section === "plan" && <PlanSection lesson={course.lesson} />}
          {course.section === "materials" && <MaterialsSection lesson={course.lesson} />}
          {course.section === "assignment" && <AssignmentSection lesson={course.lesson} />}

          <LessonNavigation lesson={course.lesson} onSelect={course.selectLesson} />
        </article>
      </section>

      <SearchDialog
        open={course.searchOpen}
        query={course.searchQuery}
        onQueryChange={course.setSearchQuery}
        onClose={() => course.setSearchOpen(false)}
        onSelect={course.selectLesson}
      />
    </main>
  );
}
