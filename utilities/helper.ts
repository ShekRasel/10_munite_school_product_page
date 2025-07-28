import { Section } from "@/types";

//converted plain text
export const cleanHtml = (html: string): string[] => {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim()
    .split("\n");
};

//find section data
export function getSection<T>(
  sections: Section<any>[],
  type: string
): Section<T> | undefined {
  return sections.find((section) => section.type === type);
}
