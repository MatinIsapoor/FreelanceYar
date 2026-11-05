import Link from "next/link";
import { ArrowLeft, BadgeCheck } from "lucide-react";
import { FadeUp } from "@/components/layout/PageTransition";

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <FadeUp>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-accent-600 p-8 text-white shadow-soft sm:p-12">
          <svg viewBox="0 0 600 200" aria-hidden className="absolute inset-0 h-full w-full opacity-15">
            <circle cx="520" cy="40" r="70" fill="white">
              <animate attributeName="r" values="60;78;60" dur="6s" repeatCount="indefinite" />
            </circle>
            <circle cx="80" cy="160" r="40" fill="white" opacity="0.7">
              <animate attributeName="cy" values="160;140;160" dur="5s" repeatCount="indefinite" />
            </circle>
            <path d="M0 150 Q150 110 300 150 T600 150" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
          </svg>
          <div className="relative max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur">
              <BadgeCheck className="h-4 w-4" /> نقشه راه ۳۰ روزه رایگان داخلش هست
            </p>
            <h2 className="mt-4 text-2xl font-extrabold leading-9 tracking-tight sm:text-3xl">
              اولین مشتری‌ت از چیزی که فکر می‌کنی نزدیک‌تره.
            </h2>
            <p className="mt-3 leading-8 text-white/85">
              فقط یک برنامه مشخص را دنبال کن: یک مهارت انتخاب کن، ۳ نمونه‌کار بساز، ۲۰ پروپوزال دقیق بفرست.
              فریلنس‌یار قدم‌به‌قدم همراهته — از جمله قسمت‌های مخصوص ایران که بقیه رد می‌شن.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/getting-started"
                className="group inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-bold text-brand-700 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                شروع قدم اول
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </Link>
              <Link
                href="/experiences"
                className="inline-flex items-center rounded-2xl border border-white/30 px-6 py-3 font-bold text-white transition-all hover:bg-white/10"
              >
                خواندن داستان‌های واقعی
              </Link>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
