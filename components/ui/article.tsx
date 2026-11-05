import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

/** در چیدمان راست‌به‌چپ: قبلی سمت راست، بعدی سمت چپ */
export function PrevNext({ prev, next }: { prev?: { href: string; label: string }; next?: { href: string; label: string } }) {
  return (
    <nav aria-label="ناوبری راهنما" className="mt-14 grid gap-3 sm:grid-cols-2">
      {prev ? (
        <Link
          href={prev.href}
          className="group flex items-center gap-3 rounded-2xl border border-slate-200 p-4 transition-all hover:-translate-y-0.5 hover:shadow-card dark:border-slate-800"
        >
          <ArrowRight className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
          <span>
            <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">قبلی</span>
            <span className="block font-bold">{prev.label}</span>
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link
          href={next.href}
          className="group flex items-center justify-end gap-3 rounded-2xl border border-slate-200 p-4 text-left transition-all hover:-translate-y-0.5 hover:shadow-card dark:border-slate-800"
        >
          <span>
            <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">بعدی</span>
            <span className="block font-bold">{next.label}</span>
          </span>
          <ArrowLeft className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-hover:-translate-x-1" />
        </Link>
      )}
    </nav>
  );
}

export function Callout({
  title,
  children,
  tone = "info"
}: {
  title: string;
  children: React.ReactNode;
  tone?: "info" | "warning" | "success";
}) {
  const styles = {
    info: "border-brand-200 bg-brand-50/70 dark:border-brand-800 dark:bg-brand-950/30",
    warning: "border-amber-200 bg-amber-50/70 dark:border-amber-800 dark:bg-amber-950/30",
    success: "border-emerald-200 bg-emerald-50/70 dark:border-emerald-800 dark:bg-emerald-950/30"
  }[tone];
  return (
    <aside className={`my-6 rounded-2xl border p-5 ${styles}`} role="note">
      <p className="font-bold">{title}</p>
      <div className="mt-1.5 text-[15px] leading-8 text-slate-700 dark:text-slate-300">{children}</div>
    </aside>
  );
}
