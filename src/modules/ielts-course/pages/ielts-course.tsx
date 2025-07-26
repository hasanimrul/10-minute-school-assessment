"use client";
import Description from "@/modules/ielts-course/components/top-banner/description";
import Title from "@/modules/ielts-course/components/top-banner/title";
import useIELTSCourse from "../hooks/use-ielts-course";
import TopBanner from "../components/top-banner";
import CourseInstructor from "../components/course-instructor";
import HowTheCourseLaidOut from "../components/how-the-course-laid-out";
import WhatYouWillLearnByDoingThisCourse from "../components/what-you-will-learn-by-doing-this-course";

export default function IELTSCourse() {
  const { courseData, loading } = useIELTSCourse();
  console.log("Course Data:", courseData?.data);

  return (
    <div>
      <TopBanner courseData={courseData?.data} />
      <div className="max-w-[1200px] mx-auto px-4 flex gap-12">
        <div className="w-[700px] space-y-4">
          <CourseInstructor courseData={courseData?.data} />
          <HowTheCourseLaidOut courseData={courseData?.data} />
          <WhatYouWillLearnByDoingThisCourse courseData={courseData?.data} />
        </div>
        <div className="w-[400px]"></div>
      </div>
    </div>
  );
}
