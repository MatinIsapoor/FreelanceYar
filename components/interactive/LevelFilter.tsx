"use client";

import { cn } from "@/lib/utils";
import type { Level } from "@/lib/site";

const levels: ("همه" | Level)[] = ["همه", "مبتدی", "متوسط", "پیشرفته"];

export function LevelFilter({
  value,
  onChange
}: {
  value: "همه" | Level;
  onChange: (v: "همه" | Level) => void;
}) {
  return (
    <div className="inline-flex flex-wrap gap-2" role="group" aria-label="فیلتر بر اساس سطح">
      {levels.map((l) => (
        <button
          key={l}
          onClick={() => onChange(l)}
          aria-pressed={value === l}
          className={cn(
            "rounded-full px-4 py-1.5 text-sm font-semibold ring-1 transition-all",
            value === l
              ? "bg-slate-900 text-white ring-slate-900 dark:bg-white dark:text-slate-900 dark:ring-white"
              : "bg-white text-slate-600 ring-slate-200 hover:ring-brand-300 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-700"
          )}
        >
          {l === "همه" ? "همه سطوح" : l}
        </button>
      ))}
    </div>
  );
}
