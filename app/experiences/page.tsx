import type { Metadata } from "next";
import { GuideHeader } from "@/components/ui/GuideHeader";
import { PageTransition, FadeUp } from "@/components/layout/PageTransition";
import { Card, Badge } from "@/components/ui/primitives";
import { PrevNext, Callout } from "@/components/ui/article";
import { stories } from "@/data/content";
import { Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "تجربه‌های واقعی و نکته‌ها",
  description: "درس‌های عملی و اشتباهات رایج فریلنسرهای ایرانی — چیزی که واقعاً جواب داد.",
};

const mistakes = [
  ["بله گفتن به همه‌چیز", "کاری را قبول کن که می‌تونی عالی و سروقت تحویل بدی. یک «نه» رتبه‌ت را نجات می‌ده."],
  ["بدون قرارداد و اسکرو", "هر ۳۰۰ دلار ازدست‌رفته یک بار این را یاد می‌ده. اول مایل‌استون فاندشده — همیشه."],
  ["پروپوزال کپی‌پیستی", "مشتری بوی قالب را می‌فهمه. دو جمله شخصی‌سازی‌شده از ده پاراگراف جنریک بهتره."],
  ["قایم کردن مشکل پرداخت", "مسیر دریافتت را قبل از شروع به مشتری بگو. سورپرایز آخر، اعتماد را نابود می‌کنه."],
  ["بی‌توجهی به انگلیسی", "روزی ۳۰ دقیقه انگلیسی مشتری (آپدیت، سؤال، مخالفت مودبانه) از یک ابزار جدید سودش بیشتره."],
  ["جا زدن در هفته سوم", "بیشترها قبل از ۲۰ پروپوزال دقیق ول می‌کنن. بازار به صبور و دقیق پاداش می‌ده."],
];

export default function ExperiencesPage() {
  return (
    <PageTransition>
      <GuideHeader
        eyebrow="راهنمای ۷ · داستان واقعی"
        title="تجربه‌های واقعی و نکته‌های به‌دردبخور"
        description="بدون گورو. اشتباه‌ها، بازگشت‌ها و عادت‌های فریلنسرهای ایرانی که واقعاً انجامش دادن."
        level="همه سطوح"
        minutes={9}
        crumbs={[{ label: "خانه", href: "/" }]}
      />
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {stories.map((s, i) => (
            <FadeUp key={s.name} delay={Math.min(i * 0.06, 0.2)}>
              <Card className="flex h-full flex-col p-6">
                <Quote className="h-6 w-6 text-brand-400" aria-hidden />
                <h2 className="mt-3 text-lg font-extrabold leading-8">{s.title}</h2>
                <p className="mt-2 flex-1 text-[15px] leading-8 text-slate-600 dark:text-slate-400">{s.text}</p>
                <p className="mt-3 rounded-xl bg-brand-50 p-3 text-sm font-semibold leading-7 text-brand-800 dark:bg-brand-950/50 dark:text-brand-200">
                  درس: {s.lesson}
                </p>
                <p className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                  <span className="font-bold text-slate-700 dark:text-slate-300">{s.name}</span>
                  <Badge tone={s.level === "مبتدی" ? "green" : s.level === "پیشرفته" ? "amber" : "brand"}>{s.level}</Badge>
                </p>
              </Card>
            </FadeUp>
          ))}
        </div>

        <section aria-labelledby="mistakes-h" className="mt-12">
          <h2 id="mistakes-h" className="text-2xl font-extrabold tracking-tight">۶ اشتباهی که می‌تونی ردشون کنی (از بقیه یاد بگیر)</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {mistakes.map(([t, d]) => (
              <Card key={t} className="p-5">
                <h3 className="font-extrabold">{t}</h3>
                <p className="mt-1.5 text-sm leading-7 text-slate-600 dark:text-slate-400">{d}</p>
              </Card>
            ))}
          </div>
        </section>

        <Callout title="نوبت توئه" tone="success">
          با این راهنماها مشتری گرفتی (یا از دست دادی)؟ ۵ خط بنویس چی شد و دفعه بعد چی را عوض می‌کنی — بعد از صفحه
          درباره بفرست. داستان‌های واقعی فریلنس‌یار را صادق نگه می‌داره.
        </Callout>

        <PrevNext prev={{ href: "/tools", label: "ابزارها و منابع" }} next={{ href: "/about", label: "درباره و تماس" }} />
      </div>
    </PageTransition>
  );
}
