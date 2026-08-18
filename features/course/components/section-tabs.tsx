"use client";

import { sectionTabs } from "../lib/course-content";
import type { CourseSection } from "../types";

type SectionTabsProps = {
  activeSection: CourseSection;
  onSelect: (section: CourseSection) => void;
};

export function SectionTabs({ activeSection, onSelect }: SectionTabsProps) {
  return (
    <nav className="section-tabs" aria-label="Хичээлийн хэсэг">
      {sectionTabs.map((item) => (
        <button
          className={activeSection === item.id ? "active" : ""}
          onClick={() => onSelect(item.id)}
          key={item.id}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
