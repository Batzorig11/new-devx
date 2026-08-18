import type { Metadata } from "next";
import { CoursePlan } from "@/features/curriculum/components/course-plan";
import "@/features/curriculum/styles/curriculum.css";

export const metadata: Metadata = {
  title: "Сургалтын төлөвлөгөө · AI-Native Frontend Engineering",
  description:
    "12 долоо хоног, 48 хичээл, 96 цагийн AI-native frontend инженерчлэлийн багшийн lecture guide.",
};

export default function CurriculumPage() {
  return <CoursePlan />;
}
