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
    <section className="rounded-md bg-gray-800 pt-4">
      <div className="text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">{instructor.name}</h2>

        <div className="flex flex-col items-center space-y-2">
          <Image
            src={data.image}
            alt={data.name}
            width={120}
            height={120}
            className="rounded-full border-4 border-primary-500 object-cover"
          />

          <div>
            <h3 className="text-xl md:text-2xl font-semibold">{data.name}</h3>
            <p className="text-sm text-gray-500">{data.short_description}</p>
          </div>

          <div
            className="leading-relaxed"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </div>
      </div>
    </section>
  );
};
