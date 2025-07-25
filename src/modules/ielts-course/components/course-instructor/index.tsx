import { CourseData } from "../../types/ielts-course-data-types";
import InstructorCard from "./instructor-card";

export default function CourseInstructor({
  courseData,
}: {
  courseData: CourseData | undefined;
}) {
  const instructors = courseData?.sections?.find(
    (data) => data.type === "instructors"
  );

  console.log("Instructors Data:", instructors);
  return (
    <div className="my-4">
      <h2 className="text-2xl text-[#111827] font-semibold pb-4">
        {instructors?.name}
      </h2>
      <InstructorCard instructors={instructors} />
    </div>
  );
}
