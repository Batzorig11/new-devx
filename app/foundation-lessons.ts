export type DetailedScheduleItem = {
  start: string;
  duration: number;
  title: string;
  description: string;
  kind?: "break" | "practice" | "ai";
};

export type CopyBlock = {
  title: string;
  language: "bash" | "html" | "css" | "text" | "prompt";
  code: string;
  note?: string;
};

export type LessonChapter = {
  title: string;
  lead: string;
  paragraphs: string[];
  points?: string[];
  blocks?: CopyBlock[];
};

export type LessonExercise = {
  title: string;
  duration: string;
  objective: string;
  steps: string[];
  blocks?: CopyBlock[];
  checks: string[];
  hint?: string;
  solution?: string;
};

export type KnowledgeCheck = {
  question: string;
  answer: string;
  explanation: string;
};

export type DetailedLessonMaterial = {
  id: number;
  goals: string[];
  outcome: string;
  prerequisites: string[];
  notRequired: string[];
  preparation: string;
  tools: string[];
  evidence: string;
  schedule: DetailedScheduleItem[];
  chapters: LessonChapter[];
  glossary: { term: string; definition: string }[];
  exercises: LessonExercise[];
  aiLab: {
    title: string;
    purpose: string;
    prompt: string;
    steps: string[];
    checks: string[];
  };
  assignment: {
    title: string;
    description: string;
    due: string;
    steps: string[];
    deliverables: string[];
    criteria: string[];
    starter?: CopyBlock;
    blocks?: CopyBlock[];
  };
  quiz: KnowledgeCheck[];
  references?: { label: string; url: string; note: string }[];
};

const lesson1: DetailedLessonMaterial = {
  id: 1,
  goals: [
    "URL оруулснаас хуудас харагдах хүртэлх замыг дарааллаар тайлбарлах.",
    "Browser, DNS, server, HTTP request, HTTP response-ийн үүргийг ялгах.",
    "Frontend гэж хэрэглэгчийн browser дээр ажиллах хэсэг болохыг жишээгээр тайлбарлах.",
    "AI-ийн тайлбарыг browser-ийн Network баримттай тулгаж шалгах.",
  ],
  outcome:
    "Хичээлийн төгсгөлд та веб хуудас нээгдэх 7 алхмыг зураглан, Network хэсгээс бодит хүсэлтийн URL, method, status-ийг өөрөө олж чадна.",
  prerequisites: ["Browser нээх", "URL бичих", "Файл эсвэл тэмдэглэлд текст бичих"],
  notRequired: ["Terminal", "Git ба GitHub", "README", "Код бичих", "Node.js"],
  preparation:
    "Chrome, Edge эсвэл Firefox browser болон тэмдэглэл бичих хоосон файл байхад хангалттай.",
  tools: ["Browser", "Developer Tools → Network", "Тэмдэглэлийн файл"],
  evidence:
    "Network хүсэлтийн screenshot болон веб хэрхэн ажилладгийг тайлбарласан 7 мөр тэмдэглэл.",
  schedule: [
    { start: "00:00", duration: 15, title: "Өмнөх төсөөллөө шалгах", description: "Веб хуудас нээгдэхэд юу болдог тухай одоогийн төсөөллөө 5 өгүүлбэрээр бичнэ." },
    { start: "00:15", duration: 35, title: "URL, domain ба DNS", description: "Хаягийн хэсгүүдийг задалж, domain нэр яагаад IP хаягтай холбогддогийг алхамчилж ойлгоно." },
    { start: "00:50", duration: 35, title: "Browser, server ба HTTP", description: "Client–server харилцаа, request, response, method, status code-ийн үндсийг бодит жишээгээр сурна." },
    { start: "01:25", duration: 10, title: "Завсарлага", description: "Дэлгэцээс холдож 10 минут амарна.", kind: "break" },
    { start: "01:35", duration: 35, title: "Frontend гэж яг юу вэ?", description: "HTML, CSS, JavaScript browser-т ямар үүрэгтэйг хэрэглэгчийн хардаг, ашигладаг зүйлтэй холбоно." },
    { start: "02:10", duration: 35, title: "Network лаборатори", description: "Browser-ийн Developer Tools ашиглан бодит HTTP хүсэлт, хариултыг ажиглана.", kind: "practice" },
    { start: "02:45", duration: 15, title: "Өөрийн үгээр тайлбарлах", description: "7 алхмын зураглал, 4 асуултын self-check хийж хичээлээ бататгана." },
  ],
  chapters: [
    {
      title: "1. URL оруулсны дараа юу болдог вэ?",
      lead: "Веб бол нэг компьютер доторх зүйл биш; хоорондоо дүрмээр ярилцдаг олон хэсгийн систем юм.",
      paragraphs: [
        "Та browser-ийн address bar-д https://example.com гэж бичихэд browser эхлээд энэ хаягийг задлана. https нь ямар дүрмээр холбогдохыг, example.com нь ямар server рүү очихыг, замын хэсэг нь server-ээс яг ямар нөөц хүсэхийг заана.",
        "Хүн domain нэрийг амархан тогтоодог ч сүлжээ IP хаягаар холбогдоно. DNS нь утасны лавлах шиг domain нэрийг IP хаягтай нь холбож өгнө. DNS хариу олсны дараа browser server-тэй холболт үүсгэж HTTP request илгээнэ.",
        "Server request-ийг уншаад HTTP response буцаана. Response дотор status code, headers болон HTML зэрэг body байна. Browser HTML-ийг уншиж, шаардлагатай CSS, зураг, JavaScript бүрийн төлөө нэмэлт request илгээж болно.",
      ],
      points: [
        "1 — Browser URL-ийг задлана.",
        "2 — DNS domain-ийг IP хаягтай холбож өгнө.",
        "3 — Browser server-тэй сүлжээний холболт үүсгэнэ.",
        "4 — Browser HTTP request илгээнэ.",
        "5 — Server request-ийг боловсруулна.",
        "6 — Server HTTP response буцаана.",
        "7 — Browser HTML/CSS/JavaScript-ийг дүрслэн харуулна.",
      ],
      blocks: [
        {
          title: "Лабораторид нээх URL",
          language: "text",
          code: "https://example.com",
          note: "Энэ хичээлд terminal command хэрэггүй. URL-ийг browser-ийн address bar-д оруулна.",
        },
      ],
    },
    {
      title: "2. Гол оролцогчдын үүрэг",
      lead: "Нэр томьёог цээжлэхийн оронд ‘хэн юу хийж байна?’ гэж асуугаарай.",
      paragraphs: [
        "Browser бол client. Тэр хэрэглэгчийн үйлдлийг хүлээн авч request илгээх, response-ийг унших, веб хуудсыг дэлгэц дээр дүрслэх үүрэгтэй. Chrome, Firefox, Edge, Safari бүгд browser-ийн жишээ.",
        "Server бол сүлжээгээр request хүлээн авч response өгдөг компьютер дээр ажиллах програм. Нэг server олон хэрэглэгчид зэрэг хариу өгч болно. Server нь бэлэн файл буцаах эсвэл өгөгдлийн сангаас мэдээлэл авч response үүсгэж болно.",
        "DNS нь веб хуудасны агуулгыг хадгалдаггүй. Түүний гол ажил нь domain нэрийг холбогдох IP хаяг руу заах. HTTP харин client ба server ямар хэлбэрээр request, response солилцохыг тодорхойлсон дүрэм юм.",
      ],
      points: [
        "Browser = хүсэлт илгээгч, хариуг дүрслэгч client.",
        "DNS = domain нэрээс IP хаяг олоход тусална.",
        "Server = хүсэлтийг боловсруулж хариу өгнө.",
        "HTTP = client ба server-ийн харилцах дүрэм.",
      ],
    },
    {
      title: "3. Request, response ба status code",
      lead: "Network алдааг ойлгохын тулд response-ийн status code-ийг эхэлж хардаг.",
      paragraphs: [
        "Request дотор URL, method, headers, заримдаа body байна. GET method ихэвчлэн мэдээлэл авахад, POST method шинэ мэдээлэл илгээхэд хэрэглэгдэнэ. Энэ хичээлд method-ийг зөвхөн ялгаж танихад хангалттай.",
        "Response-ийн 200 нь хүсэлт амжилттай, 404 нь хүссэн нөөц олдоогүй, 500 нь server талд алдаа гарсныг ерөнхийд нь илэрхийлнэ. Status code нь бүх шалтгааныг хэлэхгүй ч асуудал аль талд байж болохыг тогтооход эхний баримт болдог.",
      ],
      points: ["200 — амжилттай", "301/302 — өөр хаяг руу шилжүүлсэн", "404 — нөөц олдоогүй", "500 — server талын алдаа"],
    },
    {
      title: "4. Frontend гэж яг юу вэ?",
      lead: "Frontend бол хэрэглэгчийн browser дээр харагдаж, ажилладаг бүтээгдэхүүний хэсэг.",
      paragraphs: [
        "HTML агуулгын бүтэц ба утгыг, CSS харагдах байдал ба байрлалыг, JavaScript үйлдэл ба төлөвийг хариуцна. Frontend инженер эдгээрийг ашиглаад хурдан, ойлгомжтой, хүртээмжтэй интерфэйс бүтээнэ.",
        "Frontend нь server-ээс тусдаа боловч салангид биш. Жишээ нь бүтээгдэхүүний жагсаалт server-ээс JSON хэлбэрээр ирж, frontend түүнийг карт болгон харуулж болно. Тиймээс frontend инженер request, response, loading, error-ийн үндсийг ойлгох шаардлагатай.",
      ],
    },
  ],
  glossary: [
    { term: "URL", definition: "Веб дээрх нөөцийн бүтэн хаяг." },
    { term: "Domain", definition: "Хүнд уншихад хялбар веб нэр; DNS-ээр IP хаягтай холбогдоно." },
    { term: "DNS", definition: "Domain нэрийн IP хаягийг олоход тусалдаг систем." },
    { term: "Client", definition: "Server рүү хүсэлт илгээдэг тал; энэ хичээлд browser." },
    { term: "Server", definition: "Хүсэлт хүлээн авч хариу өгдөг програм ажиллаж буй тал." },
    { term: "HTTP", definition: "Вебийн request ба response солилцох дүрэм." },
    { term: "Status code", definition: "Response-ийн ерөнхий үр дүнг илэрхийлэх 3 оронтой тоо." },
    { term: "Frontend", definition: "Хэрэглэгчийн browser дээр харагдаж, ажилладаг интерфэйсийн хэсэг." },
  ],
  exercises: [
    {
      title: "Удирдамжтай лаборатори: Network хүсэлт ажиглах",
      duration: "35 минут",
      objective: "Нэг HTTP request-ийн URL, method, status, content type-ийг бодит баримтаас олох.",
      steps: [
        "Browser дээр https://example.com нээнэ.",
        "Windows/Linux: F12 эсвэл Ctrl+Shift+I; macOS: Option+Command+I дарж Developer Tools нээнэ.",
        "Network табыг сонгоод хуудсаа нэг удаа refresh хийнэ.",
        "Жагсаалтын Type нь document байгаа эхний хүсэлтийг сонгоно.",
        "Headers хэсгээс Request URL, Request Method, Status Code, Content-Type-ийг тэмдэглэлдээ хуулна.",
        "Network жагсаалтад хэдэн request байгааг тоолж, яагаад нэг хуудас олон request хийж болохыг нэг өгүүлбэрээр тайлбарлана.",
      ],
      checks: [
        "Request URL нь https://example.com/ гэж харагдана.",
        "Method нь GET байна.",
        "Status нь 200 байх ёстой; өөр байвал сүлжээ эсвэл орчны шалтгааныг тэмдэглэнэ.",
        "Response header дотор text/html төрлийн агуулга байгааг олсон байна.",
      ],
      hint: "Network жагсаалт хоосон байвал Developer Tools-оо нээлттэй хэвээр байлгаад refresh хийнэ.",
      solution: "Энэ лабораторийн зөв хариу нь цээжилсэн тоо биш. Таны screenshot дээр URL, GET, status, content-type дөрөв харагдаж байвал зорилго биелсэн.",
    },
  ],
  aiLab: {
    title: "AI-ийн тайлбарыг баримтаар шалгах",
    purpose: "AI-ийн итгэлтэй бичсэн тайлбарыг шууд үнэн гэж үзэхгүй дадал эзэмших.",
    prompt: `Би frontend-ийн анхны хичээлээ үзэж байна.

Даалгавар: Browser-т https://example.com оруулснаас хуудас харагдах хүртэлх үйл явцыг яг 7 алхмаар тайлбарла.
Хязгаарлалт:
- Browser, DNS, IP, server, HTTP request, HTTP response, rendering гэсэн ойлголтыг оруул.
- Мэдэхгүй эсвэл browser бүрт ялгаатай зүйлийг тодорхой тэмдэглэ.
- Эцэст нь Network tab-аар шалгаж болох 4 баримт жагсаа.
- Анхлан суралцагчид ойлгомжтой Монгол хэлээр бич.`,
    steps: [
      "Prompt-ийг ашигладаг AI чатдаа өгнө.",
      "Хариултын 7 алхмыг энэ хичээлийн 7 алхамтай тулгана.",
      "Network лабораторийн screenshot-аар AI-ийн хэлсэн URL, method, status, content type-ийг шалгана.",
      "Зөрүү гарвал ‘AI юу хэлсэн / би ямар баримт харсан’ гэсэн хоёр мөр тэмдэглэнэ.",
    ],
    checks: ["AI хариултыг дор хаяж нэг бодит Network баримтаар шалгасан.", "Ойлгоогүй нэр томьёог өөрийн үгээр дахин бичсэн."],
  },
  assignment: {
    title: "Веб хүсэлтийн 7 алхмын зураглал",
    description:
      "Код, Git, README шаардахгүй. Нэг хуудас тэмдэглэл дээр веб хуудас нээгдэх урсгалыг өөрийн үгээр тайлбарлана.",
    due: "2-р хичээл эхлэхээс өмнө · 30–45 минут",
    steps: [
      "Доорх загварыг энгийн text файл, Google Doc эсвэл дэвтэрт хуулна.",
      "Хоосон хэсэг бүрийг өөрийн үгээр 1–2 өгүүлбэрээр бөглөнө.",
      "Network лабораторийн screenshot-оо хавсаргана.",
      "Эцэст нь ‘Frontend аль алхмаас эхэлж харагдаж байна вэ?’ гэдэгт 3 өгүүлбэрээр хариулна.",
    ],
    deliverables: ["7 алхамтай тайлбар", "Network tab-ийн 1 screenshot", "Frontend-ийн тухай 3 өгүүлбэр"],
    criteria: ["DNS ба server-ийг нэг зүйл гэж андуураагүй", "Request ба response-ийн чиглэл зөв", "Git, code, README огт шаардахгүй", "Өөрийн үгээр тайлбарласан"],
    starter: {
      title: "Даалгаврын бөглөх загвар",
      language: "text",
      code: `ВЕБ ХЭРХЭН АЖИЛЛАДАГ ВЭ?

1. Би browser-т __________________ URL оруулсан.
2. Browser URL-ийг __________________ гэж задлана.
3. DNS-ийн ажил бол __________________.
4. Browser server рүү __________________ илгээнэ.
5. Server __________________.
6. Server browser руу __________________ буцаана.
7. Browser __________________ ашиглан хуудсыг харуулна.

NETWORK БАРИМТ
- Request URL:
- Method:
- Status:
- Content-Type:

FRONTEND ГЭЖ ЮУ ВЭ?
[Энд өөрийн 3 өгүүлбэрийг бич.]`,
    },
  },
  quiz: [
    { question: "DNS веб хуудасны HTML-ийг буцаадаг уу?", answer: "Үгүй.", explanation: "DNS domain нэрийг IP хаягтай холбоход тусална; HTML-ийг server HTTP response-оор буцаана." },
    { question: "404 status ямар ерөнхий утгатай вэ?", answer: "Хүссэн нөөц олдоогүй.", explanation: "Request server-т хүрсэн байж болох ч тухайн URL-д тохирох нөөц олдоогүйг илэрхийлнэ." },
    { question: "Frontend код хаана голчлон ажилладаг вэ?", answer: "Хэрэглэгчийн browser дээр.", explanation: "HTML, CSS, client-side JavaScript-ийг browser уншиж дүрслэнэ." },
    { question: "Нэг HTML хуудас яагаад олон request хийж болох вэ?", answer: "CSS, зураг, font, JavaScript зэрэг тусдаа нөөц татдаг учраас.", explanation: "HTML дотор заасан нөөц бүрт browser нэмэлт хүсэлт илгээж болно." },
  ],
};

const lesson2: DetailedLessonMaterial = {
  id: 2,
  goals: [
    "Editor, terminal, Node.js, npm-ийн үүргийг хооронд нь ялгах.",
    "pwd, ls, cd, mkdir команд ашиглан folder дотор аюулгүй шилжих.",
    "Node.js, npm, VS Code суусан эсэхийг version командаар шалгах.",
    "Алдаа гарвал command, output, орчноо бүтнээр нь өгч AI-аас оношлох тусламж авах.",
  ],
  outcome:
    "Та сургалтын үндсэн folder-оо terminal-аас нээж, Node/npm/editor-ийн ажиллагааг өөрөө шалган, алдааны мэдээллээ хуулж тайлбарлаж чадна.",
  prerequisites: ["1-р хичээлийн browser, client, server гэсэн суурь ойлголт", "Файл ба folder-ийн ерөнхий ойлголт"],
  notRequired: ["Git commit", "GitHub repository", "HTML/CSS код", "AI CLI агент"],
  preparation:
    "Өөрийн компьютерийн үйлдлийн системийг мэдэж, програм суулгах эрхтэй байна. Ажлын эсвэл сургуулийн төхөөрөмж бол админаас зөвшөөрөл хэрэгтэй эсэхийг шалгана.",
  tools: ["VS Code эсвэл Cursor", "Terminal / PowerShell", "Node.js LTS", "npm"],
  evidence: "Version шалгалтын үр дүн болон terminal-аас нээсэн ai-frontend-course folder.",
  schedule: [
    { start: "00:00", duration: 15, title: "Орчноо оношлох", description: "Ямар OS, editor, terminal ашиглаж байгаагаа тэмдэглэж, суусан хэрэгслүүдээ шалгана." },
    { start: "00:15", duration: 35, title: "Файл, folder ба path", description: "Current folder, parent folder, absolute/relative path-ийн утгыг terminal дээр туршина." },
    { start: "00:50", duration: 35, title: "Node.js ба npm", description: "Browser-оос гадуур JavaScript ажиллуулах runtime болон package manager-ийн ялгааг ойлгоно." },
    { start: "01:25", duration: 10, title: "Завсарлага", description: "10 минут амарна.", kind: "break" },
    { start: "01:35", duration: 40, title: "Суулгах ба version шалгах", description: "VS Code, Node.js LTS, npm-ийг албан ёсны эх сурвалжаар суулгаж эсвэл ажиллагааг нь батална.", kind: "practice" },
    { start: "02:15", duration: 30, title: "Анхны workspace лаборатори", description: "Сургалтын folder үүсгэж editor-оо terminal-аас нээнэ.", kind: "practice" },
    { start: "02:45", duration: 15, title: "Алдааг зөв мэдээлэх", description: "Command, output, OS, expected result бүхий оношлох загвар бөглөнө." },
  ],
  chapters: [
    {
      title: "1. Дөрвөн хэрэгсэл — дөрвөн өөр үүрэг",
      lead: "Нэг хэрэгсэл бүгдийг хийдэггүй. Үүргийг нь ялгавал алдаа хаана гарсныг хурдан олно.",
      paragraphs: [
        "Editor бол код болон текст файл бичих орчин. VS Code/Cursor дотор folder-ийн мод, нээлттэй файл, terminal, нэмэлт extension харагддаг. Editor өөрөө Node.js эсвэл Git биш; тэдгээрийг тусад нь суулгадаг.",
        "Terminal бол компьютерт текст command өгөх интерфэйс. Bash, zsh, PowerShell зэрэг shell нь таны бичсэн командыг тайлбарлан ажиллуулна. Terminal дээр command ажиллуулахдаа одоо аль folder-т байгаагаа үргэлж мэдэх нь чухал.",
        "Node.js бол JavaScript-ийг browser-оос гадуур ажиллуулах runtime. npm бол Node.js-тай хамт ирдэг package manager ба script runner. node болон npm хоёр тусдаа command боловч Node.js LTS суулгахад ихэвчлэн хамт сууна.",
      ],
      points: ["Editor — файл бичнэ", "Terminal — command ажиллуулна", "Node.js — JavaScript runtime", "npm — package ба script удирдана"],
    },
    {
      title: "2. Terminal-ийн аюулгүй суурь",
      lead: "Command ажиллуулахаасаа өмнө current folder-оо шалгах дадалтай болно.",
      paragraphs: [
        "Path гэдэг нь файл эсвэл folder хаана байгааг заасан хаяг. Absolute path нь root-оос эхэлсэн бүтэн зам, relative path нь одоогийн folder-оос тооцсон зам юм. cd командаар folder сольж, pwd командаар одоогийн замаа харна.",
        "Энэ хичээлд устгах command үзэхгүй. rm, del, Remove-Item зэрэг command-ийг эхний дадлагадаа ашиглах шаардлагагүй. Алдаатай folder үүсвэл File Explorer/Finder-ээс харж байгаад устгах нь эхлэгчдэд илүү аюулгүй.",
      ],
      blocks: [
        {
          title: "macOS / Linux terminal-ийн аюулгүй командууд",
          language: "bash",
          code: `pwd
ls
mkdir ai-frontend-course
cd ai-frontend-course
pwd`,
          note: "Команд бүрийг нэг нэгээр нь ажиллуулж output-ийг унш. Folder өмнө нь байвал mkdir алдаа өгч болно; энэ нь өгөгдөл устгасан гэсэн үг биш.",
        },
        {
          title: "Windows PowerShell-ийн аюулгүй командууд",
          language: "bash",
          code: `Get-Location
Get-ChildItem
mkdir ai-frontend-course
cd ai-frontend-course
Get-Location`,
          note: "PowerShell дээр pwd, ls гэсэн товчлол мөн ажилладаг ч эхлээд бүтэн нэрийг нь харах нь ойлгоход тустай.",
        },
      ],
    },
    {
      title: "3. Node.js LTS ба npm",
      lead: "Энэ курсэд шинэ feature-ээс илүү тогтвортой LTS хувилбар сонгоно.",
      paragraphs: [
        "Node.js-ийн version хурдан өөрчлөгддөг тул хичээл дээр тогтсон version цээжлэхгүй. Албан ёсны татах хуудаснаас Latest LTS гэж тэмдэглэснийг сонгоно. Current хувилбар нь шинэ боломж туршихад зориулагдсан байж болох тул эхлэгчдийн сургалтын орчинд LTS тохиромжтой.",
        "npm version нь Node version-той ижил байх албагүй. node --version ба npm --version хоёул тоо хэвлэвэл command PATH-д танигдсан гэсэн үг. ‘command not found’ эсвэл ‘not recognized’ гэвэл шинэ terminal нээж дахин шалгаад, дараа нь суулгалтаа нягтална.",
      ],
      blocks: [
        {
          title: "Суулгалтын дараах version шалгалт",
          language: "bash",
          code: `node --version
npm --version
code --version`,
          note: "Гурван command бүгд version хэвлэх ёстой. code command ажиллахгүй ч VS Code нээгдэж байвал PATH тохиргоог editor-ийн албан ёсны setup заавраар хийнэ.",
        },
        {
          title: "Node.js-ээр нэг мөр JavaScript ажиллуулах",
          language: "bash",
          code: `node -e "console.log('Node.js ажиллаж байна')"`,
          note: "Output нь Node.js ажиллаж байна гэж хэвлэгдэнэ. Энэ нь browser нээлгүй JavaScript ажилласны нотолгоо.",
        },
      ],
    },
    {
      title: "4. Алдааг оношлоход өгөх 5 баримт",
      lead: "‘Ажиллахгүй байна’ гэдэг ганц өгүүлбэр оношлоход хангалтгүй.",
      paragraphs: [
        "Тусламж хүсэхдээ OS, ажиллуулсан command, бүтэн output, одоогийн folder, хүлээсэн үр дүнгээ өгнө. Нууц үг, API key, token-оо хэзээ ч screenshot эсвэл prompt-д оруулахгүй.",
        "AI-ийн санал болгосон command бүрийг ажиллуулахаасаа өмнө юу хийхийг нэг өгүүлбэрээр тайлбарлуул. Файл устгах, permission өөрчлөх, sudo ашиглах санал өгвөл шууд ажиллуулахгүй; илүү аюулгүй хувилбар байгаа эсэхийг шалгана.",
      ],
      blocks: [
        {
          title: "Оношлох хүсэлтийн загвар",
          language: "prompt",
          code: `Миний орчин:
- OS: [Windows 11 / macOS / Ubuntu ...]
- Terminal: [PowerShell / zsh / bash]
- Одоогийн folder: [pwd эсвэл Get-Location output]

Ажиллуулсан command:
[яг command-оо хуул]

Бүтэн output:
[алдааны эхний мөрөөс сүүлийн мөр хүртэл]

Хүлээсэн үр дүн:
[юу болох ёстой гэж бодсон]

Надад шууд олон command өгөхгүй. Эхлээд хамгийн магадлалтай 2 шалтгааныг тайлбарлаад, өгөгдөл устгахгүй нэг шалгах command санал болго.`,
        },
      ],
    },
  ],
  glossary: [
    { term: "Editor", definition: "Код болон текст файл бичих, засах програм." },
    { term: "Terminal", definition: "Текст command-аар компьютертэй ажиллах интерфэйс." },
    { term: "Shell", definition: "Terminal-д бичсэн command-ийг тайлбарлан ажиллуулах програм." },
    { term: "Path", definition: "Файл эсвэл folder-ийн байрлалыг заасан зам." },
    { term: "Current folder", definition: "Terminal одоо ажиллаж буй folder." },
    { term: "Runtime", definition: "Кодыг ажиллуулах орчин; Node.js нь JavaScript runtime." },
    { term: "LTS", definition: "Удаан хугацаанд дэмжих, тогтвортой release шугам." },
    { term: "npm", definition: "Node package болон project script удирдах хэрэгсэл." },
  ],
  exercises: [
    {
      title: "Удирдамжтай лаборатори: сургалтын workspace үүсгэх",
      duration: "30 минут",
      objective: "Terminal ашиглан course folder үүсгэж, VS Code-д зөв folder-оо нээх.",
      steps: [
        "Terminal эсвэл PowerShell нээнэ.",
        "pwd эсвэл Get-Location ажиллуулж одоогийн замыг уншина.",
        "Доорх command-аар ai-frontend-course folder үүсгээд дотогш орно.",
        "week-01 гэсэн дэд folder үүсгээд VS Code-д одоогийн folder-оо нээнэ.",
        "VS Code-ийн Explorer хэсгээс week-01 folder харагдаж байгаа эсэхийг шалгана.",
        "notes.txt файл үүсгэж ‘Миний орчин ажиллаж байна’ гэж бичээд хадгална.",
      ],
      blocks: [
        {
          title: "Workspace үүсгэх команд",
          language: "bash",
          code: `mkdir ai-frontend-course
cd ai-frontend-course
mkdir week-01
code .`,
          note: "Хэрэв ai-frontend-course өмнө нь үүссэн бол mkdir мөрийг алгасаад cd ai-frontend-course гэж орно.",
        },
      ],
      checks: ["Editor-ийн Explorer дээр ai-frontend-course root нээгдсэн.", "week-01/notes.txt файл хадгалагдсан.", "node --version ба npm --version тоо хэвлэсэн."],
      hint: "code . ажиллахгүй бол VS Code-оо гараар нээгээд File → Open Folder-оор ai-frontend-course folder-оо сонго.",
      solution: "Folder-ийн зөв бүтэц: ai-frontend-course/week-01/notes.txt. Git repository энэ хичээлд үүсгэхгүй.",
    },
  ],
  aiLab: {
    title: "Нэг алхмаар аюулгүй оношлох",
    purpose: "AI-аар сохроор олон command ажиллуулахгүй, эхлээд шалтгаан ба баримт цуглуулах.",
    prompt: `node --version command ажиллахгүй байна.

Миний OS: [өөрийн OS]
Миний terminal: [PowerShell/zsh/bash]
Бүтэн output: [энд хуул]

Надад эхлээд:
1. Энэ output ямар утгатайг тайлбарла.
2. Өгөгдөл өөрчлөхгүй нэг шалгах command өг.
3. Тэр command-ийн боломжит 2 үр дүн бүрийн дараагийн алхмыг тайлбарла.

sudo, файл устгах command, permission-ийн өргөн өөрчлөлт бүү санал болго.`,
    steps: ["Алдаа байхгүй бол жишээ output болгон ‘command not found’-ыг ашиглаж prompt-оо туршина.", "AI-ийн эхний command юу шалгахыг өөрийн үгээр бичнэ.", "Аюулгүй гэж ойлгосны дараа л command ажиллуулна."],
    checks: ["Prompt дотор OS, terminal, output байна.", "AI-ийн command өгөгдөл устгахгүй шалгалт байна."],
  },
  assignment: {
    title: "Хөгжүүлэлтийн орчны эрүүл мэндийн тайлан",
    description: "Git шаардахгүй. Орчин зөв суусан эсэхийг version ба folder-ийн баримтаар нотолно.",
    due: "3-р хичээл эхлэхээс өмнө · 30 минут",
    steps: ["week-01 дотор environment-check.txt файл үүсгэнэ.", "Доорх загварыг хуулж өөрийн бодит output-оор бөглөнө.", "Нууц мэдээлэл байгаа эсэхийг шалгаад хадгална.", "code . командаар зөв folder нээгддэгийг нэг удаа батална."],
    deliverables: ["environment-check.txt", "node/npm/code version output", "Одоогийн workspace path"],
    criteria: ["Git commit шаардаагүй", "Version-ийг тааж бичээгүй, command output хуулсан", "Нууц үг/token оруулаагүй", "Folder-ийн path зөв"],
    starter: {
      title: "environment-check.txt загвар",
      language: "text",
      code: `DEVELOPMENT ENVIRONMENT CHECK

OS:
Terminal:
Editor:

node --version output:
npm --version output:
code --version output:

Current workspace path:
Workspace доторх файл: week-01/notes.txt

Надад гарсан нэг асуудал эсвэл анхаарсан зүйл:
`,
    },
  },
  quiz: [
    { question: "VS Code суусан бол Git автоматаар суусан гэсэн үг үү?", answer: "Үгүй.", explanation: "VS Code Git UI-тай ч Git програмыг тусад нь суулгах шаардлагатай." },
    { question: "node ба npm ижил command уу?", answer: "Үгүй.", explanation: "node JavaScript ажиллуулна; npm package ба script удирдана." },
    { question: "pwd ямар асуултад хариулдаг вэ?", answer: "Би одоо аль folder-т байна вэ?", explanation: "Command-оос өмнө current folder-оо шалгах аюулгүй дадал." },
    { question: "AI-д алдаа өгөхдөө юуг нуух ёстой вэ?", answer: "Нууц үг, API key, token болон хувийн мэдээлэл.", explanation: "Алдааны output-д credential санамсаргүй орсон эсэхийг үргэлж шалгана." },
  ],
  references: [
    { label: "Node.js татах", url: "https://nodejs.org/en/download/", note: "Latest LTS хувилбарыг сонго." },
    { label: "VS Code эхлэх заавар", url: "https://code.visualstudio.com/docs/getstarted/overview", note: "Өөрийн OS-ийн install хэсгийг дага." },
  ],
};

const lesson3: DetailedLessonMaterial = {
  id: 3,
  goals: ["Git repository, working tree, staging area, commit-ийн ялгааг тайлбарлах.", "init, status, add, commit, log командыг зөв дарааллаар ашиглах.", "Жижиг, утгатай commit message бичих.", "GitHub remote нь Git-ийн local түүхээс ямар ялгаатайг ойлгох."],
  outcome: "Та local repository үүсгэж, өөрчлөлтөө шалган, staging хийж, хоёр утгатай commit үүсгээд log-оор нотолж чадна.",
  prerequisites: ["2-р хичээлийн terminal, folder, path", "VS Code-д folder нээх", "Git суулгах эрх"],
  notRequired: ["HTML/CSS мэдлэг", "GitHub заавал ашиглах", "Branch-ийг төгс эзэмших", "AI-аар commit хийлгэх"],
  preparation: "git --version ажиллаж байгаа эсэхийг шалгана. Git байхгүй бол зөвхөн албан ёсны Git download хуудаснаас суулгана.",
  tools: ["Git", "Terminal", "VS Code", "GitHub — зөвхөн optional remote хэсэгт"],
  evidence: "git-practice repository, хамгийн багадаа 2 commit, git log --oneline output.",
  schedule: [
    { start: "00:00", duration: 20, title: "Git яагаад хэрэгтэй вэ?", description: "Файлын copy, cloud sync, Git history-ийн ялгааг жишээгээр ойлгоно." },
    { start: "00:20", duration: 35, title: "Working → staging → commit", description: "Git-ийн гурван төлөв ба status-ийн мэдээллийг зураглана." },
    { start: "00:55", duration: 30, title: "Анхны repository", description: "init, status, add, commit, log урсгалыг алхамчилж хийнэ.", kind: "practice" },
    { start: "01:25", duration: 10, title: "Завсарлага", description: "10 минут амарна.", kind: "break" },
    { start: "01:35", duration: 35, title: "Сайн commit ба diff", description: "Өөрчлөлтөө add хийхээс өмнө diff-ээр уншиж, жижиг commit болгоно." },
    { start: "02:10", duration: 35, title: "Branch ба GitHub remote", description: "Branch-ийн зорилго, local ба remote-ийн ялгааг туршина; push хэсэг optional.", kind: "practice" },
    { start: "02:45", duration: 15, title: "Recovery сэтгэлгээ", description: "status, log, diff гурваар repository-ийн төлөвийг тайлбарлаж хичээлээ шалгана." },
  ],
  chapters: [
    {
      title: "1. Git бол өөрчлөлтийн түүх",
      lead: "Git файл хадгалах товч биш; ямар өөрчлөлтийг яагаад нэг хувилбар болгосныг тэмдэглэдэг систем.",
      paragraphs: [
        "Working tree нь таны одоо засаж буй файлууд. Staging area нь дараагийн commit-д оруулах сонгосон өөрчлөлт. Commit нь сонгосон өөрчлөлтийн нэртэй snapshot. Энэ гурвыг ялгахгүй бол санамсаргүй файл commit хийх эрсдэлтэй.",
        "git status бол хамгийн түрүүнд ажиллуулах аюулгүй command. Тэр current branch, өөрчлөгдсөн файл, staged эсэхийг харуулна. git diff нь staged болоогүй өөрчлөлтийн яг мөрүүдийг, git diff --staged нь commit-д орох мөрүүдийг харуулна.",
      ],
      points: ["Өөрчлөөд status шалга", "diff-ээ унш", "Зөв файлаа add хий", "staged diff-ээ дахин унш", "Тэгээд commit хий"],
    },
    {
      title: "2. Анхны Git тохиргоо",
      lead: "Commit бүрт зохиогчийн нэр, email ордог тул нэг удаагийн global тохиргоо хэрэгтэй.",
      paragraphs: [
        "Доорх нэр, email-ийг өөрийн мэдээллээр солино. GitHub ашиглах бол GitHub account-тайгаа холбоотой email сонгож болно. Password эсвэл token-оо git config-д бичихгүй.",
        "--global тохиргоо тухайн хэрэглэгчийн бүх repository-д үйлчилнэ. Сургуулийн хуваалцсан компьютер бол global тохиргоо хийхээс өмнө төхөөрөмжийн дүрмийг шалга.",
      ],
      blocks: [
        { title: "Git суусан эсэх ба identity тохиргоо", language: "bash", code: `git --version
git config --global user.name "Өөрийн нэр"
git config --global user.email "өөрийн@email.com"
git config --global --list`, note: "Placeholder нэр, email-ийг заавал өөрчил. Нууц үг, access token энд бичихгүй." },
      ],
    },
    {
      title: "3. Repository-ийн үндсэн урсгал",
      lead: "Командыг цээжлэхээс өмнө алхам бүр repository-ийн аль төлөвийг өөрчилдгийг ойлго.",
      paragraphs: [
        "git init нь current folder-д .git нэртэй түүхийн сан үүсгэнэ. Тиймээс init хийхийн өмнө pwd ба ls ажиллуулж зөв folder-т байгаагаа шалгана. Home folder эсвэл Documents-ийн root дээр санамсаргүй init хийхгүй.",
        "git add README.md зөвхөн тэр файлын одоогийн өөрчлөлтийг staging area-д оруулна. git commit staged өөрчлөлтөөс snapshot үүсгэнэ. Commit хийсний дараа git status clean болсон эсэх, git log --oneline-д commit харагдсан эсэхийг шалгана.",
      ],
      blocks: [
        { title: "git-practice repository үүсгэх", language: "bash", code: `cd ai-frontend-course/week-01
mkdir git-practice
cd git-practice
git init
git status
code .`, note: "Эхний cd зам таны workspace-ийн бодит байрлалаас хамаарч болно. git init-ээс өмнө current folder-оо шалга." },
        { title: "README-ийн эхний commit", language: "bash", code: `git status
git diff
git add README.md
git diff --staged
git commit -m "Add Git learning goals"
git log --oneline
git status`, note: "README.md файлыг эхлээд editor-оор үүсгэж хадгалсан байна." },
      ],
    },
    {
      title: "4. Branch, GitHub ба push",
      lead: "Git local түүх үүсгэдэг; GitHub тэр түүхийг network дээр хадгалж, хуваалцах үйлчилгээ.",
      paragraphs: [
        "Branch бол нэг түүхээс салсан ажлын шугам. Шинэ санаагаа main branch-ийг шууд өөрчлөхгүй туршихад хэрэглэж болно. Энэ хичээлд branch үүсгэх, сольж танихад хангалттай.",
        "GitHub руу push хийхэд эхлээд GitHub дээр хоосон repository үүсгэнэ. Дараа нь тэр repository-ийн HTTPS URL-ийг origin нэртэй remote болгон нэмнэ. Authentication нь browser эсвэл credential manager-аар явагдаж болно; password-оо command-д бичихгүй.",
      ],
      blocks: [
        { title: "Local branch дадлага", language: "bash", code: `git switch -c notes-update
git branch
git status`, note: "Одоогийн branch-ийн өмнө * тэмдэг харагдана." },
        { title: "GitHub remote — optional", language: "bash", code: `git branch -M main
git remote add origin https://github.com/USERNAME/git-practice.git
git remote -v
git push -u origin main`, note: "USERNAME ба URL-ийг өөрийн GitHub repository-ийн HTTPS URL-ээр солино. Repository-г GitHub дээр эхлээд хоосноор үүсгэ." },
      ],
    },
  ],
  glossary: [
    { term: "Repository", definition: "Project файл болон Git түүхийг агуулсан орчин." },
    { term: "Working tree", definition: "Одоо засаж буй файлуудын төлөв." },
    { term: "Staging area", definition: "Дараагийн commit-д оруулах сонгосон өөрчлөлт." },
    { term: "Commit", definition: "Нэр, зохиогч, хугацаатай snapshot." },
    { term: "Diff", definition: "Хоёр төлөвийн мөрийн өөрчлөлт." },
    { term: "Branch", definition: "Түүхийн тусдаа ажлын шугам." },
    { term: "Remote", definition: "Network дээрх repository-ийн холбоос." },
    { term: "Push", definition: "Local commit-уудаа remote руу илгээх үйлдэл." },
  ],
  exercises: [
    {
      title: "Удирдамжтай лаборатори: хоёр утгатай commit",
      duration: "45 минут",
      objective: "Нэг том өөрчлөлтийг хоёр логик commit болгон хуваах.",
      steps: ["README.md үүсгэж ‘Энэ repository-ийн зорилго’ гэсэн 3 мөр бичнэ.", "status → diff → add → staged diff → commit дарааллаар эхний commit хийнэ.", "Дараа нь commands.txt файл үүсгэж өнөөдрийн 5 command ба тайлбарыг бичнэ.", "Зөвхөн commands.txt-ийг add хийж хоёр дахь commit хийнэ.", "git log --oneline ажиллуулж хоёр commit-ийн message ялгаатай, утгатай эсэхийг шалгана."],
      blocks: [{ title: "Шалгах командын дараалал", language: "bash", code: `git status
git diff
git add README.md
git diff --staged
git commit -m "Explain repository purpose"

git status
git add commands.txt
git diff --staged
git commit -m "Document basic Git commands"
git log --oneline`, note: "commands.txt үүссэний дараа хоёр дахь хэсгийг ажиллуул." }],
      checks: ["git log --oneline-д 2 commit байна.", "Эхний commit зөвхөн README.md, хоёр дахь нь commands.txt агуулна.", "git status эцэстээ working tree clean гэж харуулна."],
      hint: "Ямар файл commit-д орохыг git diff --staged-ээр заавал шалга.",
      solution: "Commit message яг ижил байх албагүй. Нэрээс нь ямар өөрчлөлт орсныг ойлгож, хоёр файл тусдаа commit-д байвал зөв.",
    },
  ],
  aiLab: {
    title: "AI-ийн өөрчлөлтийг Git-ээр хянах сэтгэлгээ",
    purpose: "AI ашиглаагүй байсан ч diff унших дадлыг өнөөдрөөс эхлүүлэх.",
    prompt: `Доорх git diff-ийг code review хий.

[git diff output-оо энд хуул]

Надад:
1. Файл бүрт юу өөрчлөгдсөнийг энгийн хэлээр хэл.
2. Энэ diff нэг commit байх логик холбоотой эсэхийг дүгнэ.
3. Сайн commit message-ийн 3 хувилбар өг.

Command бүү ажиллуул. Миний өгөөгүй өөрчлөлтийг бүү зохио.`,
    steps: ["git diff output-оо нууц мэдээлэлгүй эсэхийг шалгаж хуулна.", "AI-ийн summary-г diff-ийн мөртэй тулгана.", "Commit message-ийг шууд авахгүй, өөрийн үгээр нэгийг сонгон засна."],
    checks: ["AI-ийн тайлбар diff-д байхгүй файл зохиогоогүй.", "Commit message өөрчлөлтийн шалтгааныг илэрхийлсэн."],
  },
  assignment: {
    title: "Git-ийн анхны хамгаалалтын тор",
    description: "Энэ хичээлээс эхлэн Git commit шаардах нь зөв. Өмнөх 1–2-р хичээлд commit шаардахгүй.",
    due: "4-р хичээл эхлэхээс өмнө · 40 минут",
    steps: ["git-practice repository дотор learning-log.md үүсгэнэ.", "Working, staging, commit гурвыг өөрийн үгээр тус бүр 2 өгүүлбэрээр тайлбарлана.", "git diff уншаад зөвхөн learning-log.md-ийг stage хийнэ.", "git commit -m \"Explain Git three-state workflow\" хийж log-оо шалгана.", "Optional: GitHub хоосон repository руу push хийнэ."],
    deliverables: ["learning-log.md", "Хамгийн багадаа 3 нийт commit", "git log --oneline output", "Optional GitHub URL"],
    criteria: ["Commit энэ хичээлээс эхэлж шаардагдсан", "Working/staging/commit зөв ялгасан", "Commit message утгатай", "git status clean"],
    starter: { title: "learning-log.md загвар", language: "text", code: `# Git-ийн гурван төлөв

## Working tree
[Өөрийн 2 өгүүлбэр]

## Staging area
[Өөрийн 2 өгүүлбэр]

## Commit
[Өөрийн 2 өгүүлбэр]

## Миний шалгах дараалал
1. git status
2. ...
` },
    blocks: [{ title: "Даалгаврыг шалгаж commit хийх", language: "bash", code: `git status
git diff
git add learning-log.md
git diff --staged
git commit -m "Explain Git three-state workflow"
git status
git log --oneline -3` }],
  },
  quiz: [
    { question: "git add commit үүсгэдэг үү?", answer: "Үгүй.", explanation: "git add өөрчлөлтийг staging area-д сонгоно; git commit snapshot үүсгэнэ." },
    { question: "git status яагаад аюулгүй эхний command вэ?", answer: "Repository-ийн одоогийн төлөвийг өөрчлөхгүй харуулдаг.", explanation: "Ямар branch, ямар файл staged/unstaged байгааг мэдээд дараагийн үйлдлээ шийднэ." },
    { question: "Git ба GitHub ижил үү?", answer: "Үгүй.", explanation: "Git local version-control system; GitHub remote hosting/collaboration service." },
    { question: "AI өөрчилсөн кодыг commit хийхийн өмнө юу хийх вэ?", answer: "diff-ийг уншиж, ажиллаж байгааг шалгана.", explanation: "Git буцаах боломж өгдөг ч ойлгоогүй өөрчлөлт нэгтгэх шалтгаан биш." },
  ],
  references: [{ label: "Git татах", url: "https://git-scm.com/downloads", note: "Өөрийн үйлдлийн системийн installer-ийг сонго." }],
};

const lesson4: DetailedLessonMaterial = {
  id: 4,
  goals: ["LLM дараагийн token-ийг таамаглан текст үүсгэдгийг энгийнээр тайлбарлах.", "Token, context window, training, inference, hallucination гэсэн ойлголтыг ялгах.", "AI хариултыг task, constraint, evidence-ээр чиглүүлж, баримтаар шалгах.", "Нууц мэдээлэл ба найдвартай байдлын эрсдэлийг таних."],
  outcome: "Та нэг AI хариултыг 4 шалгуураар аудитлаж, ‘AI ингэж хэлсэн’ ба ‘баримт үүнийг баталсан’ гэдгийг тусад нь бичиж чадна.",
  prerequisites: ["1-р хичээлийн вебийн үндэс", "2-р хичээлийн Node/npm — CLI суулгах бол", "3-р хичээлийн Git — audit тэмдэглэлээ commit хийхэд"],
  notRequired: ["LLM API key", "Machine learning математик", "Өөрийн model сургах", "Claude Code заавал суулгах"],
  preparation: "Ашиглах эрхтэй нэг AI чат байхад хангалттай. Account эсвэл төлбөргүй бол багийн demo хариулт дээр audit хийж болно.",
  tools: ["AI chat — аль нэг", "Browser", "Text editor", "Git — тэмдэглэлийн commit"],
  evidence: "Контекстгүй ба контексттэй prompt-ийн харьцуулалт, 4 баримтын audit хүснэгт, нэг Git commit.",
  schedule: [
    { start: "00:00", duration: 20, title: "AI юу хийж байна гэж боддог вэ?", description: "Өмнөх төсөөлөл, зөв ба буруу жишээгээр LLM-ийн хязгаарыг нээнэ." },
    { start: "00:20", duration: 35, title: "Token ба next-token prediction", description: "Text хэрхэн жижиг нэгж болж, model дараагийн хэсгийг магадлалаар сонгодгийг ойлгоно." },
    { start: "00:55", duration: 30, title: "Training, inference, context", description: "Сургах үе, ашиглах үе, тухайн conversation-д өгсөн context-ийн ялгааг зураглана." },
    { start: "01:25", duration: 10, title: "Завсарлага", description: "10 минут амарна.", kind: "break" },
    { start: "01:35", duration: 35, title: "Hallucination ба verification", description: "Итгэлтэй хэллэг үнэн баримт биш болохыг жишээгээр аудитлана." },
    { start: "02:10", duration: 35, title: "Prompt харьцуулах лаборатори", description: "Нэг task-ийг муу ба сайн context-тэй prompt-оор ажиллуулж ялгааг хэмжинэ.", kind: "ai" },
    { start: "02:45", duration: 15, title: "Хариуцлагатай ажлын урсгал", description: "Prompt → output → verify → decide гэсэн хувийн checklist үүсгэнэ." },
  ],
  chapters: [
    {
      title: "1. LLM бол текст таамаглагч",
      lead: "LLM хүн шиг ‘мэдэж’ хариулахын оронд өгөгдсөн context-д дараагийн token ямар байх магадлалыг тооцдог.",
      paragraphs: [
        "Token нь заавал бүтэн үг биш. Үг, үгийн хэсэг, тэмдэг байж болно. Model нэг token сонгосны дараа тэр token context-д нэмэгдэж дараагийн token-ийг дахин таамаглана. Ингэж урт хариулт үүснэ.",
        "Энэ механизм нь хэл найруулга сайтай хариулт гаргадаг ч бодит мэдээллийн сангаас үнэн мөр татаж байна гэсэн баталгаа биш. Магадлал өндөртэй, үнэмшилтэй хэллэг бодит бус байж болно.",
      ],
      points: ["Input text → token", "Context → магадлал", "Дараагийн token сонгоно", "Давтаж response үүсгэнэ"],
    },
    {
      title: "2. Training, inference ба context window",
      lead: "Model-ийн өмнөх сургалт ба таны одоогийн conversation хоёр өөр зүйл.",
      paragraphs: [
        "Training үед model маш их жишээнээс хэлний pattern сурна. Inference үед сургасан model таны prompt-д хариу үүсгэнэ. Нэг prompt бичсэнээр model-ийн үндсэн жин шууд дахин сурдаггүй.",
        "Context window нь model тухайн хариулт үүсгэхдээ нэг дор авч үзэж чадах token-ийн хязгаартай орон зай. Prompt, өмнөх message, хавсаргасан code, tool output бүгд context эзэлнэ. Чухал мэдээлэл дутвал model тааж нөхөх эрсдэл нэмэгдэнэ; хэт их хамааралгүй мэдээлэл өгвөл гол шаардлага бүдгэрнэ.",
      ],
    },
    {
      title: "3. Hallucination яагаад гардаг вэ?",
      lead: "Model-ийн зорилго ‘үнэн өгүүлбэр олох’ биш, тохирох дараагийн token үүсгэх тул баримт зохиож болно.",
      paragraphs: [
        "Hallucination гэдэг нь model байхгүй API, буруу command, зохиомол эх сурвалж, буруу тайлбар зэргийг итгэлтэй гаргах үзэгдэл. Илт худал зүйлээс гадна 90% зөв хариултын дунд 10% ноцтой алдаа байж болно.",
        "Verification-ийг model-оор өөрөөр нь ‘чи итгэлтэй юу?’ гэж асуугаад зогсоохгүй. Command-ийг official docs, code-ийг browser/compiler/test, веб ойлголтыг Network баримт, Git өөрчлөлтийг diff-ээр шалгана.",
      ],
      points: ["Итгэлтэй өнгө аяс = баталгаа биш", "Source өгсөн = source бодит гэсэн үг биш", "Ажилласан = бүх edge case зөв гэсэн үг биш", "Шалгах аргыг prompt-д урьдчилж заа"],
    },
    {
      title: "4. Инженерийн AI ажлын урсгал",
      lead: "Prompt бол эхлэл; шийдвэр гаргах хүртэл дөрвөн алхам бий.",
      paragraphs: [
        "Эхлээд task, context, constraint, expected output-оо өгнө. Дараа нь response-ийг жижиг хэсгээр уншина. Гуравдугаарт ажиллуулж эсвэл эх сурвалжтай тулгаж шалгана. Эцэст нь өөрөө хүлээн авах, өөрчлөх, татгалзах шийдвэр гаргана.",
        "API key, token, password, хэрэглэгчийн хувийн мэдээлэл, байгууллагын нууц кодыг зөвшөөрөлгүй AI үйлчилгээ рүү оруулахгүй. Ямар data илгээж байгаагаа ойлгохгүй бол эхлээд нууц хэсгийг арилгана.",
      ],
      blocks: [
        { title: "Дахин ашиглах AI review checklist", language: "text", code: `BEFORE
[ ] Task тодорхой юу?
[ ] Шаардлагатай context л орсон уу?
[ ] Нууц мэдээлэл арилсан уу?
[ ] Яаж шалгахаа мэдэж байна уу?

AFTER
[ ] Output шаардлага бүрийг хангасан уу?
[ ] Official docs / browser / test / diff-ээр шалгасан уу?
[ ] Би мөр, алхам бүрийг тайлбарлаж чадах уу?
[ ] Хүлээн авсан эсвэл татгалзсан шалтгаанаа бичсэн үү?` },
      ],
    },
    {
      title: "5. Claude Code — optional setup",
      lead: "CLI агент суулгах нь ойлголтын лабораториос тусдаа optional алхам; account боломжгүй бол хичээлээ бүрэн хийж болно.",
      paragraphs: [
        "Claude Code ашиглах бол Node.js суусан орчинд албан ёсны install command-ийг хэрэглэнэ. sudo npm install -g бүү ашигла; permission асуудал гарвал official troubleshooting заавар уншина.",
        "Суулгасны дараа version болон doctor command-аар орчноо шалгана. Authentication шаардагдаж болно. Энэ хичээлд агент өөрөөр нь project өөрчлүүлэхгүй; зөвхөн setup баталгаажуулна.",
      ],
      blocks: [
        { title: "Claude Code optional install", language: "bash", code: `npm install -g @anthropic-ai/claude-code
claude --version
claude doctor`, note: "Зөвхөн Claude Code ашиглах эрх, account байгаа үед. sudo бүү нэм." },
      ],
    },
  ],
  glossary: [
    { term: "LLM", definition: "Олон token-ийн pattern-оос дараагийн token таамаглан текст үүсгэдэг том хэлний model." },
    { term: "Token", definition: "Model текстийг боловсруулах жижиг нэгж." },
    { term: "Training", definition: "Model pattern сурах өмнөх үе." },
    { term: "Inference", definition: "Сургасан model prompt-д response үүсгэх үе." },
    { term: "Context window", definition: "Нэг response үүсгэхдээ model авч үзэх token-ийн хязгаартай орон зай." },
    { term: "Hallucination", definition: "Model бодит бус эсвэл буруу мэдээллийг үнэмшилтэй үүсгэх." },
    { term: "Prompt", definition: "Model-д өгсөн task, context, constraint болон оролт." },
    { term: "Verification", definition: "Output-ийг AI-аас үл хамаарах баримтаар шалгах үйл явц." },
  ],
  exercises: [
    {
      title: "Лаборатори: муу ба сайн prompt-ийг хэмжих",
      duration: "35 минут",
      objective: "Context ба шалгуур response-ийн чанарт ямар нөлөөтэйг харьцуулах.",
      steps: ["Эхлээд ‘Веб яаж ажилладаг вэ?’ гэсэн нэг өгүүлбэр prompt өгнө.", "Хариултаас DNS, request, response, status, rendering орсон эсэхийг тэмдэглэнэ.", "Дараа нь доорх бүтэцтэй prompt-ийг өгнө.", "Хоёр response-ийг 5 шалгуураар 0 эсвэл 1 оноо өгч харьцуулна.", "Сайн prompt ч буруу байж болох нэг өгүүлбэрийг Network лабораторийн баримтаар шалгана."],
      blocks: [{ title: "Контексттэй prompt", language: "prompt", code: `Би frontend-ийн 1-р хичээлээ үзсэн анхлан суралцагч.

Task: URL оруулснаас хуудас харагдах хүртэлх үйл явцыг 7 дугаартай алхмаар тайлбарла.
Заавал оруулах: URL, DNS, IP, HTTP request, server, HTTP response, browser rendering.
Хязгаарлалт: 250 үгээс ихгүй; нэр томьёо бүрийн ард 1 өгүүлбэр тайлбар бич.
Шалгалт: Эцэст нь browser Network tab-аас баталж болох 4 баримт жагсаа.
Тодорхой бус зүйл дээр таамаглал гэдгийг тэмдэглэ.` }],
      checks: ["Хоёр prompt-ийн response хадгалагдсан.", "DNS, request, response, status, rendering гэсэн 5 шалгуураар оноо өгсөн.", "Дор хаяж нэг claim-ийг AI-аас гадуур шалгасан."],
      hint: "Сайн бичсэн мэт харагдахыг биш, урьдчилж тогтоосон 5 шалгуур хангаж байгаа эсэхийг хэмж.",
      solution: "Контексттэй prompt ихэвчлэн бүтэц, шаардлагаа илүү бүрэн хангана. Гэхдээ баримтын зөв байдлыг тусад нь шалгах шаардлага хэвээр.",
    },
  ],
  aiLab: {
    title: "Итгэлтэй боловч буруу хариултыг таних",
    purpose: "AI өөрийн алдааг өөрөө үргэлж мэдэхгүйг баримтаар ойлгох.",
    prompt: `Доорх хариултыг senior engineer шиг аудитла.

[AI-ийн эхний response-оо энд хуул]

Claim бүрийг хүснэгт болго:
- Claim
- Миний шалгаж болох баримт
- Одоогоор батлагдсан эсэх: тийм / үгүй / тодорхойгүй
- Эрсдэлийн түвшин: бага / дунд / өндөр

Байхгүй source бүү зохио. Мэдэхгүй бол ‘тодорхойгүй’ гэж бич.`,
    steps: ["Эхний response-оос 4 claim сонгоно.", "AI-аар audit table гаргуулна.", "Дараа нь claim тус бүрийг lesson notes, Network tab эсвэл official docs-той өөрөө тулгана.", "AI-ийн audit өөрөө буруу байсан нэг боломжийг тэмдэглэнэ."],
    checks: ["‘Тодорхойгүй’ гэсэн сонголт ашигласан.", "Final шийдвэрийг AI биш суралцагч гаргасан."],
  },
  assignment: {
    title: "AI хариултын нотолгоотой audit",
    description: "Git үзсэн тул энэ хичээлээс audit тэмдэглэлээ commit хийнэ. API key эсвэл code заавал хэрэггүй.",
    due: "5-р хичээл эхлэхээс өмнө · 45–60 минут",
    steps: ["git-practice repository дотор lesson-04-ai-audit.md үүсгэнэ.", "Контекстгүй ба контексттэй prompt-оо хоёуланг нь хадгална.", "4 claim-ийн audit хүснэгтийг бөглөж, баримтын эх үүсвэрээ бичнэ.", "AI-ийн нэг зөв, нэг сул тал, өөрийн final шийдвэрээ тус бүр 2 өгүүлбэрээр бичнэ.", "diff-ээ уншаад git commit -m \"Audit an AI explanation with evidence\" хийнэ."],
    deliverables: ["lesson-04-ai-audit.md", "2 prompt-ийн харьцуулалт", "4 claim-ийн verification", "1 Git commit"],
    criteria: ["AI хариултыг сохроор хуулсангүй", "Claim ба evidence тусдаа", "Нууц мэдээлэл оруулаагүй", "Commit зөвхөн audit тэмдэглэл агуулсан"],
    starter: { title: "AI audit Markdown загвар", language: "text", code: `# Lesson 04 — AI response audit

## Prompt A — context багатай
[prompt]

## Prompt B — context ба шалгууртай
[prompt]

## Харьцуулалт
| Шалгуур | A | B |
|---|---:|---:|
| DNS зөв тайлбарласан | 0/1 | 0/1 |
| Request/response чиглэл зөв | 0/1 | 0/1 |
| Status дурдсан | 0/1 | 0/1 |
| Rendering тайлбарласан | 0/1 | 0/1 |
| Шалгах арга өгсөн | 0/1 | 0/1 |

## Claim audit
| Claim | Evidence | Дүгнэлт |
|---|---|---|
| 1 |  |  |
| 2 |  |  |
| 3 |  |  |
| 4 |  |  |

## Миний шийдвэр
[Юуг хүлээн авсан, юуг өөрчилсөн, яагаад?]
` },
    blocks: [{ title: "Audit тэмдэглэлээ commit хийх", language: "bash", code: `git status
git diff
git add lesson-04-ai-audit.md
git diff --staged
git commit -m "Audit an AI explanation with evidence"
git status` }],
  },
  quiz: [
    { question: "LLM хариу өгөх бүрдээ дахин training хийдэг үү?", answer: "Ерөнхийдөө үгүй.", explanation: "Prompt-д response үүсгэх нь inference; үндсэн model training-ээс өөр үе." },
    { question: "Итгэлтэй өнгө аястай response үнэн гэсэн баталгаа юу?", answer: "Үгүй.", explanation: "LLM магадлалтай token үүсгэдэг тул буруу мэдээллийг ч итгэлтэй бичиж болно." },
    { question: "Context window-д юу ордог вэ?", answer: "Prompt, conversation, хавсралт, tool output зэрэг тухайн response-д өгсөн мэдээлэл.", explanation: "Бүгд token ашигладаг, хэмжээ хязгаартай." },
    { question: "AI-ийн command-ийг яаж шалгах вэ?", answer: "Official docs, аюулгүй test орчин, command-ийн тайлбар ба output-оор.", explanation: "AI-аас өөр эх үүсвэр/ажиглалтаар батална." },
  ],
  references: [{ label: "Claude Code official setup", url: "https://docs.anthropic.com/en/docs/claude-code/getting-started", note: "Optional install ба troubleshooting-ийг албан ёсны заавраас шалга." }],
};

const lesson5: DetailedLessonMaterial = {
  id: 5,
  goals: [
    "HTML баримтын үндсэн бүтцийг алдаагүй бичих.",
    "Агуулгын утгад тохирсон semantic element сонгох.",
    "Heading-ийн зөв дараалал, landmark бүтцээр хүртээмжийг дэмжих.",
    "Browser ба validator ашиглан HTML-ээ өөрөө шалгах.",
  ],
  outcome:
    "Хичээлийн төгсгөлд та CSS, JavaScript ашиглалгүй утга зүйн зөв бүтэцтэй нэг хуудас бүтээж, element бүрээ яагаад сонгосноо тайлбарлаж чадна.",
  prerequisites: [
    "2-р хичээл: editor, файл ба хавтас үүсгэх",
    "3-р хичээл: git status, add, commit",
    "1-р хичээл: browser HTML response-ийг дүрсэлдгийг ойлгох",
  ],
  notRequired: ["CSS дизайн", "JavaScript", "Responsive layout", "Framework"],
  preparation:
    "lesson-05-html нэртэй шинэ хавтас үүсгээд VS Code-оор нээнэ. Энэ хичээлээс хийсэн ажлаа Git commit-оор хадгална.",
  tools: ["VS Code", "Browser", "Browser DevTools → Elements", "Git"],
  evidence:
    "Алдаагүй нээгддэг index.html, semantic audit тэмдэглэл, утгатай нэг Git commit.",
  schedule: [
    { start: "00:00", duration: 15, title: "Бүтэц ажиглах", description: "Нэг мэдээний хуудсыг гарчиг, навигаци, үндсэн агуулга, нэмэлт мэдээлэл, footer гэж хэсэгчлэн зурна." },
    { start: "00:15", duration: 40, title: "HTML баримтын араг яс", description: "DOCTYPE, html, head, meta, title, body болон element, attribute, nesting-ийг сурна." },
    { start: "00:55", duration: 30, title: "Semantic HTML", description: "header, nav, main, section, article, aside, footer болон heading hierarchy-г жишээгээр ялгана." },
    { start: "01:25", duration: 10, title: "Завсарлага", description: "Дэлгэцээс холдож 10 минут амарна.", kind: "break" },
    { start: "01:35", duration: 40, title: "Удирдамжтай бүтээл", description: "Бэлэн кодыг ажиллуулаад мөр бүрийн утгыг тайлбарлан өөрчилнө.", kind: "practice" },
    { start: "02:15", duration: 30, title: "Semantic audit", description: "div-ээр дүүрсэн бүтцийг утгатай element-үүдээр засаж, keyboard ба document outline-ийг шалгана.", kind: "practice" },
    { start: "02:45", duration: 15, title: "Self-check ба commit", description: "Шалгах хуудсаар ажлаа нягтлаад diff-ээ уншиж commit хийнэ." },
  ],
  chapters: [
    {
      title: "1. HTML юу хариуцдаг вэ?",
      lead: "HTML нь хуудас ямар харагдахыг биш, агуулга юу болох болон хэсгүүд хоорондоо ямар холбоотойг илэрхийлнэ.",
      paragraphs: [
        "Browser HTML-ийг дээрээс доош уншиж document tree үүсгэнэ. Element-үүд зөв үүрэгтэй байвал browser, хайлтын систем, screen reader бүгд агуулгын бүтцийг илүү зөв ойлгоно.",
        "Element нь нээх tag, агуулга, хаах tag-аас бүрддэг. Attribute нь element-д нэмэлт мэдээлэл өгнө. Жишээ нь anchor-ийн href нь хаашаа очихыг, html-ийн lang нь баримтын хэлийг заана.",
        "HTML-ийг зөвхөн харагдах байдлаар нь шалгаж болохгүй. Буруу nesting эсвэл дутуу label-тэй хуудас нүдэнд хэвийн харагдаж болох ч машинд ойлгомжгүй байдаг.",
      ],
      points: [
        "HTML = бүтэц ба утга",
        "CSS = харагдах байдал; дараагийн хичээлүүдэд орно",
        "JavaScript = үйлдэл ба төлөв; одоохондоо шаардахгүй",
        "Indentation нь browser-т заавал хэрэгтэй биш ч хүнд бүтцийг алдаагүй уншихад хэрэгтэй",
      ],
    },
    {
      title: "2. Баримтын зайлшгүй үндсэн бүтэц",
      lead: "Шинэ HTML файл бүр ойлгомжтой, давтагдах араг ястай эхэлнэ.",
      paragraphs: [
        "<!doctype html> нь орчин үеийн HTML дүрмээр уншихыг browser-т хэлнэ. <html lang=\"mn\"> нь бүх баримтын root бөгөөд Монгол хэлтэйг туслах технологид мэдэгдэнэ.",
        "head дотор хэрэглэгчийн үндсэн агуулга биш, баримтын тухай metadata орно. UTF-8 charset нь Монгол кирилл үсгийг зөв дүрслэхэд чухал. viewport meta нь жижиг дэлгэц дээр browser-ийн хэмжээсийг зөв тооцоход тусална. title нь browser tab болон хайлтын үр дүнд ашиглагдана.",
        "body дотор хэрэглэгчийн харж, сонсож, ашиглах агуулга орно. Нээсэн element-ээ зөв дарааллаар хаах хэрэгтэй: дотор нээгдсэн element эхэлж хаагдана.",
      ],
      blocks: [
        {
          title: "Хамгийн жижиг зөв HTML баримт",
          language: "html",
          code: `<!doctype html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Миний хичээлийн тэмдэглэл</title>
  </head>
  <body>
    <h1>Миний хичээлийн тэмдэглэл</h1>
    <p>Энэ бол утгатай HTML хуудасны эхлэл.</p>
  </body>
</html>`,
          note: "index.html нэрээр хадгалаад файл дээр double-click хийхэд browser-т нээгдэнэ.",
        },
      ],
    },
    {
      title: "3. Semantic element сонгох",
      lead: "Element-ийг хэлбэрээр нь биш, агуулгын үүргээр нь сонгоно.",
      paragraphs: [
        "header нь хуудас эсвэл хэсгийн танилцуулга, nav нь гол холбоосууд, main нь тухайн хуудасны давтагдашгүй үндсэн агуулга, footer нь төгсгөлийн мэдээллийг илэрхийлнэ. Нэг хуудсанд ихэвчлэн нэг main байна.",
        "article нь дангаараа түгээж болох бүтэн агуулга; section нь нэг сэдэвтэй бүлэг бөгөөд ихэвчлэн өөрийн heading-тэй. aside нь үндсэн агуулгатай холбоотой боловч тусдаа авч үзэж болох нэмэлт мэдээлэл.",
        "div нь утгагүй ерөнхий сав. Утгатай element тохирохгүй үед div хэрэглэх нь буруу биш. Харин nav, article, button байхад зөвхөн style хийхийн тулд бүгдийг div болгох нь мэдээллийн утгыг алдана.",
      ],
      points: [
        "Энэ хэсэг хуудасны гол навигаци уу? → nav",
        "Бусдаас тусдаа нийтэлж болох уу? → article",
        "Нэг сэдэвтэй бүлэг бөгөөд гарчигтай юу? → section",
        "Зөв semantic сонголт байхгүй юу? → div байж болно",
      ],
    },
    {
      title: "4. Heading hierarchy ба холбоос",
      lead: "Heading нь текстийг том болгох хэрэгсэл биш; баримтын агуулгын шатлал юм.",
      paragraphs: [
        "h1 нь хуудасны ерөнхий сэдэв, h2 нь түүний үндсэн дэд хэсэг, h3 нь h2-ын доторх хэсгийг илэрхийлнэ. Хэмжээ таалагдаагүй учраас h2-оос h4 рүү үсрэхгүй; харагдах хэмжээг CSS-ээр дараа нь өөрчилнө.",
        "a element нь өөр хаяг эсвэл хуудасны өөр хэсэг рүү шилжүүлдэг. Холбоосын текст ‘энд дар’ гэхээс илүү очих газраа хэлсэн ‘HTML reference унших’ гэх мэт тодорхой байх ёстой.",
      ],
    },
    {
      title: "5. Бүрэн ажиллах хуудас",
      lead: "Эхлээд кодыг яг хэвээр ажиллуул; дараа нь агуулгыг өөрчилж element бүрийн үүргийг тайлбарла.",
      paragraphs: [
        "Доорх код нь CSS-гүй учраас энгийн харагдана. Энэ нь алдаа биш: өнөөдрийн зорилго харагдах байдал бус, semantic бүтэц.",
        "Файлаа хадгалаад browser-т refresh хийнэ. DevTools-ийн Elements хэсгээс таны бичсэн element-үүд ямар tree болсон байгааг ажиглана.",
      ],
      blocks: [
        {
          title: "index.html — semantic хичээлийн хуудас",
          language: "html",
          code: `<!doctype html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Frontend суралцах тэмдэглэл</title>
  </head>
  <body>
    <header>
      <a href="#main-content">Үндсэн агуулга руу очих</a>
      <p>AI-Native Frontend</p>
      <nav>
        <a href="#about">Тухай</a>
        <a href="#lessons">Хичээлүүд</a>
        <a href="#next-step">Дараагийн алхам</a>
      </nav>
    </header>

    <main id="main-content">
      <section id="about">
        <h1>Миний frontend суралцах зам</h1>
        <p>Би вебийн үндсийг ойлгож, нотолгоотойгоор суралцаж байна.</p>
      </section>

      <section id="lessons">
        <h2>Сурсан хичээлүүд</h2>
        <article>
          <h3>Веб хэрхэн ажилладаг вэ?</h3>
          <p>Browser request илгээж, server response буцаадаг.</p>
        </article>
        <article>
          <h3>Git-ийн үндэс</h3>
          <p>Commit нь төслийн утгатай нэг үеийн snapshot юм.</p>
        </article>
      </section>

      <aside>
        <h2>Сануулах зүйл</h2>
        <p>AI-ийн санал бүрийг ажиллуулж, өөрөө шалгана.</p>
      </aside>

      <section id="next-step">
        <h2>Дараагийн алхам</h2>
        <ol>
          <li>Semantic HTML давтах</li>
          <li>Form ба label сурах</li>
          <li>CSS-ээр харагдах байдлыг удирдах</li>
        </ol>
      </section>
    </main>

    <footer>
      <p><small>Суралцах тэмдэглэл · 2026</small></p>
    </footer>
  </body>
</html>`,
        },
      ],
    },
  ],
  glossary: [
    { term: "Element", definition: "HTML баримтын утга, бүтцийг илэрхийлэх нэгж." },
    { term: "Attribute", definition: "Element-д нэмэлт тохиргоо эсвэл мэдээлэл өгдөг name/value." },
    { term: "Nesting", definition: "Нэг element-ийг нөгөөгийн дотор зөв дарааллаар байрлуулах." },
    { term: "Semantic HTML", definition: "Агуулгын үүргийг нэрээрээ илэрхийлсэн element ашиглах арга." },
    { term: "Landmark", definition: "nav, main зэрэг хэрэглэгчийг баримтаар чиглүүлэх томоохон semantic хэсэг." },
    { term: "Heading hierarchy", definition: "h1–h6-аар агуулгын шатлалыг логик дарааллаар илэрхийлэх." },
  ],
  exercises: [
    {
      title: "Дасгал: div soup-ийг semantic бүтэц болгох",
      duration: "30 минут",
      objective: "Element-ийг харагдах байдлаар биш үүргээр нь сонгох.",
      steps: [
        "Доорх эх кодыг index.html-ийн body дотор туршина.",
        "menu class-тай хэсгийг тохирох landmark болгоно.",
        "content class-тай хэсгийг хуудасны давтагдашгүй үндсэн агуулга болгоно.",
        "post бүрийг тусдаа нийтэлж болох element болгоно.",
        "title class-тай текстүүдийг логик heading болгоно.",
        "DevTools → Elements-оос эцсийн tree-г шалгана.",
      ],
      blocks: [
        {
          title: "Засах эх код",
          language: "html",
          code: `<div class="menu">
  <a href="/">Нүүр</a>
  <a href="/lessons">Хичээл</a>
</div>
<div class="content">
  <div class="title">Шинэ тэмдэглэлүүд</div>
  <div class="post">
    <div class="title">HTML сурсан нь</div>
    <div>Element бүр үүрэгтэй.</div>
  </div>
</div>`,
        },
      ],
      checks: [
        "nav дотор холбоосууд орсон.",
        "Нэг main ашигласан.",
        "Нийтлэл article болсон.",
        "Heading нь h1 → h2 гэсэн логик дараалалтай.",
        "Зөвхөн class нэр солиогүй, element-ийг өөрчилсөн.",
      ],
      hint: "menu → nav, content → main, post → article гэж эхлээд бод; title бүр ижил түвшний heading биш.",
      solution: "nav, main, h1, article, h2, p гэсэн бүтэц боломжит зөв хувилбар. Гол нь element бүр агуулгын үүргээ зөв илэрхийлсэн байх ёстой.",
    },
  ],
  aiLab: {
    title: "AI-аар semantic review хийлгээд шийдвэрийг өөрөө гаргах",
    purpose: "AI element сольсон шалтгаанаа тайлбарлаж чадаж байгаа эсэхийг шалгах.",
    prompt: `Та accessibility-д анхаардаг HTML reviewer.

Доорх HTML-ийг semantic утгаар нь аудитла:
[ЭНД ӨӨРИЙН HTML-ЭЭ ХУУЛ]

Гаралт:
1. Асуудал — яг аль element
2. Яагаад асуудал вэ
3. Хамгийн жижиг засвар
4. Засварыг browser DevTools-оор яаж шалгах

CSS, JavaScript бүү нэм. Зөв байгаа element-ийг шалтгаангүй бүү соль.`,
    steps: [
      "Эхлээд AI-гүйгээр өөрийн audit хийнэ.",
      "Prompt-д өөрийн HTML-ээ оруулж response авна.",
      "Санал бүрийг element-ийн бодит үүрэгтэй тулгана.",
      "Хүлээн авсан ба татгалзсан саналаа шалтгаантай тэмдэглэнэ.",
    ],
    checks: ["AI бүх div-ийг заавал semantic element болгоогүй.", "Эцсийн HTML-ийг browser-т өөрөө шалгасан."],
  },
  assignment: {
    title: "Semantic суралцагчийн профайл",
    description:
      "CSS, JavaScript хэрэглэхгүйгээр өөрийн суралцах зорилго, үзсэн хичээл, дараагийн алхмыг утгатай HTML бүтэцтэй нэг хуудсаар илэрхийл.",
    due: "6-р хичээл эхлэхээс өмнө · 60–75 минут",
    steps: [
      "lesson-05-profile хавтас болон index.html үүсгэнэ.",
      "lang, charset, viewport, title-тай бүрэн баримтын бүтэц бичнэ.",
      "header, nav, main, дор хаяж 2 section, 1 article, footer ашиглана.",
      "Нэг h1, логик h2/h3 дараалал, утгатай link text ашиглана.",
      "Browser ба Elements хэсгээр nesting-ээ шалгана.",
      "git diff-ээ уншаад git add index.html; git commit -m \"Build semantic learning profile\" хийнэ.",
    ],
    deliverables: ["index.html", "Зөв semantic landmarks", "Логик heading hierarchy", "1 утгатай Git commit"],
    criteria: ["HTML browser-т алдаагүй нээгдэнэ", "Element сонголт агуулгын үүрэгтэй таарна", "CSS/JS оруулаагүй", "Commit зөвхөн энэ даалгаврын өөрчлөлттэй"],
    starter: {
      title: "Даалгаврын эхлэл",
      language: "html",
      code: `<!doctype html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>[Таны нэр] — суралцах профайл</title>
  </head>
  <body>
    <!-- header, nav, main, section/article, footer-оо энд утгаар нь бүтээ -->
  </body>
</html>`,
    },
    blocks: [{ title: "HTML даалгавраа commit хийх", language: "bash", code: `git status
git diff
git add index.html
git diff --staged
git commit -m "Build semantic learning profile"
git status` }],
  },
  quiz: [
    { question: "HTML ба CSS-ийн үндсэн хариуцлага юугаараа ялгаатай вэ?", answer: "HTML бүтэц ба утга; CSS харагдах байдал.", explanation: "Heading-ийг том харагдуулахын тулд биш, агуулгын түвшинг илэрхийлэхийн тулд сонгоно." },
    { question: "main element нэг хуудсанд юу илэрхийлэх вэ?", answer: "Тухайн хуудасны давтагдашгүй үндсэн агуулга.", explanation: "Header, nav, footer зэрэг давтагдах хэсэг main-ийн гадна байж болно." },
    { question: "Бүх div-ийг semantic element болгох ёстой юу?", answer: "Үгүй.", explanation: "Тохирох semantic утга байхгүй ерөнхий wrapper-д div зөв сонголт байж болно." },
    { question: "h1-ээс h3 рүү хэмжээнээс болж үсэрч болох уу?", answer: "Үгүй.", explanation: "Heading level нь шатлал; хэмжээг CSS-ээр удирдана." },
  ],
  references: [
    { label: "MDN — HTML elements reference", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements", note: "Element бүрийн утга ба хэрэглээг шалгах лавлах." },
    { label: "WHATWG HTML Standard", url: "https://html.spec.whatwg.org/", note: "HTML-ийн албан ёсны living standard." },
  ],
};

const lesson6: DetailedLessonMaterial = {
  id: 6,
  goals: [
    "Form control бүрийг харагдах label-тай зөв холбох.",
    "name, value, type, required attribute-ийн үүргийг ялгах.",
    "fieldset, legend ашиглан холбоотой сонголтыг бүлэглэх.",
    "Keyboard болон browser-ийн native validation-аар form-оо шалгах.",
  ],
  outcome:
    "Хичээлийн төгсгөлд та JavaScript-гүй, keyboard-аар бүрэн ашиглаж болох бүртгэлийн form бүтээж, browser ямар өгөгдөл илгээхийг тайлбарлаж чадна.",
  prerequisites: [
    "5-р хичээл: HTML баримтын бүтэц ба semantic element",
    "label, input зэрэг шинэ element-ийн нэрийг лавлахаас айхгүй байх",
    "3-р хичээл: өөрчлөлтөө diff-ээр шалгаж commit хийх",
  ],
  notRequired: ["JavaScript validation", "Backend/database", "CSS дизайн", "Form-ийг бодитоор server рүү хадгалах"],
  preparation:
    "lesson-06-form нэртэй хавтас үүсгэж, өмнөх хичээлийн зөв HTML араг ясыг ашиглана.",
  tools: ["VS Code", "Browser", "Keyboard", "Browser DevTools", "Git"],
  evidence:
    "Keyboard-аар бөглөж болдог form.html, native validation-ийн шалгалт, accessibility audit, нэг Git commit.",
  schedule: [
    { start: "00:00", duration: 15, title: "Form-ийн зорилго", description: "Form-оор цуглуулах мэдээлэл ба зайлшгүй/заавал бус талбаруудыг эхлээд цаасан дээр тодорхойлно." },
    { start: "00:15", duration: 35, title: "Form ба өгөгдлийн үндэс", description: "form, action, method, label, input, name, value-ийн холбоог ойлгоно." },
    { start: "00:50", duration: 35, title: "Control ба бүлэглэл", description: "input type, textarea, select, radio, checkbox, fieldset, legend-ийг зөв сонгоно." },
    { start: "01:25", duration: 10, title: "Завсарлага", description: "Дэлгэцээс холдож 10 минут амарна.", kind: "break" },
    { start: "01:35", duration: 40, title: "Удирдамжтай form бүтээх", description: "Бүрэн кодыг ажиллуулж, label болон native validation-ийг туршина.", kind: "practice" },
    { start: "02:15", duration: 30, title: "Keyboard accessibility audit", description: "Mouse ашиглалгүй Tab, Shift+Tab, Space, Enter-ээр бүх form-ыг шалгана.", kind: "practice" },
    { start: "02:45", duration: 15, title: "Self-check ба commit", description: "Form data, validation, keyboard шалгалтаа тэмдэглээд өөрчлөлтөө commit хийнэ." },
  ],
  chapters: [
    {
      title: "1. Form бол асуулт ба хариултын бүтэц",
      lead: "Сайн form хэрэглэгчээс зөвхөн шаардлагатай мэдээллийг ойлгомжтой дарааллаар асууна.",
      paragraphs: [
        "form element нь холбоотой control-уудын сав. action нь submit хийхэд өгөгдөл очих URL, method нь GET эсвэл POST зэрэг илгээх аргыг заана. Энэ хичээлд backend байхгүй тул submit-ийн дараа хадгалагдахгүй; бид бүтэц болон browser-ийн зан төлөвийг сурна.",
        "Input-ийн name нь өгөгдлийн түлхүүр, хэрэглэгчийн оруулсан эсвэл сонгосон value нь утга болно. name байхгүй control харагдаж, бөглөгдөж болох ч form submit хийхэд өгөгдөлд орохгүй байж болно.",
        "Placeholder нь жишээ эсвэл hint байж болох ч label-ийг орлохгүй. Хэрэглэгч бичиж эхлэхэд placeholder алга болдог, screen reader болон санах ойд түшиглэсэн хэрэглэгчид талбарын утгыг алдах эрсдэлтэй.",
      ],
      points: [
        "label = талбар юу асууж байгааг үргэлж харагдуулна",
        "id = тухайн control-ийг баримт дотор давтагдашгүй танина",
        "label for = ижил id-тай control-той холбоно",
        "name = submit болох өгөгдлийн key",
        "value = хэрэглэгчийн оруулсан/сонгосон өгөгдөл",
      ],
    },
    {
      title: "2. Зөв control сонгох",
      lead: "Хэрэглэгчийн хариултын төрөл control-ийн төрлийг шийднэ.",
      paragraphs: [
        "Нэг мөр чөлөөт текстэд text, и-мэйлд email, огноонд date, урт тайлбарт textarea тохирно. Browser email болон date type-д төхөөрөмжид тохирсон input UI, суурь validation өгөх боломжтой.",
        "Select нь хязгаарлагдмал жагсаалтаас нэг утга сонгоход тохиромжтой. Radio нь жижиг сонголтоос яг нэгийг, checkbox нь бие даасан тийм/үгүй эсвэл олон сонголтыг илэрхийлнэ.",
        "Холбоотой radio эсвэл checkbox-уудыг fieldset дотор хийж, асуултыг legend-ээр өгнө. Radio-нууд ижил name-тэй байж нэг бүлэг болдог ч id бүр давтагдашгүй байна.",
      ],
    },
    {
      title: "3. Native validation ба алдааны ойлгомж",
      lead: "Эхлээд browser-ийн бэлэн боломжийг зөв ашигла; custom JavaScript validation дараагийн сэдэв.",
      paragraphs: [
        "required нь хоосон submit хийхийг browser-оор хориглоно. type=email нь и-мэйл хэлбэрийг, minlength/maxlength нь текстийн уртыг, min/max нь тоон эсвэл огнооны хязгаарыг шалгахад тусална.",
        "Native validation нь хэрэглэгчийн туршлагын эхний давхарга боловч security биш. Бодит бүтээгдэхүүн backend талд өгөгдлийг дахин шалгах ёстой. Backend хараахан үзээгүй тул энэ хичээлд зөвхөн browser талын зан төлөвийг ажиглана.",
        "Алдааны текст зөвхөн улаан өнгөөр ялгарах ёсгүй. Ямар талбарт юу засахыг текстээр тодорхой хэлэх хэрэгтэй. Browser-ийн default message хэл, browser-оос хамаарч ялгаатай байж болно.",
      ],
    },
    {
      title: "4. Keyboard хүртээмжийн үндэс",
      lead: "Mouse ашиглаж чадахгүй хэрэглэгч form-ийн бүх хэсэгт хүрч, ойлгож, submit хийж чадах ёстой.",
      paragraphs: [
        "Tab дарахад interactive control-ууд логик дарааллаар focus авна; Shift+Tab буцна. Space нь checkbox/radio-г сонгох, Enter нь button дарах эсвэл form submit хийхэд ашиглагдаж болно.",
        "Native button, input, select ашиглавал keyboard зан төлөв үнэгүй ирнэ. Click handler-тай div хийх нь энэ зан төлөв, role, focus-ийг гараар дахин бүтээх шаардлага үүсгэнэ.",
        "HTML source-ийн дараалал логик байвал default tab order мөн логик байна. Эерэг tabindex утгаар дарааллыг хүчээр өөрчлөхөөс зайлсхий.",
      ],
    },
    {
      title: "5. Бүрэн ажиллах бүртгэлийн form",
      lead: "Кодыг form.html нэрээр хадгалаад browser-т нээнэ; submit-ийн өмнө болон дараа browser-ийн зан төлөвийг ажигла.",
      paragraphs: [
        "action хоосон тул амжилттай submit хийвэл энэ хуудсаа дахин нээж болно. Бидний шалгах зүйл өгөгдөл хадгалагдах эсэх биш, control бүр label-тай, зөв group-тэй, required дүрэм ажиллаж байгаа эсэх.",
        "Эхлээд бүх required талбарыг хоосон орхиод submit дар. Дараа нь буруу email, эцэст нь зөв утга оруулж ялгааг тэмдэглэ.",
      ],
      blocks: [
        {
          title: "form.html — хүртээмжтэй бүртгэлийн form",
          language: "html",
          code: `<!doctype html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Хичээлд бүртгүүлэх</title>
  </head>
  <body>
    <main>
      <h1>Хичээлд бүртгүүлэх</h1>
      <p id="required-note">* тэмдэгтэй талбарыг заавал бөглөнө.</p>

      <form action="" method="get">
        <p>
          <label for="full-name">Овог нэр *</label><br />
          <input id="full-name" name="fullName" type="text" autocomplete="name" required />
        </p>

        <p>
          <label for="email">И-мэйл *</label><br />
          <input id="email" name="email" type="email" autocomplete="email" required />
        </p>

        <p>
          <label for="start-date">Эхлэх боломжтой огноо</label><br />
          <input id="start-date" name="startDate" type="date" />
        </p>

        <p>
          <label for="experience">Туршлагын түвшин *</label><br />
          <select id="experience" name="experience" required>
            <option value="">Сонгоно уу</option>
            <option value="new">Анхлан суралцагч</option>
            <option value="some">Бага зэрэг туршлагатай</option>
            <option value="regular">Тогтмол код бичдэг</option>
          </select>
        </p>

        <fieldset>
          <legend>Сурах хэлбэр *</legend>
          <label><input name="studyMode" type="radio" value="self" required /> Бие даан</label>
          <label><input name="studyMode" type="radio" value="pair" /> Хосоор</label>
        </fieldset>

        <p>
          <label for="goal">12 долоо хоногийн зорилго *</label><br />
          <textarea id="goal" name="goal" rows="5" minlength="20" required></textarea>
        </p>

        <p>
          <label>
            <input name="agreement" type="checkbox" required />
            Би долоо хоног бүр дадлага хийхийг зөвшөөрч байна. *
          </label>
        </p>

        <button type="submit">Бүртгүүлэх</button>
      </form>
    </main>
  </body>
</html>`,
        },
      ],
    },
  ],
  glossary: [
    { term: "Form control", definition: "input, select, textarea, button зэрэг хэрэглэгчтэй харилцах element." },
    { term: "Label", definition: "Control ямар мэдээлэл авахыг нэрлэж, for/id-гаар түүнтэй холбогдох текст." },
    { term: "Name", definition: "Form submit болоход өгөгдлийн key болох attribute." },
    { term: "Value", definition: "Тухайн name-ийн хамт илгээгдэх хэрэглэгчийн утга." },
    { term: "Validation", definition: "Оролт тогтоосон дүрэм хангаж байгаа эсэхийг шалгах үйл явц." },
    { term: "Focus", definition: "Keyboard-ийн дараагийн үйлдлийг одоо хүлээн авах interactive element-ийн төлөв." },
  ],
  exercises: [
    {
      title: "Лаборатори: keyboard-only audit",
      duration: "30 минут",
      objective: "Mouse хүрэлгүйгээр form бүрэн ашиглагдаж байгааг нотолгоотой шалгах.",
      steps: [
        "Browser page-ээ refresh хийгээд mouse-аа хажуу тийш тавина.",
        "Tab дарж эхний control руу орно; focus хаана байгааг тэмдэглэнэ.",
        "Tab-аар бүх control-оор дарааллаар явж, label-ийг уншиж ойлгож болох эсэхийг шалгана.",
        "Radio-г arrow key эсвэл Space, checkbox-ийг Space-аар сонгоно.",
        "Required талбарыг нэгийг хоосон үлдээгээд button дээр Enter дарна.",
        "Browser аль control руу focus шилжүүлж, ямар message үзүүлснийг тэмдэглэнэ.",
      ],
      checks: [
        "Бүх interactive element focus авсан.",
        "Focus source дарааллаар логик шилжсэн.",
        "Control бүрийн асуултыг label/legend-ээс ойлгосон.",
        "Keyboard-аар сонголт ба submit хийсэн.",
        "Хоосон required талбар submit-ийг зогсоосон.",
      ],
      hint: "Focus огт харагдахгүй бол CSS нэмээгүй учраас browser-ийн default outline харагдах ёстой. Харагдахгүй бол browser setting/theme-ээ тэмдэглэ.",
      solution: "Tab order нь full name → email → date → select → radio → goal → checkbox → submit гэсэн HTML source-той ойролцоо логик дараалалтай байна.",
    },
  ],
  aiLab: {
    title: "Form accessibility review",
    purpose: "AI-ийн ерөнхий зөвлөгөөг яг element, яг шалгах алхамтай actionable audit болгох.",
    prompt: `Та HTML form accessibility reviewer.

Доорх form-ийг зөвхөн одоо байгаа HTML түвшинд аудитла:
[ЭНД FORM-ЫН HTML-ЭЭ ХУУЛ]

Шалгах зүйл:
- label ↔ id холбоо
- name ба value
- fieldset/legend
- required ба input type
- keyboard ашиглалт

Асуудал бүрд яг мөр/element, шалтгаан, хамгийн жижиг HTML засвар, keyboard-аар шалгах алхам өг.
JavaScript, CSS, backend бүү нэм.`,
    steps: ["Өөрийн checklist-ээр түрүүлж шалгана.", "AI review авна.", "Санал бүрийг browser-т нэг нэгээр туршина.", "Ажиллаагүй эсвэл хэрэггүй саналыг шалтгаантай татгалзана."],
    checks: ["AI-ийн санал бүр бодит element-тэй холбогдсон.", "Засварын дараа keyboard audit-аа дахин хийсэн."],
  },
  assignment: {
    title: "Хүртээмжтэй сургалтын хүсэлтийн form",
    description:
      "Хэрэглэгчээс нэр, холбоо барих мэдээлэл, сурах зорилго, цагийн сонголт авах JavaScript-гүй form бүтээнэ.",
    due: "7-р хичээл эхлэхээс өмнө · 60–75 минут",
    steps: [
      "form.html баримтаа зөв lang, charset, viewport, title-тай эхлүүлнэ.",
      "Нэр, email, сурах зорилго гэсэн text/email/textarea control үүсгэнэ.",
      "Дор хаяж нэг select, нэг radio group, нэг checkbox нэмнэ.",
      "Control бүрт label; radio group-т fieldset/legend өгнө.",
      "Required талбар болон буруу email-ийг зориуд туршина.",
      "Mouse ашиглалгүй бүх form-ыг бөглөж submit хийж үзнэ.",
      "git diff-ээ уншаад git commit -m \"Build accessible course request form\" хийнэ.",
    ],
    deliverables: ["form.html", "6-аас цөөнгүй зөв label-тай control", "Keyboard audit тэмдэглэл", "1 Git commit"],
    criteria: ["Label/id холбоо алдаагүй", "Name бүр утгатай", "Radio group fieldset/legend-тэй", "Native validation ажиллана", "Mouse-гүй ашиглаж болно"],
    starter: {
      title: "Form section-ийн эхлэл",
      language: "html",
      code: `<form action="" method="get">
  <p>
    <label for="name">Нэр *</label>
    <input id="name" name="name" type="text" required />
  </p>

  <!-- email, зорилго, select, radio group, checkbox-оо энд нэм -->

  <button type="submit">Хүсэлт илгээх</button>
</form>`,
    },
    blocks: [{ title: "Form даалгавраа commit хийх", language: "bash", code: `git status
git diff
git add form.html
git diff --staged
git commit -m "Build accessible course request form"
git status` }],
  },
  quiz: [
    { question: "Placeholder label-ийг орлож болох уу?", answer: "Үгүй.", explanation: "Бичиж эхлэхэд placeholder алга болдог; label тогтвортой нэр өгнө." },
    { question: "label-ийн for утга юутай таарах вэ?", answer: "Холбогдох control-ийн id-тай.", explanation: "Label дээр дарахад control focus авах нь холбоог хурдан шалгах арга." },
    { question: "Radio сонголтууд яаж нэг бүлэг болох вэ?", answer: "Ижил name, ялгаатай value ашиглана.", explanation: "fieldset/legend нь бүлгийн асуултыг нэмж ойлгуулна." },
    { question: "Native validation backend validation-ийг орлох уу?", answer: "Үгүй.", explanation: "Client талын шалгалтыг тойрч болох тул server өгөгдлийг дахин шалгана." },
  ],
  references: [
    { label: "MDN — Web forms", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms", note: "Form control ба validation-ийн дэлгэрэнгүй гарын авлага." },
    { label: "W3C WAI — Forms tutorial", url: "https://www.w3.org/WAI/tutorials/forms/", note: "Label, instruction, validation, grouping-ийн хүртээмжийн жишээ." },
  ],
};

const lesson7: DetailedLessonMaterial = {
  id: 7,
  goals: [
    "CSS файлыг HTML-т зөв холбож, rule, selector, declaration-ийг тайлбарлах.",
    "Cascade, inheritance, specificity, source order-ийн үндсэн зөрчлийг ялгах.",
    "Box model ашиглан element-ийн бодит хэмжээг тооцоолох.",
    "DevTools-аар style хаанаас ирсэн, яагаад дарагдсаныг олох.",
  ],
  outcome:
    "Хичээлийн төгсгөлд та өмнөх form-оо уншихад хялбар CSS-ээр загварчилж, style ажиллахгүй үед таах бус DevTools-ийн баримтаар шалтгааныг олж чадна.",
  prerequisites: [
    "5-р хичээл: semantic HTML ба class attribute",
    "6-р хичээл: accessible form control-ууд",
    "3-р хичээл: diff уншиж commit хийх",
  ],
  notRequired: ["Flexbox", "CSS Grid", "Responsive media query", "Animation", "Tailwind эсвэл өөр framework"],
  preparation:
    "6-р хичээлийн form.html-ээ хуулж lesson-07-css хавтсанд байрлуулаад styles.css нэртэй хоосон файл үүсгэнэ.",
  tools: ["VS Code", "Browser", "DevTools → Elements / Styles / Computed", "Git"],
  evidence:
    "HTML-т холбогдсон styles.css, DevTools-аар шийдсэн хоёр CSS алдаа, box model тооцоо, нэг Git commit.",
  schedule: [
    { start: "00:00", duration: 15, title: "HTML ба CSS-ийн хил", description: "Агуулгын утга ба харагдах шийдвэрийг хоёр баганад ангилна." },
    { start: "00:15", duration: 35, title: "CSS syntax ба selector", description: "External stylesheet, rule, selector, property, value, class selector-ийг сурна." },
    { start: "00:50", duration: 35, title: "Cascade ба inheritance", description: "Style зөрчилдөхөд source order, specificity, inheritance хэрхэн шийдэхийг туршина." },
    { start: "01:25", duration: 10, title: "Завсарлага", description: "Дэлгэцээс холдож 10 минут амарна.", kind: "break" },
    { start: "01:35", duration: 40, title: "Box model ба хэмжээ", description: "content, padding, border, margin, box-sizing-ийг тооцоолж ажиллуулна.", kind: "practice" },
    { start: "02:15", duration: 30, title: "Form styling лаборатори", description: "Copy-ready stylesheet-ийг холбож, DevTools-аар rule бүрийн нөлөөг ажиглана.", kind: "practice" },
    { start: "02:45", duration: 15, title: "Debug checklist ба commit", description: "CSS ачаалалт, selector, cascade, box model-оо шалгаад commit хийнэ." },
  ],
  chapters: [
    {
      title: "1. CSS rule-ийг унших",
      lead: "CSS нь ‘ямар element-д, ямар property-г, ямар value-гаар өөрчлөх вэ?’ гэсэн дүрмүүдийн цуглуулга.",
      paragraphs: [
        "Selector нь HTML-ийн аль element-үүдийг сонгохыг, declaration block нь ямар харагдах утга өгөхийг заана. Declaration бүр property: value хэлбэртэй, төгсгөлдөө semicolon-той.",
        "External stylesheet нь HTML ба style-ийг тусдаа ойлгомжтой файлд хадгална. HTML-ийн head дотор link element байрлуулж styles.css-ийн замыг зөв өгнө. Зам буруу бол CSS rule ямар ч алдаагүй байсан харагдахгүй.",
        "Element selector бүх ижил tag-д, .class selector тухайн class-тай element-д үйлчилнэ. Эхний хичээлд selector-оо богино, дахин ашиглаж болох class-аар зохион байгуул; хэт урт nested selector хэрэггүй.",
      ],
      blocks: [
        {
          title: "HTML-т CSS холбох",
          language: "html",
          code: `<link rel="stylesheet" href="styles.css" />`,
          note: "Энэ мөрийг title-ийн дараа, head element дотор байрлуул. form.html ба styles.css ижил хавтсанд байна.",
        },
        {
          title: "CSS rule-ийн хамгийн жижиг жишээ",
          language: "css",
          code: `body {
  color: #172321;
  background-color: #f4f1e9;
}`,
        },
      ],
    },
    {
      title: "2. Cascade: аль rule ялах вэ?",
      lead: "Нэг element-ийн ижил property-д олон rule таарвал browser тогтсон дүрмээр нэг утгыг сонгоно.",
      paragraphs: [
        "Эхлээд declaration хүчинтэй эсэх, дараа нь importance/origin, selector-ийн specificity, эцэст нь source order нөлөөлнө. Энэ хичээлд author stylesheet доторх энгийн selector дээр төвлөрнө.",
        "Class selector нь element selector-оос илүү specific. Specificity ижил бол stylesheet-д дараа бичигдсэн rule ялна. !important-аар асуудлыг дарах нь cascade-ийг ойлгоход улам хэцүү болгодог тул суурь хичээлд хэрэглэхгүй.",
        "Зарим property, жишээ нь color, эцэг element-ээс хүүхэд рүү inherit хийдэг. Харин margin, border зэрэг нь ерөнхийдөө inherit хийхгүй. DevTools-ийн Computed хэсэг эцсийн утга болон хаанаас ирснийг харуулна.",
      ],
      blocks: [
        {
          title: "Source order турших CSS",
          language: "css",
          code: `p {
  color: #2864dc;
}

p {
  color: #8b2f1c;
}`,
          note: "Хоёр selector ижил учраас дараа бичсэн #8b2f1c ялна. DevTools Styles-д эхний утга дарагдсан харагдана.",
        },
      ],
    },
    {
      title: "3. Box model-ийг тооцоолох",
      lead: "Дэлгэц дээрх element зөвхөн width биш: content, padding, border, margin гэсэн давхаргатай.",
      paragraphs: [
        "Default content-box үед width нь зөвхөн content-ийн өргөн. Жишээ нь width: 300px, хоёр талдаа padding: 20px, border: 2px бол element-ийн харагдах өргөн 300 + 40 + 4 = 344px. Margin нь гаднах зай бөгөөд энэ 344-ийн гадна байрлана.",
        "box-sizing: border-box үед заасан width дотор content, padding, border бүгд багтана. Энэ нь layout-ийн хэмжээг таамаглахад хялбар тул олон төсөл бүх element-д border-box тохируулдаг.",
        "rem нь root font size-тэй харьцангуй нэгж. Body text, spacing-д rem ашиглавал хэрэглэгч browser-ийн font тохиргоогоо томруулахад илүү уян ажиллах боломжтой. px нь border зэрэг тогтмол жижиг хэмжээнд тохиромжтой.",
      ],
      blocks: [
        {
          title: "Хэмжээг тогтвортой болгох суурь rule",
          language: "css",
          code: `*,
*::before,
*::after {
  box-sizing: border-box;
}`,
        },
      ],
    },
    {
      title: "4. DevTools-оор CSS debug хийх",
      lead: "Style ажиллахгүй үед шууд шинэ rule нэмэхийн оронд нотолгоо цуглуул.",
      paragraphs: [
        "Elements хэсгээс яг буруу харагдаж буй element-ээ сонго. Styles хэсэгт таны selector харагдахгүй бол stylesheet ачаалагдаагүй, зам буруу эсвэл selector element-т таараагүй байж болно.",
        "Rule харагдаж байгаа ч property нь зураастай бол өөр declaration cascade-аар ялсан. Ялсан утгын selector ба source file/line-ийг хар. Computed хэсэгт эцсийн width, padding, font-size зэрэг утгыг шалгана.",
        "DevTools дээр түр rule унтраах, value өөрчлөх нь hypothesis шалгах хурдан арга. Гэхдээ refresh хийхэд алга болдог тул зөв засварыг эх файлдаа заавал бичнэ.",
      ],
      points: [
        "1 — styles.css Network/Source-д ачаалсан уу?",
        "2 — Selector зөв element-т таарч байна уу?",
        "3 — Property хүчинтэй, үсгийн алдаагүй юу?",
        "4 — Өөр rule cascade-аар дарсан уу?",
        "5 — Computed size box model-той таарч байна уу?",
      ],
    },
    {
      title: "5. Form-д хэрэглэх copy-ready stylesheet",
      lead: "Доорх CSS зөвхөн одоо үзсэн selector, typography, spacing, color, border, box model-ийг ашиглана.",
      paragraphs: [
        "styles.css нэрээр form.html-тэй ижил хавтсанд хадгал. Дараа нь color, spacing, border-radius утгыг нэг нэгээр өөрчилж үр дүнг refresh-ээр ажигла.",
        "Form control-ийн font: inherit нь input, button-ыг body-тэй ижил font ашиглуулна. max-width нь main-ийг 42rem-ээс өргөн болгохгүй, margin: 0 auto нь үлдсэн хэвтээ зайг хоёр талд тэнцүү хувааж төвлөрүүлнэ.",
        "input[type=\"radio\"] нь type attribute-ийн утгаар element сонгосон attribute selector. :focus-visible нь keyboard-аар focus авсан үед үйлчлэх pseudo-class. Эдгээрийг DevTools-д түр унтрааж ямар element-д нөлөөлж байгааг ажигла.",
      ],
      blocks: [
        {
          title: "styles.css — өмнөх form-ын суурь загвар",
          language: "css",
          code: `*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  color: #172321;
  background: #f4f1e9;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
}

main {
  max-width: 42rem;
  margin: 0 auto;
  padding: 3rem 1rem;
}

h1 {
  margin-block: 0 0.5rem;
  line-height: 1.15;
}

form {
  margin-top: 2rem;
  padding: 1.5rem;
  border: 1px solid #c8c4b8;
  border-radius: 0.75rem;
  background: #ffffff;
}

label,
legend {
  font-weight: 700;
}

input,
select,
textarea,
button {
  font: inherit;
}

input,
select,
textarea {
  width: 100%;
  margin-top: 0.35rem;
  padding: 0.7rem;
  border: 1px solid #757b77;
  border-radius: 0.35rem;
}

input[type="radio"],
input[type="checkbox"] {
  width: auto;
  margin-right: 0.4rem;
}

fieldset {
  margin-block: 1.25rem;
  padding: 1rem;
  border: 1px solid #c8c4b8;
}

button {
  padding: 0.75rem 1.2rem;
  border: 2px solid #172321;
  border-radius: 0.35rem;
  color: #172321;
  background: #c9f36a;
  font-weight: 700;
  cursor: pointer;
}

input:focus-visible,
select:focus-visible,
textarea:focus-visible,
button:focus-visible {
  outline: 3px solid #2864dc;
  outline-offset: 2px;
}`,
        },
      ],
    },
  ],
  glossary: [
    { term: "Selector", definition: "CSS rule аль HTML element-д үйлчлэхийг сонгох хэсэг." },
    { term: "Declaration", definition: "Property ба value-гаас бүрдэх style заавар." },
    { term: "Cascade", definition: "Зөрчилдсөн CSS declaration-аас browser эцсийн утгыг сонгох дүрэм." },
    { term: "Specificity", definition: "Selector хэр тодорхой байгааг харьцуулах жин." },
    { term: "Inheritance", definition: "Зарим property-ийн утга эцэг element-ээс хүүхдэд дамжих зан төлөв." },
    { term: "Box model", definition: "Element-ийн content, padding, border, margin давхаргууд." },
  ],
  exercises: [
    {
      title: "Лаборатори: cascade ба box model-ийн хоёр алдаа",
      duration: "30 минут",
      objective: "CSS алдааг таах бус DevTools-ийн Styles/Computed баримтаар оношлох.",
      steps: [
        "Доорх HTML, CSS-ийг тусдаа файлд ажиллуулна.",
        "Гарчиг яагаад ногоон биш байгааг Styles хэсгээс олно.",
        "card яагаад 320px wrapper-ээс хальж байгааг Computed box model-оос тооцно.",
        "Нэг удаад нэг өөрчлөлт хийж хоёр асуудлыг засна.",
        "Засвар бүрийн өмнө/дараах computed утгыг тэмдэглэнэ.",
      ],
      blocks: [
        {
          title: "index.html",
          language: "html",
          code: `<div class="wrapper">
  <article class="card">
    <h2 class="card-title">CSS debug</h2>
    <p>Styles ба Computed хэсгийг ашигла.</p>
  </article>
</div>`,
        },
        {
          title: "styles.css — зориудын алдаатай",
          language: "css",
          code: `.wrapper {
  width: 320px;
  border: 2px dashed #172321;
}

.card {
  width: 300px;
  padding: 24px;
  border: 2px solid #172321;
  background: #ffffff;
}

.card-title {
  color: #19743b;
}

article .card-title {
  color: #8b2f1c;
}`,
        },
      ],
      checks: [
        "article .card-title илүү specific учраас улаан хүрэн ялсныг тайлбарласан.",
        "content-box үед card 300 + 48 + 4 = 352px болсныг тооцсон.",
        "box-sizing: border-box нэмэхэд нийт өргөн 300px болсныг Computed-оор шалгасан.",
        "!important ашиглаагүй.",
      ],
      hint: "Гарчгийн асуудал source order бус specificity; өргөний асуудал wrapper бус card-ийн box model дээр байна.",
      solution: ".card-title-ийг ялуулахын тулд илүү specific rule-ийг устгах/засах; .card-д box-sizing: border-box нэмэх нь хамгийн жижиг ойлгомжтой засвар.",
    },
  ],
  aiLab: {
    title: "CSS diagnosis-ийг AI-аар шүүмжлүүлэх",
    purpose: "AI-аас шууд их хэмжээний CSS авахын оронд hypothesis ба шалгах алхам авах.",
    prompt: `Та CSS debugging coach. Шууд бүтэн stylesheet дахин бичихгүй.

Observed: [ЯГ ЮУ БУРУУ ХАРАГДАЖ БАЙНА]
Expected: [ЯАЖ ХАРАГДАХ ЁСТОЙ]
HTML: [ХОЛБОГДОХ ХЭСЭГ]
CSS: [ХОЛБОГДОХ RULE]

Хамгийн магадлалтай 3 шалтгааныг эрэмбэл.
Шалтгаан бүрд:
- DevTools-ын хаана ямар баримт харах
- Нэг хамгийн жижиг test
- Test батлагдвал хийх хамгийн жижиг засвар

!important бүү санал болго.`,
    steps: ["Өөрийн observed/expected-ийг хэмжигдэхүйц бичнэ.", "AI-ийн эхний hypothesis-ийг DevTools-оор шалгана.", "Батлагдаагүй бол кодоо өөрчлөхгүй дараагийн hypothesis руу орно.", "Final засварын шалтгааныг нэг өгүүлбэрээр бичнэ."],
    checks: ["Зөвхөн батлагдсан hypothesis-ийн дагуу код өөрчилсөн.", "Final CSS-ээ refresh хийж дахин шалгасан."],
  },
  assignment: {
    title: "Өмнөх form-оо суурь CSS-ээр загварчлах",
    description:
      "6-р хичээлийн хүртээмжтэй HTML-ийг эвдэхгүйгээр typography, spacing, color, border, focus style ашиглан уншихад хялбар болгоно.",
    due: "8-р хичээл эхлэхээс өмнө · 75–90 минут",
    steps: [
      "form.html-д styles.css-ийг link element-ээр холбоно.",
      "border-box reset, body typography, төвлөрсөн main container бичнэ.",
      "Form control-уудын padding, border, font-ийг жигдрүүлнэ.",
      "Button болон focus-visible төлөвийг ялгарахуйц болгоно.",
      "320px орчим browser өргөнд horizontal overflow байгаа эсэхийг шалгана.",
      "DevTools-оор нэг element-ийн box model ба ялагч style-ийг screenshot/тэмдэглэлээр нотолно.",
      "git diff-ээ уншаад git commit -m \"Style the accessible course form\" хийнэ.",
    ],
    deliverables: ["form.html", "styles.css", "DevTools шалгалтын тэмдэглэл", "1 Git commit"],
    criteria: ["HTML semantic хэвээр", "Text уншигдах хэмжээ/contrast-тай", "Focus тод харагдана", "Horizontal overflow үгүй", "!important болон framework ашиглаагүй"],
    starter: {
      title: "styles.css эхлэх цэг",
      language: "css",
      code: `*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
}

/* main, form, control, button, focus style-аа энд нэм */`,
    },
    blocks: [{ title: "HTML ба CSS-ээ commit хийх", language: "bash", code: `git status
git diff
git add form.html styles.css
git diff --staged
git commit -m "Style the accessible course form"
git status` }],
  },
  quiz: [
    { question: "Ижил specificity-тэй хоёр rule зөрчилдвөл аль нь ялах вэ?", answer: "Stylesheet-д дараа бичигдсэн нь.", explanation: "Энэ нь source order; бусад cascade шат ижил үед үйлчилнэ." },
    { question: "content-box дээр width: 200px; padding: 20px; border: 2px бол нийт өргөн хэд вэ?", answer: "244px.", explanation: "200 + зүүн/баруун padding 40 + зүүн/баруун border 4." },
    { question: "Style ажиллахгүй үед хамгийн түрүүнд юу шалгах вэ?", answer: "Stylesheet ачаалсан эсэх, selector таарсан эсэхийг DevTools-оор.", explanation: "Шинэ rule нэмэхээс өмнө одоогийн баримтыг харна." },
    { question: "!important нь эхний сонголт мөн үү?", answer: "Үгүй.", explanation: "Cascade-ийн бодит шалтгааныг олж selector/source order-оо ойлгомжтой засна." },
  ],
  references: [
    { label: "MDN — CSS first steps", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started", note: "CSS syntax, selector, stylesheet холболтын эхлэл." },
    { label: "MDN — Cascade", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Cascade", note: "Cascade-ийн шийдвэрийн дарааллыг лавлах." },
    { label: "MDN — Box model", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model", note: "Content, padding, border, margin-ийн тайлбар." },
  ],
};

const lesson8: DetailedLessonMaterial = {
  id: 8,
  goals: [
    "Сайн coding prompt-ийн task, context, constraints, output, acceptance criteria-г ялгах.",
    "Observed ба expected behavior-ийг баримттай бичиж debugging prompt үүсгэх.",
    "AI-ийн саналыг нэг өөрчлөлтөөр туршиж, diff болон browser-оор батлах.",
    "Prompt log-д оролдлого, үр дүн, эцсийн шийдвэрээ тэмдэглэх.",
  ],
  outcome:
    "Хичээлийн төгсгөлд та HTML/CSS-ийн нэг бодит алдааг эхлээд өөрөө оношлон, дараа нь хязгаартай prompt-оор AI-тай ажиллаж, final засварыг нотолгоотой хамгаалж чадна.",
  prerequisites: [
    "5-р хичээл: HTML element ба semantic бүтэц",
    "7-р хичээл: CSS cascade, specificity, box model, DevTools",
    "3-р хичээл: git diff ба жижиг commit",
    "4-р хичээл: AI response-ийг шууд үнэн гэж үзэхгүй шалгах дадал",
  ],
  notRequired: ["AI API", "Agent rules", "MCP/tool calling", "JavaScript", "AI-аар бүтэн төсөл үүсгэх"],
  preparation:
    "lesson-08-prompt-debug хавтас үүсгээд index.html, styles.css, prompt-log.md гэсэн гурван файл бэлдэнэ.",
  tools: ["VS Code эсвэл Cursor", "Browser DevTools", "Git", "Сонгосон AI chat"],
  evidence:
    "Before/after баримт, structured prompt, AI саналын audit, зассан HTML/CSS, prompt-log.md, нэг Git commit.",
  schedule: [
    { start: "00:00", duration: 20, title: "Муу prompt-ийг оношлох", description: "‘CSS-ээ засаад өг’ prompt яагаад хэмжигдэхгүйг жишээгээр задлана." },
    { start: "00:20", duration: 35, title: "Prompt-ийн зургаан хэсэг", description: "Task, context, constraints, relevant input, output format, acceptance criteria-г нэг бүрчлэн сурна." },
    { start: "00:55", duration: 30, title: "Debugging context", description: "Observed, expected, reproduction, evidence, attempts-ийг богино бөгөөд хангалттай өгөх дасгал хийнэ." },
    { start: "01:25", duration: 10, title: "Завсарлага", description: "Дэлгэцээс холдож 10 минут амарна.", kind: "break" },
    { start: "01:35", duration: 35, title: "Өөрөө түрүүлж оношлох", description: "Зориудын CSS bug-ийг AI ашиглалгүй DevTools-оор хэмжиж hypothesis гаргана.", kind: "practice" },
    { start: "02:10", duration: 35, title: "AI pair-debugging", description: "Structured prompt өгч, саналыг нэг нэгээр туршин before/after баримт цуглуулна.", kind: "ai" },
    { start: "02:45", duration: 15, title: "Prompt log ба commit", description: "Ямар санал хүлээн авсан, татгалзсан, яагаад гэдгээ бичээд diff-ээ commit хийнэ." },
  ],
  chapters: [
    {
      title: "1. Prompt бол хүсэл биш, шалгаж болох ажлын тодорхойлолт",
      lead: "‘Гоё болго’, ‘зас’ гэх үгс AI-д олон боломж нээдэг ч зөв үр дүнг таних хэмжүүр өгдөггүй.",
      paragraphs: [
        "Coding prompt сайн байх эсэхийг уртаар нь хэмжихгүй. AI-д хийх ажил, зайлшгүй context, хүрээний хязгаар, холбогдох код, хүссэн гаралт, дууссан гэж үзэх шалгуур хангалттай тодорхой байвал prompt ажил хэрэгч болно.",
        "Context дутвал AI өөрөө таамаглана. Хэт их context өгвөл гол асуудал бүдгэрч, token болон анхаарал үрэгдэнэ. Алдаа гарч буй хамгийн жижиг HTML/CSS, browser-ийн бодит хэмжилт, өмнө туршсан оролдлого ихэвчлэн хангалттай.",
        "Prompt өөрөө verification биш. AI зөв сонсогдох тайлбар, компайлддаг боловч зорилго зөрчсөн код, эсвэл одоогийн бүтцийг эвдэх том rewrite санал болгож болно. Тиймээс acceptance criteria ба өөрийн test зайлшгүй.",
      ],
      points: [
        "Task — яг ямар үр дүнд хүрэх вэ?",
        "Context — орчин, одоогийн зан төлөв, зорилго юу вэ?",
        "Constraints — юуг өөрчилж болохгүй вэ?",
        "Relevant input — асуудалтай хамгийн жижиг код/алдаа",
        "Output format — explanation, patch, checklist зэргээс юу хэрэгтэй вэ?",
        "Acceptance criteria — ямар баримтаар дууссаныг батлах вэ?",
      ],
    },
    {
      title: "2. Муу prompt-оос сайн prompt руу",
      lead: "Prompt-оо тодруулахдаа solution-ийг заавал урьдчилж хэлэхгүй; асуудал ба шалгуурыг тодорхой өгнө.",
      paragraphs: [
        "‘Миний card-ийг засаад өг’ гэдэг prompt-д card ямар үед, яаж буруу, ямар хэмжээнд зөв болох, юуг өөрчилж болохгүй нь алга. AI бүтэн component дахин бичих, framework нэмэх, эсвэл өнгийг л өөрчлөх боломжтой.",
        "Сайн debugging prompt observed болон expected-ийг тусад нь бичнэ. Reproduction нь алдааг дахин гаргах яг алхам. Evidence нь DevTools computed width, screenshot-ийн тайлбар, error message зэрэг ажиглагдах баримт.",
      ],
      blocks: [
        {
          title: "Хэт ерөнхий prompt",
          language: "prompt",
          code: "CSS ажиллахгүй байна. Card-ийг засаад өг.",
        },
        {
          title: "Шалгаж болох structured prompt",
          language: "prompt",
          code: `Role: CSS debugging coach.

Task: 320px өргөн wrapper дотроос card баруун тийш хальж байгааг оношло.

Observed: DevTools Computed дээр card-ийн нийт өргөн 352px.
Expected: Card-ийн гаднах нийт өргөн 300px бөгөөд wrapper дотроо багтах.
Reproduce: index.html нээхэд бүх viewport дээр хальж байна.

Constraints:
- HTML бүү өөрчил.
- Flexbox, Grid, framework, !important бүү нэм.
- Бүтэн stylesheet дахин бүү бич.
- Нэг хамгийн жижиг CSS засвар санал болго.

Relevant CSS:
.wrapper { width: 320px; }
.card { width: 300px; padding: 24px; border: 2px solid; }

Output:
1. Root cause-ийг тооцоотой тайлбарла.
2. Нэг мөрийн patch өг.
3. DevTools-оор батлах 3 алхам өг.

Acceptance criteria:
- Computed outer width = 300px.
- Horizontal overflow байхгүй.
- HTML өөрчлөгдөөгүй.`,
        },
      ],
    },
    {
      title: "3. AI-аас өмнөх таван минутын оношлогоо",
      lead: "AI ашиглахаас өмнө өөрийн hypothesis гаргавал response-ийг үнэлэх суурьтай болно.",
      paragraphs: [
        "Алдааг нэг өгүүлбэрээр observed/expected хэлбэрээр бич. Алдааг дахин гаргах хамгийн цөөн алхмыг тэмдэглэ. Console, Network, Styles, Computed-оос холбоотой баримтаа ол. Сүүлд өөрчилсөн diff-ээ хар.",
        "Дараа нь ‘би одоогоор X шалтгаан гэж бодож байна, учир нь Y баримт’ гэсэн hypothesis бич. Энэ нь зөв байх албагүй; шалгаж болох ёстой. AI-ийн санал таны hypothesis-ийг батлах эсвэл няцаах шинэ test өгөх хэрэгтэй.",
        "Нэг дор олон өөрчлөлт хийвэл аль нь зассаныг мэдэхгүй. Нэг hypothesis → нэг жижиг test → ажиглалт → шийдвэр гэсэн давталт ашигла.",
      ],
      points: [
        "Observed ба expected-ийг салгасан уу?",
        "Bug-ийг тогтвортой дахин гаргаж чадсан уу?",
        "DevTools-ийн нэг баримт авсан уу?",
        "Сүүлчийн diff-ээ уншсан уу?",
        "Өөрийн шалгаж болох hypothesis байна уу?",
      ],
    },
    {
      title: "4. AI-ийн саналыг хүлээн авах протокол",
      lead: "Response-ийг унших нь review-ийн эхлэл; ажиллуулах, хэмжих, diff унших нь баталгаа.",
      paragraphs: [
        "AI санал бүрд ямар файл, ямар мөр, ямар зан төлөв өөрчлөгдөхийг урьдчилж хэл. Command байвал ажиллах хавтас, нөлөө, буцаах арга, нууц мэдээлэл шаардаж байгаа эсэхийг шалга.",
        "Кодыг нэг жижиг хэсгээр хэрэглээд browser-т acceptance criteria-гаа дахин шалга. Зөв болсон ч semantic HTML, keyboard focus, өөр viewport зэрэг өмнө ажиллаж байсан зан төлөв эвдэрсэн эсэхийг regression check хийнэ.",
        "Эцэст нь git diff-ийг мөр бүрээр унш. Ойлгохгүй өөрчлөлтийг commit-д бүү оруул. Prompt log-д AI юу санал болгосон, та юу туршсан, ямар evidence харсан, ямар шийдвэр гаргасныг бич.",
      ],
    },
    {
      title: "5. Prompt log-ийн copy-ready бүтэц",
      lead: "Prompt log нь AI ашигласныг гайхуулах биш, инженерийн шийдвэрийг дахин шалгаж болох болгоно.",
      paragraphs: [
        "Доорх загварыг prompt-log.md файлд хадгал. Нэг debug session бүрд нэг entry үүсгэ. Password, API key, хувийн өгөгдөл, байгууллагын нууц кодыг prompt log эсвэл AI чатад бүү оруул.",
      ],
      blocks: [
        {
          title: "prompt-log.md",
          language: "text",
          code: `# Lesson 08 — Prompt & debug log

## Problem
- Observed:
- Expected:
- Reproduce:
- Evidence:

## My hypothesis before AI
- Hypothesis:
- Why:
- Test:

## Prompt sent
[Prompt-оо бүтнээр нь энд хуул]

## AI suggestions
| Санал | Миний test | Evidence | Шийдвэр |
|---|---|---|---|
| 1 |  |  | accept / reject |
| 2 |  |  | accept / reject |

## Final change
- Changed:
- Root cause:
- Acceptance checks:
- Regression checks:

## What I learned
[2–3 өгүүлбэр]`,
        },
      ],
    },
  ],
  glossary: [
    { term: "Context", definition: "AI тухайн ажлыг зөв ойлгоход шаардлагатай орчин ба нөхцөл." },
    { term: "Constraint", definition: "Шийдэл мөрдөх ёстой хүрээ эсвэл хориг." },
    { term: "Acceptance criteria", definition: "Ажил дууссан, зөв болсныг хэмжих тодорхой шалгуур." },
    { term: "Reproduction", definition: "Алдааг дахин тогтвортой гаргах хамгийн жижиг алхмууд." },
    { term: "Hypothesis", definition: "Баримтаар шалгаж болох боломжит шалтгаан." },
    { term: "Regression", definition: "Засварын улмаас өмнө ажиллаж байсан зүйл эвдрэх алдаа." },
    { term: "Prompt log", definition: "Prompt, test, evidence, шийдвэрийн мөрдөж болох тэмдэглэл." },
  ],
  exercises: [
    {
      title: "Pair-debugging лаборатори: card overflow",
      duration: "70 минут",
      objective: "Өөрийн онош → structured prompt → нэг test → evidence → final diff урсгалыг бүтнээр нь хийх.",
      steps: [
        "Доорх index.html ба styles.css-ийг ижил хавтсанд хадгалж browser-т нээнэ.",
        "AI ашиглалгүй card-ийн computed outer width-ийг олж prompt-log.md-д тэмдэглэнэ.",
        "Өөрийн root-cause hypothesis ба нэг жижиг test бичнэ.",
        "Энэ хичээлийн structured prompt загварыг бодит evidence-ээрээ бөглөж AI-д өгнө.",
        "AI-ийн санал өөрийн hypothesis-той таарч байгаа эсэхээс үл хамааран DevTools-аар шалгана.",
        "Хамгийн жижиг засварыг source файлд хийж refresh хийнэ.",
        "Outer width, overflow, HTML өөрчлөгдөөгүй гэсэн 3 acceptance criteria-г шалгана.",
        "git diff-ээ prompt-log.md-д тайлбарла.",
      ],
      blocks: [
        {
          title: "index.html",
          language: "html",
          code: `<!doctype html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Prompt debugging lab</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <main class="wrapper">
      <article class="card">
        <h1>AI-тай алдаа засах</h1>
        <p>Эхлээд хэмж. Дараа нь таамаг дэвшүүл. Эцэст нь нэг өөрчлөлтөөр шалга.</p>
      </article>
    </main>
  </body>
</html>`,
        },
        {
          title: "styles.css — зориудын overflow bug",
          language: "css",
          code: `body {
  margin: 0;
  background: #f4f1e9;
  font-family: Arial, sans-serif;
}

.wrapper {
  width: 320px;
  margin: 40px auto;
  border: 2px dashed #8b2f1c;
}

.card {
  width: 300px;
  padding: 24px;
  border: 2px solid #172321;
  background: #ffffff;
}`,
        },
      ],
      checks: [
        "AI-аас өмнө өөрийн hypothesis бичсэн.",
        "Computed outer width 352px гэдгийг баримтаар олсон.",
        "Засвар нэг ойлгомжтой declaration-аас хэтрээгүй.",
        "Засварын дараа card outer width 300px болсон.",
        "HTML болон semantic бүтэц өөрчлөгдөөгүй.",
        "Prompt log-д accept/reject шийдвэрийн шалтгаан бий.",
      ],
      hint: "7-р хичээлийн content-box тооцоог эргэн хар. AI-д solution нэрлэхээс өмнө observed хэмжээсээ өг.",
      solution: ".card { box-sizing: border-box; } нэмэхэд заасан 300px дотор padding ба border багтана. Computed outer width 300px болж wrapper дотор багтана.",
    },
  ],
  aiLab: {
    title: "AI reviewer-оор final diff-ээ эсэргүүцүүлж шалгах",
    purpose: "Өөрийн засварыг зөвтгүүлэх бус, сул тал болон орхигдсон regression олох.",
    prompt: `Та миний засварыг зөв гэж таамаглахгүй skeptical reviewer.

Problem: [observed / expected]
Acceptance criteria: [жагсаалт]
Before evidence: [DevTools хэмжилт]
Diff:
[git diff-ээ энд хуул]
After evidence: [дахин хэмжсэн утга]

Гаралт:
1. Acceptance criteria бүр батлагдсан / батлагдаагүй / evidence дутуу
2. Миний root-cause тайлбарын боломжит алдаа
3. Шалгах 3 regression
4. Код өөрчлөхөөс өмнө хийх дараагийн test

Байхгүй test result бүү зохио.`,
    steps: ["Final diff ба өөрийн evidence-ийг prompt-д өгнө.", "AI-ийн дурдсан regression бүрийг бодитоор шалгана.", "Evidence дутуу бол test хийж log-оо шинэчилнэ.", "Зөвхөн батлагдсан нэмэлт асуудал байвал кодоо өөрчилнө."],
    checks: ["AI-д code-оос гадна acceptance/evidence өгсөн.", "AI-ийн хэлсэн бүх regression-ийг өөрөө шалгасан."],
  },
  assignment: {
    title: "Нотолгоотой HTML/CSS debug case",
    description:
      "Өмнөх хоёр хичээлийн HTML/CSS ажлаасаа нэг бодит жижиг асуудал сонгож, structured prompt ба verification protocol ашиглан засна.",
    due: "3-р долоо хоног эхлэхээс өмнө · 75–90 минут",
    steps: [
      "Өөрийн form/profile-оос нэг жижиг bug эсвэл сайжруулалтыг observed/expected хэлбэрээр сонгоно.",
      "Before screenshot эсвэл DevTools хэмжилт авна.",
      "AI ашиглалгүй hypothesis ба test бичнэ.",
      "Task, context, constraints, input, output, acceptance бүхий prompt үүсгэнэ.",
      "AI-ийн саналыг нэг нэгээр туршиж prompt-log.md-д accept/reject шийдвэр бичнэ.",
      "Acceptance болон дор хаяж 2 regression check хийнэ.",
      "git diff-ээ мөр бүрээр уншаад git commit -m \"Debug CSS with a verified AI prompt\" хийнэ.",
    ],
    deliverables: ["Зассан HTML/CSS", "prompt-log.md", "Before/after evidence", "Structured prompt", "1 Git commit"],
    criteria: ["Асуудал хэмжигдэхүйц", "AI-аас өмнөх hypothesis бий", "Prompt хүрээ ба шалгууртай", "Final өөрчлөлт хамгийн жижиг", "Acceptance ба regression шалгалт баримттай"],
    starter: {
      title: "Structured debugging prompt загвар",
      language: "prompt",
      code: `Role: HTML/CSS debugging coach.

Task: [ЯГ НЭГ ҮР ДҮН]
Context: [ОРЧИН, ХОЛБОГДОХ ХИЧЭЭЛ]
Observed: [БОДИТ БАРИМТ]
Expected: [ХЭМЖИГДЭХ ҮР ДҮН]
Reproduce: [АЛХМУУД]

Constraints:
- [ӨӨРЧИЛЖ БОЛОХГҮЙ ЗҮЙЛ]
- Хамгийн жижиг өөрчлөлт санал болго.
- Одоогоор үзээгүй framework/JavaScript бүү нэм.

Relevant HTML/CSS:
[ХАМГИЙН ЖИЖИГ ХОЛБОГДОХ КОД]

Output:
1. Root-cause hypothesis
2. DevTools test
3. Minimal patch
4. Regression checklist

Acceptance criteria:
- [ШАЛГУУР 1]
- [ШАЛГУУР 2]`,
    },
    blocks: [{ title: "Нотолгоотой debug ажлаа commit хийх", language: "bash", code: `git status
git diff
git add index.html styles.css prompt-log.md
git diff --staged
git commit -m "Debug CSS with a verified AI prompt"
git status` }],
  },
  quiz: [
    { question: "Сайн prompt урт байх албагатай юу?", answer: "Үгүй.", explanation: "Зайлшгүй context, хүрээ, гаралт, шалгуур нь тодорхой байхад хангалттай." },
    { question: "Observed ба expected яагаад тусдаа байх вэ?", answer: "Одоогийн баримтыг хүссэн үр дүнтэй андуурахгүй, зөрүүг хэмжихийн тулд.", explanation: "‘Буруу харагдаж байна’ гэхээс computed width 352px / expected 300px илүү шалгаж болно." },
    { question: "AI solution өгсний дараа эхний алхам юу вэ?", answer: "Root cause ба test нь бодит баримттай таарч байгаа эсэхийг шалгах.", explanation: "Шууд бүх кодыг хуулахгүй; нэг жижиг test хийнэ." },
    { question: "Prompt log-д зөвхөн амжилттай prompt бичих үү?", answer: "Үгүй.", explanation: "Туршсан, бүтэлгүйтсэн санал ба татгалзсан шалтгаан нь шийдвэрийг ил тод болгоно." },
  ],
  references: [
    { label: "Anthropic — Claude Code best practices", url: "https://www.anthropic.com/engineering/claude-code-best-practices", note: "Context өгөх, explore/plan/code, verify хийх практик." },
    { label: "Git — Inspecting changes", url: "https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository", note: "diff ба commit хийхээс өмнөх шалгалтын лавлах." },
  ],
};

export const foundationMaterialById: Record<number, DetailedLessonMaterial> = {
  1: lesson1,
  2: lesson2,
  3: lesson3,
  4: lesson4,
  5: lesson5,
  6: lesson6,
  7: lesson7,
  8: lesson8,
};
