import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { QuickNav } from "@/components/home/QuickNav";
import { CTA } from "@/components/home/CTA";
import { PageTransition } from "@/components/layout/PageTransition";
import { Container } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "فریلنس‌یار | راهنمای جامع فریلنسری برای ایرانیان",
  description:
    "از صفر تا اولین درآمد دلاری از ایران: انتخاب مهارت، پلتفرم‌ها، پروفایل، قیمت‌گذاری، دریافت پول، ابزارها و داستان‌های واقعی.",
};

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <Container>
        <div className="rounded-2xl border border-amber-200/70 bg-amber-50/70 p-4 text-sm leading-8 text-amber-900 dark:border-amber-800/60 dark:bg-amber-950/30 dark:text-amber-200" role="note">
          <strong>حرف صادقانه با ایرانی‌ها:</strong> پلتفرم‌های بین‌المللی برای کاربران ایران محدودیت دارن و
          پرداخت مستقیم به ایران ممکن نیست. فریلنس‌یار راه‌حل‌های واقعی را توضیح می‌ده — ولی هیچ‌وقت بدون
          فهمیدن ریسک حقوقی و مسدودشدن اکانت، از هویت جعلی یا اکانت اجاره‌ای استفاده نکن. قبل از کسب درآمد، اول{" "}
          <a href="/payments" className="font-bold underline underline-offset-4">راهنمای دریافت پول</a> را بخوان.
        </div>
      </Container>
      <Features />
      <QuickNav />
      <CTA />
    </PageTransition>
  );
}
