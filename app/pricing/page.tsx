import type { Metadata } from "next";
import { GuideHeader } from "@/components/ui/GuideHeader";
import { PageTransition, FadeUp } from "@/components/layout/PageTransition";
import { Card, Badge } from "@/components/ui/primitives";
import { PrevNext, Callout } from "@/components/ui/article";
import { pricingTiers, guidesMeta } from "@/data/content";

export const metadata: Metadata = {
  title: "قیمت‌گذاری و درآمد",
  description: "استراتژی‌های قیمت‌گذاری، اشتباهات رایج و مسیر بالا بردن نرخ فریلنسری بدون از دست دادن مشتری.",
};

const meta = guidesMeta.pricing;

export default function PricingPage() {
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
          <section id="strategies" aria-labelledby="s-h" className="scroll-mt-24">
            <h2 id="s-h" className="text-2xl font-extrabold tracking-tight">سه سطح قیمت‌گذاری</h2>
            <p className="mt-2 leading-8 text-slate-600 dark:text-slate-400">
              قیمت تو باید با اثباتت رشد کنه، نه با حدست. ببین کجایی و قدم بعدی چیه:
            </p>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {pricingTiers.map((t) => (
                <Card key={t.name} className="p-5">
                  <Badge>{t.range}</Badge>
                  <h3 className="mt-2 text-lg font-extrabold">{t.name}</h3>
                  <p className="mt-1 text-sm leading-7 text-slate-600 dark:text-slate-400">{t.when}</p>
                  <p className="mt-2 text-sm font-medium leading-7">{t.focus}</p>
                </Card>
              ))}
            </div>
            <Card className="mt-4 border-brand-200 bg-brand-50/60 p-5 dark:border-brand-800 dark:bg-brand-950/30">
              <h3 className="font-extrabold">فرمول ساده</h3>
              <p className="mt-2 text-[15px] leading-8">
                <strong>قیمت ثابت = (ساعت × نرخ هدف × ۱.۳ حاشیه) + هزینه ریویژن.</strong> بازه بده، نه عدد تکی
                («۲۸۰ تا ۳۵۰ دلار بسته به ریویژن»). همیشه اسکوپ را مکتوب کن: خروجی‌ها، سقف ریویژن (حداکثر ۲ بار)،
                زمان‌بندی و اینکه چه چیزی هزینه اضافه داره. هر چیزی که نوشته نشه، بعداً بحث می‌شه.
              </p>
            </Card>
            <Callout title="ساعتی یا پروژه‌ای؟" tone="info">
              اول مسیر <strong>پروژه‌ای</strong> بهتره: مشتری سقف می‌دونه و تو اگر سریع شی سودت بیشتره.
              ساعتی فقط وقتی خوبه که اسکوپ نامشخصه یا مشتری بلندمدت و قابل‌اعتماده. قانون من: اسکوپ مشخص → پروژه‌ای،
              اسکوپ مه‌آلود → ساعتی با سقف هفتگی.
            </Callout>
          </section>
        </FadeUp>

        <FadeUp>
          <section id="mistakes" aria-labelledby="m-h" className="mt-12 scroll-mt-24">
            <h2 id="m-h" className="text-2xl font-extrabold tracking-tight">اشتباهات قیمتی که ایرانی‌ها را کم‌درآمد نگه می‌داره</h2>
            <div className="mt-5 space-y-3">
              {[
                ["رقابت فقط روی قیمت", "همیشه یکی ارزون‌تر هست. به‌جاش روی سرعت، شفافیت و اثبات نیچ رقابت کن. ارزون‌ترین بودن، برند نیست؛ تله‌ست."],
                ["تست رایگان", "فقط تست پولی (حداکثر ۱-۲ ساعت که به پروژه وصل می‌شه). کلاهبردارها عاشق تست رایگانن."],
                ["اسکوپ مبهم", "«یه سایت ساده» می‌شه ۴۰ تا ریویژن. قبل از شروع خروجی + سقف ریویژن را بنویس."],
                ["هیچ‌وقت نرخ را بالا نبردن", "هر ۵-۸ پروژه یا وقتی ۲+ هفته پر بودی، ۱۵-۲۵٪ بالا ببر. مشتری قدیمی: یک پروژه با نرخ قبلی، بعد نرخ جدید."],
                ["نادیده گرفتن کارمزد و افت تبدیل", "قیمت = نرخ تو + کارمزد پلتفرم (۱۰-۲۰٪) + هزینه نقد کردن. خالص را حساب کن، نه ناخالص را."],
              ].map(([t, d]) => (
                <Card key={t} className="p-5">
                  <h3 className="font-extrabold text-rose-600 dark:text-rose-300">✕ {t}</h3>
                  <p className="mt-1.5 text-[15px] leading-8 text-slate-600 dark:text-slate-400">{d}</p>
                </Card>
              ))}
            </div>
            <Callout title="متن بالا بردن نرخ (کپی کن)" tone="success">
              «ممنون از همکاری عالی‌مون! از [تاریخ] نرخ من برای این نوع کار [نرخ جدید] می‌شه که با تقاضا و نتایجی مثل
              [عدد] هم‌خوانه. خوشحال می‌شم اگر این هفته شروع کنیم، یک پروژه آخر را با نرخ فعلی قفل کنیم.»
              کوتاه، مطمئن، بدون عذرخواهی طولانی.
            </Callout>
          </section>
        </FadeUp>

        <PrevNext prev={{ href: "/profile", label: "پروفایل و نمونه‌کار" }} next={{ href: "/payments", label: "راهنمای دریافت پول" }} />
      </div>
    </PageTransition>
  );
}
