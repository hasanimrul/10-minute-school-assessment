import { CourseData } from "../../types/ielts-course-data-types";
import CourseTrailerAndChecklist from "./course-trailer-and-checklist";
import Description from "./description";
import Title from "./title";
import CourseContact from "./course-trailer-and-checklist/course-contact";

export default function TopBanner({
  courseData,
}: {
  courseData: CourseData | undefined;
}) {
  return (
    <div
      style={{
        backgroundImage: `url(https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" relative flex flex-col gap-4 md:flex-row md:gap-12 pb-6 md:py-10 min-h-[300px] w-[1200px] mx-auto px-4">
        <div className="flex flex-col justify-center gap-2 max-w-[700px]">
          <Title courseData={courseData} />
          <Description courseData={courseData} />
        </div>
        <div className="max-w-[450px]  absolute right-2 md:top-[50px] md:absolute">
          <CourseTrailerAndChecklist courseData={courseData} />
          <CourseContact />
        </div>
      </div>
    </div>
  );
}
