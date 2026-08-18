import { COURSE_DURATION_HOURS } from "@/features/course/data/curriculum";

export const courseStats = [
  { value: "12", label: "долоо хоног" },
  { value: "48", label: "хичээл" },
  { value: String(COURSE_DURATION_HOURS), label: "нийт цаг" },
  { value: "4", label: "бодит төсөл" },
];

export const courseOutcomes = [
  "Responsive, хүртээмжтэй веб интерфэйсийг сууриас нь бүтээнэ.",
  "JavaScript, React, Next.js ашиглан production апп хөгжүүлнэ.",
  "AI редактор, CLI агент, prompt ба context engineering-ийг зөв ашиглана.",
  "LLM API, streaming, tool calling бүхий AI бүтээгдэхүүн бүтээнэ.",
];
