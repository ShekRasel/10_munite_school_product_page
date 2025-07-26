import { IELTSCourseResponse } from "@/types";

export const GetIELTSCourse = async (
  lang: string
): Promise<IELTSCourseResponse> => {
  const url: string = `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`;

  try {
    const res: Response = await fetch(url, {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
      },
    });

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const data: IELTSCourseResponse = await res.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Failed to fetch IELTS course:", error.message);
      throw error;
    } else {
      console.error("Unknown error occurred");
      throw new Error("Unexpected error");
    }
  }
};
