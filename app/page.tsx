import { IELTSCourseData, IELTSCourseResponse } from "@/types";

import { CourseDetails } from "@/components/course-details.section";
import { CourseFeatures } from "@/components/course-features.section";
import { CourseLaidOut } from "@/components/course-laid.out";
import { CourseInstructors } from "@/components/course.instructors";
import { HeroSection } from "@/components/hero.section";
import { LearningPoint } from "@/components/learning-point.section";
import { TrailerSection } from "@/components/trailer.section";

import { GetIELTSCourse } from "@/lib/api";
import { JSX } from "react";
import { getSection } from "@/utilities/helper";

export default async function Home(): Promise<JSX.Element> {
  const fullApiData: IELTSCourseResponse = await GetIELTSCourse("en");
  const data: IELTSCourseData = fullApiData.data;

  return (
    <main className="flex flex-col md:flex-row gap-4 lg:gap-8">
      <div className="order-2 md:order-1 w-full md:w-3/5 space-y-12 md:space-y-15">
        {/* title, description */}
        <HeroSection title={data.title} description={data.description} />

        {/* instructors */}
        {getSection(data.sections, "instructor") && (
          <CourseInstructors
            instructor={getSection(data.sections, "instructor")!}
          />
        )}

        {/* laid out */}
        {getSection(data.sections, "features") &&
          getSection(data.sections, "group_join_engagement") && (
            <CourseLaidOut
              laidout={getSection(data.sections, "features")!}
              engagement={getSection(data.sections, "group_join_engagement")!}
            />
          )}

        {/* learning points */}
        {getSection(data.sections, "pointers") && (
          <LearningPoint
            learningPoint={getSection(data.sections, "pointers")!}
          />
        )}

        {/* features */}
        {getSection(data.sections, "feature_explanations") && (
          <CourseFeatures
            courseFeatures={getSection(data.sections, "feature_explanations")!}
          />
        )}

        {/* details */}
        {getSection(data.sections, "about") && (
          <CourseDetails courseDetails={getSection(data.sections, "about")!} />
        )}
      </div>

      <div className="order-1 md:order-2 w-full h-full md:w-2/5 md:sticky top-0">
        <TrailerSection
          media={data.media}
          checklist={data.checklist}
          cta_text={data.cta_text}
        />
      </div>
    </main>
  );
}
