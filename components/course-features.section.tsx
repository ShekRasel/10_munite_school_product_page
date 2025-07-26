import { SectionItem } from "@/types";
import React from "react";
import { GoCheck } from "react-icons/go";

interface FeatureItem {
  id: string;
  title: string;
  file_url: string;
  file_type?: string;
  video_thumbnail?: string;
  checklist: string[];
}

interface CourseFeaturesProps {
  courseFeatures: SectionItem<FeatureItem>;
}

export const CourseFeatures: React.FC<CourseFeaturesProps> = ({
  courseFeatures,
}) => {
  const features = courseFeatures.values;

  if (!features || features.length === 0) return null;

  return (
    <section>
      <div className="space-y-4 md:space-y-8">
        <h2 className="text-2xl md:text-3xl text-center md:text-start font-semibold">
          {courseFeatures.name}
        </h2>

        <div className="grid grid-cols-1 gap-8 bg-gray-800 p-4 md:p-6 rounded-md">
          {features.map((item) => (
            <div
              key={item.id}
              className="flex flex-col lg:flex-row gap-4 justify-between"
            >
              <div className="space-y-2">
                <h3 className="">
                  {item.title}
                </h3>
                <ul className="space-y-2">
                  {item.checklist.map((point, idx) => (
                    <li key={idx} className="flex gap-2 items-start text-gray-400">
                      <span className="text-primary mt-1">
                        <GoCheck />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <img
                src={item.file_url}
                alt={item.title}
                className="w-44 object-contain shadow-xl shadow-gray-900"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
