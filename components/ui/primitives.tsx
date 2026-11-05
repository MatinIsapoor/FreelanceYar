import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6", className)}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center"
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-start")}>
      {eyebrow && (
        <p className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-700 dark:border-brand-800 dark:bg-brand-950/50 dark:text-brand-300">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-2xl font-extrabold leading-9 tracking-tight sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 text-[15px] leading-8 text-slate-600 dark:text-slate-400">{description}</p>}
    </div>
  );
}

export function Card({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-soft hover:border-brand-200",
        "dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-brand-800",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Badge({ children, tone = "brand" }: { children: ReactNode; tone?: "brand" | "green" | "amber" | "slate" }) {
  const tones = {
    brand: "bg-brand-50 text-brand-700 ring-brand-200 dark:bg-brand-950/60 dark:text-brand-300 dark:ring-brand-800",
    green: "bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:ring-emerald-800",
    amber: "bg-amber-50 text-amber-700 ring-amber-200 dark:bg-amber-950/50 dark:text-amber-300 dark:ring-amber-800",
    slate: "bg-slate-100 text-slate-700 ring-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700"
  } as const;
  return (
    <span className={cn("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1", tones[tone])}>
      {children}
    </span>
  );
}

export function LevelBadge({ level }: { level: string }) {
  const tone =
    level.includes("مبتدی") || level === "Beginner"
      ? "green"
      : level.includes("متوسط") || level === "Intermediate"
        ? "brand"
        : level.includes("همه") || level === "All levels" || level === "All"
          ? "slate"
          : "amber";
  return <Badge tone={tone as "brand" | "green" | "amber" | "slate"}>{level}</Badge>;
}

export function Prose({ html }: { html: string }) {
  return <div className="prose-freelance" dangerouslySetInnerHTML={{ __html: html }} />;
}
