import type { ReferenceLesson } from "../types";

export const lesson09Reference: ReferenceLesson = {
  id: 9,
  durationMinutes: 120,
  teacherGoal:
    "Сурагч Flexbox-ийг property цээжлэх сэдэв биш, flex container-ийн direct children-ийг нэг үндсэн тэнхлэгийн дагуу байрлуулж, үлдсэн зай болон багтаамжийг дүрмээр удирддаг layout model гэж ойлгоно. Тэд desktop ба нарийн viewport-д ажиллах toolbar бүтээж, layout-ийн таамгаа DevTools evidence-ээр шалгаж чаддаг болно.",
  sections: [
    { id: "overview", shortLabel: "01", label: "Тойм" },
    { id: "teach", shortLabel: "02", label: "Заах агуулга" },
    { id: "demo", shortLabel: "03", label: "Live demo" },
    { id: "practice", shortLabel: "04", label: "Дадлага" },
    { id: "ai-lab", shortLabel: "05", label: "AI Lab" },
    { id: "checkpoint", shortLabel: "06", label: "Checkpoint" },
    { id: "wrap-up", shortLabel: "07", label: "Дүгнэлт" },
  ],
  overview: {
    objectives: [
      "Flex container болон flex item-ийг HTML-ийн parent/direct-child холбоогоор тодорхойлох.",
      "flex-direction өөрчлөгдөхөд main axis ба cross axis хэрхэн солигдохыг урьдчилан таамаглах.",
      "gap, flex-wrap, justify-content, align-items-ийг зөв тэнхлэг ба зорилгоор сонгох.",
      "flex-basis, flex-grow, flex-shrink үлдсэн болон дутагдсан зайд хэрхэн нөлөөлөхийг тайлбарлах.",
      "Responsive toolbar бүтээж, 720px ба 360px viewport дээр DevTools-оор layout болон overflow-ийг шалгах.",
    ],
    prerequisites: [
      "Lesson 05-ын semantic HTML, parent/child document tree",
      "Lesson 07-ын selector, box model, border-box, DevTools Styles/Computed",
      "Lesson 08-ын observed/expected, constraints, acceptance, AI claim verification workflow",
      "HTML/CSS file-аа Save → Refresh → Inspect → Git diff хийх чадвар",
    ],
    tools: [
      "VS Code эсвэл text editor",
      "Browser + DevTools Elements, Styles, Computed, Flex overlay",
      "index.html ба styles.css",
      "Responsive viewport эсвэл browser window resize",
      "Git",
      "AI chat — зөвхөн өөрийн таамгийн дараах review-д",
    ],
    outcomes: [
      "Flexbox аль parent дээр хэрэгжиж, ямар direct children items болсныг зааж чадна.",
      "Нэг rule өөрчлөхөөс өмнө аль axis, ямар free space өөрчлөгдөхийг таамаглана.",
      "Toolbar-ийг desktop дээр нэг мөр, нарийн дэлгэц дээр утгатай дарааллаар wrap хийлгэнэ.",
      "Fixed width, absolute positioning, visual order ашиглахгүй responsive layout бүтээнэ.",
      "AI-ийн Flexbox саналын мөр бүрийг purpose, viewport evidence, keyboard behavior, Git diff-ээр зөвшөөрөх эсвэл татгалзана.",
    ],
    preparation: [
      "Demo болон practice starter-ийг тусдаа folder-д бэлдэж, HTML content/DOM order зөв байгааг урьдчилан шалга.",
      "Browser DevTools-ийн flex badge/overlay, Computed panel болон responsive width control хаана байдгийг өөрийн browser дээр шалга.",
      "720px, 360px, 280px гэсэн гурван туршилтын өргөнийг бэлд; browser zoom-ийг хэмжилттэй андуурахгүй.",
      "Projector дээр main axis-ийг хэвтээ, cross axis-ийг босоо сум болгон самбарт зурах хоёр өөр өнгө бэлд.",
      "Demo-ийн урт title болон action buttons нарийн viewport дээр wrap болохыг урьдчилан reproduce хий.",
      "Live demo эхлэхэд Git diff clean эсвэл зөвхөн starter state байгааг батал.",
    ],
    timeline: [
      { start: "00:00", duration: "8 мин", title: "Hook — ямар дүрэм байрлуулж байна?", teacherAction: "Ижил HTML-ийг block ба flex байдлаар зэрэг үзүүлж, markup өөрчлөгдөөгүй байхад юу өөрчлөгдсөнийг сурагчдаар ажиглуул." },
      { start: "00:08", duration: "12 мин", title: "Container, item, direct child", teacherAction: "Parent дээр display:flex тавигдахад зөвхөн direct children flex item болдгийг DOM tree-ээр тогтоо." },
      { start: "00:20", duration: "13 мин", title: "Main axis, cross axis, direction", teacherAction: "row ба column үед хоёр axis-ийг самбарт эргүүлж, property бүрийн чиглэлийг таалгуул." },
      { start: "00:33", duration: "13 мин", title: "Gap, wrap, alignment", teacherAction: "gap-аар item хоорондын тогтмол зай, justify/align-аар free space-ийн хуваарилалтыг тусад нь үзүүл." },
      { start: "00:46", duration: "14 мин", title: "Flex sizing", teacherAction: "basis → grow эсвэл shrink дарааллаар тооцож, flex shorthand-ийг гурван тоо болгон уншуул." },
      { start: "01:00", duration: "15 мин", title: "Live demo — responsive toolbar", teacherAction: "Desktop toolbar-ийг incremental дүрмээр босгоод урт content, narrow viewport, focus, DOM order-оор шалга." },
      { start: "01:15", duration: "5 мин", title: "Завсарлага", teacherAction: "Сурагчдыг амраах зуур practice starter болон 720px/360px viewport-ийг нээ." },
      { start: "01:20", duration: "20 мин", title: "Guided practice — course toolbar", teacherAction: "Хос бүр acceptance criteria-аас layout rule-ээ өөрсдөө гаргаж, хоёр viewport дээр evidence цуглуулна." },
      { start: "01:40", duration: "12 мин", title: "AI Lab — layout review", teacherAction: "AI-аас өмнөх prediction-ийг хадгалж, AI claim бүрийг Flex overlay, Computed, keyboard, diff-ээр audit хийлгэ." },
      { start: "01:52", duration: "6 мин", title: "Checkpoint", teacherAction: "Axis, direct child, free space, responsive сонголтын зургаан богино асуултаар хүн бүрийг шалга." },
      { start: "01:58", duration: "2 мин", title: "Wrap-up ба Grid bridge", teacherAction: "Нэг хэмжээст Flexbox mental model-ийг нэг өгүүлбэрээр хэлүүлээд хоёр хэмжээст Grid рүү холбо." },
    ],
  },
  concepts: [
    {
      id: "container-and-items",
      number: "01",
      title: "Flexbox parent ба direct children-ийн хооронд layout contract үүсгэнэ",
      eyebrow: "container · direct child · nested content",
      duration: "10–12 минут",
      whyItMatters:
        "Flex property-ийг буруу element дээр тавих нь эхлэгчдийн хамгийн түгээмэл layout алдаа. Container, item хоёрын хариуцлагыг ялгавал ямар rule хаана нөлөөлөхийг таах биш DOM tree-ээс нотолж чадна.",
      explanation: [
        "display: flex-ийг parent element дээр тавихад тэр element flex container болно. Түүний зөвхөн direct children flex item болж, browser тэдгээрийг Flexbox алгоритмаар байрлуулна. Grandchild element-үүд шууд item болохгүй; дотроо хэвийн flow-оороо үлдэнэ.",
        "Container-level property-д flex-direction, flex-wrap, gap, justify-content, align-items орно. Эдгээр нь бүлгийн чиглэл, мөр таслалт, item хоорондын зай, тэнхлэгийн alignment-ийг шийднэ. flex-grow, flex-shrink, flex-basis, align-self зэрэг нь item-level property.",
        "display:flex тавихад content эсвэл semantic meaning өөрчлөгдөхгүй. nav нь nav хэвээр, button нь button хэвээр. Flexbox зөвхөн children-ийн visual layout-д оролцоно.",
        "Nested layout хэрэгтэй бол нэг flex item өөрөө бас display:flex container болж болно. Гэхдээ эхлээд DOM-ийн яг аль түвшний items-ийг зэрэгцүүлэхээ тодорхойл; бүх parent дээр flex тавих нь шийдэл биш.",
      ],
      mentalModel: {
        title: "Тавиур ба тавиур дээрх хайрцгууд",
        explanation:
          "Тавиур нь container, дээр нь шууд тавьсан хайрцгууд items. Хайрцаг доторх жижиг зүйлс тавиурын дүрэмд шууд захирагдахгүй. Analogy-ийн хязгаар: flex item content-оосоо хамаарч grow/shrink хийж, wrap-аар шинэ мөр үүсгэж чадна.",
      },
      example: {
        title: "nav нь container, гурван link нь items",
        explanation:
          "display:flex зөвхөн .site-nav-ийн direct children болох link-үүдийг зэрэгцүүлнэ; link доторх span тусдаа flex item биш.",
        code: "<nav class=\"site-nav\">\n  <a href=\"/\"><span>Нүүр</span></a>\n  <a href=\"/lessons\"><span>Хичээл</span></a>\n  <a href=\"/about\"><span>Тухай</span></a>\n</nav>\n\n<style>\n.site-nav {\n  display: flex;\n  gap: 1rem;\n}\n</style>",
        language: "html",
      },
      diagram: {
        label: "DOM tree дэх Flexbox-ийн нэг түвшин",
        nodes: [
          { title: ".site-nav", detail: "FLEX CONTAINER" },
          { title: "DIRECT <a>", detail: "FLEX ITEM" },
          { title: "NESTED <span>", detail: "Item-ийн content" },
        ],
      },
      questions: [
        { question: "display:flex-ийг link бүр дээр тавивал link-үүд хоорондоо зэрэгцэх үү?", answer: "Үгүй. Зэрэгцүүлэх direct children-ийн нийтлэг parent болох nav дээр тавина." },
        { question: "Flex container өөрөө өөр parent-ийн flex item байж болох уу?", answer: "Болно. Нэг element гадна layout-д item, дотор children-ээ удирдах container гэсэн хоёр үүрэгтэй байж болно." },
      ],
      misconceptions: [
        { claim: "Flexbox ашиглахын тулд бүх child дээр display:flex тавина.", correction: "Зэрэгцүүлэх items-ийн parent дээр display:flex тавина; nested layout хэрэгтэй child л өөрөө container болно." },
        { claim: "display:flex HTML-ийн semantic structure-ийг өөрчилнө.", correction: "Layout presentation өөрчлөгдөнө; tag, DOM order, accessible meaning хэвээр." },
      ],
      teachingNotes: [
        "Elements panel дээр parent-ийг highlight хийж, direct-child indentation-ийг projector дээр заа.",
        "Сурагч бүр CSS бичихээс өмнө ‘container аль element, items аль elements?’ гэж чанга хэлдэг дүрэм тогтоо.",
      ],
      takeaway: "Эндээс заавал санах зүйл: зэрэгцүүлэх element-үүдийн нийтлэг parent нь flex container, зөвхөн direct children нь flex item болно.",
    },
    {
      id: "axes-and-direction",
      number: "02",
      title: "flex-direction main axis-ийг тогтоож, бусад property тэр axis-ийг дагана",
      eyebrow: "row · column · main axis · cross axis",
      duration: "10–12 минут",
      whyItMatters:
        "justify-content-ийг ‘horizontal’, align-items-ийг ‘vertical’ гэж цээжилбэл column layout дээр шууд будилна. Axis-аар боддог сурагч property-н үр дүнг direction солигдсон ч урьдчилан хэлж чадна.",
      explanation: [
        "Flexbox нэг гол чиглэлээр items-ээ байрлуулна. Үүнийг main axis гэнэ. Түүнд перпендикуляр чиглэл нь cross axis. flex-direction: row үед main axis ихэнх Mongolian/English page дээр зүүнээс баруун, cross axis дээрээс доош байна.",
        "flex-direction: column бол main axis босоо, cross axis хэвтээ болно. Өөрөөр хэлбэл justify-content property хэвтээ alignment байхаа больж босоо чиглэлийн free space-ийг удирдана; align-items харин хэвтээ чиглэлд ажиллана.",
        "row-reverse, column-reverse visual order-ийг эргүүлдэг ч DOM order, keyboard focus, screen reader reading order-ийг заавал адилхан эргүүлэхгүй. Meaningful sequence-ийг CSS reverse/order property-ээр засахын оронд HTML source order-оо зөв бич.",
        "Property турших бүрдээ ‘main axis аль зүгт байна? cross axis аль зүгт байна? энэ axis дээр unused space байна уу?’ гэсэн гурван асуулт тавь. Free space байхгүй бол alignment өөрчлөлт харагдахгүй байж болно.",
      ],
      mentalModel: {
        title: "Эргүүлж болох төмөр зам",
        explanation:
          "Галт тэрэгний зам нь main axis, вагоны өргөн чиглэл нь cross axis. row-оос column болгоход бүх зураг 90° эргэсэн мэт бод. Analogy-ийн хязгаар: вебийн writing direction болон reverse values start/end чиглэлд нөлөөлж болно.",
      },
      example: {
        title: "Ижил items, өөр main axis",
        explanation:
          "Зөвхөн flex-direction солигдоход buttons-ийн дараалсан тэнхлэг өөрчлөгдөнө.",
        code: ".actions {\n  display: flex;\n  flex-direction: row;    /* main axis: inline */\n}\n\n.actions.stacked {\n  flex-direction: column; /* main axis: block */\n}",
        language: "css",
      },
      diagram: {
        label: "row layout-ийн хоёр тэнхлэг",
        nodes: [
          { title: "MAIN START", detail: "Item 1" },
          { title: "MAIN AXIS", detail: "Item 2" },
          { title: "MAIN END", detail: "Item 3 · cross axis ⟂" },
        ],
      },
      questions: [
        { question: "flex-direction:column үед justify-content аль чиглэлд ажиллах вэ?", answer: "Main axis босоо болсон тул босоо чиглэлийн free space-ийг хуваарилна." },
        { question: "row-reverse-ээр Login button-ийг эхэнд харагдуулбал Tab order бас эхэлж очих уу?", answer: "Заавал үгүй. DOM order хэвээр байж болох тул keyboard/assistive technology order зөрнө." },
      ],
      misconceptions: [
        { claim: "justify-content үргэлж хэвтээ, align-items үргэлж босоо.", correction: "justify main axis, align cross axis-ийг удирдана; flex-direction солигдоход чиглэл солигдоно." },
        { claim: "Visual order зөв харагдвал source order хамаагүй.", correction: "Keyboard болон screen reader DOM order дагах тул meaningful sequence-ийг HTML-д зөв бич." },
      ],
      teachingNotes: [
        "Самбар дээр row-г зурчхаад page-ийг биш axis сумнуудаа 90° эргүүлж column-ийг үзүүл.",
        "RTL/writing-mode-ийг гүнзгийрүүлэхгүй; left/right бус start/end гэж нэрлэвэл дараагийн шатанд зөв mental model хадгалагдана.",
      ],
      takeaway: "Эндээс заавал санах зүйл: justify main axis, align cross axis дээр ажиллана; axis-ийг flex-direction тодорхойлно.",
    },
    {
      id: "gap-and-wrap",
      number: "03",
      title: "gap тогтмол зай өгч, flex-wrap багтахгүй items-ийг шинэ мөрт оруулна",
      eyebrow: "spacing · available space · new flex line",
      duration: "9–11 минут",
      whyItMatters:
        "Нэг өргөн дээр зөв харагдсан navigation эсвэл tag list нарийн viewport дээр overflow хийж болно. gap ба wrap нь content өөрчлөгдөх, орчуулга уртсах, дэлгэц агших үед layout-ыг хүчээр нуухгүйгээр дасан зохицуулна.",
      explanation: [
        "gap нь adjacent flex items-ийн хооронд container-аас удирдсан тогтмол зай үүсгэнэ. First/last item-ийн гадна талд нэмэлт gap тавихгүй тул spacing-ийг item бүрийн margin-аар нөхөхөөс илүү ойлгомжтой.",
        "Flex container default-аар nowrap байдаг. Items-ийн preferred хэмжээ нийлээд container-ээс их болоход browser shrink хийхийг оролдоно; багтахгүй content overflow хийж болно. flex-wrap: wrap зөвшөөрвөл item бүр боломжтой хэмжээгээ хадгалж дараагийн flex line руу орно.",
        "Wrap болсон мөр бүр main axis-ийн alignment-аа тусдаа тооцно. wrap тавьсан төдийд бүх responsive асуудал шийдэгдэхгүй: item-ийн basis/minimum, урт тасралтгүй text, fixed width, container padding зэргийг хоёр ба түүнээс олон viewport дээр шалгана.",
        "align-content нь олон flex line болон cross-axis extra space байгаа үед line-уудыг бүхэлд нь байрлуулдаг. Нэг мөртэй layout дээр ажиллахгүй. Өнөөдөр гол зорилго нь gap/wrap; align-content-ийг зөвхөн ялгааг таних хэмжээнд ашиглана.",
      ],
      mentalModel: {
        title: "Үг мөр дүүрээд дараагийн мөр рүү шилжих",
        explanation:
          "Words line-д багтаад зайгаар тусгаарлагдах шиг items gap-тай байрлаж, wrap зөвшөөрсөн үед шинэ line руу орно. Analogy-ийн хязгаар: flex items grow/shrink/basis дүрмээр хэмжээгээ тусад нь тооцдог.",
      },
      example: {
        title: "Урт label-д тэсвэртэй tag list",
        explanation:
          "Tag тоо болон текстийн урт өөрчлөгдсөн ч container-аас халихын оронд шинэ мөр үүснэ.",
        code: ".tag-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n\n.tag {\n  padding: 0.35rem 0.65rem;\n  border: 1px solid currentColor;\n}",
        language: "css",
      },
      questions: [
        { question: "gap:1rem тавихад container-ийн зүүн, баруун захад 1rem нэмэгдэх үү?", answer: "Үгүй. gap items хооронд гарна; container edge spacing-д padding хэрэглэнэ." },
        { question: "flex-wrap:wrap хийсэн бол 200 үсэгтэй тасралтгүй URL заавал багтах уу?", answer: "Үгүй. Content-ийн intrinsic minimum/word breaking тусдаа шалгалт шаарддаг." },
      ],
      misconceptions: [
        { claim: "wrap тавьсан бол layout responsive болсон.", correction: "Wrap нэг behavior; item minimum, fixed widths, content, focus, олон viewport-ийн acceptance-ийг давхар шалгана." },
        { claim: "gap болон margin яг ижил.", correction: "gap container-аас зөвхөн item хоорондын зайг удирдана; margin item-ийн гадна box бөгөөд collapse/edge behavior өөр байж болно." },
      ],
      teachingNotes: [
        "Tag-ийн нэрийг зориуд уртасгаж content stress test хий; зөвхөн lorem ipsum бүү хэрэглэ.",
        "flex-wrap:wrap нэмэхийн өмнө narrow viewport result-ийг таалгаж, дараа нь line box overlay ажиглуул.",
      ],
      takeaway: "Эндээс заавал санах зүйл: gap бол items хоорондын зай; wrap бол багтахгүй items-д шинэ flex line зөвшөөрөх дүрэм.",
    },
    {
      id: "alignment",
      number: "04",
      title: "Alignment property сонгохын өмнө axis ба free space-ээ олно",
      eyebrow: "justify · align · free space · self",
      duration: "10–12 минут",
      whyItMatters:
        "Төвд байрлуулах гэж random property солих нь layout-ыг нэг viewport дээр санамсаргүй ажиллуулдаг. Axis, free space, group эсвэл single item гэсэн гурван шийдвэрийг ялгавал хамгийн бага rule-ээр зорилгодоо хүрнэ.",
      explanation: [
        "justify-content container-ийн main axis дээр бүх items бүлгийг байрлуулж, үлдсэн free space-ийг start, end, center, space-between зэрэг аргаар хуваарилна. Items container-ийг бүрэн дүүргэсэн бол хуваарилах free space байхгүй тул үр дүн бага эсвэл харагдахгүй.",
        "align-items container-ийн cross axis дээр бүх items-ийн default alignment-ийг тогтооно. row container-д энэ нь ихэнхдээ босоо чиглэл. Default stretch нь cross size auto байгаа item-ийг line-ийн хэмжээнд сунгаж болно; fixed height/width өгсөн бол stretch өөр харагдана.",
        "align-self нэг item-д align-items-ийг override хийнэ. Нэг item-ийг main axis-ийн төгсгөл рүү түлхэх түгээмэл pattern-д auto margin ашиглаж болох ч эхний сонголт болгон parent-ийн justify-content ба бүтцээ ойлго.",
        "justify-content text доторх үсгийг align хийхгүй, item box-уудыг байрлуулна. Text alignment-д text-align, item-ийн дотоод layout-д nested container хэрэгтэй байж болно. Аль box хөдөлж байгааг DevTools highlight-аар хар.",
      ],
      mentalModel: {
        title: "Хоосон талбайг хэн эзлэх вэ?",
        explanation:
          "Container дотор items-ээ тавьсны дараах unused floor space-ийг main axis дээр justify, cross axis дээр align хуваарилна. Analogy-ийн хязгаар: item size өөрөө grow/shrink хийсний дараа free space дахин тооцогдоно.",
      },
      example: {
        title: "Navigation-ийн items-ийг хоёр захад байрлуулах",
        explanation:
          "Logo болон actions хоёр item; main axis-ийн дундах free space-ийг space-between байрлуулна, cross axis-д center хийнэ.",
        code: ".site-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}",
        language: "css",
      },
      diagram: {
        label: "row container-д alignment унших дараалал",
        nodes: [
          { title: "DIRECTION", detail: "row → main хэвтээ" },
          { title: "JUSTIFY", detail: "Main-axis free space" },
          { title: "ALIGN", detail: "Cross-axis position" },
        ],
      },
      questions: [
        { question: "row container дотор button-ууд босоогоор төвд орох property?", answer: "align-items:center — row үед cross axis босоо." },
        { question: "justify-content:center ажиллахгүй мэт байвал юу хэмжих вэ?", answer: "Container хэмжээ, items-ийн нийт хэмжээ, main axis дээр free space байгаа эсэх." },
      ],
      misconceptions: [
        { claim: "space-between нь item бүрийн эргэн тойронд ижил зай өгнө.", correction: "First/last item захад байрлаж, зөвхөн items хооронд free space хуваана; тогтмол minimum spacing-д gap нэм." },
        { claim: "align-items:center text-ийг center болгоно.", correction: "Flex item box-уудыг cross axis дээр байрлуулна; text доторх мөрийг text-align удирдана." },
      ],
      teachingNotes: [
        "justify-content values бүгдийг slideshow шиг жагсаахгүй; start, center, space-between-ийг бодит goal-оор харьцуул.",
        "Container border болон item background тавьж free space-ийг нүдэнд харагдуул; border-гүй demo дээр alignment ойлгоход хэцүү.",
      ],
      takeaway: "Эндээс заавал санах зүйл: justify main axis-ийн, align cross axis-ийн free space-ийг удирдана; эхлээд axis ба зайгаа хэмж.",
    },
    {
      id: "flex-sizing",
      number: "05",
      title: "flex-basis эхлэх хэмжээг, grow илүүдлийг, shrink дутагдлыг шийднэ",
      eyebrow: "basis → free space → grow/shrink",
      duration: "12–14 минут",
      whyItMatters:
        "Бодит UI-ийн title, input, button ижил хэмжээтэй байдаггүй. flex:1-ийг сохроор тавихын оронд item бүрийн preferred size, үлдсэн зайг авах эсэх, багасах хязгаарыг ойлговол content өөрчлөгдөхөд тогтвортой layout бүтээнэ.",
      explanation: [
        "Browser эхлээд item бүрийн main-axis суурь хэмжээг flex-basis-аас авна. auto үед main-size property эсвэл content-ийн хэмжээнд тулгуурлаж болно. Дараа нь basis-үүд, gap, padding-ийг container-ийн боломжтой хэмжээтэй харьцуулна.",
        "Эерэг free space үлдвэл flex-grow ratio-оор items-д хуваана. grow:0 бол илүүдлийг авахгүй, grow:1 items ижил нөхцөлд share авна. flex:1 shorthand-ийг ‘өргөн 100%’ гэж биш, grow/shrink/basis гэсэн багц дүрэм гэж унш.",
        "Зай дутагдвал flex-shrink ажиллаж items-ийг багасгахыг оролдоно. Text/input зэрэг content intrinsic minimum-тэй тул зарим item хүссэнээс бага болохгүй overflow хийж болно. Урт text агуулсан flexible item-д min-width:0 хэрэгтэй эсэхийг Computed болон overflow evidence-ээр шийд.",
        "flex shorthand гурван хэсэгтэй: flex: grow shrink basis. Жишээ нь flex:1 1 16rem нь 16rem орчмоос эхэлж, илүүдэл зай авна, шаардлагатай үед агшина; flex:0 0 auto нь content хэмжээгээ хадгалж grow/shrink хийхгүй.",
        "Flexbox-ийн хэмжилт content, min/max size, box model, gap зэрэгтэй хамт тооцогдоно. Өнөөдөр алгоритмын бүх нарийн томьёог цээжлэхгүй; basis → available space → grow/shrink гэсэн дараалал болон runtime result-ийг нотлох чадвар гол.",
      ],
      mentalModel: {
        title: "Ширээний суудлын төсөв",
        explanation:
          "Basis нь хүн бүрийн хүссэн эхний суудал, grow нь илүү зайг хуваах жин, shrink нь ширээ бага үед буулт хийх боломж. Analogy-ийн хязгаар: browser intrinsic size, min/max constraint, scaled shrink factor зэрэг нэмэлт дүрэм тооцдог.",
      },
      example: {
        title: "Уян title, хэмжээгээ хадгалах action",
        explanation:
          "Title area үлдсэн зайг авч агшина; action group button content хэмжээнээсээ эхэлнэ.",
        code: ".toolbar-title {\n  flex: 1 1 16rem;\n  min-width: 0;\n}\n\n.toolbar-actions {\n  flex: 0 1 auto;\n  display: flex;\n  gap: 0.5rem;\n}\n\n/* Унших нь: grow shrink basis */",
        language: "css",
      },
      diagram: {
        label: "Flex item-ийн main-size шийдвэр",
        nodes: [
          { title: "BASIS", detail: "Preferred starting size" },
          { title: "COMPARE", detail: "Container − items − gaps" },
          { title: "GROW / SHRINK", detail: "Positive / negative space" },
          { title: "FINAL SIZE", detail: "Min/max + content checked" },
        ],
      },
      questions: [
        { question: "Хоёр item flex-grow:1 байвал үргэлж яг ижил final width болох уу?", answer: "Үгүй. flex-basis, content, min/max constraint өөр бол эхлэх хэмжээ өөр; 1 нь free space-ийн share ratio." },
        { question: "flex-shrink:1 байгаа урт text яагаад overflow хийж болох вэ?", answer: "Intrinsic minimum/min-width:auto багасахыг хязгаарлаж болно; item болон content overflow-ийг inspect хийнэ." },
      ],
      misconceptions: [
        { claim: "flex:1 гэдэг width:100% гэсэн үг.", correction: "Shorthand нь grow, shrink, basis-ийг тогтоож available free space-д оролцоно; container/context-оос үр дүн хамаарна." },
        { claim: "flex-shrink:0 overflow-ийг засна.", correction: "Багасахыг хориглосноор overflow улам ихсэж болно; аль item хэмжээ хадгалах ёстойг requirement-аар шийд." },
      ],
      teachingNotes: [
        "Ratio-ийн advanced scaled shrink calculation руу орохгүй; 600px/420px/300px дээр Computed final width харьцуул.",
        "flex shorthand бичих бүрт сурагчдаар гурван утгыг үгээр уншуул: grow, shrink, basis.",
      ],
      takeaway: "Эндээс заавал санах зүйл: basis-ээс эхэлж, container-ийн илүү зайг grow, дутагдсан зайг shrink дүрмээр шийднэ.",
    },
    {
      id: "patterns-and-evidence",
      number: "06",
      title: "Flexbox-ийг нэг хэмжээст зорилгод сонгож, viewport ба DevTools-оор батална",
      eyebrow: "pattern · responsive · inspect · Grid boundary",
      duration: "9–11 минут",
      whyItMatters:
        "Flexbox-ийг бүх layout-д хүчээр ашиглавал олон wrap, magic width, order rule бий болдог. Layout goal-оо нэг axis эсвэл хоёр axis гэдгээр ангилж, бодит content болон viewport дээр шалгах нь maintainable CSS-ийн суурь.",
      explanation: [
        "Flexbox navigation, toolbar, button group, media object, card-ийн action row зэрэг нэг үндсэн чиглэлтэй component-д сайн. Items нэг row эсвэл column-д урсаж, content-ийн хэмжээнд уян хариу өгөх үед эхний сонголт байж болно.",
        "Row ба column-ийг зэрэг нарийн хянах gallery/page layout бол хоёр хэмжээст асуудал. Flex wrap-аар grid төст зүйл хийж болох ч багана хоорондын alignment тогтвортой байх шаардлагатай бол дараагийн Lesson 10-ын CSS Grid илүү шууд model өгнө.",
        "Responsive гэдэг зөвхөн media query биш. flex-wrap, flexible basis, gap, min/max constraint content-driven breakpoint үүсгэж болно. Гэхдээ 720px, 360px, 280px болон урт Mongolian title, keyboard focus зэрэг бодит test case хэрэгтэй.",
        "DevTools Elements дэх flex badge/overlay нь container, axes, gaps, items-ийг харуулна. Styles/Computed нь rule match, final flex-basis/grow/shrink, width/overflow-ийг өгнө. Visual ‘зүгээр харагдлаа’ гэдэг evidence-ийг measured behavior, DOM order, focus sequence, Git diff-ээр нөхнө.",
      ],
      mentalModel: {
        title: "Эхлээд замаа сонго, дараа нь хөдөлгөөнийг дүрэмчил",
        explanation:
          "Нэг үндсэн замаар урсах бол Flexbox, мөр ба баганын огтлолцлыг зэрэг хянах бол Grid гэж эхний сонголтоо хийнэ. Analogy-ийн хязгаар: бодит component дотор Flexbox ба Grid nested байдлаар хамт ашиглагдаж болно.",
      },
      example: {
        title: "Media query-гүй эхний responsive action bar",
        explanation:
          "Wrap болон flexible basis нь зай хүрэхгүй үед actions-ийг дараагийн мөрт оруулна; viewport evidence-ээр breakpoint-ийг ажиглана.",
        code: ".action-bar {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n\n.action-bar__summary { flex: 1 1 20rem; }\n.action-bar__actions {\n  display: flex;\n  flex: 0 1 auto;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}",
        language: "css",
      },
      diagram: {
        label: "Layout сонгохоос verify хүртэл",
        nodes: [
          { title: "GOAL", detail: "One axis or two?" },
          { title: "DOM", detail: "Container + items" },
          { title: "RULES", detail: "Direction, space, size" },
          { title: "EVIDENCE", detail: "Viewport, focus, DevTools, diff" },
        ],
      },
      questions: [
        { question: "3×4 product gallery-ийн row, column хоёрыг яг зэрэг align хийх бол Flexbox эхний сонголт уу?", answer: "Ихэвчлэн Grid илүү тохиромжтой; энэ нь хоёр хэмжээст requirement." },
        { question: "Desktop дээр зөв харагдсан toolbar-ийг done гэж үзэхэд ямар evidence дутуу вэ?", answer: "Narrow viewport, урт content, wrap/overflow, keyboard focus/DOM order, actual diff." },
      ],
      misconceptions: [
        { claim: "Flexbox мэддэг бол Grid хэрэггүй.", correction: "Flexbox нэг хэмжээст урсгалд, Grid хоёр хэмжээст row/column alignment-д өөр өөр хүчтэй." },
        { claim: "Screenshot таарсан бол layout зөв.", correction: "Нэг content/viewport snapshot хангалтгүй; content stress, multiple widths, focus order, computed rules шалгана." },
      ],
      teachingNotes: [
        "Grid syntax зааж эхлэхгүй; only decision boundary-ийг дараагийн lesson-ийн bridge болгон тодруул.",
        "AI ‘use flexbox’ гэж хэлбэл goal/axis/container/items/viewport evidence байхгүйгээр зөвлөгөө биш claim гэж ангилуул.",
      ],
      takeaway: "Эндээс заавал санах зүйл: нэг axis-ийн layout-д Flexbox сонгож, олон viewport, content, focus, DevTools evidence-ээр батална.",
    },
  ],
  liveDemo: {
    title: "Course toolbar-ийг block flow-оос responsive Flexbox болгох",
    duration: "15 минут",
    goal:
      "Багш semantic toolbar-ийн DOM order-ийг өөрчлөхгүйгээр info ба actions-ийг desktop дээр нэг мөрт байрлуулж, нарийн viewport дээр wrap хийлгэнэ; rule бүрийн axis, free space, sizing нөлөөг DevTools-оор нотолно.",
    setup: [
      "index.html болон styles.css-ийг нэг folder-д бэлд; stylesheet link ажиллаж буйг background sentinel-аар урьдчилан батал.",
      "Starter HTML-ийн дараалал нь eyebrow → title → actions; Tab order логик байгааг Flexbox-оос өмнө шалга.",
      "Browser-ийг 720px viewport дээр, DevTools Elements/Styles/Flex overlay харагдах байдлаар байрлуул.",
      "Toolbar border/background typography-ийн cosmetic CSS бэлэн байж болно; layout rules-ийг demo үеэр incremental нэм.",
      "Long title хувилбар болон 360px/280px width-ийг бэлд; horizontal scrollbar baseline байхгүйг тэмдэглэ.",
    ],
    steps: [
      {
        title: "Semantic starter ба block flow-ийг унших",
        instruction: "HTML-ийг нээгээд .course-info, .course-actions хоёр нь .course-toolbar-ийн direct children гэдгийг Elements panel дээр заа.",
        code: { title: "index.html — өөрчлөхгүй бүтэц", language: "html", code: "<header class=\"course-toolbar\">\n  <div class=\"course-info\">\n    <span>Хичээл 09</span>\n    <h2>Flexbox дадлагын ажлын талбар</h2>\n  </div>\n  <div class=\"course-actions\">\n    <button type=\"button\">Материал</button>\n    <button type=\"button\">Дадлага эхлэх</button>\n  </div>\n</header>" },
        observe: "Block flow-д info ба actions дээрээс доош; DOM/Tab order утгатай.",
        explain: "Зэрэгцүүлэх хоёр item-ийн нийтлэг parent тодорхой боллоо; button бүр toolbar-ийн direct item биш.",
      },
      {
        title: "Flex formatting context үүсгэх",
        instruction: ".course-toolbar дээр зөвхөн display:flex нэмээд Save/Refresh хий; өөрчлөлтийг урьдчилан таалга.",
        code: { title: "Эхний layout rule", language: "css", code: ".course-toolbar {\n  display: flex;\n}" },
        observe: "Хоёр direct child нэг row main axis дээр зэрэгцэнэ; action доторх buttons өөрсдөө block/inline хэвээр.",
        explain: "Нэг түвшний contract: parent container, direct children items.",
      },
      {
        title: "Axis ба free space-ийг харагдуулах",
        instruction: "Flex badge/overlay асааж container border-ийг highlight хийгээд main/cross axis-ийг нэрлэ.",
        observe: "row main axis хэвтээ, cross axis босоо; info/actions-ийн хооронд unused main-axis space байна.",
        explain: "Property нэр сонгохоос өмнө axis ба free space evidence олж байна.",
      },
      {
        title: "Alignment ба minimum spacing нэмэх",
        instruction: "align-items:center, justify-content:space-between, gap:1rem нэмээд rule бүр аль axis дээр ажилласныг сурагчдаар хэлүүл.",
        code: { title: "Container alignment", language: "css", code: ".course-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}" },
        observe: "Info/actions хоёр захад, босоогоор төвд; gap minimum spacing өгнө.",
        explain: "space-between extra free space-ийг хуваана, gap content ойртоход ч тогтмол minimum үлдээнэ.",
      },
      {
        title: "Action group-д nested Flexbox хэрэглэх",
        instruction: ".course-actions-ийг тусдаа flex container болгож buttons хооронд gap өг.",
        code: { title: "Nested one-dimensional layout", language: "css", code: ".course-actions {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}" },
        observe: "Outer toolbar хоёр items удирдана; inner actions хоёр button item удирдана.",
        explain: "Нэг element outer flex item ба inner flex container зэрэг байж болдгийг DOM түвшнээр батал.",
      },
      {
        title: "Content-д тулгуурласан sizing өгөх",
        instruction: "Info-д flexible basis, actions-д content basis өгөөд shorthand-ийг grow/shrink/basis гэж унш.",
        code: { title: "Item sizing", language: "css", code: ".course-info {\n  flex: 1 1 18rem;\n  min-width: 0;\n}\n\n.course-actions {\n  flex: 0 1 auto;\n}" },
        observe: "Info үлдсэн зайг авна; actions content-доо ойр хэмжээтэй. Computed-д grow/shrink/basis final values харагдана.",
        explain: "flex:1 1 18rem нь width:100% биш; basis-ээс эхэлж free space-д оролцож байна.",
      },
      {
        title: "Narrow viewport-д wrap-ийг урьдчилан тааж шалгах",
        instruction: "Toolbar дээр flex-wrap:wrap нэмээд 360px, дараа нь 280px болгон resize хий.",
        code: { title: "Responsive behavior", language: "css", code: ".course-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1rem;\n}" },
        observe: "Зай хүрэхгүй үед actions шинэ line руу орно; source order хадгалагдаж horizontal overflow гарахгүй.",
        explain: "Media query-гүй ч content/basis/wrap нийлж breakpoint үүсгэв. 280px дээр урт button content багтаж буйг заавал хар.",
      },
      {
        title: "Regression ба source evidence-ээр дуусгах",
        instruction: "Tab-аар buttons-д очиж visible focus, 720/360/280 widths, long title, DOM order шалгаад Git diff унш.",
        code: { title: "Өөрчлөлтийн хүрээ", language: "bash", code: "git status\ngit diff -- index.html styles.css" },
        observe: "Semantic HTML/order өөрчлөгдөөгүй; зөвхөн scoped Flexbox rules нэмэгдсэн; бүх acceptance pass.",
        explain: "Desktop screenshot бус олон state-ийн evidence болон minimal diff done decision өгч байна.",
      },
    ],
    expectedOutput: [
      ".course-toolbar нь container, .course-info/.course-actions нь direct flex items гэж зөв нэрлэгдсэн.",
      "720px дээр info ба actions нэг row, cross axis дээр center, хоорондоо minimum 1rem gap-тай.",
      "Actions дотор buttons nested flex layout-аар 0.5rem gap-тай.",
      "Info Computed flex: 1 1 18rem, actions flex: 0 1 auto гэж тайлбарлагдсан.",
      "360px/280px дээр items source order-оор wrap хийж, horizontal overflow байхгүй.",
      "Урт title content алдагдахгүй, button focus visible, Tab order DOM order-той таарсан.",
      "Git diff-д order, absolute position, fixed 720px width, unrelated HTML rewrite байхгүй.",
    ],
    recovery: [
      "Items зэрэгцэхгүй: display:flex зөв parent дээр, stylesheet loaded, selector match, syntax valid эсэхийг Styles panel-ээр шалга.",
      "justify-content нөлөөгүй: container main size болон items-ийн нийт size-ийг хэмжиж free space байгаа эсэхийг шалга.",
      "Buttons toolbar-ээс халивал outer ба inner container хоёулын wrap, gap, item minimum/content width-ийг тус тус inspect хий.",
      "Урт title actions-ийг түлхэж overflow хийвэл .course-info min-width болон урт тасралтгүй content-ийг шалга; overflow:hidden-ээр бүү нуу.",
      "Flex overlay харагдахгүй бол Elements дээр display:flex rule хэрэгжсэн parent-ийг сонгосон эсэх, browser-ийн Layout/Flex badge-ийг шалга.",
      "Visual order/Tab order зөрвөл order/reverse rule-ийг remove хийж HTML source order-ийг requirement-тэй тохируул.",
    ],
  },
  guidedPractice: {
    title: "Хоёр viewport-д ажиллах lesson toolbar бүтээх",
    duration: "20 минут",
    goal:
      "Хос бүр layout property хуулж эхлэхгүй, acceptance criteria-аас container/items/axis/free-space/sizing шийдвэрээ гаргана. 720px дээр нэг мөр, 360px дээр утгатай wrap бүхий toolbar бүтээж, before/after evidence-ээ тайлбарлана.",
    starterCode: [
      {
        title: "index.html — semantic/source order бэлэн",
        language: "html",
        code: "<header class=\"lesson-toolbar\">\n  <div class=\"lesson-summary\">\n    <span class=\"lesson-kicker\">Хичээл 09 · HTML & CSS</span>\n    <h2>Flexbox: нэг хэмжээст responsive layout</h2>\n  </div>\n\n  <div class=\"lesson-actions\" aria-label=\"Хичээлийн үйлдэл\">\n    <button type=\"button\">Материал</button>\n    <button type=\"button\">Дадлага эхлэх</button>\n  </div>\n</header>",
      },
      {
        title: "styles.css — visual foundation, layout зориуд дутуу",
        language: "css",
        code: "* { box-sizing: border-box; }\nbody {\n  margin: 0;\n  padding: 1rem;\n  font-family: system-ui, sans-serif;\n}\n.lesson-toolbar {\n  max-width: 45rem;\n  padding: 1rem;\n  border: 1px solid #94a3b8;\n  background: #f8fafc;\n}\n.lesson-summary h2 { margin: 0.25rem 0 0; }\n.lesson-kicker { font-size: 0.75rem; }\nbutton {\n  min-height: 2.75rem;\n  padding: 0.6rem 0.9rem;\n  font: inherit;\n}\nbutton:focus-visible { outline: 3px solid #f59e0b; }\n\n/* TODO: Layout rules-ээ acceptance-аас өөрсдөө гарга. */",
      },
    ],
    instructions: [
      "Driver editor/browser ажиллуулж, Navigator container, direct items, main axis, cross axis-ийг эхлээд тэмдэглэ; 10 минутын дараа role солино.",
      "720px viewport дээр starter-ийн before state screenshot эсвэл note авч, хүссэн after behavior-ийг нэг өгүүлбэрээр бич.",
      ".lesson-toolbar-ийг flex container болго; rule нэмэх бүрийн өмнө ямар element аль axis дээр хөдөлөхийг таамагла.",
      "Info/actions-ийг босоогоор төвд, desktop дээр хоёр талд байрлуулж, хоорондын minimum зайг gap-аар өг.",
      "Summary-д content-based flexible basis, actions-д content-based basis сонго; shorthand бүрийн grow/shrink/basis-ийг тайлбарлаж note хий.",
      "Actions-ийг nested flex container болгож buttons хоорондын spacing болон narrow үед багтах behavior-ийг шийд.",
      "Toolbar-д wrap зөвшөөрөөд 720px, 360px, 280px width дээр ажигласан row count, overflow, computed item width-ээ хүснэгтэд бич.",
      "Title-ийг ‘Flexbox: Монгол хэл дээрх маш урт туршилтын гарчиг’ болгон stress test хийгээд content тасраагүйг батал.",
      "Mouse ашиглахгүй Tab дарж button focus/order-ийг шалга; дараа нь Git diff уншиж unrelated change арилга.",
      "Pair бүр нэг property-г сонгоод ‘хаана тавьсан → ямар axis/space-д нөлөөлсөн → ямар evidence баталсан’ гэж 30 секундээр тайлбарла.",
    ],
    constraints: [
      "HTML element, text-ийн үндсэн order болон semantics-ийг өөрчлөхгүй.",
      "position:absolute, float, CSS Grid, table layout, order, row-reverse ашиглахгүй.",
      "Toolbar эсвэл items-д fixed 720px/360px width өгөхгүй.",
      "Spacing-д empty element, repeated &nbsp; эсвэл item бүрийн random margin ашиглахгүй.",
      "overflow:hidden тавьж symptom нуухгүй; horizontal overflow-ийн root cause-ийг олно.",
      "AI-г эхний implementation болон prediction хүснэгт бэлэн болтол ашиглахгүй.",
      "720px дээр зөв харагдсанаар зогсохгүй 360px, 280px, long-title, keyboard test бүгд pass байна.",
    ],
    hints: [
      "Outer container-д display, direction default, alignment, wrap, gap гэсэн дарааллаар бод.",
      "Summary үлдсэн зайг авах ёстой бол flex: 1 1 [preferred-size]; actions content хэмжээнээсээ эхэлж болно.",
      "Actions доторх buttons-ийг зэрэгцүүлэхийн тулд .lesson-actions өөрөө nested flex container байж болно.",
      "justify-content:space-between нь minimum gap-ийг орлохгүй; content ойртох үед gap тусална.",
      "Урт text бүхий flexible item агшихгүй байвал Computed min-width-ийг шалга.",
      "Wrap breakpoint-ийг урьдчилан pixel тааж бичихээс өмнө content + basis + available space behavior-ийг ажигла.",
    ],
    expectedResult: [
      "720px дээр summary зүүн, actions баруун, нэг row; бүх items cross axis дээр center.",
      "Summary болон actions хооронд дор хаяж 1rem, buttons хооронд 0.5rem орчим consistent gap.",
      "Summary үлдсэн main-axis зайг авах flexible item, actions content-д тулгуурласан item болсон.",
      "360px/280px дээр actions summary-ийн дараа шинэ line руу wrap хийж, horizontal scrollbar үүсээгүй.",
      "Long title бүрэн харагдаж, layout source order болон утга алдагдаагүй.",
      "Tab order Материал → Дадлага эхлэх, visible focus хадгалагдсан.",
      "Evidence table 720/360/280 width бүрийн row count, overflow yes/no, нэг Computed хэмжээ агуулсан.",
      "Git diff зөвхөн intended scoped Flexbox layout rules агуулсан.",
    ],
    solutionCode: [
      {
        title: "Боломжит Flexbox layout solution",
        language: "css",
        code: ".lesson-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1rem;\n  max-width: 45rem;\n  padding: 1rem;\n  border: 1px solid #94a3b8;\n  background: #f8fafc;\n}\n\n.lesson-summary {\n  flex: 1 1 20rem;\n  min-width: 0;\n}\n\n.lesson-actions {\n  display: flex;\n  flex: 0 1 auto;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}",
      },
    ],
    stretchTask:
      "Гурав дахь ‘Дууссан гэж тэмдэглэх’ button нэм. 280px дээр actions group-ийн buttons wrap хийх боловч toolbar-ээс халихгүй, source/Tab order утгатай хэвээр байх rule гарга. Яагаад fixed breakpoint эсвэл order хэрэглэхгүй байгаагаа evidence-тэй тайлбарла.",
    debriefQuestions: [
      { question: "Яагаад justify-content:space-between дангаараа responsive spacing contract биш вэ?", answer: "Зөвхөн байгаа extra free space-ийг хуваарилна; content ойртоход minimum spacing батлах gap болон wrap/sizing хэрэгтэй." },
      { question: "Энэ practice-д Flexbox яагаад Grid-ээс илүү шууд сонголт байсан бэ?", answer: "Toolbar нь summary/actions гэсэн нэг main-axis урсгалтай; row/column огтлолцлыг зэрэг нарийн хянах requirement байгаагүй." },
      { question: "Solution code өөр харагдаж болох ч pass гэдгийг юугаар шийдэх вэ?", answer: "720/360/280 behavior, overflow, content, keyboard/DOM order, scoped diff гэсэн acceptance evidence-ээр." },
    ],
  },
  aiLab: {
    title: "AI-ийн Flexbox review-г behavior evidence-ээр шалгах",
    duration: "12 минут",
    goal:
      "Сурагч өөрийн layout ба viewport prediction-ийг эхэлж бичээд, AI-аас rule-by-rule review авна. AI-ийн санал бүрийг source truth гэж үзэхгүй, 720/360/280 viewport, Flex overlay, Computed, keyboard болон Git diff-ээр accept/reject/unknown болгоно.",
    prompt: `Та beginner Flexbox code reviewer. Кодыг шууд rewrite хийхээс өмнө reasoning review хий.

Goal:
- 720px дээр summary ба actions нэг row
- 360px/280px дээр source order-оор wrap
- horizontal overflow байхгүй
- keyboard focus/order хэвээр

My prediction before AI:
[720, 360, 280 ӨРГӨН БҮРТ ТААМАГЛАСАН ҮР ДҮН]

HTML:
[RELEVANT HTML]

CSS:
[RELEVANT CSS]

Observed evidence:
[FLEX OVERLAY, COMPUTED VALUES, OVERFLOW, TAB ORDER]

Хариултаа дараах бүтэцтэй өг:
1. Container ба direct flex items
2. Rule бүрийн purpose: axis, spacing, alignment эсвэл sizing
3. 720px ба 360px дээрх expected behavior
4. Evidence дэмжихгүй assumption/uncertainty
5. Хамгийн ихдээ 2 minimal proposal; proposal бүрт нэг reversible test ба predicted observation
6. Regression checklist

Constraints:
- HTML semantics/source order бүү өөрчил.
- position:absolute, order/reverse, fixed viewport width, overflow:hidden, Grid бүү санал болго.
- Test ажилласан мэт бүү бич; зөвхөн prediction өг.
- Зөв code бол unnecessary rewrite бүү санал болго.`,
    steps: [
      {
        title: "AI-аас өмнөх prediction ба evidence хадгалах",
        instruction: "720/360/280 бүрт items хэдэн line, overflow yes/no, focus order ямар байхыг өөрөө бич; current diff-ээ хадгал.",
        observe: "Өөрийн model болон actual result тусдаа баганатай болсон байна.",
        explain: "AI answer өөрийн reasoning-ийг орлохгүй, харьцуулах candidate болно.",
      },
      {
        title: "Minimum relevant context илгээх",
        instruction: "Зөвхөн toolbar HTML/CSS, acceptance, actual viewport evidence-ээ prompt-д оруул; secret/private data бүү оруул.",
        observe: "AI exact selector/property-г нэрлэж байна уу, эсвэл generic advice өгч байна уу?",
        explain: "Context-д source ба behavior хоёул байгаа тул claim-ийг туршиж болно.",
      },
      {
        title: "AI response-ийг claim table болгох",
        instruction: "Container/item, axis, free space, sizing, viewport гэсэн ангиллаар claim бүрийг AI claim / my prediction / actual evidence баганад бич.",
        observe: "AI хэлсэн ба browser дээр хэмжсэн зүйл холилдоогүй байна.",
        explain: "‘Should work’ бол evidence биш; inspect хийх объект болон pass condition хэрэгтэй.",
      },
      {
        title: "Нэг reversible test хийх",
        instruction: "AI change санал болгосон бол хамгийн testable нэгийг DevTools-д түр toggle/edit хийж predicted ба actual-ыг харьцуул.",
        observe: "Target viewport дээр line count/overflow/computed value үнэхээр өөрчлөгдсөн эсэх.",
        explain: "Олон proposal зэрэг paste хийхгүй тул cause/effect тодорхой үлдэнэ.",
      },
      {
        title: "Accept, reject эсвэл no-change шийдвэр гаргах",
        instruction: "Санал хэрэгтэй бол source-д minimal patch; хэрэггүй/буруу бол evidence-тэй reject; code аль хэдийн pass бол no-change гэж бич.",
        observe: "AI response авсан ч заавал code өөрчилсөн байх шаардлагагүй.",
        explain: "Engineering authority сурагчид үлдэж, diff зөвхөн батлагдсан change агуулна.",
      },
      {
        title: "Бүтэн regression ажиллуулах",
        instruction: "720/360/280, long title, overflow, Flex overlay, Tab/focus, Git diff-ээ дахин шалга.",
        expected: "Claim бүр evidence ба decision-тэй; acceptance бүгд pass эсвэл unresolved зүйл тодорхой тэмдэглэгдсэн.",
      },
    ],
    verificationTable: [
      { claim: "Correct element нь flex container", evidence: "Elements DOM tree + matched display:flex + Flex overlay", pass: "Зэрэгцүүлэх direct children overlay-д items болж харагдана" },
      { claim: "justify/align зөв axis дээр ажилласан", evidence: "flex-direction computed value + overlay + before/after one-rule toggle", pass: "Хөдөлсөн чиглэл prediction-тэй таарч, free space байгаа" },
      { claim: "Sizing responsive behavior өгсөн", evidence: "Computed grow/shrink/basis + item widths at 720/360/280", pass: "Summary/actions acceptance-ийн дагуу grow/wrap хийж overflow үүсгэхгүй" },
      { claim: "Visual reorder хэрэггүй", evidence: "HTML source order + keyboard Tab sequence", pass: "Visual, DOM, focus дараалал бүгд Материал → Дадлага эхлэх" },
      { claim: "Proposed change regression үүсгээгүй", evidence: "Long-title test + three widths + focus + Git diff", pass: "Content бүтэн, бүх states pass, unrelated change байхгүй" },
    ],
    teacherNotes: [
      "AI media query санал болговол шууд буруу гэж бүү үз; эхлээд current content-driven wrap acceptance-д хүрсэн эсэх, нэмэлт breakpoint ямар requirement шийдэхийг нотлуул.",
      "AI order эсвэл row-reverse санал болговол screenshot-аас илүү DOM/focus evidence-ээр reject хийлгэ.",
      "AI flex:1-ийг тайлбаргүй санал болговол grow/shrink/basis expanded values болон actual item width асуу.",
      "No-change decision бол legitimate result. AI ашигласан учраас code өөрчлөх албагүйг онцол.",
    ],
  },
  checkpoint: {
    duration: "6 минут",
    instructions:
      "AI болон notes ашиглахгүй. Эхний 3 асуултад нэг өгүүлбэр, application асуултад property + axis/behavior + evidence гэсэн бүтцээр хариул.",
    questions: [
      { type: "concept", question: "display:flex аль element дээр тавигдаж, хэнийг flex item болгодог вэ?", answer: "Зэрэгцүүлэх elements-ийн нийтлэг parent дээр; зөвхөн түүний direct children flex items болно." },
      { type: "concept", question: "flex-direction:column үед justify-content ба align-items ямар axis дээр ажиллах вэ?", answer: "justify-content босоо main axis, align-items хэвтээ cross axis дээр." },
      { type: "concept", question: "flex: 1 1 20rem гэсэн гурван утгыг дарааллаар нэрлэ.", answer: "flex-grow:1, flex-shrink:1, flex-basis:20rem." },
      { type: "application", question: "Row toolbar-ийн items-ийг босоогоор төвд, хооронд нь дор хаяж 1rem зайтай болгох хоёр property?", answer: "align-items:center cross axis-д; gap:1rem items хооронд. justify-content spacing-ийн minimum-ийг орлохгүй." },
      { type: "application", question: "Toolbar 360px дээр халж байна. flex-wrap нэмэхээс гадна ямар гурван evidence шалгах вэ?", answer: "Items-ийн computed basis/min-width, fixed width эсвэл тасралтгүй урт content, container padding/gap ба actual scroll width." },
      { type: "application", question: "‘Flexbox нь нэг хэмжээст’ гэдгийг өөрийн үгээр тайлбарлаад toolbar ба product gallery-ийн сонголттой холбо.", answer: "Flexbox нэг main axis дагуу урсгал/зайг удирдана, тиймээс toolbar-д тохирно; мөр ба баганыг зэрэг align хийх gallery-д Grid илүү шууд. Rubric: axis болон хоёр бодит requirement-ийг холбоно." },
    ],
  },
  wrapUp: {
    summary: [
      "display:flex parent дээр тавигдаж, direct children flex item болдог.",
      "flex-direction main axis-ийг, түүнд перпендикуляр cross axis-ийг тогтооно.",
      "justify-content main axis, align-items cross axis-ийн free space-ийг удирдана.",
      "gap items хоорондын тогтмол зай, flex-wrap шинэ flex line зөвшөөрнө.",
      "flex-basis эхлэх хэмжээ, grow илүү зай, shrink дутагдсан зайд оролцоно.",
      "Nested component нэгэн зэрэг outer flex item, inner flex container байж болно.",
      "Responsive pass гэдэг олон viewport, урт content, overflow, DOM/focus order, DevTools, diff-ийн evidence.",
    ],
    abilities: [
      "DOM tree-ээс flex container ба items тодорхойлох",
      "Axis өөрчлөгдөхөд alignment-ийг таамаглах",
      "Toolbar/navigation/button group Flexbox-оор бүтээх",
      "Content-driven wrap ба flexible sizing хэрэглэх",
      "Flex layout-ийг DevTools-оор оношлох",
      "AI layout suggestion-ийг evidence-ээр review хийх",
    ],
    beforeNextLesson: [
      "Guided practice-ийн toolbar-аа 720/360/280 evidence table-тай нь дуусга",
      "flex shorthand бүрийн grow/shrink/basis тайлбарыг CSS comment биш practice note-д хадгал",
      "Keyboard focus, long-title stress test, Git diff-ээ дахин шалга",
      "‘Build a verified responsive toolbar with Flexbox’ message-ээр intended files-ээ commit хий",
      "Дараагийн хичээлд зориулж 2 мөр × 3 баганатай card gallery-г цаасан дээр зур; аль хоёр axis-ийг зэрэг удирдах шаардлагатайг тэмдэглэ",
    ],
    finalModel:
      "Layout goal → DOM parent/direct items → flex-direction → main/cross axis → gap/alignment → basis → grow/shrink/wrap → viewport/content/focus evidence → minimal diff",
    exitTicket: [
      { question: "Flexbox rule бичихээс өмнөх хамгийн эхний асуулт?", answer: "Ямар element container, ямар direct children items вэ?" },
      { question: "justify-content яагаад заримдаа харагдах өөрчлөлтгүй байдаг вэ?", answer: "Main axis дээр хуваарилах free space байхгүй эсвэл container хэмжээ content-тойгоо адил байж болно." },
      { question: "AI ‘flex:1 нэм’ гэвэл ямар evidence нэхэх вэ?", answer: "Ямар item, expanded grow/shrink/basis, аль viewport-ийн ямар хэмжээг өөрчлөх prediction, Computed/overflow/regression result." },
    ],
    nextLesson: {
      title: "Lesson 10 — CSS Grid",
      connection:
        "Flexbox-оор нэг main axis-ийн урсгал, alignment, flexible sizing-ийг удирдлаа. Дараагийн хичээлээр row ба column-ийг зэрэг тодорхойлох хоёр хэмжээст layout-д CSS Grid яагаад илүү шууд model болдгийг card gallery болон page layout-аар харьцуулна.",
    },
    teacherClose:
      "“Flexbox-ийн property-г таахгүй: container ба items-ээ олно, axis-аа нэрлэнэ, free space-ээ харна, дараа нь viewport дээр нотолно.” гэж хаа.",
  },
};
