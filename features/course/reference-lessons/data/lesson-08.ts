import type { ReferenceLesson } from "../types";

export const lesson08Reference: ReferenceLesson = {
  id: 8,
  durationMinutes: 120,
  teacherGoal:
    "Сурагч prompt-ийг хүссэн хариултаа ид шидээр гаргах үг биш, task/context/constraints/evidence/acceptance бүхий testable engineering specification гэж ойлгож, AI-тай нэг hypothesis–нэг test–verification loop-оор ажилладаг болно.",
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
      "Vague request болон testable engineering prompt-ийн ялгааг тайлбарлах.",
      "Task, context, constraints, input, output format, acceptance criteria гэсэн зургаан хэсэгтэй prompt бичих.",
      "Debug prompt-д observed, expected, reproduction, evidence, attempts/unknown мэдээлэл өгөх.",
      "AI response-ээс claim, assumption, proposed change, verification step-ийг тусгаарлах.",
      "Нэг hypothesis-д нэг reversible test хийж runtime/DevTools/source diff evidence цуглуулах.",
      "Prompt log ашиглан decision, evidence, accepted/rejected санал, regression result хадгалах.",
    ],
    prerequisites: [
      "Lesson 04-ийн context, hallucination, AI output ≠ final answer mental model",
      "Lesson 07-ын CSS selector/cascade/box model болон DevTools evidence loop",
      "Lesson 03-ын Git status/diff/commit review",
      "HTML/CSS source-ийг уншиж жижиг patch хийх чадвар",
    ],
    tools: [
      "VS Code эсвэл text editor",
      "Browser + DevTools Elements, Styles, Computed",
      "Terminal + Git",
      "AI chat эсвэл Claude Code/AI editor (manual review mode)",
      "lesson-08-prompt-log.md",
    ],
    outcomes: [
      "Нэг vague prompt-ийн missing context-ийг ангилж чадна.",
      "CSS overflow bug-д evidence-backed structured prompt бичнэ.",
      "AI-ийн саналын өмнө hypothesis/test plan авч, өөрчлөлтийг шууд хийлгэхгүй.",
      "DevTools measurement болон Git diff-ээр AI claim/fix-ийг verify хийнэ.",
      "Acceptance criteria ба regression checks хангагдсан үед л final decision гаргана.",
      "Reusable prompt/debug log repository-д хадгална.",
    ],
    preparation: [
      "Lesson 07-ын intentionally broken 320px wrapper/352px card хувилбарыг тусдаа demo copy болгон бэлд.",
      "AI tool session шинэ/цэвэр context-тэй нээ; эхний vague prompt, дараагийн structured prompt-ийг тусдаа chat эсвэл тод тэмдэглэгээтэй харьцуул.",
      "Secret, API key, personal information, private repository content prompt-д хийхгүй гэсэн дүрмийг эхэнд сануул.",
      "AI provider/model өөрөөр хариулж болох тул exact wording-оор биш reasoning/evidence rubric-ээр үнэл.",
      "DevTools Computed box values болон Git clean baseline-ийг demo-гийн өмнө шалга.",
      "lesson-08-prompt-log.md starter template-ийг сурагч бүрт copy хийхэд бэлэн болго.",
    ],
    timeline: [
      { start: "00:00", duration: "8 мин", title: "Hook — ‘CSS-ээ зас’", teacherAction: "Нэг vague prompt-ийг ангиар задлуулж AI-д OS/file/goal/symptom/evidence/scope аль нь мэдэгдэхгүйг самбарт ангил." },
      { start: "00:08", duration: "12 мин", title: "Prompt = work specification", teacherAction: "Prompt quality-г урттай бус decision-relevant context ба testability-тай холбо." },
      { start: "00:20", duration: "14 мин", title: "Зургаан prompt field", teacherAction: "Task/context/constraints/input/output/acceptance бүрийн үүргийг нэг CSS task дээр progressive rewrite хий." },
      { start: "00:34", duration: "13 мин", title: "Debugging evidence", teacherAction: "Observed vs expected, reproduce, exact error/runtime evidence, attempted changes, unknown-ыг баримт/таамгаас ялгуул." },
      { start: "00:47", duration: "12 мин", title: "Constraints ба acceptance", teacherAction: "No !important/no rewrite зэрэг guardrail, measurable pass condition, regression check-ийг scope control болгон тайлбарла." },
      { start: "00:59", duration: "7 мин", title: "Hypothesis loop ба prompt log", teacherAction: "AI response-ийг шууд patch биш hypothesis → one test → evidence → decision log болгон хувирга." },
      { start: "01:06", duration: "7 мин", title: "Завсарлага", teacherAction: "Demo chat, source baseline, DevTools measurement, Git clean state-ээ шалгах зуур сурагчдыг амраа." },
      { start: "01:13", duration: "17 мин", title: "Live demo — vague vs engineer prompt", teacherAction: "Ижил overflow bug-д хоёр prompt авч, usefulness/assumption/scope/testability-г харьцуулан structured response-ийг evidence-ээр verify хий." },
      { start: "01:30", duration: "16 мин", title: "Guided practice — prompt + one test", teacherAction: "Хос бүр initial diagnosis, structured prompt, нэг AI hypothesis, нэг runtime test, minimal patch, regression log гүйцэтгэнэ." },
      { start: "01:46", duration: "8 мин", title: "AI skeptical review", teacherAction: "Өөрийн final diff-ийг AI-аар review хийлгээд finding бүрийг source/runtime evidence-ээр accept/reject/unknown болго." },
      { start: "01:54", duration: "6 мин", title: "Checkpoint ба wrap-up", teacherAction: "Prompt field, evidence, acceptance, decision authority асуултаар шалгаад Lesson 09 Flexbox руу холбо." },
    ],
  },
  concepts: [
    {
      id: "work-specification",
      number: "01",
      title: "Engineering prompt хийх ажлыг testable байдлаар тодорхойлно",
      eyebrow: "request ≠ specification",
      duration: "10–12 минут",
      whyItMatters:
        "AI vague request-д ч итгэлтэй response гаргана. Гэхдээ goal, environment, scope, evidence мэдэхгүй үед зөв sounding generic command эсвэл unintended rewrite санал болгох эрсдэлтэй.",
      explanation: [
        "Prompt бол AI-д бичсэн бүх input: instruction, context, pasted source, evidence, constraints, requested output. ‘Magic words’ жагсаалт биш; инженерийн decision-д хэрэгтэй мэдээллийг зохион байгуулсан interface.",
        "‘CSS ажиллахгүй, зас’ гэдэг нь observed symptom, expected state, affected element/file, current code, browser evidence, forbidden changes, done condition өгөөгүй. AI gap бүрийг таамгаар нөхөх боломжтой.",
        "Сайн prompt заавал урт биш. Known facts, relevant code/evidence, exact task, boundaries, response shape, verification expectation-ийг concise өгнө. Unrelated curriculum/history оруулах нь context noise.",
        "Prompt response quality-г guarantee хийхгүй. Тэр зөвхөн ambiguity болон scope risk бууруулна; model hallucination, source mismatch, runtime difference хэвээр тул verification заавал.",
      ],
      mentalModel: {
        title: "Ажлын тасалбар",
        explanation:
          "‘Байшин зас’ биш ‘гал тогооны гоожиж буй цоргыг хаалттай усан дээр, хана эвдэхгүй, leak test pass болтол зас’ гэсэн work order шиг. Analogy-ийн хязгаар: AI өөрийн биеэр environment-ийг харахгүй байж болох тул өгсөн evidence л ашиглана.",
      },
      example: {
        title: "Vague-аас testable болгох",
        explanation:
          "Goal/symptom/evidence/scope/done тодорхой болох тусам response-ийг шалгах боломжтой болно.",
        code: "Vague:\nFix my CSS.\n\nTestable:\nGoal: .card 320px wrapper дотор багтах.\nObserved: Computed outer width 352px.\nExpected: outer width ≤ 320px.\nScope: styles.css дахь .card rule.\nDo not: HTML rewrite, !important, overflow:hidden.\nFirst explain one hypothesis and one DevTools test; do not edit yet.",
        language: "text",
      },
      diagram: {
        label: "Prompt-оос инженерийн decision хүртэл",
        nodes: [
          { title: "SPEC", detail: "Task + evidence" },
          { title: "AI OUTPUT", detail: "Hypothesis/proposal" },
          { title: "TEST", detail: "Runtime/source evidence" },
          { title: "DECISION", detail: "Engineer accepts/rejects" },
        ],
      },
      questions: [
        { question: "Урт prompt үргэлж сайн уу?", answer: "Үгүй. Relevant, structured, testable context чухал; noise урт болгож болно." },
        { question: "Structured prompt AI-г 100% зөв болгох уу?", answer: "Үгүй. Ambiguity бууруулна, verification шаардлага хэвээр." },
      ],
      misconceptions: [
        { claim: "Please гэж эелдэг бичвэл technical accuracy нэмэгдэнэ.", correction: "Tone хамтын ажиллагаанд тустай ч accuracy-г evidence, scope, test, verification хамгаална." },
        { claim: "AI context-оо өөрөө repository/browser-оос мэднэ.", correction: "Tool permission/context-оос хамаарна; яг юу харж байгааг баталж relevant source/evidence өг." },
      ],
      teachingNotes: [
        "Prompt engineering-ийг keyword incantation болгохгүй; issue/task template болон evidence discipline гэж заа.",
        "Provider-specific feature оруулахгүй. Claude Code/AI editor ашиглавал inspect-only instruction болон diff review-ийг онцол.",
      ],
      takeaway: "Сайн prompt бол relevant context, clear task, boundary, measurable verification бүхий work specification.",
    },
    {
      id: "six-fields",
      number: "02",
      title: "Зургаан field prompt-ийн зорилго, орчин, хил, хэлбэр, done-ийг салгана",
      eyebrow: "task · context · constraints · input · output · acceptance",
      duration: "12–14 минут",
      whyItMatters:
        "Нэг paragraph дотор бүхнийг хольбол missing information болон contradictory instruction харагдахгүй. Field-үүд багш, сурагч, AI гурвуул task-ийг ижил унших checklist болдог.",
      explanation: [
        "Task: AI яг одоо юу хийх вэ — explain, inspect, propose, edit, review. ‘Fix’ ганцаараа олон action агуулдаг; эхний turn-д ‘diagnose only; no changes’ гэж phase-лэх нь safer.",
        "Context: environment, goal, relevant architecture/current state. Input/evidence: exact source excerpt, command/error, DevTools values, reproduction. Context interpretation өгч, input concrete artifact өгнө; practical prompt-д хамт байж болно.",
        "Constraints: file/scope, forbidden technique, compatibility, no dependency, no unrelated refactor. Constraints solution space-г зориуд хязгаарлана; impossible/contradictory бол AI uncertainty хэлэх ёстой.",
        "Output format: hypothesis table, minimal diff, 2 checks гэх мэт response-ийг review хийхэд хялбар болгоно. Acceptance criteria: runtime-д ямар measurable condition pass болсон үед done гэдгийг хэлнэ.",
      ],
      mentalModel: {
        title: "Зургаан хайрцагтай issue template",
        explanation:
          "Хайрцаг тус бүр өөр асуултад хариулна: юу, хаана/яагаад, юуг бүү хий, ямар баримт, ямар хариу, хэзээ дууссан гэж үзэх вэ. Бүх task-д адил хэмжээний текст шаардахгүй.",
      },
      example: {
        title: "Six-field CSS prompt",
        explanation: "Field label нь response-д заавал үлдэхгүй; missing хэсгийг author өөрөө харахад тусална.",
        code: "TASK\nDiagnose only. Do not edit yet.\n\nCONTEXT\nPlain HTML/CSS card; Chrome DevTools; no framework.\n\nINPUT / EVIDENCE\n.wrapper 320px. .card computed outer width 352px.\nCSS: width 300px; padding 24px; border 2px.\n\nCONSTRAINTS\nCSS only; no !important/overflow:hidden/random width.\n\nOUTPUT\nOne root-cause hypothesis, arithmetic, one reversible test.\n\nACCEPTANCE\nTest should predict outer width ≤ 320px; final fix must preserve padding/border.",
        language: "text",
      },
      diagram: {
        label: "Six-field prompt contract",
        nodes: [
          { title: "TASK", detail: "Requested action" },
          { title: "CONTEXT + INPUT", detail: "Relevant facts" },
          { title: "CONSTRAINTS", detail: "Boundaries" },
          { title: "OUTPUT + ACCEPTANCE", detail: "Review + done" },
        ],
      },
      questions: [
        { question: "‘Do not edit yet’ аль field вэ?", answer: "Task phase болон constraint — diagnose-only boundary." },
        { question: "‘Card green харагдана’ хангалттай acceptance уу?", answer: "Зарим visual goal-д эхлэл боловч exact target/state, viewport, regression behavior нэмж measurable болгоно." },
      ],
      misconceptions: [
        { claim: "Output format хэлэх нь AI-г micromanage хийж байна.", correction: "Reviewable structure шаардах нь багийн interface; solution content-ийг урьдчилан шийдээгүй." },
        { claim: "Constraints олон байх тусам сайн.", correction: "Task-д хамаарах risk/scope boundary л өг; unnecessary constraint valid solution-г хааж болно." },
      ],
      teachingNotes: [
        "Самбарт зургаан heading тогтмол үлдээж live demo үеэр мөр бүрийг бөглө.",
        "Role prompting (‘senior engineer шиг’) нь evidence/acceptance-ийг орлохгүй гэдгийг нэг удаа харьцуул.",
      ],
      takeaway: "Task/Context/Constraints/Input/Output/Acceptance field бүр response-ийг reviewable болгох өөр үүрэгтэй.",
    },
    {
      id: "debug-evidence",
      number: "03",
      title: "Debug prompt observed fact-ийг expected state ба hypothesis-ээс тусгаарлана",
      eyebrow: "observed · expected · reproduce · evidence · unknown",
      duration: "11–13 минут",
      whyItMatters:
        "‘Ажиллахгүй’ гэдэг нь measurable symptom биш. Observation-д таамгийг нуувал AI буруу premise-ийг үнэн гэж үзээд confirmation bias-тай solution өгч болно.",
      explanation: [
        "Observed нь харагдсан/хэмжсэн зүйл: Computed outer width 352px, title red, console exact error. Expected нь product/task requirement: outer width ≤320px, title green. ‘Padding буруу’ бол observation биш hypothesis.",
        "Reproduction нь issue-г тогтмол гаргах хамгийн богино алхам: file нээ, viewport 320px, card inspect. Environment/browser/OS/version зөвхөн relevant үед нэмнэ.",
        "Evidence exact байна: error бүтнээр, source minimal excerpt, DevTools matched rules/computed values, command output. Screenshot дангаараа searchable/copyable values нууж болох тул text evidence-ээр нөхнө.",
        "Attempts хэсэг өмнө хийсэн change/test ба үр дүнг хэлнэ. Unknown/uncertainty-г зориуд тэмдэглэх нь AI-г fact зохиохоос сэргийлэх permission; ‘stylesheet load эсэхийг хараахан шалгаагүй’ гэж үнэнээр бичнэ.",
      ],
      mentalModel: {
        title: "Эмчид symptom өгөх",
        explanation:
          "‘Надад вирус байна’ гэж diagnosis хэлэхээс илүү температур, хугацаа, өвдөлтийн байрлал зэрэг observation өгнө. Software-д runtime measurement давтагдах боломжтой; analogy medical advice биш.",
      },
      example: {
        title: "Fact ба assumption-ийг салгах",
        explanation: "AI-д premise бүрийн төрөл харагдвал өөр hypothesis санал болгох боломж үлдэнэ.",
        code: "OBSERVED (fact)\nComputed: content 300, padding 24/24, border 2/2.\nOuter edge exceeds 320px wrapper by 32px.\n\nEXPECTED (requirement)\nCard outer edge remains inside wrapper.\n\nHYPOTHESIS (not yet proven)\ncontent-box adds padding and border beyond width.\n\nUNKNOWN\nWhether another selector overrides box-sizing.",
        language: "text",
      },
      diagram: {
        label: "Evidence ladder",
        nodes: [
          { title: "OBSERVE", detail: "Measured fact" },
          { title: "EXPECT", detail: "Requirement" },
          { title: "HYPOTHESIZE", detail: "Possible cause" },
          { title: "TEST", detail: "Can disprove" },
        ],
      },
      questions: [
        { question: "‘CSS cascade эвдэрсэн’ observed уу?", answer: "Үгүй, interpretation/hypothesis. Exact winning selector/computed value observation байж болно." },
        { question: "Screenshot хангалттай evidence үү?", answer: "Visual symptom-д тустай ч exact source/value/runtime details-ийг text/DevTools output-оор нэмнэ." },
      ],
      misconceptions: [
        { claim: "Error message-ийн сүүлийн мөр л хангалттай.", correction: "Exact command, full relevant error/stack, location/context хэрэгтэй; secrets sanitize хийнэ." },
        { claim: "Өөрийн hypothesis-ээ context-д бичвэл AI түүнтэй санал нийлэх ёстой.", correction: "Hypothesis гэж label хийгээд challenge хийх, alternative/root evidence асуу." },
      ],
      teachingNotes: [
        "Facts/assumptions-ийг projector дээр хоёр өнгөөр ялгаж болно; visual styling lesson content-ийг орлохгүй.",
        "Log/output paste хийхээс өмнө token, credentials, user data redact хийх 30 секундийн security pause хий.",
      ],
      takeaway: "Observed fact, expected requirement, hypothesis, unknown-ыг салгаж exact reproducible evidence өгнө.",
    },
    {
      id: "constraints-acceptance",
      number: "04",
      title: "Constraints scope-ийг хамгаалж, acceptance criteria done-ийг хэмжинэ",
      eyebrow: "guardrails · measurable done · regression",
      duration: "10–12 минут",
      whyItMatters:
        "AI target bug-ийг засахдаа HTML rewrite, dependency, hidden overflow, broken focus зэрэг collateral change хийж болно. ‘Looks good’ subjective тул review дуусах boundary тодорхойгүй үлддэг.",
      explanation: [
        "Constraint нь solution-д тавих зааг: зөвхөн styles.css, no new dependency, semantic HTML unchanged, no !important, diagnose before edit. Энэ нь safety болон review scope-г багасгана.",
        "Acceptance criterion solution хэлэхгүй, observable outcome хэлнэ: 320px viewport-д horizontal overflow байхгүй; computed outer width ≤ wrapper; padding/border хадгалагдсан; focus visible; diff зөвхөн .card rule.",
        "Functional/visual pass-аас гадна regression check тодорхойл: desktop width, keyboard focus, title color, form validation. Нэг bug fixed гэдэг unrelated behavior intact гэдгийг автоматаар батлахгүй.",
        "Constraint ба acceptance contradictory байвал AI-аас tradeoff/clarification асуух ёстой. Жишээ нь HTML/CSS огт өөрчлөхгүй мөртлөө layout fix шаардах нь боломжгүй байж болно.",
      ],
      mentalModel: {
        title: "Замын хашлага ба finish line",
        explanation:
          "Constraints замаас гарахгүй хамгаална; acceptance finish line хаана байгааг хэлнэ. Guardrail дотор олон valid path байж болно; инженер evidence-ээр сонгоно.",
      },
      example: {
        title: "Fix биш outcome заасан acceptance",
        explanation: "border-box гэж acceptance-д урьдчилан шаардахгүй; AI өөр valid cause/solution олох боломжтой.",
        code: "Constraints:\n- Change styles.css only\n- Preserve HTML semantics and visible focus\n- No !important or overflow masking\n- Propose before editing\n\nAcceptance:\n- At 320px wrapper, no horizontal overflow\n- Padding remains 24px; border remains 2px\n- Link remains keyboard focusable\n- Git diff contains one justified rule change",
        language: "text",
      },
      diagram: {
        label: "Scope-to-done contract",
        nodes: [
          { title: "BOUNDARY", detail: "Allowed files/actions" },
          { title: "TARGET", detail: "Observable pass" },
          { title: "REGRESSION", detail: "Must remain true" },
          { title: "DIFF", detail: "Actual scope evidence" },
        ],
      },
      questions: [
        { question: "‘Use border-box’ acceptance criterion мөн үү?", answer: "Ихэвчлэн solution constraint/implementation choice; acceptance нь overflow/measurement outcome." },
        { question: "‘Page гоё харагдана’ яагаад сул вэ?", answer: "Subjective, viewport/state/measurement тодорхойгүй, pass/fail repeat хийхэд хэцүү." },
      ],
      misconceptions: [
        { claim: "AI-д exact solution хэлэх нь хамгийн сайн prompt.", correction: "Root cause батлагдаагүй бол solution-оо prompt-д lock хийх нь alternative diagnosis хаана; outcome ба evidence өг." },
        { claim: "Target test pass бол regression хэрэггүй.", correction: "Change өөр behavior эвдэж болно; risk-тэй ойролцоо checks ажиллуул." },
      ],
      teachingNotes: [
        "Acceptance criteria-г сурагчдаар patch харахаас өмнө бичүүл; дараа бичвэл solution-т тааруулан goal өөрчлөх эрсдэлтэй.",
        "‘No refactor’ constraint нь existing code маш эвдэрхий үед tradeoff үүсгэж болохыг mention, энэ жижиг task-д scope зориуд нарийн.",
      ],
      takeaway: "Constraints яаж/хаана ажиллах хил, acceptance ямар evidence дээр done болох finish line.",
    },
    {
      id: "hypothesis-loop",
      number: "05",
      title: "AI suggestion-ийг нэг hypothesis–нэг test loop болгон удирдана",
      eyebrow: "predict · test one · observe · decide",
      duration: "6–8 минут",
      whyItMatters:
        "Олон change зэрэг хийхэд аль нь асуудлыг зассан, аль нь шинэ bug үүсгэснийг мэдэхгүй. AI том patch өгөх хандлагатай байж болох тул инженер experiment-ийн хэмжээг хянадаг.",
      explanation: [
        "Hypothesis cause болон prediction хоёрыг агуулна: ‘content-box padding-ийг width дээр нэмсэн бол box-sizing:border-box түр тавихад outer width 300px болно.’ Falsifiable prediction байхгүй бол test weak.",
        "Reversible test: DevTools declaration toggle, нэг command, нэг minimal source edit. Нэг variable өөрчилж before/after evidence авна. Test fail бол hypothesis reject/update; олон tweak нэмж аврахгүй.",
        "AI-аас code-оос өмнө hypothesis, supporting/contradicting evidence, one test, expected observation асууж болно. Model test ажилласан мэт хэлбэл actual evidence биш гэж тэмдэглэнэ.",
        "Successful test → source minimal patch → refresh/re-run → acceptance → regression → Git diff. Failed test мөн үнэ цэнтэй evidence бөгөөд prompt-ийн next context болно.",
      ],
      mentalModel: {
        title: "Нэг унтраалга дарах experiment",
        explanation:
          "Өрөөний аль гэрэл аль switch болохыг олохдоо нэг нэгээр дарна. Бүгдийг зэрэг дарвал cause тодорхойгүй. Software state илүү complex ч controlled change principle адил.",
      },
      example: {
        title: "Hypothesis record",
        explanation: "Prediction-ийг test-ээс өмнө бичих нь hindsight-аар story зохиохоос хамгаална.",
        code: "Hypothesis: content-box causes 352px outer width.\nPrediction: temporary border-box makes outer width 300px.\nOne test: DevTools → .card → box-sizing:border-box.\nObserved: ______ (student records actual value)\nDecision: accept / reject / unknown\nNext: source patch only if accepted.",
        language: "text",
      },
      questions: [
        { question: "Test хийлгүй AI code зөв харагдсан бол apply хийх үү?", answer: "Үгүй. Relevant evidence/test, diff, acceptance хэрэгтэй." },
        { question: "Test prediction-оос өөр гарвал муу үр дүн үү?", answer: "Үгүй. Hypothesis-г үгүйсгэсэн шинэ evidence; log хийгээд next cause шалгана." },
      ],
      misconceptions: [
        { claim: "Хурдан байхын тулд AI-ийн бүх fixes-ийг зэрэг paste хийнэ.", correction: "Cause attribution, rollback, regression хэцүү; жижиг test/patch хурдан diagnosis өгнө." },
        { claim: "AI confidence өндөр бол test багасгаж болно.", correction: "Tone evidence биш; risk ба claim-аар verification сонгоно." },
      ],
      teachingNotes: [
        "Timer ашиглаж 60 секундэд нэг test/evidence record хийлгэвэл loop бодит хэмнэлтэй болно.",
        "Reversible DevTools test болон persistent source edit-ийг хэлээр тогтмол ялга.",
      ],
      takeaway: "Нэг falsifiable hypothesis, нэг reversible test, actual observation, дараа нь source decision.",
    },
    {
      id: "prompt-log",
      number: "06",
      title: "Prompt log AI conversation-ийг инженерийн audit trail болгоно",
      eyebrow: "decision · evidence · reusable learning",
      duration: "5–7 минут",
      whyItMatters:
        "Chat уртрахад ямар context өгсөн, AI юу таамагласан, аль санал pass/fail болсон, final change яагаад орсныг мартдаг. Copy-paste transcript дангаараа decision record биш.",
      explanation: [
        "Prompt log-д problem, observed/expected, relevant evidence, prompt version, AI claims, test results, accept/reject reason, final diff summary, regression result хадгална. Бүх raw chat-ийг хуулж repository дүүргэх шаардлагагүй.",
        "Accepted answer ч source of truth биш; source code, runtime result, DevTools/command output primary evidence. Link/path/file-line reference нэмбэл дараа reproduce хийхэд тустай.",
        "Template reuse нь prompt copy хийх биш thinking checklist reuse. Next task-д irrelevant context/examples-ийг арилгаж field бүрийг шинэ evidence-ээр бөглөнө.",
        "Security: secrets, tokens, personal data, private logs-ийг log/AI-д хадгалахгүй. Redaction хийснээ note хийж болно; credential илэрвэл rotate/revoke workflow тусдаа.",
      ],
      mentalModel: {
        title: "Лабораторийн дэвтэр",
        explanation:
          "Зөвхөн final answer биш setup, prediction, actual observation, decision бичвэл experiment давтагдана. Prompt log code history-г орлохгүй; Git diff/commit-тэй complement.",
      },
      example: {
        title: "Minimal prompt log sections",
        explanation: "Each claim-д evidence ба decision холбоно.",
        code: "# Prompt Debug Log\n## Problem / Expected\n## Evidence before AI\n## Prompt used\n## AI hypotheses\n## Test performed / Actual result\n## Accepted, rejected, unknown\n## Final diff summary\n## Acceptance + regression\n## What I would ask next time",
        language: "text",
      },
      diagram: {
        label: "Conversation-оос reusable knowledge хүртэл",
        nodes: [
          { title: "PROMPT", detail: "Context version" },
          { title: "CLAIMS", detail: "AI proposals" },
          { title: "EVIDENCE", detail: "Tests/results" },
          { title: "DECISION LOG", detail: "Why final change" },
        ],
      },
      questions: [
        { question: "Full chat transcript хадгалахад яагаад хангалтгүй вэ?", answer: "Decision/evidence/pass-fail mapping тодорхойгүй; noise, secrets байж болно." },
        { question: "Prompt template reuse хийхдээ юу шинэчлэгдэх ёстой вэ?", answer: "Task-specific context, source, evidence, constraints, acceptance; irrelevant old detail арилна." },
      ],
      misconceptions: [
        { claim: "AI output-ийг Markdown-д хадгалсан бол verify хийсэн.", correction: "Хадгалалт evidence биш; claim бүр actual test/source/docs-той холбогдоно." },
        { claim: "Prompt log Git commit-ийг орлоно.", correction: "Log reasoning/evidence, Git source history/diff; хоёул өөр үүрэгтэй." },
      ],
      teachingNotes: [
        "Practice submit-д raw AI prose-оос илүү decision table-г үнэл.",
        "Prompt log 1 page орчим байж болно; verbosity биш traceability rubric.",
      ],
      takeaway: "Prompt log нь AI claim → actual test → engineering decision → final diff холбоог хадгална.",
    },
  ],
  liveDemo: {
    title: "Ижил CSS bug: vague prompt ба engineer prompt",
    duration: "17 минут",
    goal:
      "Багш 320px wrapper дотор 352px болсон card bug-д эхлээд contextгүй response авч, дараа нь structured diagnose-only prompt ашиглан нэг hypothesis/test гаргуулж, actual DevTools evidence ба Git diff-ээр шийдвэрлэнэ.",
    setup: [
      "Lesson 07 guided practice-ийн broken HTML/CSS-ийг clean demo copy-д нээ; card overflow бодитоор reproduce болсон байна.",
      "DevTools Computed-д width 300, padding 24/24, border 2/2 болон wrapper 320 утгыг baseline note хий.",
      "git status/diff clean эсвэл expected starter state-ийг projector дээр батал.",
      "AI tool-д шинэ chat нээ; repository/file access байгаа эсэхийг таамаглахгүй, prompt-д exact source өг.",
    ],
    steps: [
      { title: "Vague prompt ажиллуулах", instruction: "AI-д зөвхөн ‘My CSS card overflows. Fix it.’ гэж өгөөд response-ийг өөрчлөлт хийхгүйгээр хадгал.", code: { title: "Round 1", language: "text", code: "My CSS card overflows. Fix it." }, observe: "AI overflow:hidden, width:100%, max-width, box-sizing эсвэл generic checklist санал болгож магадгүй.", explain: "Response байгаа нь context мэдсэн гэсэн үг биш; exact file/measurement/scope/test аль нь assumption вэ?" },
      { title: "Missing context audit хийх", instruction: "Ангиар Task/Context/Input/Constraints/Output/Acceptance зургаан баганад vague prompt-ийн missing мэдээллийг байрлуул.", observe: "Viewport, source, computed dimensions, desired padding/border, allowed files, done condition бүгд missing.", explain: "‘Илүү дэлгэрэнгүй бич’ биш decision-relevant gap олж байна." },
      { title: "Structured diagnose-only prompt бэлдэх", instruction: "Actual HTML/CSS excerpt ба DevTools values-ийг template-д оруулж, edit хийхийг хоригло.", code: { title: "Round 2", language: "text", code: "Task: Diagnose the overflow only; do not edit yet.\nContext: Plain HTML/CSS in Chrome. Wrapper width is 320px.\nEvidence: .card computed content width 300px, padding 24px each side, border 2px each side; measured outer width 352px.\nCSS: .card { width:300px; padding:24px; border:2px solid; }\nConstraints: CSS only; preserve padding/border; no !important, overflow:hidden, or HTML rewrite.\nOutput: one root-cause hypothesis, arithmetic, one reversible DevTools test, expected result.\nAcceptance: after final source fix, outer width <=320px and focus/content unchanged." }, observe: "Response 300+48+4 arithmetic, content-box hypothesis, one border-box test өгөх боломжтой.", explain: "AI output одоо test plan; final truth биш." },
      { title: "AI claim-ийг evidence table болгох", instruction: "Claim, given evidence, missing evidence, proposed test, predicted value гэсэн таван мөрөөр response-ийг задла.", observe: "‘Default content-box’ claim source/Computed box-sizing-аар нэмэлт шалгалт шаардаж болохыг харна.", explain: "Reasoning sentence бүрийг inspectable claim болгон хувиргав." },
      { title: "Нэг reversible test хийх", instruction: "DevTools Styles-д .card дээр box-sizing:border-box түр нэмээд actual outer width бич.", observe: "Энэ starter-д outer width 300px болж overflow арилна; өөр гарвал actual-ыг тэмдэглэнэ.", explain: "Prediction таарвал hypothesis дэмжигдэнэ, chat text өөрөө pass биш." },
      { title: "Source patch ба acceptance", instruction: "Accepted hypothesis бол styles.css-д нэг declaration нэм; Save/Refresh дараа Computed measurement, 320px containment шалга.", observe: "Persistent source result pass, padding 24/border 2 хадгалагдсан.", explain: "Temporary experiment source truth боллоо." },
      { title: "Regression ба diff review", instruction: "Title color, link focus, wider viewport, HTML unchanged, Git diff scope шалга.", code: { title: "Review actual patch", language: "bash", code: "git status\ngit diff -- index.html styles.css" }, observe: "styles.css-д нэг justified declaration; unintended rewrite байхгүй.", explain: "Acceptance target + regression + source diff нийлж done decision өгнө." },
      { title: "Round 1/2-ыг дүгнэх", instruction: "Аль response урт байсныг биш assumptions, testability, scope, verification-аар score хий.", expected: "Structured response-ийн claim бүр actual evidence-тэй; vague response apply хийгдээгүй." },
    ],
    expectedOutput: [
      "Vague response-ийн дор хаяж 5 missing context/assumption тодорхойлогдсон.",
      "Structured prompt зургаан field болон diagnose-only phase boundary агуулсан.",
      "AI hypothesis-г actual result гэж тэмдэглээгүй; one-test prediction тусдаа байна.",
      "DevTools before 352px, temporary test/final source after 300px measurement бүртгэгдсэн.",
      "Padding/border, focus, title, wider viewport regression pass болсон.",
      "Git diff зөвхөн intended minimal CSS change харуулсан.",
    ],
    recovery: [
      "AI vague prompt дээр clarification асуувал сайн behavior гэж тэмдэглэ; missing context audit-аа үргэлжлүүл.",
      "AI олон fixes өгвөл нэг root-cause hypothesis/one test болгон response-ийг дахин constrain хий.",
      "AI test ажилласан гэж өнгөрсөн цагт бичвэл ‘not executed’ гэж log-д засаж actual DevTools test хий.",
      "Border-box test 300px болохгүй бол competing box-sizing/min/max/parent rules-ийг Computed/Styles-ээр шалгаж unknown гэж тэмдэглэ; result зохиохгүй.",
      "AI tool unavailable бол багш хоёр sample response-ийг read-only тарааж, evidence/decision exercise-ийг DevTools дээр хэвээр хийлгэ.",
    ],
  },
  guidedPractice: {
    title: "Prompt бичихээс final evidence хүртэл",
    duration: "16 минут",
    goal:
      "Хос бүр CSS bug-ийг AI-аас өмнө observe хийж, зургаан field prompt бичээд нэг AI hypothesis-ийг нэг test-ээр шалгаж, prompt log-д decision болон regression-ээ бүрэн холбоно.",
    starterCode: [
      { title: "index.html", language: "html", code: "<div class=\"panel\">\n  <article class=\"profile\">\n    <h2 class=\"profile-title\">Миний ахиц</h2>\n    <a href=\"#details\">Дэлгэрэнгүй</a>\n  </article>\n</div>" },
      { title: "styles.css", language: "css", code: ".panel { width: 360px; }\n.profile {\n  width: 100%;\n  padding: 20px;\n  border: 2px solid #6c5ce7;\n}\n.profile-title { color: #6c5ce7; }\na:focus-visible { outline: 3px solid #f59e0b; }" },
      { title: "lesson-08-prompt-log.md", language: "text", code: "# Lesson 08 — Prompt Debug Log\n\n## Observed\n\n## Expected\n\n## Evidence before AI\n\n## My six-field prompt\n\n## AI hypothesis and prediction\n\n## One test / actual result\n\n## Decision: accept, reject, or unknown\n\n## Final diff and regression\n" },
    ],
    instructions: [
      "Driver page/DevTools ажиллуулж, Navigator prompt log бичнэ; 8 минутын дараа role солино.",
      "AI ашиглахаас өмнө panel/profile computed content, padding, border, outer width болон overflow-ийг exact тэмдэглэ.",
      "Observed fact, expected requirement, өөрийн hypothesis, unknown-ыг тусдаа бич.",
      "Task/Context/Constraints/Input/Output/Acceptance зургаан heading-тай diagnose-only prompt үүсгэ.",
      "Source/log-д secret эсвэл personal data байхгүйг pair-аараа шалгаад prompt илгээ.",
      "AI-ийн хамгийн testable нэг hypothesis сонгож, prediction-ийг actual test-ээс өмнө хуулж бич.",
      "DevTools-д зөвхөн нэг reversible change хийж actual measurement ав; accept/reject/unknown шийдвэр бич.",
      "Accepted бол source-д minimal patch хийж refresh, 360px/280px viewport, title, link focus regression шалга.",
      "git diff уншаад AI санал болон final source change яг адил эсэх, unrelated change байгаа эсэхийг log-д дүгнэ.",
    ],
    constraints: [
      "AI-аас эхний diagnosis авахын өмнө own observation/evidence заавал бичсэн байна.",
      "Нэг удаад нэг hypothesis/test; олон CSS declaration зэрэг өөрчлөхгүй.",
      "No !important, overflow:hidden, inline style, HTML rewrite.",
      "AI predicted result-ийг actual result хэсэгт хуулж болохгүй.",
      "Final fix source-д хадгалагдаж, refresh-ийн дараа pass болно.",
      "Prompt/log-д credential, private URL, personal data оруулахгүй.",
    ],
    hints: [
      "width:100% content-box үед padding/border parent width-ийн дээр нэмэгдэж болно.",
      "Acceptance-д solution биш outer containment, preserved spacing/border/focus behavior бич.",
      "AI response олон fix өгвөл ‘Choose the first falsifiable hypothesis and one test only’ гэж follow-up хий.",
      "Git diff source scope; DevTools Computed runtime outcome нотолно.",
    ],
    expectedResult: [
      "Prompt log before-AI exact measured evidence агуулсан.",
      "Six-field prompt goal/scope/evidence/output/done-ийг тодорхойлсон.",
      "AI hypothesis ба actual test result тусдаа, prediction өмнө бичигдсэн.",
      "Decision accept/reject/unknown нь evidence reason-тэй.",
      "Final card/profile outer width parent-д багтаж padding/border хадгалагдсан.",
      "280px ба 360px нөхцөл, title, link focus regression шалгагдсан.",
      "Git diff minimal бөгөөд prompt log final change-тай таарсан.",
    ],
    solutionCode: [
      { title: "Боломжит minimal source patch", language: "css", code: ".profile {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 20px;\n  border: 2px solid #6c5ce7;\n}" },
      { title: "Teacher decision summary example", language: "text", code: "Hypothesis: content-box adds 40px padding + 4px border beyond 100%.\nPrediction: border-box makes outer width equal the panel width.\nTest: DevTools temporary box-sizing:border-box.\nActual: outer width changed from 404px to 360px.\nDecision: Accept — prediction matched measurement.\nRegression: 280px contained; title unchanged; link focus visible.\nDiff: one declaration in .profile." },
    ],
    stretchTask:
      "AI-аас alternative valid fix асуугаад түүний tradeoff-ийг border-box solution-той харьцуул. Хоёр дахь fix-ийг apply хийхгүй; acceptance, maintainability, project convention evidence-ээр recommendation бич.",
    debriefQuestions: [
      { question: "Prompt-ийн аль field хамгийн их useful difference гаргасан бэ?", answer: "Нэг universal answer байхгүй; энэ task-д exact computed evidence + preserve padding/border acceptance нь generic masking fix-ийг хассан." },
      { question: "AI зөв border-box санал болгосон ч яагаад DevTools test шаардлагатай вэ?", answer: "Competing rules/min-width/other cause байж болно; actual environment prediction-тэй таарсныг runtime evidence батална." },
    ],
  },
  aiLab: {
    title: "AI-аар өөрийн final fix-ийг skeptical review хийлгэх",
    duration: "8 минут",
    goal:
      "Сурагч AI-г solution generator-оос reviewer болгон ашиглаж, final diff-ийн assumption/regression gap-ийг олуулсан ч finding бүрийг өөрийн source/runtime evidence-ээр шийднэ.",
    prompt: `Та skeptical code reviewer. Доорх task contract, before/after evidence, final diff-ийг review хий.

TASK / ACCEPTANCE:
[MY TASK AND ACCEPTANCE]

BEFORE / AFTER EVIDENCE:
[COMPUTED VALUES AND TESTS]

FINAL DIFF:
[GIT DIFF]

Дараах хүснэгтээр хариул:
- finding эсвэл assumption
- severity: blocking / follow-up / none
- exact evidence in the provided material
- missing evidence
- one verification action

Constraints:
- Өгөгдөөгүй test pass болсон гэж бүү хэл.
- Unrelated refactor/style preference бүү санал болго.
- !important, overflow masking, HTML rewrite бүү санал болго.
- Finding байхгүй бол "no supported finding" гэж хэл.
- Final decision-ийг надад үлдээ.`,
    steps: [
      { title: "Review packet бэлдэх", instruction: "Acceptance, sanitized before/after values, actual git diff-ээ prompt-д оруул.", observe: "Chat-д full repo/secret биш task-relevant evidence л орсон.", explain: "Reviewer context scope-controlled." },
      { title: "Finding бүрийг ангилах", instruction: "AI output-ийн мөр бүрийг claim/assumption/preference гэж label хийгээд supported evidence underline хий.", observe: "Unsupported preference final action болохгүй.", explain: "Review response ч hallucination хийж болно." },
      { title: "Нэг missing check ажиллуулах", instruction: "Useful finding байвал exact runtime/source check; байхгүй бол existing acceptance-аас нэг regression дахин run хий.", observe: "Actual result сурагч өөрөө тэмдэглэсэн.", explain: "AI statement биш шинэ evidence." },
      { title: "Final engineering decision", instruction: "Accept/reject/unknown ба reason бич; шаардлагатай patch бол diff дахин review хий.", expected: "All acceptance criteria evidence-тэй; no unsupported change accepted." },
    ],
    verificationTable: [
      { claim: "Review task scope ойлгосон", evidence: "AI finding exact diff/acceptance мөр ишилсэн", pass: "Unrelated refactor саналгүй" },
      { claim: "Runtime fix persistent", evidence: "Refresh after source patch + Computed value", pass: "Expected containment actual browser-д хэвээр" },
      { claim: "Regression хамгаалагдсан", evidence: "280/360 width + title + keyboard focus results", pass: "All recorded actual pass/fail" },
      { claim: "Final scope minimal", evidence: "git diff -- index.html styles.css lesson-08-prompt-log.md", pass: "Only justified CSS and learning log" },
    ],
    teacherNotes: [
      "AI ‘add tests’ гэж generic хэлбэл энэ static HTML/CSS task-д exact browser check шаардуул; vague finding reject хийж болно.",
      "No supported finding бол valid outcome. AI-аас заавал criticism зохиолгохгүй.",
      "Prompt log file өөрөө submission тул AI response-оор бүх reflection-ийг rewrite хийлгэхгүй.",
    ],
  },
  checkpoint: {
    duration: "6 минут",
    instructions:
      "AI ашиглахгүй. Concept answer нэг–хоёр өгүүлбэр; application answer prompt field + evidence action хоёрыг агуулна.",
    questions: [
      { type: "concept", question: "Engineering prompt-ийн зургаан field-ийг нэрлэ.", answer: "Task, context, constraints, input/evidence, output format, acceptance criteria." },
      { type: "concept", question: "Observed ба hypothesis ямар ялгаатай вэ?", answer: "Observed хэмжсэн/харсан fact; hypothesis тухайн fact-ийн боломжит cause бөгөөд test шаарддаг." },
      { type: "concept", question: "Constraint ба acceptance ямар ялгаатай вэ?", answer: "Constraint ажиллах хил/хориг; acceptance measurable done outcome." },
      { type: "application", question: "AI гурван CSS fix зэрэг санал болгов. Engineer-ийн дараагийн алхам?", answer: "Evidence-д хамгийн нийцэх falsifiable hypothesis нэгийг сонгож, нэг reversible test ба prediction тодорхойлоод actual result авна." },
      { type: "application", question: "AI ‘test passed’ гэж хэлсэн ч tool/runtime accessгүй. Энэ юу вэ?", answer: "Unverified claim; actual command/DevTools/browser test-ийг инженер ажиллуулж record хийнэ." },
      { type: "application", question: "‘Fix my form’ prompt-ийг сайжруулах эхний дөрвөн зүйл?", answer: "Exact goal/observed/expected, relevant form source/error, environment/evidence, scope/constraints; дараа output/acceptance. Rubric: magic adjective биш." },
    ],
  },
  wrapUp: {
    summary: [
      "Prompt бол magic phrase биш, AI-д өгсөн work specification.",
      "Task/Context/Constraints/Input/Output/Acceptance field missing information-ийг ил болгоно.",
      "Debugging-д observed fact, expected requirement, reproduction, evidence, hypothesis, unknown тусдаа.",
      "Constraints collateral change-ийг багасгаж, acceptance measurable done өгнө.",
      "AI output hypothesis/proposal; test result биш.",
      "Нэг hypothesis → prediction → нэг reversible test → actual observation → decision урсгал хэрэглэнэ.",
      "Source patch-ийн дараа acceptance, regression, Git diff шалгана.",
      "Prompt log AI claim, evidence, final engineering decision-ийг traceable болгоно.",
    ],
    abilities: [
      "Vague prompt-ийн missing context олох",
      "Six-field engineering prompt бичих",
      "Fact/assumption/hypothesis ялгах",
      "AI suggestion-д one-test verification хийх",
      "Acceptance/regression evidence-ээр final decision гаргах",
      "Reusable prompt decision log хөтлөх",
    ],
    beforeNextLesson: [
      "lesson-08-prompt-log.md-ээ бүх section, actual values, decision reason-тэй дуусга",
      "Final HTML/CSS болон prompt log-ийн git diff-ээ унш",
      "No secrets/personal data, no unsupported AI prose, no unintended source change гэдгийг шалга",
      "‘Complete evidence-based prompt engineering lab’ message-ээр intended files-ээ commit хий",
    ],
    finalModel:
      "Problem → observed/expected → evidence → structured prompt → AI hypothesis → one test → actual result → minimal patch → acceptance/regression → engineer decides",
    exitTicket: [
      { question: "AI response авсны дараагийн алхам?", answer: "Claim-ийг review хийж, relevant evidence/test-ээр verify хийх." },
      { question: "Сайн debug prompt-д ‘ажиллахгүй’ гэдгийн оронд юу орох вэ?", answer: "Exact observed, expected, reproduce steps, source/error/runtime evidence." },
      { question: "Final шийдвэрийг хэн гаргах вэ?", answer: "Инженер — acceptance, regression, diff evidence дээр тулгуурлан." },
    ],
    nextLesson: {
      title: "Lesson 09 — Flexbox",
      connection:
        "Одоо сурагч CSS layout task-ийг measurable goal, constraints, viewport evidence, verification-тайгаар AI-д өгч чадна. Дараагийн хичээлээр Flexbox-ийн axis/alignment behavior-ийг эхлээд өөрөө ойлгож, дараа нь энэ prompt/evidence workflow-оор layout-аа туршина.",
    },
    teacherClose:
      "“AI-аас зөв хариулт гуйх биш. Асуудлаа баримтаар тодорхойлж, нэг hypothesis шалгаж, done гэдгийг өөрөө нотлох нь prompt engineering.” гэж хаа.",
  },
};
