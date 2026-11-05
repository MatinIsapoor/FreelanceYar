"use client";

import { FadeUp } from "@/components/layout/PageTransition";
import { SectionHeading, Card } from "@/components/ui/primitives";
import { AnimatedFeatureIcon } from "@/components/svg/AnimatedIcon";
import { features } from "@/data/content";

export function Features() {
  return (
    <section aria-labelledby="why" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <SectionHeading
        eyebrow="چرا فریلنس‌یار"
        title="نه انگیزشی. یک سیستم‌عامل عملی."
        description="همه‌چیز برای محدودیت‌های واقعی نوشته شده: تحریم، احراز هویت، برداشت پول، اعتماد و قیمت‌گذاری — با قالب و چک‌لیستی که همین امروز می‌تونی استفاده کنی."
      />
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {features.map((f, i) => (
          <FadeUp key={f.title} delay={i * 0.08}>
            <Card className="h-full">
              <AnimatedFeatureIcon gradient={`bg-gradient-to-br ${f.gradient}`}>
                <f.icon className="h-6 w-6" strokeWidth={2.2} />
              </AnimatedFeatureIcon>
              <h3 id={i === 0 ? "why" : undefined} className="mt-4 text-lg font-extrabold tracking-tight">
                {f.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-8 text-slate-600 dark:text-slate-400">{f.text}</p>
            </Card>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
