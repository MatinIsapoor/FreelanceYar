import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type GuideMeta = {
  slug: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All levels";
  tags: string[];
};

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html, { sanitize: false }).process(markdown);
  return result.toString();
}

export function parseMarkdownFile(fileContents: string) {
  const { data, content } = matter(fileContents);
  return { data: data as Record<string, unknown>, content };
}
