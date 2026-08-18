"use client";

import { useCallback, useEffect, useState } from "react";
import { lessons } from "../data/curriculum";
import type { CourseSection } from "../types";

const COMPLETED_STORAGE_KEY = "ai-frontend-completed";
const SIDEBAR_STORAGE_KEY = "ai-frontend-sidebar-collapsed";

function readCompletedLessons() {
  try {
    const stored = window.localStorage.getItem(COMPLETED_STORAGE_KEY);
    return stored ? new Set(JSON.parse(stored) as number[]) : new Set<number>();
  } catch {
    return new Set<number>();
  }
}

function readSidebarPreference() {
  try {
    return window.localStorage.getItem(SIDEBAR_STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

export function useCourse() {
  const [selectedId, setSelectedId] = useState(1);
  const [section, setSection] = useState<CourseSection>("plan");
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const lesson = lessons.find(({ id }) => id === selectedId) ?? lessons[0];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setCompleted(readCompletedLessons());
      setSidebarCollapsed(readSidebarPreference());
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLocaleLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }

      if (event.key === "Escape") {
        setSearchOpen(false);
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const selectLesson = useCallback((id: number) => {
    setSelectedId(id);
    setSection("plan");
    setSearchOpen(false);
    setMenuOpen(false);
    setSearchQuery("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const toggleComplete = useCallback(() => {
    setCompleted((current) => {
      const next = new Set(current);
      if (next.has(lesson.id)) next.delete(lesson.id);
      else next.add(lesson.id);

      try {
        window.localStorage.setItem(COMPLETED_STORAGE_KEY, JSON.stringify([...next]));
      } catch {
        // Keep in-memory progress when browser storage is unavailable.
      }

      return next;
    });
  }, [lesson.id]);

  const toggleSidebar = useCallback(() => {
    setSidebarCollapsed((current) => {
      const next = !current;
      try {
        window.localStorage.setItem(SIDEBAR_STORAGE_KEY, String(next));
      } catch {
        // Keep the preference in memory when browser storage is unavailable.
      }
      return next;
    });
  }, []);

  return {
    lesson,
    section,
    setSection,
    completed,
    isComplete: completed.has(lesson.id),
    searchOpen,
    setSearchOpen,
    searchQuery,
    setSearchQuery,
    menuOpen,
    setMenuOpen,
    sidebarCollapsed,
    selectLesson,
    toggleComplete,
    toggleSidebar,
  };
}
