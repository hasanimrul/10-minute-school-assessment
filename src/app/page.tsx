// app/page.tsx or app/ielts-course/page.tsx

import IELTSCourse from "@/modules/ielts-course/pages/ielts-course";
import { fetchCourseData } from "@/modules/ielts-course/services/course-service";
import { IELTSCourseApiResponse } from "@/modules/ielts-course/types/ielts-course-data-types";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("currentLang")?.value || "en";

  const courseData: IELTSCourseApiResponse | null = await fetchCourseData({
    lang,
  });

  if (!courseData) {
    return <div>Failed to load course data.</div>;
  }

  return <IELTSCourse courseData={courseData?.data} />;
}
