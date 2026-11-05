"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Search, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { LogoMark } from "@/components/svg/LogoMark";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="خانه فریلنس‌یار">
          <LogoMark className="h-9 w-9 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105" />
          <span className="flex flex-col leading-none">
            <span className="text-[17px] font-extrabold tracking-tight">
              فریلنس<span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">‌یار</span>
            </span>
            <span className="hidden text-[11px] font-medium text-slate-500 dark:text-slate-400 sm:block">
              راهنمای فریلنسری برای ایرانیان
            </span>
          </span>
        </Link>

        <nav aria-label="ناوبری اصلی" className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.slice(0, 7).map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-brand-700 dark:text-brand-300"
                    : "text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
                )}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-lg bg-brand-50 ring-1 ring-brand-200/60 dark:bg-brand-950/60 dark:ring-brand-800/60"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/search"
            aria-label="جست‌وجو"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-slate-600 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-card dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300"
          >
            <Search className="h-[18px] w-[18px]" />
          </Link>
          <ThemeToggle />
          <Link
            href="/getting-started"
            className="hidden items-center gap-1.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-glow sm:inline-flex"
          >
            <Sparkles className="h-4 w-4" />
            رایگان شروع کن
          </Link>
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="باز و بسته کردن منو"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="ناوبری موبایل"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-slate-200/70 dark:border-slate-800/70 lg:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={cn(
                    "block rounded-xl px-3 py-2.5 text-[15px] font-medium",
                    pathname === item.href
                      ? "bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-200"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
