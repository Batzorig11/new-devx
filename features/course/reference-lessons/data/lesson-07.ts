import type { ReferenceLesson } from "../types";

export const lesson07Reference: ReferenceLesson = {
  id: 7,
  durationMinutes: 120,
  teacherGoal:
    "Сурагч CSS-ийг тааж бичдэг style биш, HTML element-ийг selector-оор сонгож cascade болон box model-ийн дүрмээр тооцоологддог систем гэж ойлгоод, DevTools evidence ашиглан жижиг styling/layout алдааг тайлбарлаж засдаг болно.",
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
      "HTML content/semantics болон CSS presentation-ийн хариуцлагыг ялгах.",
      "External stylesheet холбоод selector, property, value, declaration, rule-set-ийг унших.",
      "Class, element, attribute, pseudo-class selector-ийг зорилгоор нь сонгох.",
      "Cascade, source order, specificity, inheritance яагаад computed style-д нөлөөлдгийг тайлбарлах.",
      "Content, padding, border, margin box model болон border-box-ийн үр нөлөөг тооцоолох.",
      "Elements → Styles → Computed ашиглан CSS claim-ээ runtime evidence-ээр шалгах.",
    ],
    prerequisites: [
      "Lesson 05-ын valid semantic HTML, class attribute, document tree",
      "Lesson 06-ын accessible form болон visible keyboard focus",
      "Editor → Save → Refresh → DevTools → Git diff workflow",
      "Lesson 04-ийн AI output-ийг verify хийх дүрэм",
    ],
    tools: [
      "VS Code эсвэл text editor",
      "Browser + DevTools Elements, Styles, Computed",
      "Lesson 06-ын form.html",
      "styles.css",
      "Git",
      "AI chat — зөвхөн hypothesis audit хэсэгт",
    ],
    outcomes: [
      "External stylesheet зөв холбосон styled form page бүтээнэ.",
      "Selector бүр яг ямар element сонгосныг DevTools-оор заана.",
      "Competing declaration-уудаас winner-ийг source order/specificity-ээр тайлбарлана.",
      "Overflow үүсгэсэн box-ийн бодит өргөнийг гараар тооцоод Computed panel-тай тулгана.",
      "!important болон random value хэрэглэхгүй minimal source fix хийж Git diff-ээр шалгана.",
    ],
    preparation: [
      "Lesson 06-ын form.html-ийн copy дээр ажилла; semantic/accessible markup-ийг demo үеэр rewrite хийхгүй.",
      "styles.css хоосон file үүсгээд form.html-тэй ижил folder-д байрлуул.",
      "Browser cache будлиулах үед hard reload хийх shortcut-аа урьдчилан шалга.",
      "DevTools Styles болон Computed panel-ийг projector дээр 125–150% zoom-той уншигдах байдлаар байрлуул.",
      "Guided practice-ийн 320px container, 300px content, 24px padding, 2px border overflow-ийг browser дээр урьдчилан reproduce хий.",
      "Projector дээр focus outline болон crossed-out declaration харагдах theme сонго.",
    ],
    timeline: [
      { start: "00:00", duration: "7 мин", title: "Hook — аль дүрэм ялсан бэ?", teacherAction: "Ижил гарчигт green ба red rule үзүүлээд өнгийг таалгах биш winner-ээ evidence-ээр тайлбарлуулах challenge тавь." },
      { start: "00:07", duration: "12 мин", title: "HTML/CSS boundary ба rule syntax", teacherAction: "External stylesheet link болон selector/declaration anatomy-г source→render flow-той холбо." },
      { start: "00:19", duration: "12 мин", title: "Selectors", teacherAction: "Element, class, attribute, pseudo-class-ийг content meaning биш reusable styling hook сонголтоор ялгуул." },
      { start: "00:31", duration: "14 мин", title: "Cascade, specificity, inheritance", teacherAction: "Competing rule бүр matching эсэх, origin/importance, specificity, source order гэсэн дарааллаар winner тодорхойл." },
      { start: "00:45", duration: "12 мин", title: "Box model ба sizing", teacherAction: "Content + padding + border-ийг тооцож overflow-ийг цифрээр урьдчилан таалгаад border-box-той харьцуул." },
      { start: "00:57", duration: "8 мин", title: "Units ба DevTools workflow", teacherAction: "px/rem/%/max-width-ийн beginner scope, Styles/Computed evidence, source-of-truth ялгааг тогтоо." },
      { start: "01:05", duration: "7 мин", title: "Завсарлага", teacherAction: "Demo file, viewport, DevTools zoom, Git state-ээ шалгах зуур сурагчдыг амраа." },
      { start: "01:12", duration: "19 мин", title: "Live demo — form styling + diagnosis", teacherAction: "Stylesheet холбоод rule-үүдийг incremental нэм; conflict ба overflow-ийг DevTools-оор олж source-д minimal fix хий." },
      { start: "01:31", duration: "16 мин", title: "Guided practice — broken card", teacherAction: "Хос бүр specificity болон box sizing гэсэн хоёр өөр root cause-ийг evidence checklist-ээр засна." },
      { start: "01:47", duration: "7 мин", title: "AI CSS hypothesis audit", teacherAction: "AI suggestion бүрийг matching rule, computed value, box measurement, diff-ээр accept/reject хийлгэ." },
      { start: "01:54", duration: "6 мин", title: "Checkpoint ба wrap-up", teacherAction: "Winner, total width, source/runtime асуултаар шалгаад Lesson 08-ын prompt engineering руу холбо." },
    ],
  },
  concepts: [
    {
      id: "css-boundary",
      number: "01",
      title: "CSS HTML-ийн meaning-ийг солихгүй, presentation-ийн дүрэм өгнө",
      eyebrow: "link · selector · declaration",
      duration: "10–12 минут",
      whyItMatters:
        "HTML/CSS хариуцлага холилдвол semantic markup visual хэрэгцээнд баригдаж, нэг style change олон file-д давтагдана. External stylesheet нь presentation rule-ийг reusable, inspectable source болгоно.",
      explanation: [
        "HTML content ба structure-ийг тодорхойлно: энэ бол heading, label, button. CSS browser эдгээр element-ийг хэрхэн зурж байрлуулахыг заана: өнгө, зай, хэмжээ, layout. CSS унтраахад content/meaning болон үндсэн interaction боломжтой хэвээр байх ёстой.",
        "head доторх link rel='stylesheet' href='./styles.css' нь browser-д stylesheet resource авахыг хэлнэ. href path буруу, rel буруу, file save хийгдээгүй бол CSS rule зөв байсан ч page-д хүрэхгүй.",
        "CSS rule нь selector ба declaration block-оос бүрдэнэ. Selector ямар element-д, property ямар шинжид, value ямар утга өгөхийг хэлнэ. Semicolon declaration-уудыг, braces rule block-ийг тусгаарлана.",
        "Browser CSS parse хийхдээ ойлгохгүй declaration-ийг алгасаж бусдыг үргэлжлүүлж болно. Page нээгдсэн гэдэг бүх style хэрэгжсэн нотолгоо биш; Styles panel matching/invalid/crossed-out state харуулна.",
      ],
      mentalModel: {
        title: "Барилга ба интерьерийн заавар",
        explanation:
          "HTML нь өрөөний зориулалт, хаалга, шаттай үндсэн бүтэц; CSS нь өнгө, зай, харагдах байрлалын заавар. Интерьерийн будаг хаалгыг button болгож чадахгүй. Analogy-ийн хязгаар: CSS layout зарим visual order/visibility-гаар accessibility-д бодитоор нөлөөлж чадна.",
      },
      example: {
        title: "External stylesheet-ийн эхний rule",
        explanation:
          "Link document head-д байна; rule бүх body-д font/color өгнө. Path-ийг current HTML file-ээс relative тооцно.",
        code: "<!-- form.html -->\n<link rel=\"stylesheet\" href=\"./styles.css\" />\n\n/* styles.css */\nbody {\n  color: #1f2937;\n  font-family: system-ui, sans-serif;\n}",
        language: "css",
      },
      diagram: {
        label: "CSS rule render-д хүрэх зам",
        nodes: [
          { title: "HTML <link>", detail: "Stylesheet URL" },
          { title: "CSS FILE", detail: "Parsed rules" },
          { title: "SELECTOR", detail: "Matching elements" },
          { title: "COMPUTED STYLE", detail: "Rendered result" },
        ],
      },
      questions: [
        { question: "styles.css зөв мөртлөө page plain байвал эхлээд юу шалгах вэ?", answer: "link element, href relative path, file save, Network/Styles-д stylesheet loaded эсэх." },
        { question: "CSS-ээр div-д button шиг харагдац өгвөл semantic button болох уу?", answer: "Үгүй. Visual appearance role, keyboard, submit behavior үүсгэхгүй." },
      ],
      misconceptions: [
        { claim: "CSS зөвхөн page-ийг гоё болгодог тул correctness-д хамаагүй.", correction: "Focus visibility, overflow, text readability, hidden content зэрэг нь usability/accessibility correctness-д нөлөөлнө." },
        { claim: "HTML бүр өөрийн style attribute-тай байвал ойлгомжтой.", correction: "Inline style reuse/cascade/debugging-ийг хүндрүүлнэ; энэ lesson-д external stylesheet ашиглана." },
      ],
      teachingNotes: [
        "Link tag-ийг body руу санаатай бүү оруул; эхлэгчдэд stable convention болгон head-д байрлуул.",
        "CSS reset/framework нэмж abstraction үүсгэхгүй. Browser default style-ийг inspect хийж сургах нь зорилго.",
      ],
      takeaway: "HTML meaning өгнө; linked CSS selector-аар element сонгож property:value presentation rule хэрэглэнэ.",
    },
    {
      id: "selectors",
      number: "02",
      title: "Selector нь style хүрэх element-үүдийн шалгуур",
      eyebrow: "element · class · attribute · pseudo-class",
      duration: "10–12 минут",
      whyItMatters:
        "Хэт өргөн selector unintended element өөрчилж, хэт specific selector override war үүсгэнэ. Reusable class болон state selector-ийг зөв сонгох нь CSS-ийг таамаглахад хялбар болгоно.",
      explanation: [
        "Element selector (button, label) тухайн tag-ийн бүх instance-д нийтлэг default өгнө. Class selector (.card, .field) олон element-д reusable styling hook өгч, HTML meaning-ээс presentation variation-ийг салгана.",
        "Descendant selector (.card h2) card доторх бүх matching descendant-д хүрнэ. Child selector (.card > h2) зөвхөн шууд child-д хүрнэ. Structure-д хэт түшиглэсэн урт chain HTML өөрчлөгдөхөд амархан эвдэрнэ.",
        "Attribute selector input[type='email'] тодорхой attribute state/value сонгоно. Pseudo-class :focus-visible, :hover, :checked зэрэг element-ийн interaction state-ийг сонгоно; class-ийг JavaScript-ээр гараар сольж дуурайх шаардлагагүй тохиолдол олон.",
        "Selector-ийг уншихдаа баруунаас matching target-аа олж, дараа нь ancestor/condition-оо шалгах mental habit ашигла. DevTools Elements дээр element select хийхэд Styles panel зөвхөн match болсон rule-үүдийг харуулна.",
      ],
      mentalModel: {
        title: "Хаягласан зарлал",
        explanation:
          "‘Бүх button’, ‘card class-тай зүйл’, ‘card доторх h2’, ‘focus-visible байгаа control’ гэдэг нь зарлал хэнд хүрэх шалгуур. Analogy-ийн хязгаар: нэг element олон selector-д зэрэг match болж cascade winner тооцогдоно.",
      },
      example: {
        title: "Нэг element-д олон matching selector",
        explanation:
          "Submit button element selector, class selector, focus state rule-д өөр өөр үед зэрэг match болно.",
        code: "button { padding: 0.75rem 1rem; }\n.button-primary { background: #6c5ce7; }\n.form-card button { width: 100%; }\nbutton:focus-visible { outline: 3px solid #f59e0b; }",
        language: "css",
      },
      diagram: {
        label: "Selector matching",
        nodes: [
          { title: "ELEMENT", detail: "button" },
          { title: "CLASS", detail: ".button-primary" },
          { title: "CONTEXT", detail: ".form-card button" },
          { title: "STATE", detail: ":focus-visible" },
        ],
      },
      questions: [
        { question: "Олон card-д ижил style хэрэгтэй бол id эсвэл class аль нь зөв default вэ?", answer: "Class — reusable styling hook; id document дотор unique identity." },
        { question: ".form-card button selector ямар element-ийг сонгох вэ?", answer: "form-card class-тай ancestor-ийн доторх бүх button descendant." },
      ],
      misconceptions: [
        { claim: "Class name visual color байх ёстой: .purple-text.", correction: "Role/intent-oriented .form-title зэрэг нэр theme өөрчлөгдөхөд илүү тогтвортой; бүх тохиолдолд dogma биш." },
        { claim: "Урт selector илүү professional.", correction: "Урт structural selector specificity/coupling нэмнэ; хамгийн энгийн sufficient selector сонго." },
      ],
      teachingNotes: [
        "BEM эсвэл naming methodology-г энэ lesson-д заахгүй; reusable class, short selector гэсэн суурь дүрэм хангалттай.",
        ":focus-visible-г :focus-оос ялгах implementation nuance руу хэт гүн орохгүй; keyboard focus харагдах ёстойг батал.",
      ],
      takeaway: "Хамгийн энгийн sufficient selector ашиглаж, match болсон element-ийг DevTools-оор батална.",
    },
    {
      id: "cascade",
      number: "03",
      title: "Cascade competing declarations-аас final value сонгоно",
      eyebrow: "match · specificity · source order · inherit",
      duration: "12–14 минут",
      whyItMatters:
        "‘CSS ажиллахгүй’ гэсэн ихэнх beginner асуудал rule load болоогүй, selector match хийгээгүй, өөр declaration ялсан, эсвэл value inherited/default байснаас гардаг. Cascade уншиж чадвал random override зогсоно.",
      explanation: [
        "Эхлээд rule element-д match хийсэн эсэхийг шалгана. Match хийгээгүй declaration winner-ийн өрсөлдөөнд огт орохгүй. Дараа нь importance/origin зэрэг cascade layer байна; beginner source-д normal author rules дээр төвлөрнө.",
        "Specificity-г rough hierarchy-гаар ойлго: inline style > id > class/attribute/pseudo-class > element. Ижил specificity үед source-д дараа бичигдсэн declaration ялна. Энэ бол ‘хамгийн сүүлд бичсэн нь үргэлж ялна’ гэсэн дүрэм биш.",
        "Inheritance зарим property-г parent-аас child руу дамжуулна: color, font-family түгээмэл; margin, border, width ерөнхийдөө inherited биш. Computed panel final value болон заримдаа source-г харуулна.",
        "!important normal cascade-г хүчээр давж, дараагийн override-ийг улам хүндрүүлдэг. Beginner debugging-д !important хориглож, root cause selector/source-order/style source дээр засна.",
      ],
      mentalModel: {
        title: "Тэмцээнд зөвхөн бүртгэгдсэн дүрэм орно",
        explanation:
          "Match болсон declaration-ууд л өрсөлдөнө; specificity өндөр нь түрүүлнэ, тэнцвэл дараах source ялна. Inheritance бол өрсөлдөгч declaration байхгүй үед parent-аас ирсэн default өв. Analogy нь full cascade origin/layer-ийг хялбаршуулсан.",
      },
      example: {
        title: "Яагаад red ялсан бэ?",
        explanation:
          "article .card-title нь нэг element + нэг class specificity-тэй тул дараа/өмнө байхаас үл хамааран дан .card-title-оос илүү specific.",
        code: ".card-title { color: green; }\narticle .card-title { color: red; }\n\n/* <article><h2 class=\"card-title\">...</h2></article> */",
        language: "css",
      },
      diagram: {
        label: "Computed value олох дараалал",
        nodes: [
          { title: "MATCH?", detail: "Selector хүрсэн үү" },
          { title: "PRIORITY", detail: "Importance/origin" },
          { title: "SPECIFICITY", detail: "More targeted" },
          { title: "SOURCE ORDER", detail: "Tie breaker" },
        ],
      },
      questions: [
        { question: "Доор бичсэн .card-title green яагаад article .card-title red-ийг давахгүй байж болох вэ?", answer: "article .card-title specificity өндөр; source order зөвхөн specificity тэнцсэн үед шийднэ." },
        { question: "Child text parent-ийн color авсан ч margin яагаад авахгүй вэ?", answer: "color inherited property, margin inherited биш." },
      ],
      misconceptions: [
        { claim: "CSS file-ийн хамгийн доорх rule үргэлж ялна.", correction: "Зөвхөн match, priority, specificity тэнцсэний дараа source order шийднэ." },
        { claim: "Ажиллахгүй style бүрд !important нэмнэ.", correction: "Styles panel-оор loser/root cause олж selector/source structure-г minimal засна." },
      ],
      teachingNotes: [
        "Specificity numeric score цээжлүүлэхээс илүү хоёр бодит selector харьцуул. :is/:where/layers зэрэг advanced edge case оруулахгүй.",
        "Crossed-out declaration-ийг projector дээр зааж winner/loser source location-ийг сурагчдаар уншуул.",
      ],
      takeaway: "Match → priority → specificity → source order-оор winner тодорч, Computed нь final value-г нотолно.",
    },
    {
      id: "box-model",
      number: "04",
      title: "Rendered box content, padding, border, margin гэсэн давхаргатай",
      eyebrow: "content-box · border-box · overflow",
      duration: "10–12 минут",
      whyItMatters:
        "Width өгсөн ч element container-оос халих нийтлэг шалтгаан нь padding/border нэмэгдсэн бодит outer size. Box model-ийг тооцохгүй бол layout fix random width бууруулах цикл болно.",
      explanation: [
        "Content box дотор text/control content байрлана. Padding content ба border-ийн дундах дотоод зай; border хүрээ; margin бусад box-оос гаднах зай. Background content болон padding area-д ихэвчлэн зурагдана.",
        "Default box-sizing: content-box үед width нь зөвхөн content width. 300px width + left/right 24px padding + 2px borders = 352px outer border box. 320px parent-д 32px overflow үүснэ.",
        "box-sizing: border-box үед declared width дотор padding болон border орно: outer width 300px хэвээр, content available width багасна. Universal selector-оор border-box default өгөх pattern түгээмэл.",
        "Margin collapse, min-content зэрэг advanced behavior бий; энэ lesson-д horizontal arithmetic, Computed box diagram, actual overflow evidence дээр төвлөрнө.",
      ],
      mentalModel: {
        title: "Бэлгийн хайрцаг",
        explanation:
          "Бэлэг content, зөөлөвч padding, хайрцагны хана border, бусад хайрцгаас зай margin. content-box дээр ‘300px’ нь зөвхөн бэлэг; border-box дээр бүтэн хайрцгийн гадна хэмжээ. Real CSS-ийн flow/collapse behavior analogy-аас өргөн.",
      },
      example: {
        title: "352px болсон 300px card",
        explanation:
          "DevTools Computed box diagram-ийг нээхээс өмнө сурагчдаар outer width-ийг тооцуул.",
        code: ".wrapper { width: 320px; }\n.card {\n  width: 300px;\n  padding: 24px;\n  border: 2px solid;\n}\n/* content-box outer width = 300 + 48 + 4 = 352px */",
        language: "css",
      },
      diagram: {
        label: "Box model дотроос гадагш",
        nodes: [
          { title: "CONTENT", detail: "width / height" },
          { title: "PADDING", detail: "Inside spacing" },
          { title: "BORDER", detail: "Edge" },
          { title: "MARGIN", detail: "Outside spacing" },
        ],
      },
      questions: [
        { question: "300 + 24×2 + 2×2 хэд вэ?", answer: "352px — content-box card-ийн border-box outer width." },
        { question: "border-box тавихад padding алга болох уу?", answer: "Үгүй. Padding хэвээр, declared width-ийн дотор тооцогдоно; content area багасна." },
      ],
      misconceptions: [
        { claim: "width: 100% бол element үргэлж parent дотор яг багтана.", correction: "content-box дээр padding/border 100%-ийн дээр нэмэгдэж overflow үүсгэж болно." },
        { claim: "Margin element-ийн өөрийн colored background дотор орно.", correction: "Margin border-оос гаднах transparent spacing." },
      ],
      teachingNotes: [
        "Calculator хэрэглэхээс өмнө сурагч бүр arithmetic бичнэ; дараа нь DevTools measurement-тэй тулгана.",
        "Universal border-box rule-ийн pseudo-element extension-ийг харуулж болох ч memorization бүү шаарда.",
      ],
      takeaway: "Outer size-ийг content + padding + border-оор тооцож, border-box declared width-д тэднийг багтаана.",
    },
    {
      id: "units",
      number: "05",
      title: "Unit болон constraint нь value ямар reference-тэй өөрчлөгдөхийг хэлнэ",
      eyebrow: "px · rem · % · max-width",
      duration: "6–8 минут",
      whyItMatters:
        "Зөвхөн fixed pixel хэмжээ projector дээр ажиллаад жижиг/том viewport, user font preference дээр эвдэрч болно. Unit-ийг шашин шиг бус ямар reference хэрэгтэйгээр сонгоно.",
      explanation: [
        "px CSS pixel нь border, icon detail зэрэг тогтвортой жижиг хэмжээнд ашигтай. rem root font size-тэй хамаарч text/spacing scale хийхэд тусалдаг; 1rem default ихэвчлэн 16px боловч hard guarantee гэж цээжлэхгүй.",
        "% parent/containing block-ийн холбогдох хэмжээнд хамаарна. width: 100% fluid байж болох ч box sizing-ийг хамт бодно. max-width upper bound тавьж, width: 100%-тай нийлээд жижиг дэлгэцэд агшиж том дэлгэцэд хэт сунахаас сэргийлнэ.",
        "Эхлэгчийн practical pattern: page wrapper width: min(...) advanced syntax-аас өмнө width: 100%; max-width: 40rem; margin-inline: auto; padding ашиглаж болно.",
      ],
      mentalModel: {
        title: "Absolute ба relative хэмжүүр",
        explanation:
          "px нь тогтсон шугамын нэгж, % parent савтай, rem root text scale-тай reference үүсгэнэ. Гэхдээ browser zoom болон device pixel mapping илүү нарийн тул physical хэмжээ гэж ойлгохгүй.",
      },
      example: {
        title: "Fluid боловч хязгаартай container",
        explanation: "Small viewport-д багасна, wide viewport-д 40rem-ээс өргөсөхгүй.",
        code: ".page {\n  width: 100%;\n  max-width: 40rem;\n  margin-inline: auto;\n  padding: 1rem;\n}",
        language: "css",
      },
      questions: [
        { question: "max-width яагаад width-ийг орлохгүй хамт хэрэглэгддэг вэ?", answer: "width fluid target өгч, max-width дээд хязгаар тавина." },
        { question: "Бүх value-г rem болгох ёстой юу?", answer: "Үгүй. Reference/behavior-оор сонгоно; border 1px, scalable spacing rem зэрэг context-dependent." },
      ],
      misconceptions: [
        { claim: "Responsive гэдэг бүх px-ийг % болгох.", correction: "Responsive design constraints, content, layout, viewport testing-ийн нийлбэр; unit substitution ганцаараа биш." },
        { claim: "1rem үргэлж physical 16 pixels.", correction: "Root computed font size/user/browser settings-ээс хамаарна." },
      ],
      teachingNotes: [
        "vw/clamp/container query руу орохгүй; Lesson 09+ layout-д units дахин хэрэглэгдэнэ.",
        "Viewport drag хийхэд content readable/contained байгаа эсэхийг qualitative acceptance болгон харуул.",
      ],
      takeaway: "Unit-ийг reference behavior-оор сонгож, width + max-width зэрэг constraint-аар responsive range өгнө.",
    },
    {
      id: "devtools-css",
      number: "06",
      title: "Styles, Computed, box diagram нь CSS debugging-ийн evidence chain",
      eyebrow: "inspect · trace · test · source fix",
      duration: "6–8 минут",
      whyItMatters:
        "Browser дээр шууд value тааж солих нь түр харагдац өгдөг ч root cause/source-г алдаж болно. DevTools matching rules ба final computed value-г харуулснаар hypothesis хурдан шалгагдана.",
      explanation: [
        "Elements picker-ээр яг асуудалтай element сонго. Styles panel-ээс selector match, crossed-out loser, invalid declaration, source file/line-г унш. Filter-д property name бичвэл conflict хурдан харагдана.",
        "Computed panel final normalized value-г харуулна: green keyword эцэст rgb(...) байж болно. Box diagram content/padding/border/margin хэмжээг runtime layout-аас өгнө.",
        "DevTools checkbox/value edit нь reversible experiment. Refresh хийхэд алга болно. Test амжилттай бол source styles.css-д хамгийн жижиг fix хийгээд refresh, regression, Git diff шалгана.",
        "Evidence chain: observed symptom → selected element → matching/losing rule → computed value/measurement → one hypothesis → temporary test → source patch → re-test.",
      ],
      mentalModel: {
        title: "X-ray ба түр боолт",
        explanation:
          "DevTools source rule-ийн нөлөө, box хэмжээг дотроос нь харуулах X-ray; live edit нь diagnosis-ийн түр test. Эцсийн эмчилгээ source file-д орно.",
      },
      example: {
        title: "CSS evidence log",
        explanation: "‘Харагдаж байна’ биш exact source/value/measurement тэмдэглэ.",
        code: "Observed: .card-title is red\nStyles: article .card-title { color: red } wins\nComputed: color = rgb(255, 0, 0)\nTest: disable winning declaration → green\nSource fix: remove unintended competing rule\nRegression: title green; focus/layout unchanged",
        language: "text",
      },
      diagram: {
        label: "CSS diagnosis loop",
        nodes: [
          { title: "OBSERVE", detail: "Exact symptom" },
          { title: "INSPECT", detail: "Styles + Computed" },
          { title: "TEST ONE", detail: "Temporary toggle" },
          { title: "FIX + RETEST", detail: "Source + regression" },
        ],
      },
      questions: [
        { question: "DevTools-д value солиод зөв болсон бол task дууссан уу?", answer: "Үгүй. Энэ temporary experiment; source file-д fix хийж refresh/regression/diff шалгана." },
        { question: "Styles ба Computed ямар ялгаатай evidence вэ?", answer: "Styles matching declarations/winner-losers; Computed final used value ба box measurements." },
      ],
      misconceptions: [
        { claim: "Computed-д 16px байгаа тул source-д 16px бичсэн.", correction: "Source rem/%/inherit/calc байж болно; Computed normalized final value." },
        { claim: "DevTools өөрчлөлт автоматаар source-д хадгалагдана.", correction: "Энэ workflow-д refresh-д алга болно; source-д зориуд patch хий." },
      ],
      teachingNotes: [
        "Panel layout browser version-оор бага зэрэг өөр байж болно; нэр цээжлүүлэхээс илүү evidence төрөлд төвлөр.",
        "Responsive/device toolbar заавал оруулахгүй; хоёр viewport width drag хийхэд хангалттай.",
      ],
      takeaway: "DevTools-д symptom-ийн rule/value/measurement-ийг олж, нэг reversible test хийгээд source-д minimal fix хадгална.",
    },
  ],
  liveDemo: {
    title: "Accessible form-ийг style хийгээд хоёр CSS root cause олох",
    duration: "19 минут",
    goal:
      "Багш Lesson 06 form-ийн semantics-ийг өөрчлөхгүйгээр stylesheet холбоод reusable styles нэмнэ; дараа нь specificity conflict болон box overflow-ийг Styles/Computed evidence-ээр оношилж source-д засна.",
    setup: [
      "Lesson 06-ын ажилладаг form.html-ийг lesson-07-css folder-д copy хий; label/name/grouping хэвээр эсэхийг шалга.",
      "styles.css file бэлдэж, Git status-аар зөв folder/repo дээр байгаагаа батал.",
      "Browser, editor, DevTools Styles/Computed-ийг зэрэг харагдахаар байрлуул.",
      "Demo эхлэхэд form keyboard-аар ажиллаж буй baseline-ийг нэг удаа харуул.",
    ],
    steps: [
      { title: "Stylesheet холбоо verify хийх", instruction: "Head-д link нэмээд body background rule бич; Save/Refresh хий.", code: { title: "Link + sentinel rule", language: "css", code: "<!-- form.html head -->\n<link rel=\"stylesheet\" href=\"./styles.css\" />\n\n/* styles.css */\nbody { background: #f5f3ff; }" }, observe: "Background өөрчлөгдөж, DevTools Styles-д styles.css source харагдана.", explain: "Sentinel rule path/load-ийг business styling-ээс өмнө баталлаа." },
      { title: "Base typography ба page constraint нэмэх", instruction: "body болон .page class-д readable font, line-height, max-width, spacing өг.", code: { title: "Page foundation", language: "css", code: "* { box-sizing: border-box; }\nbody {\n  margin: 0;\n  color: #1f2937;\n  background: #f5f3ff;\n  font-family: system-ui, sans-serif;\n  line-height: 1.5;\n}\n.page {\n  width: 100%;\n  max-width: 40rem;\n  margin-inline: auto;\n  padding: 2rem 1rem;\n}" }, observe: "Content centered, narrow viewport-д page агшина.", explain: "Semantics биш presentation class; border-box sizing predictable болгов." },
      { title: "Form card ба controls style хийх", instruction: "Form-д form-card class өгөөд spacing, border, control font/padding, button style нэм.", code: { title: "Reusable form styles", language: "css", code: ".form-card {\n  padding: 1.5rem;\n  border: 1px solid #ddd6fe;\n  border-radius: 1rem;\n  background: white;\n}\n.form-card input,\n.form-card select,\n.form-card textarea,\n.form-card button {\n  width: 100%;\n  padding: 0.75rem;\n  font: inherit;\n}\n.form-card button {\n  color: white;\n  background: #6c5ce7;\n  border: 0;\n}" }, observe: "Controls нэг visual system-тэй боловч label/group semantics хэвээр.", explain: "Grouped selector common presentation rule хэрэглэв." },
      { title: "Keyboard focus state verify хийх", instruction: "Mouse-аа орхиод Tab дар; :focus-visible rule нэмээд focus target бүрийг ажигла.", code: { title: "Visible focus", language: "css", code: ":focus-visible {\n  outline: 3px solid #f59e0b;\n  outline-offset: 3px;\n}" }, observe: "Interactive control бүр keyboard focus үед тод outline-тай.", explain: "CSS accessibility-г дэмжиж байна; outline: none хэрэглээгүй." },
      { title: "Specificity bug reproduce хийх", instruction: "Title-д class өгч дараах competing rules нэм; result-ийг урьдчилан таалга.", code: { title: "Intentional conflict", language: "css", code: ".card-title { color: green; }\narticle .card-title { color: red; }" }, observe: "Title red; .card-title green Styles panel-д crossed out.", explain: "Red доор бичигдсэндээ биш, selector specificity өндөр тул ялсан." },
      { title: "Conflict-ийг minimal source fix хийх", instruction: "DevTools-д red declaration disable хийж hypothesis test; unintended article rule-ийг source-оос remove хий.", observe: "Computed color green болж refresh-ийн дараа хадгалагдана.", explain: "!important/шинэ override биш root competing rule-г засав." },
      { title: "Box overflow-г тооцож inspect хийх", instruction: "320px wrapper дотор зориуд content-box card rule тавьж 352px-г тооцоод Computed box diagram нээ.", code: { title: "Intentional overflow", language: "css", code: ".demo-wrapper { width: 320px; }\n.demo-card {\n  box-sizing: content-box;\n  width: 300px;\n  padding: 24px;\n  border: 2px solid #6c5ce7;\n}" }, observe: "Outer width 352px болж 320px wrapper-ээс хална.", explain: "300 + 48 + 4; symptom цифртэй root cause боллоо." },
      { title: "Sizing fix, regression, diff", instruction: "content-box override-ийг border-box болгоод two viewport, focus, title color шалга; Git diff унш.", code: { title: "Final evidence", language: "bash", code: "git diff -- form.html styles.css" }, observe: "Card outer 300px, overflow алга; бусад acceptance хэвээр.", explain: "Нэг fix хийсний дараа unrelated behavior эвдээгүйг regression-аар батлав." },
    ],
    expectedOutput: [
      "styles.css Network/Styles evidence-тэй load болсон.",
      "Page readable constrained layout, form reusable class styles-тай.",
      "Keyboard focus бүх interactive control дээр харагдана.",
      "Specificity conflict winner/loser exact selector-аар тайлбарлагдсан.",
      "300px card content-box үед 352px, border-box fix-ийн дараа outer 300px гэж хэмжигдсэн.",
      "Git diff зөвхөн intended HTML class/link болон CSS rules агуулна.",
    ],
    recovery: [
      "CSS харагдахгүй: link rel/href, relative path, Save, Network response, Styles source-г энэ дарааллаар шалга.",
      "Rule Styles-д алга: зөв element select хийсэн, selector match, braces/syntax valid эсэхийг шалга.",
      "Expected color өөр: inline style, browser extension, өмнөх rule байгаа эсэхийг Styles cascade-аар унш.",
      "Overflow reproduce болохгүй: global border-box rule intentional demo-г дарсан эсэхийг шалга; .demo-card дээр content-box explicit тавь.",
      "DevTools edit refresh-д алга: expected; source styles.css-д patch хадгалаад дахин refresh хий.",
    ],
  },
  guidedPractice: {
    title: "Broken profile card: хоёр symptom, хоёр root cause",
    duration: "16 минут",
    goal:
      "Хос бүр title color conflict болон horizontal overflow-ийг тааж overwrite хийхгүй, Styles/Computed evidence-ээр тус тус оношлоод хамгийн жижиг source fix хийнэ.",
    starterCode: [
      { title: "index.html", language: "html", code: "<div class=\"wrapper\">\n  <article class=\"card\">\n    <h2 class=\"card-title\">Frontend суралцагч</h2>\n    <p>Semantic HTML, accessible forms, CSS сурч байна.</p>\n    <a href=\"#progress\">Ахиц харах</a>\n  </article>\n</div>" },
      { title: "styles.css — зориудын хоёр bug", language: "css", code: ".wrapper {\n  width: 320px;\n  border: 1px dashed #94a3b8;\n}\n.card {\n  width: 300px;\n  padding: 24px;\n  border: 2px solid #6c5ce7;\n}\n.card-title { color: green; }\narticle .card-title { color: red; }" },
    ],
    instructions: [
      "Driver browser evidence ажиллуулж, Navigator observed/expected-ийг хоёр тусдаа мөрөөр бичнэ.",
      "Title element select хийж Styles-д match болсон rule, crossed-out rule, source selector-уудыг тэмдэглэ.",
      "Winner-ийг specificity/source-order language-аар тайлбарла; red/green гэж дангаар бүү тайлбарла.",
      "Card select хийж content/padding/border values-ийг Computed box diagram-аас бич.",
      "Outer width-ийг гараар тооцоод wrapper width-тэй харьцуул.",
      "DevTools-д нэг declaration toggle/edit хийж hypothesis бүрийг түр test хий.",
      "Source-д symptom бүрт нэг minimal fix хий; Save/Refresh дараа evidence-ээ дахин ав.",
      "320px болон илүү нарийн viewport, link focus, text visibility гэсэн regression шалгаад git diff унш.",
    ],
    constraints: [
      "!important, inline style, JavaScript, overflow: hidden ашиглахгүй.",
      "HTML semantic elements/content-ийг rewrite хийхгүй.",
      "Wrapper/card width-ийг random number-аар олон дахин сольж таахгүй.",
      "Нэг test хийхээс өмнө хоёр root cause-д зэрэг олон change хийхгүй.",
      "Final decision бүр Styles эсвэл Computed evidence-тэй байна.",
      "AI-г initial diagnosis үед ашиглахгүй.",
    ],
    hints: [
      "Source order зөвхөн specificity тэнцсэн үед tie breaker.",
      "Default box-sizing content-box үед width padding/border-ийг агуулахгүй.",
      "Styles panel-д crossed-out declaration loser, Computed-д final value харагдана.",
      "300 + 24 + 24 + 2 + 2 гэсэн тооцоог бич.",
    ],
    expectedResult: [
      "Title intended green болж, competing unintended higher-specificity rule арилсан эсвэл selector intent-тэйгөөр засагдсан.",
      "Card border-box sizing ашигласнаар declared 300px outer width-тэй болж 320px wrapper-д багтсан.",
      "DevTools evidence log before/after computed color болон box width агуулсан.",
      "Link keyboard focus хэвийн, text/structure өөрчлөгдөөгүй.",
      "Git diff-д !important, inline style, hidden overflow, unrelated rewrite байхгүй.",
    ],
    solutionCode: [
      { title: "Боломжит minimal CSS repair", language: "css", code: ".wrapper {\n  width: 320px;\n  border: 1px dashed #94a3b8;\n}\n.card {\n  box-sizing: border-box;\n  width: 300px;\n  padding: 24px;\n  border: 2px solid #6c5ce7;\n}\n.card-title { color: green; }\n\n/* Unintended article .card-title rule removed. */" },
    ],
    stretchTask:
      "Card-ийг width: 100%; max-width: 300px болгож 280px ба 600px parent дээр шалга. Computed outer width бүрийг тэмдэглэж, border-box яагаад хоёр нөхцөлд хэрэгтэйг тайлбарла.",
    debriefQuestions: [
      { question: "Хоёр bug яагаад ижил ‘CSS ажиллахгүй’ гэсэн өгүүлбэрээр тайлбарлагдаж болохгүй вэ?", answer: "Color нь cascade/specificity root cause; overflow нь sizing arithmetic root cause. Evidence ба fix өөр." },
      { question: "Яагаад overflow:hidden зөв fix биш вэ?", answer: "Symptom-ийг нууж content/focus clipping үүсгэж болно; outer size root cause хэвээр." },
    ],
  },
  aiLab: {
    title: "AI-ийн CSS оношийг runtime evidence-ээр аудитлах",
    duration: "7 минут",
    goal:
      "Сурагч өөрийн initial diagnosis-ийн дараа AI-аас hypotheses авч, claim бүрийг matching rule, computed value, measurement, one-test result-аар accept/reject/unknown болгоно.",
    prompt: `Та CSS debugging reviewer. Доорх evidence болон source-ийг ашигла.

Observed:
- card title green байх ёстой ч red
- 300px card 320px wrapper-ээс халж байна

HTML:
[HTML]

CSS:
[CSS]

DevTools evidence:
[MATCHED RULES, COMPUTED COLOR, BOX VALUES]

Хариултаа hypothesis хүснэгтээр өг:
1. exact root cause
2. evidence дэмжиж/үгүйсгэж буй зүйл
3. DevTools-д хийх НЭГ reversible test
4. хамгийн жижиг source fix
5. regression checks

Constraints:
- !important, inline style, overflow:hidden бүү санал болго.
- Test ажилласан гэж зохиохгүй.
- HTML semantics/content бүү rewrite хий.
- Evidence хүрэхгүй бол uncertain гэж хэл.`,
    steps: [
      { title: "Baseline diagnosis хадгалах", instruction: "AI-аас өмнөх own root-cause/evidence хүснэгтээ screenshot/note хий.", observe: "Хоёр symptom тусдаа hypothesis-тэй.", explain: "AI answer-ийг blind replacement болгохгүй." },
      { title: "Evidence-тэй prompt илгээх", instruction: "HTML/CSS болон exact Styles/Computed values өг; personal data/secret бүү оруул.", observe: "AI exact selector/arithmetic ашигласан эсэх.", explain: "Context quality claim quality-д нөлөөлнө." },
      { title: "Нэг AI hypothesis test хийх", instruction: "DevTools-д зөвхөн санал болгосон нэг declaration disable/edit хий.", observe: "Expected symptom өөрчлөгдсөн эсэхийг өөрөө тэмдэглэ.", explain: "Runtime test AI prediction-ээс тусдаа evidence." },
      { title: "Source ба regression review", instruction: "Justified minimal fix source-д хийж refresh, narrow width, focus, title шалгаад diff унш.", expected: "Нэг accept/reject decision evidence-тэй, no unrelated changes." },
    ],
    verificationTable: [
      { claim: "Specificity title color-ийг шийдсэн", evidence: "Styles matched/crossed-out selectors + Computed color", pass: "Winning exact selector болон loser reason тодорхой" },
      { claim: "Card outer width 352px", evidence: "300 + 48 + 4 arithmetic + Computed box", pass: "Calculated ба measured values таарсан" },
      { claim: "Proposed fix root cause зассан", evidence: "DevTools one-change test + refresh after source patch", pass: "Target symptom fixed without masking" },
      { claim: "Regression байхгүй", evidence: "Two widths + keyboard focus + Git diff", pass: "Layout/content/focus intact, scope minimal" },
    ],
    teacherNotes: [
      "AI specificity-г source order гэж андуурвал exact selectors-ийг харьцуулж rejection бичүүл.",
      "AI global universal border-box санал болговол энэ isolated task-д local fix эсвэл project convention хоёрын tradeoff-ийг нэрлүүл; хоёул боломжит ч scope justification хэрэгтэй.",
      "AI result зөв байсан ч evidenceгүй accept бол rubric-д pass биш.",
    ],
  },
  checkpoint: {
    duration: "6 минут",
    instructions:
      "Эхний 3 асуултад DevTools-гүй хариул. Application асуултад exact panel/evidence болон minimal action хоёрыг нэрлэ.",
    questions: [
      { type: "concept", question: "CSS rule-ийн selector, property, value ямар үүрэгтэй вэ?", answer: "Selector target elements; property өөрчлөх шинж; value тухайн шинжийн утга." },
      { type: "concept", question: "Ижил property-ийн хоёр rule байвал хамгийн доорх нь үргэлж ялах уу?", answer: "Үгүй. Match/priority/specificity эхэлж; тэнцвэл source order." },
      { type: "concept", question: "width:300px, padding:24px хоёр тал, border:2px хоёр тал content-box outer width?", answer: "352px." },
      { type: "application", question: "Rule Styles panel-д огт харагдахгүй бол ямар гурван ангилал шалгах вэ?", answer: "Stylesheet load/path, selector match, CSS parse/syntax. Rubric: random value change биш." },
      { type: "application", question: "DevTools edit problem зассан. Дараагийн алхам?", answer: "Source-д minimal fix, Save/Refresh, regression, Git diff." },
      { type: "application", question: "Title red болсон root cause-ийг evidence-тэй нэг өгүүлбэрээр хэл.", answer: "article .card-title selector .card-title-оос specificity өндөр тул red declaration ялж, green Styles-д crossed out/Computed red болсон." },
    ],
  },
  wrapUp: {
    summary: [
      "HTML meaning/structure, CSS presentation rule хариуцна.",
      "External stylesheet link → parsed rules → selector match → computed style урсгалтай.",
      "Element/class/attribute/pseudo-class selector target ба state-ийг өөр өөрөөр сонгоно.",
      "Cascade match, priority, specificity, source order-оор winner сонгоно; зарим value inherited байна.",
      "Box model content, padding, border, margin; content-box outer size-д padding/border нэмэгдэнэ.",
      "border-box declared width дотор padding/border-ийг багтаана.",
      "DevTools Styles matching/losing source, Computed final value/measurement харуулна.",
      "Temporary test-ийг source minimal fix, refresh, regression, Git diff-ээр дуусгана.",
    ],
    abilities: [
      "External stylesheet зөв холбож verify хийх",
      "Reusable selector/rule уншиж бичих",
      "Cascade winner-ийг тайлбарлах",
      "Box outer size тооцох",
      "DevTools evidence-ээр CSS bug оношлох",
    ],
    beforeNextLesson: [
      "Lesson 06 form-оо styles.css ашиглан readable болго; HTML semantics/labels-ийг өөрчлөхгүй",
      "Нэг selector conflict болон нэг box measurement-ийн before/after evidence note хадгал",
      "Keyboard focus, 320px/desktop width, Git diff-ээ шалга",
      "‘Style accessible form with CSS’ message-ээр intended files-ээ commit хий",
    ],
    finalModel:
      "HTML element → stylesheet loaded → selector match → cascade winner → computed value/box → render → inspect → one test → source fix → regression",
    exitTicket: [
      { question: "CSS ажиллахгүй мэт харагдвал эхний evidence хаанаас авах вэ?", answer: "Exact element-ийн Styles panel: file loaded, selector matched, declaration won/lost эсэх." },
      { question: "content-box ба border-box гол ялгаа?", answer: "content-box width зөвхөн content; border-box declared width padding/border-ийг багтаана." },
      { question: "DevTools temporary edit-ийн дараа юу хийх вэ?", answer: "Source-д minimal fix → refresh → regression → diff." },
    ],
    nextLesson: {
      title: "Lesson 08 — Prompt Engineering",
      connection:
        "Одоо сурагч CSS bug-ийг observed state, exact source, computed evidence, hypothesis, test, acceptance-аар ярьж чадна. Дараагийн хичээлээр энэ инженерийн мэдээллийг AI-д testable specification болгон өгч, AI suggestion-ийг evidence loop-оор удирдана.",
    },
    teacherClose:
      "“CSS-ийг олон rule нэмж ялдаггүй. Ямар rule match хийж, аль нь яагаад ялж, ямар box бодитоор зурагдсаныг нотолж байж засна.” гэж хаа.",
  },
};
