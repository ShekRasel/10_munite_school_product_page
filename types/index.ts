export type IELTSCourseResponse = {
  data: IELTSCourseData;
};

export interface IELTSCourseData {
  slug: string;
  id: number;
  title: string;
  description: string; // HTML string
  media: MediaItem[];
  checklist: ChecklistItem[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section<any>[];
}

export interface MediaItem {
  name: string;
  resource_type: "video" | "image";
  resource_value: string;
  thumbnail_url?: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
  icon: string;
  color?: string;
  list_page_visibility?: boolean;
}
export interface Seo {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
}

export interface CtaText {
  title: string;
  description: string;
  button_text: string;
}

export interface Section<T> {
  id: number;
  title: string;
  type: "instructor" | "features" | "pointers" | "about" | string;
  items: SectionItem<T>[];
}

export interface SectionItem<T> {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  image_url?: string;
  bg_color?: string;
  type?: string;
  name?: string;
  order_idx?: number;
  values?: T[];
}
