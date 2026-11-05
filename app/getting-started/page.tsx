import type { Metadata } from "next";
import { GuideHeader } from "@/components/ui/GuideHeader";
import { PageTransition, FadeUp } from "@/components/layout/PageTransition";
import { Card } from "@/components/ui/primitives";
import { PrevNext, Callout } from "@/components/ui/article";
import { Checklist } from "@/components/interactive/Checklist";
import { SkillGrid } from "@/components/interactive/SkillGrid";
import { CheckCircle2, HeartHandshake, Clock, Wallet } from "lucide-react";
import { guidesMeta } from "@/data/content";

export const metadata: Metadata = {
  title: "شروع فریلنسری از صفر",
  description: "بفهم فریلنسری به دردت می‌خوره یا نه، یک مهارت پول‌ساز انتخاب کن و با نقشه راه ۳۰ روزه به اولین مشتری برس.",
};

const meta = guidesMeta.gettingStarted;

const roadmap = [
  { week: "هفته اول — تصمیم و انتخاب", tasks: ["خودآزمایی پایین را صادقانه انجام بده", "یک مهارت + یک نیچ انتخاب کن (مثلاً «لندینگ برای دندان‌پزشک‌ها»)", "خونه نمونه‌کار را بساز: گیت‌هاب / بیهنس / نوشن", "۱۰ پروفایل برتر نیچ‌ت را بررسی کن و الگوها را یادداشت کن"] },
  { week: "هفته دوم — ساختن اثبات", tasks: ["۳ نمونه‌کار کوچک بساز (واقعی یا فرضی)", "برای هر کدام بنویس: مسئله → فرآیند → نتیجه", "از ۲ دوست یا منتور بازخورد بگیر", "مسیر تست دریافت پول را مشخص کن (راهنمای دریافت پول)"] },
  { week: "هفته سوم — انتشار پروفایل", tasks: ["۱-۲ پروفایل بساز (گیگ فایور + آپورک یا کانترا)", "یک ویدیوی معرفی ۶۰ ثانیه‌ای ضبط کن", "نمونه‌کار + تیتر لینکدین را منتشر کن", "چک‌لیست شروع در صفحه ابزارها را کامل کن"] },
  { week: "هفته چهارم — اولین پروپوزال‌ها", tasks: ["حداقل هفته‌ای ۵ پروپوزال دقیق بفرست", "هر درخواست را در شیت پیگیری کن", "بازخورد بگیر و هفته‌ای یک بار اصلاح کن", "یک کار کوچک حتی ارزون بگیر — برای ریویو و فرآیند"] },
];

const selfCheck = [
  { icon: Clock, text: "می‌تونی هفته‌ای ۱۰+ ساعت متمرکز برای ۳ ماه بذاری" },
  { icon: HeartHandshake, text: "از یادگیری علنی و شنیدن «نه» فراری نیستی" },
  { icon: CheckCircle2, text: "یک مهارت قابل‌فروش داری یا می‌سازی" },
  { icon: Wallet, text: "۲-۳ ماه درآمد کم یا صفر فریلنسری را تحمل می‌کنی" },
  { icon: CheckCircle2, text: "انگلیسی نوشتاری در حد B1 داری (برای شروع کافیه)" },
  { icon: CheckCircle2, text: "کسی برای دریافت پول در خارج داری یا روش‌های امن را بلدی" },
];

export default function GettingStartedPage() {
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
        <FadeUp>
          <section id="is-it-for-me" aria-labelledby="is-it-for-me-h" className="scroll-mt-24">
            <h2 id="is-it-for-me-h" className="text-2xl font-extrabold tracking-tight">فریلنسری به درد من می‌خوره؟</h2>
            <p className="mt-3 leading-8 text-slate-600 dark:text-slate-400">
              بذار روراست باشیم. فریلنسری آزادی می‌ده، ولی اولش درآمد نامنظمه و از ایران اصطکاک پرداخت و
              پلتفرم هم اضافه می‌شه. من اگر جای تو بودم، فقط وقتی شروع می‌کردم که بیشتر این‌ها درست باشه.
              اگر الان همه‌ش را نداری اشکالی نداره — خیلی‌هاش ساختنیه، فقط باید چشم‌بسته شروع نکنی:
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {selfCheck.map((c) => (
                <Card key={c.text} className="flex gap-2.5 p-4">
                  <c.icon className="mt-1 h-5 w-5 shrink-0 text-accent-600" />
                  <span className="text-sm font-medium leading-7">{c.text}</span>
                </Card>
              ))}
            </div>
            <Callout title="تست واقعیت — لطفاً بخوان" tone="warning">
              اگر کسی قول «ماهانه ۵ هزار دلار بدون مهارت در ۳۰ روز» داد، فرار کن. هدف واقعی اول مسیر از ایران:
              <strong> یک مشتری پول‌دهنده و یک ریویوی ۵ ستاره در ۳۰ تا ۶۰ روز</strong>. بعدش همه‌چیز مرکب می‌شه.
              عجله برای پولدار شدن، معمولاً با ارزون‌فروشی و سوختن جبران می‌شه.
            </Callout>
          </section>
        </FadeUp>

        <FadeUp>
          <section id="skills" aria-labelledby="skills-h" className="mt-12 scroll-mt-24">
            <h2 id="skills-h" className="text-2xl font-extrabold tracking-tight">مهارت‌های پول‌ساز (۱۴۰۵)</h2>
            <p className="mt-3 leading-8 text-slate-600 dark:text-slate-400">
              فقط یکی را انتخاب کن. عمق از عرض می‌بره — مشتری به متخصص پول می‌ده، نه به «همه‌کارم».
              اگر بین دو تا مرددی، آن را بردار که هم دوستش داری هم می‌تونی هر روز تمرینش کنی.
              علاقه بدون تمرین روزانه می‌میره و تقاضا بدون علاقه، تو را فرسوده می‌کنه.
            </p>
            <SkillGrid />
            <Callout title="انتخاب در ۱۰ دقیقه" tone="success">
              به هر مهارت ۱ تا ۵ بده در: (۱) دوستش داری، (۲) می‌تونی روزانه تمرین کنی، (۳) براش ۲۰+ آگهی فعال می‌بینی.
              بالاترین جمع برنده‌ست. ۹۰ روز بهش متعهد بمون و بعد عوض کن. جابه‌جایی زودهنگام، قاتل پیشرفته.
            </Callout>
          </section>
        </FadeUp>

        <FadeUp>
          <section id="mistakes" aria-labelledby="mistakes-h" className="mt-12 scroll-mt-24">
            <h2 id="mistakes-h" className="text-2xl font-extrabold tracking-tight">۳ اشتباهی که اول راه نکن</h2>
            <div className="mt-5 grid gap-3">
              {[
                ["همه‌چیز یاد گرفتن همزمان", "دوره‌خری وسواسی را ول کن. یک مهارت، یک نیچ، سه نمونه‌کار. بقیه بعداً."],
                ["کامل‌گرایی قبل از انتشار", "پروفایل «کامل» وجود نداره. نسخه ۷۰٪ را منتشر کن و با بازخورد واقعی اصلاح کن."],
                ["پول را آخر فهمیدن", "از روز اول بدان پولت از چه مسیری میاد. خیلی‌ها کار می‌کنن بعد می‌فهمن برداشتش را بلد نیستن."],
              ].map(([t, d], i) => (
                <Card key={t} className="p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-rose-500">اشتباه {["اول", "دوم", "سوم"][i]}</p>
                  <h3 className="mt-1 font-extrabold">{t}</h3>
                  <p className="mt-1.5 text-[15px] leading-8 text-slate-600 dark:text-slate-400">{d}</p>
                </Card>
              ))}
            </div>
          </section>
        </FadeUp>

        <FadeUp>
          <section id="roadmap" aria-labelledby="roadmap-h" className="mt-12 scroll-mt-24">
            <h2 id="roadmap-h" className="text-2xl font-extrabold tracking-tight">نقشه راه ۳۰ روزه‌ات</h2>
            <p className="mt-2 leading-8 text-slate-600 dark:text-slate-400">
              روزی ۲ ساعت متمرکز کافیه. مهم پیوستگیه، نه حجم انفجاری اول هفته و رها کردن آخر هفته.
            </p>
            <div className="mt-5 space-y-4">
              {roadmap.map((w, i) => (
                <Card key={w.week} className="p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-300">قدم {["اول", "دوم", "سوم", "چهارم"][i]}</p>
                  <h3 className="mt-1 text-lg font-extrabold">{w.week}</h3>
                  <ul className="mt-3 space-y-2">
                    {w.tasks.map((t) => (
                      <li key={t} className="flex gap-2.5 text-[15px] leading-7 text-slate-700 dark:text-slate-300">
                        <span aria-hidden className="mt-[12px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </section>
        </FadeUp>

        <div className="mt-8">
          <Checklist
            storageKey="fy-checklist-start"
            title="چک‌لیست شروع"
            items={[
              { id: "s1", label: "یک مهارت + یک نیچ انتخاب کردم", hint: "در یک جمله بنویسش." },
              { id: "s2", label: "۳ نمونه‌کار ساختم", hint: "کیفیت مهم‌تر از کمیته." },
              { id: "s3", label: "راهنمای دریافت پول را خواندم", hint: "قبل از درآمد، راه نقدش را بدان." },
              { id: "s4", label: "یک پروفایل منتشر کردم", hint: "گیگ فایور یا پروفایل آپورک/کانترا." },
              { id: "s5", label: "۵ پروپوزال دقیق فرستادم", hint: "بدون اسپم کپی‌پیستی." },
            ]}
          />
        </div>

        <PrevNext next={{ href: "/platforms", label: "پلتفرم‌های فریلنسری" }} />
      </div>
    </PageTransition>
  );
}
