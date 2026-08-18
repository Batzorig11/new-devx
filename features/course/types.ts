export type CourseSection = "plan" | "materials" | "assignment";

export type TimelineItem = {
  start: string;
  duration: number;
  title: string;
  description: string;
  kind?: "break" | "ai" | "practice";
};

export type SectionTab = {
  id: CourseSection;
  label: string;
};
