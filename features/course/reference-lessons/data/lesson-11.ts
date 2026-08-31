import type { ReferenceLesson } from "../types";

export const lesson11Reference: ReferenceLesson = {
  id: 11,
  durationMinutes: 120,
  teachStyle: "tutorial",
  teacherGoal:
    "Сурагч responsive design-ийн утга, viewport, media query syntax, breakpoint, responsive property, absolute/relative unit-ийг ойлгож, mobile-first page бичиж шалгана.",
  teachContent: {
    eyebrow: "CSS documentation · Week 03",
    title: "Агуулга — Responsive Design бүрэн гарын авлага",
    introduction:
      "6 бүлэгтэй: responsive design гэж юу вэ, viewport, media query syntax, нийтлэг viewport ба breakpoint, CSS unit, responsive шалгалт.",
    chapterLabel: "LESSON 11 — RESPONSIVE DESIGN REFERENCE",
  },
  resources: [
    {
      title: "MDN — Responsive web design",
      description: "Responsive layout, flexible grid, media query, mobile-first ойлголт.",
      href: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design",
    },
    {
      title: "MDN — Media query fundamentals",
      description: "@media syntax, media type, feature, breakpoint сонголт.",
      href: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Media_queries",
    },
    {
      title: "MDN — CSS values and units",
      description: "Absolute, relative, viewport болон font-relative unit reference.",
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Values_and_units",
    },
  ],
  sections: [
    { id: "overview", shortLabel: "01", label: "Тойм" },
    { id: "teach", shortLabel: "02", label: "Агуулга" },
    { id: "demo", shortLabel: "03", label: "Live demo" },
    { id: "practice", shortLabel: "04", label: "Дадлага" },
    { id: "ai-lab", shortLabel: "05", label: "AI Lab" },
    { id: "checkpoint", shortLabel: "06", label: "Checkpoint" },
    { id: "wrap-up", shortLabel: "07", label: "Дүгнэлт" },
  ],
  overview: {
    objectives: [
      "Responsive design-ийн зорилго, viewport, mobile-first зарчмыг тайлбарлах.",
      "@media syntax болон min-width/max-width нөхцөл бичих.",
      "Layout, sizing, media property бүрийг зөв үед нь хэрэглэх.",
      "Absolute ба relative unit-ийн ялгаа, боломжит value-г сонгох.",
      "Нийтлэг viewport, breakpoint болон завсрын хэмжээнд page шалгах.",
    ],
    prerequisites: [
      "Хичээл 09-ийн Flexbox wrap, basis, axis ба responsive toolbar",
      "Хичээл 10-ын Grid auto-fit/minmax, source order ба overlay evidence",
      "Хичээл 07-ын box model, relative units, cascade, specificity",
      "Semantic HTML, image alt, form label гэсэн суурь accessibility ойлголт",
    ],
    tools: [
      "VS Code эсвэл text editor",
      "Browser Responsive Design Mode + DevTools Elements/Computed",
      "Keyboard + browser zoom",
      "Terminal + Git diff",
      "AI chat/AI editor — diff review ба test generation-д",
    ],
    outcomes: [
      "Fixed page-ийг mobile-first responsive layout болгоно.",
      "Media query-г зөв syntax болон breakpoint-тай бичнэ.",
      "Container, text, image, grid, action-д тохирох property/value сонгоно.",
      "px, %, em, rem, vw/vh, ch, fr unit-ийг зөв хэрэглэнэ.",
      "320–1440px, zoom, keyboard нөхцөлд үр дүнгээ шалгана.",
    ],
    preparation: [
      "Viewport meta дутуу, 72rem fixed wrapper, two-column fixed widths, fixed heading size, overflow image бүхий starter page бэлд.",
      "Before state-ийг 1440, 768, 390, 320px дээр screenshot авч horizontal scroll хэмжилттэй хадгал.",
      "Browser zoom 200%, keyboard Tab, prefers-reduced-motion emulation хаана байдгийг шалга.",
      "Responsive Mode preset-ийг ‘iPhone’ нэрээр заахын оронд editable width ашиглахаар projector-оо тохируул.",
      "Lesson 10-ын Grid page-ийг practice starter болгож ашиглавал clean commit/branch үүсгэ.",
    ],
    timeline: [
      { start: "00:00", duration: "7 мин", title: "1. Responsive design гэж юу вэ?", teacherAction: "Нэг page өөр viewport дээр хэрхэн reflow хийхийг definition ба жишээгээр тайлбарла." },
      { start: "00:07", duration: "10 мин", title: "2. Viewport ба responsive суурь", teacherAction: "Viewport meta, normal flow, box sizing, responsive media base бич." },
      { start: "00:17", duration: "13 мин", title: "3. Media query syntax ба properties", teacherAction: "@media, min/max/range, Flex/Grid, sizing property/value-ийг reference table-аар уншуул." },
      { start: "00:30", duration: "10 мин", title: "4. Viewport sizes ба breakpoints", teacherAction: "Нийтлэг test width, breakpoint starter болон content-driven сонголтын ялгааг хүснэгтээр тайлбарла." },
      { start: "00:40", duration: "12 мин", title: "5. Absolute ба relative units", teacherAction: "px/cm болон %/em/rem/vw/vh/ch/fr unit-ийн reference, use case, эрсдэлийг харьцуул." },
      { start: "00:52", duration: "8 мин", title: "6. Responsive recipe ба шалгалт", teacherAction: "Container, grid, image, typography recipe-г 320–1440px, zoom, keyboard-аар шалга." },
      { start: "01:00", duration: "16 мин", title: "Live demo — fixed page refactor", teacherAction: "Before evidence-ээс эхлээд smallest mobile-first patch хийж, content-driven breakpoint болон 4 нөхцөлөөр шалга." },
      { start: "01:16", duration: "26 мин", title: "Guided Practice — responsive profile", teacherAction: "Хос бүр acceptance matrix бичээд profile page-аа base → enhancement дарааллаар засахад coach хий." },
      { start: "01:42", duration: "10 мин", title: "AI Lab — responsive diff review", teacherAction: "AI-ийн diff-ээс arbitrary breakpoints, hidden overflow, reordered DOM, fixed sizes-ийг олж evidence-ээр accept/reject хийлгэ." },
      { start: "01:52", duration: "6 мин", title: "Checkpoint", teacherAction: "Mobile-first, breakpoint, fluid constraint, zoom, source order-ийн богино reasoning асуултад AI-гүй хариулуул." },
      { start: "01:58", duration: "2 мин", title: "AI ecosystem bridge", teacherAction: "Responsive code хийх tool биш, зөв model/tool/cost сонгоод output-ийг шалгах process Lesson 12-т үргэлжлэхийг холбо." },
    ],
  },
  syntaxGuide: {
    eyebrow: "RESPONSIVE CSS QUICK REFERENCE",
    title: "Syntax, property, value, unit-ийн лавлах",
    introduction:
      "Доорх reference нь responsive page бичих үндсэн syntax-ийг нэг дор харуулна. Base CSS-ээ эхэлж бичээд, шаардлагатай behavior-ийг media query-гаар нэмнэ.",
    groups: [
      {
        title: "1. HTML viewport ба global responsive base",
        badge: "HTML + BASE CSS",
        explanation:
          "Viewport meta нь mobile browser-д page-ийн CSS өргөнийг device width-тэй тохируулна. Box sizing хэмжээний тооцоог хялбарчилж, media container-ээсээ халихгүй болно.",
        code: {
          title: "Бүх responsive page-ийн эхлэл",
          language: "html",
          code: "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n<style>\n*, *::before, *::after { box-sizing: border-box; }\nimg, video { display: block; max-width: 100%; height: auto; }\n</style>",
          note: "user-scalable=no эсвэл maximum-scale=1 ашиглаж zoom-ийг хаахгүй.",
        },
        properties: [
          { property: "viewport", values: "width=device-width, initial-scale=1", meaning: "CSS viewport-ийг mobile device-ийн өргөнтэй тохируулна." },
          { property: "box-sizing", values: "content-box | border-box", meaning: "border-box үед width дотор padding, border багтана." },
          { property: "max-width", values: "none | 100% | <length>", meaning: "Element-ийн дээд өргөнийг хязгаарлана." },
          { property: "height", values: "auto | <length> | <percentage>", meaning: "Image-д auto ашиглавал харьцаа хадгалагдана." },
        ],
      },
      {
        title: "2. Media query-ийн бүрэн syntax",
        badge: "@MEDIA",
        explanation:
          "@media нөхцөл true үед доторх CSS ажиллана. Mobile-first үед query-гүй base бичээд min-width enhancement нэмнэ.",
        code: {
          title: "Base, min-width, range, preference",
          language: "css",
          code: ".layout { display: block; }\n\n@media (min-width: 48rem) {\n  .layout { display: grid; }\n}\n\n@media (min-width: 48rem) and (max-width: 63.999rem) {\n  .layout { gap: 1.5rem; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  * { scroll-behavior: auto; }\n}",
          note: "screen media type ихэнх width query-д заавал биш; бичээгүй бол all гэж үзнэ.",
        },
        properties: [
          { property: "media type", values: "all | screen | print", meaning: "Ямар төрлийн output-д query үйлчлэхийг заана." },
          { property: "min-width", values: "<length>", meaning: "Viewport энэ хэмжээнээс өргөн үед style нэмнэ." },
          { property: "max-width", values: "<length>", meaning: "Viewport энэ хэмжээнээс нарийн үед style хэрэглэнэ." },
          { property: "orientation", values: "portrait | landscape", meaning: "Viewport-ийн өргөн/өндрийн харьцааг шалгана." },
          { property: "prefers-reduced-motion", values: "reduce | no-preference", meaning: "Хөдөлгөөн багасгах user preference-ийг шалгана." },
        ],
      },
      {
        title: "3. Layout-д хамгийн их хэрэглэдэг properties",
        badge: "LAYOUT",
        explanation:
          "Flex нь нэг чиглэлийн row/column, Grid нь мөр ба баганатай layout-д тохирно. wrap, auto-fit, minmax() нь media query-гүйгээр ч responsive behavior үүсгэнэ.",
        code: {
          title: "Responsive cards ба actions",
          language: "css",
          code: ".cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr));\n  gap: 1rem;\n}\n\n.actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}",
          note: "auto-fit нь багтах баганын тоог, minmax() нь баганын хамгийн бага/их хэмжээг удирдана.",
        },
        properties: [
          { property: "display", values: "block | flex | grid | none", meaning: "Layout context сонгоно; essential content-ийг responsive болгохын тулд none бүү ашигла." },
          { property: "flex-direction", values: "row | column", meaning: "Flex item-ийн үндсэн чиглэлийг сонгоно." },
          { property: "flex-wrap", values: "nowrap | wrap", meaning: "Зай хүрэхгүй үед item дараагийн мөр рүү орох эсэх." },
          { property: "grid-template-columns", values: "1fr | repeat() | minmax()", meaning: "Grid-ийн баганын тоо ба хэмжээг тодорхойлно." },
          { property: "gap", values: "<length> | <percentage>", meaning: "Flex/Grid item хоорондын зай." },
        ],
      },
      {
        title: "4. Container, text, image-ийн sizing properties",
        badge: "SIZING",
        explanation:
          "width-ийг flexible, max-width-ийг limit болгон хослуул. Image-д aspect-ratio ба object-fit ашиглаж scale эсвэл crop behavior-ийг тодорхойл.",
        code: {
          title: "Container, text, image recipe",
          language: "css",
          code: ".container {\n  width: min(100% - 2rem, 72rem);\n  margin-inline: auto;\n}\n\n.prose { max-width: 65ch; }\n.hero img { width: 100%; aspect-ratio: 16 / 9; object-fit: cover; }",
          note: "height:auto нь бүтэн image-ийг scale хийнэ; fixed aspect-ratio + object-fit:cover нь хүрээнд crop хийнэ.",
        },
        properties: [
          { property: "width", values: "auto | <length> | <percentage> | min() | max()", meaning: "Element-ийн өргөнийг тогтооно." },
          { property: "min-width / max-width", values: "none | <length> | <percentage>", meaning: "Агших доод, сунах дээд хязгаар." },
          { property: "overflow-wrap", values: "normal | break-word | anywhere", meaning: "Урт text/token container-ээс халихыг удирдана." },
          { property: "aspect-ratio", values: "auto | <number> / <number>", meaning: "Box-ийн өргөн-өндрийн харьцааг тогтооно." },
          { property: "object-fit", values: "fill | contain | cover | none | scale-down", meaning: "Image/video box дотор хэрхэн таарахыг сонгоно." },
        ],
      },
      {
        title: "5. Absolute ба relative units",
        badge: "CSS UNITS",
        explanation:
          "Absolute unit тогтмол reference-тэй. Relative unit parent, font, viewport эсвэл grid space-ээс хамаарч өөрчлөгдөнө. Responsive layout-д relative unit их хэрэглэдэг ч px бас border зэрэгт зөв сонголт байж болно.",
        code: {
          title: "Unit бүрийн энгийн жишээ",
          language: "css",
          code: ".card {\n  border: 1px solid;       /* absolute */\n  padding: 1rem;           /* root font */\n  width: 90%;              /* parent */\n  max-width: 40rem;        /* root font */\n}\n\n.prose { max-width: 65ch; } /* text metric */\n.hero { min-height: 60svh; } /* small viewport */\n.grid { grid-template-columns: 1fr 2fr; } /* free space */",
          note: "cm/mm/in/pt нь print-д хэрэгтэй; screen layout-д ихэвчлэн px болон relative units ашиглана.",
        },
        properties: [
          { property: "Absolute", values: "px | cm | mm | in | pt | pc", meaning: "Тогтмол reference. Screen-д px, print-д physical units хэрэглэгддэг." },
          { property: "%", values: "0%–100%+", meaning: "Property-оос хамаарч containing block эсвэл өөр reference-тэй." },
          { property: "em / rem", values: "<number>em | <number>rem", meaning: "em нь тухайн font context; rem нь root font size." },
          { property: "vw / vh", values: "1vw | 1vh", meaning: "Viewport өргөн/өндрийн 1%. Mobile height-д svh/dvh/lvh-ийг бодолцоно." },
          { property: "ch", values: "<number>ch", meaning: "Text line length-ийн ойролцоо limit-д тохиромжтой." },
          { property: "fr", values: "<number>fr", meaning: "Grid container-ийн үлдсэн зайнаас хувь авна." },
        ],
      },
      {
        title: "6. Fluid value functions",
        badge: "MIN · MAX · CLAMP",
        explanation:
          "min(), max(), clamp(), calc() нь relative ба absolute value-г нэг constraint болгон холбоно.",
        code: {
          title: "Хязгаартай fluid хэмжээ",
          language: "css",
          code: ".page { width: min(100% - 2rem, 72rem); }\n.sidebar { width: max(16rem, 25%); }\nh1 { font-size: clamp(2rem, 1.4rem + 3vw, 4rem); }\n.main { min-height: calc(100svh - 4rem); }",
          note: "clamp(minimum, preferred, maximum) дарааллаар бичнэ.",
        },
        properties: [
          { property: "min()", values: "min(value, value)", meaning: "Хамгийн бага тооцоолсон value-г сонгоно." },
          { property: "max()", values: "max(value, value)", meaning: "Хамгийн их тооцоолсон value-г сонгоно." },
          { property: "clamp()", values: "clamp(min, preferred, max)", meaning: "Preferred value-г доод/дээд хязгаарт барина." },
          { property: "calc()", values: "calc(expression)", meaning: "Compatible unit-үүдээр arithmetic тооцоо хийнэ." },
        ],
      },
    ],
  },
  concepts: [
    {
      id: "responsive-contract",
      number: "01",
      title: "Responsive design гэж юу вэ?",
      tutorialLabel: "Үндсэн ойлголт",
      eyebrow: "fluid · flexible · adaptive",
      duration: "7 минут",
      whyItMatters:
        "Responsive design нь нэг web page-ийг утас, tablet, laptop, desktop болон zoom хийсэн үед уншигдах, ашиглагдах байдлаар дасан зохицуулна.",
      explanation: [
        "Responsive page viewport өөрчлөгдөхөд layout reflow хийж, text уншигдаж, image container-д багтаж, action-ууд ашиглагдсаар байна.",
        "Үндсэн 3 хэрэгсэл нь flexible layout, flexible media/unit, media query. Flex/Grid нь байрлалыг, relative unit нь хэмжээг, media query нь тодорхой нөхцөл дэх өөрчлөлтийг удирдана.",
        "Responsive гэдэг mobile page тусад нь хийх биш. Нэг semantic HTML дээр CSS behavior өөрчлөгдөнө.",
      ],
      mentalModel: {
        title: "Нэг жүжиг, өөр тайз",
        explanation:
          "Зохиолын утга, дүрүүдийн дараалал хэвээр; тайзны хэмжээ өөр болоход байрлал, хөдөлгөөн зохицно. Analogy-ийн хязгаар: веб дээр хэрэглэгч zoom, font, input preference-ээ өөрчилж, content dynamic орж ирнэ.",
      },
      example: {
        title: "Profile actions-ийн behavior requirement",
        explanation:
          "‘Desktop дээр row, narrow үед wrap/stack; бүх button бүтэн label, focus ring-тэй’ гэдэг нь screenshot-аас илүү шалгаж болох spec.",
        code: ".profile-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n\n.profile-actions > * {\n  flex: 1 1 10rem;\n}",
        language: "css",
      },
      formatBlocks: [
        {
          type: "comparison",
          title: "Responsive зорилгыг vague-ээс testable болгох",
          columns: ["VAGUE", "TESTABLE BEHAVIOR"],
          rows: [
            { label: "Layout", left: "Mobile дээр гоё болго", right: "320px дээр horizontal scroll-гүй нэг column reflow" },
            { label: "Text", left: "Font-оо жижигрүүл", right: "200% zoom дээр text overlap/clip хийхгүй" },
            { label: "Navigation", left: "Menu-г багтаа", right: "Keyboard-аар бүх action хүрдэг, label нуухгүй" },
          ],
        },
      ],
      diagram: {
        label: "Responsive acceptance-ийн дөрвөн давхарга",
        nodes: [
          { title: "CONTENT", detail: "Meaning + priority" },
          { title: "LAYOUT", detail: "Reflow + no overflow" },
          { title: "INTERACTION", detail: "Keyboard + touch" },
          { title: "EVIDENCE", detail: "Widths + zoom + content" },
        ],
      },
      questions: [
        { question: "Responsive page бүх өргөнд яг ижил харагдах ёстой юу?", answer: "Үгүй. Layout өөрчлөгдөж болно; content meaning, hierarchy, readability, task completion хадгалагдана." },
        { question: "390px screenshot зөв бол mobile acceptance хангагдсан уу?", answer: "Ганц evidence. 320px, zoom, урт content, keyboard/input, intermediate widths-ийг нэмж шалгана." },
      ],
      misconceptions: [
        { claim: "Responsive = mobile version тусад нь хийх.", correction: "Нэг semantic content олон нөхцөлд fluid/reflow behavior-аар ажиллах system; зарим UI pattern нөхцлөөр өөрчлөгдөж болно." },
        { claim: "Бүхнийг жижигрүүлбэл багтана.", correction: "Readability, touch target, zoom accessibility муудна; reflow, wrap, hierarchy, constraint-ээр шийд." },
      ],
      teachingNotes: [
        "Before screenshot хараад ‘муухай’ гэдэг үг авахгүй; яг ямар content/task эвдэрснийг measurable өгүүлбэр болгуул.",
        "Responsive гэдэг design review + engineering evidence хоёулын ажил гэдгийг эхэнд тогтоо.",
      ],
      takeaway: "Responsive design = flexible layout + flexible size/media + media query.",
    },
    {
      id: "viewport-and-flow",
      number: "02",
      title: "Viewport гэж юу вэ, responsive page-ээ яаж эхлүүлэх вэ?",
      tutorialLabel: "Viewport ба base CSS",
      eyebrow: "viewport · normal flow · media",
      duration: "10 минут",
      whyItMatters:
        "Responsive CSS зөв мэт боловч mobile browser өргөн viewport-ийг shrink хийвэл breakpoint, text size буруу харагдаж болно. Мөн fixed dimensions natural flow-ийг эвдсэн эх үүсвэрийг query-гаар нөхөхөөс өмнө base-аа засах хэрэгтэй.",
      explanation: [
        "Viewport бол browser дотор web page харагдаж буй талбай. CSS width media query нь энэ талбайн CSS pixel өргөнийг шалгана.",
        "Viewport meta-гийн width=device-width нь layout viewport-ийг device-ийн CSS pixel width-тэй тааруулна. initial-scale=1 анхны zoom scale-г тогтооно. User zoom-ийг хаах maximum-scale/user-scalable=no бүү ашигла.",
        "Block elements normal flow-д container өргөнийг дүүргэж, дараагийн block доор ордог тул mobile-first нэг column base ихэнхдээ нэмэлт layout code бага шаардана. Fixed width/height, absolute positioning, nowrap, large minimums энэ resilience-ийг эвдэж болно.",
        "Image intrinsic өргөн container-ээс том бол overflow хийнэ. max-width:100%; height:auto base нь image-ийг агшааж aspect ratio хадгална. Харин purposeful crop хэрэгтэй hero thumbnail-д wrapper, aspect-ratio, object-fit requirement тусдаа.",
        "Overflow-x:hidden эх үүсвэрийг засахгүй, нотолгоог нууж болно. DevTools дээр scrollWidth > clientWidth болсон element, fixed/min-width/transform/long token зэрэг root cause-ийг ол.",
      ],
      mentalModel: {
        title: "Эхлээд ус өөрөө урсаг",
        explanation:
          "Normal flow бол савныхаа өргөнд дагаж урсах ус. Fixed width/absolute position нь урсгалд тавьсан хатуу хаалт. Analogy-ийн хязгаар: Grid/Flex зэрэг layout context purposeful structure өгч, normal flow-оос өөр дүрэм хэрэглэнэ.",
      },
      example: {
        title: "Хуудасны хамгийн бага responsive base",
        explanation:
          "Viewport зөв, box sizing predictable, media container-ээс халихгүй байна.",
        code: "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n<style>\n*, *::before, *::after { box-sizing: border-box; }\nimg, video { display: block; max-width: 100%; height: auto; }\n</style>",
        language: "html",
      },
      formatBlocks: [
        {
          type: "callout",
          eyebrow: "DEBUG RULE",
          title: "Overflow-ийг нуухын өмнө эх үүсвэрийг ол",
          body: "Page дээр overflow-x:hidden тавих нь fixed child, long token, transform, 100vw + padding зэрэг root cause-ийг хэвээр үлдээнэ. Scroll үүсгэж буй box-ийг хэмжээд тухайн constraint-ийг зас.",
          tone: "warning",
        },
      ],
      questions: [
        { question: "Viewport meta responsive CSS-ийг автоматаар хийдэг үү?", answer: "Үгүй. CSS-д бодит layout viewport өгнө; layout behavior-ийг CSS/HTML тусад нь тодорхойлно." },
        { question: "overflow-x:hidden нэмээд scroll алга болбол bug засагдсан уу?", answer: "Ихэнхдээ үгүй. Илүүдэл content нуугдсан; root element ба accessibility impact-ийг олж засна." },
      ],
      misconceptions: [
        { claim: "maximum-scale=1 тавих нь layout тогтвортой болгоно.", correction: "User zoom-ийг хязгаарлаж accessibility муутгана; layout 200%+ zoom-д reflow хийх ёстой." },
        { claim: "width:100vw нь container-д 100% гэсэн үг.", correction: "vw viewport-тэй хамаарна; scrollbar/padding-тай нийлээд overflow үүсгэж болно. Component width-д 100% ихэнхдээ өөр intent." },
      ],
      teachingNotes: [
        "Viewport meta-г устгаад mobile emulation result хэрхэн өөрчлөгдөхийг богино харуул; browser ялгаа байж болохыг тэмдэглэ.",
        "Console-д нэг удаа document.documentElement.scrollWidth/clientWidth уншуулж overflow evidence ав.",
      ],
      takeaway: "Viewport meta + border-box + flexible media нь responsive page-ийн суурь.",
    },
    {
      id: "mobile-first-cascade",
      number: "03",
      title: "Media query-г CSS дээр яаж бичих вэ?",
      tutorialLabel: "@media syntax",
      eyebrow: "type · feature · operator · rules",
      duration: "13 минут",
      whyItMatters:
        "Desktop fixed layout бичээд олон max-width override-аар undo хийх нь cascade төвөгтэй болгодог. Query-гүй simplest flow дээр эхэлж, шаардлагатай үед structure нэмэх нь code болон reasoning-ийг цэгцтэй болгоно.",
      explanation: [
        "Үндсэн хэлбэр нь @media (media-feature: value) { selector { property: value; } }. Condition true үед доторх rules cascade-д орно.",
        "Media type нь all, screen, print. Width-based layout-д type-ийг ихэвчлэн бичихгүй. Feature-д min-width, max-width, orientation, hover, pointer, prefers-reduced-motion орно.",
        "and нь хэд хэдэн нөхцөлийг зэрэг шаардана. not нь query-г үгүйсгэнэ. Таслал нь OR буюу аль нэг query true байхад rules ажиллана.",
        "Mobile-first: query-гүй нэг column base бичээд min-width query-гаар two-column зэрэг enhancement нэмнэ. Desktop-first: wide base дээр max-width override нэмдэг.",
      ],
      mentalModel: {
        title: "Суурь хувцас дээр давхарлах",
        explanation:
          "Base нь бүх нөхцөлд өмсөх үндсэн давхарга, өргөн/нөхцөл нэмэгдэхэд enhancement нэмж өмсөнө. Analogy-ийн хязгаар: CSS cascade-д selector specificity, source order, inheritance зэрэг нэмэлт дүрэм шийдвэр гаргана.",
      },
      example: {
        title: "Stacked base, side-by-side enhancement",
        explanation:
          "HTML order өөрчлөгдөхгүй; зөвхөн 48rem-ээс дээш Grid track нэмэгдэнэ.",
        code: ".content-layout {\n  display: grid;\n  gap: 1rem;\n}\n\n@media (min-width: 48rem) {\n  .content-layout {\n    grid-template-columns: minmax(0, 2fr) minmax(16rem, 1fr);\n    gap: 2rem;\n  }\n}",
        language: "css",
      },
      formatBlocks: [
        {
          type: "sequence",
          title: "Mobile-first implementation flow",
          items: [
            { title: "Semantic HTML", detail: "Source order query-гүй үед утгатай." },
            { title: "Narrow base", detail: "Natural flow, media, actions 320px дээр ажиллана." },
            { title: "Pressure point", detail: "Resize хийж layout сайжрах/эвдрэх цэгийг олно." },
            { title: "Enhancement", detail: "min-width query-д зөвхөн хэрэгтэй difference нэмнэ." },
            { title: "Matrix test", detail: "Width хооронд, zoom, keyboard regression шалгана." },
          ],
        },
        {
          type: "comparison",
          title: "Media feature ба боломжит value",
          columns: ["VALUE / SYNTAX", "ХЭЗЭЭ ХЭРЭГЛЭХ ВЭ?"],
          rows: [
            { label: "min-width", left: "(min-width: 48rem)", right: "Энэ өргөнөөс дээш enhancement" },
            { label: "max-width", left: "(max-width: 47.999rem)", right: "Энэ өргөн хүртэл targeted override" },
            { label: "orientation", left: "portrait | landscape", right: "Viewport харьцаанд үнэхээр өөр behavior хэрэгтэй үед" },
            { label: "hover", left: "hover | none", right: "Hover capability шалгах үед" },
            { label: "pointer", left: "fine | coarse | none", right: "Input precision шалгах үед" },
            { label: "reduced motion", left: "reduce | no-preference", right: "Animation багасгах үед" },
          ],
        },
        {
          type: "callout",
          eyebrow: "БҮҮ АНДУУР",
          title: "CSS property ба media feature өөр",
          body: ".card { max-width: 40rem; } нь card-ийн хэмжээг хязгаарлана. @media (max-width: 40rem) нь viewport-ийн нөхцөлийг шалгана.",
          tone: "info",
        },
      ],
      questions: [
        { question: "Mobile-first үед desktop style бүгд media query дотор байх уу?", answer: "Зөвхөн илүү зай/нөхцөл шаардсан difference орно; shared typography/color/component base query-гүй байна." },
        { question: "min-width query хоёр overlap хийвэл аль дүрэм ялах вэ?", answer: "Condition үнэн болсон rules бүгд cascade-д орно; importance, origin, layer, specificity, source order шийднэ." },
      ],
      misconceptions: [
        { claim: "Mobile-first бол desktop-ийг орхих.", correction: "Бүх нөхцөлд quality шалгана; code organization narrow base-ээс эхэлж progressively enhance хийдэг." },
        { claim: "Media query дотор бүх selector-оо дахин хуулна.", correction: "Зөвхөн өөрчлөгдөх declaration бич; shared base-аа давтахгүй." },
      ],
      teachingNotes: [
        "Cascade timeline зур: base үргэлж active; 48rem болоход enhancement нэмэгдэнэ. ‘Файл өөр солигдож байна’ гэдэг эндүүрлийг зас.",
        "Desktop-first existing code refactor хийхэд бүхнийг rewrite хийх шаардлагагүй; smallest safe reorganization хийж болно.",
      ],
      takeaway: "@media condition true үед rules ажиллана; mobile-first-д base + min-width enhancement бичнэ.",
    },
    {
      id: "content-breakpoints",
      number: "04",
      title: "Нийтлэг viewport хэмжээ ба breakpoint-ийг яаж сонгох вэ?",
      tutorialLabel: "Viewport ба breakpoint",
      eyebrow: "320 · 390 · 768 · 1024 · 1440",
      duration: "10 минут",
      whyItMatters:
        "Нийтлэг хэмжээнүүд test эхлүүлэхэд хэрэгтэй. Гэхдээ breakpoint бол device-ийн нэр биш, layout өөрчлөгдөх цэг.",
      explanation: [
        "Viewport width нь browser content area-ийн CSS pixel хэмжээ. Physical screen resolution-тэй заавал ижил биш; zoom, device pixel ratio, split-screen нөлөөлнө.",
        "320, 360, 375, 390, 412px нь narrow/phone test; 768, 1024px нь tablet/small window; 1280, 1440, 1920px нь laptop/desktop test-д түгээмэл anchor.",
        "Common breakpoint starter нь 30rem (480px), 40rem (640px), 48rem (768px), 64rem (1024px), 80rem (1280px), 90rem (1440px). Эдгээр нь standard биш.",
        "Viewport-ийг resize хийж nav эвдрэх, text шахагдах, columns багтахгүй болох цэгийг ол. Тэр цэгт ойр breakpoint сонгоод доор, дээр нь test хий.",
      ],
      mentalModel: {
        title: "Хувцасны оёдлын таталт",
        explanation:
          "Даавуу таталдаж эхлэх эсвэл илүү бүтэц оруулах зай гарсан цэгт оёдлоо өөрчилнө; хүний model нэрээр биш хэмжсэн fit-ээр шийднэ. Analogy-ийн хязгаар: веб content dynamic тул олон stress case шаардана.",
      },
      example: {
        title: "Navigation багтах цэгийг хэмжих",
        explanation:
          "Links, logo, actions нийлээд 43rem орчимд comfortable байвал 44rem enhancement туршиж, 43/44/45rem дээр regression шалгана.",
        code: "@media (min-width: 44rem) {\n  .site-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n}",
        language: "css",
      },
      formatBlocks: [
        {
          type: "comparison",
          title: "Түгээмэл test viewport widths",
          columns: ["ОРЧНЫ ЖИШЭЭ", "ЮУГ ШАЛГАХ ВЭ?"],
          rows: [
            { label: "320px", left: "Маш нарийн phone / minimum test", right: "Overflow, wrap, readable text" },
            { label: "360–412px", left: "Түгээмэл phone viewport range", right: "Navigation, cards, actions" },
            { label: "768px", left: "Tablet portrait / narrow window", right: "Stack-аас columns руу шилжих эсэх" },
            { label: "1024px", left: "Tablet landscape / small laptop", right: "Sidebar, full navigation" },
            { label: "1280–1440px", left: "Laptop / desktop", right: "Max-width, line length, whitespace" },
            { label: "1920px", left: "Large desktop", right: "Content хэт суналт, image quality" },
          ],
        },
        {
          type: "comparison",
          title: "Common breakpoint starter values",
          columns: ["PX-ТЭЙ ОЙРОЛЦОО", "ТҮГЭЭМЭЛ ӨӨРЧЛӨЛТ"],
          rows: [
            { label: "30rem", left: "480px", right: "Compact spacing/action өөрчлөлт" },
            { label: "40rem", left: "640px", right: "Cards эсвэл form layout өргөжүүлэх" },
            { label: "48rem", left: "768px", right: "One column → two columns" },
            { label: "64rem", left: "1024px", right: "Sidebar/full navigation" },
            { label: "80rem", left: "1280px", right: "Wide layout spacing" },
            { label: "90rem", left: "1440px", right: "Large-screen enhancement" },
          ],
        },
        {
          type: "callout",
          eyebrow: "IMPORTANT",
          title: "Breakpoint утга standard биш",
          body: "Дээрх хэмжээнүүд эхлэх reference. Final breakpoint-ийг өөрийн content эвдэрч эсвэл layout сайжрах цэгээр сонго.",
          tone: "warning",
        },
        {
          type: "checklist",
          title: "Breakpoint сонгохоос өмнөх асуулт",
          items: [
            "Яг ямар content/task одоо эвдэрч эсвэл сайжрах боломжтой байна?",
            "Natural wrap/Grid auto-fit query-гүй шийдэж чадах уу?",
            "Breakpoint-ийн хоёр талд 1rem зайгаар test хийсэн үү?",
            "Zoom/font size нэмэгдэхэд behavior хэвээр ойлгомжтой юу?",
            "Энэ query зөвхөн difference бичсэн үү?",
            "Шалтгааныг device нэргүй нэг өгүүлбэрээр тайлбарлаж чадах уу?",
          ],
        },
      ],
      questions: [
        { question: "768px яагаад universal tablet breakpoint биш вэ?", answer: "Device, viewport, zoom, split-screen, content өөр; breakpoint тухайн layout behavior/pressure-ээс гарна." },
        { question: "Grid auto-fit card count-ийг шийдэж байвал нэмэлт breakpoint заавал хэрэгтэй юу?", answer: "Үгүй. Өөр behavior өөрчлөх requirement байхгүй бол query нэмэх хэрэггүй." },
      ],
      misconceptions: [
        { claim: "Олон breakpoint байвал илүү responsive.", correction: "Requirement бүр тайлбартай байх ёстой; олон override cascade ба edge case өсгөж болно." },
        { claim: "Breakpoint яг content overflow хийсэн pixel дээр байх ёстой.", correction: "Comfortable/readable зайг тооцож boundary сонгоод хоёр талд test хийнэ; ганц pixel formula биш." },
      ],
      teachingNotes: [
        "Responsive Mode-ийн width field-ийг projector дээр харуулж, preset device button ашиглахгүйгээр slow resize хий.",
        "Breakpoint олохоос өмнө CSS query нэмэхийг хориглож, observed pressure note заавал бичүүл.",
      ],
      takeaway: "Viewport sizes-ийг test-д ашигла; breakpoint-ийг content behavior-аар сонго.",
    },
    {
      id: "fluid-sizes",
      number: "05",
      title: "Absolute ба relative CSS units",
      tutorialLabel: "CSS units",
      eyebrow: "px · % · em · rem · vw · vh · ch · fr",
      duration: "12 минут",
      whyItMatters:
        "Unit бүр өөр reference-тэй. Буруу unit сонговол overflow, хэт жижиг text, хэт урт line үүснэ.",
      explanation: [
        "Absolute units: px, cm, mm, in, pt, pc. CSS px нь physical device pixel биш бөгөөд browser zoom-д scale хийнэ. Screen UI-д px-ийг border, icon, жижиг fixed detail-д хэрэглэнэ; cm/mm/in/pt нь ихэвчлэн print-д тохирно.",
        "Font-relative units: em нь тухайн element-ийн font context, rem нь root font size, ch нь ‘0’ glyph-ийн өргөнтэй хамаарна. rem spacing/type-д, ch text line limit-д тохиромжтой.",
        "Container-relative unit: % нь property-оос хамаарч parent/containing block-ийг reference болгоно. Grid-ийн fr нь available free space-ийг хуваана.",
        "Viewport units: vw/vh нь viewport-ийн 1%; svh/lvh/dvh нь mobile browser UI өөрчлөгдөх үеийн small/large/dynamic height. Constraint-гүй viewport unit extreme хэмжээ үүсгэж болно.",
        "clamp(min, preferred, max) нь fluid value-г доод ба дээд limit-тэй болгоно. min(), max(), calc() нь олон unit-ийг нэг sizing rule-д холбоно.",
      ],
      mentalModel: {
        title: "Уян оосор + хоёр stopper",
        explanation:
          "Preferred fluid хэмжээ оосор шиг сунаж, min/max хоёр stopper хэт жижиг/том болохыг зогсооно. Analogy-ийн хязгаар: CSS calculation containing block, font metrics, viewport зэрэг өөр reference хэрэглэнэ.",
      },
      example: {
        title: "Readable article ба fluid heading",
        explanation:
          "Article viewport-ийг ашиглах боловч мөр хэт урт болохгүй; heading range дотор аажмаар өснө.",
        code: ".article {\n  width: min(100% - 2rem, 65ch);\n  margin-inline: auto;\n}\n\n.article h1 {\n  font-size: clamp(2rem, 1.5rem + 2.5vw, 4rem);\n  line-height: 1.05;\n}",
        language: "css",
      },
      formatBlocks: [
        {
          type: "comparison",
          title: "Absolute units",
          columns: ["REFERENCE", "ХЭЗЭЭ ХЭРЭГЛЭХ ВЭ?"],
          rows: [
            { label: "px", left: "CSS pixel", right: "Border, icon, purposeful small fixed size" },
            { label: "cm / mm / in", left: "Physical length relation", right: "Print stylesheet; screen layout-д ховор" },
            { label: "pt / pc", left: "1pt = 1/72in; 1pc = 12pt", right: "Print typography; web screen text-д ховор" },
          ],
        },
        {
          type: "comparison",
          title: "Relative units",
          columns: ["ЮУНД ХАМААРАХ ВЭ?", "ТҮГЭЭМЭЛ USE CASE"],
          rows: [
            { label: "%", left: "Containing block эсвэл property-ийн reference", right: "Flexible width, percentage spacing" },
            { label: "em", left: "Тухайн element-ийн font size", right: "Component-local spacing/size" },
            { label: "rem", left: "Root html font size", right: "Typography, spacing, breakpoint" },
            { label: "vw / vh", left: "Viewport width / height", right: "Fluid preferred size; limit-тэй хэрэглэ" },
            { label: "svh / lvh / dvh", left: "Small / large / dynamic viewport height", right: "Mobile full-height section" },
            { label: "ch", left: "‘0’ glyph-ийн өргөн", right: "Readable text max-width" },
            { label: "fr", left: "Grid-ийн free space", right: "Flexible grid tracks" },
          ],
        },
      ],
      questions: [
        { question: "font-size:5vw дангаараа яагаад эрсдэлтэй вэ?", answer: "Жижиг viewport-д хэт жижиг, том viewport-д хэт том байж болно; rem minimum/maximum бүхий clamp range хэрэгтэй." },
        { question: "65ch яг 65 Монгол үсэг багтана гэсэн үг үү?", answer: "Үгүй. ‘0’ glyph-ийн metric-д тулгуурласан relative unit; readable line length-ийн ойролцоо constraint." },
      ],
      misconceptions: [
        { claim: "px бол үргэлж муу, relative unit үргэлж сайн.", correction: "Intent, browser behavior, zoom, constraint-аар сонгоно; border 1px тохиромжтой байж болно, fixed layout width эрсдэлтэй." },
        { claim: "Fluid value байвал min/max шаардлагагүй.", correction: "Extreme viewport/font/content дээр usable range алдагдаж болно; constraint болон test хэрэгтэй." },
      ],
      teachingNotes: [
        "Unit conversion math-д удахгүй; reference + constraint + runtime test гэсэн decision дээр төвлөр.",
        "clamp code paste хийсний дараа 320/768/1440px computed font-size-г гурван мөрөөр тэмдэглүүл.",
      ],
      takeaway: "Unit-ийг reference-аар сонго: px = fixed detail, rem = font/spacing, % = parent, vw/vh = viewport, ch = text, fr = grid.",
    },
    {
      id: "responsive-evidence",
      number: "06",
      title: "Responsive page бичих дараалал ба шалгалт",
      tutorialLabel: "Recipe ба QA",
      eyebrow: "base · layout · breakpoint · test",
      duration: "8 минут",
      whyItMatters:
        "Зөв дарааллаар бичвэл media query, override, overflow цөөрнө. Олон хэмжээнд шалгавал завсрын алдаа илэрнэ.",
      explanation: [
        "1. Semantic HTML ба viewport meta бич. 2. Query-гүй narrow base хий. 3. Container, media, text-ээ flexible constraint-тэй болго.",
        "4. Flex/Grid ашиглан layout хий. 5. Content-д зай хүрэхгүй эсвэл шинэ layout багтах цэгт min-width query нэм.",
        "6. 320, 390, 768, 1024, 1440px болон breakpoint-ийн яг доор/дээр шалга. Horizontal scroll, overlap, хэт урт line хай.",
        "7. 200% zoom, keyboard, урт text, missing image test хий. Essential content болон action алга болох ёсгүй.",
      ],
      mentalModel: {
        title: "Салхины хонгилын туршилт",
        explanation:
          "Нэг тайван нөхцөлд биш, олон pressure/input condition-д бүтээгдэхүүнээ туршина. Analogy-ийн хязгаар: browser/device diversity бүхэлд нь лабораторид дуурайх боломжгүй тул real-device test бас хэрэгтэй.",
      },
      example: {
        title: "Responsive acceptance matrix",
        explanation:
          "Condition бүр expected behavior, evidence, pass/fail гэсэн мөртэй байна.",
        code: "CONDITION | EXPECTED | EVIDENCE | RESULT\n320px | one column, no x-scroll | screenshot + scrollWidth | __\n767/769px | breakpoint transition clean | recording/notes | __\n200% zoom | content reflows, controls visible | zoom screenshot | __\nKeyboard | logical visible focus | Tab path | __\nLong title | wraps without overlap | stress text | __",
        language: "text",
      },
      formatBlocks: [
        {
          type: "sequence",
          title: "Responsive implementation recipe",
          items: [
            { title: "BASE", detail: "Viewport, border-box, natural flow" },
            { title: "CONSTRAINT", detail: "width/max-width, media, type" },
            { title: "LAYOUT", detail: "Flex/Grid, wrap, auto-fit" },
            { title: "BREAKPOINT", detail: "Content-driven min-width enhancement" },
            { title: "TEST", detail: "Widths, zoom, keyboard, long content" },
          ],
        },
        {
          type: "checklist",
          title: "‘Responsive done’ болохын өмнөх minimum matrix",
          items: [
            "320–1440px sweep-д horizontal page scroll байхгүй.",
            "Breakpoint бүрийн доор/дээр layout огцом эвдрэхгүй.",
            "200% zoom дээр essential content/control харагдана.",
            "Tab order logical, focus indicator тайрагдахгүй.",
            "Урт label, error text, missing image layout эвдэхгүй.",
            "Reduced motion preference-д non-essential motion багасна.",
          ],
        },
        {
          type: "callout",
          eyebrow: "PASS CONDITION",
          title: "Screenshot бол evidence-ийн нэг хэсэг",
          body: "Pass шийдвэрт source/diff, computed rule, measured overflow, keyboard path, zoom/content result хэрэгтэй. ‘Надад зөв харагдсан’ гэдэг ганц өгүүлбэр хангалтгүй.",
          tone: "success",
        },
      ],
      questions: [
        { question: "200% zoom responsive test-д яагаад хэрэгтэй вэ?", answer: "Text томорч effective viewport багасахад reflow, overlap, hidden controls/accessibility issue илэрнэ." },
        { question: "Device emulation real-device test-ийг бүрэн орлох уу?", answer: "Үгүй. Layout-д хурдан evidence өгнө; real browser chrome, input, performance, font rendering зэрэг ялгаа үлдэнэ." },
      ],
      misconceptions: [
        { claim: "Chrome-ийн 3 device preset pass бол responsive дууссан.", correction: "Intermediate widths, zoom, content, keyboard, preference, боломжтой бол real device нэмнэ." },
        { claim: "Screenshot pixel-perfect таарвал accessibility бас pass.", correction: "Focus order, semantic source, zoom, screen reader/touch behavior screenshot-оос харагдахгүй." },
      ],
      teachingNotes: [
        "Matrix бүх мөрийг нэг demo-д төгс хийхгүй; хамгийн эрсдэлтэй 4-ийг ангид, үлдсэнийг assignment-д өг.",
        "AI ‘responsive’ гэж claim хийвэл exact tested widths/results нэх; хийж чадаагүй test-ийг AI-аар зохиолгохгүй.",
      ],
      takeaway: "Responsive workflow = base → constraint → layout → breakpoint → test.",
    },
  ],
  liveDemo: {
    title: "Fixed profile page-ийг mobile-first refactor хийх",
    duration: "16 минут",
    goal:
      "Fixed 72rem wrapper, 18rem + 50rem columns, overflow image бүхий page-ийг source order хадгалсан narrow base, flexible constraint, content-driven two-column enhancement болгон хамгийн жижиг diff-ээр өөрчлөх.",
    setup: [
      "lesson-11-responsive/profile.html, profile.css starter болон before screenshots бэлэн байна.",
      "Starter 390px дээр document scrollWidth > clientWidth болж буйг урьдчилан батал.",
      "HTML order avatar/profile info/actions/activity гэсэн logical дараалалтай, viewport meta зориуд байхгүй байна.",
      "Responsive Mode width editable, zoom 200%, Git diff command бэлэн байна.",
    ],
    steps: [
      {
        title: "Before evidence ба acceptance бич",
        instruction: "390px дээр x-scroll, image overflow, clipped actions-ийг хэмжээд 3 pass condition самбарт бич.",
        observe: "Page өргөн viewport-ээс их, fixed columns stack хийхгүй.",
        explain: "Код өөрчлөхөөс өмнө observed/expected зөрүүг баримтжуулна.",
      },
      {
        title: "Viewport болон media base зас",
        instruction: "Viewport meta нэмээд global box sizing, image max-width/height:auto base нэм.",
        code: {
          title: "Document base patch",
          language: "html",
          code: "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n<style>\n*, *::before, *::after { box-sizing: border-box; }\nimg { display: block; max-width: 100%; height: auto; }\n</style>",
        },
        observe: "Viewport measurement зөв болж image container-ээс халихгүй.",
        explain: "Энэ patch columns-ийг хараахан responsive болгоогүй; асуудлыг нэг нэг layer-ээр тусгаарлаж байна.",
      },
      {
        title: "Fixed wrapper-ийг flexible constraint болго",
        instruction: "width:72rem-ийг width:min(100% - 2rem,72rem) болон auto margin-аар соль.",
        code: {
          title: "Page shell constraint",
          language: "css",
          code: ".profile-page {\n  width: min(100% - 2rem, 72rem);\n  margin-inline: auto;\n  padding-block: clamp(1rem, 3vw, 3rem);\n}",
        },
        observe: "390px дээр wrapper viewport-д багтаж, wide дээр 72rem-ээс хэтрэхгүй.",
        explain: "Flexible width + maximum readable/design limit хамт ажиллаж байна.",
      },
      {
        title: "One-column base, measured enhancement",
        instruction: "Fixed columns-ийг query-гүй нэг column Grid болгоод 48rem орчимд content хангалттай зайтайг хэмжиж two-column enhancement нэм.",
        code: {
          title: "Mobile-first profile layout",
          language: "css",
          code: ".profile-layout { display: grid; gap: 1.5rem; }\n\n@media (min-width: 48rem) {\n  .profile-layout {\n    grid-template-columns: 18rem minmax(0, 1fr);\n    align-items: start;\n  }\n}",
        },
        observe: "Narrow үед source order stack, 48rem дээш two-column enhancement болно.",
        explain: "Breakpoint нь profile sidebar ба main readable болсон pressure point.",
      },
      {
        title: "Matrix-аар final diff шалга",
        instruction: "320/767/769/1440px, 200% zoom, Tab, урт display name test хийгээд git diff мөр бүрийг acceptance-тэй холбо.",
        observe: "No x-scroll, logical order, visible controls, fluid shell/type.",
        explain: "Responsive claim-ийг exact conditions ба evidence баталж байна.",
      },
    ],
    expectedOutput: [
      "320px-аас 1440px хүртэл horizontal page scroll байхгүй.",
      "48rem-ээс доош one-column, дээш sidebar + main two-column болно.",
      "Image aspect ratio хадгалж container-ээс хэтрэхгүй.",
      "200% zoom, урт нэр, keyboard Tab үед content/control clip хийхгүй.",
      "Git diff fixed width-үүдийг purposeful constraints-аар сольсон байна.",
    ],
    recovery: [
      "Meta нэмсэн ч overflow хэвээр бол widest element-ийг Elements/scrollWidth-аар ол; hidden хийж нуухгүй.",
      "Media query ажиллахгүй бол viewport current width, computed rule, source order/syntax, cache-г шалга.",
      "Grid main content overflow хийвэл long token, minmax(0,1fr), min-width:0, word break requirement-ийг тусгаарлан test хий.",
      "Demo хугацаа дуусвал fluid shell + base flow-г working commit болгон хадгалж, enhancement-ийг prepared diff-ээр тайлбарла.",
    ],
  },
  guidedPractice: {
    title: "Responsive developer profile",
    duration: "26 минут",
    goal:
      "Profile header, skill grid, project cards, action buttons бүхий fixed page-ийг mobile-first refactor хийж 320/768/1280px, zoom, keyboard, long-content acceptance matrix-аар батлах.",
    starterCode: [
      {
        title: "Starter fixed CSS",
        language: "css",
        code: ".profile { width: 1100px; margin: 40px auto; }\n.profile-header { display: flex; gap: 32px; }\n.avatar { width: 280px; height: 280px; }\n.project-grid { display: grid; grid-template-columns: repeat(3, 320px); gap: 24px; }\n.profile-actions { display: flex; gap: 8px; white-space: nowrap; }\nh1 { font-size: 64px; }",
        note: "Энэ CSS-ийг бүхэлд нь rewrite хийхгүй. Before evidence-ээс root cause бүрийг smallest patch-аар зас.",
      },
    ],
    instructions: [
      "320, 768, 1280px дээр before state нээж x-scroll, column count, action wrap, text/image behavior-ийг matrix-д бич.",
      "HTML source order ба viewport meta шалга; logical order биш бол CSS-ээр reorder хийхээс өмнө semantic HTML-ээ засах шаардлагыг teacher-тэй ярь.",
      ".profile fixed width-ийг flexible width + max-width constraint болго.",
      "Profile header narrow үед stack байх base style бич; content хангалттай зайтай pressure point-ийг олж min-width enhancement нэм.",
      "Project grid fixed columns-ийг auto-fit/minmax responsive Grid болго.",
      "Action buttons wrap эсвэл stack хийх behavior өгч, label/focus ring-ийг нуухгүй.",
      "Heading-д rem/clamp range, avatar/image-д flexible max-width ба aspect ratio strategy хэрэглэ.",
      "320px, breakpoint доор/дээр, 1280px, 200% zoom, keyboard, урт нэр/skill label test хийж matrix бөглө.",
      "Git diff-ээс overflow:hidden, CSS reorder, unexplained duplicate query, unnecessary fixed item width байгаа эсэхийг шалга.",
    ],
    constraints: [
      "Essential content-ийг display:none хийж багтаахгүй.",
      "Page overflow-ийг overflow-x:hidden-ээр нуухгүй.",
      "HTML order logical бол CSS order/grid visual reorder ашиглахгүй.",
      "Breakpoint бүр observed content pressure гэсэн тайлбартай байна.",
      "Зөвхөн 3 preset screenshot бус zoom, long content, keyboard evidence заавал авна.",
    ],
    hints: [
      "Page shell: width:min(100% - 2rem, 70rem); margin-inline:auto pattern сана.",
      "Cards: repeat(auto-fit, minmax(min(100%, 16rem), 1fr)) туршиж overlay-оор батал.",
      "Actions: flex-wrap:wrap болон item flex-basis requirement-ээ бод.",
      "Heading: clamp(2rem, preferred vw calculation, 4rem) range-ийг computed size-аар шалга.",
      "Overflow element олохдоо documentElement scrollWidth/clientWidth болон Elements highlight ашигла.",
    ],
    expectedResult: [
      "Profile 320–1280px sweep-д horizontal page scroll-гүй.",
      "Header narrow үед logical stack, measured breakpoint дээр side-by-side болно.",
      "Project cards available space-аар баганын тоо өөрчилнө.",
      "Heading/image/buttons extreme хэмжээ, clip, hidden label-гүй.",
      "200% zoom ба keyboard Tab үед essential content/control reachable, visible.",
      "Acceptance matrix condition бүр evidence ба pass/fail тэмдэгтэй.",
    ],
    solutionCode: [
      {
        title: "Reference solution-ийн core layout",
        language: "css",
        code: ".profile { width: min(100% - 2rem, 70rem); margin-inline: auto; }\n.profile-header { display: grid; gap: 1.5rem; }\n.avatar { width: min(100%, 17.5rem); aspect-ratio: 1; object-fit: cover; }\n.project-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr)); gap: 1rem; }\n.profile-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; }\nh1 { font-size: clamp(2rem, 1.4rem + 3vw, 4rem); }\n@media (min-width: 48rem) { .profile-header { grid-template-columns: 17.5rem minmax(0, 1fr); } }",
        note: "Breakpoint болон sizes нь starter content-ийн evidence-д таарсан reference; өөр content-д шууд хуулалгүй дахин хэмж.",
      },
    ],
    stretchTask:
      "prefers-reduced-motion:reduce үед project card hover transform/transition-ийг багасгаж, keyboard focus state хөдөлгөөнгүй ч тод хэвээр байгааг шалга.",
    debriefQuestions: [
      { question: "Таны breakpoint ямар observed pressure-ээс гарсан бэ?", answer: "Profile image + main content readable хэмжээнд side-by-side багтах болсон exact behavior тайлбар шаардана; device нэр хангалтгүй." },
      { question: "Ямар fixed value-г хэвээр үлдээсэн, яагаад?", answer: "Border, icon, purposeful max/min зэрэг intent-тэй value байж болно; viewport-ийг эвдэх fixed layout width биш." },
      { question: "Screenshot-аас гадна хамгийн үнэ цэнтэй evidence юу байсан бэ?", answer: "Zoom, scrollWidth, computed query, Tab path, long-content result-ийн аль нэгийг шалтгаантай нэрлэнэ." },
    ],
  },
  aiLab: {
    title: "AI-ийн responsive diff-ийг мөр бүрээр нь шүүх",
    duration: "10 минут",
    goal:
      "AI-аар бүх page-ийг шууд rewrite хийлгэхгүй; observed evidence, constraints, acceptance matrix өгч хамгийн жижиг diff санал болгуулан arbitrary breakpoint, hidden overflow, visual reorder, fixed-size regression-ийг өөрөө илрүүлэх.",
    prompt: `Role: responsive CSS reviewer.

Доорх diff-ийг шууд дахин бичихгүйгээр review хий.

Observed before:
- 320px дээр document scrollWidth = [___], clientWidth = [___]
- [ELEMENT] container-ээс хальж байна.
- 200% zoom дээр [CONTROL] харагдахгүй.

Acceptance:
- 320–1440px x-scrollгүй.
- Source/Tab order logical хэвээр.
- Essential content нуухгүй.
- 200% zoom, long title, keyboard pass.
- Breakpoint бүр content behavior шалтгаантай.

Constraints:
- overflow-x:hidden, CSS order, absolute layout, framework нэмэхгүй.
- HTML structure-ийг зөвхөн source order үнэхээр буруу бол өөрчлөх санал гарга.
- Нэг удаад нэг smallest reversible patch.

DIFF:
[GIT DIFF-ЭЭ ЭНД ОРУУЛ]

Output:
1. Claim vs evidence хүснэгт
2. High-risk 3 мөр
3. Root-cause hypothesis
4. Нэг smallest patch
5. Exact viewport/zoom/keyboard tests
6. Acceptance хангагдаагүй бол “батлагдаагүй” гэж тэмдэглэ.`,
    steps: [
      {
        title: "AI-аас өмнө өөрийн diff review хий",
        instruction: "Hidden overflow, fixed width, reorder, unexplained query, extreme vw гэсэн таван smell-ийг diff-ээс өөрөө тэмдэглэ.",
        expected: "Өөрийн baseline review note бэлэн байна.",
      },
      {
        title: "Observed evidence-тэй prompt өг",
        instruction: "Placeholder бүрт бодит хэмжилт/diff оруул; хийгээгүй test result зохиож болохгүй.",
        explain: "AI-д context өгч байгаа ч truth source нь runtime ба source code хэвээр.",
      },
      {
        title: "Нэг hypothesis, нэг patch турш",
        instruction: "AI-ийн smallest patch-ийг хүлээн авахын өмнө root cause evidence-тэй таарч байгааг шалгаад тусдаа working copy дээр турш.",
        observe: "Нэг өөрчлөлтийн нөлөөг matrix-аас тусгаарлан харж болно.",
      },
      {
        title: "Matrix ба diff-ээр accept/reject",
        instruction: "320/breakpoint edges/1440/zoom/keyboard/long title test хийж, AI suggestion бүрийн decision бич.",
        expected: "Accepted change бүр evidence-тэй, rejected санал тодорхой constraint/regression шалтгаантай.",
      },
    ],
    verificationTable: [
      { claim: "‘overflow-x:hidden responsive асуудлыг зассан.’", evidence: "Hidden rule-ийг disable + scrollWidth/clientWidth + widest element inspect", pass: "Root cause element constraint засагдаж hidden rule-гүй x-scroll арилна." },
      { claim: "‘768px бол зөв breakpoint.’", evidence: "Content pressure note + 767/768/769px result", pass: "Behavior change тодорхой, хоёр талд readable/usable, device-name-only үндэслэлгүй." },
      { claim: "‘clamp heading бүх width-д accessible.’", evidence: "320/768/1440 computed font size + 200% zoom", pass: "Min/max range хангаж, overlap/clip/essential control displacement байхгүй." },
      { claim: "‘DOM order өөрчлөх шаардлагагүй.’", evidence: "CSS disabled reading order + Tab path + Git diff", pass: "Meaningful source/focus order хэвээр, CSS visual reorder ашиглаагүй." },
    ],
    teacherNotes: [
      "AI diff байхгүй сурагч starter-to-solution diff ашиглаж болно; provider сонголт оноонд нөлөөлөхгүй.",
      "AI `overflow:hidden`-ийг design choice гэж хамгаалбал essential content/focus clipping test-ээр claim-ийг ялга.",
      "AI хийж чадаагүй browser test-ийг ‘pass’ гэж бичсэн бол hallucinated evidence гэж тэмдэглүүл.",
    ],
  },
  checkpoint: {
    duration: "6 минут",
    instructions:
      "6 асуултад notes болон AI ашиглахгүй хариул.",
    questions: [
      { type: "concept", question: "Responsive design-ийн үндсэн 3 хэрэгсэл юу вэ?", answer: "Flexible layout, flexible media/unit, media query." },
      { type: "concept", question: "Viewport meta ямар үүрэгтэй вэ?", answer: "Layout viewport-ийг device-ийн CSS pixel width-тэй тохируулна." },
      { type: "concept", question: "Mobile-first media query-ийн syntax бич.", answer: "Query-гүй base; дараа нь @media (min-width: 48rem) { ... } enhancement." },
      { type: "concept", question: "768px яагаад universal breakpoint биш вэ?", answer: "Энэ нь түгээмэл starter/test width. Final breakpoint-ийг content behavior-аар сонгоно." },
      { type: "concept", question: "px, rem, %, vw, ch, fr юунд хамаарах вэ?", answer: "px=fixed CSS pixel, rem=root font, %=container/reference, vw=viewport width, ch=text metric, fr=Grid free space." },
      { type: "application", question: "Responsive card grid-д ямар properties/value ашиглах вэ?", answer: "display:grid; grid-template-columns:repeat(auto-fit,minmax(min(100%,16rem),1fr)); gap:<length>." },
    ],
  },
  wrapUp: {
    summary: [
      "Responsive design = flexible layout + flexible media/unit + media query.",
      "Viewport meta mobile CSS viewport-ийг зөв тохируулна.",
      "Mobile-first = query-гүй base + min-width enhancement.",
      "Common viewport size бол test anchor; breakpoint бол content boundary.",
      "Absolute unit fixed reference-тэй; relative unit font, parent, viewport эсвэл grid-д хамаарна.",
      "Workflow = base → constraint → layout → breakpoint → test.",
    ],
    abilities: [
      "Responsive design-ийг зөв тайлбарлах",
      "@media syntax ба mobile-first CSS бичих",
      "Property/value-ийг use case-аар сонгох",
      "Viewport/breakpoint хүснэгт ашиглах",
      "Absolute/relative unit зөв хэрэглэх",
      "Responsive page-ээ олон нөхцөлд шалгах",
    ],
    beforeNextLesson: [
      "Responsive profile-ээ matrix болон before/after evidence-тэй commit хий.",
      "AI review log-д нэг accepted, нэг rejected suggestion хадгал.",
      "Lesson 12-т browser, AI chat, terminal ашиглах боломжтой авчир.",
      "Өөрийн ашиглаж буй AI tool төлбөртэй/үнэгүй, chat/editor/CLI аль төрөл болохыг тэмдэглэ.",
    ],
    finalModel:
      "Responsive CSS = viewport base → flexible container/media → Flex/Grid → content breakpoint → width/zoom/keyboard test.",
    exitTicket: [
      { question: "Нэг mobile-first media query бич.", answer: "Base rule + @media (min-width: ...) дотор зөвхөн wide enhancement." },
      { question: "rem ба vw ямар ялгаатай вэ?", answer: "rem root font size-д, vw viewport width-д хамаарна." },
      { question: "Breakpoint-ийг юугаар сонгох вэ?", answer: "Content/layout behavior өөрчлөгдөх measured boundary-аар." },
    ],
    nextLesson: {
      title: "Lesson 12 — AI экосистем: загвар, хэрэгсэл ба зардал",
      connection:
        "Өнөөдөр нэг responsive diff-ийг engineering evidence-ээр шүүлээ. Дараагийн хичээлээр ийм ажилд chat, editor, CLI agent, API, cloud/local model-оос алийг яагаад сонгох, token-based cost-оо хэрхэн тооцож бодит usage-аар батлахыг сурна.",
    },
    teacherClose:
      "Responsive CSS-ийн гол дүрэм: flexible base бич, content шаардах үед breakpoint нэм, олон хэмжээнд шалга.",
  },
};
