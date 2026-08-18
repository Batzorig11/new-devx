import {
  keyConcepts,
  LESSON_DURATION_MINUTES,
  type Lesson,
} from "../data/curriculum";
import { lessonLectureExplanations } from "../data/lecture-explanations";
import type { SectionTab, TimelineItem } from "../types";

export const sectionTabs: SectionTab[] = [
  { id: "plan", label: "Лекцийн төлөвлөгөө" },
  { id: "materials", label: "Үзэх сэдвүүд" },
  { id: "assignment", label: "Дасгал & үнэлгээ" },
];

export const moduleNotes: Record<string, string[]> = {
  Суурь: [
    "Фронтэнд хөгжүүлэгч зөвхөн харагдах хэсэг бичдэггүй. Тэр browser, сүлжээ, хөгжүүлэлтийн орчин, хувилбарын түүх хоорондын холбоог ойлгож байж найдвартай бүтээгдэхүүн бүтээнэ.",
    "Энэ модульд нэр томьёог цээжлэхээс илүүтэй системийг зураглаж, терминал дээр ажиглаж, өөрийн үгээр тайлбарлах чадварыг чухалчилна.",
  ],
  "HTML & CSS": [
    "HTML нь агуулгын утга ба бүтцийг, CSS нь байрлал ба харагдах байдлыг хариуцна. Зөв шийдэл нь зөвхөн гоё харагдахаас гадна keyboard, screen reader, жижиг дэлгэц дээр ажиллах ёстой.",
    "Хэмжээс бүрийг таахын оронд layout-ийн дүрмийг тогтооно. AI код санал болгож болох ч семантик, responsive зан төлөв, хүртээмжийн эцсийн шийдвэрийг хөгжүүлэгч гаргана.",
  ],
  JavaScript: [
    "JavaScript нь өгөгдөл, үйлдэл, төлөвийг холбож интерфэйсийг амьд болгодог. Кодын мөрийг хуулж ажиллуулах бус, оролт ямар замаар гаралт болж байгааг алхам бүрээр таамаглана.",
    "Алдаа гарахад таамаг дэвшүүлж, хамгийн жижиг нөхцөлд дахин гаргаж, нотолгоо цуглуулна. AI нь хамтран бодох түнш болохоос үнэн хариултын эх сурвалж биш.",
  ],
  "React & Next.js": [
    "React-д интерфэйсийг component, өгөгдлийн урсгал, state-ийн хилээр загварчилна. Next.js энэ загварыг route, server/client boundary, өгөгдөл болон байршуулалтын орчинтой холбоно.",
    "Файлын бүтэц болон rendering-ийн шийдвэр бүр ажиллах орчин, нууцлал, хэрэглэгчийн туршлагад нөлөөлнө. Агентын олон файлтай өөрчлөлтийг ийм хилүүдээр нь хянана.",
  ],
  "AI бүтээгдэхүүн": [
    "AI боломж гэдэг нь зөвхөн API дуудах биш. Model choice, prompt, streaming UX, алдааны төлөв, evaluation, аюулгүй байдал, latency, зардал нийлж хэрэглэгчид итгэж болох бүтээгдэхүүн болдог.",
    "LLM-ийн гаралт магадлалд тулгуурладаг учраас бүтэцчилсэн гаралт, tool-ийн хязгаар, сервер талын нууц, хэмжигдэхүйц шалгуур хэрэгтэй.",
  ],
  "Төгсөлтийн төсөл": [
    "Сайн төгсөлтийн төсөл олон боломжтой байхаас илүү нэг бодит асуудлыг бүрэн шийдсэн байдаг. Хүрээ, acceptance criteria, архитектурын шийдвэрээ кодоос өмнө тодорхой болгоно.",
    "AI-тай хийсэн алхам бүрээ commit, prompt, review тэмдэглэлээр нотолж, эцэст нь кодын дурын мөрийг яагаад байгааг хамгаалж чадна.",
  ],
};

export const toolsets: Record<string, string[]> = {
  Суурь: ["Browser DevTools", "Terminal", "VS Code / Cursor", "Git & GitHub"],
  "HTML & CSS": ["VS Code / Cursor", "Browser DevTools", "Lighthouse", "AI редактор"],
  JavaScript: ["Browser Console", "Node.js", "VS Code / Cursor", "Git"],
  "React & Next.js": ["React DevTools", "Next.js", "Terminal agent", "GitHub"],
  "AI бүтээгдэхүүн": ["Next.js", "Vercel AI SDK", "LLM API", "Evaluation checklist"],
  "Төгсөлтийн төсөл": ["PRD template", "GitHub", "CLI agent", "Deployment platform"],
};

const lectureGuidanceByModule: Record<
  string,
  { lens: string; demo: string; misconception: string; evidence: string }
> = {
  Суурь: {
    lens: "системийн хэсгүүд хэнтэй, ямар дарааллаар, ямар баримтаар харилцаж байгааг",
    demo: "самбарын flow diagram-ийг terminal эсвэл Browser DevTools-ийн бодит output-той тулгах",
    misconception: "нэр томьёог цээжилсэн бол системийн урсгалыг ойлгосон гэж үзэх",
    evidence: "command output, Network panel, file system эсвэл Git state",
  },
  "HTML & CSS": {
    lens: "markup-ийн утга, cascade болон layout rule нь browser-ийн эцсийн дүрслэлд яаж нөлөөлдгийг",
    demo: "жижиг HTML/CSS жишээг live edit хийж, Elements болон Computed panel дээр before/after харьцуулах",
    misconception: "зөв харагдаж байвал semantic, responsive, accessible байдлаар зөв гэж үзэх",
    evidence: "DOM tree, computed style, keyboard navigation, responsive viewport эсвэл Lighthouse",
  },
  JavaScript: {
    lens: "оролт, өгөгдлийн төрөл, control flow, state болон output хоорондын холбоог",
    demo: "жижиг program-ийн мөр бүрийн дараах утгыг урьдчилан таалгаад console output-оор батлах",
    misconception: "код ажилласан нэг тохиолдлыг бүх input дээр зөв ажиллана гэж үзэх",
    evidence: "console trace, return value, edge-case table эсвэл automated test",
  },
  "React & Next.js": {
    lens: "component boundary, props/state data flow, render болон server/client хариуцлагыг",
    demo: "component tree зурж, нэг state change ямар component-уудыг шинэчилж байгааг React DevTools-оор ажиглах",
    misconception: "файлыг жижиглэсэн л бол component boundary зөв болсон гэж үзэх",
    evidence: "component tree, rendered HTML, network request, bundle boundary эсвэл test",
  },
  "AI бүтээгдэхүүн": {
    lens: "input, context, model output, tool, validation, latency, cost болон safety-ийн бүтэн урсгалыг",
    demo: "нэг AI request-ийг prompt-оос UI state хүртэл trace хийж, failure case-ийг зориуд гаргах",
    misconception: "model нэг удаа зөв хариулсан бол feature production-ready гэж үзэх",
    evidence: "structured output, evaluation case, logs, latency/cost хэмжилт эсвэл safety check",
  },
  "Төгсөлтийн төсөл": {
    lens: "user problem, acceptance criteria, architecture, implementation болон нотолгооны холбоог",
    demo: "PRD-ийн нэг шаардлагыг code, test, screenshot, commit хүртэл trace хийх",
    misconception: "олон feature хийсэн нь нэг асуудлыг бүрэн шийдсэнээс илүү гэж үзэх",
    evidence: "acceptance test, demo, decision log, Git history эсвэл deployed product",
  },
};

export function getLectureTopics(lesson: Lesson) {
  const guidance = lectureGuidanceByModule[lesson.module] ?? lectureGuidanceByModule.Суурь;
  const lessonExplanation =
    lessonLectureExplanations[lesson.id] ??
    `${lesson.summary}. Энэ сэдвийн үндсэн механизм, хэрэглээ, хязгаар болон шалгах нотолгоог хооронд нь холбоно.`;

  return keyConcepts(lesson).map((concept, index) => ({
    title: `${index + 1}. ${concept}`,
    lead: `“${lesson.title}” сэдвийн хүрээнд ${concept}-ийг тусдаа нэр томьёо биш, бусад ойлголттой холбогдсон механизм болгон тайлбарлана.`,
    paragraphs: [
      lessonExplanation,
      `Багш ${concept} ямар асуудлыг шийддэг, ямар input авч, ямар output эсвэл зан төлөв үүсгэдгийг тодорхойлно. Дараа нь ${guidance.lens} сурагчдаар өөрсдөөр нь тайлбарлуулна.`,
      `Тайлбар зөвхөн slide дээр үлдэхгүй. ${guidance.demo.charAt(0).toLocaleUpperCase("mn") + guidance.demo.slice(1)}. Demo-гийн өмнө сурагчдаар үр дүнг таалгаж, дараа нь бодит evidence-тэй харьцуулна.`,
    ],
    points: [
      `Самбар дээр: ${concept}-ийн тодорхойлолт → үүрэг → холбоо → бодит жишээ гэсэн дарааллаар зураглах`,
      `Заавал тайлбарлах: ${lesson.summary.toLocaleLowerCase("mn")}`,
      `Live demo: ${guidance.demo}`,
      `Түгээмэл буруу ойлголт: ${guidance.misconception}`,
      `Ойлголтын checkpoint: “${concept} байхгүй эсвэл буруу байвал ямар шинж тэмдэг харагдах вэ?”`,
      `Нотолгоо: ${guidance.evidence}-ээс дор хаяж нэгийг анги дээр харуулах`,
    ],
  }));
}

export function getLearningGoals(lesson: Lesson) {
  const firstConcept = keyConcepts(lesson)[0] ?? lesson.title;
  return [
    `${lesson.summary}.`,
    `${firstConcept}-ийг багшийн жишээ, асуулт, дадлагаар тайлбарлаж хэрэглэх.`,
    `${lesson.aiAngle}.`,
  ];
}

export function getLessonOutcome(lesson: Lesson) {
  if (lesson.kind === "project" || lesson.kind === "capstone") {
    return "Шалгуур нь тодорхой, ажилладаг нэг хувилбар гаргаж, хийсэн шийдвэр болон AI-ийн оролцоог нотолж чадна.";
  }

  return `“${lesson.title}” сэдвийг өөрийн үгээр тайлбарлаж, тусламжгүй жижиг даалгаварт хэрэглэн, AI-ийн саналыг шалгаж чадна.`;
}

export function getLessonTimeline(lesson: Lesson): TimelineItem[] {
  if (lesson.kind === "project" || lesson.kind === "capstone") {
    return [
      { start: "00:00", duration: 15, title: "Хүрээ ба амжилтын шалгуур", description: `${lesson.title} ажлын өнөөдрийн хүрээ, бэлэн болох нөхцөл, эрсдэлийг багш тодруулна.` },
      { start: "00:15", duration: 20, title: "Төлөвлөгөө ба checkpoint", description: "Багш ажлыг шалгаж болох жижиг алхамд хуваалгаж, Git checkpoint-ийг баталгаажуулна." },
      { start: "00:35", duration: 30, title: "Хөгжүүлэлтийн спринт I", description: `${lesson.summary}. Эхний ажиллах хувилбарыг багшийн богино review хүртэл хийнэ.`, kind: "practice" },
      { start: "01:05", duration: 5, title: "Завсарлага", description: "Богино завсарлага авч, дараагийн спринтийн зорилгыг цэгцэлнэ.", kind: "break" },
      { start: "01:10", duration: 35, title: "Хөгжүүлэлтийн спринт II", description: `${lesson.aiAngle}. Багш diff review болон test checkpoint-ийг удирдана.`, kind: "ai" },
      { start: "01:45", duration: 15, title: "Demo, review ба дараагийн алхам", description: "Сурагчид бүтээлээ үзүүлж, шийдвэрээ хамгаална; багш дараагийн ажлын feedback өгнө." },
    ];
  }

  return [
    { start: "00:00", duration: 10, title: "Нээлт ба өмнөх мэдлэг", description: `Багш “${lesson.title}” сэдвийн оношлох асуулт, бодит жишээгээр зорилгыг нээнэ.` },
    { start: "00:10", duration: 25, title: "Үндсэн ойлголтын лекц", description: `${lesson.summary}. Багш нэр томьёо, холбоо, шалтгааныг зураглал болон тодорхой жишээгээр тайлбарлана.` },
    { start: "00:35", duration: 20, title: "Live demo ба think-aloud", description: "Багш нэг жишээг алхам бүрийн шийдвэр, хүлээгдэж буй үр дүнтэй нь чангаар тайлбарлан гүйцэтгэнэ." },
    { start: "00:55", duration: 5, title: "Завсарлага", description: "5 минутын богино завсарлага.", kind: "break" },
    { start: "01:00", duration: 25, title: "Удирдамжтай дадлага", description: "Сурагчид багшийн checkpoint бүрээр жишээг давтаж, яагаад ийм шийдвэр гаргаснаа тайлбарлана.", kind: "practice" },
    { start: "01:25", duration: 25, title: "AI инженерийн лаборатори", description: `${lesson.aiAngle}. Багш prompt, output review, verification-ийн дарааллыг удирдана.`, kind: "ai" },
    { start: "01:50", duration: 10, title: "Дүгнэлт ба exit ticket", description: "Багш misconception-ийг засаж, 3 шалгах асуултаар ойлголтыг баталгаажуулна." },
  ];
}

function formatStart(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`;
}

export function fitTimelineToLesson(items: TimelineItem[]): TimelineItem[] {
  const sourceTotal = items.reduce((total, item) => total + item.duration, 0);
  if (sourceTotal === LESSON_DURATION_MINUTES) return items;

  let elapsed = 0;
  return items.map((item, index) => {
    const remainingItems = items.length - index - 1;
    const maxDuration = LESSON_DURATION_MINUTES - elapsed - remainingItems * 5;
    const scaledDuration =
      index === items.length - 1
        ? LESSON_DURATION_MINUTES - elapsed
        : Math.max(
            5,
            Math.min(
              maxDuration,
              Math.round((item.duration / sourceTotal) * LESSON_DURATION_MINUTES / 5) * 5,
            ),
          );
    const normalized = {
      ...item,
      start: formatStart(elapsed),
      duration: scaledDuration,
    };
    elapsed += scaledDuration;
    return normalized;
  });
}

export function getMentorPrompt(lesson: Lesson) {
  return `Чи бэлэн хариулт шууд өгөхгүй, сурагчдын бодох дарааллыг чиглүүлэх teaching assistant.

Сэдэв: ${lesson.title}
Зорилго: ${lesson.summary}.
Сурагчийн одоогийн ойлголт: [сурагчийн өөрийн үгээр хэлсэн 2–3 өгүүлбэр]
Ангид ашиглаж буй баримт / код / алдаа: [энд хавсаргана]

1. Эхлээд багшийн асуух нэг оношлох асуулт санал болго.
2. Дараа нь ойлголтыг тайлбарлах 3 жижиг алхам гарга.
3. Бэлэн кодын оронд live demo, hint, ажиглах evidence санал болго.
4. Түгээмэл нэг буруу ойлголт болон түүнийг илрүүлэх асуулт өг.
5. Эцэст нь сурагчийн шийдлийг шалгах 2 edge case өг.`;
}
