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
      className=""
      style={{
        backgroundImage: `url(https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Title courseData={courseData} />
      <Description courseData={courseData} />
    </div>
  );
}
