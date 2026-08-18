import type { ReferenceLesson } from "../types";

export const lesson06Reference: ReferenceLesson = {
  id: 6,
  durationMinutes: 120,
  teacherGoal:
    "Сурагч form-ийг input-үүдийн жагсаалт гэж бус, хэрэглэгчид ойлгомжтой асуулт асууж name/value data үүсгэдэг semantic interaction гэж ойлгоод JavaScript-гүй, label-тай, keyboard-аар бүрэн ашиглах form бүтээдэг болно.",
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
      "form action/method болон control name/value data model-ийг тайлбарлах.",
      "Visible label-ийг for/id-гаар control-той зөв холбож, placeholder-ээс ялгах.",
      "Text, email, date, textarea, select, radio, checkbox control-ийг answer type-аар сонгох.",
      "Radio/checkbox group-ийг fieldset/legend ашиглан ойлгомжтой бүлэглэх.",
      "Required/type native validation болон keyboard-only audit-аар form-оо verify хийх.",
    ],
    prerequisites: [
      "Lesson 05-ын document skeleton, semantic element, nesting, heading hierarchy",
      "Editor → Save → browser Refresh → Elements inspection workflow",
      "Lesson 03-ын Git diff/commit болон Lesson 04-ийн AI verification дүрэм",
    ],
    tools: [
      "VS Code эсвэл text editor",
      "Browser + DevTools Elements",
      "Physical keyboard — Tab, Shift+Tab, Space, Enter",
      "Git",
      "AI chat — зөвхөн accessibility audit хэсэгт",
    ],
    outcomes: [
      "JavaScript/backend-гүй accessible form.html бүтээнэ.",
      "Control бүрийн label, id, name, value-ийн үүргийг source дээр заана.",
      "Radio group ижил name, ялгаатай value, fieldset/legend-тэй байна.",
      "Empty required, invalid email, valid data гэсэн 3 native validation state туршина.",
      "Mouse ашиглалгүй бүх control-д хүрч, сонгож, submit оролдлого хийж нотолно.",
    ],
    preparation: [
      "Lesson 05-ын зөв skeleton-оос lesson-06-form/form.html үүсгэ; profile content-ийг overwrite хийхгүй.",
      "Demo form-д бодит personal data биш anu@example.com зэрэг dummy value ашигла.",
      "Browser default validation message хэл/version-оор өөр байж болохыг хүлээн зөвшөөр; exact wording цээжлүүлэхгүй.",
      "Mouse-аа зориуд хажуу тийш тавих keyboard audit үеийг projector дээр урьдчилан турш.",
      "Form submit query URL-д data харагдаж болох тул password, real phone/email ашиглахгүй.",
      "CSS-гүй default focus outline харагдах browser/theme сонго; focus харагдахгүй тохиолдлыг note хийх fallback бэлд.",
    ],
    timeline: [
      { start: "00:00", duration: "7 мин", title: "Hook — form ямар асуулт асуух вэ?", teacherAction: "Сургалтын хүсэлтэд үнэхээр хэрэгтэй/хэрэггүй data-г ангилуулж, code-оос өмнө form purpose ба privacy-г гарга." },
      { start: "00:07", duration: "13 мин", title: "Form data model", teacherAction: "form/action/method болон name=value pair-ийг request mental model-той холбо." },
      { start: "00:20", duration: "13 мин", title: "Label, id, name, placeholder", teacherAction: "Label дээр click хийх demo-гоор for/id холбоо, name data key, placeholder hint болохыг ялгуул." },
      { start: "00:33", duration: "13 мин", title: "Control сонголт", teacherAction: "Answer type бүрт text/email/date/textarea/select/radio/checkbox-ийн аль нь тохирохыг decision exercise хий." },
      { start: "00:46", duration: "12 мин", title: "Grouping ба keyboard", teacherAction: "Radio name group, fieldset/legend, native control-ийн keyboard behavior-ийг source order-той холбо." },
      { start: "00:58", duration: "8 мин", title: "Native validation", teacherAction: "required/type/minlength-ийн боломж ба client validation security биш гэсэн хязгаарыг тайлбарла." },
      { start: "01:06", duration: "7 мин", title: "Завсарлага", teacherAction: "Demo form, browser, keyboard focus, Git state-ээ шалгах зуур сурагчдыг амраа." },
      { start: "01:13", duration: "19 мин", title: "Live demo — accessible registration", teacherAction: "Text/email/select/radio/textarea/checkbox-ийг incremental build хийж label click, query data, validation, keyboard-аар батал." },
      { start: "01:32", duration: "16 мин", title: "Guided practice — form repair", teacherAction: "Хос бүр зориудын label/name/grouping алдаатай form-ийг checklist болон keyboard evidence-ээр засна." },
      { start: "01:48", duration: "7 мин", title: "AI accessibility audit", teacherAction: "AI suggestion бүрийг exact element болон browser keyboard behavior-тэй тулгуул." },
      { start: "01:55", duration: "5 мин", title: "Checkpoint ба wrap-up", teacherAction: "Data, label, group, validation асуултаар шалгаад CSS styling руу холбо." },
    ],
  },
  concepts: [
    {
      id: "form-data-model",
      number: "01",
      title: "Form асуултуудыг name=value өгөгдөл болгон submit хийдэг",
      eyebrow: "form · action · method · data",
      duration: "10–12 минут",
      whyItMatters:
        "Frontend form зөв харагдахаас гадна backend-ийн ойлгох key/value data үүсгэх ёстой. name байхгүй, method буруу, password GET query-д орсон зэрэг алдаа data loss болон privacy risk үүсгэнэ.",
      explanation: [
        "form element холбоотой control-ууд болон submit үйлдлийг нэгтгэнэ. action submit data очих URL, method HTTP аргыг заана. Lesson 01-ийн request mental model энд form interaction болж эргэж ирнэ.",
        "GET form data-г URL query-д ихэвчлэн харуулж, share/bookmark боломжтой retrieval/filter төрлийн non-sensitive үйлдэлд тохирч болно. POST data-г request body-д илгээдэг ч энэ нь автоматаар encrypted/security гэсэн үг биш; HTTPS, backend validation/auth тусдаа.",
        "Control-ийн name submit data-ийн key, typed/selected content value болно. id нь document дотор control-ийг label/fragment/script-т таних unique identifier; name болон id ижил байж болох ч үүрэг нь өөр.",
        "Disabled эсвэл name-гүй control зэрэг зарим control form data-д оролцохгүй. Энэ beginner lesson-д successful controls-ийн бүх дүрэм цээжлэхгүй; DevTools/URL/request evidence-ээр бодит data-г шалгана.",
      ],
      mentalModel: {
        title: "Нэртэй асуултын хуудас",
        explanation:
          "name бол асуултын machine key, value бол хэрэглэгчийн хариулт. Submit хийхэд ‘email=anu@example.com’ pair болж явна. Analogy-ийн хязгаар: encoding, repeated names, file upload зэрэг data format илүү нарийн дүрэмтэй.",
      },
      example: {
        title: "Control-оос query pair хүртэл",
        explanation:
          "Input-д dummy email оруулаад GET submit хийвэл URL query-д name/value pair харагдаж болно.",
        code: "<form action=\"\" method=\"get\">\n  <label for=\"email\">И-мэйл</label>\n  <input id=\"email\" name=\"email\" type=\"email\" />\n  <button type=\"submit\">Илгээх</button>\n</form>\n\n?email=anu%40example.com",
        language: "html",
      },
      diagram: {
        label: "Form control-оос request data хүртэл",
        nodes: [
          { title: "LABEL", detail: "Human question" },
          { title: "CONTROL", detail: "Typed/selected value" },
          { title: "name=value", detail: "Machine data" },
          { title: "SUBMIT", detail: "GET/POST request" },
        ],
      },
      questions: [
        { question: "Input харагдаж, бөглөгдөж байхад name байхгүй бол юу болох вэ?", answer: "Тухайн control-ийн data submit-д орохгүй байж болно." },
        { question: "POST ашиглавал data автоматаар аюулгүй юу?", answer: "Үгүй. HTTPS, backend validation, auth, storage policy тусдаа; method ганцаараа security guarantee биш." },
      ],
      misconceptions: [
        { claim: "id бол backend руу явдаг data key.", correction: "Submit key нь name; id нь document-level identity ба label association-д хэрэглэгдэнэ." },
        { claim: "GET form-д password ашиглаж болно, query дараа алга болно.", correction: "Query history/log/share-д үлдэж болно; sensitive data-г GET URL-д бүү байрлуул." },
      ],
      teachingNotes: [
        "Backend байхгүй ч action='' GET submit-ээр URL query data-г харах demo хийнэ; dummy data ашигла.",
        "HTTP method-ийг Lesson 01-тэй холбо, гэхдээ multipart encoding/backend implementation руу орохгүй.",
      ],
      takeaway: "Visible question label-аар, machine data name=value pair-аар илэрч, form method/action-аар request болно.",
    },
    {
      id: "labels",
      number: "02",
      title: "Visible label control-ийг нэрлэж, for/id холбоо click ба accessibility-г өргөжүүлнэ",
      eyebrow: "label ↔ id · name ≠ id",
      duration: "10–12 минут",
      whyItMatters:
        "Label-гүй form-ийг screen reader, voice input, memory/cognitive limitation, small touch target бүхий хэрэглэгч ашиглахад хэцүү. Placeholder алга болдог тул асуултын тогтвортой нэр болж чаддаггүй.",
      explanation: [
        "Explicit association: label-ийн for value control-ийн unique id-тай яг таарна. Label text дээр click хийхэд control focus/activate болох нь холбоог хурдан шалгах browser evidence.",
        "Implicit association: control label element-ийн дотор nested байж болно. Checkbox/radio-д энэ pattern уншихад хялбар. Гэхдээ id/for consistent explicit pattern нь complex layout болон audit-д тодорхой байдаг.",
        "Placeholder input доторх түр hint/example. Хэрэглэгч бичихэд алга болж, contrast нь сул байж болно. ‘name@example.com’ placeholder байж болно, харин ‘И-мэйл’ visible label хэвээр үлдэнэ.",
        "Required state-ийг зөвхөн * color-аар бус visible instruction болон required attribute-аар өгнө. Label wording concise, specific байна; нэг label олон unrelated control-д нэр өгөхгүй.",
      ],
      mentalModel: {
        title: "Шүүгээний гаднах тогтвортой шошго",
        explanation:
          "Label бол шүүгээ хаалттай/дүүрсэн үед ч юу байгааг хэлдэг тогтвортой шошго; placeholder бол дотор түр тавьсан жишээ note. Analogy-ийн хязгаар: label browser accessibility tree болон click target behavior-тэй programmatic холбоо үүсгэнэ.",
      },
      example: {
        title: "Explicit label association",
        explanation:
          "Label дээр click хийхэд email control focus авна. for/id exact mismatch бол visual ойр байсан ч association тасарна.",
        code: "<label for=\"email\">И-мэйл *</label>\n<input\n  id=\"email\"\n  name=\"email\"\n  type=\"email\"\n  placeholder=\"anu@example.com\"\n  autocomplete=\"email\"\n  required\n/>",
        language: "html",
      },
      diagram: {
        label: "Human label ба machine холбоо",
        nodes: [
          { title: "LABEL TEXT", detail: "И-мэйл" },
          { title: "for=email", detail: "Reference" },
          { title: "id=email", detail: "Unique control" },
          { title: "FOCUS", detail: "Click/AT association" },
        ],
      },
      questions: [
        { question: "Placeholder label-ийг орлож болох уу?", answer: "Үгүй. Placeholder түр hint; visible label тогтвортой нэр." },
        { question: "Label association-г mouse ашиглан яаж хурдан шалгах вэ?", answer: "Label text дээр click хийхэд corresponding control focus/activate болохыг харна." },
      ],
      misconceptions: [
        { claim: "Control-ийн хажууд text байхад label element хэрэггүй.", correction: "Visual proximity programmatic association үүсгэхгүй; label element ба for/id хэрэгтэй." },
        { claim: "for утга input-ийн name-тай таарна.", correction: "for нь id-тай таарна; name submit key." },
      ],
      teachingNotes: [
        "Нэг зориуд mismatch id хийж label click ажиллахгүйг харуулаад Elements source-оор шалтгааныг ол.",
        "Accessible name computation-ийн бүх дүрэм рүү орохгүй; visible label first default тогтоо.",
      ],
      takeaway: "Control бүр visible label-тай; label for нь unique control id-тай холбоотой, name бол тусдаа submit key.",
    },
    {
      id: "control-selection",
      number: "03",
      title: "Хариултын төрөлд тохирсон native control сонгоно",
      eyebrow: "Text · email · date · select · textarea",
      duration: "10–12 минут",
      whyItMatters:
        "Зөв input type болон native control нь mobile keyboard, autocomplete, validation, keyboard interaction зэрэг built-in behavior өгдөг. Бүх зүйлийг text input эсвэл clickable div болгох нь хэрэглэгчийн ачаалал, implementation risk нэмнэ.",
      explanation: [
        "Нэг мөр short free text-д text, email address-д email, date-д date, урт multi-line answer-д textarea тохирно. Input type нь data semantic hint болон native UI/validation өгч болох ч backend data type биш.",
        "select нь known option list-ээс нэг сонголт хийхэд, radio нь цөөн сонголтыг зэрэг харж яг нэгийг сонгоход, checkbox бие даасан yes/no эсвэл олон сонголтод тохирно.",
        "button default type form дотор submit байж болох тул intent-ээ type=submit эсвэл type=button гэж explicit бичих нь ойлгомжтой. Энэ lesson-д real backend action байхгүй ч submit behavior-ийг туршина.",
        "autocomplete token browser-д хэрэглэгчийн өмнө хадгалсан name/email зэрэг data-г зөв field-д санал болгоход тусална. Хувийн data collection-ээ багасгах form design мөн accessibility/privacy-ийн хэсэг.",
      ],
      mentalModel: {
        title: "Асуултад тохирсон хариултын хэрэгсэл",
        explanation:
          "Essay-д textarea, нэг сонголтын асуултад radio, known list-д select өгдөг шалгалтын хуудас шиг. Analogy-ийн хязгаар: digital native controls device/browser-оор өөр UI үзүүлж, data/keyboard behavior агуулна.",
      },
      example: {
        title: "Answer type → control",
        explanation:
          "Control-ийг visual style-аар бус user answer-ийн shape болон choices-оор сонго.",
        code: "Нэр             → input type=text\nИ-мэйл          → input type=email\nЭхлэх огноо     → input type=date\nУрт зорилго     → textarea\nТүвшин          → select\nНэг сурах хэлбэр → radio group\nЗөвшөөрөл       → checkbox",
        language: "text",
      },
      diagram: {
        label: "Answer shape-аас control руу",
        nodes: [
          { title: "QUESTION", detail: "Ямар data?" },
          { title: "ANSWER SHAPE", detail: "Text / choice / boolean" },
          { title: "NATIVE CONTROL", detail: "Input/select/textarea" },
          { title: "BUILT-IN", detail: "Keyboard + validation" },
        ],
      },
      questions: [
        { question: "Урт learning goal-д input type=text эсвэл textarea аль нь дээр вэ?", answer: "Textarea — multi-line урт content-д зориулагдсан." },
        { question: "5 жижиг сонголтоос яг нэгийг зэрэг харуулах бол radio эсвэл checkbox?", answer: "Radio group — яг нэг; checkbox independent/multiple choice." },
      ],
      misconceptions: [
        { claim: "type=email backend дээр email үнэн эзэмшигч гэдгийг батална.", correction: "Browser basic format шалгаж болно; ownership/verification/backend validation тусдаа." },
        { claim: "Div дээр click event нэмэх нь button-тай адил.", correction: "Native button focus, keyboard, role, submit behavior өгнө; div-д бүгдийг гараар зөв бүтээх шаардлагатай." },
      ],
      teachingNotes: [
        "Date input UI browser/OS-оор өөр харагдахыг acceptance issue гэж бүү үз; semantic type/behavior чухал.",
        "Select vs radio decision-д option count, comparison visibility, mobile behavior зэрэг tradeoff нэрлэж болно.",
      ],
      takeaway: "User-ийн answer shape-д тохирсон native control сонгох нь behavior/accessibility-г үнэгүй авчирна.",
    },
    {
      id: "groups-and-keyboard",
      number: "04",
      title: "Related choices нэг group question болон логик keyboard order-той байна",
      eyebrow: "fieldset · legend · radio name",
      duration: "10–12 минут",
      whyItMatters:
        "Radio бүр өөр label-тай байсан ч ‘юуны сонголт вэ?’ гэсэн group question дутвал context алдагдана. Keyboard source order, native group behavior зөв байх нь mouse ашиглах боломжгүй хэрэглэгчийн үндсэн зам.",
      explanation: [
        "fieldset related form controls-ийг semantic group болгоно; legend group-ийн visible/programmatic question. ‘Сурах хэлбэр’ legend-ийн дор ‘Бие даан’, ‘Хосоор’ radio label-ууд орно.",
        "Radio buttons ижил name-тэй байснаар нэг group болж яг нэг value сонгогдоно. id бүр unique, value бүр backend/data-д ойлгомжтой ялгаатай байна.",
        "Tab interactive group/control-уудаар source order-ын дагуу явна; Shift+Tab буцна. Radio group-ийн дотор arrow key/Space behavior browser/platform-аас бага зэрэг ялгаж болох ч native control default interaction өгнө.",
        "Positive tabindex ашиглан visual/source order-ийг хүчээр өөрчлөх нь maintenance, screen reader mismatch үүсгэнэ. Logical HTML order-оо эхэлж зөв болгоно.",
      ],
      mentalModel: {
        title: "Нэг асуулт, олон сонголт",
        explanation:
          "Legend бол шалгалтын асуулт, radio label бүр answer option. Ижил name нь ‘энэ option-ууд нэг answer slot-д өрсөлдөнө’ гэж machine-д хэлнэ.",
      },
      example: {
        title: "Accessible radio group",
        explanation:
          "Required-ийг group-ийн нэг radio дээр тавихад group-ээс нэг сонголт шаардана; exact validation behavior browser-оор шалгана.",
        code: "<fieldset>\n  <legend>Сурах хэлбэр *</legend>\n  <label>\n    <input name=\"studyMode\" type=\"radio\" value=\"self\" required />\n    Бие даан\n  </label>\n  <label>\n    <input name=\"studyMode\" type=\"radio\" value=\"pair\" />\n    Хосоор\n  </label>\n</fieldset>",
        language: "html",
      },
      diagram: {
        label: "Radio group-ийн data model",
        nodes: [
          { title: "LEGEND", detail: "Group question" },
          { title: "LABELS", detail: "Visible options" },
          { title: "SAME name", detail: "One group" },
          { title: "ONE value", detail: "Submitted answer" },
        ],
      },
      questions: [
        { question: "Radio group-ийн бүх input ижил id-тай байх уу?", answer: "Үгүй. id unique; name ижил; value ялгаатай." },
        { question: "Legend ямар асуултад хариулдаг вэ?", answer: "Сонголтууд бүхэлдээ ямар group question-д хамаарч байгааг нэрлэнэ." },
      ],
      misconceptions: [
        { claim: "Radio-г нэг group болгохын тулд ижил class өгнө.", correction: "Selection/data grouping-ийг ижил name үүсгэнэ; class styling hook." },
        { claim: "tabindex=1,2,3 тавибал accessibility сайжирна.", correction: "Positive tabindex order-г artificial болгож болзошгүй; logical source order болон native focus default ашигла." },
      ],
      teachingNotes: [
        "Keyboard demo-д focus indicator-ийг projector дээр заа; mouse cursor-аар заахгүйгээр одоогийн focus-ийг сурагчдаар хэлүүл.",
        "Screen reader demo хийх туршлага/цаг байхгүй бол fake хийхгүй; label/group semantics болон keyboard evidence-д төвлөр.",
      ],
      takeaway: "Related choices fieldset/legend-тэй, radio group ижил name-тай, keyboard order logical source-той байна.",
    },
    {
      id: "validation",
      number: "05",
      title: "Native validation usability-ийн эхний давхарга, security-ийн төгсгөл биш",
      eyebrow: "required · type · constraints",
      duration: "7–9 минут",
      whyItMatters:
        "Browser built-in validation хурдан feedback өгч, бага code-оор common error бууруулна. Гэхдээ client-side rule-ийг тойрч болох тул backend trust boundary гэж үзвэл unsafe system үүснэ.",
      explanation: [
        "required empty value-г submit хийхээс зогсооно. type=email basic email syntax, minlength/maxlength text length, min/max numeric/date range-д тусалж болно. Constraint-ээ real requirement-тэй нийцүүлнэ.",
        "Submit хийхэд invalid control руу browser focus шилжүүлж message үзүүлж болно. Message exact wording, UI language, styling browser/OS-оос хамаарна; behavior болон target control-ийг ажиглана.",
        "Native validation client-side convenience. Request-ийг өөр tool-оор илгээх, HTML attribute өөрчлөх боломжтой тул server бүр data type, required/business/security rule-ээ дахин validate хийнэ.",
        "Error-ийг зөвхөн red color-аар илэрхийлэхгүй. Custom error lesson дараа орно; одоохондоо clear label/instruction, appropriate constraint, browser feedback ашиглана.",
      ],
      mentalModel: {
        title: "Хаалганы эхний шалгалт",
        explanation:
          "Native validation үүдэнд form-ийг хурдан шалгах receptionist шиг; backend validation secure system-ийн дотор дахин шалгана. Үүдний шалгалт дангаараа security guard биш.",
      },
      example: {
        title: "Three validation states",
        explanation:
          "Empty required → invalid email → valid dummy email гэсэн дарааллаар submit оролдож browser response-ийг тэмдэглэ.",
        code: "<label for=\"email\">И-мэйл *</label>\n<input id=\"email\" name=\"email\" type=\"email\" required />\n\n1. empty\n2. not-an-email\n3. anu@example.com",
        language: "html",
      },
      diagram: {
        label: "Validation-ийн хоёр trust boundary",
        nodes: [
          { title: "USER INPUT", detail: "Untrusted data" },
          { title: "BROWSER", detail: "Native feedback" },
          { title: "REQUEST", detail: "Can be modified" },
          { title: "SERVER", detail: "Must validate again" },
        ],
      },
      questions: [
        { question: "required attribute backend validation-ийг орлох уу?", answer: "Үгүй. Client rule тойрч болох тул server дахин validate хийнэ." },
        { question: "Browser validation message бүгдэд яг ижил харагдах уу?", answer: "Үгүй. Browser, OS, language-аас хамаарч болно." },
      ],
      misconceptions: [
        { claim: "type=email байвал email бодитоор байдаг нь батлагдана.", correction: "Зөвхөн basic format; ownership/availability verification биш." },
        { claim: "Native validation байгаа тул user instruction хэрэггүй.", correction: "Label, required note, expected format зэрэг proactive instruction хэрэгтэй." },
      ],
      teachingNotes: [
        "Submit query demo-гийн дараа URL-аас dummy data-г clear хий; real student data бүү project хий.",
        "novalidate/custom validation-ийг энэ lesson-д ашиглахгүй; built-in behavior-ийг эхэлж ойлгуул.",
      ],
      takeaway: "Native constraints immediate feedback өгнө; browser evidence-ээр шалга, server validation/security-г орлуулахгүй.",
    },
  ],
  liveDemo: {
    title: "Label-тай control-оос keyboard submit хүртэл",
    duration: "19 минут",
    goal:
      "Багш semantic skeleton дээр form control-уудыг нэг нэгээр нэмээд label association, name/value data, grouping, native validation, keyboard interaction-ийг source болон browser evidence-ээр үзүүлнэ.",
    setup: [
      "lesson-06-form/form.html зөв workspace-д нээж, Lesson 05 skeleton болон main/h1 бэлд.",
      "Browser page, address bar, DevTools Elements-ийг projector дээр харагдах layout-д байрлуул.",
      "Dummy input values ашигла; GET query demo-д personal information бүү оруул.",
      "Mouse болон keyboard mode-ийг зориуд сольж харуулахын тулд focus outline харагдаж буйг урьдчилан шалга.",
    ],
    steps: [
      { title: "Form purpose ба request config бичих", instruction: "Main дотор h1, instruction, form action='' method='get' нэмээд backend байхгүй хязгаарыг хэл.", code: { title: "Form shell", language: "html", code: "<h1>Хичээлд бүртгүүлэх</h1>\n<p>* тэмдэгтэй талбарыг заавал бөглөнө.</p>\n<form action=\"\" method=\"get\">\n  <!-- controls -->\n  <button type=\"submit\">Бүртгүүлэх</button>\n</form>" }, observe: "Submit button visible, data control хараахан байхгүй.", explain: "Action/method request config; энэ demo data хадгалах backend биш." },
      { title: "Name ба email explicit label-тай нэмэх", instruction: "Text/email control бүрт label for, unique id, name, type, autocomplete, required өг.", code: { title: "Labeled text controls", language: "html", code: "<p>\n  <label for=\"full-name\">Овог нэр *</label>\n  <input id=\"full-name\" name=\"fullName\" type=\"text\" autocomplete=\"name\" required />\n</p>\n<p>\n  <label for=\"email\">И-мэйл *</label>\n  <input id=\"email\" name=\"email\" type=\"email\" autocomplete=\"email\" required />\n</p>" }, observe: "Label click corresponding input focus авна.", explain: "for→id association, name submit key, type behavior." },
      { title: "Select болон option values нэмэх", instruction: "Experience select-д empty prompt option болон machine-readable values өг.", code: { title: "Required select", language: "html", code: "<label for=\"experience\">Туршлагын түвшин *</label>\n<select id=\"experience\" name=\"experience\" required>\n  <option value=\"\">Сонгоно уу</option>\n  <option value=\"new\">Анхлан суралцагч</option>\n  <option value=\"some\">Бага зэрэг туршлагатай</option>\n</select>" }, observe: "Initial empty value required state хангахгүй.", explain: "Visible option text болон submitted value ялгаатай байж болно." },
      { title: "Radio group-ийг fieldset/legend-тэй нэмэх", instruction: "Ижил name, ялгаатай value бүхий хоёр radio сонголт нэм.", code: { title: "Study mode group", language: "html", code: "<fieldset>\n  <legend>Сурах хэлбэр *</legend>\n  <label><input name=\"studyMode\" type=\"radio\" value=\"self\" required /> Бие даан</label>\n  <label><input name=\"studyMode\" type=\"radio\" value=\"pair\" /> Хосоор</label>\n</fieldset>" }, observe: "Нэг radio сонгоход нөгөө нь unselect болно; label text click target өргөжүүлнэ.", explain: "Same name нэг data key/group; legend group question." },
      { title: "Textarea ба checkbox нэмэх", instruction: "Long goal-д textarea minlength, agreement-д nested label checkbox required нэм.", code: { title: "Long answer and agreement", language: "html", code: "<label for=\"goal\">12 долоо хоногийн зорилго *</label>\n<textarea id=\"goal\" name=\"goal\" rows=\"5\" minlength=\"20\" required></textarea>\n\n<label>\n  <input name=\"agreement\" type=\"checkbox\" required />\n  Би долоо хоног бүр дадлага хийхийг зөвшөөрч байна. *\n</label>" }, observe: "Textarea олон мөр; checkbox Space/click-аар toggle болно.", explain: "Control choice answer shape-тэй нийцэж байна." },
      { title: "Native validation-ийн гурван state турших", instruction: "Empty submit, invalid email, valid dummy data гэсэн дарааллаар оролд.", observe: "Browser invalid control руу focus шилжүүлж message харуулна; valid state-д GET navigation/query үүсэж болно.", explain: "Exact message биш constraint behavior-ийг evidence болго. Backend storage байхгүй." },
      { title: "Keyboard-only audit хийх", instruction: "Page refresh хийж mouse-аас гараа авч Tab/Shift+Tab, Space/arrow, Enter-ээр form-ийг ашигла.", observe: "Focus source order-оор control бүрт хүрч, group/checkbox/button keyboard-аар ажиллана.", explain: "Native controls built-in behavior өгч байна; focus харагдах ёстой." },
      { title: "Form data ба Git diff review хийх", instruction: "GET query дахь dummy name/value pair-ийг уншаад source git diff-ээ шалга.", code: { title: "Review form source", language: "bash", code: "git status\ngit diff -- form.html" }, observe: "Query key-үүд name attribute-тэй, diff intended form markup-тэй таарна.", explain: "Visual, interaction, submitted data, source change дөрвөн evidence." },
    ],
    expectedOutput: [
      "Control бүр visible label-тай бөгөөд label click focus/activate хийнэ.",
      "Text/email/select/textarea нь unique id болон meaningful name-тай байна.",
      "Radio group fieldset/legend, same name, distinct values-тай байна.",
      "Required/invalid email state submit-ийг зогсоож target control руу focus өгнө.",
      "Mouse-гүйгээр бүх control ашиглаж, dummy GET query name/value pair үүсгэнэ.",
      "Git diff зөвхөн intended form.html change харуулна.",
    ],
    recovery: [
      "Label click focus өгөхгүй: label for болон control id exact match, duplicate id байхгүйг шалга.",
      "Radio зэрэг сонгогдохгүй: name ижил, type=radio, disabled биш эсэхийг Elements-ээр шалга.",
      "Required ажиллахгүй: control form дотор, required зөв attribute, submit button type=submit, form novalidate-гүй эсэхийг шалга.",
      "Query-д field алга: control name байгаа, disabled биш, radio/checkbox selected эсэхийг шалга.",
      "Focus харагдахгүй: CSS reset байгаа эсэх, browser theme, keyboard interaction хийсэн эсэхийг тэмдэглэ; CSS fix Lesson 07-д орно.",
    ],
  },
  guidedPractice: {
    title: "Broken form accessibility repair",
    duration: "16 минут",
    goal:
      "Хос бүр label, name, input type, radio grouping, button semantic-ийн зориудын алдааг source болон keyboard evidence-ээр олж хамгийн бага HTML fix хийнэ.",
    starterCode: [
      { title: "Засах form snippet", language: "html", code: "<form action=\"\" method=\"get\">\n  <p>И-мэйл</p>\n  <input id=\"user-email\" placeholder=\"email\" />\n\n  <p>Сурах хэлбэр</p>\n  <input id=\"self\" name=\"self\" type=\"radio\" /> Бие даан\n  <input id=\"pair\" name=\"pair\" type=\"radio\" /> Хосоор\n\n  <div onclick=\"this.closest('form').submit()\">Илгээх</div>\n</form>" },
    ],
    instructions: [
      "AI-гүйгээр snippet-ийг уншиж human question, machine key, expected keyboard action тус бүрийг бич.",
      "И-мэйл text-ийг visible label element болгож input id-тай programmatic холбо.",
      "Email input-д meaningful name, type=email, required нэм; placeholder-ийг optional hint болго.",
      "Radio choices-ийг нэг fieldset/legend group болго; same name, distinct values өг; option бүрийг label-тай холбо.",
      "Clickable div-ийг native submit button болгон солино; inline JavaScript-ийг бүрэн арилга.",
      "Browser-т label click, Tab order, Space/arrow selection, invalid submit-ийг шалга.",
      "Valid dummy data submit хийж query key/value pair-ийг source name/value-тэй тулга.",
      "git diff-ээр зөвхөн minimal HTML repair орсныг review хий." ],
    constraints: [
      "CSS болон JavaScript нэмэхгүй.",
      "Placeholder-ийг visible label-ийн оронд үлдээхгүй.",
      "Radio id-г давхардуулахгүй; same name, distinct value хэрэглэнэ.",
      "Positive tabindex болон ARIA-аар native semantic-ийг нөхөхгүй.",
      "Dummy data ашиглаж, personal information query-д оруулахгүй.",
      "AI ашиглахгүй — эхний diagnosis ба fix багийнх." ],
    hints: [
      "Label for нь input id-тай, submitted key input name-тай холбоотой.",
      "Radio нэг group болохын тулд name ижил байна; id/value тусдаа үүрэгтэй.",
      "Submit interaction-д <button type=\"submit\"> ашиглавал keyboard behavior built-in ирнэ.",
      "Group question нь legend, option name нь label." ],
    expectedResult: [
      "Email visible label-тай, type=email, name=email, required байна.",
      "Radio group fieldset/legend дотор, same name=studyMode, distinct values-тай байна.",
      "Option label click radio-г сонгож, нэгийг сонгоход нөгөө unselect болно.",
      "Native button keyboard-аар focus авч Enter/Space-аар ажиллана.",
      "Invalid email submit-ийг зогсоож, valid dummy query email/studyMode pair агуулна.",
      "Inline JavaScript, CSS, positive tabindex нэмээгүй байна." ],
    solutionCode: [
      { title: "Боломжит minimal repair", language: "html", code: "<form action=\"\" method=\"get\">\n  <p>\n    <label for=\"user-email\">И-мэйл *</label>\n    <input id=\"user-email\" name=\"email\" type=\"email\" placeholder=\"anu@example.com\" required />\n  </p>\n\n  <fieldset>\n    <legend>Сурах хэлбэр *</legend>\n    <label><input id=\"self\" name=\"studyMode\" type=\"radio\" value=\"self\" required /> Бие даан</label>\n    <label><input id=\"pair\" name=\"studyMode\" type=\"radio\" value=\"pair\" /> Хосоор</label>\n  </fieldset>\n\n  <button type=\"submit\">Илгээх</button>\n</form>" },
    ],
    stretchTask:
      "Form-д learning goal textarea нэмээд 20 character minimum requirement өг. Empty, 5 character, 20+ character state бүрийн browser behavior-ийг exact evidence-тэй тэмдэглэ.",
    debriefQuestions: [
      { question: "Ямар fix accessibility болон data хоёуланд нөлөөлсөн бэ?", answer: "Label/id association human/AT interaction, name/value form data; native control сонголт keyboard/semantic/data-д зэрэг нөлөөлсөн." },
      { question: "Яагаад clickable div-ийг button болгосон бэ?", answer: "Button native focus, keyboard, role, submit behavior өгнө; div-д эдгээрийг гараар бүтээх шаардлагатай." },
    ],
  },
  aiLab: {
    title: "AI form audit-ийг keyboard evidence-ээр батлах",
    duration: "7 минут",
    goal:
      "Сурагч AI-аас exact element/minimal HTML issue list авах боловч accepted fix бүрийг label click, keyboard, native validation, query data-аар өөрөө шалгана.",
    prompt: `Та HTML form accessibility reviewer.

Доорх form-ийг зөвхөн HTML түвшинд аудитла:
[FORM HTML-ЭЭ ЭНД ХУУЛ]

Шалгах зүйл:
- visible label ↔ unique id
- name ба submitted value
- appropriate input type/autocomplete
- fieldset/legend ба radio grouping
- required/native validation
- keyboard access ба native button

Асуудал бүрд exact element, шалтгаан, хамгийн жижиг HTML patch, browser/keyboard verification өг.

Constraints:
- CSS, JavaScript, backend, ARIA workaround бүү нэм.
- Test result зохиохгүй.
- Зөв element-ийг preference-ээр бүү өөрчил.
- Uncertain зүйлээ тэмдэглэ.`,
    steps: [
      { title: "Өөрийн checklist audit хийх", instruction: "AI-аас өмнө label, name, group, keyboard, validation таван мөрөө pass/fail/unknown гэж бөглө.", observe: "Baseline audit бэлэн.", explain: "AI decision-ийг хэмжих reference." },
      { title: "AI issue list авах", instruction: "Secret/personal data-гүй form source-оо prompt-д өг.", observe: "Exact element болон test-тэй санал гарсан эсэх.", explain: "Generic ‘accessibility сайжруул’ response хангалтгүй." },
      { title: "Нэг fix-ийг source-д хэрэглэх", instruction: "AI саналын reason HTML meaning-тэй нийцвэл хамгийн жижиг patch хий.", observe: "Unrelated rewrite байхгүй.", explain: "Scope Git diff-ээр харагдана." },
      { title: "Behavior-ийг бодитоор verify хийх", instruction: "Label click, Tab/Space/Enter, invalid submit, query pair-ээс тохирох шалгалтыг ажиллуул.", observe: "Pass/fail actual browser behavior." , explain: "AI-ийн predicted result биш runtime evidence." },
      { title: "Final decision тэмдэглэх", instruction: "Нэг accept, нэг reject/unknown саналын reason/evidence бич.", expected: "Checklist шинэчлэгдэж, Git diff зөвхөн justified HTML change агуулна." },
    ],
    verificationTable: [
      { claim: "Label programmatic холбоотой", evidence: "for/id source + label click focus", pass: "Text click corresponding control focus/activate" },
      { claim: "Radio group зөв", evidence: "same name/distinct values + keyboard selection", pass: "Нэг value сонгогдож query-д орсон" },
      { claim: "Validation ажиллаж байна", evidence: "Empty/invalid submit browser behavior", pass: "Submit blocked, invalid control identified" },
      { claim: "Fix minimal", evidence: "git diff -- form.html", pass: "No CSS/JS/unrelated markup rewrite" },
    ],
    teacherNotes: [
      "AI hidden label эсвэл ARIA санал болговол visible native label яагаад хангалттай/илүү дээр болохыг сурагчдаар тайлбарлуул.",
      "Browser behavior өөр байвал AI wrong гэж шууд дүгнэхгүй; standard claim болон implementation variation-ийг ялга.",
      "Time богино бол нэг issue-г complete evidence loop-оор хийх нь олон suggestion copy хийхээс дээр." ],
  },
  checkpoint: {
    duration: "5 минут",
    instructions:
      "AI/browser ашиглахгүй эхний answer бич. Application answer бүрт source fix болон verification action хоёрыг нэрлэ.",
    questions: [
      { type: "concept", question: "id, name, value гурвын үүргийг ялга.", answer: "id document/control unique identity ба label target; name submit key; value submitted answer." },
      { type: "concept", question: "Placeholder яагаад label биш вэ?", answer: "Бичихэд алга болдог түр hint бөгөөд programmatic/visible тогтвортой field name-ийг орлохгүй." },
      { type: "concept", question: "Radio group яаж нэг group болдог вэ?", answer: "Ижил name, ялгаатай value; fieldset/legend group question өгнө; id бүр unique." },
      { type: "application", question: "Label дээр click хийхэд input focus авахгүй. Эхлээд юу шалгах вэ?", answer: "label for болон input id exact match, id unique эсэхийг source/Elements-ээр шалгана." },
      { type: "application", question: "required browser дээр ажилласан тул backend validation хэрэггүй юу?", answer: "Үгүй. Client HTML өөрчилж/request шууд илгээж болно; server data-г дахин validate хийнэ." },
      { type: "application", question: "Accessible form-ийг өөрийн үгээр ямар evidence-ээр хамгаалах вэ?", answer: "Visible/programmatic labels, logical source/Tab order, native control keyboard behavior, group legend, validation tests, submitted name/value data. Rubric: source + behavior хоёрыг нэрлэ." },
    ],
  },
  wrapUp: {
    summary: [
      "Form user question-ийг name=value data болгон request-д бэлдэнэ.",
      "action/method request destination/HTTP method-ийг заана; security-г дангаараа батлахгүй.",
      "Visible label for нь unique id-тай control-той programmatic холбоо үүсгэнэ.",
      "name submit key, value typed/selected answer, id document identity.",
      "Answer shape-д тохирсон native text/email/date/textarea/select/radio/checkbox control сонгоно.",
      "Related choices fieldset/legend, radio same name/distinct values-тай байна.",
      "Native required/type validation usability өгдөг, backend validation-ийг орлохгүй.",
      "Keyboard-only audit нь form interaction-ийн бодит evidence." ],
    abilities: [
      "Accessible label-тай form control бичих",
      "Submitted name/value data-г source болон query-гаас унших",
      "Radio/checkbox group-ийг semantic structure-тай бүтээх",
      "Native validation state турших",
      "Mouse ашиглалгүй form audit хийх" ],
    beforeNextLesson: [
      "form.html-д name, email, goal, select, radio group, checkbox, submit button-аа дуусга",
      "Label click, empty required, invalid email, keyboard-only audit result-аа note хий",
      "git diff-ээ уншаад ‘Build accessible course request form’ message-ээр form.html-ээ commit хий",
      "Lesson 07-д ашиглах styles.css хоосон file-ийг form.html-тэй ижил folder-д бэлд" ],
    finalModel:
      "Question → visible label → native control → name=value → validation → keyboard test → request evidence → Git diff",
    exitTicket: [
      { question: "Label-ийн for ямар attribute-тай таарах вэ?", answer: "Control-ийн unique id-тай." },
      { question: "Radio group-ийн id/name/value дүрэм юу вэ?", answer: "id unique, name group дотор ижил, value option бүрт ялгаатай." },
      { question: "Form accessible гэж хэлэхийн өмнөх нэг зайлшгүй test?", answer: "Mouse ашиглалгүй Tab/Shift+Tab/Space/Enter-ээр бүтэн flow-г ажиллуулах." },
    ],
    nextLesson: {
      title: "Lesson 07 — CSS-ийн үндэс",
      connection:
        "Semantic, keyboard-usable form source бэлэн боллоо. Дараагийн хичээлээр энэ HTML meaning-ийг эвдэхгүйгээр CSS stylesheet холбож, selector/cascade/box model-оор presentation удирдаад focus болон layout-аа DevTools evidence-ээр debug хийнэ.",
    },
    teacherClose:
      "“Form сайн харагдах нь хангалтгүй. Асуулт нь нэртэй, data нь зөв key-тэй, бүх control keyboard-аар ажиллаж байж хэрэглэгчид хүрнэ.” гэж хаа.",
  },
};
