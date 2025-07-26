"use client";
import Description from "@/modules/ielts-course/components/top-banner/description";
import Title from "@/modules/ielts-course/components/top-banner/title";
import useIELTSCourse from "../hooks/use-ielts-course";
import TopBanner from "../components/top-banner";
import CourseInstructor from "../components/course-instructor";

export default function IELTSCourse() {
  const { courseData, loading } = useIELTSCourse();
  console.log("Course Data:", courseData?.data);

  return (
    <div>
      <TopBanner courseData={courseData?.data} />
      <div className="max-w-[1200px] mx-auto px-4 flex gap-12">
        <div className="w-[700px]">
          <CourseInstructor courseData={courseData?.data} />
        </div>
        <div className="w-[400px]"></div>
      </div>
    </div>
  );
}
