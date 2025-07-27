"use client";
import CTAButton from "@/components/cta-button";
import Checklist from "./checklist";
import { CourseData } from "@/modules/ielts-course/types/ielts-course-data-types";
import CourseContact from "./course-contact";

export default function ChecklistAndCTA({
  courseData,
}: {
  courseData: CourseData | undefined;
}) {
  return (
    <div className="p-4 space-y-4">
      <h4 className="font-semibold text-2xl">৳1000</h4>
      <CTAButton btnText={courseData?.cta_text?.value} />
      <Checklist courseData={courseData} />
    </div>
  );
}
