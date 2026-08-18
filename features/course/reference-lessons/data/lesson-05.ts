import type { ReferenceLesson } from "../types";

export const lesson05Reference: ReferenceLesson = {
  id: 5,
  durationMinutes: 120,
  teacherGoal:
    "Сурагч HTML-ийг харагдах дизайн биш, document-ийн бүтэц ба утгыг илэрхийлэх хэл гэж ойлгоод CSS/JavaScript-гүй semantic page бүтээж, element сонголтоо browser tree болон HTML дүрмээр хамгаалдаг болно.",
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
      "HTML element, tag, attribute, nesting, document tree-ийн холбоог тайлбарлах.",
      "DOCTYPE, html, head, meta, title, body бүхий бүрэн document skeleton бичих.",
      "header, nav, main, section, article, aside, footer-ийг агуулгын үүргээр сонгох.",
      "Нэг h1 болон логик h2/h3 hierarchy, утгатай link text ашиглах.",
      "HTML-ээ browser Elements tree, keyboard navigation, validator/reference evidence-ээр шалгах.",
    ],
    prerequisites: [
      "Lesson 01-ийн browser HTML response-ийг document болгон render хийдэг ойлголт",
      "Lesson 02-ын folder, editor, file save/refresh workflow",
      "Lesson 03-ын git status, diff, explicit add, commit workflow",
      "Lesson 04-ийн AI suggestion-ийг independent evidence-ээр шалгах дүрэм",
    ],
    tools: [
      "VS Code эсвэл text editor",
      "Chrome, Edge эсвэл Firefox browser",
      "DevTools → Elements",
      "HTML reference/validator — official MDN/WHATWG/W3C validator",
      "Git",
    ],
    outcomes: [
      "lesson-05-html/index.html browser-т алдаагүй нээнэ.",
      "Document metadata болон visible body content-ийг зөв хэсэгт байрлуулна.",
      "Нэг main, логик landmark, heading hierarchy бүхий semantic page бүтээнэ.",
      "‘div soup’-ийг element-ийн үүргээр semantic structure болгон refactor хийнэ.",
      "AI semantic suggestion-ийг Elements tree, keyboard behavior, official element meaning-тэй тулгаж шийднэ.",
    ],
    preparation: [
      "ai-frontend-course дотор lesson-05-html folder болон хоосон index.html бэлд; өмнөх lesson file-ийг санамсаргүй overwrite хийхгүй.",
      "Browser auto-refresh extension шаардахгүй. Save → browser refresh гэсэн энгийн loop-ийг demo-д ашигла.",
      "DevTools Elements panel болон browser page-ийг зэрэг харуулах projector layout бэлд.",
      "HTML validator network ажиллахгүй үед Elements tree, page source, энэ хичээлийн checklist-ийг fallback evidence болго.",
      "CSS-гүй page ‘муухай’ харагдах нь алдаа биш гэдгийг эхэнд нь хэл; style Lesson 07-д орно.",
    ],
    timeline: [
      { start: "00:00", duration: "7 мин", title: "Hook — page-ийн anatomy", teacherAction: "Нэг news/course page-ийг header, navigation, main story, related content, footer гэж самбар дээр label хийлгэж харагдах box-оос semantic role руу шилж." },
      { start: "00:07", duration: "12 мин", title: "HTML, element, tree", teacherAction: "Tag, element, attribute, parent/child nesting-ийг жижиг snippet болон browser tree-ээр тайлбарла." },
      { start: "00:19", duration: "13 мин", title: "Document skeleton", teacherAction: "DOCTYPE-оос body хүртэл мөр бүрийн browser/accessibility үүргийг тайлбарлуулж skeleton бич." },
      { start: "00:32", duration: "15 мин", title: "Semantic landmarks", teacherAction: "header/nav/main/section/article/aside/footer-ийг box shape-аар бус content role-оор сонгох decision questions өг." },
      { start: "00:47", duration: "11 мин", title: "Heading, text, list, link", teacherAction: "h1→h2→h3 hierarchy, paragraph/list, descriptive link text-ийг outline хэлбэрээр үзүүл." },
      { start: "00:58", duration: "7 мин", title: "Browser ба validator evidence", teacherAction: "Visual appearance, DOM tree, source validity гурван өөр шалгалт гэдгийг ялга." },
      { start: "01:05", duration: "7 мин", title: "Завсарлага", teacherAction: "Demo folder/path, browser tab, DevTools layout-аа шалгах зуур сурагчдыг амраа." },
      { start: "01:12", duration: "19 мин", title: "Live demo — semantic page", teacherAction: "Empty index.html-ээс full skeleton, landmarks, heading, links хүртэл incremental build хийж refresh/Elements-ээр алхам бүрийг батал." },
      { start: "01:31", duration: "16 мин", title: "Guided practice — div soup", teacherAction: "Хос бүр generic div structure-ийг nav/main/article/headings болгон refactor хийж element бүрийн reason-ийг бичнэ." },
      { start: "01:47", duration: "7 мин", title: "AI semantic audit", teacherAction: "AI suggestion бүрийг official meaning болон browser tree-тэй тулгуулж accept/reject decision гаргуул." },
      { start: "01:54", duration: "6 мин", title: "Checkpoint ба wrap-up", teacherAction: "Skeleton, semantic, hierarchy асуултаар шалгаад Lesson 06 form semantics руу холбо." },
    ],
  },
  concepts: [
    {
      id: "html-structure",
      number: "01",
      title: "HTML агуулгын бүтэц ба утгыг илэрхийлдэг",
      eyebrow: "Element · attribute · tree",
      duration: "9–11 минут",
      whyItMatters:
        "Browser, search engine, screen reader, developer tool бүгд HTML structure-ээс хуудасны агуулгыг ойлгоно. Зөвхөн дэлгэц дээр ‘адилхан харагдах’ div-үүд нь machine-readable meaning болон keyboard behavior-ийг алдаж болно.",
      explanation: [
        "HTML буюу HyperText Markup Language нь program logic бичих хэл биш, document content-ийг element-үүдээр тэмдэглэж бүтэц/утга өгдөг markup language. Browser HTML-ийг parse хийж document tree буюу DOM үүсгэнэ.",
        "Element ихэвчлэн opening tag, content, closing tag-аас бүрдэнэ: <p>Текст</p>. Зарим element meta, img, input шиг void бөгөөд closing tag-аар content агуулахгүй. Tag бол source syntax, element бол document tree-д үүссэн бүтэц гэж ялгаж болно.",
        "Attribute element-д нэмэлт мэдээлэл өгнө. href холбоосын destination, lang document language, id unique identifier, class grouping hook байж болно. Attribute name/value нь element-ийн meaning/behavior-тэй нийцэх ёстой.",
        "Nesting нь parent-child relationship үүсгэнэ. Дотор хамгийн сүүлд нээгдсэн element эхэлж хаагдах ёстой. Indentation browser-т meaning нэмэхгүй ч хүн tree-г уншиж, nesting error олоход чухал.",
      ],
      mentalModel: {
        title: "Номын бүтэц",
        explanation:
          "Ном title, chapter, section, paragraph, list гэсэн role-той байдаг шиг HTML document element бүр утгатай. Analogy-ийн хязгаар: browser DOM dynamic өөрчлөгдөж болох software tree бөгөөд хэвлэмэл номоос interaction ихтэй.",
      },
      example: {
        title: "Element, attribute, nesting",
        explanation:
          "article parent дотор heading болон paragraph child байна. id нь section рүү link хийх unique hook өгнө.",
        code: "<article id=\"git-note\">\n  <h2>Git-ийн тэмдэглэл</h2>\n  <p>Commit бол local snapshot.</p>\n</article>",
        language: "html",
      },
      diagram: {
        label: "HTML source-оос document tree хүртэл",
        nodes: [
          { title: "HTML SOURCE", detail: "Tags + attributes" },
          { title: "BROWSER PARSE", detail: "Nesting уншина" },
          { title: "DOM TREE", detail: "Parent + children" },
          { title: "RENDER / ACCESS", detail: "User + tools" },
        ],
      },
      questions: [
        { question: "HTML-ийн гол үүрэг харагдах өнгө/зай мөн үү?", answer: "Үгүй. HTML structure ба meaning; CSS presentation хариуцна." },
        { question: "Tag болон element-ийг яг ижил гэж хэлж болох уу?", answer: "Beginner ярианд ойролцоо хэрэглэдэг ч tag source syntax, element document-ийн бүтэн node/content гэж ялгаж болно." },
      ],
      misconceptions: [
        { claim: "HTML бол зөвхөн text-ийг дэлгэц дээр гаргадаг.", correction: "HTML heading, navigation, article, form control зэрэг бүтэц, meaning, built-in behavior өгнө." },
        { claim: "Indentation байхгүй бол browser огт ажиллахгүй.", correction: "Browser whitespace-ийг ихэнхдээ tolerate хийнэ; indentation нь хүний readability, nesting review-д чухал." },
      ],
      teachingNotes: [
        "DOM гэдэг үгийг танилцуулж болох ч API/JavaScript руу орохгүй. ‘Browser-ийн үүсгэсэн tree’ model хангалттай.",
        "Elements panel-д browser source-ийг normalize хийж харагдуулж болохыг хэл; source file ба runtime DOM яг нэг representation биш байж болно.",
      ],
      takeaway: "HTML element бүр content-ийн role болон tree relationship-ийг browser, assistive technology, developer-д хэлдэг.",
    },
    {
      id: "document-skeleton",
      number: "02",
      title: "HTML document тогтмол, шалгаж болох skeleton-той эхэлнэ",
      eyebrow: "DOCTYPE · head · body",
      duration: "10–12 минут",
      whyItMatters:
        "DOCTYPE, language, charset, viewport, title дутвал browser compatibility, Монгол text, mobile rendering, tab/search label, accessibility дээр суурь асуудал гарна. Нэг reliable skeleton бүх дараагийн page-ийн эхлэл болно.",
      explanation: [
        "<!doctype html> browser-т modern standards mode ашиглахыг хэлнэ. Энэ нь ердийн HTML element биш, document-ийн эхний declaration. Орхивол browser legacy quirks behavior руу орж болох эрсдэлтэй.",
        "<html lang=\"mn\"> бүх document-ийн root бөгөөд үндсэн хэлийг machine-д хэлнэ. Screen reader pronunciation, translation, search processing-д language metadata хэрэгтэй.",
        "head дотор visible main content биш document metadata байна. charset UTF-8 нь кирилл зэрэг character-ийг зөв decode хийхэд, viewport mobile width-г зөв тооцоход, title browser tab/history/search label-д тусална.",
        "body дотор хэрэглэгчийн харж, сонсож, ашиглах document content орно. head/body хоёрыг ‘харагдахгүй/харагдана’ гэж хэт энгийн дүрэм болгохгүй: head metadata page experience-д нөлөөлдөг.",
      ],
      mentalModel: {
        title: "Захидлын дугтуй ба агуулга",
        explanation:
          "head-ийг илгээмжийн гаднах metadata, body-г унших үндсэн агуулга гэж төсөөлж болно. Analogy-ийн хязгаар: head дотор stylesheet/script references байж page rendering/behavior-т шууд нөлөөлнө.",
      },
      example: {
        title: "Copy-ready HTML skeleton",
        explanation:
          "Title-ийг file name биш page-ийн утгаар нэрлэ. Visible h1 болон tab title холбоотой боловч тусдаа элемент.",
        code: "<!doctype html>\n<html lang=\"mn\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Frontend суралцах тэмдэглэл</title>\n  </head>\n  <body>\n    <h1>Frontend суралцах тэмдэглэл</h1>\n  </body>\n</html>",
        language: "html",
      },
      diagram: {
        label: "Document root-ийн хоёр үндсэн хэсэг",
        nodes: [
          { title: "DOCTYPE", detail: "Standards mode" },
          { title: "html lang=mn", detail: "Root + language" },
          { title: "HEAD", detail: "Metadata" },
          { title: "BODY", detail: "Document content" },
        ],
      },
      questions: [
        { question: "title болон h1 ижил element үү?", answer: "Үгүй. title head дотор tab/document metadata; h1 body дотор visible top-level heading." },
        { question: "lang=mn хэрэглэгчид ямар ашигтай вэ?", answer: "Assistive technology pronunciation, translation/search processing-д document language-ийг зөв мэдэгдэнэ." },
      ],
      misconceptions: [
        { claim: "meta charset-ийг body дотор тавина.", correction: "Document encoding metadata тул head-ийн эхэнд байрлуулна." },
        { claim: "viewport meta өөрөө responsive design бүтээнэ.", correction: "Mobile viewport-ийг зөв тохируулна; responsive layout/style-г дангаараа бүтээхгүй." },
      ],
      teachingNotes: [
        "Snippet shortcut ашиглахаасаа өмнө нэг удаа skeleton-ийг гараар бичүүлж, мөр бүрийг тайлбарлуул.",
        "Self-closing slash modern HTML void element-д заавал биш; source style дээр маргалдахгүй, semantic requirement-д төвлөр.",
      ],
      takeaway: "Шинэ HTML page бүр standards mode, language, encoding, viewport, meaningful title, body content бүхий skeleton-оос эхэлнэ.",
    },
    {
      id: "semantic-landmarks",
      number: "03",
      title: "Semantic element-ийг харагдах box-оор биш агуулгын үүргээр сонгоно",
      eyebrow: "Landmarks ба content roles",
      duration: "12–14 минут",
      whyItMatters:
        "Semantic landmarks нь screen reader хэрэглэгч page-ийн main/navigation хэсэг рүү хурдан шилжих, search engine structure ойлгох, developer code review хийхэд тусална. Class name ганцаараа native semantic meaning үүсгэхгүй.",
      explanation: [
        "header нь page эсвэл section-ийн introductory content; nav гол navigation link group; main тухайн page-ийн unique primary content; footer зохиогч, copyright, related ending information зэрэг төгсгөлийн хэсэг.",
        "section нь нэг сэдэвтэй thematic group бөгөөд ихэвчлэн heading-тэй. article нь дангаараа түгээж/дахин ашиглаж болох self-contained content: news story, post, product review. Shape ижил харагдсан ч role нь өөр байж болно.",
        "aside нь main content-тэй холбоотой боловч салгаж уншиж болох complementary information. div бол semantic meaningгүй generic container; тохирох element байхгүй styling/layout grouping-д зөв сонголт байж болно.",
        "Нэг page-д visible main content-ийг нэг main landmark-д байрлуулах нь beginner default. header/footer нь page-level болон article-level байж болох тул element name-ийг ‘page дээр ганц’ гэж механикаар цээжлэхгүй.",
      ],
      mentalModel: {
        title: "Барилгын тэмдэглэгээ",
        explanation:
          "‘Гол хаалга’, ‘мэдээлэл’, ‘үндсэн танхим’ гэсэн тэмдэг хүмүүсийг чиглүүлдэг шиг landmark element machine хэрэглэгчийг document дотор чиглүүлнэ. Analogy-ийн хязгаар: semantic element CSS layout-ийг автоматаар гоё болгохгүй.",
      },
      example: {
        title: "Role-оор element сонгох",
        explanation:
          "Class нэрийг semantic болгож харагдуулах биш source element өөрөө role илэрхийлнэ.",
        code: "<header>...</header>\n<nav aria-label=\"Үндсэн цэс\">...</nav>\n<main>\n  <section>...</section>\n  <article>...</article>\n  <aside>...</aside>\n</main>\n<footer>...</footer>",
        language: "html",
      },
      diagram: {
        label: "Page-level semantic landmarks",
        nodes: [
          { title: "HEADER", detail: "Intro / brand" },
          { title: "NAV", detail: "Main links" },
          { title: "MAIN", detail: "Unique content" },
          { title: "ASIDE", detail: "Complementary" },
          { title: "FOOTER", detail: "Ending info" },
        ],
      },
      questions: [
        { question: "Бүх div-ийг semantic element-ээр солих ёстой юу?", answer: "Үгүй. Тохирох content role байхгүй generic wrapper-д div зөв." },
        { question: "section болон article-ийг яаж ялгах вэ?", answer: "Section нэг сэдэвтэй group; article дангаараа түгээж/ойлгож болох self-contained content." },
        { question: "class=main гэж бичих нь main element-тэй адил уу?", answer: "Үгүй. Class styling/selection hook; native main landmark meaning автоматаар өгөхгүй." },
      ],
      misconceptions: [
        { claim: "Semantic element хэрэглэвэл page автоматаар styled болно.", correction: "Browser default style бага зэрэг ялгаж болно, гэхдээ semantic нь meaning; design CSS-ийн үүрэг." },
        { claim: "article element зөвхөн сонины мэдээнд хэрэглэнэ.", correction: "Self-contained post, card, comment, product review зэрэг дангаар утгатай content-д хэрэглэж болно." },
      ],
      teachingNotes: [
        "Element сонголт ambiguous байж болно. Нэг ‘шидэт’ answer шаардахгүй; content role reasoning-ийг үнэл.",
        "ARIA role-г semantic HTML-ийн оронд эхний сонголт болгохгүй. Native element тохирох үед түүнийг хэрэглэ.",
      ],
      takeaway: "Semantic element-ийн нэр content ямар үүрэгтэйг илэрхийлнэ; харагдах layout-ийг биш.",
    },
    {
      id: "headings-and-links",
      number: "04",
      title: "Heading hierarchy document-ийн outline, link text destination-ийг тайлбарлана",
      eyebrow: "h1–h3 · lists · anchors",
      duration: "9–11 минут",
      whyItMatters:
        "Хэрэглэгч page-ийг бүтнээр уншихгүй heading/link-ээр scan хийдэг. Screen reader heading list/link list ашигладаг тул visual size-аар level сонгох, ‘энд дар’ link давтах нь navigation-ийг ойлгомжгүй болгоно.",
      explanation: [
        "h1 page-ийн ерөнхий сэдэв, h2 үндсэн хэсэг, h3 тухайн h2-ын дэд хэсгийг илэрхийлнэ. Heading level нь typography size биш logical depth. Хэмжээг CSS-ээр дараа өөрчилнө.",
        "Heading skip бүр syntax error биш ч outline relationship ойлгомжгүй болгоно. Beginner default нь түвшнийг нэг нэгээр өсгөж, section/article бүрийн heading parent context-тэй нийцүүлэх.",
        "p paragraph-д, ul unordered items-д, ol дараалал/steps-д хэрэглэнэ. Line break ашиглан list шиг харагдуулах нь structure алддаг.",
        "a element href destination руу navigation хийдэг. Link text context-гүй уншихад ч очих газраа тайлбарлах ёстой: ‘MDN HTML element reference’ нь ‘энд дар’-аас илүү утгатай.",
      ],
      mentalModel: {
        title: "Table of contents",
        explanation:
          "Heading hierarchy нь номын table of contents шиг parent/child outline өгнө. Analogy-ийн хязгаар: HTML5 outlining-ийн historical complexity бий; beginner-д logical h1→h2→h3 structure баримтална.",
      },
      example: {
        title: "Scan хийхэд ойлгомжтой outline",
        explanation:
          "Heading text болон link text-ийг document-оос тусад нь уншсан ч meaning ойлгогдоно.",
        code: "<h1>Frontend суралцах зам</h1>\n<h2>Сурсан хичээлүүд</h2>\n<h3>Вебийн үндэс</h3>\n<p>Browser request илгээдэг.</p>\n<a href=\"https://developer.mozilla.org/\">MDN HTML reference унших</a>",
        language: "html",
      },
      diagram: {
        label: "Heading outline",
        nodes: [
          { title: "H1", detail: "Page topic" },
          { title: "H2", detail: "Main section" },
          { title: "H3", detail: "Subsection" },
          { title: "P / LIST", detail: "Supporting content" },
        ],
      },
      questions: [
        { question: "h2 жижиг харагдаж байвал h4 болгож болох уу?", answer: "Үгүй. Level meaning-ийг хадгалж, visual size-ийг CSS-ээр өөрчилнө." },
        { question: "‘Энд дар’ link text яагаад сул вэ?", answer: "Context-гүй link list дээр destination/үйлдлийг тайлбарлахгүй." },
      ],
      misconceptions: [
        { claim: "Heading бол bold/large text хийх хэрэгсэл.", correction: "Heading document-ийн section hierarchy-г илэрхийлнэ; style CSS-ээр удирдана." },
        { claim: "ul болон ol зөвхөн bullet/number харагдуулах style.", correction: "Эдгээр нь item relationship, sequence meaning өгдөг semantic structure." },
      ],
      teachingNotes: [
        "Page-ийн бүх heading text-ийг тусад нь уншиж logical outline болж байгаа эсэхийг ангиар шалгуул.",
        "Link шинэ tab нээх target=_blank-ийг энэ хичээлд default болгохгүй; navigation behavior, security context дараа орно.",
      ],
      takeaway: "Heading level content-ийн шатлал, link text destination/үйлдлийн утгыг илэрхийлнэ — харагдах styling биш.",
    },
    {
      id: "verify-html",
      number: "05",
      title: "HTML-ийг зөвхөн харагдацаар биш structure evidence-ээр шалгана",
      eyebrow: "Elements · keyboard · validator",
      duration: "7–9 минут",
      whyItMatters:
        "Browser алдаатай markup-ийг тааж засварлан render хийж болно. Page харагдаж байгаа нь nesting, duplicate id, landmark, heading, link purpose бүгд зөв гэсэн баталгаа биш.",
      explanation: [
        "Эхний check: file Save болсон, зөв file URL нээгдсэн, page title/body content expected байна. Дараа нь DevTools Elements tree-ээс element nesting болон browser-ийн үүсгэсэн DOM-ийг уншина.",
        "Keyboard-аар Tab дарж link order, skip link, focus target-ийг шалгана. Static heading/paragraph Tab focus авахгүй байх нь хэвийн; interactive link/button/control focus авна.",
        "HTML validator syntax/nesting/attribute асуудлыг олоход тусална. Validator warning/error-ийг сохроор засахгүй; exact line, rule, element meaning-ийг official reference-тэй тулгана.",
        "Git diff source change-ийг, browser Elements runtime tree-г, validator markup rule-г тус тус нотолно. Нэг tool бүх correctness claim-ийг дангаар шалгахгүй.",
      ],
      mentalModel: {
        title: "Гурван өнцгийн шалгалт",
        explanation:
          "Source diff юу бичсэнийг, Elements browser юу ойлгосныг, validator standard rule зөрчсөн эсэхийг харуулна. Гурван камер өөр өнцөг өгч байгаа мэт боловч usability/content truth-ийг хүн мөн review хийнэ.",
      },
      example: {
        title: "HTML verification checklist",
        explanation:
          "Page харагдсан гэдгээр дуусгахгүй, source, tree, interaction, rule гэсэн evidence авна.",
        code: "[ ] Correct file + saved\n[ ] One clear h1\n[ ] Logical h2/h3 outline\n[ ] One main landmark\n[ ] Descriptive links\n[ ] Elements nesting checked\n[ ] Keyboard links reachable\n[ ] Validator issues reviewed\n[ ] git diff read",
        language: "text",
      },
      diagram: {
        label: "HTML-ийн evidence sources",
        nodes: [
          { title: "SOURCE / DIFF", detail: "Юу бичив?" },
          { title: "ELEMENTS", detail: "Browser юу ойлгов?" },
          { title: "KEYBOARD", detail: "Navigation ажиллав уу?" },
          { title: "VALIDATOR / DOCS", detail: "Rule зөв үү?" },
        ],
      },
      questions: [
        { question: "Page browser-т нээгдсэн бол HTML бүрэн зөв үү?", answer: "Үгүй. Browser error recovery хийж болно; structure/semantics/validity-г тусад нь шалгана." },
        { question: "Elements panel source file-тэй яагаад бага зэрэг өөр харагдаж болох вэ?", answer: "Browser parse/error recovery/DOM normalization хийсэн runtime tree харуулдаг." },
      ],
      misconceptions: [
        { claim: "Validator error гарвал AI-аар бүх page-ийг rewrite хийнэ.", correction: "Exact issue, line, standard rule-г ойлгоод хамгийн жижиг source fix хийнэ." },
        { claim: "Static heading Tab focus авахгүй тул inaccessible.", correction: "Tab interactive element-үүдэд focus шилжүүлдэг; heading navigation assistive tech-д өөр mechanism-тэй." },
      ],
      teachingNotes: [
        "Validator external service ашиглавал private code upload policy-г хэл. Local/public learning file дээр demo хий.",
        "Elements-ийг edit хийсэн түр өөрчлөлт refresh-д алга болдгийг сануул; source file final truth-д хадгална.",
      ],
      takeaway: "HTML correctness-ийг source diff, browser tree, keyboard behavior, standard rule гэсэн олон evidence-ээр шалгана.",
    },
  ],
  liveDemo: {
    title: "Empty file-ээс semantic learning page хүртэл",
    duration: "19 минут",
    goal:
      "Багш index.html-ийг skeleton, landmarks, hierarchy, links гэсэн жижиг алхмаар бүтээж, алхам бүрийг Save → Refresh → Elements evidence-ээр тайлбарлана.",
    setup: [
      "lesson-05-html folder-ийг зөв workspace root-оор нээж, index.html хоосон file бэлд.",
      "Browser-д file URL нээгээд DevTools Elements panel-ийг right dock хий.",
      "Editor болон browser-ийг side-by-side харуулж, source indentation болон DOM tree хоёрыг зэрэг унших layout бэлд.",
      "Git working tree demo-гийн өмнө clean эсэхийг шалга; auto-format хийвэл diff-д ямар өөрчлөлт орсныг тэмдэглэ.",
    ],
    steps: [
      { title: "Folder, file, Git state-ээ verify хийх", instruction: "Current path, index.html, git status-ийг шалгаад буруу lesson file засахгүй байгаагаа батал.", code: { title: "Lesson preflight", language: "bash", code: "pwd            # macOS / Linux\nGet-Location   # Windows PowerShell\ngit status", note: "Өөрийн shell-д тохирох path command-ийн нэгийг ашигла." }, observe: "Path lesson-05-html/project root руу, status expected clean/new file state руу заана.", explain: "HTML бичихээс өмнө file scope болон Git evidence тогтоож байна." },
      { title: "Document skeleton бичих", instruction: "DOCTYPE, html lang, head metadata, empty body-г copy биш мөр бүр тайлбарлан бичээд Save хий.", code: { title: "Document skeleton", language: "html", code: "<!doctype html>\n<html lang=\"mn\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Frontend суралцах тэмдэглэл</title>\n  </head>\n  <body></body>\n</html>" }, observe: "Browser tab title шинэчлэгдэж, body хоосон байна.", explain: "Title visible body heading биш; metadata ажиллаж байгааг tab-аар нотлов." },
      { title: "Header ба navigation нэмэх", instruction: "Body дотор page header, descriptive links бүхий nav нэмээд refresh хий.", code: { title: "Page header", language: "html", code: "<header>\n  <p>AI-Native Frontend</p>\n  <nav aria-label=\"Үндсэн цэс\">\n    <a href=\"#about\">Тухай</a>\n    <a href=\"#lessons\">Сурсан хичээлүүд</a>\n  </nav>\n</header>" }, observe: "Links browser дээр гарч, Elements-д header → nav → a nesting харагдана.", explain: "nav нь link байгаа бүх box биш, page-ийн үндсэн navigation group." },
      { title: "Main ба top-level heading нэмэх", instruction: "Нэг main дотор about section, нэг h1, paragraph үүсгэ.", code: { title: "Primary content", language: "html", code: "<main>\n  <section id=\"about\">\n    <h1>Миний frontend суралцах зам</h1>\n    <p>Би вебийг evidence-тэй ойлгож сурч байна.</p>\n  </section>\n</main>" }, observe: "#about link дарахад section рүү очиж, main Elements tree-д нэг удаа харагдана.", explain: "main unique primary content, h1 page topic, id fragment target." },
      { title: "Section ба article hierarchy өргөжүүлэх", instruction: "main дотор lessons section, h2, нэг self-contained article, h3 нэм.", code: { title: "Semantic content group", language: "html", code: "<section id=\"lessons\">\n  <h2>Сурсан хичээлүүд</h2>\n  <article>\n    <h3>Git-ийн үндэс</h3>\n    <p>Commit бол local history snapshot.</p>\n  </article>\n</section>" }, observe: "Heading outline h1 → h2 → h3 дараалалтай.", explain: "Section thematic group; article дангаараа Git lesson note хэлбэрээр утгатай." },
      { title: "Aside ба footer-ийн role нэмэх", instruction: "Main-ийн дараа complementary note болон page footer нэм.", code: { title: "Complementary and ending content", language: "html", code: "<aside>\n  <h2>Сануулах зүйл</h2>\n  <p>AI output бүрийг verify хийнэ.</p>\n</aside>\n<footer>\n  <p><small>Суралцах тэмдэглэл · 2026</small></p>\n</footer>" }, observe: "Elements tree source nesting-тэй таарч, CSS-гүй энгийн block харагдана.", explain: "Visual plain байдал semantic error биш; style дараа." },
      { title: "Keyboard ба Elements audit хийх", instruction: "Mouse-гүй Tab дарж links-д focus очих, Enter-ээр fragment navigation хийх; Elements-ээс landmarks/headings-ээ унш.", observe: "Link-үүд source order-оор focus авч, fragment destination ажиллана.", explain: "Static heading Tab focus авахгүй байж болно. Link бол interactive учраас focus авна." },
      { title: "Source diff-ээ final review хийх", instruction: "Terminal-д git diff -- index.html ажиллуулж document scope, nesting, unintended content-ийг review хий.", code: { title: "Review HTML source change", language: "bash", code: "git status\ngit diff -- index.html" }, observe: "Зөвхөн index.html-ийн intended semantic markup харагдана.", explain: "Browser result болон Git source diff хоёр өөр evidence өгч байна; commit practice-ийн дараа хийнэ." },
    ],
    expectedOutput: [
      "Browser tab title metadata-тай таарна.",
      "Body дотор header/nav, нэг main, thematic section/article, aside, footer байна.",
      "Heading hierarchy нэг h1 → h2 → h3 логиктой байна.",
      "Navigation link text destination-ийг тайлбарлаж, fragment link ажиллана.",
      "Elements tree зөв nesting харуулж, Git diff зөвхөн intended HTML байна.",
    ],
    recovery: [
      "Page blank: file Save болсон, browser зөв index.html file URL нээсэн, body content байгаа эсэхийг шалга.",
      "Монгол text эвдэрсэн: charset UTF-8 head-ийн эхэнд, editor encoding UTF-8 эсэхийг шалга.",
      "Fragment link ажиллахгүй: href #id болон target id exact таарч, duplicate id байхгүйг шалга.",
      "Elements tree сонин nesting-тэй: source closing tags/indentation-аа унш; browser error recovery хийсэн байж болно.",
      "CSS-гүй page plain: засах зүйл биш. Lesson objective structure/meaning гэдгийг дахин хэл.",
    ],
  },
  guidedPractice: {
    title: "Div soup-ийг semantic document болгох",
    duration: "16 минут",
    goal:
      "Хос бүр generic div/text structure-ийн content role-ийг эхлээд нэрлээд, хамгийн бага semantic element өөрчлөлтөөр logical page outline бүтээнэ.",
    starterCode: [
      { title: "index.html body — засах эх код", language: "html", code: "<div class=\"menu\">\n  <a href=\"/\">Нүүр</a>\n  <a href=\"/lessons\">Хичээл</a>\n</div>\n<div class=\"content\">\n  <div class=\"title\">Шинэ тэмдэглэлүүд</div>\n  <div class=\"post\">\n    <div class=\"title\">HTML сурсан нь</div>\n    <div>Element бүр үүрэгтэй.</div>\n  </div>\n</div>" },
    ],
    instructions: [
      "Driver source edit, Navigator element бүрийн одоогийн content role-ийг plain language-аар нэрлэнэ.",
      "menu class-тай link group page navigation мөн эсэхийг шийдээд тохирох landmark болго.",
      "content хэсгийг page-ийн unique primary content element болго.",
      "Top title-ийг page topic, post title-ийг child content title болгож heading level сонго.",
      "Post content дангаараа түгээж болох эсэхийг шийдээд article эсвэл өөр element сонгож reason бич.",
      "Энгийн text-ийг paragraph болгоод source indentation/nesting-ээ цэвэрлэ.",
      "Browser refresh → Elements tree → Tab links → heading outline гэсэн дөрвөн check хий.",
      "git diff-ээс зөвхөн tag/indentation/content role-ийн intended change орсныг review хий." ],
    constraints: [
      "CSS, JavaScript, framework, ARIA role нэмэхгүй.",
      "Бүх div-ийг reason-гүйгээр semantic element болгохгүй.",
      "Visual size хараад heading level сонгохгүй.",
      "Нэгээс олон main element үүсгэхгүй.",
      "AI ашиглахгүй — эхний semantic reasoning багийнх байна.",
      "Text content-ийн meaning-ийг өөрчлөхгүй; structure дээр төвлөр." ],
    hints: [
      "menu нь destination-уудын primary group бол nav тохирно.",
      "Page-ийн unique content-д main, self-contained post-д article гэж эхэлж бод.",
      "Top title h1 бол post title parent-ийн дараагийн level h2 байж болно.",
      "Plain sentence paragraph бол p; class нэр semantic meaning үүсгэхгүй." ],
    expectedResult: [
      "nav дотор хоёр descriptive link байна.",
      "Нэг main unique content-ийг агуулна.",
      "Page heading h1, article heading h2 гэсэн logical outline байна.",
      "Self-contained post article, body text paragraph болсон байна.",
      "Elements tree source nesting-тэй таарч, CSS/JS нэмээгүй байна." ],
    solutionCode: [
      { title: "Боломжит semantic solution", language: "html", code: "<nav aria-label=\"Үндсэн цэс\">\n  <a href=\"/\">Нүүр</a>\n  <a href=\"/lessons\">Хичээл</a>\n</nav>\n<main>\n  <h1>Шинэ тэмдэглэлүүд</h1>\n  <article>\n    <h2>HTML сурсан нь</h2>\n    <p>Element бүр үүрэгтэй.</p>\n  </article>\n</main>", note: "Өөр semantic solution боломжтой. Role reasoning, logical outline, one main гэсэн шалгуурыг үнэл." },
    ],
    stretchTask:
      "Main-ийн эхэнд skip link target нэмээд keyboard-аар Enter дарахад primary content руу focus/navigation шилжиж байгаа эсэхийг турш; зөв behavior-д шаардлагатай tabindex эсэхийг official reference-ээс шалга.",
    debriefQuestions: [
      { question: "Ямар div-ийг солихгүй үлдээж болох байсан бэ?", answer: "Тодорхой semantic role-гүй layout/style wrapper байвал div зөв байж болно; энэ жижиг source-д бүх wrapper role-той байсан." },
      { question: "Та element-ээ ямар evidence/reason-ээр сонгосон бэ?", answer: "Content role, page outline, landmark meaning, self-contained эсэх; харагдах default style-аар биш." },
    ],
  },
  aiLab: {
    title: "AI semantic review-г browser ба reference-ээр шалгах",
    duration: "7 минут",
    goal:
      "Сурагч AI-аас markup rewrite биш issue/reason/minimal fix авах бөгөөд санал бүрийг Elements tree, keyboard behavior, official element meaning-тэй тулгаж шийднэ.",
    prompt: `Та accessibility-д анхаардаг HTML reviewer.

Доорх HTML-ийг semantic structure талаас аудитла:
[ӨӨРИЙН HTML-ЭЭ ЭНД ХУУЛ]

Асуудал бүрд:
1. Exact element/snippet
2. Яагаад content role-тэй нийцэхгүй вэ
3. Хамгийн жижиг HTML засвар
4. Browser Elements/keyboard-аар шалгах алхам

Constraints:
- CSS, JavaScript, framework бүү нэм.
- Бүх div-ийг reason-гүй солихгүй.
- Зөв element-ийг preference-ээр бүү өөрчил.
- Uncertain/ambiguous choice-ийг тодорхой тэмдэглэ.
- Бүтэн page rewrite биш review table өг.`,
    steps: [
      { title: "Өөрийн audit baseline гаргах", instruction: "AI-аас өмнө 2 сайн choice, 2 question/issue-ээ тэмдэглэ.", observe: "Сурагч өөрийн reasoning-тэй байна.", explain: "AI response-ийг харьцуулах baseline." },
      { title: "AI review авах", instruction: "Зөвхөн share хийх боломжтой HTML snippet-ээ prompt-д өг.", observe: "Issue бүр exact element, reason, minimal fix-тэй эсэх.", explain: "Fluent rewrite биш actionable claim шаардаж байна." },
      { title: "Element meaning-ийг verify хийх", instruction: "Санал бүрийг current Elements tree болон MDN/WHATWG element definition-тэй тулга.", observe: "AI preference болон standard meaning ялгарна.", explain: "Reference нь semantic claim-ийн independent evidence." },
      { title: "Accepted fix-ээ browser-т шалгах", instruction: "Нэг justified fix хэрэглээд refresh, heading/landmark tree, keyboard link order шалга.", observe: "Expected structure/interaction хадгалагдсан байна.", explain: "Source change behavior/tree evidence-ээр батлагдана." },
      { title: "Decision log бичих", instruction: "Нэг accept, нэг reject/uncertain саналын reason болон evidence бич.", expected: "AI бүх decision-ийг гаргаагүй, Git diff intended minimal change харуулна." },
    ],
    verificationTable: [
      { claim: "Landmark зөв сонгосон", evidence: "Element official meaning + page content role + Elements tree", pass: "Role ба content intent таарсан" },
      { claim: "Heading hierarchy логик", evidence: "Page-ийн h1/h2/h3 outline", pass: "Level content nesting-ийг илэрхийлсэн" },
      { claim: "Link ойлгомжтой", evidence: "Link text-ийг context-гүй унших + href target", pass: "Destination/үйлдэл тодорхой" },
      { claim: "Fix minimal", evidence: "git diff -- index.html", pass: "Зөвхөн justified semantic source change" },
    ],
    teacherNotes: [
      "HTML semantic choice заримдаа олон зөв хувилбартай. AI-тай адилхан answer сонгосноор биш, reason/evidence-ээр үнэл.",
      "AI ARIA role санал болговол native element аль хэдийн тохирох эсэхийг эхэлж асуу.",
      "Time богино бол нэг accepted, нэг rejected suggestion хангалттай; хоёул evidence-тэй байх ёстой." ],
  },
  checkpoint: {
    duration: "6 минут",
    instructions:
      "AI ашиглахгүйгээр эхний хариугаа бич. Application answer бүрт element choice болон content role reasoning өг.",
    questions: [
      { type: "concept", question: "HTML болон CSS-ийн үндсэн хариуцлага юугаараа ялгаатай вэ?", answer: "HTML content structure/meaning; CSS visual presentation/layout." },
      { type: "concept", question: "head болон body юу агуулдаг вэ?", answer: "Head document metadata/resources; body хэрэглэгчийн document content." },
      { type: "concept", question: "section, article, div гурвыг ялга.", answer: "Section thematic group, article self-contained content, div semantic role-гүй generic container." },
      { type: "application", question: "Page title том харагдуулахын тулд h1-ээс h3 сонгож болох уу?", answer: "Үгүй. Heading level hierarchy-г илэрхийлнэ; visual size CSS-ээр удирдана." },
      { type: "application", question: "Page харагдаж байхад closing tag алдаа байж болох уу? Яаж шалгах вэ?", answer: "Болно; browser recovery хийж болно. Source nesting, Elements runtime tree, validator issue-г тулгана." },
      { type: "application", question: "Semantic HTML-ийг өөрийн үгээр нэг бодит жишээгээр тайлбарла.", answer: "Жишиг: primary links-ийг class=menu div биш nav-д, unique content-ийг main-д байрлуулснаар element нэр content role-ийг machine/user-д хэлнэ. Rubric: role + element + benefit." },
    ],
  },
  wrapUp: {
    summary: [
      "HTML document-ийн content structure ба meaning-ийг element tree-ээр илэрхийлнэ.",
      "Element, attribute, nesting нь browser DOM tree үүсэх суурь.",
      "Document skeleton DOCTYPE, lang, charset, viewport, title, body агуулна.",
      "header/nav/main/section/article/aside/footer-ийг content role-оор сонгоно.",
      "div буруу биш; semantic role байхгүй generic container-д хэрэглэнэ.",
      "Heading level document hierarchy, link text destination-ийг илэрхийлнэ.",
      "Visual render ганцаараа correctness биш; Elements, keyboard, validator/reference, diff-ээр шалгана.",
      "AI semantic suggestion final decision биш, element meaning evidence-ээр audit хийнэ." ],
    abilities: [
      "Бүрэн HTML document skeleton гараар бичих",
      "Content role-д тохирсон semantic landmark сонгох",
      "Logical heading outline болон descriptive links бүтээх",
      "Generic markup-ийг minimal semantic refactor хийх",
      "Browser tree болон Git diff-ээр HTML change verify хийх" ],
    beforeNextLesson: [
      "Semantic learning profile/page-ээ нэг h1, nav, main, дор хаяж хоёр section/article, footer-тэй дуусга",
      "Elements tree, keyboard links, validator/checklist-ээ ажиллуулж issue-гээ тэмдэглэ",
      "git diff-ээ уншаад зөвхөн index.html-ээ ‘Build semantic learning profile’ message-ээр commit хий",
      "Lesson 06-д form.html үүсгэхэд энэ document skeleton-ээ reuse хийхээр хадгал" ],
    finalModel:
      "Content role → semantic element → correct nesting → browser DOM → keyboard/validator check → Git diff → commit",
    exitTicket: [
      { question: "Semantic element сонгох гол асуулт юу вэ?", answer: "Энэ content document дотор ямар үүрэгтэй вэ?" },
      { question: "CSS-гүй plain харагдах page буруу HTML гэсэн үг үү?", answer: "Үгүй. Structure/meaning зөв байж болно; appearance дараа CSS-ээр удирдана." },
      { question: "Page харагдсаны дараа ямар evidence шалгах вэ?", answer: "Elements tree, heading/landmark structure, keyboard behavior, validator/reference, Git diff." },
    ],
    nextLesson: {
      title: "Lesson 06 — Форм ба хүртээмж",
      connection:
        "Semantic document-ийн role, nesting, keyboard verification суурьтай боллоо. Дараагийн хичээлээр form control бүрийн label, name/value, grouping, native validation, keyboard behavior-ийг semantic HTML-ийн илүү interactive хэрэглээ болгон өргөжүүлнэ.",
    },
    teacherClose:
      "“HTML-ийг харагдаж байгаагаар нь биш, content юу болохыг browser болон хэрэглэгчид хэр зөв хэлж байгаагаар нь сонго.” гэж хичээлийг хаа.",
  },
};
