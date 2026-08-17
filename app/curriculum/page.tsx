import type { Metadata } from "next";
import CoursePlan from "../course-plan";

export const metadata: Metadata = {
  title: "Сургалтын төлөвлөгөө · AI-Native Frontend Engineering",
  description:
    "12 долоо хоног, 48 хичээл, 144 цагийн AI-native frontend инженерчлэлийн нэгдсэн төлөвлөгөө.",
};

export default function CurriculumPage() {
  return <CoursePlan />;
}
