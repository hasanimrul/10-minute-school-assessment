import { CourseData } from "../../types/ielts-course-data-types";
import Description from "./description";
import Title from "./title";

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
      <div className=" relative flex flex-col gap-4 md:flex-row md:gap-12 pb-6 md:py-10 min-h-[300px]">
        <div className="md:max-w-[calc(100vw-348px)] lg:max-w-[calc(100vw-448px)] flex flex-col justify-center gap-2">
          <Title courseData={courseData} />
          <Description courseData={courseData} />
        </div>
        <div className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white absolute right-0 md:top-[50px] md:absolute"></div>
      </div>
    </div>
  );
}
