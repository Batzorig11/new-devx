"use client";

import { ChevronRight, Search, X } from "lucide-react";
import { useMemo } from "react";
import { lessons } from "../data/curriculum";

type SearchDialogProps = {
  open: boolean;
  query: string;
  onQueryChange: (value: string) => void;
  onClose: () => void;
  onSelect: (id: number) => void;
};

export function SearchDialog({
  open,
  query,
  onQueryChange,
  onClose,
  onSelect,
}: SearchDialogProps) {
  const matches = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("mn");
    if (!normalized) return lessons;

    return lessons.filter((lesson) =>
      `${lesson.title} ${lesson.summary} ${lesson.aiAngle} ${lesson.module}`
        .toLocaleLowerCase("mn")
        .includes(normalized),
    );
  }, [query]);

  if (!open) return null;

  return (
    <div className="search-overlay" role="presentation" onMouseDown={onClose}>
      <section
        className="search-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Хичээл хайх"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="search-field">
          <Search size={19} aria-hidden="true" />
          <input
            autoFocus
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Сэдэв, хэрэгсэл эсвэл түлхүүр үгээр хайх..."
          />
          <button onClick={onClose} aria-label="Хайлтыг хаах">
            <X size={18} />
          </button>
        </div>
        <div className="search-summary">
          <span>{matches.length} хичээл олдлоо</span>
          <kbd>ESC · хаах</kbd>
        </div>
        <div className="search-results">
          {matches.map((lesson) => (
            <button key={lesson.id} onClick={() => onSelect(lesson.id)}>
              <span className={`result-number ${lesson.kind}`}>
                {String(lesson.id).padStart(2, "0")}
              </span>
              <span>
                <strong>{lesson.title}</strong>
                <small>{lesson.week}-р долоо хоног · {lesson.module}</small>
              </span>
              <ChevronRight size={16} aria-hidden="true" />
            </button>
          ))}
          {matches.length === 0 && (
            <div className="empty-search">
              <Search size={30} />
              <p>Ийм агуулгатай хичээл олдсонгүй.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
