import type { Metadata } from "next";
import { GuideHeader } from "@/components/ui/GuideHeader";
import { PageTransition } from "@/components/layout/PageTransition";
import { SearchBar } from "@/components/interactive/SearchBar";

export const metadata: Metadata = {
  title: "جست‌وجو",
  description: "در همه راهنماهای فریلنس‌یار جست‌وجو کن: مهارت، پلتفرم، پروپوزال، قیمت‌گذاری، دریافت پول و ابزارها.",
};

export default function SearchPage() {
  return (
    <PageTransition>
      <GuideHeader
        eyebrow="جست‌وجو"
        title="در همه راهنماها جست‌وجو کن"
        description="یک ایندکس روی هر ۸ راهنما. «دریافت پول»، «آپورک»، «پروپوزال» یا «قیمت» را امتحان کن — فارسی یا انگلیسی."
        level="همه سطوح"
        minutes={1}
        crumbs={[{ label: "خانه", href: "/" }]}
      />
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <SearchBar />
      </div>
    </PageTransition>
  );
}
