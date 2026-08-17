export type LessonKind = "lesson" | "ai" | "project" | "capstone";

export type Lesson = {
  id: number;
  week: number;
  module: string;
  title: string;
  summary: string;
  aiAngle: string;
  kind: LessonKind;
};

const rawLessons: Omit<Lesson, "week">[] = [
  { id: 1, module: "Суурь", title: "Веб хэрхэн ажилладаг вэ", summary: "Browser, server, HTTP, DNS болон frontend-ийн үүргийг ойлгох", aiAngle: "AI-аас инженер шиг асууж, өгсөн хариултыг баримтаар шалгах", kind: "lesson" },
  { id: 2, module: "Суурь", title: "Хөгжүүлэлтийн орчин", summary: "Редактор, терминал, Node.js болон npm-ийн үндсэн орчноо бэлдэх", aiAngle: "Тохиргооны асуудлын шинж тэмдгийг AI-д зөв өгч, шалтгааныг нь оношлох", kind: "lesson" },
  { id: 3, module: "Суурь", title: "Эхний өдрөөс Git & GitHub", summary: "init, commit, branch, push болон өөрчлөлтийн түүхтэй ажиллах", aiAngle: "Git-ийг AI-тай кодлох үеийн буцааж болох аюулгүйн тор болгон ашиглах", kind: "lesson" },
  { id: 4, module: "Суурь", title: "LLM гэж яг юу вэ", summary: "Токен, контекстийн цонх, training, inference болон hallucination-ийг хөгжүүлэгчийн түвшинд ойлгох", aiAngle: "Claude Code ба AI редактор суулгаж, шууд хуулалт болон инженерийн урсгалыг харьцуулах", kind: "ai" },

  { id: 5, module: "HTML & CSS", title: "HTML бүтэц ба семантик", summary: "Tag, баримтын бүтэц болон утга илэрхийлэх semantic markup бичих", aiAngle: "Markup-аа AI-аар хянуулж, семантикийн тайлбарыг бодит дүрэмтэй тулгах", kind: "lesson" },
  { id: 6, module: "HTML & CSS", title: "Форм ба хүртээмж", summary: "Input, label, validation болон веб хүртээмжийн суурийг хэрэгжүүлэх", aiAngle: "AI-аар a11y шалгалт хийлгээд, дүгнэлтийг хүртээмжийн дүрэмтэй нягтлах", kind: "lesson" },
  { id: 7, module: "HTML & CSS", title: "CSS-ийн үндэс", summary: "Selector, cascade, specificity, box model болон хэмжих нэгжийг ашиглах", aiAngle: "Style яагаад үйлчлэхгүй байгааг ойлголтоо орхилгүй AI-тай оношлох", kind: "lesson" },
  { id: 8, module: "HTML & CSS", title: "Prompt бичих нь инженерчлэл", summary: "Нөхцөл, хязгаарлалт, жишээ, давталт бүхий дахин ашиглаж болох prompt бичих", aiAngle: "Контексттэй ба контекстгүй хүсэлтийн үр дүнг харьцуулж, өөрийн prompt аргачлалтай болох", kind: "ai" },
  { id: 9, module: "HTML & CSS", title: "Flexbox", summary: "Нэг хэмжээст байрлал, зэрэгцүүлэлт болон түгээмэл layout загваруудыг бүтээх", aiAngle: "Layout-аа үгээр тодорхойлж, AI-ийн кодын мөр бүрийг өөрийн үгээр тайлбарлах", kind: "lesson" },
  { id: 10, module: "HTML & CSS", title: "CSS Grid", summary: "Хоёр хэмжээст байрлал, grid area болон responsive grid ашиглах", aiAngle: "AI-аас гурван шийдэл авч, тохирох хувилбарыг шалтгаантай сонгох", kind: "lesson" },
  { id: 11, module: "HTML & CSS", title: "Responsive дизайн", summary: "Mobile-first хандлага, media query болон уян хэмжих нэгжээр дасан зохицох UI бүтээх", aiAngle: "Тогтмол layout-ыг responsive болгосон diff-ийг мөр бүрээр нь хянах", kind: "lesson" },
  { id: 12, module: "HTML & CSS", title: "AI экосистем: загвар, хэрэгсэл ба зардал", summary: "Загварын бүлэг, cloud ба local LLM, чат, редактор, CLI агент, API-ийн сонголтыг ойлгох", aiAngle: "Ollama болон cloud загварыг харьцуулж, токен ба API хэрэглээний сарын зардал тооцох", kind: "ai" },
  { id: 13, module: "HTML & CSS", title: "Tailwind CSS ба UI өнгөлгөө", summary: "Utility-first CSS, component загвар, transition, keyframe болон бичил хөдөлгөөн ашиглах", aiAngle: "Энгийн CSS-ийг AI-аар Tailwind руу хөрвүүлээд зөв эсэхийг өөрөө шалгах", kind: "lesson" },
  { id: 14, module: "HTML & CSS", title: "AI редактор", summary: "Tab completion, inline edit, codebase chat болон GUI ба CLI хэрэгслийн ялгааг ашиглах", aiAngle: "AI-ийн diff-ийг зөвшөөрөхөөс өмнө уншиж, 90% зөв код дахь 10% алдааг олох", kind: "ai" },
  { id: 15, module: "HTML & CSS", title: "Дизайнаас код ба үүсгэмэл медиа", summary: "Дизайн, screenshot-оос UI болон зураг, icon, illustration asset үүсгэх", aiAngle: "Үүссэн component-ийг өөрийн код шиг ойлгомжтой болтол нь хялбарчилж, нэршлийг цэгцлэх", kind: "ai" },
  { id: 16, module: "HTML & CSS", title: "Төсөл 1: Portfolio сайт", summary: "HTML, CSS эсвэл Tailwind-аар responsive, хүртээмжтэй portfolio сайтыг нийтлэх", aiAngle: "Эхлээд гараар бүтээж, дараа нь AI-ийн санал бүрийг үндэслэлтэй хүлээн авах эсвэл татгалзах", kind: "project" },

  { id: 17, module: "JavaScript", title: "JavaScript-ийн үндэс", summary: "Хувьсагч, өгөгдлийн төрөл, operator болон control flow ашиглах", aiAngle: "AI-аар түвшинд тохирсон дасгал үүсгүүлж, эхлээд өөрөө бодоод дараа нь шалгуулах", kind: "lesson" },
  { id: 18, module: "JavaScript", title: "Function ба scope", summary: "Function declaration, arrow function, scope болон closure-ийн суурийг ойлгох", aiAngle: "Өөрийн кодыг AI-аар тайлбарлуулж, буруу ойлголтоо эрт илрүүлэх", kind: "lesson" },
  { id: 19, module: "JavaScript", title: "Array ба object", summary: "Өгөгдлийн бүтэц болон map, filter, reduce аргуудыг хэрэглэх", aiAngle: "AI-ийн нэг шийдлийг өөрийн шийдэлтэй харьцуулж, давуу ба сул талыг дүгнэх", kind: "lesson" },
  { id: 20, module: "JavaScript", title: "AI-тай хамтран алдаа оношлох", summary: "Алдааг дахин гаргах, тусгаарлах, таамаг дэвшүүлэх, баримттай оношлох дараалал эзэмших", aiAngle: "Итгэлтэй боловч буруу AI хариултыг нотолгоогоор таних лаборатори хийх", kind: "ai" },
  { id: 21, module: "JavaScript", title: "DOM ба event", summary: "Element сонгох, өөрчлөх болон event listener ашиглан интерактив UI бүтээх", aiAngle: "AI-г санал гаргагч болгон ашиглаж, кодоо өөрөө бичиж тестлэх", kind: "lesson" },
  { id: 22, module: "JavaScript", title: "Форм ба хэрэглэгчийн оролт", summary: "Form event, validation logic болон оролтын UX хэрэгжүүлэх", aiAngle: "Орхигдсон edge case-уудыг AI-аар гаргуулж, handler-уудаа өөрөө бичих", kind: "lesson" },
  { id: 23, module: "JavaScript", title: "Асинхрон JavaScript", summary: "Promise, async/await болон event loop-ийг хэрэглээний түвшинд ойлгох", aiAngle: "Асинхрон урсгалыг зураглаж, кодын үр дүнг ажиллуулахаасаа өмнө таамаглах", kind: "lesson" },
  { id: 24, module: "JavaScript", title: "fetch, API ба JSON", summary: "HTTP хүсэлт илгээх, JSON боловсруулах болон алдааны төлөв удирдах", aiAngle: "Танил бус API-ийн баримтыг AI-ийн тусламжтай уншиж, эх сурвалжтай нь тулгах", kind: "lesson" },
  { id: 25, module: "JavaScript", title: "Контекст инженерчлэл: rules ба skills", summary: "Контекстийн цонх, CLAUDE.md, .cursorrules, rules болон skills-ийн ялгааг ашиглах", aiAngle: "Төслийн анхны дүрмийн файл ба дахин ашиглах skill бичиж, үр дүнг харьцуулах", kind: "ai" },
  { id: 26, module: "JavaScript", title: "Орчин үеийн JavaScript", summary: "ES module, npm package, ES6+ загвар болон төслийн бүтэцтэй ажиллах", aiAngle: "Package сонголтыг арчилгаа, хэмжээ, хувилбараар AI-аар үнэлүүлээд өөрөө нягтлах", kind: "lesson" },
  { id: 27, module: "JavaScript", title: "TypeScript-ийн үндэс", summary: "Type, interface, generics болон strict mode-ийн суурийг хэрэгжүүлэх", aiAngle: "Type-ийг AI үүсгэсэн кодын анзаарагдаагүй алдааг барих хамгаалалт болгох", kind: "lesson" },
  { id: 28, module: "JavaScript", title: "Төсөл 2: Интерактив dashboard", summary: "DOM, async болон API өгөгдөл ашигласан ажиллагаатай dashboard нийтлэх", aiAngle: "Тодорхойлолт бичих, AI-тай төлөвлөх, хэрэгжүүлэх, код хянуулах бүтэн урсгал ашиглах", kind: "project" },

  { id: 29, module: "React & Next.js", title: "React: component ба JSX", summary: "Component-оор сэтгэх, JSX болон rendering-ийн суурийг ойлгох", aiAngle: "Portfolio HTML-ийг component болгон хөрвүүлж, задаргаа нь утга учиртай эсэхийг шалгах", kind: "lesson" },
  { id: 30, module: "React & Next.js", title: "Props ба state", summary: "Data down, events up, useState болон дахин дүрслэх үйл явцыг хэрэглэх", aiAngle: "State яагаад шинэчлэгдээгүйг AI-аар зарчмын түвшинд тайлбарлуулах", kind: "lesson" },
  { id: 31, module: "React & Next.js", title: "Жагсаалт, нөхцөлт дүрслэл ба форм", summary: "List rendering, key, conditional rendering болон controlled input ашиглах", aiAngle: "Component-ийн хэдэн хувилбар авч, сонголтоо үндэслэлтэй тайлбарлах", kind: "lesson" },
  { id: 32, module: "React & Next.js", title: "Агенттай кодлох I — Claude Code", summary: "Агентын төлөвлөх, үйлдэх, ажиглах давталт болон plan mode-ийг ашиглах", aiAngle: "Git checkpoint, жижиг алхам, ажлыг хянах болон агентыг хэзээ зогсоохыг дадлагажуулах", kind: "ai" },
  { id: 33, module: "React & Next.js", title: "useEffect ба өгөгдөл татах", summary: "Side effect, dependency, loading болон error state-ийг зөв удирдах", aiAngle: "Агентаар fetch ба state-ийн эх бүтэц гаргуулж, өмнөх async мэдлэгтэйгээ тулгах", kind: "lesson" },
  { id: 34, module: "React & Next.js", title: "Component-ийн архитектур", summary: "State-ийг дээш өргөх, composition, context болон файлын бүтэц төлөвлөх", aiAngle: "Хоёр архитектурын өргөтгөх чадварыг харьцуулж, сонголтоо хамгаалах", kind: "lesson" },
  { id: 35, module: "React & Next.js", title: "Next.js-ийн үндэс", summary: "App Router, page, layout, navigation болон Next.js сонгох шалтгааныг ойлгох", aiAngle: "React аппыг агенттай шилжүүлж, бүтцийн diff бүрийг тайлбарлах", kind: "lesson" },
  { id: 36, module: "React & Next.js", title: "Агенттай кодлох II — тодорхойлолт", summary: "Агент хэрэгжүүлж чадах PRD, техникийн тодорхойлолт болон acceptance criteria бичих", aiAngle: "Олон файл хамарсан diff-ийг ахлах инженер шиг хянаж, сэжигтэй шинжийг таних", kind: "ai" },
  { id: 37, module: "React & Next.js", title: "Next.js дэх өгөгдөл", summary: "Server Component, Client Component болон API route-ийн ялгааг ашиглах", aiAngle: "Нууц мэдээлэл эсвэл логикийг агент буруу талд байрлуулсныг илрүүлэх", kind: "lesson" },
  { id: 38, module: "React & Next.js", title: "Өргөтгөхөд бэлэн UI загварчлал", summary: "Tailwind, shadcn/ui болон дизайн системийн сэтгэлгээг Next.js-д хэрэглэх", aiAngle: "AI-аар component угсруулж, дизайны нэгдмэл байдлыг өөрөө хангах", kind: "lesson" },
  { id: 39, module: "React & Next.js", title: "Байршуулалт ба production орчин", summary: "Vercel байршуулалт, environment variable, preview болон production checklist ашиглах", aiAngle: "AI-ийн нийтлэхийн өмнөх checklist-ийн зүйл бүрийг бодитой эсэхээр нягтлах", kind: "lesson" },
  { id: 40, module: "React & Next.js", title: "Төсөл 3: Иж бүрэн Next.js апп", summary: "Бодит өгөгдөлтэй, нийтэд байршуулсан олон хуудаст Next.js апп бүтээх", aiAngle: "Тодорхойлолт, plan mode, агент, хяналт, нийтлэх бүтэн урсгалыг хэрэглэх", kind: "project" },

  { id: 41, module: "AI бүтээгдэхүүн", title: "LLM API ашиглах", summary: "Request, response, model choice, үнэ болон Next.js API route-оор түлхүүрээ серверт хадгалах", aiAngle: "LLM API-г аюулгүй холбож, AI хэрэглэгчээс AI бүтээгдэхүүн бүтээгч рүү шилжих", kind: "lesson" },
  { id: 42, module: "AI бүтээгдэхүүн", title: "Урсгалт чат интерфэйс", summary: "Vercel AI SDK, message state, token streaming, loading болон error UX хэрэгжүүлэх", aiAngle: "Ажиллагаатай streaming chatbot бүтээж, токен ба контекстийг бодитоор ажиглах", kind: "lesson" },
  { id: 43, module: "AI бүтээгдэхүүн", title: "Tool calling ба агент бүтээх", summary: "Function calling болон төлөвлөх, үйлдэх, ажиглах агентын давталтыг хэрэгжүүлэх", aiAngle: "2–3 хэрэгсэлтэй жижиг агент бүтээж, агентын дотоод ажиллагааг ойлгох", kind: "lesson" },
  { id: 44, module: "AI бүтээгдэхүүн", title: "Практик AI боломжууд", summary: "Товчлол, JSON mode, embedding, semantic search, prompting, RAG, fine-tuning-ээс сонгох", aiAngle: "Хамрах хүрээ тодорхой, тестэлсэн нэг бодит AI боломжийг төсөлдөө нэмэх", kind: "lesson" },
  { id: 45, module: "AI бүтээгдэхүүн", title: "Мэргэжлийн AI инженерчлэл", summary: "MCP, CI кодын хяналт, хуваарьт агент, PR bot, evaluation болон автоматжуулалт ойлгох", aiAngle: "Prompt injection, зардал, latency, найдвартай байдлаар AI-г хэзээ хэрэглэхгүйг шийдэх", kind: "ai" },
  { id: 46, module: "Төгсөлтийн төсөл", title: "Төгсөлтийн төсөл I: Тодорхойлолт ба архитектур", summary: "Бодит бүтээгдэхүүний хүрээ, PRD болон архитектурын шийдвэрээ баталгаажуулах", aiAngle: "AI-тай төлөвлөж, кодоос өмнө тодорхойлолтоо багшаар хянуулж зөвшөөрүүлэх", kind: "capstone" },
  { id: 47, module: "Төгсөлтийн төсөл", title: "Төгсөлтийн төсөл II: Хөгжүүлэлтийн спринт", summary: "Цагийн хязгаарт агенттай хөгжүүлэлтийн бүтэн урсгалыг хэрэгжүүлэх", aiAngle: "Тодорхойлолт, төлөвлөгөө, агент, хяналт, давталтыг нотлох тэмдэглэлтэй хийх", kind: "capstone" },
  { id: 48, module: "Төгсөлтийн төсөл", title: "Төгсөлтийн төсөл III: Нийтлэх ба хамгаалах", summary: "Бүтээгдэхүүнээ нийтэлж, ангидаа танилцуулан кодын мөр бүрийг хамгаалах", aiAngle: "AI-ийн тусламжтай бичсэн кодоо бүрэн ойлгож, шийдвэр бүрдээ хариуцлага хүлээх", kind: "capstone" },
];

export const lessons: Lesson[] = rawLessons.map((lesson) => ({
  ...lesson,
  week: Math.ceil(lesson.id / 4),
}));

export const weekModules = Array.from({ length: 12 }, (_, index) => {
  const week = index + 1;
  const first = lessons.find((lesson) => lesson.week === week);
  return { week, module: first?.module ?? "" };
});

export const lessonKindLabel: Record<LessonKind, string> = {
  lesson: "ҮНДСЭН ХИЧЭЭЛ",
  ai: "AI ЛАБОРАТОРИ",
  project: "ТӨСЛИЙН ХИЧЭЭЛ",
  capstone: "ТӨГСӨЛТИЙН ТӨСӨЛ",
};

export function keyConcepts(lesson: Lesson) {
  return lesson.summary
    .replace(/ болон /g, ", ")
    .replace(/-оор /g, ", ")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 6);
}
