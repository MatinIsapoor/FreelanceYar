"use client";

import { useMemo, useState } from "react";
import { GuideHeader } from "@/components/ui/GuideHeader";
import { PageTransition, FadeUp } from "@/components/layout/PageTransition";
import { Card, Badge } from "@/components/ui/primitives";
import { PrevNext } from "@/components/ui/article";
import { Checklist } from "@/components/interactive/Checklist";
import { LevelFilter } from "@/components/interactive/LevelFilter";
import { tools } from "@/data/content";
import type { Level } from "@/lib/site";

export default function ToolsPage() {
  const [level, setLevel] = useState<"همه" | Level>("همه");
  const filtered = useMemo(
    () => tools.filter((t) => level === "همه" || t.level === level),
    [level]
  );

  return (
    <PageTransition>
      <GuideHeader
        eyebrow="راهنمای ۶ · تعاملی"
        title="ابزارها، منابع و چک‌لیست‌ها"
        description="استک کم‌حجمی که از ایران جواب می‌ده، مسیر یادگیری و چک‌لیست‌های تعاملی که تو مرورگرت ذخیره می‌شن."
        level="همه سطوح"
        minutes={10}
        crumbs={[{ label: "خانه", href: "/" }]}
      />
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <FadeUp>
          <section id="stack" aria-labelledby="stack-h" className="scroll-mt-24">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 id="stack-h" className="text-2xl font-extrabold tracking-tight">استک ضروری</h2>
              <LevelFilter value={level} onChange={setLevel} />
            </div>
            {filtered.length === 0 ? (
              <Card className="mt-5 p-8 text-center">
                <p className="font-bold">ابزاری در این سطح نیست</p>
                <p className="mt-1 text-sm text-slate-500">فیلتر دیگری را امتحان کن.</p>
              </Card>
            ) : (
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {filtered.map((t) => (
                  <Card key={t.name} className="p-5">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-300">{t.category}</p>
                      <Badge tone={t.level === "مبتدی" ? "green" : t.level === "متوسط" ? "brand" : "amber"}>{t.level}</Badge>
                    </div>
                    <h3 className="mt-1.5 font-extrabold">{t.name}</h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600 dark:text-slate-400">{t.use}</p>
                    {t.iranNote && <p className="mt-2 rounded-lg bg-amber-50 p-2 text-[13px] leading-6 text-amber-800 dark:bg-amber-950/40 dark:text-amber-200">{t.iranNote}</p>}
                  </Card>
                ))}
              </div>
            )}
          </section>
        </FadeUp>

        <section id="checklists" aria-labelledby="cl-h" className="mt-12 scroll-mt-24">
          <h2 id="cl-h" className="text-2xl font-extrabold tracking-tight">چک‌لیست‌های تعاملی شروع</h2>
          <p className="mt-2 leading-7 text-slate-600 dark:text-slate-400">پیشرفت به‌صورت خودکار در مرورگرت ذخیره می‌شه (localStorage). با خیال راحت ببند و برگرد.</p>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            <Checklist
              storageKey="fy-tools-profile"
              title="لانچ پروفایل"
              items={[
                { id: "t1", label: "تیتر نتیجه + نیچ مشخصه" },
                { id: "t2", label: "۳ کیس‌استادی منتشر شده" },
                { id: "t3", label: "ویدیوی معرفی ضبط شده" },
                { id: "t4", label: "نرخ + وضعیت دسترسی مشخصه" },
              ]}
            />
            <Checklist
              storageKey="fy-tools-first-client"
              title="اسپرینت اولین مشتری"
              items={[
                { id: "c1", label: "۲۰ پروژه هدف لیست شده" },
                { id: "c2", label: "۵ پروپوزال دقیق فرستاده شده" },
                { id: "c3", label: "بعد از ۴ روز پیگیری شده" },
                { id: "c4", label: "از ۱ منتور بازخورد گرفته شده" },
              ]}
            />
          </div>
        </section>

        <section aria-labelledby="learn-h" className="mt-12">
          <h2 id="learn-h" className="text-2xl font-extrabold tracking-tight">مسیر یادگیری (اول رایگان)</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              ["بساز", "freeCodeCamp · پروژه آدین · آموزش‌های فیگما"],
              ["بفروش", "آکادمی آپورک · مبانی Fiverr Learn · پروپوزال‌های فریلنس‌یار"],
              ["رشد کن", "راهنماهای کانترا · خبرنامه‌ها · دوره‌های ورک‌فلو هوش مصنوعی"],
            ].map(([t, d]) => (
              <Card key={t} className="p-5"><h3 className="font-extrabold">{t}</h3><p className="ltr mt-1 text-sm leading-7 text-slate-600 dark:text-slate-400" dir="auto">{d}</p></Card>
            ))}
          </div>
        </section>

        <PrevNext prev={{ href: "/payments", label: "راهنمای دریافت پول" }} next={{ href: "/experiences", label: "تجربه‌های واقعی" }} />
      </div>
    </PageTransition>
  );
}
