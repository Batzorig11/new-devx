"use client";

import {
  CheckCircle2,
  PanelLeftClose,
  PanelLeftOpen,
  Sparkles,
  X,
} from "lucide-react";
import {
  COURSE_DURATION_HOURS,
  lessons,
  weekModules,
  type Lesson,
} from "../data/curriculum";

type CourseSidebarProps = {
  lesson: Lesson;
  completed: Set<number>;
  open: boolean;
  collapsed: boolean;
  onClose: () => void;
  onToggleCollapse: () => void;
  onSelect: (id: number) => void;
};

export function CourseSidebar({
  lesson,
  completed,
  open,
  collapsed,
  onClose,
  onToggleCollapse,
  onSelect,
}: CourseSidebarProps) {
  const weekLessons = lessons.filter((item) => item.week === lesson.week);
  const percent = Math.round((completed.size / lessons.length) * 100);

  return (
    <>
      <div
        className={`mobile-scrim ${open ? "show" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside className={`course-sidebar ${open ? "open" : ""} ${collapsed ? "collapsed" : ""}`}>
        <div className="sidebar-head">
          <div className="site-brand">
            <span className="site-mark">A</span>
            <span>AI / FRONTEND</span>
          </div>
          <div className="sidebar-controls">
            <button
              className="collapse-toggle"
              onClick={onToggleCollapse}
              aria-label={collapsed ? "Sidebar дэлгэх" : "Sidebar эвхэх"}
              aria-expanded={!collapsed}
              title={collapsed ? "Sidebar дэлгэх" : "Sidebar эвхэх"}
            >
              {collapsed ? <PanelLeftOpen size={19} /> : <PanelLeftClose size={19} />}
            </button>
            <button className="sidebar-close" onClick={onClose} aria-label="Цэс хаах">
              <X size={19} />
            </button>
          </div>
        </div>

        <div className="sidebar-course">AI-Native<br />Frontend Engineering</div>

        <div className="course-progress">
          <div>
            <span>Заасан хичээлийн явц</span>
            <strong>{percent}%</strong>
          </div>
          <div className="progress-line">
            <i style={{ width: `${Math.max(percent, 1)}%` }} />
          </div>
          <small>{completed.size} / {lessons.length} хичээл · нийт {COURSE_DURATION_HOURS} цаг</small>
        </div>

        <div className="week-heading">
          <div>
            <span>{String(lesson.week).padStart(2, "0")}</span>
            <b>{lesson.week}-р долоо хоног</b>
          </div>
          <small>{lesson.module}</small>
        </div>

        <nav className="sidebar-lessons" aria-label={`${lesson.week}-р долоо хоногийн хичээлүүд`}>
          {weekLessons.map((item) => (
            <button
              className={item.id === lesson.id ? "active" : ""}
              onClick={() => onSelect(item.id)}
              key={item.id}
              title={collapsed ? item.title : undefined}
            >
              <span className="sidebar-number">{String(item.id).padStart(2, "0")}</span>
              <span className="sidebar-title">{item.title}</span>
              {completed.has(item.id) ? (
                <CheckCircle2 size={15} className="done-icon" />
              ) : item.kind === "ai" ? (
                <em>AI</em>
              ) : null}
            </button>
          ))}
        </nav>

        <div className="week-picker-label">12 ДОЛОО ХОНОГ</div>
        <div className="week-picker">
          {weekModules.map((item) => (
            <button
              key={item.week}
              className={item.week === lesson.week ? "active" : ""}
              onClick={() => onSelect((item.week - 1) * 4 + 1)}
              aria-label={`${item.week}-р долоо хоног — ${item.module}`}
              title={collapsed ? `${item.week}-р долоо хоног — ${item.module}` : undefined}
            >
              {String(item.week).padStart(2, "0")}
            </button>
          ))}
        </div>

        <div className="sidebar-principle">
          <Sparkles size={15} aria-hidden="true" />
          <p>Тайлбарлаж чадахгүй кодоо нэгтгэхгүй.</p>
        </div>
      </aside>
    </>
  );
}
