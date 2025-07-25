import { CourseData } from "@/modules/ielts-course/types/ielts-course-data-types";
import TrailerVideoSlider from "./trailer-slider";

export default function CourseTrailerAndChecklist({
  courseData,
}: {
  courseData: CourseData | undefined;
}) {
  return (
    <div>
      <TrailerVideoSlider courseData={courseData} />
    </div>
  );
}
