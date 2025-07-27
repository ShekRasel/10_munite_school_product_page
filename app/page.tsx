import { CourseDetails } from "@/components/course-details.section";
import { CourseFeatures } from "@/components/course-features.section";
import { CourseLaidOut } from "@/components/course-laid.out";
import { CourseInstructors } from "@/components/course.instructors";
import { HeroSection } from "@/components/hero.section";
import { LearningPoint } from "@/components/learning-point.section";
import { TrailerSection } from "@/components/trailer.section";
import { GetIELTSCourse } from "@/lib/api";
import { IELTSCourseData, IELTSCourseResponse } from "@/types";
import { JSX } from "react";

export default async function Home(): Promise<JSX.Element> {
  const fullApiData: IELTSCourseResponse = await GetIELTSCourse("en");
  const data: IELTSCourseData = fullApiData.data;
  return (
    <main className="flex flex-col md:flex-row gap-4 lg:gap-8">
      <div className="order-2 md:order-1 w-full md:w-3/5 space-y-12 md:space-y-15">
        {/* title, des section */}
        <HeroSection title={data.title} description={data.description} />

        {/* instructors section */}
        <CourseInstructors instructor={data.sections[2]} />

        {/* course laid out section */}
        <CourseLaidOut laidout={data.sections[3]} />

        {/* learning from course section */}
        <LearningPoint learningPoint={data.sections[5]} />

        {/* course exclusive features section */}
        <CourseFeatures courseFeatures={data.sections[8]} />

        {/* course details section */}
        <CourseDetails courseDetails={data.sections[7]} />
      </div>

      <div className="order-1 md:order-2 w-full h-full md:w-2/5 md:sticky top-0">
        <TrailerSection media={data.media} checklist={data.checklist} />
      </div>
    </main>
  );
}
