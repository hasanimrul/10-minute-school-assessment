"use client";
import Description from "@/modules/ielts-course/components/top-banner/description";
import Title from "@/modules/ielts-course/components/top-banner/title";
import useIELTSCourse from "../hooks/use-ielts-course";
import TopBanner from "../components/top-banner";

export default function IELTSCourse() {
  const { courseData, loading } = useIELTSCourse();
  console.log("Course Data:", courseData?.data);

  return (
    <div>
      <TopBanner courseData={courseData?.data} />
    </div>
  );
}
