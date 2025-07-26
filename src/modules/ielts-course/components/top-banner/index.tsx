import { FaPhone } from "react-icons/fa";
import { CourseData } from "../../types/ielts-course-data-types";
import CourseTrailerAndChecklist from "./course-trailer-and-checklist";
import TrailerCard from "./course-trailer-and-checklist";
import Description from "./description";
import Title from "./title";
import { FaPhoneFlip } from "react-icons/fa6";

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
          <div className="flex items-center justify-between my-3">
            <p className="text-[#A3A3A3] text-sm">
              কোর্সটি সম্পর্কে বিস্তারিত জানতে
            </p>
            <div className="flex items-center gap-1">
              <FaPhone className="text-[#1CAB55] h-[14px] w-[14px] rotate-90" />

              <p className="text-[#1CAB55] text-sm underline">
                ফোন করুন (16910)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
