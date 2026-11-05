"use client";

import { useEffect, useState } from "react";
import { Check, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { toFaDigits } from "@/lib/site";

export type ChecklistItem = { id: string; label: string; hint?: string };

export function Checklist({
  storageKey,
  items,
  title
}: {
  storageKey: string;
  items: ChecklistItem[];
  title: string;
}) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setChecked(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, [storageKey]);

  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(checked));
    } catch {
      /* ignore */
    }
  }, [checked, mounted, storageKey]);

  const done = items.filter((i) => checked[i.id]).length;
  const pct = Math.round((done / items.length) * 100);

  const toggle = (id: string) => setChecked((p) => ({ ...p, [id]: !p[id] }));
  const reset = () => setChecked({});

  if (!mounted) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card dark:border-slate-800 dark:bg-slate-900/70 sm:p-6" aria-busy="true">
        <div className="h-5 w-40 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
        <div className="mt-3 h-2 animate-pulse rounded-full bg-slate-100 dark:bg-slate-800" />
        <div className="mt-4 space-y-2">
          {items.map((i) => (
            <div key={i.id} className="h-14 animate-pulse rounded-xl bg-slate-50 dark:bg-slate-800/60" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card dark:border-slate-800 dark:bg-slate-900/70 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-extrabold tracking-tight">{title}</h3>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700 dark:bg-brand-950/60 dark:text-brand-300">
            {toFaDigits(done)}/{toFaDigits(items.length)} · {toFaDigits(pct)}٪
          </span>
          {done > 0 && (
            <button
              onClick={reset}
              aria-label="شروع دوباره چک‌لیست"
              title="شروع دوباره"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-rose-300 hover:text-rose-500 dark:border-slate-700"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={`پیشرفت ${title}`}>
        <div
          className="h-full rounded-full bg-gradient-to-l from-brand-500 to-accent-500 transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <ul className="mt-4 space-y-2">
        {items.map((item) => {
          const isDone = !!checked[item.id];
          return (
            <li key={item.id}>
              <button
                onClick={() => toggle(item.id)}
                aria-pressed={isDone}
                className={cn(
                  "flex w-full items-start gap-3 rounded-xl border p-3 text-start transition-all",
                  isDone
                    ? "border-accent-300 bg-accent-50/60 dark:border-accent-800 dark:bg-accent-950/30"
                    : "border-slate-200 hover:border-brand-300 hover:bg-slate-50 dark:border-slate-800 dark:hover:border-brand-700 dark:hover:bg-slate-800/60"
                )}
              >
                <span
                  className={cn(
                    "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors",
                    isDone ? "border-accent-500 bg-accent-500 text-white" : "border-slate-300 dark:border-slate-600"
                  )}
                  aria-hidden
                >
                  {isDone && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
                </span>
                <span>
                  <span className={cn("block text-sm font-semibold", isDone && "line-through opacity-70")}>{item.label}</span>
                  {item.hint && <span className="mt-0.5 block text-[13px] text-slate-500 dark:text-slate-400">{item.hint}</span>}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      {pct === 100 && (
        <p className="mt-4 rounded-xl bg-gradient-to-r from-brand-600 to-accent-500 p-3 text-center text-sm font-bold text-white">
          آفرین! این مرحله تموم شد. برو سراغ قدم بعدی!
        </p>
      )}
    </div>
  );
}
