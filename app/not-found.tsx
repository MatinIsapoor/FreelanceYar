import Link from "next/link";
import { EmptyStateIllustration } from "@/components/svg/Feedback";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-md px-4 py-20 text-center sm:px-6">
      <EmptyStateIllustration className="mx-auto h-44 w-auto text-slate-400" />
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight">صفحه پیدا نشد</h1>
      <p className="mt-2 leading-8 text-slate-600 dark:text-slate-400">
        این گیگ وجود نداره — ولی مسیر فریلنسری تو هست. بذار برگردونیمت سر راه.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/" className="rounded-2xl bg-gradient-to-r from-brand-600 to-brand-500 px-5 py-2.5 font-bold text-white shadow-soft">
          برگرد خونه
        </Link>
        <Link href="/search" className="rounded-2xl border border-slate-200 px-5 py-2.5 font-bold dark:border-slate-700">
          جست‌وجو در راهنماها
        </Link>
      </div>
    </div>
  );
}
