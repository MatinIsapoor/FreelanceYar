import type { Metadata } from "next";
import { GuideHeader } from "@/components/ui/GuideHeader";
import { PageTransition, FadeUp } from "@/components/layout/PageTransition";
import { Card, Badge } from "@/components/ui/primitives";
import { PrevNext, Callout } from "@/components/ui/article";
import { platforms, guidesMeta } from "@/data/content";
import { Check, X, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "پلتفرم‌های فریلنسری",
  description: "آپورک، فایور، پلتفرم‌های ایرانی و بقیه را مقایسه کن — با نکته‌های عملی برای فریلنسرهای ایرانی.",
};

const meta = guidesMeta.platforms;

export default function PlatformsPage() {
  return (
    <PageTransition>
      <GuideHeader
        eyebrow={meta.eyebrow}
        title={meta.title}
        description={meta.description}
        level={meta.level}
        minutes={meta.minutes}
        crumbs={[{ label: "خانه", href: "/" }]}
      />
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <Callout title="واقعیت ایران، از اول" tone="warning">
          آپورک، فایور و پی‌پال به‌خاطر تحریم‌ها کاربران داخل ایران را محدود می‌کنن. خیلی از ایرانی‌ها با کمک
          یک شخص یا شرکت مورد اعتماد در خارج یا واسطه‌های معتبر کار می‌کنن. <strong>هیچ‌وقت «اکانت وریفای‌شده» نخر</strong> —
          مسدود می‌شن و درآمدت را با خودشون می‌برن. قبل از تعهد، قوانین هر پلتفرم + راهنمای دریافت پول را بخوان.
        </Callout>

        <div className="mt-8 space-y-6">
          {platforms.map((p, i) => (
            <FadeUp key={p.id} delay={Math.min(i * 0.06, 0.2)}>
              <section id={p.id} aria-labelledby={`${p.id}-h`} className="scroll-mt-24">
                <Card className="p-6 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h2 id={`${p.id}-h`} className="text-xl font-extrabold tracking-tight">{p.name}</h2>
                    <Badge>{p.fees}</Badge>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-brand-600 dark:text-brand-300">{p.tagline}</p>
                  <p className="mt-1 text-xs text-slate-500">مناسب برای: {p.level}</p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl bg-emerald-50/70 p-4 dark:bg-emerald-950/30">
                      <p className="text-sm font-bold text-emerald-700 dark:text-emerald-300">نقاط قوت</p>
                      <ul className="mt-2 space-y-1.5">
                        {p.pros.map((pro) => (
                          <li key={pro} className="flex gap-2 text-sm leading-7"><Check className="mt-1.5 h-4 w-4 shrink-0 text-emerald-600" />{pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl bg-rose-50/70 p-4 dark:bg-rose-950/30">
                      <p className="text-sm font-bold text-rose-700 dark:text-rose-300">نقاط ضعف</p>
                      <ul className="mt-2 space-y-1.5">
                        {p.cons.map((con) => (
                          <li key={con} className="flex gap-2 text-sm leading-7"><X className="mt-1.5 h-4 w-4 shrink-0 text-rose-500" />{con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 rounded-xl border border-brand-200/70 bg-brand-50/50 p-4 dark:border-brand-800/60 dark:bg-brand-950/30">
                    <p className="flex items-center gap-2 text-sm font-bold"><ShieldAlert className="h-4 w-4" /> نکته‌های مخصوص ایرانی‌ها</p>
                    <ul className="mt-2 list-disc space-y-1.5 ps-5 text-sm leading-7">
                      {p.iranTips.map((t) => (<li key={t}>{t}</li>))}
                    </ul>
                  </div>
                </Card>
              </section>
            </FadeUp>
          ))}
        </div>

        <Callout title="پیشنهاد من برای بیشتر تازه‌کارها" tone="success">
          با <strong>یک پلتفرم مزایده‌ای (آپورک/کانترا) + یک کانال ورودی (گیگ فایور یا لینکدین)</strong> شروع کن.
          پلتفرم‌های ایرانی (پونیشا، پارس‌کدرز، کارلنسر) را برای جریان نقدی نگه دار تا پروفایل بین‌المللی‌ت رشد کنه.
          بعد از ۳ ماه، داده‌ت بهت می‌گه کدام کانال را دو برابر کنی.
        </Callout>

        <PrevNext prev={{ href: "/getting-started", label: "شروع فریلنسری" }} next={{ href: "/profile", label: "پروفایل و نمونه‌کار" }} />
      </div>
    </PageTransition>
  );
}
