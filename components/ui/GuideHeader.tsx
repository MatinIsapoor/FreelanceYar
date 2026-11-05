import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { LevelBadge } from "@/components/ui/primitives";
import { FloatingShapes } from "@/components/svg/FloatingShapes";
import { toFaDigits } from "@/lib/site";

export function GuideHeader({
  eyebrow,
  title,
  description,
  level,
  minutes,
  crumbs
}: {
  eyebrow: string;
  title: string;
  description: string;
  level: string;
  minutes: number;
  crumbs?: { label: string; href: string }[];
}) {
  return (
    <div className="relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-b from-brand-50/80 to-transparent dark:border-slate-800/70 dark:from-brand-950/30">
      <FloatingShapes className="absolute left-0 top-0 h-32 w-64 -scale-x-100 text-brand-600" />
      <div className="mx-auto max-w-4xl px-4 pb-10 pt-10 sm:px-6 sm:pt-14">
        {crumbs && (
          <nav aria-label="مسیر صفحه" className="mb-4 flex flex-wrap items-center gap-1.5 text-[13px] text-slate-500 dark:text-slate-400">
            {crumbs.map((c) => (
              <span key={c.href} className="flex items-center gap-1.5">
                <Link href={c.href} className="hover:text-brand-600 dark:hover:text-brand-300">
                  {c.label}
                </Link>
                <ChevronLeft className="h-3.5 w-3.5" aria-hidden />
              </span>
            ))}
            <span aria-current="page" className="font-semibold text-slate-700 dark:text-slate-200">
              {title}
            </span>
          </nav>
        )}
        <p className="text-xs font-bold uppercase tracking-[0.08em] text-brand-600 dark:text-brand-300">{eyebrow}</p>
        <h1 className="mt-2 text-3xl font-extrabold leading-[1.7] tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-3 max-w-2xl text-[16px] leading-8 text-slate-600 dark:text-slate-400">{description}</p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <LevelBadge level={level} />
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700">
            {toFaDigits(minutes)} دقیقه مطالعه
          </span>
        </div>
      </div>
    </div>
  );
}
