# فریلنس‌یار — راهنمای فریلنسری برای ایرانیان
# FreelanceYar — Freelancing Guide for Iranians

> راهنمای کاربردی، صادقانه و فارسی برای شروع و رشد فریلنسری از ایران — مهارت، پلتفرم، پروفایل، قیمت‌گذاری، دریافت درآمد دلاری، ابزار و داستان‌های واقعی.
>
> A practical, honest, Persian-first Next.js guide that helps Iranians start and grow freelancing.

## ✨ ویژگی‌ها | Features

- **۸ راهنمای عمیق فارسی و راست‌به‌چپ**: خانه، شروع، پلتفرم‌ها، پروفایل، قیمت‌گذاری، دریافت پول (محوری)، ابزارها، تجربه‌ها، درباره
- **فونت وزیرمتن** با `next/font/google` + تایپوگرافی فارسی (line-height بلند، اعداد فارسی)
- **جست‌وجوی بهبودیافته فارسی**: نرمال‌سازی ی/ك، حذف اعراب، رتبه‌بندی وزن‌دار (عنوان ×۵، تگ ×۳) — `lib/search.ts`
- **چک‌لیست‌های تعاملی** با localStorage + دکمه شروع دوباره + حالت بارگذاری
- **فیلتر سطح** فارسی (مبتدی/متوسط/پیشرفته)، حالت تاریک/روشن، انیمیشن Framer Motion
- **محتوا ماژولار**: همه متن‌ها در `data/content.ts` + مارک‌داون در `content/` — هیچ متن خشک‌کرده‌ای در کامپوننت نیست
- **سئوی فارسی**: متادیتا، OpenGraph با `fa_IR`، نقشه سایت
- **دسترس‌پذیری**: لینک پرش، aria فارسی، فوکوس، `role="progressbar"`

## 🧱 تکنولوژی | Tech stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS 3 · Framer Motion · next-themes · lucide-react · gray-matter + remark · Vazirmatn

## 📁 ساختار پوشه | Folder structure

```text
FreelanceYar/
├── app/
│   ├── layout.tsx          # فونت وزیرمتن، lang=fa dir=rtl، متادیتای فارسی
│   ├── providers.tsx       # next-themes + framer-motion
│   ├── globals.css         # تایپوگرافی فارسی + prose راست‌به‌چپ
│   ├── page.tsx            # خانه (Hero + Features + QuickNav + CTA)
│   ├── sitemap.ts
│   ├── not-found.tsx       # فارسی
│   ├── getting-started/page.tsx  # از data + guidesMeta می‌خواند
│   ├── platforms/page.tsx        # از platforms در data می‌خواند
│   ├── profile/page.tsx
│   ├── pricing/page.tsx          # از pricingTiers می‌خواند
│   ├── payments/page.tsx         # عمیق‌ترین راهنما
│   ├── tools/page.tsx            # فیلتر + چک‌لیست (client)
│   ├── experiences/page.tsx      # از stories می‌خواند
│   ├── about/page.tsx
│   └── search/page.tsx
├── components/
│   ├── layout/ Navbar.tsx  Footer.tsx  ThemeToggle.tsx  PageTransition.tsx
│   ├── home/ Hero.tsx  Features.tsx  QuickNav.tsx  CTA.tsx
│   ├── ui/ primitives.tsx (Container, Card, Badge, LevelBadge…)  GuideHeader.tsx  article.tsx
│   ├── svg/ LogoMark.tsx  HeroIllustration.tsx  FloatingShapes.tsx  AnimatedIcon.tsx  Feedback.tsx
│   └── interactive/ Checklist.tsx  LevelFilter.tsx  SearchBar.tsx  SkillGrid.tsx
├── data/content.ts         # quickNav، features، searchIndex، platforms، pricingTiers، skills، tools، stories، guidesMeta — همه فارسی
├── content/*.md            # منبع مارک‌داون فارسی (getting-started، payments، platforms، profile، pricing)
├── lib/ site.ts (nav فارسی + toFaDigits)  search.ts (نرمال‌سازی فارسی)  utils.ts  markdown.ts
├── public/favicon.svg
└── tailwind.config.ts (فونت Vazirmatn اول) · postcss · tsconfig · next.config.mjs
```

## 🚀 شروع | Getting started

```bash
# 1. نصب
npm install

# 2. اجرای محلی
npm run dev
# → http://localhost:3000

# 3. تایپ‌چک / بیلد
npm run typecheck
npm run build
npm start
```

Node 18.18+ لازم است (روی Node 24 تست شده).

## ✏️ ویرایش محتوا | Editing content

- **ویرایش سریع**: `data/content.ts` را باز کن — پلتفرم‌ها، قیمت‌ها، ایندکس جست‌وجو، کارت‌های ناوبری، داستان‌ها.
- **متن بلند**: `content/*.md` با فرانت‌متر. مثال:

```md
---
title: "دریافت پول — منبع قابل‌ویرایش"
slug: "payments"
level: "همه سطوح"
tags: ["پیونیر", "تتر", "تحریم"]
description: "..."
---

## روش‌ها
...
```

رندر با:

```ts
import { readFileSync } from "fs";
import { parseMarkdownFile, markdownToHtml } from "@/lib/markdown";

const raw = readFileSync("content/payments.md", "utf8");
const { data, content } = parseMarkdownFile(raw);
const html = await markdownToHtml(content);
```

- **افزودن راهنما**: یک پوشه در `app/` کپی کن، `GuideHeader` را با `guidesMeta` پر کن، به `lib/site.ts` و `searchIndex` اضافه کن.

## 🔍 جست‌وجو | Search

`lib/search.ts` متن را با `normalizeFa` یکدست می‌کند (ي→ی، ك→ک، حذف اعراب، نیم‌فاصله→فاصله) و وزن می‌دهد:
عنوان ×۵، تگ دقیق ×۶، تگ جزئی ×۳، بخش ×۲، توضیح ×۱. فارسی و انگلیسی هر دو کار می‌کنند.

## 🌙 حالت تاریک | Dark mode

`next-themes` با `attribute="class"` + حالت `dark` تیلویند. همه رنگ‌ها نسخه تاریک دارند.

## ♿ دسترس‌پذیری و سئو | A11y & SEO

لینک پرش به محتوا، `aria` فارسی، `aria-pressed` در فیلتر/چک‌لیست، `role="progressbar"`، حلقه فوکوس، `h1→h3` معنایی، متادیتای هر مسیر، `sitemap.ts`، `locale: fa_IR`.

## ⚠️ سلب مسئولیت | Disclaimer

محتوای آموزشی است — مشاوره مالی، حقوقی یا مالیاتی نیست. قوانین تحریم و پلتفرم‌ها عوض می‌شن؛ قبل از جابه‌جایی پول قوانین فعلی را چک کن.
Educational content only — not financial, legal, or tax advice.
