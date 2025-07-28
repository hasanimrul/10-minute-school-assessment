"use client";

import TopBanner from "../components/top-banner";
import CourseInstructor from "../components/course-instructor";
import HowTheCourseLaidOut from "../components/how-the-course-laid-out";
import WhatYouWillLearnByDoingThisCourse from "../components/what-you-will-learn-by-doing-this-course";
import CourseExclusiveFeature from "../components/course-exclusive-feature";
import ChecklistAndCTA from "../components/top-banner/course-trailer-and-checklist/checklist-and-cta";
import CourseContact from "../components/top-banner/course-trailer-and-checklist/course-contact";
import { useState } from "react";
import CourseDetails from "../components/course-details";
import { CourseData } from "../types/ielts-course-data-types";

export default function IELTSCourse({
  courseData,
}: {
  courseData: CourseData | undefined;
}) {
  const [showFixedPanel, setShowFixedPanel] = useState(false);

  return (
    <div>
      <TopBanner
        courseData={courseData}
        onObserveChange={(isVisible) => setShowFixedPanel(!isVisible)}
      />
      <div className="max-w-[1200px] mx-auto px-4 flex gap-12">
        <div className="w-[700px] space-y-4">
          <CourseInstructor courseData={courseData} />
          <HowTheCourseLaidOut courseData={courseData} />
          <WhatYouWillLearnByDoingThisCourse courseData={courseData} />
          <CourseDetails courseData={courseData} />
          <CourseExclusiveFeature courseData={courseData} />
        </div>

        {showFixedPanel && (
          <div className="w-[400px] space-y-3 fixed bottom-1 right-40">
            <div className="bg-white p-1 border border-gray-300">
              <ChecklistAndCTA courseData={courseData} />
            </div>
            <CourseContact />
          </div>
        )}
      </div>
    </div>
  );
}
