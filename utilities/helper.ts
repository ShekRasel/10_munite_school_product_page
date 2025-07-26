//converted plain text
export const cleanHtml = (html: string): string[] => {
  return html
    .replace(/<br\s*\/?>/gi, "\n") // convert <br> to newline
    .replace(/<[^>]+>/g, "") // remove all tags
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim()
    .split("\n"); // return as array of lines
};
