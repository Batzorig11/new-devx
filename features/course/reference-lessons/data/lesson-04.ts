import type { ReferenceLesson } from "../types";

export const lesson04Reference: ReferenceLesson = {
  id: 4,
  durationMinutes: 120,
  teacherGoal:
    "Сурагч LLM-ийг үнэн хадгалдаг machine гэж бус, context дээр тулгуурлан дараагийн token үүсгэдэг model гэж ойлгоод AI output-ийг claim болгон задалж, tool/runtime/documentation evidence-ээр шалгадаг болно.",
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
      "LLM response дараагийн token-уудыг дараалуулан үүсгэдгийг beginner mental model-оор тайлбарлах.",
      "Token, context window, training, inference гэсэн ойлголтыг хооронд нь ялгах.",
      "Hallucination яагаад итгэлтэй хэллэгтэй хамт гарч болохыг нэг жишээгээр тайлбарлах.",
      "AI output дахь claim-ийг browser, terminal, official documentation эсвэл Git evidence-ээр verify хийх.",
      "Copy-paste workflow болон context → review → verify → decide инженерийн workflow-г харьцуулах.",
    ],
    prerequisites: [
      "Lesson 01-ийн browser, request/response, DevTools evidence ойлголт",
      "Lesson 02-ын terminal, Node.js, npm болон read-only command шалгах дадал",
      "Lesson 03-ын git diff, жижиг commit, working state шалгах дадал",
    ],
    tools: [
      "Ашиглах боломжтой AI chat — provider хамаарахгүй",
      "Browser болон DevTools",
      "Terminal / PowerShell + npm",
      "Text editor болон Git repository",
      "Claude Code эсвэл AI editor — optional setup/demo",
    ],
    outcomes: [
      "LLM, token, context window, training, inference, hallucination-ийг өөрийн үгээр тайлбарлана.",
      "Context-д өгсөн зохиомол project мэдээллийг training knowledge-ээс ялгана.",
      "Байхгүй package-ийн талаарх AI response-ийг npm registry output-оор шалгана.",
      "AI claim, evidence, дүгнэлт гэсэн гурван баганатай audit хийнэ.",
      "AI output-ийг шууд command/code болгохгүй, review ба verification-ийн дараа шийдвэр гаргана.",
    ],
    preparation: [
      "Ангиас өмнө ашиглах AI chat-д access ажиллаж байгааг шалга; сурагч бүр account-гүй бол pair/team demo response бэлд.",
      "devx-llm-lesson4-package-88421 package npm registry-д байхгүй хэвээр эсэхийг npm view командаар шалгаж, нэр давхацвал шинэ random suffix сонго.",
      "AI package-ийг зохиох эсвэл зөв татгалзах аль ч response хичээлийн зөв demo болж болохыг урьдчилан тайлбарлахад бэлд.",
      "Claude Code/AI editor install нь optional: account/access байхгүй сурагчийг setup дээр блоклохгүй.",
      "Projector дээр prompt болон response text уншигдахаар zoom тохируул; private conversation/history харагдахгүй шинэ chat ашигла.",
      "Secret, API key, token, private code-г AI prompt-д оруулахгүй гэсэн ангийн дүрмийг эхэнд нь сануул.",
    ],
    timeline: [
      { start: "00:00", duration: "8 мин", title: "Hook — дараагийн үгийг таах", teacherAction: "‘Өнөөдөр хичээл тараад би ...’ өгүүлбэрийг сурагчдаар гүйцээлгэж, өмнөх context-оос боломжит үргэлжлэл таасныг LLM рүү холбо." },
      { start: "00:08", duration: "12 мин", title: "LLM ба token", teacherAction: "Autocomplete mental model-ийн хэрэгтэй ба хязгаартай талыг тайлбарлаж, token нь заавал бүтэн үг бишийг жишээгээр үзүүл." },
      { start: "00:20", duration: "13 мин", title: "Context window", teacherAction: "Ажлын ширээ analogy ашиглан prompt, history, files, tool output context эзэлдгийг training knowledge-ээс салга." },
      { start: "00:33", duration: "10 мин", title: "Training ба inference", teacherAction: "Model сургах үе ба одоогийн request-д response үүсгэх үеийг шалгалтад бэлдэх/шалгалт өгөх analogy-гаар ялгуул." },
      { start: "00:43", duration: "12 мин", title: "Hallucination ба uncertainty", teacherAction: "Fluent response нь factual proof биш гэдгийг claim/evidence хүснэгтээр тайлбарла." },
      { start: "00:55", duration: "9 мин", title: "Engineer workflow ба optional setup", teacherAction: "Copy-paste ба evidence-driven flow-г харьцуулж, AI editor-ийг auto-acceptгүй ашиглах дүрэм тогтоо." },
      { start: "01:04", duration: "7 мин", title: "Завсарлага", teacherAction: "Demo chat, terminal, npm registry connection-оо дахин шалгах зуур сурагчдыг амраа." },
      { start: "01:11", duration: "17 мин", title: "Live demo — context ба hallucination", teacherAction: "Project context experiment хийж, дараа нь зохиомол package response-ийг npm view evidence-тэй тулга." },
      { start: "01:28", duration: "17 мин", title: "Guided practice — trust audit", teacherAction: "Хос бүр context experiment, package trap, vague/specific prompt comparison хийж claim audit бөглөнө." },
      { start: "01:45", duration: "9 мин", title: "AI Lab — response audit", teacherAction: "AI өөрийн response-ийг audit хийсэн ч final verification-ийг сурагч tool evidence-ээр гаргахыг шаардана." },
      { start: "01:54", duration: "6 мин", title: "Checkpoint ба wrap-up", teacherAction: "Training/context, hallucination, next-step асуултаар шалгаад Lesson 05-ын HTML ажилд AI verification яаж хэрэглэгдэхийг холбо." },
    ],
  },
  concepts: [
    {
      id: "llm-next-token",
      number: "01",
      title: "LLM бол context-д тохирох дараагийн token-ийг үүсгэдэг model",
      eyebrow: "Large Language Model",
      duration: "8–10 минут",
      whyItMatters:
        "LLM-ийг truth database эсвэл хүний бодолтой яг адил гэж төсөөлбөл fluent response-д хэт итгэнэ. Next-token mental model нь AI яагаад код, тайлбар сайн үүсгэж чаддаг атлаа баримт дээр алдаж болохыг нэг дор ойлгуулна.",
      explanation: [
        "LLM гэдэг нь Large Language Model. Large нь model-ийн хэмжээ болон сургалтын өргөн цар хүрээг, Language нь text/code зэрэг хэлний дараалалтай ажилладгийг, Model нь сурсан pattern дээр тооцоолол хийдэг математик систем гэдгийг хэлнэ.",
        "Prompt болон одоогийн context орж ирэхэд model дараагийн token-уудын боломжит магадлалыг тооцож нэг үргэлжлэл сонгоно. Сонгосон token context-д нэмэгдэж, дараагийн token дахин үүснэ. Энэ давталтаар paragraph, code, plan бий болно.",
        "‘Асар хүчтэй autocomplete’ нь beginner-д хэрэгтэй эхний mental model. Гэхдээ утасны autocomplete-оос асар өргөн pattern, instruction following, reasoning-like behavior үзүүлдэг тул яг ижил жижиг систем гэж ойлгож болохгүй.",
        "Model-ийн гаралтын зорилго нь өгсөн нөхцөлд нийцэх response үүсгэх. Үнэн зөв байдалд сургалт, context, tool access, product behavior, verification бүгд нөлөөлөхөөс next-token generation өөрөө truth guarantee өгөхгүй.",
      ],
      mentalModel: {
        title: "Өгүүлбэр үргэлжлүүлэх маш том тоглоом",
        explanation:
          "Сурагчид өгүүлбэрийн өмнөх хэсгийг хараад боломжит дараагийн үг хэлдэгтэй төстэй. Analogy-ийн хязгаар: LLM нэг хүний зөн совин биш, token distribution болон асар олон parameter ашигласан тооцоолол хийдэг.",
      },
      example: {
        title: "Нэг prompt-оос token дараалал",
        explanation:
          "Model бүтэн final answer-ийг database-аас нэг дор хуулж авах албагүй. Үүссэн хэсэг бүр дараагийн хэсгийн context болно.",
        code: "Prompt → next token → updated context → next token → ... → response",
        language: "text",
      },
      diagram: {
        label: "LLM response үүсэх хялбаршуулсан урсгал",
        nodes: [
          { title: "PROMPT", detail: "Task + context" },
          { title: "MODEL", detail: "Pattern + probabilities" },
          { title: "NEXT TOKEN", detail: "Нэг үргэлжлэл" },
          { title: "REPEAT", detail: "Response ургана" },
        ],
      },
      questions: [
        { question: "LLM хариугаа заавал нэг database row-оос авч байна уу?", answer: "Үгүй. Сурсан pattern болон одоогийн context дээр token дараалуулан response үүсгэдэг." },
        { question: "Next-token model сайн code гаргаж чаддаг нь бүх code зөв гэсэн үг үү?", answer: "Үгүй. Pattern сайн үүсгэж болох ч API, requirement, edge case дээр буруу байж болно; ажиллуулж шалгана." },
      ],
      misconceptions: [
        { claim: "AI хүн шиг дотроо яг ижил аргаар боддог.", correction: "Behavior заримдаа reasoning мэт харагдаж болох ч beginner model-д token generation гэж ойлгох нь хэт anthropomorphic итгэлээс хамгаална." },
        { claim: "LLM-ийн зорилго бол зөвхөн үнэн өгүүлбэр буцаах.", correction: "Response generation нь хэлний нийцэл, instruction, context зэрэгт тулгуурлана; factual truth-ийг тусад нь verify хийх хэрэгтэй." },
      ],
      teachingNotes: [
        "‘AI огт боддоггүй’ гэх туйлширсан философийн маргаанд орохгүй. Инженерийн хэрэгтэй operational model дээр төвлөр.",
        "Сурагчдын autocomplete жишээг самбар дээр probability өндөр/бага үргэлжлэл гэж ангилж, ганц зөв хариу байгаагүйг онцол.",
      ],
      takeaway: "LLM context дээр дараагийн token-уудыг үүсгэдэг; fluent output нь truth database-аас баталгаатай авсан хариу биш.",
    },
    {
      id: "tokens",
      number: "02",
      title: "Token бол model текстийг боловсруулах жижиг нэгж",
      eyebrow: "Word-тэй заавал тэнцэхгүй",
      duration: "7–9 минут",
      whyItMatters:
        "Context size, API cost, latency, output limit бүгд token-тэй холбогдоно. ‘Нэг token = нэг үг’ гэж буруу ойлговол Mongolian, code, punctuation зэрэг input-ийн бодит хэмжээг буруу тооцно.",
      explanation: [
        "Tokenizer text-ийг model-ийн vocabulary дахь жижиг ID дараалал болгон хувиргана. Token нэг бүтэн үг, үгийн хэсэг, punctuation, whitespace pattern эсвэл code symbol байж болно.",
        "Tokenization model болон tokenizer-оос хамаарч өөр. Ижил sentence хоёр model дээр ижил token count-тэй байх албагүй. Англи хэлний ойролцооллыг Монгол текстэд шууд дүрэм болгон ашиглаж болохгүй.",
        "Model character эсвэл human-defined word-оор биш token ID дарааллаар input авч, output token үүсгээд буцааж text болгон decode хийдэг. Beginner түвшинд token-ийг гараар яг тоолох шаардлагагүй; word-тэй адил биш гэдгийг мэдэх нь чухал.",
      ],
      mentalModel: {
        title: "LEGO хэсгүүд",
        explanation:
          "Бүтэн text LEGO байшин, token нь model-ийн ашигладаг хэсгүүд шиг. Зарим том хэсэг бүтэн үг, зарим нь жижиг үгийн хэсэг байж болно. Analogy-ийн хязгаар: tokenizer-ийн хэсгүүд physical утгатай block биш, vocabulary ID юм.",
      },
      example: {
        title: "Word count token count биш",
        explanation:
          "‘Би өнөөдөр сургуульдаа ирлээ.’ гэдэг нь хүний хувьд хэдэн үгтэйг тоолж болно. Гэхдээ tokenizer яг тэр тоогоор token болгоно гэж баттай хэлэхгүй.",
        code: "Text ≠ words only\nText → tokenizer → token IDs → model",
        language: "text",
      },
      diagram: {
        label: "Text-ээс model input хүртэл",
        nodes: [
          { title: "TEXT", detail: "Монгол + code" },
          { title: "TOKENIZER", detail: "Жижиг нэгжид хуваана" },
          { title: "TOKEN IDs", detail: "Тоон дараалал" },
          { title: "MODEL", detail: "Дарааллыг боловсруулна" },
        ],
      },
      questions: [
        { question: "Нэг token үргэлж нэг үг мөн үү?", answer: "Үгүй. Бүтэн үг, үгийн хэсэг, тэмдэг зэрэг байж болно." },
        { question: "Token developer-д ямар гурван зүйлтэй холбогдох вэ?", answer: "Context capacity, latency/speed, API хэрэглээнд cost зэрэгтэй." },
      ],
      misconceptions: [
        { claim: "Space бүр шинэ token үүсгэнэ.", correction: "Tokenization нь tokenizer vocabulary-оос шалтгаална; whitespace нэг хүчин зүйл боловч universal дүрэм биш." },
        { claim: "Word count мэдвэл exact token count мэднэ.", correction: "Ойролцоолол хийж болох ч exact count-д тухайн model-ийн tokenizer/tool хэрэгтэй." },
      ],
      teachingNotes: [
        "Exact tokenizer demo provider-specific байж болох тул token count таалгах тэмцээн бүү болго. Conceptual ялгааг л тогтоо.",
        "42-р хичээлээр API cost/streaming дээр token ойлголт эргэж ирнэ гэж curriculum bridge хий.",
      ],
      takeaway: "Token бол model-ийн text unit; нэг token-ийг нэг үг гэж тогтмол тооцож болохгүй.",
    },
    {
      id: "context-window",
      number: "03",
      title: "Context window бол одоогийн response-д ашиглах хязгаартай ажлын орон зай",
      eyebrow: "Prompt + history + files + tools",
      duration: "10–12 минут",
      whyItMatters:
        "AI зөв ажиллахын тулд project requirement, error, relevant code зэрэг одоогийн мэдээлэл хэрэгтэй. Context дутвал model тааж нөхнө; хэт их хамааралгүй context өгвөл чухал constraint бүдгэрч, token budget зарцуулна.",
      explanation: [
        "Context window нь нэг response үүсгэх үед model авч үзэж чадах token-уудын хязгаартай орон зай. Тэнд system instruction, таны prompt, conversation history, хавсаргасан file, code, tool result зэрэг product-аас хамаарах input орж болно.",
        "Training knowledge болон context хоёр өөр. ‘Манай app-ийн нэр Nomad, color orange’ гэж хэлэхэд model тухайн interaction-д ашиглаж чадна. Энэ нь model-ийн үндсэн weights таны company-д зориулж дахин training хийсэн гэсэн үг биш.",
        "Conversation уртрахад product хуучин мэдээллийг truncate, summarize эсвэл өөрөөр manage хийж болно. Model бүх previous chat болон бүх repository-г автоматаар үргэлж санаж байна гэж таахгүй; яг ямар context өгснөө шалгана.",
        "Сайн context бол хамгийн их text биш. Task-д нөлөөлөх requirement, relevant code, exact error, environment, expected result-ийг сонгож өгөөд irrelevant log, secret, generated file-ийг хасна.",
      ],
      mentalModel: {
        title: "Номын сан ба ажлын ширээ",
        explanation:
          "Training-ийг өмнө уншсан номын сан, context window-г яг одоо ширээн дээр дэлгэсэн материал гэж төсөөл. Ширээн дээрх note-г ашиглах нь номын сангийн бүх номыг дахин хэвлэсэн гэсэн үг биш. Analogy-ийн хязгаар: model knowledge нь номын exact copy хэлбэрээр хадгалагддаггүй.",
      },
      example: {
        title: "Nomad project context",
        explanation:
          "Энэ мэдээллийг өгсний дараа AI target user-ийг зөв хэлбэл current context ашигласан evidence; training-аасаа зохиомол Nomad project-ийг мэдсэн биш.",
        code: "App: Nomad\nPrimary color: orange\nTarget user: university students\nPurpose: assignment tracking",
        language: "text",
      },
      diagram: {
        label: "Response-д оролцох context",
        nodes: [
          { title: "INSTRUCTIONS", detail: "System / rules" },
          { title: "MESSAGES", detail: "Prompt + history" },
          { title: "FILES / TOOLS", detail: "Selected evidence" },
          { title: "CONTEXT WINDOW", detail: "Хязгаартай token space" },
        ],
      },
      questions: [
        { question: "AI-д project name хэлэхэд model дахин training хийж байна уу?", answer: "Үгүй. Тухайн response-д context болгон ашиглаж байна." },
        { question: "Илүү их context үргэлж илүү сайн уу?", answer: "Үгүй. Relevant, sufficient context хэрэгтэй; irrelevant data constraint-ийг бүдгэрүүлж болно." },
      ],
      misconceptions: [
        { claim: "AI chat өмнөх бүх conversation-ийг үүрд яг хэвээр мэднэ.", correction: "Product memory/history behavior өөр; current request-д юу орсныг таахгүй, interface/docs-оор шалгана." },
        { claim: "Context өгсөн нь model-ийг сургаж дууссан гэсэн үг.", correction: "Context inference үед ашиглагдана; training бол model parameters өөрчилдөг тусдаа процесс." },
      ],
      teachingNotes: [
        "Privacy policy, retention, future training бол тусдаа provider policy сэдэв гэдгийг хэл; context/training technical ялгаатай хольж болохгүй.",
        "CLAUDE.md, rules, skills, repository context-ийг дараагийн хичээлүүдэд энэ mental model дээр өргөжүүлнэ гэж холбо.",
      ],
      takeaway: "Context бол яг одоогийн request-д өгсөн хязгаартай мэдээлэл; training биш, мөн бүх data-г автоматаар хамрахгүй.",
    },
    {
      id: "training-inference",
      number: "04",
      title: "Training model-ийг сургана, inference model-ийг ашиглана",
      eyebrow: "Өмнөх суралцах үе ба одоогийн request",
      duration: "7–9 минут",
      whyItMatters:
        "Training/context-ийг андуурвал AI-д нэг fact хэлэх, fine-tune хийх, chat history хадгалах, provider data policy зэрэг огт өөр үйл явцыг нэг зүйл гэж буруу дүгнэнэ.",
      explanation: [
        "Training үед model олон example-оос statistical pattern сурах тооцоолол хийгдэж, parameters/weights өөрчлөгдөнө. Энэ нь их data, compute, evaluation шаардсан model development үе.",
        "Inference үед бэлэн trained model таны prompt болон context-оос output үүсгэнэ. Өдөр тутам AI chat-д асуулт асуух, code suggestion авах нь ихэвчлэн inference interaction.",
        "Нэрээ prompt-д хэлээд дараагийн message-д AI нэрээр дуудах нь context ашигласан жишээ. Provider таны conversation data-г хадгалах эсвэл future training-д ашиглах эсэх нь product, account, policy, settings-ээс хамаарах тусдаа privacy асуулт.",
      ],
      mentalModel: {
        title: "Шалгалтаас өмнө сурах ба шалгалт дээр бодох",
        explanation:
          "Training бол олон жил сурах, inference бол бэлэн мэдлэг/чадвараа тухайн бодлогод ашиглахтай төстэй. Analogy-ийн хязгаар: model human memory/understanding-тай ижил механизмтай гэсэн үг биш.",
      },
      example: {
        title: "Нэг request model training биш",
        explanation:
          "Prompt өгөөд response авахад model-ийн үндсэн weights тэр даруй таны нэг өгүүлбэрээр өөрчлөгдөж байна гэж үзэхгүй.",
        code: "TRAINING: data → optimization → changed weights\nINFERENCE: trained model + context → response",
        language: "text",
      },
      diagram: {
        label: "Training ба inference-ийн тусдаа урсгал",
        nodes: [
          { title: "TRAINING DATA", detail: "Pattern examples" },
          { title: "TRAINING", detail: "Weights өөрчлөгдөнө" },
          { title: "TRAINED MODEL", detail: "Бэлэн system" },
          { title: "INFERENCE", detail: "Prompt → response" },
        ],
      },
      questions: [
        { question: "Claude/ChatGPT-д нэрээ хэлэх болгонд үндсэн model дахин training хийх үү?", answer: "Үгүй. Нэр context-д ашиглагдаж болно; data policy тусдаа." },
        { question: "Parameters голчлон аль үед өөрчлөгдөх вэ?", answer: "Training/optimization үед. Ердийн inference request-д үндсэн weights-ийг шууд өөрчлөхгүй." },
      ],
      misconceptions: [
        { claim: "Inference гэдэг нь Internet-ээс хайх.", correction: "Inference бол model output үүсгэх үе; web search/tool use байж болох ч тусдаа capability." },
        { claim: "Training data бол current prompt-тэй ижил.", correction: "Training data model development-д өмнө ашиглагдсан; current prompt inference context-ийн хэсэг." },
      ],
      teachingNotes: [
        "Fine-tuning, RAG, embeddings-ийг зөвхөн нэрлэж, энэ beginner distinction-ийг бүдгэрүүлэхгүй.",
        "‘Model мэддэг’ хэллэг хэрэглэх үед training knowledge, current context, tool result-ийн аль нь болохыг сурагчдаар нэрлүүл.",
      ],
      takeaway: "Training weights өөрчилж model бүтээнэ; inference бэлэн model-д current context өгч response авна.",
    },
    {
      id: "hallucination",
      number: "05",
      title: "Hallucination бол үнэмшилтэй боловч баталгаагүй эсвэл буруу output",
      eyebrow: "Confidence ≠ correctness",
      duration: "10–12 минут",
      whyItMatters:
        "AI байхгүй package, API, command, citation зохиовол developer security issue, data loss, production bug үүсгэж болно. Хариултын өнгө аяс биш claim-ийн эрсдэл, нотолгоо хоёр шийдвэрийг удирдах ёстой.",
      explanation: [
        "Hallucination гэдэг нь model factual хувьд буруу, эх сурвалжгүй эсвэл өгсөн context-тэй зөрчилтэй text/code-ийг үнэмшилтэй үүсгэх үзэгдэл. Бүх response бүхэлдээ худал байх албагүй; зөв тайлбарын дунд нэг буруу package name байж болно.",
        "Context дутуу, question ambiguous, false premise, uncommon/current information, эх сурвалж/tool байхгүй үед эрсдэл нэмэгдэж болно. Гэхдээ сайн prompt hallucination-ийг тэг болгохгүй.",
        "Model ‘би итгэлтэй байна’ эсвэл citation өгсөн нь evidence биш. Package бол registry, browser claim бол DevTools, API бол official docs, code бол runtime/test, repository change бол diff/log ашиглана.",
        "Uncertainty илэрхийлсэн response ихэнхдээ илүү ашигтай: мэдэхгүйгээ хэлэх, шалгах алхам санал болгох, factual claim-ээ source-тэй холбоход инженер final decision хийх боломж нэмэгдэнэ.",
      ],
      mentalModel: {
        title: "Маш сайн ярьдаг боловч эх сурвалжгүй туслах",
        explanation:
          "Туслах fluent тайлбар өгч чадна, гэхдээ invoice/package/document бодитоор байгаа эсэхийг бүртгэлээс шалгана. Analogy-ийн хязгаар: model санаатай худал хэлж байна гэсэн үг биш; output mechanism нь truth guarantee-гүй.",
      },
      example: {
        title: "Зохиомол npm package",
        explanation:
          "AI package-ийн install/API зохиож магадгүй эсвэл мэдэхгүйгээ зөв хэлж болно. Аль ч тохиолдолд registry бол бодит existence evidence.",
        code: "npm view devx-llm-lesson4-package-88421",
        language: "bash",
      },
      diagram: {
        label: "AI claim-аас инженерийн шийдвэр хүртэл",
        nodes: [
          { title: "AI OUTPUT", detail: "Claim" },
          { title: "RISK", detail: "Хэр ноцтой?" },
          { title: "EVIDENCE", detail: "Registry/docs/test" },
          { title: "DECISION", detail: "Accept / edit / reject" },
        ],
      },
      questions: [
        { question: "AI мэдэхгүй гэж хэлбэл муу response мөн үү?", answer: "Заавал биш. Uncertainty зөв илэрхийлж, шалгах зам өгсөн бол зохиомол confidence-оос илүү найдвартай." },
        { question: "AI package install command өгвөл эхний evidence юу вэ?", answer: "Package-ийн official registry/repository/documentation; npm package бол npm view эсвэл npm registry page." },
      ],
      misconceptions: [
        { claim: "AI маш итгэлтэй, дэлгэрэнгүй ярьсан учраас зөв.", correction: "Style correctness-ийг нотлохгүй. Claim бүрийг тохирох independent evidence-ээр шалгана." },
        { claim: "AI-аар хариуг нь дахин шалгуулахад verification дуусна.", correction: "AI self-review тусалж болно, гэхдээ final evidence model-оос үл хамаарах tool/runtime/docs байх ёстой." },
      ],
      teachingNotes: [
        "Demo-д AI package зохиохыг заавал хүлээхгүй. Refusal/uncertainty гарвал яагаад сайн болохыг discussion болго.",
        "Medical/legal high-stakes жишээг гүнзгийрүүлэхгүй; developer-ийн package, command, API, code claim дээр төвлөр.",
      ],
      takeaway: "AI-ийн confidence биш, registry/docs/runtime/diff evidence factual claim-ийг батална.",
    },
    {
      id: "engineer-workflow",
      number: "06",
      title: "AI output бол final answer биш — инженер review, verify, decide хийнэ",
      eyebrow: "Copy-paste-аас evidence-driven workflow руу",
      duration: "8–10 минут",
      whyItMatters:
        "AI coding assistant command, file edit, dependency, architecture санал болгож чадна. Context, scope, diff, test-ээ хянахгүй auto-accept хийвэл хурдан мэт боловч ойлгоогүй эрсдэл project-д орно.",
      explanation: [
        "Copy-paste workflow-д problem бүдэг, environment тодорхойгүй, response-ийг review хийхгүй шууд ажиллуулдаг. AI юу мэдэхгүй байгааг нэрлээгүй учраас generic эсвэл аюултай command ч итгэлтэй гарч болно.",
        "Engineer workflow: problem-оо тодорхойлно, evidence цуглуулна, relevant context өгнө, AI suggestion авна, claim/diff-ийг review хийнэ, tool/test/docs-оор verify хийгээд эцэст нь өөрөө apply/reject шийдвэр гаргана.",
        "AI editor/agent ашиглавал эхэнд Manual/Ask/Plan төрлийн reviewable mode сонгож, auto-accept унтраана. Repository clean эсэхийг status-аар, proposed change-ийг diff-ээр, behavior-ийг runtime/test-ээр шалгана.",
        "Privacy нь workflow-ийн өмнөх gate: secret, API key, token, user data, private code-г provider policy/permission ойлголгүй prompt-д оруулахгүй. Redact хийсэн ч task-д шаардлагатай context үлдсэн эсэхийг шалгана.",
      ],
      mentalModel: {
        title: "Junior proposal, senior review",
        explanation:
          "AI output-ийг junior engineer-ийн proposal шиг авч үз: хэрэгтэй санаа байж болно, гэхдээ owner нь diff, test, requirements-ээр review хийж шийднэ. Analogy-ийн хязгаар: AI хүн биш, accountability/intent өөрөө эзэмшихгүй.",
      },
      example: {
        title: "Optional Claude Code / AI editor setup",
        explanation:
          "Access байгаа үед official installer ашиглаад version шалгана. Access байхгүй бол AI chat-аар lab бүрэн хийгдэнэ. Install command өөрчлөгдөж болох тул class-аас өмнө official quickstart-тай тулгана.",
        code: "# macOS / Linux / WSL\ncurl -fsSL https://claude.ai/install.sh | bash\n\n# Windows PowerShell\nirm https://claude.ai/install.ps1 | iex\n\n# Verify and start\nclaude --version\nclaude",
        language: "bash",
      },
      diagram: {
        label: "AI-тай инженерийн ажлын урсгал",
        nodes: [
          { title: "PROBLEM", detail: "Goal + evidence" },
          { title: "CONTEXT", detail: "Relevant + safe" },
          { title: "AI OUTPUT", detail: "Proposal" },
          { title: "VERIFY", detail: "Diff/test/docs" },
          { title: "ENGINEER", detail: "Decides" },
        ],
      },
      questions: [
        { question: "AI response гарсан даруй дараагийн алхам юу вэ?", answer: "Review хийж claim болон proposed change-ийг тодорхойлоод, тохирох evidence-ээр verify хийх." },
        { question: "Auto-accept яагаад beginner-д default биш вэ?", answer: "Өөрчлөлтийн scope, reason, risk-ийг харалгүй project-д оруулах тул reasoning ба accountability алдагдана." },
      ],
      misconceptions: [
        { claim: "AI code compile хийсэн бол engineer review хэрэггүй.", correction: "Compile нь syntax/type-ийн зарим claim шалгана; requirement, accessibility, security, behavior, maintainability-г бүрэн батлахгүй." },
        { claim: "AI ашиглавал Git хэрэггүй.", correction: "AI-тай үед жижиг commit, clean state, diff review бүр илүү чухал хамгаалалтын тор болно." },
      ],
      teachingNotes: [
        "Install demo хийхээс өмнө class device policy болон account requirement-ийг хэл. Setup failure-г AI theory objective-оос тусгаарла.",
        "Extension дээр Manual mode/diff review боломж байвал харуул; exact UI version-оор өөр байж болохыг тэмдэглэ.",
      ],
      takeaway: "AI санал гаргана; инженер context-ээ хамгаалж, output-ийг review/verify хийгээд final шийдвэр гаргана.",
    },
  ],
  liveDemo: {
    title: "Context мэдлэг биш, confidence evidence биш",
    duration: "17 минут",
    goal:
      "Багш нэг AI chat дотор context experiment болон зохиомол package trap хийж, response-ийг terminal registry evidence-тэй тулган хоёр гол mental model-ийг бодитоор үзүүлнэ.",
    setup: [
      "Private history-гүй шинэ AI chat, projector-д уншигдах zoom, terminal-аа зэрэг нээ.",
      "Terminal current folder ямар ч project data өөрчлөхгүй safe folder байж болно; npm view read-only registry query гэдгийг тайлбарла.",
      "Зохиомол package name registry-д байхгүйг class-аас өмнө шалга. Network байхгүй бол бэлдсэн npm error output screenshot/text ашигла.",
      "AI response unpredictable: зохиовол hallucination, татгалзвал uncertainty-ийн сайн жишээ гэж хоёр branch-ийн тайлбар бэлд.",
    ],
    steps: [
      { title: "Context-гүй асуултын хязгаарыг харуулах", instruction: "Шинэ chat-д ‘Манай app-ийн primary color юу вэ?’ гэж асуу.", observe: "AI мэдэхгүйгээ хэлэх, clarification асуух эсвэл таамаглах боломжтой.", explain: "Task-д шаардлагатай project context өгөөгүй. Model-ийн response ямар ч байсан missing evidence хэвээр." },
      { title: "Зохиомол project context өгөх", instruction: "Nomad app-ийн нэр, orange color, university student target, assignment tracking purpose-ийг өгөөд 3 bullet-оор буцааж хэлүүл.", code: { title: "Context experiment prompt", language: "prompt", code: "Манай зохиомол app-ийн нэр Nomad.\nPrimary color: orange.\nTarget user: university students.\nPurpose: assignment tracking.\n\nОдоохондоо шийдэл бүү санал болго. Ойлгосон context-оо 3 bullet-оор буцааж хэл." }, observe: "Response өгсөн дөрвөн fact-ийг context-оос давтаж байна.", explain: "AI Nomad-ийн тухай training-аас мэдээгүй; бид current context-д өгсөн." },
      { title: "Follow-up-аар context ашиглуулах", instruction: "‘Манай app хэнд зориулагдсан бэ?’ гэж асуугаад source-ийг сурагчдаар нэрлүүл.", observe: "University students гэж хариулна.", explain: "Correct answer-ийн evidence нь previous message. Энэ нь model weights өөрчлөгдсөн нотолгоо биш." },
      { title: "Package hallucination trap өгөх", instruction: "Шинэ chat нээгээд зохиомол package юу хийдэг, install command, 3 API function асуу.", code: { title: "Package claim prompt", language: "prompt", code: "Explain the npm package \"devx-llm-lesson4-package-88421\".\nTell me:\n1. what it does\n2. how to install it\n3. three API functions\n\nIf you cannot verify that it exists, say so clearly and give me a registry check instead of inventing details." }, observe: "AI зохиомол detail өгөх эсвэл existence-ийг verify хийж чадахгүйгээ хэлнэ.", explain: "Prompt uncertainty хүссэн ч registry evidence-ийг орлохгүй." },
      { title: "Claim-ийг registry-ээр шалгах", instruction: "Terminal-д npm view command ажиллуулж exact output-ийг харуул.", code: { title: "Independent registry verification", language: "bash", code: "npm view devx-llm-lesson4-package-88421" }, observe: "Ихэнхдээ npm E404 / package not found төрлийн output гарна.", explain: "Registry package existence claim-ийг шалгалаа. Network/auth өөр error гарвал package байхгүй гэж яарахгүй, error type-ийг уншина." },
      { title: "AI claim ба evidence-ийг салгах", instruction: "Самбар дээр Claim / Evidence / Decision гэсэн 3 багана үүсгэж install command, API names, registry result-ийг байрлуул.", observe: "AI text claim; npm output evidence; decision reject/uncertain байна.", explain: "AI өөрөө татгалзсан ч registry шалгалт workflow хэвээр. Hallucination барих биш verification хийх нь зорилго." },
      { title: "Engineer rule-ээр demo-г хаах", instruction: "AI OUTPUT → REVIEW → VERIFY → DECIDE урсгалыг сурагчдаар хамт уншуул.", observe: "Final decision-ийг AI биш багш/инженер нэрлэж байна.", explain: "Дараагийн HTML/CSS хичээлүүдэд browser, validator, DevTools, Git diff энэ VERIFY шат болно." },
    ],
    expectedOutput: [
      "Nomad-ийн target user өмнөх context-оос зөв буцаж ирсэн байна.",
      "Сурагч context болон training-ийг нэг зүйл гэж нэрлээгүй байна.",
      "Package response зохиосон эсвэл uncertainty хэлсэн аль нь болохыг exact байдлаар тэмдэглэсэн байна.",
      "npm view output package existence-ийн independent evidence болсон байна.",
      "AI claim, tool evidence, engineer decision гурвыг тусдаа бичсэн байна.",
    ],
    recovery: [
      "AI package байдаг гэж зохиохгүй: сайн uncertainty behavior гэж тайлбарлаад registry verification-ээ үргэлжлүүл.",
      "Package name үнэхээр бүртгэгдсэн: нэрийн suffix-ийг өөрчилж registry-д дахин шалгасны дараа prompt ашигла.",
      "npm network error: E404 гэж дүр эсгэхгүй. Бэлдсэн output ашиглаж network failure ба not-found evidence ялгаатайг хэл.",
      "AI chat access байхгүй: багшийн хадгалсан хоёр response-ийг pair audit материал болгон ашигла.",
      "Student secret paste хийсэн: projector share-ийг зогсоож, sensitive content exposure protocol-оо дага; chat history-г ангийн өмнө дахин харуулахгүй.",
    ],
  },
  guidedPractice: {
    title: "Can you trust the AI? — context, claim, evidence",
    duration: "17 минут",
    goal:
      "Хос бүр AI response-ийг ашиглах бус, source-ийг нь нэрлэж, claim болгон задалж, model-оос үл хамаарах evidence-ээр шалгах бүрэн workflow хийнэ.",
    instructions: [
      "AI ашиглахын өмнө LLM, token, context window, hallucination-ийг тус бүр нэг өгүүлбэрээр өөрсдөө бич.",
      "Nomad project-ийн дөрвөн fact-ийг AI-д өгч ойлгосноо 3 bullet-оор буцаалгана.",
      "‘Target user хэн бэ?’ follow-up асуугаад answer training-аас уу, context-оос уу гэдгийг evidence-тэй тэмдэглэ.",
      "Зохиомол npm package prompt-ийг өгөөд response-ийн existence, install, API claim-үүдийг тусдаа мөр болго.",
      "npm view devx-llm-lesson4-package-88421 ажиллуулж exact output-ийг хадгал; error type-ийг таахгүй унш.",
      "‘My Git doesn’t work. Fix it.’ болон OS + command + exact error + no-change constraint бүхий prompt-ийг харьцуулж missing context жагсаа.",
      "Claim / Evidence / Decision хүснэгтэд дор хаяж 4 мөр бөглөж, нэг claim-д ‘тодорхойгүй’ сонголт ашигла.",
      "Хосын нэг хүн 60 секундэд AI OUTPUT → REVIEW → VERIFY → DECIDE flow-г өөрийн жишээгээр тайлбарла.",
    ],
    constraints: [
      "AI text-ийг evidence баганад дангаар нь бичихгүй.",
      "Байхгүй package-ийг install хийхгүй; зөвхөн npm view read-only query ашиглана.",
      "Password, token, API key, private repository code, personal data prompt-д оруулахгүй.",
      "AI response-ийг өөрсдийн дөрвөн тодорхойлолтын оронд бүхэлд нь хуулж солихгүй.",
      "Tool error-ийн exact text-ийг хадгалж, E404 биш error-ийг package байхгүй гэж дүгнэхгүй.",
    ],
    hints: [
      "Context source нь previous message; training source нь model development-ийн өмнөх pattern learning.",
      "AI claim-ийг шалгах tool сонгохдоо claim ямар system-ийн тухай болохыг асуу: package → registry, request → Network, code → runtime/test.",
      "Vague Git prompt-д OS, current folder, exact command, output, goal, constraint дутсан эсэхийг шалга.",
      "‘Тодорхойгүй’ гэдэг нь алдаа биш; хангалттай evidence байхгүйг үнэн зөв нэрлэсэн state.",
    ],
    expectedResult: [
      "Дөрвөн ойлголтын өөрийн тайлбар AI-аас өмнө бичигдсэн байна.",
      "Nomad answer current context-оос ирснийг зөв тайлбарласан байна.",
      "Package response-ийн claim-үүд npm output-оос тусдаа хадгалагдсан байна.",
      "Дор хаяж 4 claim evidence/decision-тэй бөгөөд нэг нь тодорхойгүй байна.",
      "Vague prompt-ийн missing context болон improved prompt-ийн ялгааг нэрлэсэн байна.",
    ],
    stretchTask:
      "AI response дахь нэг current/factual claim-д official documentation хэрэгтэй эсэхийг тодорхойлоод source URL, last-updated context, claim яг аль sentence-ээр батлагдаж байгааг тэмдэглэ.",
    debriefQuestions: [
      { question: "AI зөв хариулсан үед verification хэрэггүй болсон уу?", answer: "Үгүй. Зөв эсэхийг мэдэх үндэс нь verification evidence; response таарсан нь workflow-г баталж байна." },
      { question: "Ямар context response-ийн чанарт хамгийн их нөлөөлсөн бэ?", answer: "Task-д шууд хэрэгтэй environment, exact error/facts, goal, no-change constraint зэрэг relevant context." },
    ],
  },
  aiLab: {
    title: "AI audit өөрөө final evidence биш",
    duration: "9 минут",
    goal:
      "Сурагч AI-аар claim table үүсгүүлээд, table-ийн дүгнэлт бүрийг model-оос үл хамаарах evidence-тэй тулгаж final decision-ийг өөрөө гаргана.",
    prompt: `Доорх AI response-ийг senior engineer шиг аудитла.

--- RESPONSE START ---
[Package, Git эсвэл web explanation response-оо энд хуул]
--- RESPONSE END ---

Claim бүрийг хүснэгт болго:
- Claim
- Ямар independent evidence хэрэгтэй
- Одоогоор батлагдсан эсэх: тийм / үгүй / тодорхойгүй
- Буруу бол эрсдэл: бага / дунд / өндөр

Дүрэм:
- Байхгүй source, test result, package, command output бүү зохио.
- AI response өөрөө evidence биш.
- Мэдэхгүй бол ‘тодорхойгүй’ гэж бич.
- Эцэст нь engineer шалгах дарааллыг өг, final decision бүү гарга.`,
    steps: [
      { title: "Өндөр эрсдэлтэй 4 claim сонгох", instruction: "Install command, package existence, file-changing command, factual architecture зэрэг шалгах боломжтой claim сонго.", observe: "Opinion/wording биш бодитоор үнэн/худал байж болох statement сонгосон байна.", explain: "Risk өндөр claim-д verification priority өгнө." },
      { title: "AI audit table авах", instruction: "Prompt-д response-оо оруулаад table-ийн evidence suggestion бүрийг review хий.", observe: "AI өөрийгөө source болгосон эсэх, uncertainty ашигласан эсэх.", explain: "Audit хийж буй model мөн hallucinate хийж болно." },
      { title: "Independent evidence цуглуулах", instruction: "Дор хаяж хоёр claim-ийг npm view, DevTools, git status/diff эсвэл official docs-оор шалга.", observe: "Exact output/field/source section хадгалагдсан байна.", explain: "Evidence claim-тай шууд холбоотой байх ёстой." },
      { title: "Audit-ийг засах", instruction: "AI table-ийн incorrect/unsupported status-ийг өөр evidence-ээр засаж, reason бич.", observe: "AI audit final answer гэж үлдээгүй.", explain: "Engineer model-оос үл хамаарах evidence-ээр status update хийж байна." },
      { title: "Final decision ба Git evidence", instruction: "Accept/edit/reject шийдвэрээ бичээд audit note-ийн git diff-ийг review хий.", expected: "Decision бүр evidence reference-тэй; secret ороогүй; audit note жижиг commit-д бэлэн байна." },
    ],
    verificationTable: [
      { claim: "Package бодитоор байна", evidence: "npm view exact package name / official registry", pass: "Metadata бодитоор ирсэн эсвэл E404-г зөв тайлбарласан" },
      { claim: "Command аюулгүй", evidence: "Official docs/help + command effect + safe environment", pass: "Read-only эсвэл intended scope тодорхой, destructive side effect байхгүй" },
      { claim: "Web flow зөв", evidence: "DevTools Network fields + Lesson 01 model", pass: "Method/status/content-type болон claim хоорондоо нийцсэн" },
      { claim: "Audit note зөв scope-тэй", evidence: "git diff -- lesson-04-ai-audit.md", pass: "Зөвхөн intended note, secret/irrelevant change байхгүй" },
    ],
    teacherNotes: [
      "AI audit нь original response-оос илүү гоё table өгсөн ч evidence нэмэгдээгүй байж болохыг асуу.",
      "Сурагч өөрөө AI-ийн conclusion-ийг зассан бол lab-ийн хамгийн сайн evidence гэж үнэл.",
      "Time богино бол 4 claim бичээд 2-ыг бодитоор verify, үлдсэн 2-ыг тодорхойгүй гэж шударгаар үлдээхийг зөвшөөр.",
    ],
  },
  checkpoint: {
    duration: "6 минут",
    instructions:
      "AI ашиглахгүйгээр эхний хариугаа бич. Application асуултад claim болон independent evidence хоёрыг заавал тусад нь нэрлэ.",
    questions: [
      { type: "concept", question: "LLM response хэрхэн үүсгэдгийг beginner mental model-оор тайлбарла.", answer: "Prompt/context дээр дараагийн token-ийн боломжит үргэлжлэлийг сонгож, token-ийг context-д нэмээд давтан response үүсгэнэ." },
      { type: "concept", question: "Token заавал нэг үг мөн үү?", answer: "Үгүй. Үг, үгийн хэсэг, тэмдэг зэрэг tokenizer-оос хамаарах жижиг нэгж байж болно." },
      { type: "concept", question: "Training болон context-ийн ялгаа юу вэ?", answer: "Training model weights/pattern-ийг өмнө сургадаг; context current inference request-д өгсөн хязгаартай мэдээлэл." },
      { type: "application", question: "AI ‘энэ npm package байдаг’ гэж хэлбэл ямар evidence сонгох вэ?", answer: "Exact package name-ийг official npm registry/npm view-ээр шалгана; AI response өөрөө evidence биш." },
      { type: "application", question: "AI command итгэлтэй өгсөн ч OS, folder, error мэдэхгүй байна. Дараагийн алхам юу вэ?", answer: "Ажиллуулахгүй. Missing context цуглуулж, command effect-ийг тайлбарлуулж, official docs/read-only check-ээр verify хийнэ." },
      { type: "application", question: "‘AI-тай инженер шиг ажиллах’ гэдгийг өөрийн үгээр нэг workflow болгон хэл.", answer: "Problem/evidence цуглуулах → relevant safe context өгөх → output review → independent verification → engineer accept/edit/reject шийдвэр. Rubric: final authority ба evidence хоёрыг нэрлэсэн байна." },
    ],
  },
  wrapUp: {
    summary: [
      "LLM context дээр дараагийн token-уудыг үүсгэн response бүтээдэг.",
      "Token бүтэн үгтэй заавал тэнцэхгүй бөгөөд context/cost/latency-тэй холбоотой.",
      "Context window current request-ийн хязгаартай ажлын орон зай; training биш.",
      "Training weights өөрчилж model сургана; inference бэлэн model-оос response авна.",
      "Hallucination fluent боловч factual буруу/баталгаагүй output байж болно.",
      "AI response, source citation, confidence аль нь ч independent evidence-ийг орлохгүй.",
      "Engineer problem → context → output → review → verify → decide урсгалыг эзэмшинэ.",
      "Secret/private data-г AI-д өгөхөөс өмнө permission, policy, relevance-ийг шалгана.",
    ],
    abilities: [
      "LLM-ийн үндсэн ойлголтуудыг developer түвшинд тайлбарлах",
      "Current context болон training knowledge-ийг ялгах",
      "AI claim-д тохирох verification tool сонгох",
      "AI output-ийг accept/edit/reject шийдвэртэй audit хийх",
      "AI editor/CLI-г auto-acceptгүй, Git хамгаалалттай эхлүүлэх",
    ],
    beforeNextLesson: [
      "lesson-04-ai-audit.md файлд context experiment болон 4 claim audit-аа хадгал",
      "git diff-ээ уншаад зөвхөн audit note-оо ‘Audit an AI explanation with evidence’ message-ээр commit хий",
      "Optional Claude Code/AI editor setup хийсэн бол version output болон access issue-гээ secret-гүй тэмдэглэ",
      "Lesson 05-д ашиглах lesson-05-html folder болон хоосон index.html бэлд",
    ],
    finalModel:
      "LLM output = generated proposal, not truth → REVIEW claims → VERIFY with tools/docs/runtime/diff → ENGINEER decides",
    exitTicket: [
      { question: "LLM яагаад буруу зүйлээ итгэлтэй хэлж чаддаг вэ?", answer: "Context-д нийцэх token output үүсгэдэг болохоос factual truth-ийг заавал database-аас шалгаж баталгаажуулдаггүй." },
      { question: "Context болон training-ийн ялгаа юу вэ?", answer: "Training model-ийг өмнө сургадаг; context тухайн inference request-д өгсөн мэдээлэл." },
      { question: "AI response авсны дараагийн ганц үгтэй дүрэм юу вэ?", answer: "Verify." },
    ],
    nextLesson: {
      title: "Lesson 05 — HTML бүтэц ба семантик",
      connection:
        "Одоо AI code тайлбар эсвэл markup санал болгосон ч шууд зөв гэж үзэхгүй workflow-той боллоо. Дараагийн хичээлээр HTML-ийн бодит дүрэм, semantic structure, browser Elements evidence сурч, AI-ийн markup-ийг шалгах domain knowledge-ээ эхлүүлнэ.",
    },
    teacherClose:
      "“AI-д code бичүүлж чаддаг байх нь дангаараа инженерийн чадвар биш. AI-ийн output ямар claim хийж байгааг таньж, зөв evidence-ээр шалгаад шийдвэр гаргах нь инженерийн чадвар.” гэж хаа.",
  },
};
