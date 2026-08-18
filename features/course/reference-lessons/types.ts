import type { CopyBlock } from "../data/foundation-lessons";

export type LessonMode = "teacher" | "projector";

export type ReferenceLessonSectionId =
  | "overview"
  | "teach"
  | "demo"
  | "practice"
  | "ai-lab"
  | "checkpoint"
  | "wrap-up";

export type ReferenceLessonNavItem = {
  id: ReferenceLessonSectionId;
  shortLabel: string;
  label: string;
};

export type LessonDiagram = {
  label: string;
  nodes: Array<{
    title: string;
    detail: string;
  }>;
};

export type TeachingQuestion = {
  question: string;
  answer: string;
  followUp?: string;
};

export type Misconception = {
  claim: string;
  correction: string;
};

export type LessonConcept = {
  id: string;
  number: string;
  title: string;
  eyebrow: string;
  duration: string;
  whyItMatters: string;
  explanation: string[];
  mentalModel: {
    title: string;
    explanation: string;
  };
  example: {
    title: string;
    explanation: string;
    code?: string;
    language?: CopyBlock["language"];
    blocks?: CopyBlock[];
  };
  diagram?: LessonDiagram;
  questions: TeachingQuestion[];
  misconceptions: Misconception[];
  teachingNotes: string[];
  takeaway: string;
};

export type LessonStep = {
  title: string;
  instruction: string;
  code?: CopyBlock;
  observe?: string;
  explain?: string;
  expected?: string;
};

export type CheckpointQuestion = TeachingQuestion & {
  type: "concept" | "application";
};

export type ReferenceLesson = {
  id: number;
  durationMinutes: number;
  teacherGoal: string;
  sections: ReferenceLessonNavItem[];
  overview: {
    objectives: string[];
    prerequisites: string[];
    tools: string[];
    outcomes: string[];
    preparation: string[];
    timeline: Array<{
      start: string;
      duration: string;
      title: string;
      teacherAction: string;
    }>;
  };
  concepts: LessonConcept[];
  liveDemo: {
    title: string;
    duration: string;
    goal: string;
    setup: string[];
    steps: LessonStep[];
    expectedOutput: string[];
    recovery: string[];
  };
  guidedPractice: {
    title: string;
    duration: string;
    goal: string;
    starterCode?: CopyBlock[];
    instructions: string[];
    constraints: string[];
    hints: string[];
    expectedResult: string[];
    solutionCode?: CopyBlock[];
    stretchTask: string;
    debriefQuestions: TeachingQuestion[];
  };
  aiLab: {
    title: string;
    duration: string;
    goal: string;
    prompt: string;
    steps: LessonStep[];
    verificationTable: Array<{
      claim: string;
      evidence: string;
      pass: string;
    }>;
    teacherNotes: string[];
  };
  checkpoint: {
    duration: string;
    instructions: string;
    questions: CheckpointQuestion[];
  };
  wrapUp: {
    summary: string[];
    abilities: string[];
    beforeNextLesson: string[];
    finalModel: string;
    exitTicket: TeachingQuestion[];
    nextLesson: {
      title: string;
      connection: string;
    };
    teacherClose: string;
  };
};
