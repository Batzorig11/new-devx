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

export type LessonSyntaxGroup = {
  title: string;
  appliesTo?: "container" | "item";
  badge?: string;
  explanation: string;
  code: CopyBlock;
  properties: Array<{
    property: string;
    values: string;
    meaning: string;
  }>;
};

export type LessonFormatBlock =
  | {
      type: "comparison";
      title: string;
      columns: [string, string];
      rows: Array<{ label: string; left: string; right: string }>;
    }
  | {
      type: "sequence";
      title: string;
      items: Array<{ title: string; detail: string }>;
    }
  | {
      type: "checklist";
      title: string;
      items: string[];
    }
  | {
      type: "callout";
      eyebrow: string;
      title: string;
      body: string;
      tone?: "info" | "warning" | "success";
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
  tutorialLabel?: string;
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
  formatBlocks?: LessonFormatBlock[];
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
  teachStyle?: "tutorial";
  teachContent?: {
    eyebrow: string;
    title: string;
    introduction: string;
    chapterLabel: string;
  };
  resources?: Array<{
    title: string;
    description: string;
    href: string;
  }>;
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
  syntaxGuide?: {
    eyebrow?: string;
    title: string;
    introduction: string;
    columnLabels?: [string, string, string];
    groups: LessonSyntaxGroup[];
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
    referenceLink?: {
      title: string;
      description: string;
      href: string;
      label: string;
    };
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
