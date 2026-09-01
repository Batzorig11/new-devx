import { lessons } from "../../data/curriculum";
import type { LessonConcept, LessonFormatBlock, ReferenceLesson } from "../types";

type Blueprint = {
  concepts: Array<{
    title: string;
    detail: string;
    example: string;
    theory?: string[];
    mentalModel?: { title: string; explanation: string };
    code?: string;
    language?: "css" | "html" | "text";
    formatBlocks?: LessonFormatBlock[];
  }>;
  demo: string;
  practice: string;
  evidence: string;
  next: string;
};

const sections: ReferenceLesson["sections"] = [
  { id: "overview", shortLabel: "01", label: "Тойм" },
  { id: "teach", shortLabel: "02", label: "Заах агуулга" },
  { id: "demo", shortLabel: "03", label: "Live demo" },
  { id: "practice", shortLabel: "04", label: "Дадлага" },
  { id: "ai-lab", shortLabel: "05", label: "AI Lab" },
  { id: "checkpoint", shortLabel: "06", label: "Checkpoint" },
  { id: "wrap-up", shortLabel: "07", label: "Дүгнэлт" },
];

const lessonTitles = Object.fromEntries(lessons.map((lesson) => [lesson.id, lesson.title]));

const lessonTheoryContext: Record<number, string[]> = {
  10: [
    "CSS Grid нь container-ийн available space, track хэмжээ, gap болон item placement-ийг нэг хоёр хэмжээст layout system дотор тооцдог. Row ба column-ийг зэрэг тодорхойлж чаддаг нь Flexbox-ийн нэг үндсэн тэнхлэгийн model-оос ялгаатай.",
    "Grid layout-ийн хэмжээ content-ийн intrinsic size болон container-ийн constraint-тэй хамт тооцогдоно. Иймээс fixed pixel утгаас гадна fr, minmax(), repeat(), auto-fit зэрэг уян дүрмийг зөв хослуулах нь overflow-гүй responsive layout-ийн үндэс болдог.",
  ],
  11: [
    "Responsive дизайн нь нэг page-ийг тусдаа mobile, tablet, desktop хувилбараар хуулбарлах биш, ижил semantic content-ийг өөр available space болон хэрэглэгчийн тохиргоонд дасан зохицуулах арга юм.",
    "Layout-ийн өөрчлөлтийг device-ийн нэрээр бус content багтах боломж, уншигдах байдал, interaction-аар шийднэ. Relative unit, flexible layout, media query, responsive media нийлж тасралтгүй өөрчлөгдөх viewport-д ажилладаг system үүсгэнэ.",
  ],
  13: [
    "Transform нь element-ийн visual coordinate system-д translate, scale, rotate, skew хийх бөгөөд document flow дахь эзлэх зайг өөрчлөхгүй. Transform-ийг layout property-оос ялгах нь overlap, hit area, stacking context болон performance-ийг зөв таамаглахад чухал.",
    "Transition нь property-ийн хоёр state-ийн хооронд, animation нь keyframe timeline-аар ажиллана. Motion бүр purpose, duration, easing, trigger-тэй байх бөгөөд prefers-reduced-motion хэрэглэгчийн тохиргоонд unnecessary хөдөлгөөнийг багасгана.",
  ],
  14: [
    "AI editor-ийн боломжууд ижил model ашигласан ч context болон эрхээрээ ялгаатай. Cursor орчмын completion жижиг local intent, inline edit selected scope, chat өргөн тайлбар, agent file болон command бүхий олон алхамт workflow дээр ажилладаг.",
    "Context болон permission нэмэгдэх тусам proposal-ийн нөлөөлөх хүрээ өснө. Scope, acceptance criteria, diff, automated check болон version control нь AI-generated өөрчлөлтийг программын бодит behavior-тэй тулгах үндсэн механизм болдог.",
  ],
  15: [
    "Visual reference нь пикселийн нэг үр дүнг харуулдаг боловч DOM semantics, responsive rule, interaction state, content model-ийг бүрэн агуулдаггүй. Screenshot-to-code output ийм үл харагдах шийдвэрүүдийн тухай таамаг агуулдаг.",
    "Үүссэн UI болон media asset-ийг бүтээгдэхүүний source code-ын адил хариуцлагатай боловсруулна. Structure, naming, reuse, accessibility, file format, хэмжээ, provenance болон license нь visual similarity-гаас гаднах зайлшгүй шаардлагууд юм.",
  ],
  16: [
    "Portfolio төсөл нь HTML structure, CSS layout, responsive behavior, accessibility, asset, Git болон deployment-ийг нэг бүтээгдэхүүнд нэгтгэнэ. Амжилт нь feature-ийн тоогоор бус урьдчилан тогтоосон хэрэглэгчийн үр дүн биелсэн эсэхээр хэмжигдэнэ.",
    "Project-ийн requirement бүр implementation, verification evidence болон Git history-тэй холбогдоно. Semantic page local дээр зөв харагдахаас гадна production build, public URL, keyboard navigation, өөр хэмжээний viewport-д тогтвортой ажиллах ёстой.",
  ],
};

const blueprints: Record<number, Blueprint> = {
  10: {
    concepts: [
      { title: "Grid container, row, column ба cell", detail: "Grid нь мөр ба баганыг зэрэг удирддаг хоёр хэмжээст layout model.", example: "Card gallery-ийн багана бүр ижил track-д сууна." },
      { title: "Track sizing: fr, minmax ба repeat", detail: "Track хэмжээ content болон available space-д хэрхэн хариулахыг тодорхойлно.", example: "repeat(3, minmax(0, 1fr))" },
      { title: "Placement, line ба grid area", detail: "Item-ийг line number эсвэл нэрлэсэн area-аар байрлуулна.", example: "header header / sidebar main" },
      { title: "Responsive Grid ба auto-fit", detail: "Content багтах хэмжээгээр баганын тоо өөрчлөгдөх layout бүтээнэ.", example: "repeat(auto-fit, minmax(16rem, 1fr))" },
    ], demo: "Responsive card gallery-г fixed columns-оос auto-fit Grid болгон өөрчлөх", practice: "Course dashboard-ийн хоёр хэмжээст card layout бүтээх", evidence: "Grid overlay, computed tracks, 360/768/1200px overflow check", next: "Responsive дизайн",
  },
  11: {
    concepts: [
      { title: "Mobile-first ба content breakpoint", detail: "Base style жижиг дэлгэцэд ажиллаж, зай хүрэх үед layout өргөжинө.", example: "Base нэг багана; 48rem-ээс хоёр багана." },
      { title: "Media query ба range нөхцөл", detail: "Viewport хэмжээг таах бус layout эвдэрсэн цэгт breakpoint сонгоно.", example: "@media (min-width: 48rem)" },
      { title: "Уян хэмжээ ба responsive media", detail: "rem, %, fr, min(), max(), clamp() content-ийг уян болгоно.", example: "font-size: clamp(1.8rem, 5vw, 3.5rem)" },
      { title: "Responsive verification", detail: "Зөвхөн device preset бус завсрын өргөн, zoom, keyboard, overflow-ийг шалгана.", example: "320, 768, 1024px дээр screenshot + checklist." },
    ], demo: "Тогтмол portfolio section-ийг mobile-first responsive болгох", practice: "Hero ба project grid-ээ гурван viewport дээр засах", evidence: "Responsive Mode, horizontal overflow, readable line length, keyboard focus", next: "AI экосистем",
  },
  12: {
    concepts: [
      {
        title: "Model, product ба interface гурван өөр давхарга",
        detail: "Model нь AI-ийн үндсэн тооцоолох систем, product нь хэрэглэгчид зориулсан бэлэн үйлчилгээ, interface нь тухайн системтэй харилцах арга юм.",
        example: "GPT бол model-ийн бүлэг, ChatGPT бол product, харин web chat болон API нь түүнтэй харилцах interface-үүд юм.",
        theory: [
          "Model буюу загвар нь өгөгдлөөс сурсан параметрүүд болон inference хийх архитектураас бүрдэнэ. Prompt хүлээн авч response үүсгэх үндсэн тооцоолол энэ давхаргад явагддаг. Нэг model өөрөө login, chat history, file upload эсвэл төлбөрийн системтэй бүтэн application биш.",
          "Product нь model дээр хэрэглэгчийн account, interface, conversation history, file handling, search, safety rule зэрэг нэмэлт боломжуудыг нэгтгэсэн бэлэн үйлчилгээ юм. ChatGPT, Claude, Gemini зэрэг нэр нь ихэвчлэн product-ийг заадаг бөгөөд тэдний дотор ашиглагдах model цаг хугацааны явцад солигдож болно.",
          "Interface нь model эсвэл product-д хүсэлт өгөх суваг юм. Web chat нь хүнтэй харилцахад, editor integration нь сонгосон code болон project context-тэй ажиллахад, CLI agent нь file болон command ашиглахад, API нь developer өөрийн application-аас программын аргаар холбогдоход зориулагдана.",
        ],
        mentalModel: {
          title: "Хөдөлгүүр, автомашин, жолоодлогын хэсэг",
          explanation: "Model-ийг хөдөлгүүр, product-ийг бүрэн автомашин, interface-ийг жолооны хүрд ба удирдлага гэж төсөөлж болно. Нэг төрлийн хөдөлгүүр өөр өөр автомашинд орж болохын адил нэг model олон product болон interface-аар ашиглагдаж болно. Энэ зүйрлэл model-ийн software шинжийг бүрэн дүрслэхгүй.",
        },
      },
      {
        title: "Cloud LLM ба Local LLM",
        detail: "Cloud LLM provider-ийн сервер дээр, local LLM хэрэглэгчийн өөрийн төхөөрөмж дээр inference хийдэг.",
        example: "Claude cloud service ашиглахад prompt network-ээр provider руу явна; Ollama дээр Qwen ажиллуулахад inference өөрийн laptop дээр хийгдэнэ.",
        theory: [
          "Cloud LLM ашиглах үед model provider-ийн data center дахь хүчирхэг hardware дээр ажиллана. Хэрэглэгч browser, application эсвэл API-аар prompt илгээж response авдаг. Ийм үйлчилгээ setup багатай, том model ашиглах боломжтой боловч internet connection, provider-ийн availability, usage limit болон data policy-оос хамаарна.",
          "Local LLM нь model-ийн файлыг төхөөрөмждөө татаж, Ollama эсвэл LM Studio зэрэг runtime-аар ажиллуулдаг. Model татагдсаны дараа зарим workflow internetгүй ажиллаж болох бөгөөд өгөгдлийг төхөөрөмжөөс гаргахгүй байхаар зохион байгуулж болно. Гэхдээ ажиллах model-ийн хэмжээ, context болон хурд нь RAM, VRAM, CPU/GPU-ийн хүчин чадлаар хязгаарлагдана.",
          "Cloud болон local гэсэн сонголтын аль нэг нь бүх нөхцөлд давуу биш. Маш өндөр capability, бага setup хэрэгтэй үед cloud тохиромжтой байж болно. Offline ажиллагаа, data control эсвэл тогтмол local workload чухал үед local model илүү тохиромжтой байж болно.",
        ],
        mentalModel: {
          title: "Гаднын үйлчилгээ ба өөрийн төхөөрөмж",
          explanation: "Cloud model нь гаднын мэргэжлийн төвөөр ажлаа хийлгээд үр дүн авахтай, local model нь өөрийн төхөөрөмж дээр багаж суурилуулж ажлаа хийхтэй төстэй. Гэхдээ model-ийн quality нь зөвхөн хаана ажиллаж байгаагаас бус model, quantization, hardware, task-аас хамаарна.",
        },
      },
      {
        title: "Chat, editor, CLI agent ба API",
        detail: "Chat, editor, CLI agent, API нь ижил төрлийн AI capability-г өөр context, эрх болон automation-ийн түвшнээр ашигладаг interface-үүд юм.",
        example: "Ойлголт тайлбарлуулахад chat, code selection засуулахад editor, repository даяарх ажлыг гүйцэтгүүлэхэд CLI agent, бүтээгдэхүүнд AI feature нэмэхэд API ашиглаж болно.",
        theory: [
          "Chat interface-д хэрэглэгч prompt бичиж response уншдаг. Энэ нь асуулт, тайлбар, санаа боловсруулахад энгийн боловч project-ийн file, build output эсвэл runtime state-ийг автоматаар бүрэн мэдэхгүй байж болно.",
          "AI editor нь нээлттэй file, selected code, diagnostics болон codebase index-ийг context болгон ашиглаж чадна. CLI agent нь terminal command ажиллуулах, олон file унших ба өөрчлөх, test ажиллуулах зэрэг өргөн үйлдэл хийж болох тул permission болон diff review илүү чухал болдог.",
          "API нь developer model capability-г өөрийн application-ийн workflow дотор оруулах программын interface юм. Application request үүсгэх, authentication, input validation, output handling, error state, rate limit болон cost control-ийг өөрөө хариуцна.",
        ],
        mentalModel: {
          title: "Нэг үйлчилгээний өөр өөр хаалга",
          explanation: "Нэг барилгад зочны хаалга, ажилтны хаалга, ачааны орц байдагтай адил interface бүр өөр context болон эрхтэй. Хаалга солигдлоо гээд цаадах model заавал солигдохгүй.",
        },
      },
      {
        title: "Token, subscription ба API зардал",
        detail: "Token нь model-ийн боловсруулдаг text нэгж; subscription нь product ашиглах эрхийн төлбөр; API billing нь программын хэрэглээг хэмжсэн төлбөр юм.",
        example: "API request-ийн үнэ input token болон output token-ийн хэмжээнээс тооцогдож болох бол ChatGPT subscription нь тусдаа product plan байдаг.",
        theory: [
          "LLM text-ийг бүхэл өгүүлбэрээр бус token хэмээх жижиг нэгжүүдэд хуваан боловсруулдаг. Token нь бүтэн үг, үгийн хэсэг, punctuation эсвэл code symbol байж болно. Prompt, system instruction, conversation history, оруулсан document болон model-ийн response нийлж token хэрэглээг өсгөнө.",
          "Subscription нь ChatGPT, Claude зэрэг product-ийн тодорхой plan ашиглах эрх өгдөг. Энэ төлбөр API credit-тэй заавал адил биш. Subscription байсан ч API хэрэглээ тусдаа account, key, rate limit болон billing-тэй байх нь түгээмэл.",
          "API үнэ ихэвчлэн input ба output token-ийг тусдаа тарифаар тооцдог. Нэг request-ийн дундаж token хэрэглээг сарын request-ийн тоогоор үржүүлж estimate гаргана. Cache, tool call, image/audio input болон provider-ийн pricing tier бодит зардалд нэмэлтээр нөлөөлж болно.",
        ],
        mentalModel: {
          title: "Гишүүнчлэл ба хэрэглээний тоолуур",
          explanation: "Subscription нь үйлчилгээний гишүүнчлэлтэй, API billing нь хэрэглэсэн хэмжээгээр ажилладаг тоолууртай төстэй. Гэхдээ provider бүр plan, limit, үнээ өөрөөр тодорхойлдог тул бодит pricing page эцсийн эх сурвалж болно.",
        },
      },
    ], demo: "Ижил prompt-ийг local болон cloud model-д өгч output, latency, privacy boundary-г тэмдэглэх", practice: "Дөрвөн use case-д model, орчин, interface, budget сонгох", evidence: "Model name, elapsed time, network boundary, pricing-page calculation", next: "CSS animation, transform ба transition",
  },
  13: {
    concepts: [
      {
        title: "Transform ба coordinate system",
        detail: "translate, scale, rotate, skew нь element-ийн харагдах дүрсийг өөрчилдөг ч document flow дахь зайг дахин хуваарилдаггүй.",
        example: "Card дээш 4px шилжиж, үл ялиг томорно. Хажуугийн card-уудын layout position өөрчлөгдөхгүй.",
        theory: [
          "CSS transform нь element-ийн local coordinate system дээр ажиллана. translate() байрлалыг, scale() хэмжээг, rotate() өнцгийг, skew() тэнхлэгийн налалтыг visual байдлаар өөрчилнө. Олон function-ийг нэг transform declaration-д бичихэд тэдгээрийн дараалал үр дүнд нөлөөлнө.",
          "transform: translateY(-4px) scale(1.02) хэрэглэсэн element document flow дотор анхны зайгаа эзэлсээр байна. Иймээс transform нь card hover, icon feedback, modal enter/exit зэрэг visual motion-д тохиромжтой боловч layout дахь бодит зай өөрчлөх хэрэгсэл биш.",
          "transform-origin нь rotation болон scaling ямар цэгийг тойрч явахыг тогтооно. Default нь төв цэг. Хаалганы хөдөлгөөн шиг edge-ээс эргэх effect-д transform-origin: left center гэж зориуд сонгоно.",
        ],
        mentalModel: {
          title: "Layout box дээр тавьсан тунгалаг зураг",
          explanation: "Layout box байрандаа үлдэнэ; transform нь дээр нь харагдаж буй дүрсийг хөдөлгөнө. Гэхдээ pointer hit testing болон stacking context зэрэг browser behavior-д transform нөлөөлж болох тул энэ зүйрлэл бүрэн биш.",
        },
        code: ".card {\n  transform-origin: center;\n}\n\n.card:hover,\n.card:focus-within {\n  transform: translateY(-4px) scale(1.02);\n}",
        language: "css",
      },
      {
        title: "Transition, duration ба easing",
        detail: "Transition нь тодорхой property-ийн эхлэл ба төгсгөлийн state-ийн хооронд хугацаа, easing-аар interpolation хийнэ.",
        example: "Hover болон keyboard focus хоёул transform ба shadow-ийн ижил transition-ийг идэвхжүүлнэ.",
        theory: [
          "Transition өөрөө state үүсгэдэггүй. :hover, :focus-visible, class, attribute эсвэл JavaScript-ийн өөрчлөлтөөс property-ийн value солигдоход browser завсрын frame-үүдийг тооцдог. Эхлэл эсвэл төгсгөлийн value байхгүй бол transition ажиллахгүй.",
          "Duration нь нийт хугацаа, delay нь эхлэхийн өмнөх хүлээлт, timing-function нь хурд хугацааны явцад хэрхэн өөрчлөгдөхийг тодорхойлно. ease-out нь enter/feedback motion-д хурдан эхэлж зөөлөн зогсдог; linear нь тогтмол хурд шаардсан progress/spinner-д илүү тохирно.",
          "transition: all гэж бичих нь санаандгүй property-г animate хийж, debugging болон performance-ийг хүндрүүлдэг. Өөрчлөгдөх property бүрийг нэрлэж, motion-ийн шалтгаан ба хугацааг кодоос уншигддаг байлгана.",
        ],
        mentalModel: {
          title: "Хоёр зураг хоорондын зам",
          explanation: "State нь эхний ба сүүлийн зураг, transition нь тэдгээрийн хооронд ямар хугацаа, хурдаар хүрэх дүрэм. Замд гурав дахь тусгай үе хэрэгтэй бол keyframe animation сонгоно.",
        },
        code: ".card {\n  transition:\n    transform 180ms ease-out,\n    box-shadow 180ms ease-out;\n}\n\n.card:hover,\n.card:focus-within {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 30px rgb(0 0 0 / 18%);\n}",
        language: "css",
      },
      {
        title: "Keyframe animation ба lifecycle",
        detail: "@keyframes нь хоёроос олон үе шаттай timeline үүсгэж, duration, delay, iteration-count, direction, fill-mode-оор тоглуулалтыг удирдана.",
        example: "Page load үед card нэг удаа fade/translate хийгээд final state дээрээ үлдэнэ.",
        theory: [
          "@keyframes дотор from/to эсвэл 0%–100% checkpoint ашиглан timeline тодорхойлно. animation-name нь element-ийг timeline-тай холбож, animation-duration нийт хугацааг, animation-iteration-count давталтыг удирдана.",
          "animation-fill-mode: both нь delay үед эхний keyframe, дууссаны дараа сүүлийн keyframe-ийн style-ийг хэрэглэнэ. Гэхдээ base style-аа зөвхөн animation-д нуувал animation ажиллахгүй үед content буруу харагдаж болно. Final readable state-ийг үндсэн CSS-д хадгал.",
          "Infinite animation нь loading indicator зэрэг үргэлжилж буй system state-ийг л илэрхийлэхэд тохиромжтой. Decorative хөдөлгөөнийг төгсгөлгүй давтах нь анхаарал сарниулж, battery/CPU хэрэглээг өсгөдөг.",
        ],
        mentalModel: {
          title: "Timeline дээрх checkpoint-ууд",
          explanation: "Transition зөвхөн A-аас B рүү явна. Keyframes нь A → B → C гэх мэт олон checkpoint, давталт, direction бүхий timeline үүсгэнэ.",
        },
        code: "@keyframes card-enter {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.card {\n  animation: card-enter 320ms ease-out both;\n}",
        language: "css",
      },
      {
        title: "Purposeful, performant, accessible motion",
        detail: "Motion нь feedback эсвэл spatial continuity өгөх ёстой; transform/opacity-г түлхүү хэрэглэж, reduced-motion preference-д unnecessary animation-ийг зогсооно.",
        example: "Reduced motion үед card шууд final state-д харагдаж, loading status motion-гүй text/icon-оор ойлгогдоно.",
        theory: [
          "Motion нэмэхээс өмнө ‘энэ хөдөлгөөн ямар мэдээлэл өгч байна?’ гэж шалгана. Feedback нь action бүртгэгдсэнийг, spatial continuity нь UI хаанаас хаашаа шилжсэнийг, attention cue нь шинэ state хаана гарсныг тайлбарлаж болно. Хариултгүй decorative motion-ийг хасах нь зөв шийдвэр.",
          "transform болон opacity animation-ийг browser олон тохиолдолд layout дахин тооцоололгүй compositor дээр ажиллуулж чадна. width, height, top, left зэрэг layout property-г frame бүрд өөрчлөх нь илүү үнэтэй байж, ойролцоох content-ийг дахин байрлуулах эрсдэлтэй.",
          "prefers-reduced-motion: reduce нь хэрэглэгч non-essential motion-ийг багасгахыг хүссэн дохио. Бүх animation-ийг сохроор устгахын оронд мэдээлэл дамжуулдаг state-ийг motion-гүйгээр ойлгогдох final style, text эсвэл icon-оор хадгална.",
        ],
        mentalModel: {
          title: "Motion бол чимэглэл биш, feedback channel",
          explanation: "Color, text, icon шиг motion мөн мэдээлэл дамжуулна. Гэхдээ хэрэглэгч энэ channel-ийг багасгасан үед мэдээлэл алга болох ёсгүй.",
        },
        code: "@media (prefers-reduced-motion: reduce) {\n  .card {\n    animation: none;\n    transition: none;\n  }\n}",
        language: "css",
        formatBlocks: [
          {
            type: "checklist",
            title: "Motion review checklist",
            items: [
              "Motion-ийн purpose нэг өгүүлбэрээр тайлбарлагдана",
              "Hover ба keyboard focus ижил feedback авна",
              "transition: all ашиглаагүй",
              "Transform/opacity-г боломжтой үед сонгосон",
              "Reduced-motion үед мэдээлэл ба final state хадгалагдсан",
            ],
          },
        ],
      },
    ], demo: "Static portfolio card-д hover/focus transition, entrance keyframe, reduced-motion fallback нэмэх", practice: "Card болон navigation-д зорилготой motion system хэрэгжүүлэх", evidence: "Computed styles, keyboard focus, animation timeline, reduced-motion emulation, layout shift check", next: "AI редактор: Copilot, Cursor, Devin",
  },
  14: {
    concepts: [
      {
        title: "Completion, inline edit, chat ба agent",
        detail: "Interaction бүр өөр context, өөрчлөх scope, autonomy болон хүний хяналтын цэгтэй.",
        example: "Property бичиж дуусгахдаа completion; selected CSS засахдаа inline edit; code тайлбарлуулахдаа chat; олон file + test шаардсан task-д agent.",
        theory: [
          "Completion нь cursor орчмын code-оос дараагийн token, мөр эсвэл block санал болгоно. Scope жижиг, feedback хурдан боловч suggestion зөв гэдгийг syntax, type, intent-ээр шууд шалгах шаардлагатай.",
          "Inline edit нь selected code болон instruction-ийг гол context болгодог. Нэг function, style block, нэршил зэрэг тодорхой хүрээтэй өөрчлөлтөд тохиромжтой. Chat нь codebase-ийн талаар асуух, хувилбар харьцуулах, plan боловсруулахад ашиглагдана.",
          "Agent нь file хайх, олон file edit хийх, terminal command ажиллуулах, output-оос алдаагаа засах loop-тэй. Autonomy нэмэгдэх тусам task specification, permission, checkpoint, diff болон test-ийн шаардлага мөн нэмэгдэнэ.",
        ],
        mentalModel: {
          title: "Suggestion-оос delegation хүртэлх шат",
          explanation: "Completion бол нэг өгүүлбэрийн үргэлжлэл, inline edit бол сонгосон догол мөрийн засвар, chat бол зөвлөлдөх, agent бол хязгаартай workspace доторх олон алхамт delegation.",
        },
        formatBlocks: [
          {
            type: "comparison",
            title: "Interaction surface сонгох",
            columns: ["ХАМРАХ ХҮРЭЭ", "ТОХИРОХ АЖИЛ"],
            rows: [
              { label: "Completion", left: "Cursor орчмын мөр/block", right: "Boilerplate, predictable continuation" },
              { label: "Inline edit", left: "Selected code/file", right: "Targeted change, rename, local refactor" },
              { label: "Chat / Ask", left: "Өгсөн context, codebase search", right: "Explanation, exploration, plan" },
              { label: "Agent", left: "Олон file + allowed tools", right: "Feature, bug fix, tests, iterative task" },
            ],
          },
        ],
      },
      {
        title: "Copilot, Cursor, Devin-ийг workflow-оор ялгах",
        detail: "Copilot, Cursor, Devin-ийг ‘аль нь хамгийн сайн’ гэж биш, хаана ажиллах, context хэрхэн авах, ямар action хийх, review хаана болохоор нь харьцуулна.",
        example: "Нэг function completion-д Copilot/Cursor Tab; selected CSS-д Inline Edit; scoped issue + tests + draft PR-д agent session.",
        theory: [
          "GitHub Copilot нь VS Code зэрэг IDE болон GitHub workflow-д code suggestion, chat, edit, plan/agent боломжуудыг оруулдаг. Existing editor болон GitHub repository workflow-оос гарахгүй ажиллах нь түүний гол integration boundary.",
          "Cursor нь AI-first code editor бөгөөд Tab completion, selected Inline Edit, codebase context болон Agent workflow-ийг нэг interface-д нэгтгэнэ. Inline edit-ээс multi-file agent руу шилжихэд context ба permission-ийн хүрээ өсдөг.",
          "Devin нь repository-г тусдаа session/workspace-д өгч Ask mode-оор судлах/plan гаргах, Agent mode-оор code edit, command, browser test, PR хүртэлх олон алхамт task delegation хийх workflow-той. Энэ нь inline suggestion-оос илүү өргөн delegation тул progress, command history, diff, test, PR review-ийг checkpoint болгон ашиглана.",
          "Feature нэр, үнэ, model, limit байнга өөрчлөгдөж болно. Сонголтоо marketing list-ээр бус тухайн өдрийн official documentation, байгууллагын policy, repository access, data/privacy requirement, task-ийн autonomy-аар баталгаажуулна.",
        ],
        mentalModel: {
          title: "Brand биш, execution boundary",
          explanation: "Tool-ийг нэрээр нь эрэмбэлэхгүй. Editor дотор хамтран бичих үү, repository task-ийг session-д delegate хийх үү, ямар data/command access өгөх вэ гэдгийг эхэлж шийднэ.",
        },
        formatBlocks: [
          {
            type: "comparison",
            title: "Tool-уудыг тогтвортой шалгуураар харьцуулах",
            columns: ["ҮНДСЭН ОРЧИН", "ЖИШЭЭ WORKFLOW"],
            rows: [
              { label: "GitHub Copilot", left: "IDE + GitHub", right: "Suggestion, chat/edit, agent, code/PR workflow" },
              { label: "Cursor", left: "AI-first desktop editor", right: "Tab, Inline Edit, codebase chat, local/background agent" },
              { label: "Devin", left: "Delegated repository session", right: "Ask/plan, Agent execution, IDE/shell/browser, PR review" },
            ],
          },
        ],
      },
      {
        title: "Context, scope ба permission boundary",
        detail: "Relevant file, project rule, acceptance criteria, allowed command ба хориглосон action-ийг тодорхойлбол proposal шалгагдахуйц болно.",
        example: "Зөвхөн motion.css зас; dependency бүү нэм; lint ажиллуул; deploy бүү хий.",
        theory: [
          "Context нь agent-д харагдаж буй бүх зүйл биш, task шийдэхэд хэрэгтэй баримтын сонголт. Requirement, relevant file, existing pattern, error output, project instruction, expected behavior-ийг өгч; secret, personal data, unrelated private code-ийг context-оос хасна.",
          "Scope нь юу өөрчлөхийг болон юу өөрчлөхгүйг зэрэг заана. ‘Animation сайжруул’ гэдэг vague task-аас ‘motion.css дотор card hover/focus transition нэм; HTML болон dependency бүү өөрчил’ гэдэг task шалгагдах боломжтой.",
          "Permission нь read, edit, terminal, network, browser, issue/PR, deploy зэрэг action бүрээр ялгаатай. Task-д хэрэггүй эрхийг өгөхгүй; irreversible эсвэл external action-ийг explicit approval checkpoint-ийн цаана үлдээнэ.",
        ],
        mentalModel: {
          title: "Ажлын тасалбар + түлхүүр",
          explanation: "Task specification нь юу дуусгах ажлын тасалбар, permission нь ямар өрөө багажид хүрэх түлхүүр. Сайн тасалбар хэт өргөн түлхүүр шаарддаггүй.",
        },
        code: "TASK\nAdd accessible card motion in motion.css.\n\nCONTEXT\n- Existing .card, :hover, :focus-within rules\n- Lesson 13 reduced-motion requirement\n\nCONSTRAINTS\n- Do not change HTML or install dependencies\n- Do not deploy or push\n\nACCEPTANCE\n- Hover and keyboard focus get equivalent feedback\n- Reduced-motion disables non-essential motion\n- npm run lint passes\n- Show the diff before finalizing",
        language: "text",
      },
      {
        title: "Diff-first review ба ownership",
        detail: "Tool ямар ч нэртэй байсан changed file, added/removed line, command output, runtime behavior-ийг уншиж байж accept, modify, reject шийдвэр гаргана.",
        example: "Prediction → proposal → diff → static/runtime test → accept, modify эсвэл reject.",
        theory: [
          "AI output бол proposal. Diff нь яг ямар file, мөр, behavior өөрчлөгдөх гэж байгааг харуулдаг review boundary. File list-ээс scope creep, removed line-оос алдагдсан behavior, added line-оос duplication, unsafe command, hardcoded value-г хайна.",
          "Lint болон build pass болох нь syntax/type/build contract-ийг нотолж болох ч хэрэглэгчийн behavior зөв гэдгийг дангаараа батлахгүй. CSS motion-д browser state, keyboard focus, reduced-motion emulation; data feature-д normal, empty, error case гэх мэт task-specific runtime evidence нэмнэ.",
          "Accept нь ‘tool зөв байх’ дээр бус acceptance criteria бүр evidence-тэй pass болсон дээр үндэслэнэ. Modify нь зөв санааг scope-д нийцүүлнэ. Reject нь unrelated, unverified, unsafe proposal-ийг codebase-д оруулахгүй гэсэн бүрэн зөв инженерийн шийдвэр.",
        ],
        mentalModel: {
          title: "Proposal → evidence → decision",
          explanation: "AI confidence шийдвэр биш. Diff юу өөрчлөгдсөнийг, test юу ажилласныг, runtime check хэрэглэгч юу мэдрэхийг нотолсны дараа ownership хүн дээр үлдэнэ.",
        },
        formatBlocks: [
          {
            type: "sequence",
            title: "Review loop",
            items: [
              { title: "1. Predict", detail: "Expected files, behavior, risks-ийг AI output-оос өмнө бич." },
              { title: "2. Inspect", detail: "Status, file list, diff, proposed commands-ийг унш." },
              { title: "3. Verify", detail: "Lint/build болон task-specific runtime checks ажиллуул." },
              { title: "4. Decide", detail: "Acceptance бүрээр accept, modify, reject хий." },
              { title: "5. Record", detail: "Evidence-тэй жижиг commit эсвэл review note үлдээ." },
            ],
          },
        ],
      },
    ], demo: "Ижил CSS motion task-ийг completion, inline edit, agent-аар гүйцэтгүүлж, зориудын 10% алдааг diff ба browser test-ээр олох", practice: "Copilot, Cursor эсвэл Devin workflow-оос task-д тохирохыг сонгож scoped prompt, diff review, test хийх", evidence: "Tool/mode сонголтын шалтгаан, prompt, permission, Git diff, lint/build, browser behavior", next: "Дизайнаас код ба үүсгэмэл медиа",
  },
  15: {
    concepts: [
      { title: "Visual reference-ийг constraint болгон унших", detail: "Screenshot-оос hierarchy, spacing, typography, assets, responsive behavior-ийг тусад нь гаргана.", example: "Hero-г content/layout/style/state checklist болгон задлах." },
      { title: "Screenshot-to-code бол таамаг", detail: "Зураг DOM semantics, breakpoint, hidden state-ийг бүрэн өгдөггүй.", example: "Card харагдавч article эсвэл link эсэхийг requirement шийднэ." },
      { title: "Үүсгэмэл image, icon ба asset pipeline", detail: "Asset-ийн зорилго, format, dimensions, alt text, license/provenance-ийг шийднэ.", example: "Decorative WebP image ба semantic SVG icon." },
      { title: "Generated component cleanup", detail: "Dependency, naming, duplication, accessibility, responsive behavior-ийг өөрийн codebase-д нийцүүлнэ.", example: "Нэг том generated component-ийг data + reusable card болгон салгах." },
    ], demo: "Нэг UI reference-ийг бүтэцчилж, generated component-ийг semantic responsive хувилбар болгох", practice: "Portfolio section-ийг reference-аас хэрэгжүүлээд asset checklist бөглөх", evidence: "DOM semantics, viewport screenshots, asset size, Lighthouse, diff", next: "Төсөл 1: Portfolio сайт",
  },
  16: {
    concepts: [
      { title: "Project scope ба acceptance criteria", detail: "Portfolio-ийн заавал байх content, state, responsive ба accessibility шалгуурыг кодоос өмнө тогтооно.", example: "Hero, 3 project, contact, keyboard, 360/1280px." },
      { title: "Semantic information architecture", detail: "Page sections болон heading hierarchy нь content-ийн утгыг илэрхийлнэ.", example: "header → main → section → article → footer." },
      { title: "Responsive implementation ба polish", detail: "Mobile-first structure дээр Flex/Grid, readable type, consistent spacing, visible focus нэмнэ.", example: "Project grid 1 → 2 → 3 columns." },
      { title: "Verification, deployment ба presentation", detail: "Build, accessibility, links, deployed URL, Git history-ээр completion-оо нотолно.", example: "Acceptance checklist + live URL + final commit." },
    ], demo: "Requirement-ээс нэг portfolio section-ийг implement, verify, commit хүртэл trace хийх", practice: "Portfolio MVP-г build-review-fix циклээр дуусгах", evidence: "Acceptance checklist, Lighthouse, build, deployed URL, Git log", next: "JavaScript-ийн үндэс",
  },
};

function createConcept(id: number, item: Blueprint["concepts"][number], index: number): LessonConcept {
  return {
    id: `lesson-${id}-concept-${index + 1}`,
    number: String(index + 1).padStart(2, "0"),
    title: item.title,
    eyebrow: item.title.toLocaleLowerCase("mn").replaceAll(" ", " · "),
    duration: "10–12 минут",
    whyItMatters: `${item.detail} Энэ нь “${lessonTitles[id]}” сэдвийн дараагийн шийдвэр, дадлага, verification-ийн суурь болно.`,
    explanation: item.theory ?? [
      item.detail,
      ...(lessonTheoryContext[id] ?? []),
      `${item.example} Энэ жишээ нь “${item.title}” ойлголт бодит бүтэц болон ажиллагаанд хэрхэн илрэхийг харуулна.`,
    ],
    mentalModel: item.mentalModel ?? {
      title: `${item.title} — товч загвар`,
      explanation: `${item.detail} ${item.example}`,
    },
    example: { title: "Ажилладаг жижиг жишээ", explanation: item.example, code: item.code, language: item.language },
    formatBlocks: item.formatBlocks,
    diagram: { label: `${item.title} reasoning flow`, nodes: [{ title: "ЗОРИЛГО", detail: "Ямар асуудал?" }, { title: "ШИЙДЭЛ", detail: "Ямар дүрэм?" }, { title: "EVIDENCE", detail: "Юугаар батлах?" }] },
    questions: [
      { question: `${item.title} ямар асуудлыг шийдэж байна вэ?`, answer: item.detail },
      { question: "Энэ сонголтыг ямар evidence-ээр батлах вэ?", answer: "Expected behavior-ээ эхлээд бичээд бодит output, viewport, diff эсвэл хэмжилттэй тулгана." },
    ],
    misconceptions: [{ claim: "Нэг удаа зөв харагдсан эсвэл ажилласан бол шийдэл бүрэн зөв.", correction: "Requirement бүрийг хэвийн болон boundary нөхцөлд тусдаа evidence-ээр шалгана." }],
    teachingNotes: ["Definition-ээс өмнө expected behavior-ээ бич.", "Жишээ бүрийн дараа юу өөрчлөгдөж, юу хэвээр үлдсэнийг тэмдэглэ."],
    takeaway: `Эндээс заавал санах зүйл: ${item.detail}`,
  };
}

function createReferenceLesson(id: number): ReferenceLesson {
  const lesson = lessons.find((item) => item.id === id)!;
  const blueprint = blueprints[id];
  const isProject = id === 16;
  return {
    id, durationMinutes: 120, sections, teachStyle: "tutorial",
    teachContent: {
      eyebrow: `Technical guide · Week ${id <= 12 ? "03" : "04"}`,
      title: `Агуулга — ${lesson.title}`,
      introduction: `${blueprint.concepts.length} үндсэн ойлголтыг тайлбар, ажилладаг жижиг жишээ, decision guide болон verification workflow-оор дарааллаар нь судална.`,
      chapterLabel: `LESSON ${id} — ${blueprint.concepts.length} ҮНДСЭН ХЭСЭГ`,
    },
    resources: id === 13 ? [
      { title: "MDN — CSS transforms", description: "Transform functions, coordinate space болон accessibility reference.", href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transforms" },
      { title: "MDN — CSS transitions", description: "Transition properties, shorthand болон animatable state reference.", href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions" },
      { title: "MDN — CSS animations", description: "@keyframes, animation properties болон animation event reference.", href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations" },
      { title: "MDN — prefers-reduced-motion", description: "Reduced motion media feature болон accessible fallback.", href: "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion" },
    ] : id === 14 ? [
      { title: "GitHub Copilot documentation", description: "Copilot completion, chat, edit болон agent workflow-ийн official documentation.", href: "https://docs.github.com/en/copilot" },
      { title: "Cursor documentation", description: "Cursor Tab, Inline Edit, Agent, context болон tool controls.", href: "https://docs.cursor.com/" },
      { title: "Devin documentation", description: "Ask/Agent session, IDE, shell, browser болон review workflow.", href: "https://docs.devin.ai/" },
    ] : undefined,
    teacherGoal: `Энэ guide-ийг дуусгаснаар “${lesson.title}” сэдвийг бодит шийдвэр, trade-off, шалгах evidence-тэй нь тайлбарлаж, ${blueprint.practice.toLocaleLowerCase("mn")} чадна.`,
    overview: {
      objectives: blueprint.concepts.map((item) => `${item.title}-ийг тайлбарлаж, бодит жишээнд хэрэглэх.`),
      prerequisites: ["Өмнөх хичээлийн deliverable", "Editor, browser, DevTools болон Git-ийн үндсэн хэрэглээ", "Expected ба observed үр дүнг ялгаж бичих чадвар"],
      tools: [
        id === 14 ? "VS Code + GitHub Copilot, Cursor, эсвэл Devin demo account" : "VS Code эсвэл Cursor",
        "Browser + DevTools",
        "Git",
        id === 13 ? "DevTools Animations + Rendering panel" : id === 12 ? "Ollama эсвэл LM Studio + cloud AI" : "AI chat/editor — review-д",
      ],
      outcomes: [`${blueprint.practice}.`, `${blueprint.evidence}-ээр үр дүнгээ нотолно.`, "AI саналын diff-ийг requirement бүрээр зөвшөөрөх эсвэл татгалзана."],
      preparation: ["Starter болон expected result-ийг урьдчилан шалгана.", "Test viewport болон clean Git diff бэлэн байна.", "Network/account шаардах хэсэгт offline fallback screenshot эсвэл sample output ашиглаж болно."],
      timeline: [
        { start: "00:00", duration: "10 мин", title: "Problem ба prediction", teacherAction: "Baseline behavior-ийг ажиглаж, expected result болон эхний таамгийг бичнэ." },
        { start: "00:10", duration: "40 мин", title: "Guide chapters", teacherAction: "Дөрвөн chapter-ийг explanation, example, misconception, evidence-ийн дарааллаар судална." },
        { start: "00:50", duration: "20 мин", title: "Live demo", teacherAction: blueprint.demo },
        { start: "01:10", duration: "5 мин", title: "Завсарлага", teacherAction: "Practice starter-ийг нээж дараагийн хэсэгт бэлдэнэ." },
        { start: "01:15", duration: "25 мин", title: "Guided practice", teacherAction: blueprint.practice },
        { start: "01:40", duration: "12 мин", title: "AI Lab", teacherAction: "AI claim бүрийг diff болон runtime evidence-ээр audit хийнэ." },
        { start: "01:52", duration: "8 мин", title: "Checkpoint ба wrap-up", teacherAction: "Concept болон application асуултаар өөрийгөө шалгана." },
      ],
    },
    concepts: blueprint.concepts.map((item, index) => createConcept(id, item, index)),
    liveDemo: {
      title: blueprint.demo, duration: "20 минут", goal: `${blueprint.demo}; алхам бүрийн шалтгаан болон evidence-ийг ил болгох.`,
      setup: ["Starter state болон expected result", "Editor ба browser output-ийг зэрэг харах split view", "Demo эхлэхийн өмнөх clean diff"],
      steps: [
        { title: "Baseline тогтоох", instruction: "Starter-ийг нээж одоогийн behavior-ийг ажиллуул.", observe: "Одоогийн state ба асуудлын шинж тэмдэг.", explain: "Өөрчлөлтийн өмнөх evidence хэрэгтэй." },
        { title: "Prediction бичих", instruction: "Хийх нэг өөрчлөлт болон хүлээгдэж буй үр дүнг тэмдэглэлдээ бич.", explain: "Нэг алхамд нэг шалтгаан шалгана." },
        { title: "Incremental хэрэгжүүлэх", instruction: blueprint.demo, observe: "Өөрчлөлт бүрийн дараах output.", explain: "Яагаад энэ дүрэм requirement-д нийцэж байгааг хэл." },
        { title: "Boundary шалгах", instruction: blueprint.evidence, expected: "Normal болон boundary case хоёул acceptance-д хүрнэ." },
        { title: "Diff review", instruction: "Git diff-ээр intended ба unrelated change-ийг ялга.", expected: "Зөвхөн шаардлагатай өөрчлөлт үлдэнэ." },
      ],
      expectedOutput: [`${blueprint.practice} суурь болох ажилладаг жишээ.`, `${blueprint.evidence} цугларсан байна.`],
      recovery: ["Output өөрчлөгдөхгүй бол save, selector/import, console error-ийг энэ дарааллаар шалга.", "Boundary fail бол last known-good жижиг алхам руу буцаж нэг хувьсагч өөрчил."],
    },
    guidedPractice: {
      title: blueprint.practice, duration: isProject ? "35 минут" : "25 минут", goal: `${blueprint.practice}; шийдвэр бүрээ өөрийн үгээр хамгаалах.`,
      instructions: ["Acceptance criteria-г 3–5 checkbox болгон бич.", "Baseline-аа ажиллуулж хамгийн жижиг алхмаар хэрэгжүүл.", blueprint.evidence, "Git diff уншаад evidence note хадгал."],
      constraints: ["Unrelated file өөрчлөхгүй", "Copy-paste бүрийн мөрийг тайлбарлаж чадна", "Normal ба boundary case хоёулыг шалгана"],
      hints: ["Гацвал goal → current evidence → smallest next test гэж бич.", "Visual result-оос гадна DOM/computed output/diff-ээ шалга."],
      expectedResult: [`${blueprint.practice} дууссан.`, `${blueprint.evidence} pass болсон.`],
      stretchTask: "Нэг нэмэлт edge case сонгоод ямар failure-ээс хамгаалснаа тайлбарла.",
      debriefQuestions: [{ question: "Хамгийн чухал шийдвэр чинь юу байсан бэ?", answer: "Requirement, сонгосон rule, evidence гэсэн гурван хэсгээр хариулна." }, { question: "Юуг зориуд өөрчлөөгүй вэ?", answer: "Scope-д хамаарахгүй хэсгийг нэрлэж, яагаад гэдгийг хэлнэ." }],
    },
    aiLab: {
      title: "AI proposal-ийг evidence-ээр audit хийх", duration: "12 минут", goal: "AI-г answer machine бус review хийх hypothesis generator болгон ашиглах.",
      prompt: `Task: ${blueprint.practice}\nConstraints: existing structure-ийг хадгал; unrelated refactor бүү хий.\nAcceptance: ${blueprint.evidence}.\nЭхлээд plan ба expected diff өг. Дараа нь claim бүрт шалгах evidence нэрлэ.`,
      steps: [{ title: "Өөрийн prediction", instruction: "AI-аас өмнө шийдэл ба эрсдэлээ бич." }, { title: "Proposal авах", instruction: "Prompt-оо relevant context-тэй өг." }, { title: "Claim audit", instruction: blueprint.evidence }, { title: "Decision", instruction: "Accept, modify, reject аль нэгийг шалтгаантай сонго." }],
      verificationTable: [{ claim: "Proposal requirement-д нийцсэн", evidence: blueprint.evidence, pass: "Acceptance бүр бодитоор pass" }, { claim: "Scope цэвэр", evidence: "Git diff", pass: "Unrelated change байхгүй" }, { claim: "Code ownership хадгалагдсан", evidence: "Мөр бүрийн purpose тайлбар", pass: "AI текстгүйгээр хамгаалж чадна" }],
      teacherNotes: ["AI output-оос өмнөх prediction-ийг хадгал.", "No-change эсвэл reject нь зөв инженерийн шийдвэр байж болно."],
    },
    checkpoint: {
      duration: "8 минут", instructions: "Notes болон AI ашиглахгүй. Concept хариуг нэг өгүүлбэрээр, application хариуг rule + evidence хэлбэрээр өг.",
      questions: [
        { type: "concept", question: `${blueprint.concepts[0].title} гэж юу вэ?`, answer: blueprint.concepts[0].detail },
        { type: "concept", question: `${blueprint.concepts[1].title} ямар зорилготой вэ?`, answer: blueprint.concepts[1].detail },
        { type: "application", question: `${blueprint.practice} ажлыг юугаар pass гэж нотлох вэ?`, answer: blueprint.evidence },
        { type: "application", question: "AI санал өгсөн үед шууд accept хийхийн оронд ямар дараалал барих вэ?", answer: "Prediction → diff → normal/boundary test → evidence → accept/modify/reject." },
      ],
    },
    wrapUp: {
      summary: blueprint.concepts.map((item) => item.detail), abilities: [`${blueprint.practice}`, `${blueprint.evidence}-ээр шалгах`, "AI proposal-ийг diff ба acceptance-аар review хийх"],
      beforeNextLesson: ["Practice deliverable-аа дуусгаж Git diff шалга", "Checkpoint-ийн сул concept-оо өөрийн жишээгээр дахин тайлбарла", "Evidence-тэй жижиг commit үүсгэ"],
      finalModel: "Requirement → prediction → smallest change → normal/boundary evidence → diff review → decision",
      exitTicket: [{ question: "Өнөөдрийн нэг key takeaway?", answer: blueprint.concepts[0].detail }, { question: "Ямар evidence хамгийн хүчтэй байсан бэ?", answer: blueprint.evidence }],
      nextLesson: { title: `Lesson ${id + 1} — ${blueprint.next}`, connection: `Өнөөдрийн verified deliverable дараагийн “${blueprint.next}” сэдвийн starter болно.` },
      teacherClose: "“Зөв харагдсан” гэдгээр дуусгахгүй. Ямар requirement-ийг ямар evidence-ээр баталснаа нэг өгүүлбэрээр тэмдэглэ.",
    },
  };
}

export const weekThreeAndFourReferenceLessons = Object.fromEntries(
  Object.keys(blueprints).map((id) => [Number(id), createReferenceLesson(Number(id))]),
) as Record<number, ReferenceLesson>;
