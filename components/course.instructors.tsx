import { SectionItem } from "@/types";
import React, { FC, JSX } from "react";
import Image from "next/image";

interface Instructor {
  name: string;
  image: string;
  description: string;
  short_description?: string;
  slug?: string;
  has_instructor_page?: boolean;
}

interface InstructorProps {
  instructor: SectionItem<Instructor>;
}

export const CourseInstructors: FC<InstructorProps> = ({
  instructor,
}): JSX.Element => {
  const data = instructor.values?.[0];

  if (!data) return <></>;

  return (
    <div className="text-center space-y-4 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-semibold">{instructor.name}</h2>

      <div className="flex items-center space-y-2">
        <div className="flex justify-center items-center bg-gray-800 rounded-3xl min-h-60 px-4 border border-gray-500">
          <Image
            src={data.image}
            alt={data.name}
            width={114}
            height={114}
            className="rounded-full border-4 border-primary-500 object-cover"
          />
        </div>

        <div className="border border-gray-500 border-l-0 rounded-r-3xl md:space-y-2 p-2 text-gray-300">
          <h3 className="text-xl font-semibold text-white">{data.name}</h3>
          <p className="text-sm">{data.short_description}</p>
          <div
            className="text-sm"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </div>
      </div>
    </div>
  );
};
