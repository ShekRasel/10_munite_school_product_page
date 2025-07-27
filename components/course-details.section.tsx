"use client";
import { SectionItem } from "@/types";
import React, { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!courseDetails?.values || courseDetails.values.length === 0) return null;

  const toggleIndex = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-6 border border-gray-600 rounded-md p-4 lg:p-8">
      <h2 className="text-2xl md:text-3xl font-semibold">
        {courseDetails.name}
      </h2>

      <div className="space-y-4">
        {courseDetails.values.map((item, index) => (
          <div key={item.id}>
            <div className="flex justify-between items-center cursor-pointer">
              <div
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
              <button onClick={() => toggleIndex(index)} className="cursor-pointer">
                {activeIndex === index ? (
                  <SlArrowUp size={14} />
                ) : (
                  <SlArrowDown size={14} />
                )}
              </button>
            </div>
            <div
              className={`transition-all duration-300 text-justify leading-relaxed text-gray-400 bg-gray-800 p-2 mt-2 px-4 ${
                activeIndex === index
                  ? "max-h-[500px] py-3"
                  : "max-h-0 py-0"
              } overflow-y-scroll hide-scrollbar`}
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
