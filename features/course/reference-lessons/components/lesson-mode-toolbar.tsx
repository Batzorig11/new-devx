"use client";

import { Presentation, UserRoundCog } from "lucide-react";
import type { LessonMode } from "../types";

export function LessonModeToolbar({
  mode,
  onChange,
}: {
  mode: LessonMode;
  onChange: (mode: LessonMode) => void;
}) {
  return (
    <div className="lesson-mode-toolbar" aria-label="Хичээл харуулах горим">
      <div>
        <span>CLASSROOM VIEW</span>
        <p>{mode === "teacher" ? "Хариу, тэмдэглэл, expected output харагдана" : "Projector-д зориулсан цэвэр, том харагдац"}</p>
      </div>
      <div className="mode-segmented-control">
        <button
          type="button"
          className={mode === "teacher" ? "active" : ""}
          aria-pressed={mode === "teacher"}
          onClick={() => onChange("teacher")}
        >
          <UserRoundCog size={16} />
          <span>Teacher</span>
        </button>
        <button
          type="button"
          className={mode === "projector" ? "active" : ""}
          aria-pressed={mode === "projector"}
          onClick={() => onChange("projector")}
        >
          <Presentation size={16} />
          <span>Projector</span>
        </button>
      </div>
    </div>
  );
}
