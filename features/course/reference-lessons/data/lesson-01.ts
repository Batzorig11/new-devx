import type { ReferenceLesson } from "../types";

export const lesson01Reference: ReferenceLesson = {
  id: 1,
  durationMinutes: 120,
  teacherGoal:
    "Сурагч URL бичсэн мөчөөс browser хуудас дүрслэх хүртэлх урсгалыг цээжилсэн үгээр бус, оролцогч бүрийн үүрэг болон Network evidence-ээр тайлбарладаг болно.",
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
      "Internet болон Web хоёрын ялгааг нэг бодит жишээгээр тайлбарлах.",
      "URL-ийн protocol, domain, path, query, fragment хэсгийг задалж унших.",
      "DNS, browser/client, server-ийн үүргийг request–response урсгалд зөв байрлуулах.",
      "HTTP request, response, method, status code-ийн суурь утгыг ялгах.",
      "HTML, CSS, JavaScript-ийн үүрэг болон frontend-ийн хилийг тайлбарлах.",
      "URL-аас rendered page хүртэлх урсгалыг 8 алхмаар зураглах.",
      "DevTools Network табаас URL, method, status, content type гэсэн 4 evidence олох.",
      "AI-ийн тайлбарыг бодит Network evidence-тэй тулгаж шалгах.",
    ],
    prerequisites: [
      "Browser нээж, address bar-д URL бичиж чаддаг байх",
      "Tab нээх, refresh хийх зэрэг компьютерийн анхан шатны үйлдэл",
      "Тэмдэглэл бичих дэвтэр эсвэл хоосон document",
    ],
    tools: [
      "Chrome, Edge эсвэл Firefox browser",
      "Developer Tools → Network",
      "Самбар эсвэл projector",
      "AI chat — зөвхөн AI Lab хэсэгт",
    ],
    outcomes: [
      "Самбар дээр client → DNS → server → response → render урсгалыг тусламжгүй зурна.",
      "Network request-ээс Request URL, GET, 200, text/html evidence-г олно.",
      "DNS HTML буцаадаг, Internet ба Web ижил гэсэн эндүүрлийг засаж тайлбарлана.",
      "AI output-ийг эцсийн үнэн биш, шалгах ёстой claim гэж авч үзнэ.",
    ],
    preparation: [
      "https://example.com болон энэ DEVX хуудсыг урьдчилан нээж Network demo ажиллахыг шалга.",
      "Browser cache нөлөөлж болохыг тооцоод Disable cache сонголтыг хаана байдгийг ол.",
      "Самбар дээр зурах 8 хоосон хайрцаг болон хоёр чиглэлтэй сумны зай бэлд.",
      "Demo эвдэрвэл ашиглах screenshot эсвэл энэ хуудсын expected output жагсаалтыг нөөц болго.",
    ],
    timeline: [
      { start: "00:00", duration: "8 мин", title: "Hook ба оношлох асуулт", teacherAction: "“Google уналаа гэвэл Internet бүхэлдээ уналаа гэсэн үг үү?” гэж асуугаад хариуг тайлбаргүй тэмдэглэ." },
      { start: "00:08", duration: "17 мин", title: "Internet, Web, URL", teacherAction: "Сүлжээ ба түүн дээр ажиллах үйлчилгээний ялгааг гаргаад нэг URL-ийг хэсэгчлэн задлуул." },
      { start: "00:25", duration: "20 мин", title: "DNS, client, server", teacherAction: "Хаягийн лавлах analogy-аас бодит client–server flow руу шилжиж, үүрэг бүрийг сурагчдаар хэлүүл." },
      { start: "00:45", duration: "15 мин", title: "HTTP, method, status", teacherAction: "Request ба response хоёр өөр message болохыг envelope зураглал, GET/POST, 200/404/500 жишээгээр тайлбарла." },
      { start: "01:00", duration: "5 мин", title: "Завсарлага", teacherAction: "Самбарын flow-г үлдээж, сурагчдад босож хөдөлгөөн хийх хугацаа өг." },
      { start: "01:05", duration: "10 мин", title: "HTML, CSS, JavaScript, frontend", teacherAction: "Нэг хуудасны structure, appearance, behavior гурвыг салгаж асуу." },
      { start: "01:15", duration: "15 мин", title: "Live Network demo", teacherAction: "example.com document request-ийг refresh-ээс response body хүртэл think-aloud хэлбэрээр trace хий." },
      { start: "01:30", duration: "14 мин", title: "Guided practice", teacherAction: "Хос бүр нэг request сонгож 4 evidence болон бүтэн flow-г бөглөхийг checkpoint-оор удирд." },
      { start: "01:44", duration: "10 мин", title: "AI verification lab", teacherAction: "AI-ийн 7 алхмыг Network evidence-тэй тулгуулж, батлагдаагүй claim-ийг тусад нь тэмдэглүүл." },
      { start: "01:54", duration: "6 мин", title: "Checkpoint ба wrap-up", teacherAction: "3 асуултаар ойлголт шалгаад Lesson 02-ын development environment руу холбо." },
    ],
  },
  concepts: [
    {
      id: "internet-vs-web",
      number: "01",
      title: "Internet ба Web ижил зүйл биш",
      eyebrow: "Сүлжээ ба үйлчилгээ",
      duration: "6–8 минут",
      whyItMatters:
        "Энэ ялгаа байхгүй бол сурагч browser, website, Wi-Fi, server-ийн алдааг бүгдийг нь “интернет ажиллахгүй байна” гэж нэг асуудал болгон харна. Debug хийхдээ аль давхарга доголдсоныг хэлж чадахгүй.",
      explanation: [
        "Internet бол дэлхий даяарх төхөөрөмж, router, cable, data center-үүдийг хооронд нь холбоод мэдээлэл дамжуулах боломж өгдөг сүлжээний дэд бүтэц. Энэ нь ганц компани эсвэл ганц website биш.",
        "Web буюу World Wide Web бол Internet дээр ажилладаг олон үйлчилгээний нэг. Browser HTTP/HTTPS ашиглан URL-аар заасан веб нөөцийг server-ээс авдаг. Email, online game, video call бас Internet ашиглаж болно, гэхдээ бүгд Web гэж нэрлэгдэхгүй.",
      ],
      mentalModel: {
        title: "Зам ба хүргэлтийн үйлчилгээ",
        explanation:
          "Internet-ийг хотуудыг холбосон замын сүлжээ гэж төсөөл. Web бол тэр замаар явдаг хүргэлтийн үйлчилгээний нэг. Зам байлаа гээд зөвхөн нэг төрлийн машин явдаггүйтэй адил Internet дээр зөвхөн website ажилладаггүй.",
      },
      example: {
        title: "Нэг service унахад Internet хэвээр байж болно",
        explanation:
          "example.com нээгдэхгүй байсан ч өөр сайт нээгдэж, мессеж явж байвал Internet connection бүхэлдээ тасраагүй. Тухайн domain, DNS record, server эсвэл service талд асуудал байж болно.",
      },
      diagram: {
        label: "Internet дээр ажиллах үйлчилгээний mental model",
        nodes: [
          { title: "INTERNET", detail: "Төхөөрөмжүүдийг холбох дэд бүтэц" },
          { title: "WEB", detail: "HTTP + URL + browser" },
          { title: "БУСАД", detail: "Email · game · call" },
        ],
      },
      questions: [
        { question: "YouTube нээгдэхгүй бол Internet заавал тасарсан уу?", answer: "Үгүй. Бусад service ажиллаж байвал YouTube тал, DNS эсвэл тухайн route дээр асуудал байж болно.", followUp: "Ямар хоёр evidence эхэлж шалгах вэ?" },
        { question: "Email Internet ашигладаг уу? Web мөн үү?", answer: "Internet ашиглана. Browser дахь webmail нь Web, харин email protocol өөрөө Web-ээс тусдаа байж болно." },
      ],
      misconceptions: [
        { claim: "Internet гэдэг нь Google эсвэл browser.", correction: "Browser бол Internet ашиглах client програм; Google бол Internet дээрх олон үйлчилгээний нэг." },
        { claim: "Wi-Fi icon харагдаж байвал Web заавал ажиллана.", correction: "Wi-Fi нь local network connection-ийг л зааж болно; DNS, upstream Internet эсвэл server доголдсон байж болно." },
      ],
      teachingNotes: [
        "Эхэнд нь зөв тодорхойлолт бүү өг. Сурагчдын ‘Internet = browser’ гэсэн хэллэгийг самбар дээр яг хэвээр нь цуглуул.",
        "Тайлбарын төгсгөлд эхний хариултуудыг Internet, Web, service гэсэн гурван баганад дахин ангилуул.",
      ],
      takeaway: "Internet бол холболтын дэд бүтэц; Web бол түүн дээр HTTP, URL, browser ашиглан ажилладаг үйлчилгээ.",
    },
    {
      id: "url-domain",
      number: "02",
      title: "URL бол нөөцийн бүтэн хаяг",
      eyebrow: "Protocol · domain · path · query",
      duration: "8–10 минут",
      whyItMatters:
        "Frontend хөгжүүлэгч route, API endpoint, asset path, query parameter-тай өдөр бүр ажилладаг. URL-ийн аль хэсэг өөрчлөгдсөнийг мэдэх нь navigation болон request-ийн алдааг хурдан тусгаарлана.",
      explanation: [
        "URL буюу Uniform Resource Locator нь browser ямар protocol ашиглах, аль host руу, ямар нөөц хүсэж байгааг тодорхойлсон бүтэн хаяг. Domain бол URL-ийн зөвхөн нэг хэсэг.",
        "https://shop.example.com/products/42?currency=mnt#reviews URL-д https нь protocol, shop.example.com нь host, /products/42 нь path, currency=mnt нь query, reviews нь fragment. Fragment ихэвчлэн server рүү илгээгдэхгүй; browser тухайн document дотор байрлал олоход ашиглана.",
      ],
      mentalModel: {
        title: "Шуудангийн дэлгэрэнгүй хаяг",
        explanation:
          "Domain-ийг байрны нэр, path-ийг орц ба тоот, query-г захиалгын нэмэлт заавар гэж төсөөл. Зөвхөн байрны нэр мэдэх нь яг аль өрөөнд хүргэхийг хэлэхгүйтэй адил domain ганцаараа бүтэн URL биш.",
      },
      example: {
        title: "URL-ийг самбар дээр өнгөөр задлах",
        explanation: "Нэг URL-ийг protocol | host | path | query | fragment гэсэн таван хайрцагт салгана.",
        code: "https://shop.example.com/products/42?currency=mnt#reviews",
      },
      diagram: {
        label: "URL-ийн хэсгүүд",
        nodes: [
          { title: "https", detail: "Protocol" },
          { title: "shop.example.com", detail: "Host / domain" },
          { title: "/products/42", detail: "Path" },
          { title: "?currency=mnt", detail: "Query" },
          { title: "#reviews", detail: "Fragment" },
        ],
      },
      questions: [
        { question: "Domain болон URL хоёр ижил үү?", answer: "Үгүй. Domain/host нь URL-ийн нэг хэсэг; URL protocol, path, query зэрэг нэмэлт мэдээлэл агуулна." },
        { question: "Path өөрчлөгдвөл заавал өөр server рүү очих уу?", answer: "Үгүй. Ижил host дээр өөр нөөц эсвэл route хүсэж болно." },
      ],
      misconceptions: [
        { claim: "https:// нь website-ийн нэрийн хэсэг.", correction: "Энэ нь browser болон server ямар protocol-оор харилцахыг заана." },
        { claim: "URL доторх бүх зүйл DNS-д очно.", correction: "DNS голчлон host/domain-ийг IP хаягтай холбодог; path, query-г HTTP request боловсруулах server ашиглана." },
      ],
      teachingNotes: [
        "URL-ийн хэсгийг нэрлэхээс өмнө сурагчдаар хаанаас нь салгахыг таалга.",
        "Port-ийг энэ хичээлд optional гэж тэмдэглэ; default HTTPS port зэрэг гүнзгий мэдээллээр beginner-ийг бүү ачаал.",
      ],
      takeaway: "Domain бол очих host; URL бол protocol-оос нөөцийн зам хүртэлх бүтэн хаяг.",
    },
    {
      id: "dns",
      number: "03",
      title: "DNS нэрийг IP хаягтай холбодог",
      eyebrow: "Нэрээс сүлжээний хаяг руу",
      duration: "7–9 минут",
      whyItMatters:
        "Хүн domain нэр тогтоодог, харин сүлжээ төхөөрөмжийн хаяг ашиглаж холбогдоно. DNS-ийн үүргийг мэдвэл ‘domain байна, server байна, яагаад нээгдэхгүй вэ?’ гэсэн асуудлыг тусдаа давхаргаар оношилно.",
      explanation: [
        "Browser host-ийн IP хаягийг мэдэх шаардлагатай. Тэр өмнөх cache-ээ шалгаж, хэрэгтэй бол operating system эсвэл DNS resolver-оос domain-д тохирох record асууна. Resolver бусад DNS server-үүдээс хариу олж болно.",
        "DNS хариу нь веб хуудасны HTML биш. Энэ нь ‘example.com руу очихын тулд энэ IP хаягийг ашигла’ гэсэн чиглүүлэлт. IP олдсоны дараа л browser тухайн server талтай холболт үүсгэж HTTP request илгээнэ.",
      ],
      mentalModel: {
        title: "Утасны contact жагсаалт",
        explanation:
          "Та ‘Ээж’ гэсэн нэр дээр дардаг ч утас сүлжээнд дугаараар залгана. DNS нь domain нэрийг IP хаягтай холбох contact lookup шиг. Харин ярианы агуулгыг contact жагсаалт дамжуулдаггүй.",
      },
      example: {
        title: "Domain зөв, DNS record буруу",
        explanation:
          "Компанийн server ажиллаж байсан ч domain-ийн record хуучин IP рүү заавал хэрэглэгч зөв server-т хүрэхгүй. Энэ нь frontend CSS-ийн алдаа биш.",
      },
      diagram: {
        label: "DNS lookup-ийн хялбаршуулсан урсгал",
        nodes: [
          { title: "Browser", detail: "example.com хаана вэ?" },
          { title: "DNS resolver", detail: "IP record хайна" },
          { title: "IP address", detail: "93.184… гэж хариулна" },
          { title: "Server", detail: "Дараа нь холбогдоно" },
        ],
      },
      questions: [
        { question: "DNS server HTML буцаах уу?", answer: "Үгүй. DNS domain-д тохирох IP зэрэг record буцаана; веб server HTML-ийг HTTP response-оор өгнө." },
        { question: "DNS хариу удаан байвал хэрэглэгч юу мэдрэх вэ?", answer: "Request server рүү эхлэхээс өмнөх хүлээлт нэмэгдэж, хуудас нээгдэхгүй эсвэл удаан мэт харагдана." },
      ],
      misconceptions: [
        { claim: "DNS бол database агуулсан website server.", correction: "DNS нь нэрийн record түгээдэг тусдаа систем; application data болон page body хадгалах үүрэггүй." },
        { claim: "DNS lookup page-ийн asset бүрт заавал шинээр хийгдэнэ.", correction: "Browser болон OS cache ашиглаж болно; ижил host-ийн lookup дахин хийгдэхгүй байх боломжтой." },
      ],
      teachingNotes: [
        "DNS-ийн recursive hierarchy-г энэ хичээлд гүн оруулахгүй. Lookup → IP гэсэн үүргийг алдалгүй ойлгуулах нь зорилго.",
        "Analogy-ийн хязгаарыг хэл: contact жагсаалт төвлөрсөн байж болох ч DNS тархмал, cache-тай систем.",
      ],
      takeaway: "DNS нөөцийг буцаахгүй; domain-аас холбогдох IP хаягийг олоход тусална.",
    },
    {
      id: "client-server",
      number: "04",
      title: "Browser бол client, server бол хариулагч тал",
      eyebrow: "Хэн эхэлж, хэн хариулах вэ?",
      duration: "7–9 минут",
      whyItMatters:
        "Frontend инженер browser дээрх код болон server дээрх кодын хилийг ялгах ёстой. Secret, data access, validation, loading/error UI зэрэг шийдвэр энэ хилээс шалтгаална.",
      explanation: [
        "Client бол үйлчилгээ хүсэж request эхлүүлдэг тал. Энэ хичээлд client нь browser: хэрэглэгчийн URL, click, form submit-ийг авч request үүсгэнэ, response-ийг уншаад UI харуулна.",
        "Server бол сүлжээнээс request хүлээн авч боловсруулах програм ажиллаж буй тал. Тэр бэлэн HTML файл буцааж болно, эсвэл logic ажиллуулж database-аас data аваад HTML/JSON үүсгэж болно. Нэг физик компьютер олон server process ажиллуулж болно.",
      ],
      mentalModel: {
        title: "Ресторан дахь зочин ба гал тогоо",
        explanation:
          "Зочин захиалга өгч байгаа нь client request, гал тогоо боловсруулж хоол гаргах нь server response. Menu буюу protocol нь захиалгыг ойлгогдох хэлбэртэй болгоно. Зочин гал тогооны дотоод бүх ажиллагааг харахгүй.",
      },
      example: {
        title: "Бүтээгдэхүүний жагсаалт",
        explanation:
          "Browser GET /products request илгээнэ. Server database-аас бүтээгдэхүүн уншиж JSON буцаана. Frontend JSON-ийг card болгон render хийнэ.",
      },
      diagram: {
        label: "Client–server хоёр чиглэл",
        nodes: [
          { title: "BROWSER / CLIENT", detail: "Request →" },
          { title: "NETWORK", detail: "HTTP message дамжина" },
          { title: "SERVER", detail: "← Response" },
        ],
      },
      questions: [
        { question: "Server response өгөөгүй байхад browser бүтээгдэхүүний data-г мэдэх үү?", answer: "Зөвхөн урьдчилан bundle/cache-д байсан бол мэднэ. Шинэ server data-г response ирсний дараа авна." },
        { question: "Browser server байж болох уу?", answer: "Энэ хичээлийн урсгалд browser client. Ерөнхий сүлжээний хувьд програмууд олон үүрэгтэй байж болох ч mental model-оо одоохондоо client/browser, server гэж тогтооно." },
      ],
      misconceptions: [
        { claim: "Server гэдэг нь заавал асар том физик машин.", correction: "Server гэдэг нь request-д хариулж буй үүрэг болон програмыг хэлж болно; laptop дээр ч local server ажиллаж чадна." },
        { claim: "Frontend server-тэй хамаагүй.", correction: "Frontend server data, latency, status, error-оос хамаарч loading, success, empty, error UI үзүүлнэ." },
      ],
      teachingNotes: [
        "Request сумыг үргэлж client-ээс server рүү, response сумыг server-ээс client рүү зур. Чиглэлийг зориуд сольж асуугаад засуулах нь тогтоц сайтай.",
        "Database-г дөрөв дэх гол ойлголт болгож гүнзгийрүүлэхгүй; server-ийн ард байж болох эх сурвалж гэж л тэмдэглэ.",
      ],
      takeaway: "Browser request-ийг эхлүүлж response-ийг дүрслэнэ; server request-ийг боловсруулж response үүсгэнэ.",
    },
    {
      id: "http",
      number: "05",
      title: "HTTP бол request–response солилцох дүрэм",
      eyebrow: "Message · method · status",
      duration: "10–12 минут",
      whyItMatters:
        "Network debugging хийхэд ‘ажиллахгүй байна’ гэхээс илүү request явсан уу, ямар method ашигласан, ямар status ирсэн, body юу байсан гэдгийг evidence болгон уншдаг.",
      explanation: [
        "HTTP request нь method, URL/path, headers болон шаардлагатай үед body агуулна. GET ихэвчлэн data авах, POST шинэ data илгээх/үүсгэхэд хэрэглэгддэг. PUT/PATCH update, DELETE устгах intent илэрхийлдэг ч server эдгээрийг яаж хэрэгжүүлэхээ өөрөө шийднэ.",
        "HTTP response нь status code, headers, body агуулна. 2xx амжилт, 3xx чиглүүлэлт, 4xx client/request талын асуудал, 5xx server талын failure-г ерөнхийд нь бүлэглэнэ. Status code бол оношлох эхний баримт; бүх root cause-г ганцаараа тайлбарлахгүй.",
        "HTTPS нь HTTP message-г сүлжээгээр хамгаалсан encrypted connection дээгүүр дамжуулна. Энэ хичээлд encryption-ийн алгоритм биш, address bar дахь https болон secure transport гэсэн утгыг л тогтооно.",
      ],
      mentalModel: {
        title: "Дүрэмтэй маягт ба хариу тасалбар",
        explanation:
          "Request бол хаашаа, ямар үйлдэл, ямар нэмэлт мэдээлэлтэйг тогтсон талбараар бичсэн маягт. Response бол үр дүнгийн код, тайлбар metadata, бодит агуулгатай хариу тасалбар.",
      },
      example: {
        title: "Нэг resource, өөр үр дүн",
        explanation:
          "GET /products → 200 ба JSON ирж болно. GET /products/does-not-exist → 404. POST /products буруу data-тай бол 400. Server code эвдэрвэл 500 ирж болно.",
        code: "GET /products  →  200 OK\nGET /missing   →  404 Not Found\nPOST /products →  201 Created",
      },
      diagram: {
        label: "HTTP message-ийн хоёр тал",
        nodes: [
          { title: "REQUEST", detail: "Method · URL · headers · body?" },
          { title: "SERVER WORK", detail: "Route · logic · data" },
          { title: "RESPONSE", detail: "Status · headers · body" },
        ],
      },
      questions: [
        { question: "404 ирсэн бол Internet connection ажилласан уу?", answer: "Ихэнхдээ тийм. Request server талд хүрч, тухайн нөөц олдоогүй гэсэн HTTP response буцаж ирсэн evidence байна." },
        { question: "POST үргэлж database-д шинэ мөр үүсгэх үү?", answer: "Үгүй. POST intent нийтлэг боловч endpoint-ийн бодит behavior-ийг server implementation болон documentation тодорхойлно." },
        { question: "500 алдааг CSS засаж чадах уу?", answer: "Ерөнхийдөө үгүй. 500 server-side failure-г заана; frontend хэрэглэгчид зөв error state үзүүлж чадна." },
      ],
      misconceptions: [
        { claim: "GET, POST бол function-ийн нэр.", correction: "Эдгээр нь HTTP request method; server route method бүрт өөр handler ажиллуулж болно." },
        { claim: "200 ирвэл дэлгэц заавал зөв харагдана.", correction: "200 зөвхөн HTTP request амжилттайг хэлнэ; буруу HTML, CSS, data эсвэл client runtime error байж болно." },
        { claim: "4xx бүгд browser-ийн bug.", correction: "4xx нь request/authorization/resource талын асуудлыг заана; хэрэглэгчийн input, frontend request эсвэл endpoint address шалтгаан байж болно." },
      ],
      teachingNotes: [
        "Methods болон codes-ийг цээжлүүлэхээс өмнө intent ба category-г тогтоо. Энэ хичээлд 200, 201, 301/302, 400, 401, 403, 404, 500 хүрэлцээтэй.",
        "401 ба 403-ийн нарийн нэршил provider-оор будилах тохиолдол байж болохыг дурдаад гол санааг authentication vs permission гэж тайлбарла.",
      ],
      takeaway: "Request юу хүссэн, response юу болсон гэдгийг method, URL, status, headers, body evidence-ээр уншина.",
    },
    {
      id: "frontend",
      number: "06",
      title: "HTML, CSS, JavaScript нийлж frontend-ийг бүтээнэ",
      eyebrow: "Structure · presentation · behavior",
      duration: "8–10 минут",
      whyItMatters:
        "Сурагч асуудлыг зөв давхаргад засахын тулд document structure, visual rule, behavior/data flow-ийн хариуцлагыг ялгах хэрэгтэй. Энэ нь дараагийн HTML хичээлийн шууд суурь.",
      explanation: [
        "HTML нь heading, paragraph, button, form зэрэг агуулгын бүтэц ба утгыг тодорхойлно. CSS нь layout, color, spacing, typography, responsive дүрмээр тэдгээрийг хэрхэн харагдахыг удирдана. JavaScript event, state, data fetch, dynamic update-аар зан төлөв нэмнэ.",
        "Frontend бол хэрэглэгчийн browser дээр харагдаж, харилцаж буй бүтээгдэхүүний хэсэг. Гэхдээ frontend server-ээс тасархай биш: initial HTML, API data, image, font авч, loading/error төлөв удирдана.",
        "Browser HTML-ийг DOM tree, CSS-ийг style rules болгон боловсруулж, layout ба paint хийж пиксел гаргана. JavaScript DOM/state-г өөрчилбөл browser шаардлагатай хэсгийг дахин тооцож дүрслэнэ.",
      ],
      mentalModel: {
        title: "Байшингийн бүтэц, засал, автомат ажиллагаа",
        explanation:
          "HTML нь өрөө, хаалга, шатны бүтэц; CSS нь өнгө, хэмжээ, байрлал; JavaScript нь гэрэл асаах, хаалга автоматаар нээх behavior. Frontend инженер эдгээрийг хэрэглэгчид нэг туршлага болгон нийлүүлнэ.",
      },
      example: {
        title: "Нэг button-ийн гурван үүрэг",
        explanation:
          "HTML <button> гэж утгыг өгнө. CSS button-ийн өнгө, хэмжээ, hover-г өгнө. JavaScript click хийхэд cart count нэмнэ.",
        code: "HTML: <button>Сагсанд нэмэх</button>\nCSS:  button { background: lime; }\nJS:   button.addEventListener(\"click\", addToCart)",
      },
      diagram: {
        label: "Browser-ийн render pipeline-ийн beginner model",
        nodes: [
          { title: "HTML", detail: "Structure / DOM" },
          { title: "CSS", detail: "Style / layout" },
          { title: "JavaScript", detail: "Behavior / state" },
          { title: "RENDER", detail: "Хэрэглэгчийн хардаг page" },
        ],
      },
      questions: [
        { question: "Text буруу heading болсон бол эхэлж HTML, CSS, JS-ийн алийг шалгах вэ?", answer: "HTML. Semantic element болон document structure-ийн асуудал байх магадлалтай." },
        { question: "Button харагдаж байгаа ч click ажиллахгүй бол юу шалгах вэ?", answer: "JavaScript handler/runtime error болон disabled state-г шалгана; element өөрөө HTML-д байгаа эсэхийг бас батална." },
      ],
      misconceptions: [
        { claim: "Frontend гэдэг нь зөвхөн өнгө, дизайн.", correction: "Frontend accessibility, behavior, state, data flow, performance, error handling-ийг мөн хариуцна." },
        { claim: "JavaScript бүх UI-г хариуцах ёстой.", correction: "Structure-д HTML, presentation-д CSS-ийн native capability-г ашиглах нь ойлгомжтой, хүртээмжтэй, найдвартай." },
      ],
      teachingNotes: [
        "Нэг button дээр гурван технологийн үүргийг харуул; гурван тусдаа том app жишээ хэрэггүй.",
        "DOM, render pipeline-г нэрлэх боловч parsing algorithm, CSSOM internals руу гүн орохгүй. Дараагийн хичээлүүдэд эргэж ирнэ.",
      ],
      takeaway: "HTML утга ба бүтэц, CSS харагдах дүрэм, JavaScript зан төлөв; frontend эдгээрийг browser дээрх хэрэглэгчийн туршлага болгоно.",
    },
    {
      id: "full-flow",
      number: "07",
      title: "URL-аас rendered page хүртэлх бүтэн урсгал",
      eyebrow: "Бүх ойлголтыг нэг trace-д холбох",
      duration: "8–10 минут",
      whyItMatters:
        "Сурагч нэр томьёо тус бүрийг мэдэхээс гадна бодит request-ийн дараалалд зөв байрлуулах ёстой. Энэ mental model дараагийн бүх frontend debugging-ийн үндэс болно.",
      explanation: [
        "Browser URL-ийг задлаад host-ийн хаягийг cache/DNS-ээс олно. Дараа нь server талтай connection үүсгэж HTTP request илгээнэ. Server route, logic, data-гаа ашиглан HTTP response бэлдэж буцаана.",
        "Browser response body дахь HTML-ийг parse хийнэ. HTML CSS, JavaScript, image, font заасан бол тус бүр нэмэлт request үүсч болно. Browser structure, style, layout, paint-ийг тооцоод page харуулна; JavaScript дараа нь interaction эсвэл data update хийж болно.",
        "Энэ бол beginner-д зориулсан дараалал. Бодит browser cache, parallel request, connection reuse, service worker зэрэг optimization ашигладаг тул бүх алхам үргэлж яг нэг нэгээрээ харагдахгүй байж болно.",
      ],
      mentalModel: {
        title: "Relay race",
        explanation:
          "URL, DNS, connection, request, server, response, resource loading, render гэсэн шат бүр baton дамжуулна. Аль шатанд baton зогссоныг evidence-ээр олох нь debugging.",
      },
      example: {
        title: "https://example.com нээх 8 алхам",
        explanation:
          "Энэ flow-г эхлээд самбарт хоосон хайрцгаар зурж, сурагчдаар нэрлүүлсний дараа Network demo-той тулгана.",
        code: "1 URL parse → 2 DNS lookup → 3 connect → 4 HTTP request\n→ 5 server work → 6 HTTP response → 7 subresources → 8 render",
      },
      diagram: {
        label: "URL → page flow",
        nodes: [
          { title: "1 URL", detail: "Browser хаягийг задлана" },
          { title: "2 DNS", detail: "Host → IP" },
          { title: "3 CONNECT", detail: "Server талтай холбогдоно" },
          { title: "4 REQUEST", detail: "HTTP message →" },
          { title: "5 SERVER", detail: "Боловсруулна" },
          { title: "6 RESPONSE", detail: "← status + body" },
          { title: "7 ASSETS", detail: "CSS · JS · image" },
          { title: "8 RENDER", detail: "Page харагдана" },
        ],
      },
      questions: [
        { question: "DNS нь HTTP request-ээс өмнө юу, дараа юу?", answer: "Host-ийн IP cache-д байхгүй бол HTTP connection/request-ээс өмнө DNS lookup хэрэгтэй." },
        { question: "HTML response ирсэн даруй бүх page бэлэн үү?", answer: "Заавал биш. Browser HTML parse хийж, CSS/JS/image/font нэмэлтээр татаж, layout/paint хийх шаардлагатай." },
      ],
      misconceptions: [
        { claim: "Нэг page нээхэд яг нэг request явна.", correction: "Document request-ийн дараа CSS, JavaScript, image, font, API зэрэг олон request явж болно." },
        { claim: "Эдгээр 8 алхам бодит browser-т үргэлж цуваа.", correction: "Энэ нь reasoning model. Cache, parallel loading, connection reuse зэргээс бодит timing давхцаж болно." },
      ],
      teachingNotes: [
        "8 алхмыг нэг дор лекцлэхээс илүү өмнөх concept бүрийн card-ийг самбар дээр хөдөлгөн нэг flow болго.",
        "Сурагч аль нэг алхмыг мартвал зөв хариуг хэлэхээс өмнө ‘өмнөх талд юу байна, дараагийн талд юу хэрэгтэй вэ?’ гэж чиглүүл.",
      ],
      takeaway: "Page бол нэг файл ид шидээр гарч ирсэн зүйл биш; нэр олох, message солилцох, resource боловсруулах олон шатны үр дүн.",
    },
    {
      id: "network-evidence",
      number: "08",
      title: "DevTools Network бол таамгийг шалгах evidence",
      eyebrow: "Browser юу хийснийг бодитоор харах",
      duration: "Live demo-той хамт 15 минут",
      whyItMatters:
        "Инженер request явсан эсэх, хаашаа явсан, ямар status, type, timing ирснийг таахгүй. Browser-ийн бүртгэсэн Network data-г баримт болгон ашиглана.",
      explanation: [
        "Network tab нь DevTools нээгдсэн хугацаанд browser-ийн network request-үүдийг жагсаана. Page refresh хийснээр initial document болон дараагийн asset/API request-үүдийг харж болно.",
        "Headers хэсгээс Request URL, Request Method, Status Code, response headers-ийг уншина. Type/Content-Type нь document, stylesheet, script, image, fetch зэрэг ямар resource ирснийг ойлгоход тусална. Timing waterfall нь хүсэлт хэзээ эхэлж, хэр удаан үргэлжилснийг харуулна.",
        "Network tab бүх дотоод процессийг харуулахгүй. Жишээ нь DNS cache ашигласан бол lookup тусдаа урт timing болж харагдахгүй байж болно. Тиймээс хараагүй зүйлээ ‘болоогүй’ гэж шууд дүгнэхгүй.",
      ],
      mentalModel: {
        title: "Нислэгийн black box биш, хүргэлтийн tracking",
        explanation:
          "Request бүр tracking мөртэй: хаашаа, ямар аргаар, хэдийд явсан, ямар кодтой хариу ирсэн. Энэ бүртгэлээр claim-ийг батална, гэхдээ browser-ийн бүх internals-ийг бүрэн харуулахгүй.",
      },
      example: {
        title: "example.com document request",
        explanation:
          "Network → Doc filter → example.com → Headers дээр Request URL, GET, 200; response header/body дээр text/html гэдгийг олно.",
      },
      diagram: {
        label: "Network мөрийг унших дараалал",
        nodes: [
          { title: "NAME / URL", detail: "Хаашаа?" },
          { title: "METHOD", detail: "Ямар intent?" },
          { title: "STATUS", detail: "Юу болсон?" },
          { title: "TYPE", detail: "Ямар агуулга?" },
          { title: "TIMING", detail: "Хэр удав?" },
        ],
      },
      questions: [
        { question: "Network жагсаалт хоосон байвал эхний шалгах зүйл юу вэ?", answer: "DevTools нээлттэй үед page-ээ refresh хийсэн эсэх. Recording асаалттай эсэхийг дараа нь шалгана." },
        { question: "200 document request байхад page эвдэрхий харагдаж болох уу?", answer: "Тийм. CSS/JS asset failed, runtime error, буруу data эсвэл rendering bug байж болно." },
      ],
      misconceptions: [
        { claim: "Network tab дээр харагдсан бүхэн алдаа.", correction: "Энэ нь бүх request-ийн log. Status, color, response-оор success/failure-г ялгана." },
        { claim: "Cache-аас ирсэн response бодит evidence биш.", correction: "Cache өөрөө browser-ийн бодит behavior; харин network round trip хэмжих бол Disable cache ашиглаж нөхцөлөө тэмдэглэнэ." },
      ],
      teachingNotes: [
        "Demo эхлэхээс өмнө сурагчдаар method, status-ийг таалга. Дараа нь таамгаа UI evidence-тэй тулга.",
        "Browser/version-оор panel-ийн нэр, байрлал бага зэрэг өөр байж болохыг хэл; exact pixel биш field-ийн утгыг олох нь зорилго.",
      ],
      takeaway: "AI эсвэл өөрийн таамгийг Network-ийн URL, method, status, type, timing баримтаар шалга.",
    },
  ],
  liveDemo: {
    title: "Нэг page load-ийг эхнээс нь дуустал trace хийх",
    duration: "15 минут",
    goal: "Багш https://example.com document request-ийг ашиглан URL → request → response → render mental model-ийг бодит browser evidence-тэй холбоно.",
    setup: [
      "Projector дээр browser zoom-ийг 125–150% болго.",
      "Шинэ tab нээгээд DevTools → Network-ийг урьдчилан бэлд.",
      "Preserve log-ийг унтрааж, шаардлагатай бол Disable cache-ийг асаа.",
      "Network жагсаалтыг цэвэрлээд Doc filter хаана байдгийг заа.",
    ],
    steps: [
      { title: "URL-ийг урьдчилан таалгах", instruction: "Address bar-д https://example.com бичээд Enter дарахаас өмнө зогс.", observe: "Сурагчдаас эхний харагдах Network мөрийн method, status, type-ийг таалгуул.", explain: "Таамаг бол evidence биш; одоо browser-ийн хийсэн зүйлийг хэмжинэ." },
      { title: "Request-ийг capture хийх", instruction: "Enter дарж page ачаалсны дараа Network жагсаалтын document мөрийг сонго.", observe: "Name, Status, Type, Size, Time баганууд болон waterfall.", explain: "Нэг мөр нь нэг HTTP request/response exchange-ийг төлөөлнө." },
      { title: "General headers унших", instruction: "Headers → General хэсгийг нээж Request URL, Request Method, Status Code-ийг заа.", observe: "URL https://example.com/, GET, орчноос хамааран 200 эсвэл redirect дараалал.", explain: "URL хаашаа, method ямар intent, status юу болсныг хэлнэ. Redirect байвал дараагийн request-ийг хамт trace хий." },
      { title: "Response headers шалгах", instruction: "Response Headers дотроос content-type-ийг ол.", observe: "text/html агуулга болон бусад metadata.", explain: "Browser body-г HTML гэж боловсруулах шийдвэрт media type тусална." },
      { title: "Response body харах", instruction: "Response эсвэл Preview таб руу орж HTML source/preview-г үзүүл.", observe: "Server-ээс ирсэн body болон дэлгэц дээрх rendered page ижил зүйл биш.", explain: "Browser HTML-г parse, style, layout, paint хийсний дараа хэрэглэгч page харна." },
      { title: "Олон request-тэй page харьцуулах", instruction: "DEVX page руу буцаж refresh хийгээд document, CSS, script, font request-үүдийг Type-аар шүү.", observe: "Нэг page олон resource request хийж байна.", explain: "Initial HTML дараагийн resource-үүдийг зааж өгч болох тул page load ганц request биш." },
      { title: "Evidence statement бичих", instruction: "Самбар дээр ‘Бидний харсан / Бидний шууд хараагүй’ гэсэн хоёр багана үүсгэ.", observe: "URL, GET, status, content-type харсан; DNS internals-ийг энэ panel-ээс бүрэн хараагүй.", explain: "Evidence-ийн хязгаарыг нэрлэх нь инженерийн үнэнч дүгнэлт." },
    ],
    expectedOutput: [
      "Request URL: https://example.com/ (redirect байвал final URL-г тусад нь тэмдэглэнэ)",
      "Request Method: GET",
      "Status Code: ихэнх орчинд 200; redirect харагдвал 3xx → 200 дараалал",
      "Content-Type: text/html",
      "DEVX page дээр document-оос гадна stylesheet/script/font зэрэг олон request",
    ],
    recovery: [
      "Жагсаалт хоосон: DevTools нээлттэй хэвээр page refresh хий; recording улаан indicator асаалттай эсэхийг шалга.",
      "example.com blocked: энэ DEVX page-ийн document request-ийг ашигла; exact domain биш evidence fields чухал.",
      "Status өөр: зөв хариу мэт хүчээр 200 болгохгүй. Бодит status, network condition, redirect-ийг тэмдэглээд тайлбарла.",
      "Panel текст жижиг: browser zoom бус DevTools settings-ийн UI zoom эсвэл projector resolution-ийг тохируул.",
    ],
  },
  guidedPractice: {
    title: "Request мөрдөгч — evidence-ээс flow сэргээх",
    duration: "14 минут",
    goal: "Хос бүр бодит document request сонгож, 4 evidence цуглуулаад URL-аас render хүртэлх урсгалыг өөрийн үгээр тайлбарлана.",
    instructions: [
      "2 хүнтэй баг болж нэг browser ашигла: нэг нь Driver, нөгөө нь Evidence recorder.",
      "example.com эсвэл багшийн өгсөн safe page-ийг Network нээлттэй үед refresh хий.",
      "Document request-ээ олоод Request URL, Method, Status, Content-Type дөрвийг тэмдэглэ.",
      "Request-ээс өмнө болсон байж болох 2 алхам, response-ээс дараа болсон 2 алхмыг бич.",
      "Нийт request-ийн тоог тэмдэглээд яагаад нэгээс олон байгааг нэг resource жишээгээр тайлбарла.",
      "Driver ба Recorder үүргээ сольж, хариугаа өөр request дээр дахин шалга.",
    ],
    constraints: [
      "AI ашиглахгүй — энэ хэсэгт зөвхөн browser evidence хэрэглэнэ.",
      "Status-ийг таахгүй; харагдсан утгыг яг бичнэ.",
      "DNS timing харагдаагүй бол ‘DNS болоогүй’ гэж дүгнэхгүй.",
      "Нууц token, cookie, authorization header-ийг screenshot-д оруулахгүй.",
      "Хариу бүрт ‘би хаанаас мэдэв?’ гэсэн evidence field байна.",
    ],
    hints: [
      "Document мөр олохгүй бол Type/Doc filter ашигла.",
      "Content-Type General хэсэгт биш бол Response Headers дотор хай.",
      "Олон request-ийн шалтгааныг HTML доторх CSS, JavaScript, image, font холбоосоос бод.",
      "Flow гацвал client-ээс эхэл: browser дараагийн шатанд юу мэдэх шаардлагатай вэ?",
    ],
    expectedResult: [
      "Дөрвөн evidence field бодит утгатай бөглөгдсөн байна.",
      "Request сум browser → server, response сум server → browser чиглэлтэй байна.",
      "DNS-ийг HTTP response эсвэл server-тэй нэг зүйл гэж бичээгүй байна.",
      "HTML/CSS/JavaScript resource-ийн дор хаяж нэг жишээг Network-оос олсон байна.",
      "Хосын нэг хүн 60 секундэд бүтэн flow-г аман тайлбарлаж чадна.",
    ],
    stretchTask:
      "Нэг 404 request зориудаар үүсгэхийн тулд domain-ийн ард /this-page-should-not-exist-devx нэм. 404 ирвэл Internet, DNS, server хүртэлх аль хэсгүүд ажилласан гэж evidence-ээр дүгнэж болохыг бич.",
    debriefQuestions: [
      { question: "Танай page яагаад нэгээс олон request хийсэн бэ?", answer: "Document нь CSS, JavaScript, image, font эсвэл API зэрэг нэмэлт resource заасан учраас." },
      { question: "Ямар claim-ийг Network tab-аас шууд баталж чадаагүй вэ?", answer: "DNS-ийн дотоод lookup дараалал, server-ийн database logic зэрэг browser panel-д бүрэн харагдахгүй зүйлс." },
    ],
  },
  aiLab: {
    title: "AI-ийн 7 алхмыг инженерийн evidence-ээр шалгах",
    duration: "10 минут",
    goal: "AI-аас ойлгомжтой explanation авахын зэрэгцээ claim бүрийг шууд үнэн гэж үзэлгүй, ажиглагдах evidence болон баталгаажихгүй хэсгийг ялгана.",
    prompt: `Би frontend-ийн анхны хичээл үзэж байна.

https://example.com URL-ийг browser-т оруулснаас rendered page харагдах хүртэлх үйл явцыг 7–8 алхмаар beginner-friendly Монгол хэлээр тайлбарла.

Заавал оруулах ойлголт:
- Internet ба Web-ийн ялгаа
- URL, domain, DNS
- browser/client ба server
- HTTP request/response, method, status
- HTML, CSS, JavaScript ба rendering

Алхам бүрийн ард дараах label-ийн аль нэгийг тавь:
[NETWORK-ЭЭР ШАЛГАЖ БОЛНО]
[ӨӨР TOOL/DOC ХЭРЭГТЭЙ]
[ХЯЛБАРШУУЛСАН MODEL]

Мэдэхгүй эсвэл browser бүрт ялгаатай зүйлийг зохиохгүй, тодорхой тэмдэглэ.`,
    steps: [
      { title: "AI output авах", instruction: "Prompt-ийг AI chat-д өгөөд хариуг өөрчлөлгүй хадгал.", observe: "Алхам бүр label-тэй эсэх, AI uncertainty хэлсэн эсэх.", explain: "Сайхан бичсэн байдал factual evidence биш." },
      { title: "Claim-үүдийг задлах", instruction: "URL, DNS, GET, status, HTML, нэмэлт resource гэсэн claim-үүдийг тусдаа мөр болго.", observe: "Нэг өгүүлбэрт олон claim байж болохыг ол.", explain: "Шалгахын тулд claim хэмжигдэхүйц жижиг байх хэрэгтэй." },
      { title: "Network evidence цуглуулах", instruction: "Live Demo-ийн дагуу example.com document request-ээс URL, method, status, content-type ол.", observe: "AI claim болон бодит field таарч/зөрж байгаа эсэх.", explain: "Runtime evidence нь энэ request, энэ орчны тухай батална." },
      { title: "Evidence-ийн хил тогтоох", instruction: "Network-ээс шууд хараагүй DNS/cache/server internals claim-ийг ‘батлагдаагүй’ гэж тэмдэглэ.", observe: "Батлагдаагүй гэдэг нь заавал буруу гэсэн үг биш.", explain: "Өөр tool эсвэл official documentation хэрэгтэй claim байна." },
      { title: "Инженерийн дүгнэлт", instruction: "AI зөв хэлсэн 2, засах 1, нэмэлт эх сурвалж хэрэгтэй 1 claim бич.", expected: "Дүгнэлт бүр evidence эсвэл evidence-ийн хязгаарыг нэрлэсэн байна." },
    ],
    verificationTable: [
      { claim: "Browser GET request илгээсэн", evidence: "Network → Headers → Request Method", pass: "GET гэж бодитоор харагдсан" },
      { claim: "Server амжилттай HTML буцаасан", evidence: "Status Code + Content-Type + Response", pass: "2xx, text/html, body харагдсан" },
      { claim: "Нэг page олон resource татаж болно", evidence: "Network request list ба Type column", pass: "Document-оос өөр resource эсвэл DEVX page дээр олон request" },
      { claim: "DNS яг ийм дарааллаар ажилласан", evidence: "Network panel дангаараа хангалтгүй байж болно", pass: "‘Бүрэн батлаагүй’ гэж үнэн зөв тэмдэглэсэн" },
    ],
    teacherNotes: [
      "AI зөв хариулсан ч lab амжилтгүй болсон гэсэн үг биш. Зорилго нь hallucination барих биш, verification workflow хэрэглэх.",
      "Сурагч ‘AI ингэж хэлсэн’ гэдгийг evidence гэж нэрлэвэл claim ба evidence-ийн ялгааг дахин асуу.",
      "Cookie эсвэл authorization header screenshot хийхгүй байх privacy сануулгыг lab-аас өмнө хэл.",
    ],
  },
  checkpoint: {
    duration: "6 минут",
    instructions:
      "Эхлээд сурагч бүр хариугаа AI ашиглахгүйгээр бичнэ. Дараа нь хосоор ярилцаад багш Teacher Mode дахь хариу, тайлбарыг нээнэ.",
    questions: [
      { type: "concept", question: "Internet болон Web-ийн ялгааг нэг өгүүлбэрээр хэл.", answer: "Internet бол холболтын дэд бүтэц; Web бол түүн дээр HTTP, URL, browser ашигладаг үйлчилгээ.", followUp: "Web биш боловч Internet ашигладаг нэг жишээ нэрлэ." },
      { type: "concept", question: "Domain URL-ийн бүхэл хэсэг мөн үү?", answer: "Үгүй. Domain/host нь URL-ийн нэг хэсэг; protocol, path, query, fragment нэмэгдэж болно.", followUp: "https://example.com/products?id=7 дотроос domain ба query-г заа." },
      { type: "concept", question: "DNS-ийн response болон HTTP response хоёрын ялгаа юу вэ?", answer: "DNS response нэрийн record/IP олгоно; HTTP response status, headers, body буюу веб нөөцийн агуулга өгнө." },
      { type: "concept", question: "Request ба response-ийн чиглэлийг зур.", answer: "Browser/client → request → server; server → response → browser/client." },
      { type: "application", question: "Network дээр 404 харагдлаа. Аль хэсэг ажилласан гэж хэлж болох вэ?", answer: "Browser request үүсгэсэн, сүлжээгээр server талд хүрсэн, server HTTP response өгсөн гэж үзэх evidence байна. Харин хүссэн route/resource олдоогүй." },
      { type: "application", question: "Document request 200 боловч page styling-гүй байна. Дараа нь юу шалгах вэ?", answer: "Stylesheet request байгаа эсэх, status/content-type, CSS load error болон DevTools Console-ийг шалгана." },
      { type: "application", question: "AI ‘DNS HTML буцаана’ гэж хэлбэл яаж шалгах вэ?", answer: "Claim-ийг course model/official DNS documentation-тэй тулгаж, Network дээр HTML нь HTTP document response-ийн body болж ирснийг харуулна." },
      { type: "application", question: "HTML, CSS, JavaScript-ийн үүргийг нэг button дээр тайлбарла.", answer: "HTML button-ийн утга/structure, CSS харагдах байдал, JavaScript click behavior/state update-ийг хариуцна." },
    ],
  },
  wrapUp: {
    summary: [
      "Internet бол дэд бүтэц, Web бол түүн дээр ажиллах үйлчилгээ.",
      "URL protocol, host/domain, path, query, fragment-аар нөөцийг заана.",
      "DNS domain-ийг IP хаягтай холбохоос HTML буцаадаггүй.",
      "Browser/client request эхлүүлж, server response үүсгэнэ.",
      "HTTP message-ийг method, URL, status, headers, body-гаар уншина.",
      "HTML structure, CSS presentation, JavaScript behavior; нийлээд frontend experience болно.",
      "Network tab бол browser-ийн бодит request/response evidence.",
    ],
    abilities: [
      "URL-аас rendered page хүртэлх урсгалыг зөв дарааллаар тайлбарлах",
      "Network tab-аас request/response-ийн үндсэн evidence олох",
      "Internet, Web, DNS, HTTP-ийн үүргийг хооронд нь ялгах",
      "AI-ийн тайлбарыг browser evidence-тэй тулгаж шалгах",
    ],
    beforeNextLesson: [
      "Chrome, Edge эсвэл Firefox browser-оо шинэчилсэн байх",
      "Компьютер дээрээ програм суулгах эрхтэй эсэхээ шалгах",
      "Өөрийн operating system-ийн нэр, хувилбарыг мэдэж ирэх",
    ],
    finalModel:
      "URL → DNS → connection → HTTP request → server work → HTTP response → HTML/CSS/JS resources → browser render",
    exitTicket: [
      { question: "Өнөөдрийн урсгалаас нэг алхам алга болбол аль нь хамгийн түрүүнд ямар шинж тэмдэг үзүүлэх вэ?", answer: "Нэг зөв хариу байхгүй. Сурагч алхам + ажиглагдах шинж + evidence гурвыг логик холбоотой хэлсэн байх ёстой." },
      { question: "Network tab-аас өнөөдөр шалгасан 4 evidence юу вэ?", answer: "Request URL, Request Method, Status Code, Content-Type." },
      { question: "AI output авсны дараагийн инженерийн алхам юу вэ?", answer: "Claim-ийг review хийгээд тохирох runtime/tool/documentation evidence-ээр verify хийх." },
    ],
    nextLesson: {
      title: "Lesson 02 — Хөгжүүлэлтийн орчин",
      connection:
        "Browser вебийн үр дүнг харуулдгийг мэддэг болсон. Одоо тэр frontend файлуудыг бичих editor, command ажиллуулах terminal, JavaScript ажиллуулах Node.js, package удирдах npm гэсэн үндсэн орчноо бэлдэнэ.",
    },
    teacherClose:
      "“Өнөөдрөөс эхлээд page нээгдэхгүй үед ‘Internet эвдэрсэн’ гэж таахгүй. Урсгалын аль шатанд evidence тасарсныг олно.” гэж хичээлийг хаа.",
  },
};
