import type { ReferenceLesson } from "../types";

export const lesson10Reference: ReferenceLesson = {
  id: 10,
  durationMinutes: 120,
  teachStyle: "tutorial",
  teacherGoal:
    "Сурагч CSS Grid-ийг card-уудыг зүгээр олон багана болгодог property биш, row ба column гэсэн хоёр тэнхлэг дээр track үүсгэж, item-уудыг line/area-аар байрлуулдаг layout model гэж ойлгоно. Тэд responsive card grid болон dashboard skeleton бүтээж, сонголтоо DevTools Grid overlay ба viewport test-ээр нотолж чадна.",
  teachContent: {
    eyebrow: "Алхамчилсан tutorial · Week 03",
    title: "Агуулга — CSS Grid-ээр хоёр хэмжээст layout бүтээх",
    introduction:
      "Flexbox-ийн нэг axis mental model-оос эхлээд Grid-ийн row + column contract руу шилжинэ. Бүлэг бүр syntax reference, жижиг code example, comparison, process, checklist, diagram болон асуулттай; property цээжлэхийн оронд layout-ийн intent-ээ тайлбарлаж сурна.",
    chapterLabel: "CSS GRID АГУУЛГЫН ЗУРАГЛАЛ",
  },
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
      "Grid container, direct grid item, row, column, track, line, cell, area гэсэн ойлголтыг DOM болон overlay дээр зааж тайлбарлах.",
      "grid-template-columns-д fixed, fr, repeat(), minmax() ашиглан track тодорхойлох.",
      "Item-ийг line number болон named area-аар байрлуулж, auto-placement-тай ялгах.",
      "repeat(auto-fit, minmax()) ашигласан responsive card grid бүтээх.",
      "Grid эсвэл Flexbox сонголтоо layout-ийн хоёр/нэг хэмжээст intent болон runtime evidence-ээр хамгаалах.",
    ],
    prerequisites: [
      "Хичээл 09-ийн flex container/item, axis, gap, wrap болон DevTools layout evidence",
      "Хичээл 07-ын box model, relative unit, cascade ба source order",
      "Semantic HTML бичиж, class selector ашиглан CSS холбох чадвар",
      "Git diff-ээр жижиг CSS өөрчлөлтөө унших чадвар",
    ],
    tools: [
      "VS Code эсвэл text editor",
      "Browser + DevTools Grid overlay, Layout, Computed",
      "Terminal + Git",
      "AI chat/AI editor — suggestion only, automatic apply унтраалттай",
      "index.html ба styles.css бүхий lesson-10-grid folder",
    ],
    outcomes: [
      "Нэг parent-ийг Grid container болгож, explicit column/row track үүсгэнэ.",
      "Dashboard-ийн header, sidebar, main хэсгийг named area-аар уншигдахуйц байрлуулна.",
      "Card тоо болон viewport өөрчлөгдөхөд баганын тоо өөрөө дасан зохицох grid хийнэ.",
      "Grid overlay-оос line, gap, track хэмжээг олж source code-той тулгана.",
      "Visual order-ийг эвдэхгүйгээр responsive layout-аа 960px, 640px, 360px дээр шалгана.",
    ],
    preparation: [
      "Нэг semantic dashboard HTML, зориуд fixed 3-column overflow-той CSS, мөн цэвэр starter branch бэлд.",
      "Chrome/Edge эсвэл Firefox DevTools-ийн Grid badge/overlay тухайн хувилбарт хаана байгааг урьдчилан шалга.",
      "Projector дээр grid line number, gap, area labels тод харагдах хэмжээнд browser zoom тохируул.",
      "Flexbox-оор хийсэн toolbar-ыг хэвээр үлдээ; нэг component дотор Flexbox ба Grid хамт ажиллаж болдгийг харуулна.",
      "AI demo-д гурван solution авах боловч эхлээд acceptance criteria болон өөрийн сонголтоо бичсэн байна.",
    ],
    timeline: [
      { start: "00:00", duration: "8 мин", title: "Flexbox-оос Grid рүү bridge", teacherAction: "Toolbar болон dashboard layout-ыг харьцуулж, нэг axis уу эсвэл row+column хоёуланг нь хянах уу гэж ангиар ангилуул." },
      { start: "00:08", duration: "12 мин", title: "Container, item, track ба line", teacherAction: "DOM tree болон Grid overlay дээр container, direct items, tracks, numbered lines-ийг зэрэг заа." },
      { start: "00:20", duration: "12 мин", title: "Track sizing syntax", teacherAction: "px, %, fr, repeat(), minmax()-ийг нэг container дээр утга тус бүрээр сольж, available space хэрхэн хуваарилагдахыг таалгуул." },
      { start: "00:32", duration: "11 мин", title: "Placement: auto, line, area", teacherAction: "Auto-placement-ийг эхлэл болгож, зөвхөн layout intent шаардсан item-уудыг line/area-аар байрлуул." },
      { start: "00:43", duration: "12 мин", title: "Responsive Grid", teacherAction: "auto-fit + minmax pattern-ийг өргөн багасгах үед overlay-оор ажиглуулж, breakpoint-гүй өөрчлөлтийн шалтгааныг тайлбарла." },
      { start: "00:55", duration: "5 мин", title: "Grid эсвэл Flexbox?", teacherAction: "Нэг ба хоёр хэмжээст layout decision checklist хийлгээд source order/accessibility заагийг сануул." },
      { start: "01:00", duration: "15 мин", title: "Live demo — dashboard skeleton", teacherAction: "Header/sidebar/main layout-ыг named areas-аар бүтээж, 640px дээр нэг column болгон өөрчил; overlay ба keyboard order-оор нотол." },
      { start: "01:15", duration: "27 мин", title: "Guided Practice — product grid", teacherAction: "Хос бүр responsive product grid бүтээж, 3 viewport-ийн evidence table бөглөхөд coach хий." },
      { start: "01:42", duration: "10 мин", title: "AI Lab — 3 шийдэл, 1 сонголт", teacherAction: "AI-ийн fixed columns, media-query, auto-fit шийдлийг acceptance criteria-аар харьцуулж, сонгосон нэгийг runtime-аар шалгуул." },
      { start: "01:52", duration: "6 мин", title: "Checkpoint", teacherAction: "Line, track, fr, minmax, source order-ийн зургаан асуултад эхлээд AI-гүй хариулуул." },
      { start: "01:58", duration: "2 мин", title: "Responsive design bridge", teacherAction: "Grid layout өөрөө уян байж болох ч бүх UI responsive болсон гэсэн үг биш гэдгийг Lesson 11 рүү холбо." },
    ],
  },
  syntaxGuide: {
    eyebrow: "GRID SYNTAX MAP",
    title: "Grid syntax-ийг container ба item-ийн contract болгон унших",
    introduction:
      "Grid-ийн ихэнх layout rule container дээр, зөвхөн тусгай placement item дээр бичигдэнэ. Track үүсгэх, зай өгөх, alignment хийх, placement хийх гэсэн дөрвөн зорилгоор доорх syntax-ийг бүлэглэв.",
    groups: [
      {
        title: "Grid container үүсгэж column ба row track тодорхойлох",
        badge: "GRID CONTAINER",
        appliesTo: "container",
        explanation:
          "display:grid нь direct children-ийг grid item болгоно. grid-template-columns болон grid-template-rows нь explicit grid-ийн track list; fr нь fixed хэмжээ, gap-ийг хассаны дараах available space-ийн хувь.",
        code: {
          title: "Гурван column, auto row бүхий үндсэн grid",
          language: "css",
          code: ".card-grid {\n  display: grid;\n  grid-template-columns: 16rem 1fr 1fr;\n  grid-auto-rows: minmax(8rem, auto);\n  gap: 1rem;\n}",
          note: "Grid rule-ийг card бүр дээр биш, бүх card-ийн нийтлэг parent дээр бичнэ.",
        },
        properties: [
          { property: "display", values: "grid | inline-grid", meaning: "Element-ийг grid formatting context болгож, direct children-ийг grid item болгоно." },
          { property: "grid-template-columns", values: "<track-list>", meaning: "Explicit column track-ийн тоо ба хэмжээг тодорхойлно." },
          { property: "grid-template-rows", values: "<track-list>", meaning: "Explicit row track-ийн тоо ба хэмжээг тодорхойлно." },
          { property: "grid-auto-rows", values: "auto | <length> | minmax()", meaning: "Auto-placement-аас шинээр үүссэн implicit row-ийн хэмжээг өгнө." },
        ],
      },
      {
        title: "Дахин давтагдах, уян track хэмжээг тодорхойлох",
        badge: "TRACK SIZING",
        appliesTo: "container",
        explanation:
          "repeat() ижил track-ийг товчилно. minmax(min, max) track-ийн доод ба дээд хязгаарыг өгнө. auto-fit нь багтах хэмжээгээр column slot үүсгээд хоосон slot-ийг collapse хийж болно.",
        code: {
          title: "Breakpoint-гүй responsive card pattern",
          language: "css",
          code: ".card-grid {\n  display: grid;\n  grid-template-columns:\n    repeat(auto-fit, minmax(min(100%, 15rem), 1fr));\n  gap: 1rem;\n}",
          note: "min(100%, 15rem) нь container 15rem-ээс нарийн үед track viewport-ээс халих эрсдэлийг бууруулна.",
        },
        properties: [
          { property: "fr", values: "1fr | 2fr", meaning: "Track sizing-д үлдсэн available space-ээс харьцаагаар share авна." },
          { property: "repeat()", values: "repeat(3, 1fr)", meaning: "Ижил pattern-тай track list-ийг давталтаар бичнэ." },
          { property: "minmax()", values: "minmax(15rem, 1fr)", meaning: "Track-ийн minimum ба maximum хэмжээг нэг range болгон өгнө." },
          { property: "auto-fit", values: "repeat(auto-fit, ...)", meaning: "Container-д багтах track-уудыг үүсгэж, ашиглагдаагүй flexible slot-ийг collapse хийнэ." },
        ],
      },
      {
        title: "Item-ийг numbered line эсвэл named area-аар байрлуулах",
        badge: "GRID ITEM",
        appliesTo: "item",
        explanation:
          "Auto-placement ихэнх list-д хангалттай. Тодорхой layout region хэрэгтэй үед line start/end эсвэл named area хэрэглэнэ; content-ийн meaningful DOM order-ийг CSS placement-аар орлуулахгүй.",
        code: {
          title: "Named area-тай dashboard",
          language: "css",
          code: ".dashboard {\n  display: grid;\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\";\n  grid-template-columns: 14rem 1fr;\n}\n\n.site-header { grid-area: header; }\n.sidebar { grid-area: sidebar; }\n.main { grid-area: main; }",
          note: "Area нэр layout intent-ийг уншигдахуйц болгоно; HTML source order accessibility-д хэвээр чухал.",
        },
        properties: [
          { property: "grid-column", values: "1 / 3 | span 2", meaning: "Item аль column line-ээс эхэлж аль line хүртэл span хийхийг товчилж өгнө." },
          { property: "grid-row", values: "1 / 2 | span 2", meaning: "Item-ийн row start/end эсвэл span-ийг өгнө." },
          { property: "grid-area", values: "main | 1 / 1 / 3 / 4", meaning: "Named area-д item холбох эсвэл дөрвөн line value-г shorthand-аар өгөх боломжтой." },
          { property: "grid-template-areas", values: "quoted area rows", meaning: "Container дээр area-гийн visual map-ийг text мөрүүдээр тодорхойлно." },
        ],
      },
      {
        title: "Gap болон grid доторх alignment-ийг зорилгоор сонгох",
        badge: "SPACING + ALIGNMENT",
        appliesTo: "container",
        explanation:
          "gap tracks хоорондын зайг өгнө. justify-items/align-items нь grid area дотор item box-ийг, justify-content/align-content нь container-д extra space үлдсэн үед бүх grid-ийг байрлуулна.",
        code: {
          title: "Grid items-ийг area дотор нь байрлуулах",
          language: "css",
          code: ".icon-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 6rem);\n  gap: 1rem;\n  justify-content: center;\n  align-items: start;\n}\n\n.featured { justify-self: stretch; }",
          note: "Items track-аа 1fr-ээр бүрэн дүүргэсэн бол content alignment харагдах extra space үлдэхгүй байж болно.",
        },
        properties: [
          { property: "gap", values: "<row-gap> <column-gap>", meaning: "Adjacent row/column tracks-ийн хооронд тогтмол gutter үүсгэнэ." },
          { property: "justify-items", values: "stretch | start | center | end", meaning: "Бүх item-ийг өөрийн grid area дотор inline axis-аар байрлуулна." },
          { property: "align-items", values: "stretch | start | center | end", meaning: "Бүх item-ийг өөрийн grid area дотор block axis-аар байрлуулна." },
          { property: "place-items", values: "<align-items> <justify-items>", meaning: "align-items ба justify-items-ийг нэг shorthand-аар өгнө." },
        ],
      },
    ],
  },
  concepts: [
    {
      id: "grid-contract",
      number: "01",
      title: "Grid нь parent-ийн direct children-д row + column coordinate system өгнө",
      tutorialLabel: "Grid mental model",
      eyebrow: "container · item · row · column · cell",
      duration: "10–12 минут",
      whyItMatters:
        "Grid rule хаана үйлчлэхийг DOM tree-ээс ялгаж чадвал nested content яагаад track дагахгүй байгааг шууд олно. Мөн Flexbox-ийг хүчээр хоёр хэмжээст layout болгохоос зайлсхийж, tool-оо intent-ээр сонгоно.",
      explanation: [
        "display:grid тавьсан parent grid container болж, зөвхөн direct children grid item болно. Container column болон row track үүсгэж, тэдгээрийн огтлолцлыг cell, олон cell-ийн тэгш өнцөгт хэсгийг area гэж нэрлэнэ.",
        "Grid хоёр хэмжээст гэдэг нь row ба column track-ийг нэг contract дотор зэрэг тодорхойлж чадна гэсэн үг. Энэ нь бүх Grid layout заавал төвөгтэй гэсэн үг биш; нэг column grid ч утга учиртай байж болно.",
        "Grandchild нь parent-ийн grid-д шууд item биш. Card доторх icon, title, button-ийг тусад нь байрлуулах бол card өөрөө nested Grid эсвэл Flex container болж болно.",
        "HTML semantic болон DOM order Grid тавихад өөрчлөгдөхгүй. Grid visual байрлалыг хариуцна; reading order, focus order, утга илэрхийлэх tag-аа HTML шийдсээр байна.",
      ],
      mentalModel: {
        title: "Координаттай дэвтэр",
        explanation:
          "Grid container-ийг мөр, баганатай дэвтэр гэж бод. Direct child бүр нэг эсвэл хэд хэдэн нүд эзэлнэ. Analogy-ийн хязгаар: вебийн track content болон available space-аас шалтгаалан уян хэмжигдэж, implicit track автоматаар үүсч чадна.",
      },
      example: {
        title: "Gallery parent нь grid, figure бүр item",
        explanation:
          "figcaption нь figure дотор байгаа тул gallery-ийн direct grid item биш.",
        code: "<section class=\"gallery\">\n  <figure><img src=\"a.jpg\" alt=\"\"><figcaption>A</figcaption></figure>\n  <figure><img src=\"b.jpg\" alt=\"\"><figcaption>B</figcaption></figure>\n</section>\n\n<style>\n.gallery { display: grid; grid-template-columns: 1fr 1fr; }\n</style>",
        language: "html",
      },
      formatBlocks: [
        {
          type: "comparison",
          title: "Layout-ийн intent-ээр Flexbox ба Grid сонгох",
          columns: ["FLEXBOX", "GRID"],
          rows: [
            { label: "Гол intent", left: "Нэг урсгал/axis дагуу items", right: "Row ба column structure" },
            { label: "Хэмжээг хэн түлхүү шийдэх вэ?", left: "Content ба free space", right: "Container-ийн track plan" },
            { label: "Түгээмэл жишээ", left: "Toolbar, nav, button group", right: "Dashboard, gallery, page regions" },
          ],
        },
      ],
      diagram: {
        label: "Grid нэр томьёоны нэг зураглал",
        nodes: [
          { title: "CONTAINER", detail: "Coordinate system" },
          { title: "TRACKS", detail: "Rows + columns" },
          { title: "LINES", detail: "Track boundaries" },
          { title: "ITEM / AREA", detail: "Placed content" },
        ],
      },
      questions: [
        { question: "Card доторх button gallery grid-ийн шууд item мөн үү?", answer: "Үгүй. Gallery-ийн direct child card/figure нь item; button нь nested descendant." },
        { question: "Нэг column-той layout Grid байж болох уу?", answer: "Болно. Хоёр хэмжээст боломжтой гэдэг нь заавал олон row/column хэрэглэх ёстой гэсэн үг биш." },
      ],
      misconceptions: [
        { claim: "Grid зөвхөн бүхэл page layout-д хэрэглэнэ.", correction: "Component-ийн card gallery, form layout зэрэг орон нутгийн хоёр хэмжээст асуудалд мөн тохирно." },
        { claim: "Grid ашиглавал Flexbox хэрэггүй.", correction: "Нэг page дээр outer Grid, component дотор Flexbox хамт хэрэглэх нь түгээмэл; intent бүрт тохирох model сонгоно." },
      ],
      teachingNotes: [
        "DOM indentation болон Grid overlay-г зэрэг харуулж direct child contract-ийг заа.",
        "Flex/Grid-ийг өрсөлдөгч гэж биш, өөр асуудалд зориулагдсан хоёр tool гэж нэрлэ.",
      ],
      takeaway: "Эндээс заавал санах зүйл: Grid container row ба column track үүсгэж, зөвхөн direct children-ээ тэр coordinate system дээр байрлуулна.",
    },
    {
      id: "tracks-and-units",
      number: "02",
      title: "Track list нь layout-ийн багануудыг, fr нь үлдсэн зайг хуваарилна",
      tutorialLabel: "Tracks ба fr",
      eyebrow: "track · line · fixed · fr · repeat",
      duration: "10–12 минут",
      whyItMatters:
        "Card бүрт width өгөхийн оронд container track-аа тодорхойлбол layout-ийн бүтэц нэг газраас уншигдана. fr, repeat(), minmax()-ийг зөв ойлгох нь magic number багатай уян Grid-ийн үндэс.",
      explanation: [
        "grid-template-columns-ийн whitespace-аар тусгаарлагдсан утга бүр нэг column track үүсгэнэ. 12rem 1fr 2fr гэвэл эхний fixed track-ийг авсны дараах available space-ийг үлдсэн хоёр track 1:2 харьцаагаар хуваана.",
        "fr нь container-ийн нийт өргөний шууд хувь биш. Fixed tracks, gap, padding болон зарим minimum constraint тооцогдсоны дараах available space-д оролцоно. Тиймээс 1fr 1fr гэдэг хоёр track үргэлж viewport-ийн яг 50% биш.",
        "repeat(3, 1fr) нь 1fr 1fr 1fr гэсэн track list-ийн товчлол. Энэ нь loop ажиллуулж DOM item үүсгэдэггүй; зөвхөн CSS track definition-ийг давтана.",
        "minmax(12rem, 1fr) track 12rem-ээс нарийсахгүй байх зорилго тавина. Гэхдээ container өөрөө 12rem-ээс нарийн бол overflow үүсч болох тул narrow viewport-д min(100%, 12rem) зэрэг хамгаалалт болон бодит test хэрэгтэй.",
      ],
      mentalModel: {
        title: "Төсөв хуваах мөр",
        explanation:
          "Fixed track эхлээд тогтсон төсвөө авна, gap бас хасагдана, үлдсэнийг fr-ийн жингээр хуваана. Analogy-ийн хязгаар: content-ийн intrinsic minimum track sizing-д нөлөөлж, тооцоог энгийн хувь хуваалтаас өөр болгож чадна.",
      },
      example: {
        title: "Fixed sidebar + уян content",
        explanation:
          "Sidebar 14rem, main content үлдсэн зайг авна; gap тусдаа төсөв хэрэглэнэ.",
        code: ".layout {\n  display: grid;\n  grid-template-columns: 14rem minmax(0, 1fr);\n  gap: 1.5rem;\n}",
        language: "css",
      },
      formatBlocks: [
        {
          type: "sequence",
          title: "Энгийн track төсвийг унших дараалал",
          items: [
            { title: "Container", detail: "Available inline size-ийг олно." },
            { title: "Fixed + gap", detail: "14rem sidebar, padding, gap-ийг тооцно." },
            { title: "Minimums", detail: "Content/minmax доод хязгаарыг шалгана." },
            { title: "fr share", detail: "Үлдсэн зайг fr ratio-гаар хуваана." },
          ],
        },
      ],
      questions: [
        { question: "1fr 1fr хоёр column gap:20px-тэй бол тус бүр container-ийн яг 50% уу?", answer: "Үгүй. Эхлээд gap болон бусад constraint хасагдаж, үлдсэн зайг тэнцүү хуваана." },
        { question: "repeat(4, 1fr) хэдэн DOM element үүсгэх вэ?", answer: "Нэг ч element үүсгэхгүй; дөрвөн CSS column track тодорхойлно." },
      ],
      misconceptions: [
        { claim: "fr бол percent-ийн өөр бичлэг.", correction: "fr available/free space-ийн share; percentage өөр containing block calculation-тай бөгөөд gap-тай үед үр дүн өөр байж болно." },
        { claim: "minmax(250px, 1fr) бүх дэлгэц дээр overflow-гүй.", correction: "Container 250px-ээс нарийн бол minimum өөрөө overflow үүсгэж болно; narrow edge case-ээ test хийнэ." },
      ],
      teachingNotes: [
        "600px container, 20px gap, 180px sidebar гэсэн жижиг тоон жишээг самбарт бод; full Grid algorithm руу бүү ор.",
        "DevTools overlay дээр line хоорондын pixel track size-ийг Computed result-тэй тулга.",
      ],
      takeaway: "Эндээс заавал санах зүйл: track list Grid-ийн бүтцийг тодорхойлно; fr нь fixed хэмжээ ба gap-ийн дараах available space-ийг хуваана.",
    },
    {
      id: "placement",
      number: "03",
      title: "Auto-placement-ийг default болгож, intent шаардсан item-ийг line эсвэл area-аар байрлуулна",
      tutorialLabel: "Placement",
      eyebrow: "auto flow · line · span · named area",
      duration: "9–11 минут",
      whyItMatters:
        "Item бүрийг coordinate-оор гараар байрлуулах нь content нэмэгдэхэд эвдэрдэг. Auto-placement хаана хангалттай, deliberate page region хаана explicit placement шаардахыг ялгавал CSS богино, DOM order утгатай хэвээр байна.",
      explanation: [
        "Placement rule өгөөгүй grid items source order-оороо available cell-д auto-placement хийнэ. Card list, gallery зэрэг хувьсах тоотой content-д энэ behavior ихэнхдээ хүссэн үр дүн.",
        "Grid line нь track-ийн зах. Гурван column байвал дөрвөн vertical line байна. grid-column:1 / 3 гэдэг item line 1-ээс эхэлж line 3 дээр дуусна, өөрөөр хэлбэл хоёр track span хийнэ.",
        "Named area нь dashboard/page region-ийн intent-ийг уншигдахуйц болгоно. grid-template-areas-ийн мөр бүр ижил тооны cell нэртэй байх ёстой бөгөөд rectangular биш area үүсгэж болохгүй.",
        "CSS placement visual order-ийг DOM order-оос өөр болгож чадна. Screen reader болон keyboard focus source order дагах боломжтой учраас логик унших дарааллыг HTML-д эхлээд зөв бичээд, Grid-ээр зөвхөн presentation-ийг өөрчил.",
      ],
      mentalModel: {
        title: "Зочид буудлын өрөө хуваарилалт",
        explanation:
          "Ихэнх зочин дараагийн сул өрөөнд auto-placement-аар орно; lobby эсвэл office шиг тусгай region урьдчилан нэртэй area эзэлнэ. Analogy-ийн хязгаар: grid item олон cell span хийж, item давхардах боломжтой.",
      },
      example: {
        title: "Featured card хоёр column span хийх",
        explanation:
          "Бусад card auto-placement-аар урсана; зөвхөн featured item deliberate span авна.",
        code: ".card-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n\n.card--featured {\n  grid-column: span 2;\n}",
        language: "css",
      },
      formatBlocks: [
        {
          type: "callout",
          eyebrow: "ACCESSIBILITY GUARDRAIL",
          title: "Visual байрлалаар буруу DOM order-ийг нууж болохгүй",
          body: "CSS Grid placement нь screen reader-ийн reading order эсвэл Tab focus order-ийг найдвартай дахин бичдэггүй. HTML source order-оо утга, keyboard урсгалаар зөв байлга.",
          tone: "warning",
        },
      ],
      diagram: {
        label: "3 column Grid-ийн line number",
        nodes: [
          { title: "LINE 1", detail: "Column 1 starts" },
          { title: "LINE 2", detail: "Track boundary" },
          { title: "LINE 3", detail: "Span can end" },
          { title: "LINE 4", detail: "Grid end" },
        ],
      },
      questions: [
        { question: "3 column grid хэдэн vertical line-тэй вэ?", answer: "Дөрөв. Track бүрийн хоёр зах нийлж track count + 1 line үүснэ." },
        { question: "Product card list-д item бүрийн row/column line-ийг гараар өгөх хэрэгтэй юу?", answer: "Ихэнхдээ үгүй. Source order + auto-placement хувьсах item count-д илүү тэсвэртэй." },
      ],
      misconceptions: [
        { claim: "grid-column:1 / 3 гэдэг гурван column эзэлнэ.", correction: "Line 1-ээс line 3 хүртэлх хоёр track эзэлнэ; line count ба track count-ийг ялга." },
        { claim: "CSS-ээр card-ийг эхэнд харагдуулсан бол screen reader бас эхэнд уншина.", correction: "Reading/focus order DOM-оос хамаарч болно; semantic source order-ийг CSS visual order-оор бүү зас." },
      ],
      teachingNotes: [
        "Line number overlay асаагаад grid-column value-г нэг нэгээр өөрчил; таалгасны дараа refresh хий.",
        "Named areas-г ASCII map шиг projector дээр уншуул: header header / sidebar main.",
      ],
      takeaway: "Эндээс заавал санах зүйл: хувьсах list-д auto-placement, deliberate region-д line/area хэрэглэ; meaningful order HTML-д үлдэнэ.",
    },
    {
      id: "responsive-grid",
      number: "04",
      title: "auto-fit + minmax() нь available space-аас баганын тоог content-driven болгоно",
      tutorialLabel: "Responsive Grid",
      eyebrow: "repeat · auto-fit · minmax · content pressure",
      duration: "10–12 минут",
      whyItMatters:
        "Төхөөрөмж бүрийн өргөнд media query нэмэхийн оронд card-ийн хамгийн бага ашиглах боломжтой хэмжээг тодорхойлж, container-д хэд багтахыг browser-аар шийдүүлж болно. Энэ нь reusable component-д илүү тогтвортой эхлэл өгдөг.",
      explanation: [
        "repeat(auto-fit, minmax(15rem, 1fr)) pattern container-д 15rem minimum-тэй хэдэн track багтахыг тооцно. Илүү зай гарвал тухайн мөрийн track-ууд 1fr maximum хүртэл сунана.",
        "auto-fit ба auto-fill олон item байгаа үед ижил харагдаж болно. Item цөөн үед auto-fit хоосон flexible track-ийг collapse хийж existing items-ийг сунгадаг; auto-fill potential slot-уудыг хадгалж болно. Өнөөдөр auto-fit-ийг практик default болгон ашиглана.",
        "Responsive Grid зөвхөн track count өөрчлөх биш. Image-ийн aspect-ratio, урт title, button-ийн touch target, card доторх overflow, focus ring clipping зэрэг content-level behavior-ийг мөн шалгана.",
        "Container 15rem-ээс нарийн үед minmax-ийн minimum overflow үүсгэж болно. minmax(min(100%, 15rem), 1fr) pattern minimum-ийг container-аас ихгүй болгох нэг арга боловч browser support болон бодит result-ийг DevTools-оор батална.",
      ],
      mentalModel: {
        title: "Тавиурт багтах хайрцгийн тоо",
        explanation:
          "Хайрцаг бүр дор хаяж 15rem өргөн байна; тавиур өргөн бол олон хайрцаг, нарийн бол цөөн хайрцаг нэг мөрөнд багтана. Analogy-ийн хязгаар: Grid track remaining space-ийг fr-ээр сунгаж, item content minimum тооцоонд нөлөөлнө.",
      },
      example: {
        title: "Reusable card grid",
        explanation:
          "Нэг declaration 4, 3, 2, 1 column руу available width-аас хамааран дасан зохицно.",
        code: ".cards {\n  display: grid;\n  grid-template-columns:\n    repeat(auto-fit, minmax(min(100%, 15rem), 1fr));\n  gap: clamp(0.75rem, 2vw, 1.25rem);\n}",
        language: "css",
      },
      formatBlocks: [
        {
          type: "checklist",
          title: "Responsive card grid-ийн evidence checklist",
          items: [
            "960px дээр track count ба gap overlay-оос харагдана.",
            "640px дээр card text тайрагдахгүй, horizontal scroll үүсэхгүй.",
            "360px дээр нэг column container-д бүрэн багтана.",
            "200% zoom дээр content давхцахгүй.",
            "Урт Монгол title button-ийг card-аас түлхэж гаргахгүй.",
            "Tab focus ring overflow:hidden-д тайрагдахгүй.",
          ],
        },
      ],
      questions: [
        { question: "auto-fit хэдэн column үүсгэхийг ямар зүйлс шийдэх вэ?", answer: "Container-ийн available width, track minimum, gap болон item/track constraint." },
        { question: "Responsive card grid хийсэн бол media query огт хэрэггүй юу?", answer: "Заавал биш. Track count content-driven байж болно, харин navigation, typography, region reflow зэрэг өөр requirement media query шаардаж болно." },
      ],
      misconceptions: [
        { claim: "auto-fit бол бүх responsive design-ийн орлуулга.", correction: "Зөвхөн track repetition behavior; бүтэн page-ийн content, input mode, typography, regions-ийг тусад нь шалгана." },
        { claim: "minmax(250px, 1fr) тавьсан л бол 250px-ээс нарийн утас дээр багтана.", correction: "Minimum container-ээс их бол overflow үүсч болно; min(100%, ...) болон narrow test хэрэгтэй." },
      ],
      teachingNotes: [
        "Viewport resize хийхдээ column хэдэн px дээр солигдсоныг цээжлүүлэхгүй; minimum + gaps багтахгүй болсон мөч гэж тайлбарла.",
        "Item count-ийг 7-оос 2 болгож auto-fit/auto-fill ялгааг богино үзүүлээд core objective-оос хэтрэхгүй.",
      ],
      takeaway: "Эндээс заавал санах зүйл: auto-fit + minmax нь device нэрээр биш, container-д хэрэгтэй minimum track хэд багтахаар column count-ийг шийднэ.",
    },
    {
      id: "alignment-and-gap",
      number: "05",
      title: "Grid alignment-д track, area, item-ийн аль түвшинг хөдөлгөж байгаагаа ялгана",
      tutorialLabel: "Alignment ба gap",
      eyebrow: "gap · items · content · area",
      duration: "8–10 минут",
      whyItMatters:
        "justify-content, justify-items, justify-self-ийг random сольж төвлөрүүлэх нь нэг жишээн дээр санамсаргүй ажиллана. Аль box, аль available space хөдөлж байгааг ялгавал хамгийн бага rule сонгоно.",
      explanation: [
        "gap нь Grid track-уудын хооронд gutter үүсгэнэ. Container-ийн гадна захад gap тавихгүй; outer spacing-д padding хэрэглэнэ. Row, column gap-ийг нэг эсвэл хоёр утгаар өгч болно.",
        "justify-items ба align-items нь item бүрийг өөрийн grid area дотор байрлуулна. Default stretch үед explicit size-гүй item area-гаа дүүргэж харагдаж болно.",
        "justify-content ба align-content нь бүх grid tracks нийлээд container-ээс жижиг, extra space үлдсэн үед grid-ийг container дотор байрлуулна. 1fr tracks container-ийг дүүргэсэн бол content alignment-ийн үр дүн харагдахгүй байж болно.",
        "justify-self/align-self ганц item-д default item alignment-ийг override хийнэ. Property сонгохоос өмнө DevTools highlight-аар container, track area, item box гурвыг ялгаж хар.",
      ],
      mentalModel: {
        title: "Өрөө, хивс, тавилга",
        explanation:
          "Container бол өрөө, grid tracks нийлээд хивс, cell/area дотор item бол тавилга. content нь хивсийг өрөөнд, items нь тавилгыг хивсний нүдэнд байрлуулна. Analogy-ийн хязгаар: stretch болон intrinsic size area/item хэмжээг харилцан нөлөөлүүлж болно.",
      },
      example: {
        title: "Тогтмол track-тай icon grid-ийг төвд байрлуулах",
        explanation:
          "justify-content бүх grid-ийг container-т төвлөрүүлнэ; place-items icon бүрийг cell дотор төвлөрүүлнэ.",
        code: ".icon-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 5rem);\n  justify-content: center;\n  place-items: center;\n  gap: 1rem;\n}",
        language: "css",
      },
      questions: [
        { question: "Item-ийг өөрийн cell дотор хэвтээгээр төвлөрүүлэх property?", answer: "justify-items:center бүх item-д, justify-self:center ганц item-д." },
        { question: "Grid container-ийн зах ба эхний card хооронд gap зай гарах уу?", answer: "Үгүй. gap adjacent tracks/items хооронд; container edge spacing-д padding өгнө." },
      ],
      misconceptions: [
        { claim: "justify-content:center нь item бүрийг cell дотор төвлөрүүлнэ.", correction: "Бүх grid tracks-ийг container дотор байрлуулна; item-in-area alignment-д justify-items хэрэглэнэ." },
        { claim: "Gap ба margin үргэлж ижил.", correction: "Gap container-level gutter; margin item box-ийн гадна зай бөгөөд outer edge/auto margin зэрэг өөр behavior-тай." },
      ],
      teachingNotes: [
        "Container background, track overlay, item border гурван өөр өнгө ашиглан аль box хөдөлж байгааг харуул.",
        "place-items shorthand-ийг дэлгэрүүлэхдээ align дараа justify гэдгийг нэг удаа уншуул; цээжлүүлэхээс илүү DevTools Computed-д тулга.",
      ],
      takeaway: "Эндээс заавал санах зүйл: gap track хооронд, items item-ийг area дотор, content бүх grid-ийг container дотор байрлуулна.",
    },
    {
      id: "decision-and-evidence",
      number: "06",
      title: "Grid сонголтоо intent, source order, content stress test, overlay evidence-ээр батална",
      tutorialLabel: "Сонголт ба шалгалт",
      eyebrow: "intent · source order · overlay · regression",
      duration: "7–9 минут",
      whyItMatters:
        "Нэг screenshot дээр зөв харагдах нь maintainable эсвэл responsive гэдгийг батлахгүй. Layout tool сонголт, source order, dynamic content, viewport болон keyboard test-ээ нэг decision protocol болговол AI-ийн санал ч шалгагдана.",
      explanation: [
        "Эхний асуулт: items нэг урсгал дагаж байна уу, эсвэл row/column structure хоёул хэрэгтэй юу? Хоёр дахь асуулт: content өөрөө хэмжээ/урсгалыг удирдах уу, container track plan хэрэгтэй юу? Эдгээр нь Flex/Grid-ийн эхний сонголт өгнө.",
        "Дараа нь HTML source order логик эсэхийг CSS унтраагаад шалга. Visual placement-ийг accessibility order болгохгүй. Keyboard Tab болон screen reader requirement-ийг layout-ийн acceptance criteria-д оруул.",
        "Grid overlay-оос line number, track size, gap, area label ол. Computed style-оос browser яг аль rule хэрэглэснийг, viewport test-ээс overflow/reflow үр дүнг, Git diff-ээс өөрчлөлтийн хүрээг нотол.",
        "Grid ба Flexbox-ийг нэг component-д хослуулж болно: outer card list Grid, card дотор action row Flex. Tool-оо нэрээр нь бус, тухайн nesting level-ийн layout problem-аар сонго.",
      ],
      mentalModel: {
        title: "Layout decision нь hypothesis",
        explanation:
          "‘Grid тохирно’ гэдэг hypothesis. Overlay, content stress, viewport, keyboard test нь evidence. Analogy-ийн хязгаар: дизайны чанарт hierarchy, readability зэрэг хэмжихэд хэцүү хүний үнэлгээ мөн орно.",
      },
      example: {
        title: "Outer Grid + inner Flex",
        explanation:
          "Cards хоёр хэмжээст track-аар, card actions нэг row урсгалаар зохион байгуулагдана.",
        code: ".cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));\n  gap: 1rem;\n}\n\n.card__actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}",
        language: "css",
      },
      formatBlocks: [
        {
          type: "checklist",
          title: "Layout decision protocol",
          items: [
            "DOM source order утгатай, CSS-гүй үед уншигдана.",
            "Нэг axis бол Flexbox, хоёр axis intent бол Grid-ийг эхний candidate болгов.",
            "Overlay-оос container, tracks, gap, placement-ийг нотолсон.",
            "Item count 1, 2, 7 үед layout эвдрэхгүй.",
            "Урт text, missing image, narrow viewport test хийсэн.",
            "Git diff зөвхөн шаардлагатай HTML/CSS-ийг өөрчилсөн.",
          ],
        },
      ],
      questions: [
        { question: "Card gallery Grid байхад card-ийн button row мөн Grid байх ёстой юу?", answer: "Үгүй. Nested level бүрийн intent өөр; action row-д Flexbox илүү шууд байж болно." },
        { question: "Grid overlay ажиллаж байна гэдэг accessibility баталгаа мөн үү?", answer: "Үгүй. Overlay layout geometry нотолно; source/focus order-ийг keyboard болон accessibility tool-оор тусад нь шалгана." },
      ],
      misconceptions: [
        { claim: "Хамгийн цөөн CSS мөртэй solution үргэлж хамгийн сайн.", correction: "Readability, source order, content edge case, acceptance evidence хангах ёстой; line count ганц шалгуур биш." },
        { claim: "AI Grid код өгсөн тул browser support ба result зөв.", correction: "Source documentation, DevTools computed/overlay, target viewport-аар бодитоор шалгана." },
      ],
      teachingNotes: [
        "Сурагчдаар tool нэрээс өмнө layout intent-ээ нэг өгүүлбэрээр бичүүл.",
        "CSS Grid overlay байхгүй browser орчинд computed grid-template-columns болон element bounding box хэмжилтийг fallback болго.",
      ],
      takeaway: "Эндээс заавал санах зүйл: Grid бол хоёр хэмжээст intent-ийн hypothesis; source order, overlay, content ба viewport test-ээр зөв эсэхийг батална.",
    },
  ],
  liveDemo: {
    title: "Named area-тай dashboard skeleton",
    duration: "15 минут",
    goal:
      "Semantic HTML-ийн order-ийг өөрчлөхгүйгээр header/sidebar/main гэсэн хоёр хэмжээст layout бүтээж, 640px дээр нэг column болгон reflow хийснийгээ Grid overlay болон keyboard order-оор нотлох.",
    setup: [
      "lesson-10-grid/dashboard.html болон dashboard.css starter файлыг нээ; HTML order header → aside → main байна.",
      "Starter дээр sections block flow-оор уншигдаж, console error байхгүйг батал.",
      "DevTools Layout/Grid overlay control болон Responsive Design Mode-ийг бэлэн байлга.",
      "Git status цэвэр эсвэл demo өөрчлөлт тусдаа branch дээр байна.",
    ],
    steps: [
      {
        title: "Semantic source order-ийг эхэлж унш",
        instruction: "CSS-ээ түр унтрааж header, navigation/aside, main гэсэн дараалал логик эсэхийг ангиар хэлүүл.",
        observe: "Content нэг column block flow-оор утгатай уншигдана.",
        explain: "Grid visual placement хийх ч accessible source order-ийг орлохгүй.",
      },
      {
        title: "Container ба named areas үүсгэ",
        instruction: ".dashboard дээр display:grid, template areas болон columns нэмээд child бүрийг area нэртэй холбо.",
        code: {
          title: "Desktop dashboard grid",
          language: "css",
          code: ".dashboard {\n  min-height: 100vh;\n  display: grid;\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\";\n  grid-template-columns: 14rem minmax(0, 1fr);\n  grid-template-rows: auto 1fr;\n}\n.header { grid-area: header; }\n.sidebar { grid-area: sidebar; }\n.main { grid-area: main; }",
        },
        observe: "Header хоёр column span хийж, sidebar/main нэг row-д орно.",
        explain: "Quoted row бүр ижил cell count-тэй; minmax(0,1fr) main content-ийн minimum overflow-ийг хянахад тусална.",
      },
      {
        title: "Grid overlay-оор source rule-ээ нотол",
        instruction: "Elements дээр .dashboard-ийн Grid badge дарж line numbers, track sizes, area labels асаа.",
        observe: "2 columns, 2 rows, area labels болон line 1–3 харагдана.",
        explain: "Overlay бол browser үүсгэсэн geometry; source code-ийн intent-тэй таарч байгааг шалгаж байна.",
      },
      {
        title: "Narrow viewport reflow нэм",
        instruction: "640px-ээс доош template-ээ нэг column area map болго; HTML order бүү өөрчил.",
        code: {
          title: "Нэг column reflow",
          language: "css",
          code: "@media (max-width: 40rem) {\n  .dashboard {\n    grid-template-areas:\n      \"header\"\n      \"sidebar\"\n      \"main\";\n    grid-template-columns: minmax(0, 1fr);\n  }\n}",
        },
        observe: "640px-аас нарийсахад areas header → sidebar → main дарааллаар stack хийнэ.",
        explain: "Breakpoint нь device нэр биш, хоёр column content багтахаа больсон requirement-ийн зааг.",
      },
      {
        title: "Keyboard ба overflow regression шалга",
        instruction: "360px viewport дээр horizontal scroll шалгаад Tab-аар interactive controls-ийг source order-оор туул.",
        observe: "Focus order logical, focus ring visible, page horizontal overflow-гүй.",
        explain: "Visual overlay ганцаараа accessibility батлахгүй; keyboard нь тусдаа evidence.",
      },
    ],
    expectedOutput: [
      "Desktop дээр header бүтэн өргөн, sidebar 14rem, main үлдсэн зайг авна.",
      "Overlay named areas болон track lines-ийг source declaration-тэй тааруулна.",
      "640px доор нэг column reflow болж horizontal scroll үүсэхгүй.",
      "Tab/focus order HTML source order-той логик таарна.",
    ],
    recovery: [
      "Area declaration ажиллахгүй бол quoted мөр бүр ижил cell count-тэй, area name item дээр үсэг нэг таарч буйг шалга.",
      "Main overflow хийвэл long content-ийг олж, minmax(0,1fr), min-width:0, word wrapping-ийг evidence-ээр тусад нь шалга.",
      "Grid badge харагдахгүй бол selected element дээр computed display:grid байгаа эсэх, stylesheet load/cascade-ийг шалга.",
      "Demo гацвал completed CSS snippet paste хийхээс өмнө эхний working commit рүү буцаж, нэг rule-ээр дахин яв.",
    ],
  },
  guidedPractice: {
    title: "Responsive product card grid",
    duration: "27 минут",
    goal:
      "6 product card-ыг auto-placement-аар байрлуулж, card minimum 15rem, flexible columns, 1rem gap гэсэн acceptance criteria-тай responsive grid бүтээн 960px, 640px, 360px evidence цуглуулах.",
    starterCode: [
      {
        title: "Product grid starter HTML",
        language: "html",
        code: "<main class=\"catalog\">\n  <h1>Шинэ бүтээгдэхүүн</h1>\n  <section class=\"product-grid\" aria-label=\"Бүтээгдэхүүний жагсаалт\">\n    <article class=\"product-card\"><h2>Mechanical keyboard</h2><p>Compact layout</p><button>Дэлгэрэнгүй</button></article>\n    <article class=\"product-card\"><h2>Урт нэртэй wireless ergonomic mouse</h2><p>Silent switches</p><button>Дэлгэрэнгүй</button></article>\n    <!-- Өөр 4 card нэм -->\n  </section>\n</main>",
      },
      {
        title: "Зориуд fixed эхлэл CSS",
        language: "css",
        code: ".product-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 240px);\n  gap: 16px;\n}\n.product-card { padding: 1rem; border: 1px solid #c8cecb; }",
        note: "Энэ code 360px дээр overflow хийх ёстой. Шууд solution руу үсрэхээс өмнө evidence ав.",
      },
    ],
    instructions: [
      "Starter-ийг 960px, 640px, 360px дээр нээж column count, horizontal overflow, урт title-ийн behavior-ийг evidence table-д бич.",
      "HTML-д нийт 6 semantic article card байлга; order property эсвэл absolute positioning бүү хэрэглэ.",
      "Grid goal-оо нэг өгүүлбэрээр бич: card minimum 15rem, container-д багтах тоогоор column count өөрчлөгдөнө.",
      "Fixed repeat(3,240px)-ийг repeat(auto-fit, minmax(min(100%, 15rem), 1fr)) pattern-аар өөрчил.",
      "Grid overlay асааж 960px дээр track count, gap; 640px дээр reflow; 360px дээр нэг track container-д багтаж буйг screenshot/тэмдэглэлээр батал.",
      "Card дотор button-ийг footer рүү түлхэх шаардлагатай бол nested Flex эсвэл Grid сонгоод сонголтоо тайлбарла.",
      "Keyboard Tab, 200% zoom, урт title, 2 card л үлдсэн edge case-ийг шалга.",
      "git diff-ээ уншиж, solution-доо unnecessary item-level width эсвэл order rule үлдээгүйг батал.",
    ],
    constraints: [
      "Product card бүрт fixed width бүү өг; track sizing container дээр байна.",
      "Layout order-ийг CSS order/grid placement-аар өөрчилж болохгүй.",
      "Horizontal overflow-ийг overflow-x:hidden-ээр нууж болохгүй.",
      "960/640/360px гурван viewport бүрт evidence бичихээс өмнө ‘болсон’ гэж тооцохгүй.",
      "AI-аас шууд final code авахгүй; Practice-ийг эхлээд хосоороо хий.",
    ],
    hints: [
      "Container хэдэн track багтахаа content minimum-аар шийдэхэд repeat(auto-fit, minmax(...)) pattern сана.",
      "360px дээр 15rem minimum container-ээс их байвал min(100%, 15rem)-ийг minimum slot-д ашиглаж болно.",
      "Ижил өндөр card шаардлагатай бол card өөрөө display:grid; grid-template-rows:auto 1fr auto pattern турш.",
      "Overlay байхгүй бол getBoundingClientRect эсвэл Computed grid-template-columns value-ээр track result тэмдэглэ.",
    ],
    expectedResult: [
      "960px дээр боломжит олон column, 640px дээр цөөн column, 360px дээр нэг column болно.",
      "Card minimum design intent хадгалагдаж, horizontal page scroll үүсэхгүй.",
      "Урт title card-аас хальж button/focus ring-ийг нуухгүй.",
      "DOM source order болон Tab order өөрчлөгдөөгүй.",
      "Evidence table-д viewport бүрийн width, track count, overflow result байна.",
    ],
    solutionCode: [
      {
        title: "Нэг боломжит verified solution",
        language: "css",
        code: ".product-grid {\n  display: grid;\n  grid-template-columns:\n    repeat(auto-fit, minmax(min(100%, 15rem), 1fr));\n  gap: 1rem;\n}\n\n.product-card {\n  min-width: 0;\n  padding: 1rem;\n  border: 1px solid #c8cecb;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  gap: 0.75rem;\n}",
        note: "Ижил result-д өөр valid solution байж болно; acceptance evidence хангаж буй эсэхээр үнэл.",
      },
    ],
    stretchTask:
      "Эхний card-д featured modifier өгч зөвхөн 48rem-ээс өргөн, дор хаяж хоёр track байгаа нөхцөлд span 2 хий. 360px дээр span reset болсон эсэхийг нотол.",
    debriefQuestions: [
      { question: "Яагаад card бүрт width өгөөгүй вэ?", answer: "Card layout-ийн track sizing нь parent container-ийн хариуцлага; item content өөрийн area-даа багтана." },
      { question: "auto-fit solution-ийн pass evidence юу байсан бэ?", answer: "Тодорхой гурван viewport-ийн track count, horizontal overflow-гүй result, урт content болон keyboard test." },
      { question: "Card дотор Grid эсвэл Flex хэрэглэсэн бол яагаад?", answer: "Сонгосон nested model тухайн card-ийн row/column эсвэл нэг-axis intent-тэй таарсан тайлбар хэрэгтэй." },
    ],
  },
  aiLab: {
    title: "Гурван Grid шийдлээс acceptance-д тохирох нэгийг сонгох",
    duration: "10 минут",
    goal:
      "AI-аас нэг final answer хуулалгүй fixed, breakpoint-based, content-driven гэсэн гурван candidate гаргуулж, source code, DevTools overlay, viewport evidence-ээр өөрийн сонголтыг батлах.",
    prompt: `Би CSS Grid сурч байгаа beginner frontend developer.

Task: 6 product card-ыг responsive байрлуулах 3 өөр CSS candidate санал болго.
Context:
- Semantic HTML болон card DOM order-ийг өөрчилж болохгүй.
- Card-ийн ашиглах боломжтой minimum width: 15rem.
- Gap: 1rem.
- 960px, 640px, 360px viewport дээр шалгана.

Constraints:
- overflow-x:hidden ашиглаж асуудлыг нуухгүй.
- Absolute positioning болон CSS order ашиглахгүй.
- Framework/Tailwind/JavaScript нэмэхгүй.
- Candidate бүр 8 CSS мөрөөс ихгүй.

Output table:
1. Candidate name ба code
2. Track count хэрхэн шийдэгдэх тайлбар
3. Давуу тал
4. Эвдрэх edge case
5. DevTools-оор шалгах яг нэг test

Эцэст нь аль нэгийг автоматаар “best” гэж зарлахгүй. Миний acceptance criteria-д тулгаж сонгох 5 асуулт өг.`,
    steps: [
      {
        title: "AI-аас өмнө өөрийн candidate-аа тэмдэглэ",
        instruction: "auto-fit + minmax эсвэл media query сонголтын аль нэгийг бичээд яагаад гэж нэг өгүүлбэрээр таамагла.",
        expected: "AI-ийн хариултаас хараат бус baseline decision бий.",
      },
      {
        title: "Prompt өгч гурван candidate-ийг ангил",
        instruction: "Fixed, breakpoint-based, content-driven эсэхийг нэрлэж, constraint зөрчсөн мөрийг highlight хий.",
        observe: "AI candidate-ууд syntax зөв байсан ч edge case, source order, minimum behavior өөр байна.",
      },
      {
        title: "Нэг candidate-ийг тусдаа branch/working copy дээр турш",
        instruction: "Сонгосон CSS-ээ гараар бичиж, 960/640/360px дээр overlay track count ба overflow result тэмдэглэ.",
        explain: "Code appearance биш runtime result evidence болно.",
      },
      {
        title: "Git diff ба regression-ээр шийдвэр гарга",
        instruction: "DOM өөрчлөгдөөгүй, hidden overflow/order/fixed item width нэмэгдээгүйг diff-ээс шалгаад accept/reject шалтгаан бич.",
        expected: "Нэг candidate evidence-тэй accepted, бусад нь тодорхой шалтгаанаар rejected/deferred байна.",
      },
    ],
    verificationTable: [
      { claim: "‘Энэ pattern 360px дээр багтана.’", evidence: "Responsive mode 360px + document scrollWidth/clientWidth + overlay track", pass: "Нэг track container-д багтаж, horizontal page scroll үүсэхгүй." },
      { claim: "‘Card minimum 15rem хадгалагдана.’", evidence: "Computed track width болон narrow exception-ийг inspect", pass: "15rem-аас өргөн үед minimum хангаж, container түүнээс нарийн үед explicit 100% guard ажиллана." },
      { claim: "‘DOM/accessibility order өөрчлөгдөөгүй.’", evidence: "Git diff + Elements DOM + keyboard Tab", pass: "HTML order untouched, focus order logical, CSS order/visual reorder байхгүй." },
      { claim: "‘Solution reusable.’", evidence: "2 card, 6 card, урт title stress test", pass: "Item count/content өөрчлөгдөхөд manual placement шаардахгүй." },
    ],
    teacherNotes: [
      "AI provider/model бүр яг гурван ялгаатай candidate өгөхгүй байж болно; constraint хангаагүй нь өөрөө review evidence болно.",
      "Сурагч auto-fit-ийг ‘correct answer’ гэж сохроор сонговол 360px minimum overflow test хийлгэ.",
      "AI response-г commit хийхгүй; accepted smallest patch болон verification note-оо л хадгал.",
    ],
  },
  checkpoint: {
    duration: "6 минут",
    instructions:
      "Эхний дөрвөн асуултад нэг өгүүлбэр, сүүлийн хоёрт code/evidence төлөвлөгөөгөөр хариул. AI, notes, DevTools-ийг эхний оролдлогод ашиглахгүй.",
    questions: [
      { type: "concept", question: "Grid container-ийн grandchild шууд grid item мөн үү?", answer: "Үгүй. Зөвхөн direct children item болно; grandchild nested container-ийн өөр layout-д оролцож болно." },
      { type: "concept", question: "1fr 2fr гэдэг container-ийн яг 33% ба 67% гэсэн үг үү?", answer: "Үгүй. Fixed sizes, gaps, minimums-ийн дараах available space-ийг 1:2 харьцаагаар хуваана." },
      { type: "concept", question: "3 column Grid хэдэн vertical line-тэй вэ, яагаад?", answer: "4 line. Гурван track-ийн хоёр зах нийлээд track count + 1 boundary үүсгэнэ." },
      { type: "concept", question: "auto-placement ямар үед explicit line placement-аас дээр вэ?", answer: "Item count/order хувьсдаг list/gallery-д source order-оороо дараагийн сул cell-д урсах нь maintainable үед." },
      { type: "application", question: "360px дээр minmax(15rem,1fr) grid overflow хийв. Асуудлыг нуухгүй ямар hypothesis ба test хийх вэ?", answer: "Minimum container-ээс их байна гэж таамаглаад minmax(min(100%,15rem),1fr) candidate-ийг нэг өөрчлөлтөөр туршиж scrollWidth, computed track, overlay-оор шалгана." },
      { type: "application", question: "Dashboard desktop дээр зөв боловч Tab order main → sidebar болжээ. Ямар layer-ийг шалгах вэ?", answer: "HTML source order, tabindex болон interactive DOM-ийг шалгана; visual Grid placement-аар focus order-ийг засахгүй." },
    ],
  },
  wrapUp: {
    summary: [
      "Grid container direct children-д row + column coordinate system өгнө.",
      "Track list structure, fr available space-ийн share-ийг тодорхойлно.",
      "Auto-placement dynamic list-д, line/area deliberate region-д тохирно.",
      "repeat(auto-fit, minmax()) content-driven responsive columns үүсгэж чадна.",
      "Gap, items, content alignment өөр өөр box/space удирдана.",
      "Source order, overlay, content, viewport, keyboard test нь layout evidence болно.",
    ],
    abilities: [
      "Track, line, cell, area-г DevTools overlay дээр заах",
      "Fixed sidebar + flexible main Grid бичих",
      "Named area-тай dashboard region зохион байгуулах",
      "Responsive card grid-ийг manual item width-гүй бүтээх",
      "Grid/Flexbox сонголтоо intent ба evidence-ээр тайлбарлах",
    ],
    beforeNextLesson: [
      "Product grid-ээ 960/640/360px evidence note-той commit хий.",
      "Нэг урт content болон 200% zoom test-ийн result-ээ хадгал.",
      "Lesson 11-д ашиглах dashboard/card page-ээ clean working state-д авчир.",
      "Viewport meta tag HTML-д байгаа эсэхийг шалга.",
    ],
    finalModel:
      "CSS Grid = container-ийн row + column track plan. Items source order-оос auto-place эсвэл deliberate line/area-д орно. Зөв layout гэдгийг overlay geometry, content stress, viewport ба keyboard evidence хамт батална.",
    exitTicket: [
      { question: "Flexbox биш Grid сонгосон нэг шалтгаанаа intent-ээр хэл.", answer: "Жишээ: dashboard-д sidebar/main column болон header row-ийг зэрэг удирдах хоёр хэмжээст structure хэрэгтэй." },
      { question: "Өнөөдөр overlay-оос ямар бодит баримт олсон бэ?", answer: "Track count/size, line number, gap эсвэл named area-гийн аль нэгийг source rule-тэй тулгасан хариу." },
      { question: "Responsive Grid болсон ч Lesson 11 яагаад хэрэгтэй вэ?", answer: "Бүх page-ийн typography, media, navigation, input, content priority, breakpoint, testing strategy-г card columns ганцаараа шийдэхгүй." },
    ],
    nextLesson: {
      title: "Lesson 11 — Responsive дизайн",
      connection:
        "Grid available space-д дасан зохицох нэг layout tool өглөө. Дараагийн хичээлээр viewport, mobile-first cascade, media/container queries, fluid хэмжээ, media ба accessibility-г бүхэл UI-ийн responsive strategy болгон холбоно.",
    },
    teacherClose:
      "Grid-ийн гол чадвар нь олон property мэдэх биш — row, column хоёрын intent-ээ container дээр тодорхойлоод browser яг тэр geometry үүсгэснийг нотолж чаддаг байх юм.",
  },
};
