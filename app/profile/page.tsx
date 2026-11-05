import type { Metadata } from "next";
import { GuideHeader } from "@/components/ui/GuideHeader";
import { PageTransition, FadeUp } from "@/components/layout/PageTransition";
import { Card } from "@/components/ui/primitives";
import { PrevNext, Callout } from "@/components/ui/article";
import { Checklist } from "@/components/interactive/Checklist";
import { guidesMeta } from "@/data/content";

export const metadata: Metadata = {
  title: "پروفایل، نمونه‌کار و پروپوزال",
  description: "پروفایلی بساز که کلیک بگیره، نمونه‌کاری که مهارت را ثابت کنه و پروپوزالی که جواب بگیره.",
};

const meta = guidesMeta.profile;

const proposalTemplate = `Subject: I can fix [specific problem] — [proof] in [timeframe]

Hi [Name],

I looked at [project/page] and noticed [1 sharp observation].
I recently did [similar result] for [client type]: [metric/link].

Here's how I'd approach yours:
1. [Step 1]  2. [Step 2]  3. [Step 3]

Question: [smart question that shows expertise]?

I can start [when] and send a first draft by [date].
Want a quick 15-min call tomorrow?

— [Your name]
[Portfolio link] · [1 best review/credential]`;

const proposalFaExample = `موضوع: مشکل [X] سایت‌تون را در [زمان] حل می‌کنم — [اثبات]

سلام [اسم]،
صفحه [X] را دیدم و متوجه شدم [یک نکته دقیق].
اخیراً برای [نوع مشتری] همین کار را کردم: [عدد/لینک].

برنامه من برای شما:
۱. [قدم اول]  ۲. [قدم دوم]  ۳. [قدم سوم]

یک سؤال: [سؤال هوشمندانه که تخصص را نشان می‌دهد]؟

می‌تونم از [زمان] شروع کنم و پیش‌نویس اول را تا [تاریخ] بفرستم.
فردا یک تماس ۱۵ دقیقه‌ای داشته باشیم؟`;

export default function ProfilePage() {
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
          <section id="formula" aria-labelledby="formula-h" className="scroll-mt-24">
            <h2 id="formula-h" className="text-2xl font-extrabold tracking-tight">فرمول پروفایل قوی</h2>
            <p className="mt-2 leading-8 text-slate-600 dark:text-slate-400">
              مشتری در ۳۰ ثانیه تصمیم می‌گیره بمونه یا بره. این ۵ قانون را موبه‌مو اجرا کن:
            </p>
            <div className="mt-5 grid gap-3">
              {[
                ["تیتر = نتیجه، نه عنوان شغلی", "بد: «طراح گرافیک». خوب: «لندینگ فروش برای کلینیک‌ها طراحی می‌کنم که نوبت را ۲ برابر می‌کنه — ۴۰+ پروژه، فیگما تا ری‌اکت»."],
                ["دو خط اول ۸۰٪ وزنه", "با کمک + اثبات شروع کن: «به مربی‌ها کمک می‌کنم با سایت وردپرسی سریع مشتری بگیرن. ۴.۹ از ۳۰ ریویو.»"],
                ["عکس + ویدیوی ۶۰ ثانیه‌ای", "لبخند، پس‌زمینه ساده، نگاه به دوربین. سناریو: به کی کمک می‌کنی → اثبات → روش کارت → دعوت."],
                ["۳ کار عالی، نه ۳۰ تا", "یک نیچ، سه کیس‌استادی عالی با قبل/بعد + عدد. بقیه را حذف کن. کم ولی عمیق، اعتماد می‌سازه."],
                ["اثبات اجتماعی همه‌جا", "ریویو، لوگوی مشتری، عدد و نظر — حتی از کارهای کوچک و محلی اول مسیر. اثبات کوچک بهتر از ادعای بزرگه."],
              ].map(([t, d], i) => (
                <Card key={t} className="p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-300">قانون {["اول", "دوم", "سوم", "چهارم", "پنجم"][i]}</p>
                  <h3 className="mt-1 font-extrabold">{t}</h3>
                  <p className="mt-1.5 text-[15px] leading-8 text-slate-600 dark:text-slate-400">{d}</p>
                </Card>
              ))}
            </div>
          </section>
        </FadeUp>

        <FadeUp>
          <section id="proposals" aria-labelledby="proposals-h" className="mt-12 scroll-mt-24">
            <h2 id="proposals-h" className="text-2xl font-extrabold tracking-tight">پروپوزالی که جواب می‌گیره</h2>
            <p className="mt-3 leading-8 text-slate-600 dark:text-slate-400">
              مشتری اسکن می‌کنه، نمی‌خونه. دو خط اولت باید ثابت کنه پروژه را خواندی. ساختار: شروع شخصی →
              اثبات مرتبط → مینی‌برنامه → یک سؤال → قدم بعدی مشخص. برای مشتری خارجی انگلیسی بفرست، ولی
              منطقش همین فارسی پایین‌ست:
            </p>
            <Card className="mt-5 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">مثال فارسی (منطق پیام)</p>
              <pre className="mt-3 overflow-x-auto whitespace-pre-wrap rounded-xl bg-slate-950 p-4 text-[13px] leading-7 text-slate-100 dark:bg-black/40">{proposalFaExample}</pre>
            </Card>
            <Card className="mt-3 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">قالب انگلیسی کپی‌پیستی (هر خط را شخصی کن) — English template</p>
              <pre className="ltr mt-3 overflow-x-auto whitespace-pre-wrap rounded-xl bg-slate-950 p-4 text-[13px] leading-relaxed text-slate-100 dark:bg-black/40" dir="ltr">{proposalTemplate}</pre>
            </Card>
            <Callout title="قاتل‌های پروپوزال" tone="warning">
              «Dear Sir/Madam»، دیوار متن، بدون اثبات، بدون سؤال و «تازه‌کارم ولی پرتلاشم» بدون مدرک.
              ۵ پروپوزال تیز بفرست — نه ۵۰ تا جنریک. و بعد از ۴ روز یک پیگیری مودبانه بفرست؛ نصف جواب‌ها از پیگیری میاد.
            </Callout>
          </section>
        </FadeUp>

        <FadeUp>
          <section id="portfolio" aria-labelledby="portfolio-h" className="mt-12 scroll-mt-24">
            <h2 id="portfolio-h" className="text-2xl font-extrabold tracking-tight">نمونه‌کاری که ثابت می‌کنه، نه فقط نشون می‌ده</h2>
            <p className="mt-3 leading-8 text-slate-600 dark:text-slate-400">
              هنوز مشتری نداری؟ کیس‌استادی فرضی ولی واقعی بساز: یک لندینگ واقعی را بازطراحی کن، یک سایت کند را
              سریع کن، یک ویدیوی عمومی را تدوین کن. برای هر کار بنویس: مسئله → فرآیند تو → نتیجه (با عدد یا اسکرین‌شات).
              سه‌تای عالی از سی‌تای متوسط بهتره. اگر اجازه داری، کارهای ایرانی‌ت را هم انگلیسی مستند کن.
            </p>
          </section>
        </FadeUp>

        <div className="mt-8">
          <Checklist
            storageKey="fy-checklist-profile"
            title="چک‌لیست آمادگی پروفایل"
            items={[
              { id: "p1", label: "تیتر نتیجه‌محور نوشتم", hint: "به کی کمک می‌کنی + چه نتیجه‌ای." },
              { id: "p2", label: "عکس حرفه‌ای + ویدیوی معرفی دارم", hint: "حداکثر ۶۰ ثانیه." },
              { id: "p3", label: "۳ کیس‌استادی با نتیجه منتشر کردم", hint: "مسئله → فرآیند → عدد." },
              { id: "p4", label: "قالب پروپوزال را شخصی‌سازی کردم", hint: "روی ۵ پروژه واقعی تست کن." },
              { id: "p5", label: "لینکدین + لینک نمونه‌کار فعاله", hint: "یک لینک که همه‌چیز را نشان بده." },
            ]}
          />
        </div>

        <PrevNext prev={{ href: "/platforms", label: "پلتفرم‌ها" }} next={{ href: "/pricing", label: "قیمت‌گذاری و درآمد" }} />
      </div>
    </PageTransition>
  );
}
