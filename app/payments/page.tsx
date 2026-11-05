import type { Metadata } from "next";
import { GuideHeader } from "@/components/ui/GuideHeader";
import { PageTransition, FadeUp } from "@/components/layout/PageTransition";
import { Card, Badge } from "@/components/ui/primitives";
import { PrevNext, Callout } from "@/components/ui/article";
import { Checklist } from "@/components/interactive/Checklist";
import { guidesMeta } from "@/data/content";
import { ShieldCheck, AlertTriangle, PiggyBank, ArrowLeftRight, FileText, Landmark } from "lucide-react";

export const metadata: Metadata = {
  title: "دریافت درآمد دلاری از ایران",
  description: "ایرانی‌ها چطور درآمد فریلنسری را نقد می‌کنن: پیونیر، تتر، واسطه، صرافی، امنیت و مدیریت مالی.",
};

const meta = guidesMeta.payments;

const methods = [
  {
    name: "شخص مورد اعتماد / شرکت در خارج",
    risk: "متوسط",
    tone: "green" as const,
    how: "مشتری به حساب پیونیر/وایز/شرکتی اقوامت پرداخت می‌کنه؛ اون‌ها با صرافی یا تتر بهت می‌رسونن. رایج‌ترین مسیر واقعی.",
    pros: ["با برداشت آپورک/فایور سازگاره", "کارمزد کمتر از واسطه‌ها", "سریع و قابل پیگیری"],
    cons: ["بار مالیاتی برای اون شخص داره", "اعتماد صددرصدی لازم داره", "اکانت باید به اسم خودش باشه"],
    safety: "توافق مکتوب، اول انتقال تست کوچک، صورت‌حساب ماهانه. هیچ‌چیز شفاهی نباشه.",
    fee: "۱ تا ۳٪ + کارمزد صرافی",
  },
  {
    name: "پیونیر با واسطه / آژانس",
    risk: "متوسط تا زیاد",
    tone: "amber" as const,
    how: "بعضی آژانس‌ها به پیونیر خودشون دریافت می‌کنن و با کسر ۵ تا ۱۵٪ بهت تومان یا تتر می‌دن.",
    pros: ["حساب خارجی لازم نداری", "برداشت پلتفرم را هندل می‌کنن"],
    cons: ["کارمزدها جمع می‌شن", "آژانس کلاهبردار هست", "تأخیر دور تعطیلات خارجی"],
    safety: "با ۲+ فریلنسر اعتبارسنجی کن، زیر ۱۰۰ دلار شروع کن، هیچ «هزینه فعال‌سازی» پیش‌پرداخت نکن.",
    fee: "۵ تا ۱۵٪",
  },
  {
    name: "تتر (USDT در ترون/تون)",
    risk: "متوسط",
    tone: "green" as const,
    how: "مشتری مستقیم به ولتت تتر می‌زنه (نوبیتکس/بیت‌پین/ولکس برای نقد کردن). سریع و بدون مرز.",
    pros: ["بدون واسطه", "سریع و ۲۴/۷", "عالی برای مشتری مستقیم"],
    cons: ["اگر نگه داری نوسان داره", "مشتری باید قبول کنه", "در اسکروی آپورک/فایور نیست"],
    safety: "شبکه TRC-20 برای کارمزد کم، تأیید آدرس با تماس صوتی/تصویری، اگر ثبات می‌خوای سریع تبدیل کن.",
    fee: "کارمزد شبکه ~۱ دلار",
  },
  {
    name: "صرافی / صرافی‌های ارزی",
    risk: "متوسط",
    tone: "green" as const,
    how: "مشتری به حساب خارجی صرافی واریز می‌کنه؛ تو در ایران تومان یا تتر می‌گیری.",
    pros: ["آشنا و پشتیبانی فارسی", "مبالغ بزرگ را هندل می‌کنه"],
    cons: ["اختلاف نرخ ۲ تا ۶٪", "مدارک احراز هویت", "تأخیر مسیر تحریمی"],
    safety: "فقط صرافی مجوزدار، رسید برای هر انتقال، مقایسه ۳ نرخ قبل از هر مبلغ بزرگ.",
    fee: "۲ تا ۶٪ اختلاف نرخ",
  },
];

const steps = [
  { t: "قبل از شروع کار", d: "مسیر دریافت را با مشتری شفاف کن. سورپرایز وسط پروژه اعتماد را نابود می‌کنه." },
  { t: "حین کار", d: "فقط با مایل‌استون فاندشده (آپورک) یا سفارش (فایور) کار کن. چت + فایل + پول داخل پلتفرم." },
  { t: "موقع برداشت", d: "اول زیر ۱۰۰ دلار تست کن. آدرس ولت را با تماس تأیید کن. اسکرین‌شات و رسید نگه دار." },
  { t: "بعد از دریافت", d: "ناخالص، کارمزد، خالص و تاریخ را در شیت ثبت کن. ماهانه فاکتور بفرست حتی برای ساعتی." },
];

export default function PaymentsPage() {
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
        <Callout title="مشاوره مالی یا حقوقی نیست" tone="warning">
          قوانین تحریم عوض می‌شن. هر روشی را با قوانین فعلی پلتفرم و مقررات محلی چک کن.
          با مبالغ کوچک تست کن، سوابق نگه دار و هیچ‌وقت مدارک هویتی‌ت را به غریبه نده.
        </Callout>

        <FadeUp>
          <section id="decision" aria-labelledby="decision-h" className="mt-8 scroll-mt-24">
            <h2 id="decision-h" className="flex items-center gap-2 text-2xl font-extrabold tracking-tight">
              <ArrowLeftRight className="h-6 w-6 text-brand-600" /> اول این تصمیم را بگیر (۶۰ ثانیه)
            </h2>
            <Card className="mt-4 p-5 leading-8">
              <ul className="space-y-2 text-[15px]">
                <li><strong>درآمدت از پلتفرم (آپورک/فایور) میاد؟</strong> → مسیر «شخص مورد اعتماد» یا «واسطه معتبر». تتر مستقیم روی این‌ها جواب نمی‌ده چون اسکرو داخلی دارن.</li>
                <li><strong>مشتری مستقیم داری؟</strong> → «تتر» ساده‌ترین و ارزون‌ترینه. اگر مشتری نهادی و سنتیه، «صرافی».</li>
                <li><strong>هیچ‌کدام را نداری؟</strong> → اول یک مسیر پشتیبان هم بچین. همیشه پلن A و B داشته باش تا وسط پروژه گیر نکنی.</li>
              </ul>
            </Card>
          </section>
        </FadeUp>

        <FadeUp>
          <section id="methods" aria-labelledby="methods-h" className="mt-12 scroll-mt-24">
            <h2 id="methods-h" className="flex items-center gap-2 text-2xl font-extrabold tracking-tight">
              <ShieldCheck className="h-6 w-6 text-accent-600" /> مقایسه روش‌های پرداخت
            </h2>
            <div className="mt-5 space-y-4">
              {methods.map((m) => (
                <Card key={m.name} className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-extrabold">{m.name}</h3>
                    <div className="flex gap-2">
                      <Badge tone={m.tone}>ریسک: {m.risk}</Badge>
                      <Badge tone="slate">{m.fee}</Badge>
                    </div>
                  </div>
                  <p className="mt-2 text-[15px] leading-8 text-slate-600 dark:text-slate-400">{m.how}</p>
                  <div className="mt-3 grid gap-3 text-sm sm:grid-cols-2">
                    <div><p className="font-bold text-emerald-600">مزایا</p><ul className="mt-1 list-disc ps-5 leading-7">{m.pros.map((p) => <li key={p}>{p}</li>)}</ul></div>
                    <div><p className="font-bold text-rose-500">معایب</p><ul className="mt-1 list-disc ps-5 leading-7">{m.cons.map((c) => <li key={c}>{c}</li>)}</ul></div>
                  </div>
                  <p className="mt-3 rounded-xl bg-slate-100 p-3 text-sm leading-7 dark:bg-slate-800"><strong>نکته امنیت:</strong> {m.safety}</p>
                </Card>
              ))}
            </div>
          </section>
        </FadeUp>

        <FadeUp>
          <section id="flow" aria-labelledby="flow-h" className="mt-12 scroll-mt-24">
            <h2 id="flow-h" className="flex items-center gap-2 text-2xl font-extrabold tracking-tight">
              <FileText className="h-6 w-6 text-brand-600" /> جریان امن قدم‌به‌قدم
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {steps.map((s, i) => (
                <Card key={s.t} className="p-5">
                  <p className="text-xs font-bold text-brand-600">مرحله {["اول", "دوم", "سوم", "چهارم"][i]}</p>
                  <h3 className="mt-1 font-extrabold">{s.t}</h3>
                  <p className="mt-1 text-sm leading-7 text-slate-600 dark:text-slate-400">{s.d}</p>
                </Card>
              ))}
            </div>
          </section>
        </FadeUp>

        <FadeUp>
          <section id="safety" aria-labelledby="safety-h" className="mt-12 scroll-mt-24">
            <h2 id="safety-h" className="flex items-center gap-2 text-2xl font-extrabold tracking-tight">
              <AlertTriangle className="h-6 w-6 text-amber-500" /> قوانین ضدکلاهبرداری
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                "بدون اسکرو / مایل‌استون فاندشده شروع نکن (آپورک) یا سفارش (فایور).",
                "برای گرفتن کار پول نده — «کارمزد» و «ودیعه آموزش» یعنی کلاهبرداری.",
                "چت + فایل + پرداخت را تا برداشت داخل پلتفرم نگه دار.",
                "هر کسی قراره پولت را نگه داره با ویدیو احراز کن. بدون استثنا.",
                "پرچم قرمز: فقط تلگرام، اضافه‌پرداخت + درخواست برگشت، عجله + مخفی‌کاری.",
                "قرارداد حداقلی: اسکوپ، قیمت، زمان، ریویژن، جریمه لغو و مسیر پرداخت.",
              ].map((t) => (
                <Card key={t} className="p-4 text-sm font-medium leading-7">{t}</Card>
              ))}
            </div>
          </section>
        </FadeUp>

        <FadeUp>
          <section id="money" aria-labelledby="money-h" className="mt-12 scroll-mt-24">
            <h2 id="money-h" className="flex items-center gap-2 text-2xl font-extrabold tracking-tight">
              <PiggyBank className="h-6 w-6 text-brand-600" /> مدیریت ساده پول
            </h2>
            <Card className="mt-4 p-5">
              <p className="text-[15px] leading-8"><strong>۵۰-۳۰-۲۰ فریلنسری:</strong> ۵۰٪ هزینه زندگی، ۳۰٪ بافر مالیات/پس‌انداز (درآمد نامنظمه — ۳ ماه هزینه نگه دار)، ۲۰٪ رشد (دوره، ابزار، لپ‌تاپ و اینترنت بهتر). به دلار/تتر قیمت بده، خالص بعد از کارمزد را در شیت حساب کن و ماهانه حتی برای ساعتی فاکتور بفرست.</p>
              <p className="mt-3 flex items-start gap-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                <Landmark className="mt-1 h-4 w-4 shrink-0" />
                نکته ایرانی: نرخ تبدیل را روز دریافت ثبت کن، نه روز توافق. اختلاف چند هفته‌ای گاهی ۱۰٪ جابه‌جا می‌شه — در قراردادت بنویس مبنا کدام روزه.
              </p>
            </Card>
          </section>
        </FadeUp>

        <div className="mt-8">
          <Checklist
            storageKey="fy-checklist-payments"
            title="چک‌لیست آمادگی مالی"
            items={[
              { id: "pay1", label: "مسیر اصلی + پشتیبان برداشت را انتخاب کردم", hint: "مثلاً پیونیر با X + ولت تتر." },
              { id: "pay2", label: "با مبلغ کوچک تست کردم", hint: "زیر ۱۰۰ دلار اول." },
              { id: "pay3", label: "توافق مکتوب با نگه‌دارنده پول دارم", hint: "کارمزد، زمان، صورت‌حساب." },
              { id: "pay4", label: "قانون فقط-اسکرو را گذاشتم", hint: "بدون مایل‌استون فاندشده کاری نیست." },
              { id: "pay5", label: "شیت پیگیری ماهانه آماده‌ست", hint: "ناخالص، کارمزد، خالص، تاریخ." },
            ]}
          />
        </div>

        <PrevNext prev={{ href: "/pricing", label: "قیمت‌گذاری و درآمد" }} next={{ href: "/tools", label: "ابزارها و منابع" }} />
      </div>
    </PageTransition>
  );
}
