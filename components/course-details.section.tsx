import { SectionItem } from "@/types";
import React from "react";

interface CourseDetailItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface Props {
  courseDetails: SectionItem<CourseDetailItem>;
}

export const CourseDetails = ({ courseDetails }: Props) => {
  if (!courseDetails?.values || courseDetails.values.length === 0) return null;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-semibold">
        {courseDetails.name}
      </h2>

      <div className="space-y-7">
        {courseDetails.values.map((item) => (
          <div key={item.id} className="">
            <div
              className=""
              dangerouslySetInnerHTML={{ __html: item.title }}
            />
            <div
              className=""
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
