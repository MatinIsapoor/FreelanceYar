import type { Metadata, Viewport } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-vazirmatn",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "فریلنس‌یار | راهنمای جامع فریلنسری برای ایرانیان",
    template: "%s | فریلنس‌یار",
  },
  description: siteConfig.description,
  keywords: [
    "فریلنسری",
    "فریلنچر ایران",
    "آپورک ایران",
    "فایور ایران",
    "دریافت درآمد دلاری",
    "نقد کردن درآمد ارزی",
    "پیونیر ایران",
    "کار از راه دور",
    "freelancing Iran",
    "Upwork Iran",
    "receive international payments Iran",
  ],
  authors: [{ name: "فریلنس‌یار" }],
  creator: "فریلنس‌یار",
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    alternateLocale: ["en_US"],
    title: "فریلنس‌یار | راهنمای جامع فریلنسری برای ایرانیان",
    description: siteConfig.description,
    siteName: "فریلنس‌یار",
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "فریلنس‌یار | راهنمای فریلنسری برای ایرانیان",
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning className={vazirmatn.variable}>
      <body className="min-h-screen font-sans">
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:right-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
          >
            پرش به محتوای اصلی
          </a>
          <Navbar />
          <main id="main" className="min-h-[70vh]">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
