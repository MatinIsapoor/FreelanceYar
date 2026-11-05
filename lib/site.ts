export const siteConfig = {
  name: "فریلنس‌یار",
  nameEn: "FreelanceYar",
  tagline: "همراه مطمئن تو برای شروع و رشد فریلنسری از ایران",
  description:
    "فریلنس‌یار راهنمای کاربردی و صادقانه برای ایرانی‌هاست تا فریلنسری را شروع کنند: انتخاب مهارت، پلتفرم‌ها، پروفایل، قیمت‌گذاری، دریافت درآمد دلاری از ایران و رشد با اعتمادبه‌نفس.",
  url: "https://freelanceyar.example.com",
  locale: "fa",
  dir: "rtl" as const,
  nav: [
    { href: "/", label: "خانه" },
    { href: "/getting-started", label: "شروع" },
    { href: "/platforms", label: "پلتفرم‌ها" },
    { href: "/profile", label: "پروفایل" },
    { href: "/pricing", label: "قیمت‌گذاری" },
    { href: "/payments", label: "دریافت پول" },
    { href: "/tools", label: "ابزارها" },
    { href: "/experiences", label: "تجربه‌ها" },
    { href: "/about", label: "درباره" },
  ] as { href: string; label: string }[],
};

/** سطوح تجربه — فارسی */
export type Level = "مبتدی" | "متوسط" | "پیشرفته";

/** نگاشت سطح انگلیسی قدیمی به فارسی (برای سازگاری) */
export const levelFa: Record<string, string> = {
  Beginner: "مبتدی",
  Intermediate: "متوسط",
  Advanced: "پیشرفته",
  "All levels": "همه سطوح",
  All: "همه",
};

/** تبدیل اعداد انگلیسی به فارسی */
export function toFaDigits(input: string | number): string {
  const fa = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return String(input).replace(/[0-9]/g, (d) => fa[Number(d)]);
}
