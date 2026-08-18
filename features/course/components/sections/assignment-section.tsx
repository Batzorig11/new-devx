import { Check, FileCheck2 } from "lucide-react";
import type { Lesson } from "../../data/curriculum";
import { foundationMaterialById } from "../../data/foundation-lessons";
import { DetailedAssignment } from "./detailed-assignment";

const assignmentSteps = [
  { title: "Тодорхойл.", description: "“Бэлэн болсон” гэж үзэх 3 шалгуураа бич." },
  { title: "Гараар эхэл.", description: "Үндсэн шийдлийн эхний хувилбарыг AI-гүй хий." },
  { title: "AI-тай сайжруул.", description: "Контексттэй prompt ашиглаж, diff-ийг мөр бүрээр нь унш." },
  { title: "Нотол.", description: "Ажиллаж байгааг шалгаад commit, тайлбар, review тэмдэглэлээ өг." },
];

const rubric = [
  { title: "Ойлголт ба тайлбар", description: "Үндсэн ойлголт, шийдвэр, trade-off-оо өөрийн үгээр тайлбарласан", score: 40 },
  { title: "Хэрэгжүүлэлт", description: "Шалгуур хангасан, ажилладаг, цэгцтэй шийдэл болон тестийн нотолгоо", score: 35 },
  { title: "AI ажлын урсгал", description: "Контекст, prompt, diff review, хүлээн авсан/татгалзсан шалтгааны тэмдэглэл", score: 25 },
];

const exitQuestions = [
  "Өнөөдрийн хамгийн чухал ойлголтыг нэг өгүүлбэрээр тайлбарла.",
  "Ямар шийдвэр дээр AI-ийн саналыг өөрчилсөн эсвэл татгалзсан бэ? Яагаад?",
  "Дахин хийвэл хамгийн эхэнд юуг өөрөөр хийх вэ?",
];

export function AssignmentSection({ lesson }: { lesson: Lesson }) {
  const detailed = foundationMaterialById[lesson.id];
  if (detailed) return <DetailedAssignment material={detailed} />;

  const isProject = lesson.kind === "project" || lesson.kind === "capstone";
  const deliverable = isProject
    ? `${lesson.title}-ийн өнөөдрийн ажиллах хувилбар, commit түүх, review тэмдэглэл.`
    : `${lesson.title} сэдвийг хэрэглэсэн жижиг ажил, тайлбар README, нэг Git commit.`;

  return (
    <div className="content-section assignment-section">
      <section className="deliverable-card">
        <div className="deliverable-icon"><FileCheck2 size={24} /></div>
        <div>
          <span>СУРАГЧДАД ӨГӨХ ДААЛГАВАР</span>
          <h2>{deliverable}</h2>
          <p>Хугацаа: дараагийн хичээл эхлэхээс өмнө · GitHub холбоосоор</p>
        </div>
      </section>

      <div className="assignment-grid">
        <section>
          <div className="section-heading"><span>01</span><h2>Багшийн удирдах дараалал</h2></div>
          <div className="task-steps">
            {assignmentSteps.map((step, index) => (
              <div key={step.title}>
                <span>{index + 1}</span>
                <p><strong>{step.title}</strong> {step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <aside className="definition-card">
          <span>DEFINITION OF DONE</span>
          <ul>
            <li><Check size={13} />{lesson.summary}</li>
            <li><Check size={13} />Алдаа, хоосон ба loading төлөвийг шалгасан</li>
            <li><Check size={13} />AI-ийн санал бүрийг хүлээн авсан шалтгаантай</li>
            <li><Check size={13} />Өөрийн кодыг аман тайлбарлаж чадна</li>
          </ul>
        </aside>
      </div>

      <section className="rubric-section">
        <div className="section-heading"><span>02</span><h2>Үнэлгээний rubric</h2><small>Нийт 100 оноо</small></div>
        <div className="rubric-table">
          {rubric.map((item) => (
            <div className="rubric-row" key={item.title}>
              <strong>{item.title}</strong><p>{item.description}</p><b>{item.score}</b>
            </div>
          ))}
        </div>
      </section>

      <section className="exit-ticket">
        <div className="section-heading"><span>03</span><h2>Ангид авах exit ticket</h2></div>
        <div className="exit-grid">
          {exitQuestions.map((question, index) => (
            <p key={question}><span>{String(index + 1).padStart(2, "0")}</span>{question}</p>
          ))}
        </div>
      </section>
    </div>
  );
}
