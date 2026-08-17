"use client";

import {
  BookOpen,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Circle,
  Clock3,
  Code2,
  Copy,
  ExternalLink,
  FileCheck2,
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  Sparkles,
  Target,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  keyConcepts,
  lessonKindLabel,
  lessons,
  type Lesson,
  weekModules,
} from "./curriculum";
import {
  foundationMaterialById,
  type CopyBlock as CopyBlockData,
  type DetailedLessonMaterial,
} from "./foundation-lessons";

type Section = "plan" | "materials" | "assignment";

type TimelineItem = {
  start: string;
  duration: number;
  title: string;
  description: string;
  kind?: "break" | "ai" | "practice";
};

const sectionLabels: { id: Section; label: string }[] = [
  { id: "plan", label: "Хичээлийн төлөвлөгөө" },
  { id: "materials", label: "Унших материал" },
  { id: "assignment", label: "Даалгавар & үнэлгээ" },
];

const moduleNotes: Record<string, string[]> = {
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

const toolsets: Record<string, string[]> = {
  Суурь: ["Browser DevTools", "Terminal", "VS Code / Cursor", "Git & GitHub"],
  "HTML & CSS": [
    "VS Code / Cursor",
    "Browser DevTools",
    "Lighthouse",
    "AI редактор",
  ],
  JavaScript: ["Browser Console", "Node.js", "VS Code / Cursor", "Git"],
  "React & Next.js": ["React DevTools", "Next.js", "Terminal agent", "GitHub"],
  "AI бүтээгдэхүүн": [
    "Next.js",
    "Vercel AI SDK",
    "LLM API",
    "Evaluation checklist",
  ],
  "Төгсөлтийн төсөл": [
    "PRD template",
    "GitHub",
    "CLI agent",
    "Deployment platform",
  ],
};

function learningGoals(lesson: Lesson) {
  const firstConcept = keyConcepts(lesson)[0] ?? lesson.title;
  return [
    `${lesson.summary}.`,
    `${firstConcept}-ийг жижиг жишээн дээр тайлбарлаж, бие даан хэрэглэх.`,
    `${lesson.aiAngle}.`,
  ];
}

function lessonOutcome(lesson: Lesson) {
  if (lesson.kind === "project" || lesson.kind === "capstone") {
    return `Шалгуур нь тодорхой, ажилладаг нэг хувилбар гаргаж, хийсэн шийдвэр болон AI-ийн оролцоог нотолж чадна.`;
  }

  return `“${lesson.title}” сэдвийг өөрийн үгээр тайлбарлаж, тусламжгүй жижиг даалгаварт хэрэглэн, AI-ийн саналыг шалгаж чадна.`;
}

function lessonTimeline(lesson: Lesson): TimelineItem[] {
  if (lesson.kind === "project" || lesson.kind === "capstone") {
    return [
      {
        start: "00:00",
        duration: 20,
        title: "Хүрээ ба амжилтын шалгуур",
        description: `${lesson.title} ажлын өнөөдрийн хүрээ, бэлэн болох нөхцөл, эрсдэлийг тогтооно.`,
      },
      {
        start: "00:20",
        duration: 35,
        title: "Төлөвлөгөө ба checkpoint",
        description:
          "Ажлыг шалгаж болох жижиг алхамд хувааж, Git checkpoint үүсгэнэ.",
      },
      {
        start: "00:55",
        duration: 45,
        title: "Хөгжүүлэлтийн спринт I",
        description: `${lesson.summary}. Эхний ажиллах хувилбарыг багшийн богино review хүртэл хийнэ.`,
        kind: "practice",
      },
      {
        start: "01:40",
        duration: 10,
        title: "Завсарлага",
        description: "Дэлгэцээс холдож, дараагийн спринтийн зорилгоо цэгцэлнэ.",
        kind: "break",
      },
      {
        start: "01:50",
        duration: 45,
        title: "Хөгжүүлэлтийн спринт II",
        description: `${lesson.aiAngle}. Diff бүрийг уншиж, тесттэйгээр нэгтгэнэ.`,
        kind: "ai",
      },
      {
        start: "02:35",
        duration: 25,
        title: "Demo, review ба дараагийн алхам",
        description:
          "Бүтээлээ үзүүлж, шийдвэрээ хамгаалан, review тэмдэглэл болон дараагийн ажлаа бичнэ.",
      },
    ];
  }

  return [
    {
      start: "00:00",
      duration: 15,
      title: "Нээлт ба өмнөх мэдлэг",
      description: `“${lesson.title}” сэдвийн оношлох асуулт, бодит жишээгээр хичээлийн зорилгыг нээнэ.`,
    },
    {
      start: "00:15",
      duration: 40,
      title: "Үндсэн ойлголт",
      description: `${lesson.summary}. Багш зураглал, live code эсвэл бодит бүтээгдэхүүний жишээгээр тайлбарлана.`,
    },
    {
      start: "00:55",
      duration: 30,
      title: "Удирдамжтай дадлага",
      description:
        "Багштай хамт нэг жишээ гүйцэтгэж, алхам бүрийн шийдвэр ба үр дүнг урьдчилан таамаглана.",
      kind: "practice",
    },
    {
      start: "01:25",
      duration: 10,
      title: "Завсарлага",
      description: "10 минутын завсарлага.",
      kind: "break",
    },
    {
      start: "01:35",
      duration: 40,
      title: "Бие даасан лаборатори",
      description: `Сэдвийн жижиг хувилбарыг эхлээд AI-гүй гүйцэтгэж, browser эсвэл тестээр үр дүнгээ батална.`,
      kind: "practice",
    },
    {
      start: "02:15",
      duration: 30,
      title: "AI инженерийн лаборатори",
      description: `${lesson.aiAngle}. Prompt, гарсан үр дүн, хүлээн авсан эсвэл татгалзсан шалтгаанаа тэмдэглэнэ.`,
      kind: "ai",
    },
    {
      start: "02:45",
      duration: 15,
      title: "Дүгнэлт ба exit ticket",
      description:
        "3 богино асуултад хариулж, commit эсвэл ажлын нотолгоогоо хүлээлгэн өгнө.",
    },
  ];
}

function SearchDialog({
  open,
  query,
  onQueryChange,
  onClose,
  onSelect,
}: {
  open: boolean;
  query: string;
  onQueryChange: (value: string) => void;
  onClose: () => void;
  onSelect: (id: number) => void;
}) {
  const matches = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("mn");
    if (!normalized) return lessons;
    return lessons.filter((lesson) =>
      `${lesson.title} ${lesson.summary} ${lesson.aiAngle} ${lesson.module}`
        .toLocaleLowerCase("mn")
        .includes(normalized),
    );
  }, [query]);

  if (!open) return null;

  return (
    <div className="search-overlay" role="presentation" onMouseDown={onClose}>
      <section
        className="search-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Хичээл хайх"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="search-field">
          <Search size={19} aria-hidden="true" />
          <input
            autoFocus
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Сэдэв, хэрэгсэл эсвэл түлхүүр үгээр хайх..."
          />
          <button onClick={onClose} aria-label="Хайлтыг хаах">
            <X size={18} />
          </button>
        </div>
        <div className="search-summary">
          <span>{matches.length} хичээл олдлоо</span>
          <kbd>ESC · хаах</kbd>
        </div>
        <div className="search-results">
          {matches.map((lesson) => (
            <button key={lesson.id} onClick={() => onSelect(lesson.id)}>
              <span className={`result-number ${lesson.kind}`}>
                {String(lesson.id).padStart(2, "0")}
              </span>
              <span>
                <strong>{lesson.title}</strong>
                <small>
                  {lesson.week}-р долоо хоног · {lesson.module}
                </small>
              </span>
              <ChevronRight size={16} aria-hidden="true" />
            </button>
          ))}
          {matches.length === 0 && (
            <div className="empty-search">
              <Search size={30} />
              <p>Ийм агуулгатай хичээл олдсонгүй.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function Sidebar({
  lesson,
  completed,
  open,
  collapsed,
  onClose,
  onToggleCollapse,
  onSelect,
}: {
  lesson: Lesson;
  completed: Set<number>;
  open: boolean;
  collapsed: boolean;
  onClose: () => void;
  onToggleCollapse: () => void;
  onSelect: (id: number) => void;
}) {
  const weekLessons = lessons.filter((item) => item.week === lesson.week);
  const percent = Math.round((completed.size / lessons.length) * 100);

  return (
    <>
      <div
        className={`mobile-scrim ${open ? "show" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`course-sidebar ${open ? "open" : ""} ${collapsed ? "collapsed" : ""}`}
      >
        <div className="sidebar-head">
          <div className="site-brand">
            <span className="site-mark">A</span>
            <span>AI / FRONTEND</span>
          </div>
          <div className="sidebar-controls">
            <button
              className="collapse-toggle"
              onClick={onToggleCollapse}
              aria-label={collapsed ? "Sidebar дэлгэх" : "Sidebar эвхэх"}
              aria-expanded={!collapsed}
              title={collapsed ? "Sidebar дэлгэх" : "Sidebar эвхэх"}
            >
              {collapsed ? (
                <PanelLeftOpen size={19} />
              ) : (
                <PanelLeftClose size={19} />
              )}
            </button>
            <button
              className="sidebar-close"
              onClick={onClose}
              aria-label="Цэс хаах"
            >
              <X size={19} />
            </button>
          </div>
        </div>

        <div className="sidebar-course">
          AI-Native
          <br />
          Frontend Engineering
        </div>

        <div className="course-progress">
          <div>
            <span>Курсийн явц</span>
            <strong>{percent}%</strong>
          </div>
          <div className="progress-line">
            <i style={{ width: `${Math.max(percent, 1)}%` }} />
          </div>
          <small>{completed.size} / 48 хичээл · нийт 144 цаг</small>
        </div>

        <div className="week-heading">
          <div>
            <span>{String(lesson.week).padStart(2, "0")}</span>
            <b>{lesson.week}-р долоо хоног</b>
          </div>
          <small>{lesson.module}</small>
        </div>

        <nav
          className="sidebar-lessons"
          aria-label={`${lesson.week}-р долоо хоногийн хичээлүүд`}
        >
          {weekLessons.map((item) => (
            <button
              className={item.id === lesson.id ? "active" : ""}
              onClick={() => onSelect(item.id)}
              key={item.id}
              title={collapsed ? item.title : undefined}
            >
              <span className="sidebar-number">
                {String(item.id).padStart(2, "0")}
              </span>
              <span className="sidebar-title">{item.title}</span>
              {completed.has(item.id) ? (
                <CheckCircle2 size={15} className="done-icon" />
              ) : item.kind === "ai" ? (
                <em>AI</em>
              ) : null}
            </button>
          ))}
        </nav>

        <div className="week-picker-label">12 ДОЛОО ХОНОГ</div>
        <div className="week-picker">
          {weekModules.map((item) => (
            <button
              key={item.week}
              className={item.week === lesson.week ? "active" : ""}
              onClick={() => onSelect((item.week - 1) * 4 + 1)}
              aria-label={`${item.week}-р долоо хоног — ${item.module}`}
              title={
                collapsed
                  ? `${item.week}-р долоо хоног — ${item.module}`
                  : undefined
              }
            >
              {String(item.week).padStart(2, "0")}
            </button>
          ))}
        </div>

        <div className="sidebar-principle">
          <Sparkles size={15} aria-hidden="true" />
          <p>Тайлбарлаж чадахгүй кодоо нэгтгэхгүй.</p>
        </div>
      </aside>
    </>
  );
}

function CopyCodeBlock({ block }: { block: CopyBlockData }) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(block.code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="copy-block">
      <div className="copy-block-head">
        <div>
          <span>{block.language.toUpperCase()}</span>
          <strong>{block.title}</strong>
        </div>
        <button
          type="button"
          onClick={copyCode}
          aria-label={`${block.title} хуулах`}
        >
          {copied ? <Check size={15} /> : <Copy size={15} />}
          {copied ? "Хууллаа" : "Хуулах"}
        </button>
      </div>
      <pre>
        <code>{block.code}</code>
      </pre>
      {block.note && <p className="copy-note">{block.note}</p>}
    </div>
  );
}

function DetailedMaterials({ material }: { material: DetailedLessonMaterial }) {
  return (
    <div className="content-section detailed-materials">
      <section className="study-intro">
        <div className="section-heading">
          <span>01</span>
          <h2>Бие даан судлах материал</h2>
        </div>
        <p>
          Дарааллаар нь уншаад, кодын блок бүрийг өөрийн файлд ажиллуул. Зүгээр
          уншаад өнгөрөхгүй — бүлэг бүрийн дараа гаралтыг өөрийн үгээр
          тайлбарлаарай.
        </p>
      </section>

      <div className="chapter-stack">
        {material.chapters.map((chapter) => (
          <article className="lesson-chapter" key={chapter.title}>
            <h2>{chapter.title}</h2>
            <p className="chapter-lead">{chapter.lead}</p>
            {chapter.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {chapter.points && (
              <ul className="chapter-points">
                {chapter.points.map((point) => (
                  <li key={point}>
                    <Check size={14} aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
            {chapter.blocks?.map((block) => (
              <CopyCodeBlock block={block} key={block.title} />
            ))}
          </article>
        ))}
      </div>

      <section className="glossary-section">
        <div className="section-heading">
          <span>02</span>
          <h2>Нэр томьёоны лавлах</h2>
        </div>
        <dl className="glossary-grid">
          {material.glossary.map((item) => (
            <div key={item.term}>
              <dt>{item.term}</dt>
              <dd>{item.definition}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="ai-workshop">
        <div className="section-heading">
          <span>03</span>
          <h2>{material.aiLab.title}</h2>
        </div>
        <p className="chapter-lead">{material.aiLab.purpose}</p>
        <CopyCodeBlock
          block={{
            title: "AI лабораторийн prompt",
            language: "prompt",
            code: material.aiLab.prompt,
            note: "[ ] доторх хэсгийг өөрийн бодит баримтаар сольж байж ашиглана.",
          }}
        />
        <div className="lab-grid">
          <div>
            <span>ХИЙХ ДАРААЛАЛ</span>
            <ol>
              {material.aiLab.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <span>ӨӨРИЙГӨӨ ШАЛГАХ</span>
            <ul>
              {material.aiLab.checks.map((check) => (
                <li key={check}>
                  <Check size={13} />
                  {check}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {material.references && (
        <section className="reference-section">
          <div className="section-heading">
            <span>04</span>
            <h2>Албан ёсны лавлах</h2>
          </div>
          <div className="reference-list">
            {material.references.map((reference) => (
              <a
                href={reference.url}
                target="_blank"
                rel="noreferrer"
                key={reference.url}
              >
                <span>
                  <strong>{reference.label}</strong>
                  <small>{reference.note}</small>
                </span>
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function DetailedAssignment({
  material,
}: {
  material: DetailedLessonMaterial;
}) {
  return (
    <div className="content-section detailed-assignment">
      <section className="exercise-section">
        <div className="section-heading">
          <span>01</span>
          <h2>Хичээл дээр хийх дасгал</h2>
        </div>
        <div className="exercise-stack">
          {material.exercises.map((exercise) => (
            <article className="exercise-card" key={exercise.title}>
              <div className="exercise-title">
                <div>
                  <span>{exercise.duration}</span>
                  <h3>{exercise.title}</h3>
                </div>
                <p>{exercise.objective}</p>
              </div>
              <ol className="exercise-steps">
                {exercise.steps.map((step, index) => (
                  <li key={step}>
                    <span>{index + 1}</span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
              {exercise.blocks?.map((block) => (
                <CopyCodeBlock block={block} key={block.title} />
              ))}
              <div className="exercise-checks">
                <strong>Зөв хийснээ ингэж шалга</strong>
                <ul>
                  {exercise.checks.map((check) => (
                    <li key={check}>
                      <CheckCircle2 size={15} />
                      {check}
                    </li>
                  ))}
                </ul>
              </div>
              {(exercise.hint || exercise.solution) && (
                <div className="answer-details">
                  {exercise.hint && (
                    <details>
                      <summary>Гацвал hint харах</summary>
                      <p>{exercise.hint}</p>
                    </details>
                  )}
                  {exercise.solution && (
                    <details>
                      <summary>Шалгасны дараа тайлбар харах</summary>
                      <p>{exercise.solution}</p>
                    </details>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="homework-card">
        <div className="homework-head">
          <div className="deliverable-icon">
            <FileCheck2 size={24} />
          </div>
          <div>
            <span>БИЕ ДААЛТ · {material.assignment.due}</span>
            <h2>{material.assignment.title}</h2>
            <p>{material.assignment.description}</p>
          </div>
        </div>
        {material.assignment.starter && (
          <CopyCodeBlock block={material.assignment.starter} />
        )}
        {material.assignment.blocks?.map((block) => (
          <CopyCodeBlock block={block} key={block.title} />
        ))}
        <div className="homework-grid">
          <div>
            <h3>Гүйцэтгэх дараалал</h3>
            <ol>
              {material.assignment.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3>Хүлээлгэн өгөх зүйл</h3>
            <ul>
              {material.assignment.deliverables.map((item) => (
                <li key={item}>
                  <Check size={14} />
                  {item}
                </li>
              ))}
            </ul>
            <h3>Дууссан гэж үзэх шалгуур</h3>
            <ul>
              {material.assignment.criteria.map((item) => (
                <li key={item}>
                  <Check size={14} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="quiz-section">
        <div className="section-heading">
          <span>02</span>
          <h2>Хариугаа хэлсний дараа нээ</h2>
        </div>
        <div className="quiz-list">
          {material.quiz.map((item, index) => (
            <details key={item.question}>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.question}
              </summary>
              <p>
                <strong>{item.answer}</strong> {item.explanation}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}

function PlanSection({ lesson }: { lesson: Lesson }) {
  const material = foundationMaterialById[lesson.id];
  const goals = material?.goals ?? learningGoals(lesson);
  const timeline = material?.schedule ?? lessonTimeline(lesson);

  return (
    <div className="content-section">
      <div className="lesson-grid">
        <section>
          <div className="section-heading">
            <span>01</span>
            <h2>Өнөөдрийн зорилго</h2>
          </div>
          <div className="goal-list">
            {goals.map((goal) => (
              <div key={goal}>
                <i>
                  <Check size={13} />
                </i>
                <p>{goal}</p>
              </div>
            ))}
          </div>
        </section>
        <aside className="outcome-note">
          <span>ХИЧЭЭЛИЙН ЭЦЭСТ</span>
          <Target size={22} aria-hidden="true" />
          <p>{material?.outcome ?? lessonOutcome(lesson)}</p>
        </aside>
      </div>

      <section className="timeline-section">
        <div className="section-heading">
          <span>02</span>
          <h2>3 цагийн хичээлийн урсгал</h2>
          <small>Нийт 180 минут</small>
        </div>
        <div className="timeline-list">
          {timeline.map((item, index) => (
            <div
              className={`timeline-item ${item.kind ?? ""}`}
              key={`${item.start}-${item.title}`}
            >
              <div className="timeline-time">
                <time>{item.start}</time>
                <small>{item.duration} мин</small>
              </div>
              <div className="timeline-rail">
                <i>{index + 1}</i>
              </div>
              <div className="timeline-copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="class-checklist">
        <div className="section-heading">
          <span>03</span>
          <h2>Хичээлд бэлдэх</h2>
        </div>
        <div className="checklist-grid">
          <div>
            <span>ӨМНӨ НЬ</span>
            {material ? (
              <ul>
                {material.prerequisites.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>
                Өмнөх хичээлийн commit-оо push хийж, ойлгоогүй нэг асуултаа
                бэлдэнэ.
              </p>
            )}
          </div>
          <div>
            <span>ХЭРЭГСЭЛ</span>
            <p>
              {(
                material?.tools ??
                toolsets[lesson.module] ??
                toolsets.Суурь
              ).join(" · ")}
            </p>
          </div>
          <div>
            <span>НОТОЛГОО</span>
            <p>
              {material?.evidence ??
                "Код, screenshot, prompt ба review тэмдэглэлээс тохирохыг хичээлийн төгсгөлд өгнө."}
            </p>
          </div>
        </div>
        {material && (
          <div className="readiness-note">
            <div>
              <span>БЭЛТГЭЛ</span>
              <p>{material.preparation}</p>
            </div>
            <div>
              <span>ЭНЭ ХИЧЭЭЛД ШААРДАХГҮЙ</span>
              <p>{material.notRequired.join(" · ")}</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

function MaterialsSection({ lesson }: { lesson: Lesson }) {
  const detailed = foundationMaterialById[lesson.id];

  if (detailed) {
    return <DetailedMaterials material={detailed} />;
  }

  const concepts = keyConcepts(lesson);
  const notes = moduleNotes[lesson.module] ?? moduleNotes.Суурь;
  const prompt = `Чи миний кодыг шууд засахгүй, харин бодох дарааллыг чиглүүлэх mentor.

Сэдэв: ${lesson.title}
Зорилго: ${lesson.summary}.
Миний одоогийн ойлголт: [өөрийн үгээр 2–3 өгүүлбэр]
Одоогийн баримт / код / алдаа: [энд хавсаргана]

1. Эхлээд миний ойлголтын зөрүүг нэг асуултаар шалга.
2. Дараа нь 3 жижиг алхмын төлөвлөгөө өг.
3. Бэлэн кодын оронд шалгах арга болон hint өг.
4. Эцэст нь миний шийдлийг 2 edge case-аар шалга.`;

  return (
    <div className="content-section materials-section">
      <section className="reading-note">
        <div className="section-heading">
          <span>01</span>
          <h2>Сэдвийн гол санаа</h2>
        </div>
        <p className="lead-note">
          <strong>{lesson.title}</strong> —{" "}
          {lesson.summary.toLocaleLowerCase("mn")}.
        </p>
        {notes.map((note) => (
          <p key={note}>{note}</p>
        ))}
        <div className="ai-callout">
          <Sparkles size={19} />
          <div>
            <span>AI ИНЖЕНЕРИЙН ӨНЦӨГ</span>
            <p>{lesson.aiAngle}.</p>
          </div>
        </div>
      </section>

      <section className="concept-section">
        <div className="section-heading">
          <span>02</span>
          <h2>Түлхүүр ойлголтууд</h2>
        </div>
        <div className="concept-grid">
          {concepts.map((concept, index) => (
            <article key={concept}>
              <span>0{index + 1}</span>
              <h3>{concept}</h3>
              <p>
                Энэ ойлголтыг өөрийн үгээр тодорхойлж, нэг бодит жишээтэй
                холбоно.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="prompt-lab">
        <div className="prompt-head">
          <div>
            <Sparkles size={17} />
            <span>Дахин ашиглах prompt</span>
          </div>
          <small>Шууд хуулж биш, хоосон хэсгийг өөрийн баримтаар бөглөнө</small>
        </div>
        <pre>
          <code>{prompt}</code>
        </pre>
      </section>

      <section className="review-rules">
        <div className="section-heading">
          <span>03</span>
          <h2>AI-ийн үр дүнг шалгах 4 асуулт</h2>
        </div>
        <ol>
          <li>
            <span>01</span>
            <p>
              <strong>Ажиллаж байна уу?</strong> Browser, test эсвэл
              compiler-оор нотолсон уу?
            </p>
          </li>
          <li>
            <span>02</span>
            <p>
              <strong>Шаардлагатай нийцэж байна уу?</strong> Өгсөн хязгаарлалт
              бүр биелсэн үү?
            </p>
          </li>
          <li>
            <span>03</span>
            <p>
              <strong>Би тайлбарлаж чадах уу?</strong> Мөр бүрийн үүрэг,
              trade-off ойлгомжтой юу?
            </p>
          </li>
          <li>
            <span>04</span>
            <p>
              <strong>Аюулгүй юу?</strong> Нууц, өгөгдөл, edge case, зардалд
              эрсдэл нэмсэн үү?
            </p>
          </li>
        </ol>
      </section>
    </div>
  );
}

function AssignmentSection({ lesson }: { lesson: Lesson }) {
  const detailed = foundationMaterialById[lesson.id];

  if (detailed) {
    return <DetailedAssignment material={detailed} />;
  }

  const isProject = lesson.kind === "project" || lesson.kind === "capstone";
  const deliverable = isProject
    ? `${lesson.title}-ийн өнөөдрийн ажиллах хувилбар, commit түүх, review тэмдэглэл.`
    : `${lesson.title} сэдвийг хэрэглэсэн жижиг ажил, тайлбар README, нэг Git commit.`;

  return (
    <div className="content-section assignment-section">
      <section className="deliverable-card">
        <div className="deliverable-icon">
          <FileCheck2 size={24} />
        </div>
        <div>
          <span>ХҮЛЭЭЛГЭН ӨГӨХ ЗҮЙЛ</span>
          <h2>{deliverable}</h2>
          <p>Хугацаа: дараагийн хичээл эхлэхээс өмнө · GitHub холбоосоор</p>
        </div>
      </section>

      <div className="assignment-grid">
        <section>
          <div className="section-heading">
            <span>01</span>
            <h2>Гүйцэтгэх дараалал</h2>
          </div>
          <div className="task-steps">
            <div>
              <span>1</span>
              <p>
                <strong>Тодорхойл.</strong> “Бэлэн болсон” гэж үзэх 3 шалгуураа
                бич.
              </p>
            </div>
            <div>
              <span>2</span>
              <p>
                <strong>Гараар эхэл.</strong> Үндсэн шийдлийн эхний хувилбарыг
                AI-гүй хий.
              </p>
            </div>
            <div>
              <span>3</span>
              <p>
                <strong>AI-тай сайжруул.</strong> Контексттэй prompt ашиглаж,
                diff-ийг мөр бүрээр нь унш.
              </p>
            </div>
            <div>
              <span>4</span>
              <p>
                <strong>Нотол.</strong> Ажиллаж байгааг шалгаад commit, тайлбар,
                review тэмдэглэлээ өг.
              </p>
            </div>
          </div>
        </section>

        <aside className="definition-card">
          <span>DEFINITION OF DONE</span>
          <ul>
            <li>
              <Check size={13} />
              {lesson.summary}
            </li>
            <li>
              <Check size={13} />
              Алдаа, хоосон ба loading төлөвийг шалгасан
            </li>
            <li>
              <Check size={13} />
              AI-ийн санал бүрийг хүлээн авсан шалтгаантай
            </li>
            <li>
              <Check size={13} />
              Өөрийн кодыг аман тайлбарлаж чадна
            </li>
          </ul>
        </aside>
      </div>

      <section className="rubric-section">
        <div className="section-heading">
          <span>02</span>
          <h2>Үнэлгээний rubric</h2>
          <small>Нийт 100 оноо</small>
        </div>
        <div className="rubric-table">
          <div className="rubric-row">
            <strong>Ойлголт ба тайлбар</strong>
            <p>
              Үндсэн ойлголт, шийдвэр, trade-off-оо өөрийн үгээр тайлбарласан
            </p>
            <b>40</b>
          </div>
          <div className="rubric-row">
            <strong>Хэрэгжүүлэлт</strong>
            <p>
              Шалгуур хангасан, ажилладаг, цэгцтэй шийдэл болон тестийн нотолгоо
            </p>
            <b>35</b>
          </div>
          <div className="rubric-row">
            <strong>AI ажлын урсгал</strong>
            <p>
              Контекст, prompt, diff review, хүлээн авсан/татгалзсан шалтгааны
              тэмдэглэл
            </p>
            <b>25</b>
          </div>
        </div>
      </section>

      <section className="exit-ticket">
        <div className="section-heading">
          <span>03</span>
          <h2>Exit ticket</h2>
        </div>
        <div className="exit-grid">
          <p>
            <span>01</span>Өнөөдрийн хамгийн чухал ойлголтыг нэг өгүүлбэрээр
            тайлбарла.
          </p>
          <p>
            <span>02</span>Ямар шийдвэр дээр AI-ийн саналыг өөрчилсөн эсвэл
            татгалзсан бэ? Яагаад?
          </p>
          <p>
            <span>03</span>Дахин хийвэл хамгийн эхэнд юуг өөрөөр хийх вэ?
          </p>
        </div>
      </section>
    </div>
  );
}

export default function CourseApp() {
  const [selectedId, setSelectedId] = useState(1);
  const [section, setSection] = useState<Section>("plan");
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const lesson = lessons[selectedId - 1] ?? lessons[0];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const stored = window.localStorage.getItem("ai-frontend-completed");
        if (stored) setCompleted(new Set(JSON.parse(stored) as number[]));
      } catch {
        // Progress remains available for this session if browser storage is unavailable.
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        setSidebarCollapsed(
          window.localStorage.getItem("ai-frontend-sidebar-collapsed") ===
            "true",
        );
      } catch {
        // Use the expanded sidebar when browser storage is unavailable.
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        (event.metaKey || event.ctrlKey) &&
        event.key.toLocaleLowerCase() === "k"
      ) {
        event.preventDefault();
        setSearchOpen(true);
      }
      if (event.key === "Escape") {
        setSearchOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const selectLesson = (id: number) => {
    setSelectedId(id);
    setSection("plan");
    setSearchOpen(false);
    setMenuOpen(false);
    setSearchQuery("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleComplete = () => {
    setCompleted((current) => {
      const next = new Set(current);
      if (next.has(lesson.id)) next.delete(lesson.id);
      else next.add(lesson.id);
      try {
        window.localStorage.setItem(
          "ai-frontend-completed",
          JSON.stringify([...next]),
        );
      } catch {
        // Keep in-memory progress when browser storage is unavailable.
      }
      return next;
    });
  };

  const isComplete = completed.has(lesson.id);

  const toggleSidebar = () => {
    setSidebarCollapsed((current) => {
      const next = !current;
      try {
        window.localStorage.setItem(
          "ai-frontend-sidebar-collapsed",
          String(next),
        );
      } catch {
        // Keep the preference in memory when browser storage is unavailable.
      }
      return next;
    });
  };

  return (
    <main
      className={`course-app ${sidebarCollapsed ? "sidebar-collapsed" : ""}`}
    >
      <Sidebar
        lesson={lesson}
        completed={completed}
        open={menuOpen}
        collapsed={sidebarCollapsed}
        onClose={() => setMenuOpen(false)}
        onToggleCollapse={toggleSidebar}
        onSelect={selectLesson}
      />

      <section className="lesson-main">
        <header className="course-topbar">
          <div className="topbar-left">
            <button
              className="menu-button"
              onClick={() => setMenuOpen(true)}
              aria-label="Хичээлийн цэс нээх"
            >
              <Menu size={20} />
            </button>
            <div>
              <span>
                {lesson.week}-Р ДОЛОО ХОНОГ ·{" "}
                {lesson.module.toLocaleUpperCase("mn")}
              </span>
              <small>Хичээл {String(lesson.id).padStart(2, "0")} / 48</small>
            </div>
          </div>
          <div className="topbar-actions">
            <button
              className="search-trigger"
              onClick={() => setSearchOpen(true)}
            >
              <Search size={16} />
              <span>Хичээл хайх</span>
              <kbd>⌘ K</kbd>
            </button>
            <button
              className={`complete-button ${isComplete ? "done" : ""}`}
              onClick={toggleComplete}
              aria-pressed={isComplete}
            >
              {isComplete ? <CheckCircle2 size={17} /> : <Circle size={17} />}
              <span>{isComplete ? "Дууссан" : "Дууссанд тэмдэглэх"}</span>
            </button>
          </div>
        </header>

        <article className="lesson-article">
          <header className="lesson-header">
            <div className="lesson-kicker">
              <span className={`kind-badge ${lesson.kind}`}>
                {lessonKindLabel[lesson.kind]}
              </span>
              <span>ХИЧЭЭЛ {String(lesson.id).padStart(2, "0")}</span>
              {foundationMaterialById[lesson.id] && (
                <span className="self-study-badge">
                  БИЕ ДААН СУРАХ ХУВИЛБАР
                </span>
              )}
            </div>
            <div className="lesson-title-row">
              <div>
                <h1>{lesson.title}</h1>
                <p>{lesson.summary}.</p>
              </div>
              <div className="duration-badge">
                <strong>3</strong>
                <span>ЦАГ</span>
                <small>180 минут</small>
              </div>
            </div>
            <div className="lesson-meta">
              <span>
                <Clock3 size={15} /> 3 цаг
              </span>
              <span>
                <BookOpen size={15} /> {lesson.module}
              </span>
              <span>
                <Code2 size={15} /> Гардан дадлага
              </span>
              {lesson.kind === "ai" && (
                <span className="ai-meta">
                  <Sparkles size={15} /> AI лаборатори
                </span>
              )}
            </div>
          </header>

          <nav className="section-tabs" aria-label="Хичээлийн хэсэг">
            {sectionLabels.map((item) => (
              <button
                className={section === item.id ? "active" : ""}
                onClick={() => setSection(item.id)}
                key={item.id}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {section === "plan" && <PlanSection lesson={lesson} />}
          {section === "materials" && <MaterialsSection lesson={lesson} />}
          {section === "assignment" && <AssignmentSection lesson={lesson} />}

          <footer className="lesson-footer-nav">
            <button
              disabled={lesson.id === 1}
              onClick={() => selectLesson(lesson.id - 1)}
            >
              <ChevronLeft size={17} />
              <span>
                <small>ӨМНӨХ ХИЧЭЭЛ</small>
                {lesson.id > 1 ? lessons[lesson.id - 2].title : "Эхлэл"}
              </span>
            </button>
            <button
              disabled={lesson.id === 48}
              onClick={() => selectLesson(lesson.id + 1)}
            >
              <span>
                <small>ДАРААГИЙН ХИЧЭЭЛ</small>
                {lesson.id < 48 ? lessons[lesson.id].title : "Төгсөв"}
              </span>
              <ChevronRight size={17} />
            </button>
          </footer>
        </article>
      </section>

      <SearchDialog
        open={searchOpen}
        query={searchQuery}
        onQueryChange={setSearchQuery}
        onClose={() => setSearchOpen(false)}
        onSelect={selectLesson}
      />
    </main>
  );
}
