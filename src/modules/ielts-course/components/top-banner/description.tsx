import { FaStar } from "react-icons/fa";
import { CourseData } from "../../types/ielts-course-data-types";

export default function Description({
  courseData,
}: {
  courseData: CourseData | undefined;
}) {
  const starStyle = "text-yellow-500";
  return (
    <div>
      <div className="flex items-center gap-1">
        <FaStar className={starStyle} />
        <FaStar className={starStyle} />
        <FaStar className={starStyle} />
        <FaStar className={starStyle} />
        <FaStar className={starStyle} />
        <p className="text-white text-base">
          (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
        </p>
      </div>
      <div
        className="text-gray-400"
        dangerouslySetInnerHTML={{ __html: courseData?.description ?? "" }}
      />
    </div>
  );
}
