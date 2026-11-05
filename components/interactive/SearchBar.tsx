"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Loader2 } from "lucide-react";
import { searchIndex } from "@/data/content";
import { searchGuides } from "@/lib/search";
import { EmptyStateIllustration } from "@/components/svg/Feedback";

const popular = ["دریافت پول", "آپورک", "پروپوزال", "قیمت‌گذاری", "تتر", "پروفایل"];

export function SearchBar({ initial = "" }: { initial?: string }) {
  const [q, setQ] = useState(initial);
  const [focused, setFocused] = useState(false);

  const results = useMemo(() => searchGuides(q, searchIndex, 12), [q]);
  const showPopular = q.trim().length === 0;

  return (
    <div>
      <label className="relative block">
        <span className="sr-only">جست‌وجو در راهنماها</span>
        <Search className="pointer-events-none absolute start-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" aria-hidden />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="جست‌وجو: مهارت، آپورک، دریافت پول، قیمت‌گذاری…"
          role="searchbox"
          aria-label="جست‌وجو در راهنماها"
          className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pe-4 ps-12 text-[15px] shadow-card outline-none transition-all placeholder:text-slate-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-100 dark:border-slate-700 dark:bg-slate-900 dark:focus:ring-brand-950"
        />
        {focused && q && (
          <Loader2 className="absolute end-4 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin text-slate-300" aria-hidden />
        )}
      </label>

      {showPopular && (
        <div className="mt-4 flex flex-wrap items-center gap-2" aria-label="جست‌وجوهای پرتکرار">
          <span className="text-xs font-bold text-slate-500">پرتکرار:</span>
          {popular.map((p) => (
            <button
              key={p}
              onClick={() => setQ(p)}
              className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition-all hover:border-brand-300 hover:text-brand-700 dark:border-slate-700 dark:text-slate-300"
            >
              {p}
            </button>
          ))}
        </div>
      )}

      <div className="mt-6" aria-live="polite">
        {results.length === 0 ? (
          <div className="mx-auto max-w-sm text-center">
            <EmptyStateIllustration className="mx-auto h-40 w-auto text-slate-400" />
            <p className="mt-3 font-bold">نتیجه‌ای برای «{q}» پیدا نشد</p>
            <p className="mt-1 text-sm leading-7 text-slate-500">
              املای دیگری را امتحان کن یا یکی از این‌ها را جست‌وجو کن: «پرداخت»، «آپورک»، «قیمت» یا «پروپوزال».
              <br />
              می‌تونی فارسی یا انگلیسی بنویسی — هر دو پشتیبانی می‌شن.
            </p>
            <button
              onClick={() => setQ("")}
              className="mt-4 rounded-xl border border-slate-200 px-4 py-2 text-sm font-bold dark:border-slate-700"
            >
              پاک کردن جست‌وجو
            </button>
          </div>
        ) : (
          <>
            {!showPopular && (
              <p className="mb-3 text-xs font-semibold text-slate-500">
                {results.length} نتیجه برای «{q}»
              </p>
            )}
            <ul className="grid gap-3 sm:grid-cols-2">
              {results.map((r) => (
                <li key={r.href + r.title}>
                  <Link
                    href={r.href}
                    className="block h-full rounded-2xl border border-slate-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-card dark:border-slate-800 dark:bg-slate-900/70"
                  >
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-300">{r.section} · {r.level}</p>
                    <p className="mt-1 font-bold leading-7">{r.title}</p>
                    <p className="mt-1 text-sm leading-7 text-slate-600 dark:text-slate-400">{r.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
