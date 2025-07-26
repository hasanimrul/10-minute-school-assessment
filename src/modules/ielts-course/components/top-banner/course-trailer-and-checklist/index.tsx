import { CourseData } from "@/modules/ielts-course/types/ielts-course-data-types";
import TrailerVideoSlider from "./trailer-video-slider";
import CTAButton from "@/components/cta-button";
import Checklist from "./checklist";

export default function CourseTrailerAndChecklist({
  courseData,
}: {
  courseData: CourseData | undefined;
}) {
  return (
    <div className="space-y-3 bg-white p-1 border border-gray-300">
      <TrailerVideoSlider courseData={courseData} />
      <div className="p-4 space-y-4">
        <h4 className="font-semibold text-2xl">৳1000</h4>
        <CTAButton btnText={courseData?.cta_text?.value} />
        <Checklist courseData={courseData} />
      </div>
    </div>
  );
}
