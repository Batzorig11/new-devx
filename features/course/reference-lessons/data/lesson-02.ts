import type { ReferenceLesson } from "../types";

export const lesson02Reference: ReferenceLesson = {
  id: 2,
  durationMinutes: 120,
  teacherGoal:
    "Сурагч development environment-ийг нэг app гэж бус, editor + terminal/shell + file system + Node.js + npm гэсэн хамтран ажилладаг хэрэгслүүдийн систем гэж ойлгоод, өөрийн workspace-ийг аюулгүй үүсгэж ажиллагааг нь command output-оор нотолдог болно.",
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
      "Editor, terminal, shell, Node.js, npm-ийн үүргийг жишээгээр ялгаж тайлбарлах.",
      "Current folder, absolute path, relative path гэсэн ойлголтыг уншиж, зөв folder руу шилжих.",
      "pwd/Get-Location, ls/Get-ChildItem, cd, mkdir командуудыг өгөгдөл устгалгүй ашиглах.",
      "Node.js, npm, editor-ийн ажиллагааг version болон runtime output-оор verify хийх.",
      "Setup алдааг OS, command, current folder, бүтэн output, expected result гэсэн evidence-тэйгээр оношлуулах.",
    ],
    prerequisites: [
      "Lesson 01-ийн browser/client, server, HTML/CSS/JavaScript-ийн үүргийн суурь ойлголт",
      "Файл болон folder үүсгэх, нэрлэх анхан шатны чадвар",
      "Өөрийн operating system Windows, macOS эсвэл Linux-ийн аль нь болохыг мэдэх",
    ],
    tools: [
      "VS Code эсвэл одоо ашиглаж буй code editor",
      "Windows PowerShell, macOS Terminal эсвэл Linux terminal",
      "Node.js-ийн LTS release болон түүнтэй хамт ирэх npm",
      "AI chat — зөвхөн AI Lab-ийн оношлох дасгалд",
    ],
    outcomes: [
      "Terminal-аас course workspace үүсгээд current folder-оо output-оор батална.",
      "Зөв workspace-ийг editor дээр root folder болгон нээнэ.",
      "node --version, npm --version, code --version output-ийг таалгүйгээр уншина.",
      "Node.js-ээр browser нээлгүй нэг мөр JavaScript ажиллуулж runtime evidence авна.",
      "Алдаа гарвал destructive command ажиллуулахын өмнө нотолгоо цуглуулж, тусламжийн хүсэлтээ зөв бүтэцтэй бичнэ.",
    ],
    preparation: [
      "Анги эхлэхээс өмнө Windows болон macOS/Linux-ийн command хувилбаруудыг тусдаа terminal дээр турш.",
      "VS Code, Node.js LTS суулгагчийг албан ёсны эх сурвалжаас урьдчилан бэлд; сурагчдын internet удаан бол offline fallback төлөвлө.",
      "Сурагчдад admin эрх байхгүй тохиолдолд багшийн demo-г дагуулж, суулгалтыг хичээлийн дараа хийх хувилбар бэлд.",
      "Demo folder өмнө нь үүссэн эсэхийг шалгаж, өөр нэр ашиглах эсвэл Finder/File Explorer-оор аюулгүй цэвэрлэхээр шийд.",
      "Энэ хичээлд rm, del, Remove-Item, sudo болон permission өргөн өөрчлөх command ашиглахгүй гэсэн дүрмийг эхэнд нь хэл.",
    ],
    timeline: [
      { start: "00:00", duration: "7 мин", title: "Hook ба environment inventory", teacherAction: "“VS Code суусан бол код ажиллахад өөр юу хэрэгтэй вэ?” гэж асуугаад OS, editor, terminal-ийн бодит нэрийг сурагч бүрээр бичүүл." },
      { start: "00:07", duration: "13 мин", title: "Хэрэгслүүдийн үүрэг", teacherAction: "Editor, terminal, shell, Node.js, npm-ийг нэг workflow дээр байрлуулж, аль нь юу хийхгүйг тодруул." },
      { start: "00:20", duration: "18 мин", title: "File system, path, current folder", teacherAction: "Absolute/relative path-ийг classroom analogy болон бодит prompt/output-оор тайлбарлаж, command бүр хаана үйлчлэхийг таалга." },
      { start: "00:38", duration: "15 мин", title: "Node.js, npm, LTS", teacherAction: "Browser runtime ба Node runtime-ийн ялгааг гаргаж, npm-ийг package manager болон script runner гэж байрлуул." },
      { start: "00:53", duration: "8 мин", title: "PATH ба evidence", teacherAction: "Version command юу нотлох, command not found юуг хараахан нотлохгүйг тайлбарла." },
      { start: "01:01", duration: "7 мин", title: "Завсарлага", teacherAction: "Сурагчдыг босгож амраах зуур demo terminal болон projector zoom-ийг дахин шалга." },
      { start: "01:08", duration: "18 мин", title: "Live setup demo", teacherAction: "Current folder-оос workspace, editor, version check, Node runtime output хүртэл бүх алхмыг think-aloud хэлбэрээр үзүүл." },
      { start: "01:26", duration: "19 мин", title: "Guided practice", teacherAction: "Хос бүр workspace үүсгэж, Driver/Navigator үүргээр path болон output-оо харилцан шалгана." },
      { start: "01:45", duration: "9 мин", title: "AI troubleshooting lab", teacherAction: "AI-ийн санал болгосон нэг read-only check-ийг утгыг нь тайлбарласны дараа runtime evidence-ээр verify хийлгэ." },
      { start: "01:54", duration: "6 мин", title: "Checkpoint ба wrap-up", teacherAction: "Зургаан богино асуултаас сонгон аман/бичгээр шалгаад Git-ийн дараагийн хичээл рүү холбо." },
    ],
  },
  concepts: [
    {
      id: "environment-toolchain",
      number: "01",
      title: "Development environment бол хэрэгслүүдийн хамтын систем",
      eyebrow: "Нэг app биш, toolchain",
      duration: "7–8 минут",
      whyItMatters:
        "Эхлэгчид editor дотор terminal харагддаг учраас VS Code бүх зүйлийг өөрөө хийдэг гэж ойлгох нь элбэг. Үүргийг нь салгаж чадвал ‘код буруу юу, command олдохгүй байна уу, эсвэл буруу folder-т байна уу?’ гэдгийг хурдан ялгана.",
      explanation: [
        "Development environment гэдэг нь код бичих, файл хадгалах, command ажиллуулах, програм ажиллуулах, dependency удирдах хэрэгслүүд нийлсэн ажлын орчин. Энэ хичээлд бид editor, terminal, shell, file system, Node.js, npm гэсэн хэсгүүдийг ашиглана.",
        "Editor нь файл бичиж, засаж, project-ийн folder tree-г харуулна. Terminal нь text command оруулах цонх. Terminal дотор ажиллах PowerShell, zsh, bash зэрэг shell нь таны command-ийг уншиж operating system-д ажиллуулна.",
        "Node.js JavaScript кодыг browser-оос гадуур ажиллуулна. npm package татах, dependency бүртгэх, project script ажиллуулахад хэрэглэгдэнэ. Эдгээр хэрэгсэл тусдаа үүрэгтэй боловч нэг project дээр дарааллан хамтарч ажиллана.",
        "Алдаа гарвал эхлээд аль хэрэгслийн хил дээр тасарсныг нэрлэнэ. File editor-т харагдахгүй байвал workspace/path; node command олдохгүй байвал install эсвэл PATH; script ажиллаад error өгвөл runtime/code талын асуудал байж болно.",
      ],
      mentalModel: {
        title: "Мужааны ажлын ширээ",
        explanation:
          "Editor бол зураг, хэмжилтээ дэлгэдэг ширээ; terminal бол багажид өгч буй заавар; Node.js бол зааврыг гүйцэтгэх машин; npm бол шаардлагатай багаж, материалын бүртгэл шиг. Гэхдээ бодит системд эдгээр нь нэг эзэнтэй физик зүйл биш, тусдаа програмууд бөгөөд configuration-аар холбогдоно.",
      },
      example: {
        title: "Нэг JavaScript файлын workflow",
        explanation:
          "Та app.js файлыг editor-оор бичнэ, terminal-д node app.js гэж command өгнө, shell node executable-ийг олно, Node.js файлыг ажиллуулж output-ийг terminal-д буцаана. npm энэ энгийн алхамд заавал оролцохгүй.",
        code: "Editor → app.js → Terminal command → Shell → Node.js → Output",
        language: "text",
      },
      diagram: {
        label: "Development toolchain-ийн үүргийн урсгал",
        nodes: [
          { title: "EDITOR", detail: "Файл бичнэ" },
          { title: "TERMINAL + SHELL", detail: "Command дамжуулна" },
          { title: "NODE.JS", detail: "JavaScript ажиллуулна" },
          { title: "OUTPUT", detail: "Үр дүн / error" },
        ],
      },
      questions: [
        { question: "VS Code дотор terminal нээгддэг бол VS Code өөрөө Node.js мөн үү?", answer: "Үгүй. VS Code terminal-ийн UI-г харуулж болно; Node.js нь тусдаа суусан runtime." },
        { question: "app.js файлыг бичих болон ажиллуулах хоёр алхмыг ямар хэрэгслүүд хариуцах вэ?", answer: "Editor файлыг бичнэ. Terminal/shell-ээр node command өгч, Node.js ажиллуулна." },
      ],
      misconceptions: [
        { claim: "VS Code суулгавал Node.js, npm, Git бүгд автоматаар сууна.", correction: "Editor эдгээртэй integration хийж чадна, гэхдээ runtime болон version control хэрэгслийг тусад нь суулгана." },
        { claim: "Terminal бол зөвхөн мэргэжлийн хүмүүст зориулсан аюултай зүйл.", correction: "Terminal өөрөө аюултай биш; command-ийн үйлдэл чухал. Current folder-оо шалгаж, destructive command-аас зайлсхийвэл суурь ажиллагаа аюулгүй." },
      ],
      teachingNotes: [
        "Сурагчдын төхөөрөмж дээрх бодит нэрийг асуу: Windows Terminal бол terminal app, PowerShell бол shell гэдгийг нэг жишээгээр салга.",
        "Git-ийг нэрлэж болох ч command заахгүй. Version history-г дараагийн хичээлээр toolchain-д нэмнэ гэж холбо.",
      ],
      takeaway: "Development environment бол нэг програм биш; editor, terminal/shell, runtime, package manager тусдаа үүргээр хамтардаг toolchain.",
    },
    {
      id: "editor-workspace",
      number: "02",
      title: "Editor зөв workspace-ийг нээсэн байх ёстой",
      eyebrow: "Project root ба file tree",
      duration: "6–7 минут",
      whyItMatters:
        "Буруу folder-ийг editor дээр нээвэл файл олдохгүй, шинэ файл буруу газар хадгалагдаж, дараа нь npm эсвэл Git command өөр project дээр ажиллана. Workspace root-оо таних нь бүх дараагийн хичээлийн суурь дадал.",
      explanation: [
        "Editor дээр нэг файл дангаар нь нээх болон project folder-ийг workspace болгон нээх хоёр өөр. Folder-ийг нээвэл Explorer тухайн root-ийн доторх бүтэц, config, source file-уудыг нэг project гэж харуулна.",
        "code . command дахь цэг нь ‘current folder’ гэсэн relative path. Тиймээс command-ийг ямар folder дотор ажиллуулснаас editor-ийн нээгдэх root шууд хамаарна. Эхлээд current folder-оо шалгаад дараа нь code . ажиллуулна.",
        "Editor-ийн integrated terminal шинээр нээхэд ихэвчлэн workspace root-оос эхэлдэг ч үргэлж таахгүй. Terminal prompt эсвэл pwd/Get-Location output-оор батална.",
      ],
      mentalModel: {
        title: "Ном биш, бүх хавтсыг ширээн дээр тавих",
        explanation:
          "Нэг file нээх нь нэг хуудас харахтай, workspace нээх нь бүх project хавтсыг ширээн дээр дэлгэхтэй адил. Analogy-ийн хязгаар нь editor file-уудыг өөртөө хуулдаггүй; disk дээрх бодит folder-ийг харуулдаг.",
      },
      example: {
        title: "Current folder-оос editor нээх",
        explanation:
          "ai-frontend-course дотор байгаагаа шалгасны дараа code . ажиллуулбал Explorer-ийн хамгийн дээд root нь ai-frontend-course байна.",
        code: "pwd                 # macOS / Linux\nGet-Location        # Windows PowerShell\ncode .",
        language: "bash",
      },
      diagram: {
        label: "Current folder ба editor workspace-ийн холбоо",
        nodes: [
          { title: "CURRENT FOLDER", detail: "ai-frontend-course" },
          { title: "code .", detail: ". = одоогийн folder" },
          { title: "EDITOR ROOT", detail: "ai-frontend-course" },
          { title: "EXPLORER", detail: "Доторх бүх файл" },
        ],
      },
      questions: [
        { question: "code . доторх цэг юу гэсэн үг вэ?", answer: "Одоогийн буюу current folder гэсэн relative path." },
        { question: "Editor дээр зөв folder нээгдсэнийг хаанаас мэдэх вэ?", answer: "Explorer-ийн root нэрийг terminal-ийн current path-тай тулгаж шалгана." },
      ],
      misconceptions: [
        { claim: "Editor дээр файл харагдахгүй бол файл устсан.", correction: "Өөр workspace нээсэн эсвэл Explorer collapse болсон байж болно. Disk path-ийг эхлээд шалгана." },
        { claim: "Integrated terminal үргэлж зөв folder-т эхэлнэ.", correction: "Ихэнхдээ workspace root-оос эхэлдэг ч configuration өөр байж болно; output-оор verify хийнэ." },
      ],
      teachingNotes: [
        "Projector дээр Explorer root болон terminal path хоёрыг зэрэг харагдуулж, нэр нь яагаад таарч байгааг сурагчдаар хэлүүл.",
        "code command PATH-д ороогүй төхөөрөмж байвал File → Open Folder fallback-ийг үзүүл; зорилго нь command цээжлүүлэхээс илүү зөв root нээх.",
      ],
      takeaway: "Project ажил эхлэх бүрт editor root болон terminal current folder нэг project-ийг зааж байгааг verify хий.",
    },
    {
      id: "terminal-paths",
      number: "03",
      title: "Terminal command одоогийн folder дээр ажилладаг",
      eyebrow: "Shell · path · navigation",
      duration: "14–16 минут",
      whyItMatters:
        "mkdir, npm, Git зэрэг command хаана ажилласнаас ямар файл өөрчлөгдөх нь шийдэгдэнэ. Current folder-оо мэдэхгүй command ажиллуулах нь эхлэгчдийн хамгийн түгээмэл бөгөөд хамгийн амархан урьдчилан сэргийлэх алдаа.",
      explanation: [
        "Terminal бол command бичих цонх, shell бол command-ийг тайлбарлах програм. macOS/Linux дээр zsh эсвэл bash, Windows дээр PowerShell түгээмэл. Ижил зорилготой command-ийн нэр болон output OS/shell-ээр бага зэрэг ялгаатай байж болно.",
        "Path нь file эсвэл folder-ийн disk дээрх хаяг. Absolute path root-оос эхэлсэн бүтэн зам: /Users/anu/course эсвэл C:\\Users\\Anu\\course. Relative path нь current folder-оос тооцогдоно: week-01/lesson-02 эсвэл .. гэх мэт.",
        "pwd буюу Get-Location current folder-ийг харуулна. ls буюу Get-ChildItem доторх зүйлсийг жагсаана. cd өөр folder руу шилжинэ. mkdir шинэ folder үүсгэнэ. Эдгээрийн output-ийг унших нь command бичихтэй адил чухал.",
        "Энэ хичээлд data устгах command хэрэггүй. Command ажиллуулахаас өмнө ‘Би хаана байна? Энэ command юу өөрчлөх вэ? Ямар output хүлээж байна?’ гэсэн гурван асуултыг асуу.",
      ],
      mentalModel: {
        title: "GPS дээрх ‘You are here’ цэг",
        explanation:
          "Current folder бол газрын зураг дээрх ‘Та энд байна’ цэг. Relative path тэндээс өгсөн чиглэл, absolute path хотын бүтэн хаяг шиг. Гэхдээ folder tree нь бодит газрын зураг биш; shortcut, symbolic link зэрэг ахисан тохиолдлыг одоохондоо авч үзэхгүй.",
      },
      example: {
        title: "Аюулгүй navigation sequence",
        explanation:
          "Эхлээд байршлаа хар, доторхыг жагсаа, folder үүсгэ, дотогш ор, шинэ байршлаа дахин батал. Windows PowerShell дээр pwd/ls alias ажиллаж болох ч бүтэн нэрийг нь давхар мэднэ.",
        code: "# macOS / Linux\npwd\nls\nmkdir ai-frontend-course\ncd ai-frontend-course\npwd\n\n# Windows PowerShell\nGet-Location\nGet-ChildItem\nmkdir ai-frontend-course\ncd ai-frontend-course\nGet-Location",
        language: "bash",
      },
      diagram: {
        label: "Relative path current folder-оос тооцогдоно",
        nodes: [
          { title: "course/", detail: "Current folder" },
          { title: "cd week-01", detail: "Relative navigation" },
          { title: "week-01/", detail: "Шинэ current folder" },
          { title: "pwd", detail: "Output-оор батлах" },
        ],
      },
      questions: [
        { question: "mkdir lesson-02 command шинэ folder-ийг хаана үүсгэх вэ?", answer: "Terminal-ийн тухайн үеийн current folder дотор." },
        { question: "cd командаас хойш prompt өөрчлөгдсөн ч яагаад pwd/Get-Location ажиллуулах вэ?", answer: "Prompt-ийн format өөр байж болох тул бодит path output-оор шинэ байрлалаа батална." },
        { question: "Absolute болон relative path-ийн гол ялгаа юу вэ?", answer: "Absolute path root-оос бүтэн байрлал заана; relative path current folder-оос тооцогдоно." },
      ],
      misconceptions: [
        { claim: "Command үргэлж Desktop дээр ажиллана.", correction: "Command current folder дээр ажиллана; terminal хаанаас нээгдсэн, cd хийсэн эсэхээс шалтгаална." },
        { claim: "Folder name дотор зай байвал terminal ашиглаж болохгүй.", correction: "Болно, гэхдээ path-ийг quote хийх шаардлагатай байж болно. Энэ курсэд эхний workspace-аа hyphen-тэй, зайгүй нэрлэж хялбарчилна." },
      ],
      teachingNotes: [
        "Command бүрийн өмнө сурагчдаар expected path/output-ийг хэлүүлээд дараа нь Enter дар. Ингэснээр terminal copy-paste заншил биш reasoning болно.",
        "Parent path ..-ийг тайлбарлаж болох ч practice-д заавал ашиглуулахгүй; төөрсөн сурагчийг GUI file browser-аар байршлаа дахин олоход тусал.",
      ],
      takeaway: "Command ажиллуулахын өмнө current folder-оо шалга; path бол тухайн command хаана үйлчлэхийг шийддэг evidence.",
    },
    {
      id: "node-and-npm",
      number: "04",
      title: "Node.js код ажиллуулна, npm project-ийн package ба script удирдана",
      eyebrow: "Runtime ба package manager",
      duration: "11–13 минут",
      whyItMatters:
        "Орчин үеийн frontend project-үүд build tool, development server, dependency-гээ Node.js/npm дээр ажиллуулдаг. Энэ ялгааг ойлгохгүй бол node, npm, browser гурвын error-ийг хооронд нь андуурна.",
      explanation: [
        "JavaScript хэл browser дотор ажиллаж чадна. Node.js мөн JavaScript ажиллуулдаг runtime боловч browser биш: DOM, address bar, DevTools page зэрэг browser API-г автоматаар өгөхгүй. Харин local file, process, command-line tool ажиллуулахад зориулагдсан API-тай.",
        "npm бол Node Package Manager гэж нэрлэгдсэн ecosystem tool. Package суулгах, package.json дотор dependency бүртгэх, npm run ... хэлбэрээр project script ажиллуулахад хэрэглэнэ. npm өөрөө JavaScript runtime биш; npm-ийн ажиллуулсан tool-үүд Node.js дээр ажиллаж болно.",
        "Node.js release хурдан шинэчлэгддэг учраас course дээр тогтсон version number цээжлэхгүй. Албан ёсны download page дээр LTS гэж тэмдэглэсэн тогтвортой support шугамыг сонгоно. Latest эсвэл Current гэсэн үг бүр LTS гэсэн үг биш.",
        "node --version болон npm --version-ийн тоо ижил байх албагүй. Тэд тусдаа програмын version. Хоёул output өгвөл shell тэдгээрийг олж ажиллуулж чадсаны evidence болно.",
      ],
      mentalModel: {
        title: "Гал тогоо ба орцын менежер",
        explanation:
          "Node.js-ийг жор буюу JavaScript-ийг гүйцэтгэх гал тогоо, npm-ийг орц/package авчирч, бэлтгэлийн script эхлүүлэх менежер гэж төсөөл. Гэхдээ npm зөвхөн download хийдэг дэлгүүр биш; dependency metadata болон scripts-тай project workflow удирдана.",
      },
      example: {
        title: "Browser нээлгүй JavaScript ажиллуулах",
        explanation:
          "node -e нь дараах JavaScript expression-ийг шууд ажиллуулна. Terminal-д текст хэвлэгдсэн нь Node runtime ажиллаж байгааг нотолно; npm энэ command-д оролцоогүй.",
        code: "node --version\nnpm --version\nnode -e \"console.log('Node.js ажиллаж байна')\"",
        language: "bash",
      },
      diagram: {
        label: "JavaScript ажиллах хоёр өөр орчин",
        nodes: [
          { title: "JAVASCRIPT", detail: "Ижил хэл" },
          { title: "BROWSER", detail: "Web page + DOM" },
          { title: "NODE.JS", detail: "CLI + local tools" },
          { title: "npm", detail: "Packages + scripts" },
        ],
      },
      questions: [
        { question: "node --version ажиллаж байвал npm --version заавал ижил тоо хэвлэх үү?", answer: "Үгүй. Node.js болон npm тусдаа version-той." },
        { question: "Node.js browser мөн үү?", answer: "Үгүй. Хоёулаа JavaScript ажиллуулж болох ч API болон ажиллах орчин нь өөр." },
      ],
      misconceptions: [
        { claim: "npm бол JavaScript ажиллуулдаг runtime.", correction: "Node.js runtime; npm package болон script workflow удирдах tool." },
        { claim: "Хамгийн том version number үргэлж эхлэгчид хамгийн зөв.", correction: "Course болон production орчинд compatibility, support чухал. Албан ёсны LTS release-ийг сонгоно." },
      ],
      teachingNotes: [
        "Browser DevTools Console болон terminal-д ижил console.log ажиллуулж, output ижил боловч runtime environment өөр гэдгийг харьцуулж болно.",
        "npm install-ийг энэ demo дээр ажиллуулахгүй. package.json болон dependency-г дараагийн project setup хичээлүүдэд context-тэй үзнэ.",
      ],
      takeaway: "Node.js JavaScript ажиллуулах runtime; npm package, dependency, project script удирдах тусдаа tool.",
    },
    {
      id: "verification-and-path",
      number: "05",
      title: "Version output ба PATH нь setup-ийн evidence өгдөг",
      eyebrow: "Таах биш verify хийх",
      duration: "7–9 минут",
      whyItMatters:
        "‘Суулгасан’ гэж санах болон terminal тухайн command-ийг яг одоо ажиллуулж чадах хоёр өөр зүйл. Version, executable location, current folder, бүтэн error output нь setup issue-г найдвартай оношлох баримт болно.",
      explanation: [
        "Shell command-ийн нэрийг хараад executable хаана байгааг PATH гэсэн байршлуудын жагсаалтаас хайдаг. Програм disk дээр суусан ч PATH-д бүртгэгдээгүй эсвэл хуучин terminal environment ашиглаж байвал command not found / not recognized гарч болно.",
        "Version command амжилттай ажиллавал гурван зүйлийн evidence өгнө: shell command-ийг олсон, executable эхэлсэн, version output буцаасан. Энэ нь бүх project бүрэн ажиллана гэсэн баталгаа биш боловч setup-ийн эхний хүчтэй шалгалт.",
        "Суулгасны дараа шинэ terminal нээх нь PATH-ийн шинэ утгыг авахад шаардлагатай байж болно. Дараа нь command -v node (macOS/Linux) эсвэл Get-Command node (PowerShell)-оор shell аль executable-ийг олсныг харж болно.",
        "Тусламж хүсэхдээ OS, shell, current folder, яг ажиллуулсан command, бүтэн output, expected result-ийг өг. Харин password, API key, access token, private path доторх эмзэг нэр зэрэг secret-ийг хуваалцахаас өмнө арилгана.",
      ],
      mentalModel: {
        title: "Contact list-ээс зөв хүн олох",
        explanation:
          "Shell command-ийн нэрийг PATH доторх жагсаалтаас хайх нь contact нэрээр дугаар олохтой төстэй. Гэхдээ PATH нь internet lookup биш; тухайн process-д өгөгдсөн local directory-үүдийн дараалал.",
      },
      example: {
        title: "Read-only health check",
        explanation:
          "Доорх command-ууд data өөрчлөхгүй. Version болон executable location-ийг харуулна. Өөрийн shell-д тохирох location command-ийн зөвхөн нэгийг ажиллуул.",
        code: "node --version\nnpm --version\ncode --version\n\n# macOS / Linux\ncommand -v node\n\n# Windows PowerShell\nGet-Command node",
        language: "bash",
      },
      diagram: {
        label: "Setup issue-г evidence-ээр нарийсгах",
        nodes: [
          { title: "COMMAND", detail: "node --version" },
          { title: "SHELL + PATH", detail: "Executable хайна" },
          { title: "EXECUTABLE", detail: "Node эхэлнэ" },
          { title: "OUTPUT", detail: "Version эсвэл error" },
        ],
      },
      questions: [
        { question: "command not found гарвал Node.js огт суугаагүй гэж шууд баталж болох уу?", answer: "Үгүй. Суугаагүй, PATH-д ороогүй, эсвэл хуучин terminal session байж болно." },
        { question: "Version number-ийг screenshot-аас таахын оронд яагаад command output хуулдаг вэ?", answer: "Тухайн shell, тухайн мөчид ажилласан бодит evidence болж, typo болон хуучин мэдээллээс сэргийлнэ." },
      ],
      misconceptions: [
        { claim: "AI ‘дахин суулга’ гэвэл шууд reinstall хийх хэрэгтэй.", correction: "Эхлээд read-only version/location check хийж шалтгааныг нарийсгана. Reinstall бол evidence-ийн дараах боломжит алхам." },
        { claim: "Error-ийн сүүлийн мөрийг л явуулахад хангалттай.", correction: "Command, эхний context мөр, бүтэн output хэрэгтэй байж болно. Илгээхийн өмнө secret-ээ заавал шалгана." },
      ],
      teachingNotes: [
        "PATH-ийн syntax, environment variable editing-ийг гүнзгий заахгүй. Энэ хичээлийн түвшинд нэр → хайлтын зам → executable гэсэн model хангалттай.",
        "Хэн нэгний command ажиллахгүй бол class-аа зогсоож random fix туршихын оронд түүний OS, shell, output-ийг самбарын evidence template-д оруулж хамт оношил.",
      ],
      takeaway: "Setup-ийг ‘суусан байх’ гэж таахгүй; version, location, current path, runtime output гэсэн evidence-ээр verify хий.",
    },
  ],
  liveDemo: {
    title: "Хоосон folder-оос ажилладаг workspace хүртэл",
    duration: "18 минут",
    goal:
      "Багш current folder-оо шалгахаас эхлээд course workspace үүсгэх, editor дээр нээх, Node/npm-ийг verify хийх, JavaScript output авах хүртэлх аюулгүй setup workflow-г бүх command болон output-оо тайлбарлан үзүүлнэ.",
    setup: [
      "Projector дээр terminal font болон editor UI-г 125–150% болго.",
      "Сурагчдын олонх ашиглаж буй OS-ийн terminal-ийг үндсэн demo болгож, нөгөө OS-ийн command-ийг энэ хуудсаас зэрэг харуул.",
      "Demo хийх parent folder-оо урьдчилан сонго; хувийн file name, username, secret харагдахгүй байхаар terminal history-г цэвэрлэ.",
      "Node.js LTS болон VS Code суусан эсэхийг багшийн төхөөрөмж дээр шалга, гэхдээ class дээр output-ийг дахин бодитоор үүсгэ.",
    ],
    steps: [
      {
        title: "Орчин болон current folder-оо нэрлэх",
        instruction: "Terminal-аа нээгээд Enter дарахаас өмнө ашиглаж буй OS, terminal app, shell-ээ чангаар нэрлэ. Дараа нь current folder-оо шалга.",
        code: { title: "Current folder шалгах", language: "bash", code: "# macOS / Linux\npwd\n\n# Windows PowerShell\nGet-Location" },
        observe: "Output нь бүтэн path бөгөөд багшийн username орж болохыг ажиглана.",
        explain: "Prompt-ийг таах биш, command output-оор ‘би хаана байна?’ гэдгийг баталж байна. Screenshot хуваалцахдаа personal path-аа шалгана.",
      },
      {
        title: "Parent folder-ийн агуулгыг харах",
        instruction: "Одоогийн folder доторх зүйлсийг жагсаагаад ai-frontend-course нэр давхцаж байгаа эсэхийг шалга.",
        code: { title: "Folder content жагсаах", language: "bash", code: "# macOS / Linux\nls\n\n# Windows PowerShell\nGet-ChildItem" },
        observe: "Output нь file/folder list; хоосон output нь command failed гэсэн үг биш байж болно.",
        explain: "mkdir хийхээс өмнө ижил нэртэй зүйл байгаа эсэхийг шалгаж байна. Existing folder байвал хүчээр overwrite хийхгүй.",
      },
      {
        title: "Course workspace үүсгэж дотогш орох",
        instruction: "Folder байхгүй бол үүсгээд дотогш ор. Дараа нь path-аа дахин verify хий.",
        code: { title: "Workspace үүсгэх", language: "bash", code: "mkdir ai-frontend-course\ncd ai-frontend-course\nmkdir week-01\npwd            # macOS / Linux\nGet-Location   # Windows PowerShell", note: "Өөрийн shell-д тохирох сүүлийн command-ийн зөвхөн нэгийг ажиллуул." },
        observe: "Final path ai-frontend-course-оор төгсөнө, list хийхэд week-01 харагдана.",
        explain: "mkdir output өгөхгүй амжилттай дуусч болно. Тиймээс дараагийн pwd/list бол post-condition evidence.",
      },
      {
        title: "Current folder-ийг editor workspace болгох",
        instruction: "code . ажиллуулаад VS Code Explorer-ийн root нэрийг terminal path-тай тулга.",
        code: { title: "Editor нээх", language: "bash", code: "code ." },
        observe: "Editor шинэ window нээж, Explorer root дээр ai-frontend-course, дотор нь week-01 харагдана.",
        explain: "Цэг нь current folder. code command ажиллахгүй байвал project эвдэрсэн биш, editor CLI PATH-д байхгүй байж болно.",
      },
      {
        title: "Нэг evidence file үүсгэх",
        instruction: "Editor Explorer-оос week-01/environment-check.txt үүсгээд OS, shell гэсэн хоёр мөр бичиж хадгал.",
        observe: "Tab дээрх unsaved indicator арилж, Explorer дээр файл зөв folder дотор харагдана.",
        explain: "Файл editor-ийн дотор биш disk дээр хадгалагдана. Root/path зөв учраас дараагийн хичээлээр Git энэ файлыг track хийж чадна.",
      },
      {
        title: "Tool version-уудыг бодитоор шалгах",
        instruction: "Editor-ийн integrated terminal нээгээд current path-аа дахин шалгасны дараа гурван version command ажиллуул.",
        code: { title: "Development tool health check", language: "bash", code: "node --version\nnpm --version\ncode --version" },
        observe: "Command бүр тусдаа version output өгнө; Node болон npm-ийн тоо ижил байх албагүй.",
        explain: "Энэ output нь тухайн terminal executable-үүдийг олж эхлүүлснийг нотолно. Хамгийн шинэ version гэдгийг заавал нотлохгүй.",
      },
      {
        title: "Node runtime evidence авах",
        instruction: "Нэг мөр JavaScript ажиллуулаад output-ийг environment-check.txt файлд exact байдлаар хуул.",
        code: { title: "Node.js runtime test", language: "bash", code: "node -e \"console.log('Node.js ажиллаж байна')\"" },
        observe: "Terminal-д Node.js ажиллаж байна гэсэн нэг мөр гарна; browser нээгээгүй байна.",
        explain: "Version check executable эхэлснийг, runtime test JavaScript ажилласныг тус тус нотолно. Нотолгоо бүр өөр claim шалгаж байна.",
      },
    ],
    expectedOutput: [
      "Current path ai-frontend-course folder-оор төгсөнө.",
      "Editor Explorer root нь ai-frontend-course бөгөөд week-01/environment-check.txt харагдана.",
      "node --version болон npm --version version string буцаана.",
      "code --version version output өгөх эсвэл editor CLI PATH-д байхгүй гэсэн тусдаа, тайлбарлагдах issue гарна.",
      "node -e command ‘Node.js ажиллаж байна’ гэж хэвлэнэ.",
    ],
    recovery: [
      "mkdir already exists: устгахгүй. ls/Get-ChildItem-ээр existing folder мөн эсэхийг шалгаад cd ai-frontend-course гэж ор.",
      "code command not found: VS Code-оо GUI-аар нээгээд File → Open Folder ашигла; дараа нь official editor setup-аар CLI PATH-ийг тусад нь зас.",
      "node/npm command not found: шинэ terminal нээж дахин шалга. Хэвээр бол Node.js LTS install болон PATH-ийг official installer/setup-аар нягтал.",
      "Permission denied: sudo бүү ашигла. Өөрийн хэрэглэгчийн Documents/Desktop зэрэг write эрхтэй folder сонго.",
      "Буруу folder нээсэн: file устгахгүй. Editor-оос File → Open Folder ашиглан output-оор баталсан course path-аа сонго.",
    ],
  },
  guidedPractice: {
    title: "Workspace health check — path, file, runtime",
    duration: "19 минут",
    goal:
      "Хос бүр command бүрийн expected result-ийг урьдчилан хэлээд course workspace-аа үүсгэж эсвэл шалгаж, editor болон Node/npm-ийн ажиллагааг бодит output-оор нотолно.",
    instructions: [
      "2 хүнтэй багт Driver terminal дээр бичиж, Navigator алхам бүрийн өмнө command юу хийх, хаана үйлчлэхийг хэлнэ.",
      "pwd/Get-Location ажиллуулж starting path-аа environment-check.txt-д тэмдэглэ.",
      "ls/Get-ChildItem-ээр ai-frontend-course байгаа эсэхийг шалга; байхгүй бол mkdir ашиглан үүсгэ, байвал дотогш ор.",
      "ai-frontend-course дотор week-01/lesson-02 folder structure үүсгээд final current path-аа дахин шалга.",
      "Course root руу буцаж зөв root дээр code . ажиллуул; Explorer structure-ийг terminal path-тай тулга.",
      "environment-check.txt дотор OS, shell, workspace path, node/npm/code version output, runtime test output-оо яг хэвээр нь бич.",
      "Driver/Navigator үүргээ солиод нэг хүн terminal evidence, нөгөө хүн editor file structure-ийг rubric-ээр шалга.",
    ],
    constraints: [
      "rm, del, Remove-Item, sudo болон permission өөрчлөх command ашиглахгүй.",
      "Command-ийг бөөнөөр paste хийхгүй; нэг command → output унших → дараагийн command гэсэн дараалал баримтална.",
      "Folder existing байвал дахин үүсгэх эсвэл overwrite хийхээс өмнө contents-ийг шалгана.",
      "Version number-ийг найзаасаа хуулж эсвэл тааж бичихгүй; өөрийн terminal output-ийг ашиглана.",
      "Password, token, email, private username зэрэг sensitive data-г shared screenshot эсвэл AI prompt-д оруулахгүй.",
      "AI ашиглахгүй — AI Lab эхлэх хүртэл зөвхөн terminal/editor evidence хэрэглэнэ.",
    ],
    hints: [
      "Төөрвөл шинэ command туршихын өмнө pwd эсвэл Get-Location ажиллуул.",
      "Folder харагдахгүй бол parent folder дээр ls/Get-ChildItem хийж spelling болон hyphen-ээ шалга.",
      "code . ажиллахгүй ч VS Code нээгдэж байвал File → Open Folder fallback ашиглаж болно.",
      "Node output авах command: node -e \"console.log('Node.js ажиллаж байна')\".",
      "Integrated terminal буруу path-т байвал editor root зөв эсэхийг эхлээд шалгаад шинэ terminal нээ.",
    ],
    expectedResult: [
      "ai-frontend-course/week-01/lesson-02 folder structure disk болон editor Explorer дээр таарна.",
      "Editor root нь ai-frontend-course, terminal current path нь тухайн root эсвэл зориуд сонгосон subfolder байна.",
      "environment-check.txt файл бодит OS, shell, path болон version output агуулна.",
      "Node runtime test-ийн output таамаг биш, terminal-аас хуулсан байна.",
      "Алдаа гарсан бол устгалгүй зогсож, command + бүтэн output-ийг тэмдэглэсэн байна.",
    ],
    stretchTask:
      "Absolute path ашиглан lesson-02 folder руу нэг удаа, course root-оос relative path ашиглан нэг удаа шилж. Хоёр command-ийн дараах Get-Location/pwd output яагаад ижил болсныг тайлбарла.",
    debriefQuestions: [
      { question: "Танай багийн хамгийн чухал pre-command check юу байсан бэ?", answer: "Current folder болон command-ийн expected effect-ийг урьдчилан нэрлэх." },
      { question: "Version output яг ямар claim-ийг нотолсон бэ?", answer: "Тухайн shell command-ийг олж, executable-ийг эхлүүлж, version string авсныг нотолсон; бүх project ажиллахыг дангаараа нотлоогүй." },
    ],
  },
  aiLab: {
    title: "Нэг алхмаар аюулгүй setup issue оношлох",
    duration: "9 минут",
    goal:
      "Сурагч ‘ажиллахгүй байна’ гэсэн бүдэг хүсэлтийг evidence-тэй prompt болгож, AI-ийн санал болгосон command-ийг тайлбарлан ангилж, зөвхөн аюулгүй read-only check-ийг бодит output-оор verify хийнэ.",
    prompt: `Би frontend-ийн анхан шатны development environment-ээ шалгаж байна.

Миний орчин:
- OS: [Windows 11 / macOS / Ubuntu]
- Terminal ба shell: [Windows Terminal + PowerShell / Terminal + zsh / ...]
- Current folder: [pwd эсвэл Get-Location-ийн бодит output]

Ажиллуулсан command:
node --version

Бүтэн output:
[бодит error-оо хуул. Алдаа байхгүй бол MOCK: "node: command not found" гэж тодорхой тэмдэглэ]

Хүлээсэн үр дүн:
Node.js-ийн version хэвлэгдэх.

Надад шууд засах олон command бүү өг.
1. Энэ output юу хэлж байна, бас юуг хараахан нотлохгүй байгааг тайлбарла.
2. Өгөгдөл өөрчлөхгүй ганц read-only check санал болго.
3. Тэр command юу шалгах, боломжит 2 output бүрийн дараагийн аюулгүй алхмыг тайлбарла.
4. sudo, file deletion, permission-ийн өргөн өөрчлөлт, random reinstall бүү санал болго.

Миний OS-д тохироогүй command байвал uncertainty-гаа хэл.`,
    steps: [
      { title: "AI-аас өмнө таамгаа бичих", instruction: "Error бодит бол хамгийн магадлалтай 2 шалтгаан, error байхгүй бол mock scenario-ийн 2 шалтгааныг өөрсдөө бич.", observe: "‘Суугаагүй’ болон ‘PATH/session issue’ зэрэг нэгээс олон hypothesis гарсан эсэх.", explain: "AI-ийн өмнө hypothesis бичих нь хариуг сохроор дагахаас хамгаална." },
      { title: "Prompt-оо evidence-ээр бөглөх", instruction: "OS, shell, current path, command, бүтэн output, expected result-ээ оруул. Илгээхийн өмнө secret болон personal path-аа шалга.", observe: "Mock output ашигласан бол MOCK гэж тодорхой тэмдэглэсэн байна.", explain: "Зохиомол error-ийг бодит machine evidence мэт танилцуулахгүй байх нь инженерийн үнэнч байдал." },
      { title: "AI command-ийг review хийх", instruction: "Санал болгосон command-ийн verb болон effect-ийг өөрийн үгээр тайлбарла. Read-only гэдгийг ойлгохгүй бол ажиллуулахгүй.", observe: "Command OS/shell-д тохирч байгаа эсэх, delete/install/permission effect байгаа эсэх.", explain: "AI output бол санал; execution authority сурагчид үлдэнэ." },
      { title: "Нэг шалгалтыг ажиллуулж verify хийх", instruction: "Аюулгүй бол command -v node (macOS/Linux) эсвэл Get-Command node (PowerShell) зэрэг location check-ийг ажиллуулж exact output хадгал.", observe: "Executable path эсвэл not-found төрлийн error гэсэн бодит runtime evidence.", explain: "Энэ evidence hypothesis-ийг нарийсгана, гэхдээ дангаараа install state-ийн бүх түүхийг нотлохгүй." },
      { title: "AI дүгнэлтийг засах", instruction: "AI зөв хэлсэн 1 зүйл, evidence-ээр баталсан 1 зүйл, батлаагүй 1 claim, дараагийн аюулгүй алхмаа бич.", expected: "Дүгнэлт command output-ийг ишилж, destructive action санал болгоогүй байна." },
    ],
    verificationTable: [
      { claim: "Shell node command-ийг олж байна", evidence: "node --version болон command -v node / Get-Command node", pass: "Version эсвэл executable path бодитоор гарсан" },
      { claim: "Node JavaScript ажиллуулж чадна", evidence: "node -e \"console.log('ok')\" runtime output", pass: "Terminal-д ok хэвлэгдсэн" },
      { claim: "npm ашиглах боломжтой", evidence: "npm --version", pass: "Тусдаа npm version output гарсан" },
      { claim: "AI-ийн command аюулгүй", evidence: "Command-ийн effect-ийг тайлбарлаж, read-only эсэхийг OS documentation/help-тай тулгах", pass: "File, package, permission өөрчлөөгүй шалгалт" },
    ],
    teacherNotes: [
      "Бүх сурагчийн setup ажиллаж байвал mock error ашигла. Mock гэдгийг prompt-д заавал тэмдэглүүлэх нь fabricated evidence-ээс сэргийлнэ.",
      "AI өөр OS-ийн command өгвөл энэ нь lab-ийн сайн discussion point. Зөвхөн command-ийг сольж өгөхөөс өмнө context-ийн аль мөр дутуу/үл тоосон болохыг асуу.",
      "AI зөв хариулсан эсэхээс илүү сурагч effect-ийг ойлгоод, нэг claim-ийг runtime output-оор шалгасан эсэхийг үнэл.",
    ],
  },
  checkpoint: {
    duration: "6 минут",
    instructions:
      "AI болон terminal ашиглахгүйгээр эхний хариугаа бич. Application асуултад шууд fix жагсаахын оронд эхний аюулгүй check болон түүний evidence-ийг нэрлэ.",
    questions: [
      { type: "concept", question: "Editor, terminal, Node.js гурвын үүргийг тус бүр нэг өгүүлбэрээр хэл.", answer: "Editor файл бичиж/засна; terminal command оруулах интерфэйс; Node.js JavaScript-ийг browser-оос гадуур ажиллуулах runtime." },
      { type: "concept", question: "Current folder гэж юу вэ, яагаад command-ийн өмнө шалгах вэ?", answer: "Shell яг одоо ажиллаж буй folder. Relative path болон файл өөрчлөх command хаана үйлчлэхийг current folder шийддэг." },
      { type: "concept", question: "Node.js болон npm ижил хэрэгсэл үү?", answer: "Үгүй. Node.js runtime; npm package/dependency болон project script удирдах tool." },
      { type: "application", question: "code . ажиллахгүй ч VS Code GUI-аар нээгдэж байна. Project эвдэрсэн гэж дүгнэж болох уу? Эхний алхам юу вэ?", answer: "Болохгүй. Editor CLI PATH-д байхгүй байж болно. GUI-аар зөв folder-оо нээгээд code command-ийн official PATH setup-ийг тусад нь шалгана." },
      { type: "application", question: "node --version ‘command not found’ өглөө. Шууд reinstall хийхээс өмнө ямар хоёр evidence авах вэ?", answer: "Шинэ terminal-д version-ийг дахин шалгаж, command -v node эсвэл Get-Command node-оор executable location/PATH lookup-ийг шалгана." },
      { type: "application", question: "‘Development environment ажиллаж байна’ гэдгийг өөрийн үгээр, дор хаяж 3 evidence ашиглан тайлбарла.", answer: "Жишиг хариу: зөв workspace path гарсан, editor root таарсан, node/npm version output өгсөн, Node runtime test expected text хэвлэсэн. Rubric: гурваас доошгүй ажиглагдах evidence ба зөв claim холбоно." },
    ],
  },
  wrapUp: {
    summary: [
      "Development environment бол editor, terminal/shell, file system, Node.js, npm-ийн хамтын toolchain.",
      "Editor зөв project root-ийг workspace болгон нээсэн байх ёстой.",
      "Current folder relative path болон command хаана үйлчлэхийг шийднэ.",
      "Node.js JavaScript runtime; npm package болон project script удирдана.",
      "LTS бол сургалт, тогтвортой workflow-д сонгох support шугам.",
      "Version, executable location, path, runtime output нь setup-ийн engineering evidence.",
      "AI-ийн command-ийг effect-ийг нь ойлгож, read-only evidence-ээр шалгасны дараа л ажиллуулна.",
    ],
    abilities: [
      "Terminal-аас folder tree үүсгэж, зөв path дээр байгаагаа батлах",
      "Course workspace-аа editor дээр зөв root-оор нээх",
      "Node.js, npm, editor CLI-ийн health check хийх",
      "Setup issue-г нууц мэдээлэлгүй, evidence-тэйгээр тайлагнах",
    ],
    beforeNextLesson: [
      "environment-check.txt файлаа бодит output-оор бүрэн бөглө",
      "ai-frontend-course/week-01/lesson-02 structure зөв хадгалагдсаныг шалга",
      "Node/npm issue үлдсэн бол command ба бүтэн output-оо хадгалж багштай шийд; Git хичээлд working terminal хэрэгтэй",
    ],
    finalModel:
      "Right folder → editor workspace → terminal + shell → Node.js/npm command → output → verify before changing anything",
    exitTicket: [
      { question: "Command ажиллуулахын өмнөх таны шинэ дүрэм юу вэ?", answer: "Current folder, command-ийн effect, expected output гурвыг шалгана." },
      { question: "node --version ба node -e runtime test хоёр өөр юу нотлох вэ?", answer: "Version check executable олдож эхэлснийг; runtime test JavaScript бодитоор ажилласныг нотолно." },
      { question: "AI setup command өгсний дараагийн алхам юу вэ?", answer: "OS-д тохирох эсэх, effect, эрсдэлийг review хийгээд read-only evidence-ээр verify хийсний дараа шийднэ." },
    ],
    nextLesson: {
      title: "Lesson 03 — Эхний өдрөөс Git & GitHub",
      connection:
        "Одоо бид зөв workspace дотор file үүсгэж, terminal command-аа evidence-тэй ажиллуулж чадна. Дараагийн хичээлээр энэ workspace-ийн өөрчлөлтийн түүхийг Git-ээр хадгалж, алдаанаас буцаж болох аюулгүйн тор үүсгэнэ.",
    },
    teacherClose:
      "“Өнөөдрөөс эхлээд setup асуудлыг random command-аар засахгүй. Аль tool, аль folder, ямар output гэдгийг нотлоод дараагийн алхмаа сонгоно.” гэж хичээлийг хаа.",
  },
};
