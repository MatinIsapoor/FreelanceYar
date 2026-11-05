"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FadeUp } from "@/components/layout/PageTransition";
import { SectionHeading } from "@/components/ui/primitives";
import { AnimatedFeatureIcon } from "@/components/svg/AnimatedIcon";
import { LevelBadge } from "@/components/ui/primitives";
import { quickNav } from "@/data/content";

export function QuickNav() {
  return (
    <section aria-labelledby="guides" className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <SectionHeading
        eyebrow="از هر جا شروع کن"
        title="قدم بعدی‌ت را انتخاب کن"
        description="شش راهنمای متمرکز. هر کدام ۸ تا ۱۵ دقیقه طول می‌کشه و با یک اقدام مشخص تموم می‌شه."
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {quickNav.map((item, i) => (
          <FadeUp key={item.href} delay={(i % 3) * 0.07}>
            <Link
              href={item.href}
              className="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-brand-800"
            >
              <div className="flex items-start justify-between gap-3">
                <AnimatedFeatureIcon gradient={`bg-gradient-to-br ${item.gradient}`}>
                  <item.icon className="h-6 w-6" strokeWidth={2.2} />
                </AnimatedFeatureIcon>
                <LevelBadge level={item.level} />
              </div>
              <h3 id={i === 0 ? "guides" : undefined} className="mt-4 text-[17px] font-extrabold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-1.5 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.description}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-600 dark:text-brand-300">
                باز کردن راهنما
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </span>
            </Link>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
