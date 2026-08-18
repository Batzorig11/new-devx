"use client";

import { BookOpen, CheckCircle2, Circle, Menu, Search } from "lucide-react";
import Link from "next/link";
import type { Lesson } from "../data/curriculum";

type CourseTopbarProps = {
  lesson: Lesson;
  isComplete: boolean;
  onOpenMenu: () => void;
  onOpenSearch: () => void;
  onToggleComplete: () => void;
};

export function CourseTopbar({
  lesson,
  isComplete,
  onOpenMenu,
  onOpenSearch,
  onToggleComplete,
}: CourseTopbarProps) {
  return (
    <header className="course-topbar">
      <div className="topbar-left">
        <button className="menu-button" onClick={onOpenMenu} aria-label="Хичээлийн цэс нээх">
          <Menu size={20} />
        </button>
        <div>
          <span>{lesson.week}-Р ДОЛОО ХОНОГ · {lesson.module.toLocaleUpperCase("mn")}</span>
          <small>Хичээл {String(lesson.id).padStart(2, "0")} / 48</small>
        </div>
      </div>
      <div className="topbar-actions">
        <Link className="curriculum-link" href="/curriculum">
          <BookOpen size={16} />
          <span>Сургалтын төлөвлөгөө</span>
        </Link>
        <button className="search-trigger" onClick={onOpenSearch}>
          <Search size={16} />
          <span>Хичээл хайх</span>
          <kbd>⌘ K</kbd>
        </button>
        <button
          className={`complete-button ${isComplete ? "done" : ""}`}
          onClick={onToggleComplete}
          aria-pressed={isComplete}
        >
          {isComplete ? <CheckCircle2 size={17} /> : <Circle size={17} />}
          <span>{isComplete ? "Заасан" : "Заасанд тэмдэглэх"}</span>
        </button>
      </div>
    </header>
  );
}
