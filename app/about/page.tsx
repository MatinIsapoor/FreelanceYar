import type { Metadata } from "next";
import { GuideHeader } from "@/components/ui/GuideHeader";
import { PageTransition } from "@/components/layout/PageTransition";
import { Card } from "@/components/ui/primitives";
import { PrevNext } from "@/components/ui/article";
import { Mail, Send, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "درباره و تماس",
  description: "فریلنس‌یار چیه، محتواش چطور قابل‌ویرایش می‌مونه و چطور باهامون در تماس باشی.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <GuideHeader
        eyebrow="درباره"
        title="درباره فریلنس‌یار"
        description="راهنمای رایگان و عملی فریلنسری برای ایرانی‌ها — شفاف درباره محدودیت‌ها، پر از قالب و راحت برای بهتر شدن."
        level="همه سطوح"
        minutes={4}
        crumbs={[{ label: "خانه", href: "/" }]}
      />
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-lg font-extrabold">چرا هستیم</h2>
            <p className="mt-2 text-[15px] leading-8 text-slate-600 dark:text-slate-400">
              بیشتر توصیه‌های فریلنسری فرض می‌کنن حساب بانکی آمریکا داری و تحریمی نیستی. ایرانی‌ها با دیوار احراز هویت،
              معمای برداشت و شکاف اعتماد طرفن. فریلنس‌یار توصیه‌های کلی را به قدم‌های آماده برای ایران ترجمه می‌کنه —
              با ریسک‌هایی که رک گفته می‌شن، نه قایم‌شده در پانوشت.
            </p>
          </Card>
          <Card className="p-6">
            <h2 className="text-lg font-extrabold">محتوا چطور قابل‌ویرایش می‌مونه</h2>
            <p className="mt-2 text-[15px] leading-8 text-slate-600 dark:text-slate-400">
              راهنماها در <code className="ltr rounded bg-slate-100 px-1.5 py-0.5 dark:bg-slate-800">data/content.ts</code> و
              فایل‌های مارک‌داون در <code className="ltr rounded bg-slate-100 px-1.5 py-0.5 dark:bg-slate-800">content/</code> زندگی می‌کنن.
              متن‌ها تایپ‌شده‌ست، کامپوننت‌ها ماژولارن و جست‌وجو از یک ایندکس می‌خونه — یک بار ویرایش کن، همه‌جا آپدیت شو.
            </p>
          </Card>
        </div>

        <Card className="mt-4 p-6">
          <h2 className="text-lg font-extrabold">تماس</h2>
          <p className="mt-2 text-[15px] leading-8 text-slate-600 dark:text-slate-400">
            سؤال، اصلاح یا داستانی برای گفتن داری؟ همه را می‌خونیم.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="mailto:hello@freelanceyar.example.com" className="ltr inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 dark:bg-white dark:text-slate-900">
              <Mail className="h-4 w-4" /> hello@freelanceyar.example.com
            </a>
            <a href="https://t.me/freelanceyar" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold transition-all hover:-translate-y-0.5 dark:border-slate-700">
              <Send className="h-4 w-4" /> کانال تلگرام
            </a>
            <a href="https://github.com/freelanceyar" className="ltr inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold transition-all hover:-translate-y-0.5 dark:border-slate-700">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </Card>

        <PrevNext prev={{ href: "/experiences", label: "تجربه‌های واقعی" }} />
      </div>
    </PageTransition>
  );
}
