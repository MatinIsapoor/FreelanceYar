import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { LogoMark } from "@/components/svg/LogoMark";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200/80 bg-slate-50/80 dark:border-slate-800/80 dark:bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-8 w-8" />
            <span className="text-lg font-extrabold tracking-tight">
              فریلنس<span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">‌یار</span>
            </span>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-8 text-slate-600 dark:text-slate-400">
            {siteConfig.description}
          </p>
          <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-500">
            ساخته‌شده با <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" aria-label="عشق" /> برای فریلنسرهای ایرانی
          </p>
        </div>
        <nav aria-label="راهنماها">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">راهنماها</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              ["شروع فریلنسری", "/getting-started"],
              ["پلتفرم‌ها", "/platforms"],
              ["پروفایل و نمونه‌کار", "/profile"],
              ["قیمت‌گذاری و درآمد", "/pricing"],
              ["راهنمای دریافت پول", "/payments"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-300">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="منابع">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">منابع</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              ["ابزارها و چک‌لیست‌ها", "/tools"],
              ["تجربه‌های واقعی", "/experiences"],
              ["جست‌وجو", "/search"],
              ["درباره و تماس", "/about"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-300">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-slate-200/70 dark:border-slate-800/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-slate-500 dark:text-slate-500 sm:flex-row sm:px-6">
          <span>© {new Date().getFullYear()} فریلنس‌یار. همه راهنماها برای همیشه رایگان.</span>
          <span>محتوای آموزشی — مشاوره مالی یا حقوقی نیست.</span>
        </div>
      </div>
    </footer>
  );
}
