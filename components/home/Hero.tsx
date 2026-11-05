"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck, Star, Zap } from "lucide-react";
import { HeroIllustration } from "@/components/svg/HeroIllustration";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-220px] h-[440px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-100 via-accent-100 to-brand-100 blur-3xl dark:from-brand-950/60 dark:via-slate-900 dark:to-accent-950/40" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-12 sm:px-6 lg:grid-cols-2 lg:pt-20">
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 px-3.5 py-1.5 text-xs font-bold text-brand-700 shadow-sm backdrop-blur dark:border-brand-800 dark:bg-slate-900/70 dark:text-brand-300">
              <Zap className="h-3.5 w-3.5" />
              راهنمای عملی · ساخته‌شده برای ایرانی‌ها · برای همیشه رایگان
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-5 text-4xl font-extrabold leading-[1.4] tracking-tight sm:text-5xl lg:text-[3.2rem]"
          >
            فریلنسری از ایران را{" "}
            <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 bg-clip-text text-transparent">
              با اعتمادبه‌نفس شروع کن.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-5 max-w-xl text-[16px] leading-8 text-slate-600 dark:text-slate-400"
          >
            <strong className="text-slate-900 dark:text-white">فریلنس‌یار</strong> همراه قدم‌به‌قدم توست:
            مهارت انتخاب کن، اولین مشتری را بگیر، پروپوزالی بنویس که جواب بگیره، منصفانه قیمت بده و
            درآمد دلاری‌ت را با وجود تحریم و محدودیت نقد کن.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <Link
              href="/getting-started"
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-3.5 font-bold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-glow"
            >
              شروع نقشه راه
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </Link>
            <Link
              href="/payments"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-6 py-3.5 font-bold backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-card dark:border-slate-700 dark:bg-slate-900/80"
            >
              <ShieldCheck className="h-4 w-4 text-accent-600" />
              پولم را چطور بگیرم؟
            </Link>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-6 text-sm"
          >
            {[
              ["۸ راهنما", "از مبتدی تا پیشرفته"],
              ["برنامه ۳۰ روزه", "از صفر تا اولین مشتری"],
              ["تست‌شده در ایران", "پرداخت و پلتفرم"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center gap-2.5">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <div>
                  <dt className="font-extrabold">{k}</dt>
                  <dd className="text-slate-500 dark:text-slate-400">{v}</dd>
                </div>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <HeroIllustration className="mx-auto max-w-[540px]" />
        </motion.div>
      </div>
    </section>
  );
}
