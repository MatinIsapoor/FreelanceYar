import type { SearchEntry } from "@/data/content";

/**
 * نرمال‌سازی متن فارسی برای جست‌وجوی بهتر:
 * - یکدست‌سازی ی/ك عربی
 * - حذف اعراب و تشدید
 * - حذف نیم‌فاصله‌های اضافه؟ نه — نگه می‌داریم ولی هر دو حالت را پوشش می‌دهیم
 * - کوچک‌سازی انگلیسی
 */
export function normalizeFa(text: string): string {
  return text
    .replace(/[ي]/g, "ی")
    .replace(/[ك]/g, "ک")
    .replace(/[\u064B-\u0652\u0670]/g, "")
    .replace(/‌/g, " ") // ZWNJ → space برای تطبیق ساده‌تر
    .replace(/[ء]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(q: string): string[] {
  return normalizeFa(q).split(" ").filter((t) => t.length > 0);
}

export type RankedEntry = SearchEntry & { score: number };

/**
 * رتبه‌بندی وزن‌دار:
 * عنوان ×۵، تگ‌ها ×۳، بخش ×۲، توضیح ×۱
 * تطبیق جزئی (includes) + امتیاز کامل برای کلمه دقیق
 */
export function searchGuides(query: string, index: SearchEntry[], limit = 12): RankedEntry[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) {
    return index.slice(0, 6).map((e) => ({ ...e, score: 0 }));
  }

  const ranked: RankedEntry[] = index.map((entry) => {
    const title = normalizeFa(entry.title);
    const desc = normalizeFa(entry.description);
    const tags = entry.tags.map((t) => normalizeFa(t)).join(" ");
    const section = normalizeFa(entry.section);

    let score = 0;
    for (const tok of tokens) {
      if (!tok) continue;
      if (title === tok) score += 10;
      else if (title.includes(tok)) score += 5;
      if (tags.split(" ").some((t) => t === tok)) score += 6;
      else if (tags.includes(tok)) score += 3;
      if (section.includes(tok)) score += 2;
      if (desc.includes(tok)) score += 1;
    }

    // امتیاز اضافه اگر همه کلمات پیدا شوند
    const hay = `${title} ${desc} ${tags} ${section}`;
    const allFound = tokens.every((t) => hay.includes(t));
    if (allFound && tokens.length > 1) score += 3;

    return { ...entry, score };
  });

  return ranked
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
