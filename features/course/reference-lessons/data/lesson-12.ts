import type { ReferenceLesson } from "../types";

export const lesson12Reference: ReferenceLesson = {
  id: 12,
  durationMinutes: 120,
  teachStyle: "tutorial",
  teacherGoal:
    "Сурагч AI ecosystem-ийн үндсэн давхаргуудыг ялгаж, Chat, Editor, CLI agent, API-аас ажилдаа тохирохыг сонгоно. Мөн model сонгох, cloud/local хувилбар болон cost-ийг харьцуулах арга сурна.",
  teachContent: {
    eyebrow: "Decision tutorial · Week 03",
    title: "Агуулга — AI ecosystem-ийг ойлгож, зөв хэрэгслээ сонгох",
    introduction:
      "Энэ хичээл 5 хэсэгтэй: ecosystem-ийн давхаргууд, AI хэрэгслүүд, model сонгох арга, cloud/local ялгаа, token ба cost.",
    chapterLabel: "LESSON 12 — 5 ҮНДСЭН ХЭСЭГ",
  },
  resources: [
    {
      title: "OpenAI API pricing",
      description:
        "Одоогийн input, cached input, output болон tool pricing-ийг шалгах.",
      href: "https://openai.com/api/pricing/",
    },
    {
      title: "OpenAI token pricing guide",
      description:
        "Token category, model rate, output limit ба usage-ийн тайлбар.",
      href: "https://help.openai.com/en/articles/4936856",
    },
    {
      title: "Anthropic pricing",
      description:
        "Current model, caching, batch болон feature pricing-ийг тулгах.",
      href: "https://docs.anthropic.com/en/docs/about-claude/pricing",
    },
    {
      title: "Ollama quickstart",
      description:
        "Local runtime, model ажиллуулах ба local API-ийн одоогийн заавар.",
      href: "https://docs.ollama.com/quickstart",
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
      "Provider, model, product/tool, runtime гэсэн давхаргыг ялгах.",
      "Chat, Editor, CLI agent, API-ийн үүрэг, context, permission-ийг тайлбарлах.",
      "Task-д тохирох model-ийг quality, speed, context, cost-оор сонгох.",
      "Cloud болон local model-ийн давуу, сул тал, зардлыг харьцуулах.",
      "Token usage ашиглан API cost-ийн энгийн тооцоо хийх.",
    ],
    prerequisites: [
      "Хичээл 04-ийн token, context window, inference, hallucination mental model",
      "Хичээл 08-ын task/context/constraints/acceptance бүхий prompt ба hypothesis → test давталт",
      "Хичээл 09–11-ийн HTML/CSS layout болон DevTools evidence",
      "Хичээл 03-ын Git status/diff/commit ба reversible change ойлголт",
    ],
    tools: [
      "Browser + official pricing/model documentation",
      "Cloud AI chat эсвэл байгууллагын зөвшөөрсөн provider",
      "Ollama local runtime — урьдчилан суусан бол; fallback нь teacher-provided output",
      "VS Code/editor + small HTML/CSS sandbox",
      "Spreadsheet эсвэл calculator + lesson-12-decision-log.md",
      "Terminal + Git — agent permission demo-д",
    ],
    outcomes: [
      "AI ecosystem-ийн layer бүрийг бодит жишээгээр тайлбарлана.",
      "Нэг frontend task-д тохирох AI хэрэгслийг сонгоно.",
      "Хоёр model-ийг ижил task, rubric-аар харьцуулна.",
      "Cloud/local сонголтын cost ба privacy ялгааг тайлбарлана.",
      "Official price ашиглан request болон сарын cost estimate гаргана.",
    ],
    preparation: [
      "Хичээлийн өдөр resources хэсгийн official links нээгдэж буй, pricing page-ийн валют/нэгж/огноог шалга; static slide дээрх хуучин үнэ бүү хэрэглэ.",
      "Ollama ашиглах бол хичээлээс өмнө official quickstart дагуу суулгаж, нэг сургалтын зөвшөөрсөн жижиг model-ийг татаж ажиллуул; анги дээр том download бүү эхлүүл.",
      "Local runtime боломжгүй сурагчдад ижил prompt-ийн teacher-captured raw output өг; hardware-ийн боломжийг learning score болгохгүй.",
      "Cloud account/API key шаардахгүй fallback бэлд. API key, .env, private code, student personal data-г screen/prompt-д гаргахгүй.",
      "Нэг зориуд bug-тэй responsive card snippet, browser test page, cloud/local outputs, day-of price worksheet бэлд.",
      "Agent demo хийх бол clean disposable repository, limited working directory, no secrets, no network/deploy permission ашигла.",
    ],
    timeline: [
      {
        start: "00:00",
        duration: "8 мин",
        title: "AI ecosystem гэж юу вэ?",
        teacherAction:
          "AI product-ийн ард provider, model, tool, runtime гэсэн өөр хэсгүүд байдгийг нэг зураглалаар харуул.",
      },
      {
        start: "00:08",
        duration: "10 мин",
        title: "1. Ecosystem-ийн давхаргууд",
        teacherAction: "Давхарга бүрийг тодорхойлолт + бодит жишээгээр ялгуул.",
      },
      {
        start: "00:18",
        duration: "13 мин",
        title: "2. Chat, Editor, CLI agent, API",
        teacherAction:
          "Tool бүр юу хийдэг, ямар context ба permission шаарддагийг хүснэгтээр тайлбарла.",
      },
      {
        start: "00:31",
        duration: "17 мин",
        title: "3. Model сонгох арга",
        teacherAction:
          "Task, quality, context, speed, cost, verification гэсэн дарааллаар хоёр model харьцуул.",
      },
      {
        start: "00:48",
        duration: "12 мин",
        title: "4. Cloud ба local model",
        teacherAction:
          "Ялгаа, privacy, hardware, initial болон running cost-ийг нэг хүснэгтээр харьцуул.",
      },
      {
        start: "01:00",
        duration: "10 мин",
        title: "5. Token, context, cost",
        teacherAction:
          "Context window, input/output token, нэг request-ийн cost formula-г нэг жишээгээр бод.",
      },
      {
        start: "01:10",
        duration: "14 мин",
        title: "Live demo — cloud/local нэг task",
        teacherAction:
          "Ижил CSS bug prompt-ийг cloud ба local candidate-д өгч, response-ийг browser DevTools test болон elapsed time/cost fields-ээр харьцуул.",
      },
      {
        start: "01:24",
        duration: "18 мин",
        title: "Guided Practice — tool + cost",
        teacherAction:
          "Хос бүр дөрвөн scenario-д tool сонгож, нэг API scenario-ийн сарын cost estimate бодно.",
      },
      {
        start: "01:42",
        duration: "10 мин",
        title: "AI Lab — output benchmark",
        teacherAction:
          "Ижил task/input/rubric-аар хоёр candidate output-ийг blind-ish үнэлж, runtime evidence-гүй claim-ийг fail хийлгэ.",
      },
      {
        start: "01:52",
        duration: "6 мин",
        title: "Checkpoint",
        teacherAction:
          "Layer, permission, local/cloud, token formula, verification гэсэн reasoning асуултад AI-гүй хариулуул.",
      },
      {
        start: "01:58",
        duration: "2 мин",
        title: "Next lesson bridge",
        teacherAction:
          "Tool сонголтын mental model-ийг CSS motion implementation-д AI санал шалгах ажил руу холбо.",
      },
    ],
  },
  concepts: [
    {
      id: "ecosystem-layers",
      number: "01",
      title: "AI ecosystem ямар давхаргуудаас бүрддэг вэ?",
      tutorialLabel: "Ecosystem-ийн давхаргууд",
      eyebrow: "provider · model · product/tool · runtime",
      duration: "10 минут",
      whyItMatters:
        "Product, model, provider, runtime-ийг нэг зүйл гэж ойлговол capability, cost, privacy-г буруу тооцно.",
      explanation: [
        "Provider бол AI service санал болгож буй байгууллага. Model бол prompt авч output үүсгэдэг engine. Product/tool бол хэрэглэгчийн ажилладаг Chat, Editor эсвэл Agent. Runtime бол model cloud server дээр үү, local computer дээр үү ажиллаж байгааг хэлнэ.",
        "Нэг provider олон model-той байж болно. Нэг product хэд хэдэн model сонгох боломжтой. Нэг local runtime ч олон model ажиллуулж чадна.",
        "Тиймээс ‘ямар AI ашигласан бэ?’ гэдгийг provider + product/tool + model + runtime гэж тусад нь бичнэ.",
      ],
      mentalModel: {
        title: "Такси үйлчилгээний жишээ",
        explanation:
          "Provider = такси компани, product = захиалгын app, model = машин/хөдөлгүүр, runtime = машин ажиллаж буй орчин. Энэ нь layer-уудыг ялгах энгийн зүйрлэл.",
      },
      example: {
        title: "ChatGPT web ашигласан жишээ",
        explanation: "Product-ийн нэр болон model-ийн нэр заавал ижил биш.",
        code: "PROVIDER: OpenAI\nPRODUCT/TOOL: ChatGPT web\nMODEL: UI дээр сонгосон exact model\nRUNTIME: Cloud\nTASK: CSS алдаа тайлбарлуулах",
        language: "text",
      },
      formatBlocks: [
        {
          type: "comparison",
          title: "AI ecosystem-ийн 4 давхарга",
          columns: ["ЮУ ВЭ?", "ЖИШЭЭ"],
          rows: [
            {
              label: "Provider",
              left: "AI service санал болгодог байгууллага",
              right: "OpenAI, Anthropic, Google",
            },
            {
              label: "Model",
              left: "Prompt-оос output үүсгэдэг engine",
              right: "Provider-ийн exact model/version",
            },
            {
              label: "Product / tool",
              left: "Хэрэглэгчийн ажилладаг interface",
              right: "Chat app, AI editor, CLI agent",
            },
            {
              label: "Runtime",
              left: "Model ажиллаж буй орчин",
              right: "Cloud server эсвэл local computer",
            },
          ],
        },
      ],
      diagram: {
        label: "Хэрэглэгчээс output хүртэл",
        nodes: [
          { title: "USER", detail: "Prompt өгнө" },
          { title: "PRODUCT / TOOL", detail: "Context дамжуулна" },
          { title: "MODEL", detail: "Output үүсгэнэ" },
          { title: "RUNTIME", detail: "Cloud эсвэл local" },
        ],
      },
      questions: [
        {
          question: "ChatGPT бол provider, product, эсвэл model-ийн аль нь вэ?",
          answer:
            "Product. Provider нь OpenAI; дотор нь сонгосон model тусдаа байна.",
        },
        {
          question: "Ollama өөрөө model мөн үү?",
          answer:
            "Үгүй. Model ажиллуулах runtime/tool. Дотор нь тусдаа model сонгоно.",
        },
      ],
      misconceptions: [
        {
          claim: "Product нэр = model нэр.",
          correction:
            "Product нэг эсвэл олон model ашиглаж болно. Exact model-оо тусад нь шалгана.",
        },
      ],
      teachingNotes: [
        "Самбарт 4 багана зурж, сурагчдын ашигладаг AI нэрсийг зөв баганад байрлуул.",
      ],
      takeaway:
        "Эндээс заавал санах зүйл: provider, model, product/tool, runtime дөрөв өөр ойлголт.",
    },
    {
      id: "tool-surfaces",
      number: "02",
      title: "Chat, Editor, CLI agent, API гэж юу вэ?",
      tutorialLabel: "AI хэрэгслүүд",
      eyebrow: "ажил · context · permission",
      duration: "13 минут",
      whyItMatters:
        "Эдгээр tool ижил model ашиглаж болох ч өөр context авч, өөр action хийх эрхтэй.",
      explanation: [
        "Chat нь асуулт, тайлбар, жижиг code example-д тохирно. Context-оо prompt, snippet, file хэлбэрээр хэрэглэгч өөрөө өгнө. Ихэвчлэн file өөрчлөх permission шаардлагагүй.",
        "AI Editor нь нээлттэй file, selected code, diagnostics, diff-ийг context болгон ашиглана. Нэг эсвэл цөөн file өөрчлөхөд тохирно. Зөвхөн шаардлагатай file-д edit permission өгнө.",
        "CLI agent нь repository хайх, олон file засах, command/test ажиллуулахад тохирно. Working directory, editable files, allowed commands-ийг хязгаарлаж, deploy болон secret access өгөхгүй.",
        "API нь AI-г application дотор олон удаа, ижил бүтэцтэй ажиллуулахад хэрэглэгдэнэ. Input/output schema, authentication, rate limit, budget тохируулна.",
      ],
      mentalModel: {
        title: "Хүний ажиллах эрхийн түвшин",
        explanation:
          "Chat зөвлөгөө өгнө. Editor таны сонгосон file дээр ажиллана. CLI agent workshop дотор олон action хийж чадна. API нэг ажлыг application-аас давтан дуудна.",
      },
      example: {
        title: "Ямар ажилд алийг сонгох вэ?",
        explanation:
          "Tool-оо хийх ажлын хэмжээ, context, permission-ээр сонгоно.",
        code: "Асуулт, тайлбар → Chat\nНэг component/file засах → AI Editor\nОлон file + test → CLI agent\nApplication-аас давтан дуудах → API",
        language: "text",
      },
      formatBlocks: [
        {
          type: "comparison",
          title: "Tool, context, permission-ийн ялгаа",
          columns: ["ЯМАР CONTEXT ӨГӨХ ВЭ?", "ЯМАР PERMISSION ӨГӨХ ВЭ?"],
          rows: [
            {
              label: "Chat",
              left: "Prompt, error, жижиг snippet",
              right: "Text response; direct edit шаардлагагүй",
            },
            {
              label: "AI Editor",
              left: "Selected code, current files, diagnostics",
              right: "Зөвхөн хэрэгтэй file-д edit",
            },
            {
              label: "CLI agent",
              left: "Repository, task, tests, project rules",
              right: "Хязгаарласан folder, commands; no secret/deploy",
            },
            {
              label: "API",
              left: "Structured input, system instruction, schema",
              right: "API key, rate limit, budget, allowed endpoints",
            },
          ],
        },
      ],
      questions: [
        {
          question: "Нэг CSS property тайлбарлуулахад CLI agent хэрэгтэй юу?",
          answer:
            "Үгүй. Chat хангалттай; repository edit permission шаардлагагүй.",
        },
        {
          question:
            "Олон file rename хийгээд test ажиллуулахад аль tool тохирох вэ?",
          answer:
            "CLI agent тохирч болно. Repo scope болон command permission-ийг хязгаарлана.",
        },
      ],
      misconceptions: [
        {
          claim: "Хамгийн хүчтэй tool-ийг бүх ажилд хэрэглэнэ.",
          correction:
            "Ажилд хангалттай хамгийн бага context, permission-тэй tool-ийг сонго.",
        },
      ],
      teachingNotes: [
        "Нэг ижил task-ийг Chat болон CLI agent-д өгвөл permission-ийн ялгааг сурагчдаар нэрлүүл.",
      ],
      takeaway:
        "Эндээс заавал санах зүйл: tool-ээ хийх ажил, өгөх context, шаардлагатай permission гурваар сонго.",
    },
    {
      id: "task-evals",
      number: "03",
      title: "Model-ийг яаж зөв сонгох вэ?",
      tutorialLabel: "Model сонгох 5 алхам",
      eyebrow: "task · quality · speed · context · cost",
      duration: "17 минут",
      whyItMatters:
        "‘Хамгийн сайн model’ гэж байхгүй. Тухайн ажлыг шаардлагатай чанар, хурд, зардлаар хийдэг model-ийг сонгоно.",
      explanation: [
        "1. Ажлаа тодорхойл: тайлбар авах уу, code бичүүлэх үү, зураг ойлгуулах уу, олон file өөрчлүүлэх үү? Амжилтын шалгуураа урьдчилж бич.",
        "2. Заавал хангах нөхцөлөөр: context хэмжээ, text/image support, tool use, privacy, cloud/local, output format.",
        "3. 2–3 candidate сонго. Exact model нэр, version, runtime-ийг тэмдэглэ.",
        "4. Бүгдэд нь ижил prompt, context, constraint өг. Output-ыг харахаас өмнө rubric бичээд test/browser/diff-ээр шалга. Боломжтой бол хэд давт.",
        "5. Quality, pass rate, speed, token cost, review time-ийг хамтад нь харьцуул. Шаардлага хангаж буй хамгийн бага total cost-тойг сонго.",
      ],
      mentalModel: {
        title: "Model сонголт = туршилтын ажил",
        explanation:
          "Нэр, сурталчилгаагаар биш; хийх ажилтай төстэй жижиг test-ээр сонгоно.",
      },
      example: {
        title: "CSS bug засах model-ийн 10 онооны rubric",
        explanation: "Ижил bug, ижил context, ижил rubric хэрэглэнэ.",
        code: "ROOT CAUSE ЗӨВ: 0–2\nPATCH АЖИЛЛАСАН: 0–3\nCONSTRAINT ЗӨРЧӨӨГҮЙ: 0–2\nTEST АЛХАМ ТОДОРХОЙ: 0–2\nЗОХИОМОЛ БАРИМТГҮЙ: 0–1\n\nНЭМЖ БИЧ: хугацаа, token, retry, review time",
        language: "text",
      },
      formatBlocks: [
        {
          type: "sequence",
          title: "Сонгох дараалал",
          items: [
            { title: "TASK", detail: "Ажил ба pass нөхцөл." },
            { title: "FILTER", detail: "Context, capability, privacy." },
            { title: "TEST", detail: "Ижил input ба rubric." },
            { title: "VERIFY", detail: "Browser, test, diff." },
            { title: "CHOOSE", detail: "Quality, speed, total cost." },
          ],
        },
        {
          type: "comparison",
          title: "Харьцуулах 5 үзүүлэлт",
          columns: ["ЮУГ ХЭМЖИХ ВЭ?", "ЯАЖ ШАЛГАХ ВЭ?"],
          rows: [
            {
              label: "Quality",
              left: "Зөв, бүрэн, constraint дагасан эсэх",
              right: "Rubric + runtime test",
            },
            {
              label: "Reliability",
              left: "Давтан хийхэд хэдэн удаа pass хийх",
              right: "Pass rate + failure log",
            },
            {
              label: "Speed",
              left: "Хариу ба ажил дуусах хугацаа",
              right: "Elapsed time",
            },
            {
              label: "Context",
              left: "Шаардлагатай input багтаж, ашиглагдах эсэх",
              right: "Capacity + task test",
            },
            {
              label: "Cost",
              left: "Token, tool, retry, хүний review",
              right: "Usage + rate + review time",
            },
          ],
        },
      ],
      questions: [
        {
          question: "Benchmark өндөр model-ийг шууд сонгох уу?",
          answer: "Үгүй. Өөрийн бодит task, rubric, runtime test-ээр шалгана.",
        },
        {
          question: "Token rate хамгийн бага model хамгийн хямд уу?",
          answer:
            "Заавал биш. Retry, урт output, алдаа, review time нийт зардлыг өсгөнө.",
        },
      ],
      misconceptions: [
        {
          claim: "Том model бүх ажилд хамгийн зөв.",
          correction:
            "Жижиг model шаардлага хангаж, хурдан бөгөөд хямд байж болно.",
        },
      ],
      teachingNotes: ["Ангид хоёр candidate-ийг ижил CSS task-аар харьцуул."],
      takeaway:
        "Санах зүйл: model-ийг бодит task + ижил test + нийт зардлаар сонго.",
    },
    {
      id: "cloud-and-local",
      number: "04",
      title: "Cloud болон local model ямар ялгаатай вэ?",
      tutorialLabel: "Cloud vs local",
      eyebrow: "байршил · privacy · hardware · cost",
      duration: "12 минут",
      whyItMatters:
        "Сонголт нь data, internet, hardware, quality, зардлаас хамаарна.",
      explanation: [
        "Cloud model provider-ийн server дээр ажиллана. Setup бага, хүчтэй model ашиглахад амар; internet, provider policy, subscription эсвэл usage fee шаарддаг.",
        "Local model өөрийн computer дээр ажиллана. Offline ажиллаж болно, data-г device дээр барих боломжтой; харин RAM/GPU/storage, setup, update, electricity, review time өөрөө хариуцна.",
      ],
      mentalModel: {
        title: "Төлбөрийн ялгаа",
        explanation:
          "Cloud-д үйлчилгээний хэрэглээгээр; local-д төхөөрөмж, цахилгаан, арчилгаагаар төлнө.",
      },
      example: {
        title: "Хоёр энгийн сонголт",
        explanation:
          "Public CSS question-д approved cloud; private data-д policy-д нийцсэн local эсвэл approved private cloud сонгоно.",
        code: "PUBLIC CSS SNIPPET → approved cloud ашиглаж болно\nPRIVATE STUDENT DATA → policy шалга; зөвшөөрөлгүй бол бүү явуул",
        language: "text",
      },
      formatBlocks: [
        {
          type: "comparison",
          title: "Cloud ба local ялгаа, зардал",
          columns: ["CLOUD", "LOCAL"],
          rows: [
            {
              label: "Хаана ажиллах",
              left: "Provider-ийн server",
              right: "Өөрийн computer/server",
            },
            {
              label: "Internet",
              left: "Ихэвчлэн шаардлагатай",
              right: "Татсаны дараа offline боломжтой",
            },
            {
              label: "Data",
              left: "Provider руу илгээгдэнэ; policy шалгана",
              right: "Device дээр байж болно; local log/telemetry шалгана",
            },
            {
              label: "Hardware",
              left: "Энгийн device хангалттай",
              right: "RAM/GPU/storage шаардлагатай",
            },
            {
              label: "Setup",
              left: "Бага",
              right: "Install, model download, update",
            },
            {
              label: "Эхний зардал",
              left: "Ихэвчлэн бага",
              right: "Тохирох computer/GPU үнэтэй байж болно",
            },
            {
              label: "Урсгал зардал",
              left: "Subscription эсвэл input/output token + tool fee",
              right:
                "Token fee байж болохгүй; electricity, maintenance, time гарна",
            },
            {
              label: "Тохирох ажил",
              left: "Хүчтэй model, хурдан эхлэх, scale",
              right: "Offline, device дээрх data, тогтмол workload",
            },
          ],
        },
      ],
      questions: [
        {
          question: "Local model автоматаар private уу?",
          answer:
            "Үгүй. Log, telemetry, storage, device access, policy-г шалгана.",
        },
        {
          question: "Local model token fee-гүй бол үнэгүй юу?",
          answer:
            "Үгүй. Hardware, electricity, setup, update, хүний цаг зардалтай.",
        },
      ],
      misconceptions: [
        {
          claim: "Cloud үргэлж сайн, local үргэлж хямд.",
          correction:
            "Task, hardware, usage, review time-аас бодит сонголт хамаарна.",
        },
      ],
      teachingNotes: [
        "Үнэ тогтмол биш тул exact current rate-ийг official pricing page-ээс шалгуул.",
      ],
      takeaway:
        "Санах зүйл: cloud-ийн cost нь service usage; local-ийн cost нь hardware + operation.",
    },
    {
      id: "tokens-context-cost",
      number: "05",
      title: "Token, context window, API cost",
      tutorialLabel: "Token ба cost",
      eyebrow: "capacity · input · output · rate",
      duration: "10 минут",
      whyItMatters:
        "Context бол багтаамж; token usage бол хэрэглээ; rate бол нэгжийн үнэ.",
      explanation: [
        "Context window = нэг request-д багтах token-ий дээд хэмжээ. Бодит input usage нь үүнээс бага байж болно.",
        "API cost = input + cached input + output + tool fee. Exact model-ийн одоогийн rate, unit, currency, date-ийг official page-ээс авна. Chat subscription ба API bill тусдаа.",
      ],
      mentalModel: {
        title: "Багтаамж ≠ хэрэглээ",
        explanation:
          "Context window бол савны хэмжээ. Token usage бол саванд бодитоор хийсэн хэмжээ.",
      },
      example: {
        title: "Нэг request-ийн cost formula",
        explanation: "A, B, C нь official page дээрх тухайн model-ийн rate.",
        code: "request cost =\n  input tokens / 1M × A\n+ cached tokens / 1M × B\n+ output tokens / 1M × C\n+ tool fee\n\nmonthly cost = request cost × сарын request",
        language: "text",
      },
      formatBlocks: [
        {
          type: "comparison",
          title: "4 үндсэн ойлголт",
          columns: ["УТГА", "ЖИШЭЭ"],
          rows: [
            {
              label: "Context window",
              left: "Дээд багтаамж",
              right: "Request-д багтах нийт token",
            },
            {
              label: "Input token",
              left: "Model-д өгсөн мэдээлэл",
              right: "Prompt, history, file",
            },
            {
              label: "Output token",
              left: "Model-ийн үүсгэсэн мэдээлэл",
              right: "Text, code, JSON",
            },
            {
              label: "API cost",
              left: "Usage × current rate",
              right: "Input + cache + output + tool",
            },
          ],
        },
      ],
      questions: [
        {
          question: "200K context байвал request бүр 200K token хэрэглэсэн үү?",
          answer: "Үгүй. 200K бол дээд багтаамж; actual usage тусдаа.",
        },
        {
          question: "Input ба output rate ижил үү?",
          answer: "Заавал биш. Official pricing page-ээс тусад нь шалгана.",
        },
      ],
      misconceptions: [
        {
          claim: "Том context = илүү ухаалаг model.",
          correction: "Context бол багтаамж. Чанарыг task test-ээр шалгана.",
        },
      ],
      teachingNotes: ["Үнэ өөрчлөгддөг тул source URL ба checked date бичүүл."],
      takeaway:
        "Санах зүйл: context = capacity, token = usage, cost = usage × current rate.",
    },
  ],
  liveDemo: {
    title: "Ижил CSS bug-ийг cloud ба local candidate-аар шалгах",
    duration: "14 минут",
    goal: "Ижил task-ийг cloud ба local model-д өгч, quality, speed, cost-оор харьцуулах.",
    setup: [
      "Secret-гүй CSS overflow жишээ.",
      "Approved cloud model ба урьдчилан татсан Ollama model.",
      "Ижил prompt, 10 онооны rubric, timer.",
      "Browser 320px/768px test page.",
    ],
    steps: [
      {
        title: "Task ба rubric-аа тогтоо",
        instruction: "Ижил bug, context, constraint, pass нөхцөлийг батал.",
        observe: "Хоёр model ижил public input авна.",
      },
      {
        title: "Cloud model ажиллуул",
        instruction:
          "Prompt өгөөд exact model, хугацаа, output, харагдаж буй usage-г бич.",
        observe: "Usage харагдахгүй бол unknown гэж тэмдэглэ.",
      },
      {
        title: "Local model ажиллуул",
        instruction:
          "Ollama дээр ижил prompt өгөөд model, хугацаа, output-ыг бич.",
        code: {
          title: "Local model нээх",
          language: "bash",
          code: "ollama list\nollama run <approved-model>",
          note: "Model-ийг хичээлээс өмнө татсан байна.",
        },
        observe: "Speed нь model ба hardware-аас хамаарна.",
      },
      {
        title: "Test хийгээд сонго",
        instruction:
          "Patch бүрийг 320px/768px дээр шалгаж, rubric, speed, cost-оор харьцуул.",
        expected: "Энэ task-д тохирох model-оо баримтаар сонгосон байна.",
      },
    ],
    expectedOutput: [
      "Ижил prompt ба rubric.",
      "Cloud/local model, runtime, хугацааны log.",
      "320px/768px browser test.",
      "Quality, speed, cost бүхий сонголт.",
    ],
    recovery: [
      "Local model ажиллахгүй бол бэлдсэн raw output ашигла.",
      "Usage харагдахгүй бол тоо зохиохгүй; unknown гэж бич.",
    ],
  },
  guidedPractice: {
    title: "AI tool decision ба сарын cost worksheet",
    duration: "18 минут",
    goal: "Дөрвөн scenario-д tool сонгож, нэг API scenario-ийн сарын cost-ийг бодох.",
    starterCode: [
      {
        title: "Decision worksheet",
        language: "text",
        code: "SCENARIO:\nTASK:\nDATA:\nTOOL: [Chat/Editor/CLI/API]\nCONTEXT:\nPERMISSION:\nMODEL:\nRUNTIME: [Cloud/Local]\nWHY:\n\nCOST SOURCE + DATE:\nINPUT RATE:\nCACHED RATE:\nOUTPUT RATE:\nTOOL FEE:\nMONTHLY COST:",
      },
      {
        title: "Дөрвөн scenario",
        language: "text",
        code: "A — CSS Grid-ийн нэг property-г secret-гүй 12 мөр code-оор тайлбарлуулах.\nB — Private repo-ийн 18 files responsive rename + lint; deploy хэрэггүй.\nC — User бүрийн public text-ийг өдөрт 2,500 удаа structured JSON ангилах product feature.\nD — Student-ийн нэр, email, assessment бүхий file; organization AI policy тодорхойгүй.",
      },
    ],
    instructions: [
      "Scenario бүрт Chat, Editor, CLI, API-аас нэгийг сонго.",
      "Өгөх context ба permission-ийг бич.",
      "Cloud эсвэл local сонгоод шалтгаанаа нэг өгүүлбэрээр тайлбарла.",
      "Scenario C-д official current rate ашиглан сарын cost бод.",
      "Scenario D-ийн policy тодорхойгүй тул personal data бүү явуул.",
    ],
    constraints: [
      "Current price-г memory/AI answer-аас авахгүй; official page URL + checked date заавал.",
      "Unknown policy-г өөрөө ‘allowed’ гэж assumption хийхгүй.",
      "Local cost-ийг $0 гэж, cloud quality-г ‘хамгийн сайн’ гэж evidence-гүй бичихгүй.",
      "CLI agent-д deploy, secret, broad filesystem permission өгөхгүй.",
      "Cost formula-д input/cached/output category-г нэг rate болгож хольж болохгүй.",
    ],
    hints: [
      "A — Chat; B — limited CLI/Editor; C — API байж болно.",
      "D — policy тодорхой болтол data бүү өг.",
      "Сарын request = 2,500 × 30.",
    ],
    expectedResult: [
      "Дөрвөн scenario-ийн tool сонголт.",
      "Tool бүрийн context ба permission.",
      "Cloud/local сонголтын шалтгаан.",
      "Official source, date, formula бүхий сарын cost.",
      "Personal data-г зөвшөөрөлгүй явуулаагүй байна.",
    ],
    stretchTask:
      "Scenario C-д хоёр model candidate-ийн task pass rate 92%/80%, average retries 1.02/1.20, human review 8s/25s гэсэн hypothetical data нэмээд token rate-ээс гадна review minutes-ийг total cost decision-д оруул.",
    debriefQuestions: [
      {
        question:
          "Аль scenario-д хамгийн хүчтэй model биш minimum tool сонгосон бэ, яагаад?",
        answer:
          "Task quality/context/action requirement бага, permission/cost/review burden-ийг өсгөх шаардлагагүй гэсэн evidence-based тайлбар.",
      },
      {
        question:
          "Cost estimate-ийн хамгийн эрсдэлтэй assumption юу байсан бэ?",
        answer:
          "Volume, average tokens, cache hit eligibility, retries, other fees, rate/tier/date-ийн аль нэгийг range/actual usage-аар шалгах тайлбар.",
      },
      {
        question: "Unknown гэдгийг шийдвэрт хэрхэн ашигласан бэ?",
        answer:
          "Зохиосон fact биш; stop, fallback, measurement, owner, official source, revisit action болгон хувиргасан.",
      },
    ],
  },
  aiLab: {
    title: "Хоёр candidate output-ийг brand-аас нь салгаж benchmark хийх",
    duration: "10 минут",
    goal: "Ижил responsive CSS review prompt-ийг cloud/local эсвэл хоёр available model candidate-д өгч, output-ийг урьдчилсан rubric, browser runtime, Git diff, latency/usage metadata-аар score хийж AI-ийн өөрийн self-evaluation-д найдахгүй байх.",
    prompt: `Task: Доорх CSS-ийн 320px horizontal overflow root cause-ийг олж, хамгийн жижиг patch санал болго.

Observed evidence:
- viewport: 320px
- documentElement.clientWidth: 320
- documentElement.scrollWidth: 376
- .card computed width: 360px

Acceptance:
- 320px ба 768px дээр page horizontal scrollгүй.
- Card container-ээс өргөн болохгүй.
- Essential content нуухгүй.
- HTML/DOM order өөрчлөхгүй.

Constraints:
- overflow-x:hidden, display:none, absolute positioning, framework бүү ашигла.
- Нэг root-cause hypothesis, нэг smallest patch өг.
- Хийгээгүй test-ийг pass гэж бүү зохио.

CSS:
.cards { display:grid; grid-template-columns:repeat(2, 180px); gap:16px; }
.card { width:360px; padding:16px; border:1px solid; }

Output:
1. Root cause
2. Patch (max 6 CSS lines)
3. 320/768px exact verification steps
4. Remaining uncertainty`,
    steps: [
      {
        title: "Rubric ба candidate metadata-г урьдчилж бич",
        instruction:
          "Root cause 2, valid minimal patch 2, constraints 2, runtime pass 2, honest uncertainty 1, no invented evidence 1; model/runtime/date/elapsed fields бэлд.",
        expected: "Output харахаас өмнө 10-point rubric freeze болсон байна.",
      },
      {
        title: "Ижил prompt-ийг хоёр candidate-д өг",
        instruction:
          "Context/settings-ийг боломжтой хэмжээнд ижил байлгаж raw output, elapsed, exposed usage-г өөрчлөлгүй хадгал.",
        observe: "Response length/confidence quality-тай шууд тэнцэхгүй.",
      },
      {
        title: "Candidate нэрийг нууж patch-ийг тусдаа test хий",
        instruction:
          "A/B output бүрийг clean copy дээр хэрэгжүүлж 320/768 scrollWidth, computed card/grid, Git diff-ээр score хий.",
        explain: "Browser actual layout нь independent evidence.",
      },
      {
        title: "Decision, cost unknown, failure-г log хий",
        instruction:
          "Accepted/rejected/needs evidence, score, exact failure, latency, usage exposure, estimated cost source status, review minutes бич.",
        expected: "Brand бус task-specific evidence decision гарсан байна.",
      },
    ],
    verificationTable: [
      {
        claim: "‘Root cause нь fixed widths.’",
        evidence:
          "Computed .card 360px, grid 2×180px+gap, viewport/scrollWidth",
        pass: "Source declaration ба runtime geometry overflow-ийг тайлбарлана.",
      },
      {
        claim: "‘Patch 320/768px дээр ажиллана.’",
        evidence:
          "Patch тусдаа copy + clientWidth/scrollWidth + visual/Computed",
        pass: "Хоёр width-д x-scrollгүй, card content visible, no hidden overflow.",
      },
      {
        claim: "‘Candidate cost бага.’",
        evidence:
          "Exposed actual usage эсвэл official rate + measured token/tool assumptions",
        pass: "Source/date/unit/usage бий; байхгүй бол claim ‘unknown’ хэвээр.",
      },
      {
        claim: "‘Local/cloud candidate илүү сайн.’",
        evidence:
          "Frozen rubric + repeated/runtime result + latency/review data",
        pass: "Энэ task/conditions-д score/trade-off гарсан; universal winner claim хийгээгүй.",
      },
    ],
    teacherNotes: [
      "Хоёр cloud model ашигласан ч learning goal биелнэ; local hardware-ийг заавал шаардахгүй.",
      "Raw output candidate нэрийг нуух боломжгүй бол brand bias байсныг reflection-д тэмдэглэ.",
      "Token exact count UI-д байхгүй бол tokenizer estimate-г actual гэж нэрлэхгүй; unknown/inference гэдгийг ялга.",
    ],
  },
  checkpoint: {
    duration: "6 минут",
    instructions: "5 асуултад AI ашиглахгүй, товч хариул.",
    questions: [
      {
        type: "concept",
        question: "AI ecosystem-ийн 4 давхаргыг нэрлэ.",
        answer: "Provider, model, product/tool, runtime.",
      },
      {
        type: "concept",
        question: "Олон file засаж test ажиллуулахад ямар tool тохирох вэ?",
        answer:
          "CLI agent. Repo scope, file, command permission-ийг хязгаарлана.",
      },
      {
        type: "concept",
        question: "Model сонгох 5 алхам юу вэ?",
        answer:
          "Task → filter → ижил test → verify → quality/speed/cost-оор сонгох.",
      },
      {
        type: "concept",
        question: "Local model token fee-гүй бол cost 0 уу?",
        answer: "Үгүй. Hardware, electricity, setup, update, хүний цаг орно.",
      },
      {
        type: "application",
        question: "API cost-ийн үндсэн formula юу вэ?",
        answer: "Input cost + cached input cost + output cost + tool fee.",
      },
    ],
  },
  wrapUp: {
    summary: [
      "AI ecosystem = provider + model + product/tool + runtime.",
      "Tool = task + context + permission.",
      "Model = ижил test + quality + speed + total cost.",
      "Cloud/local = data + hardware + operating cost.",
      "API cost = token usage × current rate + tool fee.",
    ],
    abilities: [
      "Ecosystem layer ялгах",
      "Зөв tool, context, permission сонгох",
      "Хоёр model-ийг ижил rubric-аар шалгах",
      "Cloud/local cost харьцуулах",
      "API сарын cost бодох",
    ],
    beforeNextLesson: [
      "Нэг tool decision ба cost worksheet хадгал.",
      "Pricing source URL, date-аа бич.",
      "Responsive profile project-ээ lint pass болгож бэлд.",
    ],
    finalModel:
      "AI сонголт = ecosystem-ээ ялгах → task-д tool сонгох → model test хийх → cloud/local cost харьцуулах → token cost тооцох.",
    exitTicket: [
      {
        question: "ChatGPT web-ийг 4 layer-аар задла.",
        answer: "Provider, exact model, ChatGPT product, cloud runtime.",
      },
      {
        question: "Model сонгохдоо хамгийн түрүүнд юу бичих вэ?",
        answer: "Task ба pass нөхцөл.",
      },
      {
        question: "Tool сонгохдоо ямар 3 зүйл шалгах вэ?",
        answer: "Task, context, permission.",
      },
    ],
    nextLesson: {
      title: "Lesson 13 — CSS animation, transform ба transition",
      connection:
        "Одоо layout intent, responsive evidence, AI tool/cost decision-ийн суурь бэлэн. Дараагийн guide-д transform, transition, keyframe animation ашиглан purposeful motion бүтээж, keyboard focus, performance, reduced-motion behavior-ийг DevTools evidence-ээр шалгана.",
    },
    teacherClose:
      "Хамгийн сайн AI гэж байхгүй. Тухайн task-д зөв tool, зөв model, зөв cost байдаг.",
  },
};
