import type { ReferenceLesson } from "../types";

export const lesson03Reference: ReferenceLesson = {
  id: 3,
  durationMinutes: 120,
  teacherGoal:
    "Сурагч Git-ийг command цээжлэх сэдэв биш, өөрчлөлтийг ажиглаж, сонгож, утгатай snapshot болгон хадгалдаг хамгаалалтын систем гэж ойлгоод local repository-д хоёр жижиг commit-ийг evidence-тэй үүсгэдэг болно.",
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
      "macOS, Linux, Windows дээр Git суулгах зөв замаа сонгож, version болон executable path-аар setup-аа verify хийх.",
      "Commit author user.name/user.email болон default branch configuration-ийг тохируулж, config хаанаас ирснийг шалгах.",
      "Git, GitHub, repository, working tree, staging area, commit-ийн үүргийг хооронд нь ялгах.",
      "git init, status, diff, add, commit, log командыг аюулгүй дарааллаар ашиглах.",
      "Commit-д орох өөрчлөлтийг git diff --staged output-оор урьдчилан verify хийх.",
      "Хоёр логик өөрчлөлтийг тусдаа, утгатай message бүхий commit болгон хадгалах.",
      "AI-ийн diff summary болон commit message саналыг Git-ийн бодит output-той тулгаж шалгах.",
    ],
    prerequisites: [
      "Lesson 02-ын terminal, current folder, absolute/relative path ойлголт",
      "Course workspace-аа VS Code-д зөв root-оор нээж чаддаг байх",
      "git --version command ажиллах эсвэл Git суулгах боломжтой байх",
    ],
    tools: [
      "Git command-line tool — official downloads: https://git-scm.com/downloads",
      "macOS install guide: https://git-scm.com/install/mac",
      "Linux install guide: https://git-scm.com/install/linux",
      "Windows install guide: https://git-scm.com/install/windows",
      "Terminal / PowerShell",
      "VS Code эсвэл одоо ашиглаж буй editor",
      "GitHub account — зөвхөн optional remote/push хэсэгт",
      "AI chat — зөвхөн AI Lab-д diff review хийхэд",
    ],
    outcomes: [
      "Өөрийн OS-д Git суусан эсэхийг git --version болон executable path-аар нотолно.",
      "Git author identity-г тохируулж, git config --list --show-origin-оор active source-г тайлбарлана.",
      "Зөв folder дээр local Git repository үүсгэж, .git metadata-ийн үүргийг тайлбарлана.",
      "Working tree → staging area → commit урсгалыг diagram болон command output-оор тайлбарлана.",
      "README.md болон commands.md өөрчлөлтийг хоёр тусдаа commit болгоно.",
      "git status, git diff, git diff --staged, git log --oneline-оор repository state-ээ нотолно.",
      "GitHub-ийг Git-тэй ижил гэж нэрлэхгүй, local history ба remote copy-ийн ялгааг хэлнэ.",
    ],
    preparation: [
      "Хичээлээс өмнө сурагчдад өөрийн OS-ийн official Git install link-ийг явуул. Download mirror, random script, AI-аас зохиосон install command ашиглуулахгүй.",
      "Windows winget эсвэл installer, macOS Xcode Command Line Tools/Homebrew, Linux package manager ашиглахад admin permission болон internet шаардлагатай эсэхийг урьдчилан шалга.",
      "Install удах сурагчдад багшийн төхөөрөмжөөр demo дагах fallback өг; 120 минутыг бүхэлд нь installer troubleshooting болгохгүй.",
      "Багшийн төхөөрөмж дээр git --version, executable path, user.name/user.email, config origin-ийг урьдчилан шалга.",
      "Demo parent folder дотор git-practice-demo нэр давхцаагүйг шалга; home/Documents root дээр git init хийхгүй.",
      "Projector дээр terminal болон editor font-ийг 125–150% болгож, status/diff output өнгөөр харагдахаар бэлд.",
      "Git default branch нэр орчноос хамаарч master эсвэл main байж болохыг хүлээн зөвшөөр; энэ ялгааг алдаа гэж бүү заа.",
      "GitHub authentication саатвал local Git зорилгоо бүрэн дуусгах fallback төлөвлө. Remote/push нь энэ 120 минутын заавал хийх шалгуур биш.",
      "Энэ хичээлд reset, checkout --, clean, force push зэрэг recovery/destructive command заахгүй гэсэн хязгаарыг тогтоо.",
    ],
    timeline: [
      { start: "00:00", duration: "7 мин", title: "Hook — final-v7-really-final", teacherAction: "Нэг файлын олон copy харуулаад ‘аль нь зөв, яагаад өөрчлөгдсөн, яаж буцах вэ?’ гэж асууж Git-ийн шийдэх асуудлыг гарга." },
      { start: "00:07", duration: "11 мин", title: "Git, GitHub ба setup gate", teacherAction: "Git/GitHub ялгааг тогтоогоод OS бүрийн install decision tree, version/path/identity verification-ийг харуул; урт install-ийг preparation/fallback lane руу шилжүүл." },
      { start: "00:18", duration: "16 мин", title: "Git-ийн гурван төлөв", teacherAction: "Working tree → staging area → commit урсгалыг аялах цүнх analogy болон README өөрчлөлтөөр тайлбарла." },
      { start: "00:34", duration: "16 мин", title: "Safe inspection workflow", teacherAction: "status, diff, add, diff --staged, commit, log команд бүр ямар асуултад хариулдгийг output-тай холбо." },
      { start: "00:50", duration: "9 мин", title: "Жижиг commit ба message", teacherAction: "Хоёр өөр зорилгыг нэг commit-д хольсон жишээг задалж, imperative message-ийн утгыг тайлбарла." },
      { start: "00:59", duration: "7 мин", title: "Branch ба remote mental model", teacherAction: "Branch бол local history line, origin бол remote nickname, push бол commit дамжуулах үйлдэл гэдгийг beginner түвшинд байрлуул." },
      { start: "01:06", duration: "7 мин", title: "Завсарлага", teacherAction: "Demo terminal-аа цэвэрлэж, current path болон Git identity-г дахин шалгах зуур сурагчдыг амраа." },
      { start: "01:13", duration: "20 мин", title: "Live demo — first commit", teacherAction: "Folder verify хийхээс clean status болон one-line log хүртэл нэг commit-ийг think-aloud хэлбэрээр бүрэн үзүүл." },
      { start: "01:33", duration: "16 мин", title: "Guided practice — two commits", teacherAction: "Хос бүр README ба command notes-оо тусдаа stage/commit хийж, staged diff checkpoint бүрийг багшаар шалгуул." },
      { start: "01:49", duration: "6 мин", title: "AI diff review lab", teacherAction: "AI-ийн summary/message claim-ийг diff мөр, status, log evidence-тэй тулгуул." },
      { start: "01:55", duration: "5 мин", title: "Checkpoint ба wrap-up", teacherAction: "Гурван төлөв болон Git/GitHub ялгааг шалгаад Git history-г Lesson 04-ийн AI safety net-тэй холбо." },
    ],
  },
  concepts: [
    {
      id: "why-git",
      number: "01",
      title: "Git бол өөрчлөлтийн түүх, GitHub бол тэр түүхийн remote үйлчилгээ",
      eyebrow: "Version control-ийн асуудал",
      duration: "9–11 минут",
      whyItMatters:
        "Frontend project өдөр бүр олон жижиг өөрчлөлт авна. Git байхгүй бол аль өөрчлөлт юуг эвдсэн, өмнөх ажилладаг төлөв хаана байсан, багийн хүн яг юу хийснийг найдвартай тайлбарлахад хэцүү.",
      explanation: [
        "Git бол distributed version-control system. Тэр project-ийн file-уудын сонгосон төлөв болон өөрчлөлтийн түүхийг local computer дээр repository хэлбэрээр хадгална. Internet эсвэл GitHub байхгүй үед ч init, add, commit, log зэрэг үндсэн Git ажиллагаа ажиллана.",
        "Repository буюу repo нь project file-ууд болон Git-ийн history/metadata-г хамтад нь авч үзсэн орчин. git init хийхэд current folder дотор нуугдмал .git directory үүсэж, commit, branch, configuration зэрэг repository-ийн мэдээллийг хадгалдаг.",
        "GitHub бол Git repository-г network дээр host хийх, backup-like copy хадгалах, багийн collaboration, pull request зэрэг workflow өгөх үйлчилгээ. Git болон GitHub холбоотой боловч ижил зүйл биш. GitLab, Bitbucket зэрэг өөр remote host ч байж болно.",
        "File-аа final-v2, final-v3 гэж copy хийх нь агуулгын зарим хувилбарыг хадгалж болох ч author, reason, exact line diff, branch, shared history-г системтэй өгөхгүй. Cloud sync ч file-ийн sync/version feature өгч болох боловч Git-ийн intentional commit workflow-ийг орлохгүй.",
      ],
      mentalModel: {
        title: "Төслийн лабораторийн журнал",
        explanation:
          "Git commit бүрийг лабораторийн журналын огноотой, нэртэй бичлэг гэж төсөөл: юу өөрчлөгдсөнийг дарааллаар нь эргэж харна. GitHub бол журналын remote хуулбар болон хамтран хянах орчин. Analogy-ийн хязгаар нь commit зөвхөн текст тайлбар биш, file snapshot болон parent холбоостой object юм.",
      },
      example: {
        title: "Copy нэрлэх ба Git history",
        explanation:
          "Олон copy-оос ялгаатай нь log commit бүрийн богино ID, message, дарааллыг харуулна. Аль commit-д ямар мөр өөрчлөгдсөнийг diff/show-оор нээж болно.",
        code: "project-final/\nproject-final-v2/\nproject-final-REAL/\n\nvs.\n\na1b2c3d Add course goal\nd4e5f6a Document Git commands",
        language: "text",
      },
      diagram: {
        label: "Local Git ба GitHub remote-ийн хил",
        nodes: [
          { title: "PROJECT FILES", detail: "Working tree" },
          { title: "LOCAL GIT", detail: "Commits + branches" },
          { title: "PUSH", detail: "Network дамжуулалт" },
          { title: "GITHUB", detail: "Remote repository" },
        ],
      },
      questions: [
        { question: "Internet тасарсан үед local commit хийж болох уу?", answer: "Тийм. Git local repository дээр commit үүсгэнэ; push хийхэд network/remote хэрэгтэй." },
        { question: "GitHub account байхгүй бол Git сурч болох уу?", answer: "Болно. Repository, commit, branch, diff, log бүгд local ажиллана." },
      ],
      misconceptions: [
        { claim: "Git гэдэг нь GitHub website.", correction: "Git бол version-control tool; GitHub бол Git repository host хийдэг олон үйлчилгээний нэг." },
        { claim: "Commit хийсэн бол cloud backup автоматаар үүссэн.", correction: "Commit эхлээд local history-д хадгалагдана. Remote руу push хийгээгүй бол GitHub дээр очоогүй." },
        { claim: ".git folder-ийг editor-оор засаж repository-г удирдана.", correction: ".git нь Git-ийн internal metadata. Beginner workflow-д доторхыг нь гараар edit/delete хийхгүй, Git command-аар repository-г удирдана." },
      ],
      teachingNotes: [
        "Hook дээр ‘final’ нэртэй file-уудын аль нь зөв болохыг сурагчдаар таалгуул. Тодорхой evidence байхгүй байгааг өөрсдөөр нь хэлүүл.",
        "GitHub UI болон account setup руу эрт орохгүй. Local model тогтсоны дараа л remote-ийг нэм.",
      ],
      takeaway: "Git local өөрчлөлтийн түүх үүсгэнэ; GitHub тэр repository-г remote дээр host хийх тусдаа үйлчилгээ.",
    },
    {
      id: "install-and-configure-git",
      number: "02",
      title: "Git setup = install → terminal restart → version/path → identity → config origin",
      eyebrow: "macOS · Linux · Windows",
      duration: "Pre-class setup clinic · 10–20 минут",
      whyItMatters:
        "Git command олдохгүй эсвэл commit author тодорхойгүй бол сурагч repository workflow эхлүүлж чадахгүй. Харин random installer, буруу package manager, shared computer дээр global personal identity ашиглах нь security, privacy, classroom cleanup-ийн асуудал үүсгэнэ.",
      explanation: [
        "Эхлээд git --version ажиллуул. Version string гарвал Git аль хэдийн суусан тул дахин installer ажиллуулахгүй. Дараа нь macOS/Linux дээр command -v git, Windows PowerShell дээр Get-Command git ашиглан яг ямар executable ажиллаж байгааг шалгана.",
        "macOS: official Git guide-д Xcode Command Line Tools-ийн xcode-select --install болон Homebrew-ийн brew install git гэсэн сонголтууд бий. Homebrew аль хэдийн суусан бол brew замыг ашиглаж болно; зөвхөн Git-ийн төлөө хичээлийн үеэр Homebrew-г шинээр суулгах албагүй. Нэг install path сонго, хоёуланг нь зэрэг ажиллуулахгүй.",
        "Linux: distribution бүр өөр package manager-тэй. /etc/os-release-ээр distro-оо таньж, Debian/Ubuntu-д apt, Fedora-д dnf, Arch-д pacman, openSUSE-д zypper, Alpine-д apk хэрэглэнэ. Өөр distro бол official Git Linux guide болон тухайн distro-ийн documentation-ийг шалгана.",
        "Windows: PowerShell эсвэл Command Prompt-д official Git for Windows page-ийн winget command ашиглаж болно. winget байхгүй бол зөвхөн https://git-scm.com/install/windows дээрх x64 эсвэл ARM64 installer-ийг architecture-даа тааруулж авна. Install дууссаны дараа PowerShell, Git Bash, VS Code terminal-аа бүрэн хааж дахин нээж PATH шинэчлэгдсэнийг шалгана.",
        "Git суусны дараа user.name болон user.email-ээ нэг удаа тохируулна. Эдгээр нь commit author metadata болохоос GitHub password/token биш. Email commit history-д хадгалагдаж болдог тул сургуулийн policy эсвэл GitHub-ийн no-reply email ашиглах эсэхээ багштай тохирно.",
        "--global config тухайн computer-ийн user-ийн бүх repository-д үйлчилнэ. Хувийн төхөөрөмжид тохиромжтой. Shared classroom computer дээр personal global identity бүү үлдээ; repository үүсгэсний дараа --global-гүй local config хэрэглэж, хичээлийн дараа багшийн cleanup policy-г дагана.",
        "init.defaultBranch main нь дараагийн git init repository-ийн эхний branch нэрийг тогтвортой болгоно. git config --list --show-origin нь active value бүр аль config file-ээс ирснийг харуулж, duplicate/буруу identity-г таалгүй оношлох evidence өгнө.",
      ],
      mentalModel: {
        title: "Жолооч, машин, улсын дугаар",
        explanation:
          "Git install бол машин бэлэн болгох, PATH verification нь түлхүүрээр яг аль машин асаж буйг шалгах, user.name/email нь аяллын бүртгэлд бичигдэх жолоочийн мэдээлэл. GitHub login бол тусдаа замын үйлчилгээний account. Analogy-ийн хязгаар: identity cryptographic proof биш; text metadata тул signing/authentication тусдаа сэдэв.",
      },
      example: {
        title: "OS-доо тохирох зөвхөн НЭГ install path сонго",
        explanation:
          "Эхлээд Pre-check-ийг хуул. Git байхгүй үед зөвхөн өөрийн OS/distro-ийн НЭГ install block-ийг хуулна. Install дуусмагц terminal/VS Code-аа restart хийгээд өөрийн OS-ийн Verify block, дараа нь тохирох Identity block-ийг хуул.",
        blocks: [
          {
            title: "00 · Pre-check — бүх OS",
            language: "bash",
            code: "git --version",
            note: "Version гарвал Git суусан байна. Install command алгасаад Verify болон Identity руу ор.",
          },
          {
            title: "macOS · Option A — Apple Command Line Tools",
            language: "bash",
            code: "xcode-select --install",
            note: "Install dialog-ийг дуусга. Homebrew option-той зэрэг ажиллуулахгүй.",
          },
          {
            title: "macOS · Option B — Homebrew аль хэдийн байгаа үед",
            language: "bash",
            code: "brew install git",
            note: "brew command өмнө нь ажилладаг төхөөрөмжид л энэ option-ийг сонго.",
          },
          {
            title: "Linux · Distro таних",
            language: "bash",
            code: "cat /etc/os-release",
            note: "Output-оос Ubuntu/Debian/Fedora/Arch/openSUSE/Alpine аль нь болохыг олж, доорх нэг block сонго.",
          },
          {
            title: "Linux · Debian / Ubuntu",
            language: "bash",
            code: "sudo apt update\nsudo apt install git",
          },
          {
            title: "Linux · Fedora",
            language: "bash",
            code: "sudo dnf install git",
          },
          {
            title: "Linux · Arch",
            language: "bash",
            code: "sudo pacman -S git",
          },
          {
            title: "Linux · openSUSE",
            language: "bash",
            code: "sudo zypper install git",
          },
          {
            title: "Linux · Alpine",
            language: "bash",
            code: "apk add git",
            note: "Root/admin permission-ээ тухайн төхөөрөмжийн policy-оор авна.",
          },
          {
            title: "Windows · PowerShell / Command Prompt",
            language: "powershell",
            code: "winget install --id Git.Git -e --source winget",
            note: "winget байхгүй бол https://git-scm.com/install/windows official installer ашигла. Дуусмагц PowerShell, Git Bash, VS Code-аа бүрэн restart хий.",
          },
          {
            title: "Verify · macOS / Linux",
            language: "bash",
            code: "git --version\ncommand -v git",
            note: "Version болон executable path хоёулаа гарах ёстой.",
          },
          {
            title: "Verify · Windows PowerShell",
            language: "powershell",
            code: "git --version\nGet-Command git",
            note: "Command not found хэвээр бол terminal/VS Code restart болон installer completion-оо шалга.",
          },
          {
            title: "Identity · зөвхөн хувийн төхөөрөмж",
            language: "bash",
            code: "git config --global user.name \"Өөрийн нэр\"\ngit config --global user.email \"өөрийн@email.com\"\ngit config --global init.defaultBranch main",
            note: "Placeholder-ийг өөрийн утгаар солино. Password, token, API key бүү бич. Shared computer дээр энэ block-ийг бүү ажиллуул.",
          },
          {
            title: "Identity · shared computer, repository дотор",
            language: "bash",
            code: "git config user.name \"Өөрийн нэр\"\ngit config user.email \"өөрийн@email.com\"",
            note: "git init хийсэн зөв repository дотор ажиллуул. Энэ config зөвхөн тухайн repository-д үйлчилнэ.",
          },
          {
            title: "Config verification — бүх OS",
            language: "bash",
            code: "git config --get user.name\ngit config --get user.email\ngit config --get init.defaultBranch\ngit config --list --show-origin",
            note: "Value болон source file-ийг шалга. Email projector дээр харагдах бол demo/no-reply value ашигла.",
          },
        ],
      },
      diagram: {
        label: "Setup evidence gate",
        nodes: [
          { title: "INSTALL", detail: "One OS path" },
          { title: "RESTART", detail: "Terminal reloads PATH" },
          { title: "VERIFY", detail: "Version + executable" },
          { title: "IDENTITY", detail: "Name/email + origin" },
        ],
      },
      questions: [
        { question: "git --version ажиллавал installer-ийг дахин ажиллуулах уу?", answer: "Үгүй. Эхлээд existing version/path-аа шалгаж, update хийх бодит шаардлага байгаа эсэхийг тусад нь шийднэ." },
        { question: "Windows installer дууссан ч VS Code terminal-д git олдохгүй бол эхний алхам?", answer: "VS Code болон terminal-аа бүрэн хааж дахин нээгээд git --version, Get-Command git ажиллуул. Дараа нь install/PATH evidence шалгана." },
        { question: "user.email нь GitHub password уу?", answer: "Үгүй. Commit metadata. Password, token, API key-г config email-д хэзээ ч хийхгүй." },
        { question: "Shared computer дээр яагаад --global identity болгоомжтой вэ?", answer: "Дараагийн бүх repository/сурагчийн commit-д хувийн identity үлдэж болно. Repo-specific local config болон classroom policy хэрэглэнэ." },
      ],
      misconceptions: [
        { claim: "macOS/Linux/Windows бүх install командыг ажиллуулна.", correction: "Өөрийн OS, Linux бол distro-д тохирох нэг замыг сонгоно." },
        { claim: "sudo гэдэг command ажиллахгүй бол бүх OS дээр нэмдэг prefix.", correction: "sudo Unix privilege tool; Windows PowerShell-д ашиглахгүй. Admin эрх шаардлагатай бол сургуулийн policy дагана." },
        { claim: "GitHub Desktop суусан бол terminal-ийн git command заавал PATH-д байна.", correction: "GUI bundle болон CLI PATH тусдаа байж болно; git --version ба executable path-аар шалгана." },
        { claim: "user.name/email identity-г тохируулснаар GitHub authentication дуусна.", correction: "Commit author metadata л тохирно; GitHub login, HTTPS credential, SSH key тусдаа optional remote setup." },
      ],
      teachingNotes: [
        "OS-оор гурван булан болгож сурагчдыг бүлэглэ. Version ажиллаж буй сурагчийг installer дахин ажиллуулахгүйгээр identity verification руу шууд шилжүүл.",
        "Installer wizard-ийн label version-оор өөрчлөгдөж болно. Official page ашиглаж, default option-уудыг дур мэдэн өөрчлөхгүй; байгууллагын managed device бол IT policy-г дага.",
        "sudo password, GitHub password, token projector дээр оруулахгүй. Terminal password typing үед character харагдахгүй байх нь хэвийн гэдгийг тайлбарла.",
        "Setup их цаг авбал сурагчийг pair болгож lesson workflow-г ажиглуул; install troubleshooting-ийг class-ийн дараах clinic болгон тэмдэглэ.",
        "Official references: https://git-scm.com/install/mac, /install/linux, /install/windows, мөн https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup.",
      ],
      takeaway: "OS-д тохирох нэг official install зам сонгоод terminal restart, version/path, identity, config origin гэсэн evidence-ээр setup complete гэдгийг батална.",
    },
    {
      id: "three-states",
      number: "03",
      title: "Working tree, staging area, commit — гурван өөр төлөв",
      eyebrow: "Сонгоод snapshot хийх",
      duration: "13–15 минут",
      whyItMatters:
        "Git-ийн гурван төлөвийг ялгахгүй бол сурагч git add-ийг save, commit-ийг upload гэж андуурч, хүсээгүй file эсвэл unfinished өөрчлөлтөө түүхэнд оруулна. Staging area бол commit-ээ санаатайгаар зохион байгуулах гол хяналтын цэг.",
      explanation: [
        "Working tree бол disk дээрх таны одоо харж, засаж буй file-уудын төлөв. Editor дээр Save хийхэд working tree өөрчлөгдөнө, гэхдээ commit автоматаар үүсэхгүй. Git tracked file-ийн өмнөх snapshot-тай харьцуулж modified гэдгийг мэднэ.",
        "Staging area буюу index нь дараагийн commit-д яг ямар content орохыг сонгосон завсрын төлөв. git add README.md нь file-ийг GitHub руу upload хийхгүй, commit ч хийхгүй. Тухайн мөчийн README content-ийг дараагийн snapshot-д бэлдэнэ.",
        "Commit бол staged content-оос үүссэн нэртэй snapshot. Commit бүр unique ID, author, time, message, өмнөх commit-тэй холбоостой. Commit хийсний дараа working tree-д stage хийгдээгүй шинэ өөрчлөлт үлдэж болно.",
        "Нэг file-ийг stage хийсний дараа editor-оор дахин өөрчилбөл тэр file staged болон unstaged хоёр хэсэгтэй зэрэг харагдаж болно. Энэ нь Git эвдэрсэн гэсэн үг биш: staging area-д өмнөх content, working tree-д дараагийн edit байна.",
      ],
      mentalModel: {
        title: "Аяллын цүнхээ баглах",
        explanation:
          "Өрөөн дэх бүх зүйл working tree, цүнхэнд сонгож хийсэн зүйл staging area, цүнхээ хаагаад label наасан төлөв commit шиг. Өрөөнд байгаа бүхэн автоматаар цүнхэнд орохгүй. Analogy-ийн хязгаар нь Git file-ийг physical байдлаар зөөхгүй, content snapshot-ийн мэдээлэл хадгална.",
      },
      example: {
        title: "README-г сонгож commit хийх",
        explanation:
          "README.md болон notes.txt хоёрыг өөрчилсөн ч зөвхөн README.md-ийг add хийвэл staged diff, дараагийн commit-д README л орно. notes.txt working tree-д үлдэнэ.",
        code: "WORKING TREE\n  README.md  modified\n  notes.txt   modified\n\ngit add README.md\n\nSTAGING AREA\n  README.md  ready\nWORKING TREE\n  notes.txt   still modified",
        language: "text",
      },
      diagram: {
        label: "Git-ийн гурван төлөв ба шилжилт",
        nodes: [
          { title: "WORKING TREE", detail: "Edit + save" },
          { title: "git add", detail: "Сонгох" },
          { title: "STAGING AREA", detail: "Next snapshot" },
          { title: "git commit", detail: "History snapshot" },
        ],
      },
      questions: [
        { question: "File editor дээр Save хиймэгц commit болдог уу?", answer: "Үгүй. Save нь working tree-г өөрчилнө; add болон commit тусдаа алхам." },
        { question: "git add ямар хоёр зүйлийг хийхгүй вэ?", answer: "Commit үүсгэхгүй, GitHub руу upload/push хийхгүй." },
        { question: "Яагаад staging area хэрэгтэй вэ?", answer: "Дараагийн commit-д оруулах өөрчлөлтийг санаатайгаар сонгож, логик хэсэг болгоход хэрэгтэй." },
      ],
      misconceptions: [
        { claim: "git add . гэвэл save хийж байна.", correction: "Save editor/disk үйлдэл. git add нь одоогийн content-ийг staging area-д сонгоно; dot нь олон хүсээгүй file хамруулах эрсдэлтэй." },
        { claim: "Staged file дахин өөрчлөгдвөл Git төөрнө.", correction: "Git staged snapshot болон working tree-ийн дараагийн өөрчлөлтийг тусдаа харуулж чадна." },
      ],
      teachingNotes: [
        "Самбар дээр working, staged, committed гэсэн 3 хайрцаг зурж README нэртэй sticky note-г нэг нэгээр шилжүүл.",
        "Эхний хичээлд git add .-ийг гол workflow болгохгүй. Explicit file name нь scope-ийг харагдуулж, reasoning-ийг хадгална.",
      ],
      takeaway: "Edit working tree-д, git add staging area-д, git commit local history-д өөрчлөлтийг тус тус шилжүүлнэ.",
    },
    {
      id: "inspect-stage-commit",
      number: "04",
      title: "Git command бүр repository-ийн нэг асуултад хариулна",
      eyebrow: "Status → diff → stage → verify",
      duration: "14–16 минут",
      whyItMatters:
        "Command-ийг бөөнөөр copy-paste хийхэд сурагч state transition бүрийг харахгүй өнгөрдөг. Inspection command-уудаа үйлдэл бүрийн өмнө ба дараа хэрэглэвэл санамсаргүй commit-ээс хамгаалж, error гарсан мөчийг нарийсгана.",
      explanation: [
        "git status repository-ийн ерөнхий төлөвийг өөрчлөлгүй харуулна: current branch, staged/unstaged/untracked file, clean эсэх. Git ажил эхлэх бүрт болон state-changing command-ийн дараа ажиллуулах аюулгүй эхний command.",
        "git diff нь working tree ба staging area-ийн хоорондох, өөрөөр хэлбэл staged болоогүй line change-ийг харуулна. Untracked шинэ file-ийн content git diff-д шууд харагдахгүй байж болно; status түүнийг untracked гэж харуулна.",
        "git add <file> content-ийг staging area-д сонгоно. Дараа нь git diff --staged ажиллуулж commit-д яг ямар line орохыг уншина. Энэ бол commit хийхээс өмнөх final review gate.",
        "git commit -m \"...\" staged snapshot үүсгэнэ. git log --oneline history-д орсныг, git status working tree clean болсон эсэхийг шалгана. Clean гэдэг нь repository байхгүй гэсэн үг биш; tracked өөрчлөлт үлдээгүй гэсэн үг.",
      ],
      mentalModel: {
        title: "Нислэгийн checklist",
        explanation:
          "Pilot action бүрийн өмнө instrument шалгадаг шиг Git workflow-д status/diff нь state evidence өгнө. Гэхдээ checklist өөрөө зөв кодыг батлахгүй; test/runtime review тусдаа хэрэгтэй.",
      },
      example: {
        title: "Нэг file-ийн audit trail",
        explanation:
          "Доорх дараалал бүрийн output-ийг уншаад дараагийн command руу орно. git add болон commit л state өөрчилнө; бусад нь энэ жишээнд inspection.",
        code: "git status\ngit diff -- README.md\ngit add README.md\ngit diff --staged -- README.md\ngit commit -m \"Explain repository purpose\"\ngit status\ngit log --oneline -3",
        language: "bash",
      },
      diagram: {
        label: "Evidence gate бүхий commit workflow",
        nodes: [
          { title: "STATUS", detail: "Юу өөрчлөгдөв?" },
          { title: "DIFF", detail: "Яг ямар мөр?" },
          { title: "ADD", detail: "Алийг сонгох?" },
          { title: "STAGED DIFF", detail: "Юу commit болох вэ?" },
          { title: "COMMIT + LOG", detail: "Түүхэнд орсон уу?" },
        ],
      },
      questions: [
        { question: "git status болон git diff хоёр ижил мэдээлэл өгөх үү?", answer: "Үгүй. status file/state-ийн summary; diff line-level өөрчлөлтийг харуулна." },
        { question: "Commit хийхийн яг өмнөх хамгийн чухал verify command юу вэ?", answer: "git diff --staged. Дараагийн commit-д орох staged line-уудыг харуулна." },
        { question: "git status clean гэдэг нь юу гэсэн үг вэ?", answer: "Tracked/staged өөрчлөлт үлдээгүй; repository болон өмнөх commit-ууд байхгүй гэсэн үг биш." },
      ],
      misconceptions: [
        { claim: "git diff хоосон бол ямар ч өөрчлөлт байхгүй.", correction: "Өөрчлөлт staged болсон эсвэл file untracked байж болно. status болон git diff --staged-ийг хамт шалгана." },
        { claim: "Commit амжилттай гэсэн message гарсан бол дахин шалгах шаардлагагүй.", correction: "log-оор history, status-оор үлдсэн working change-ийг verify хийнэ." },
      ],
      teachingNotes: [
        "Output бүрийн дараа ‘Энэ command repository-г өөрчилсөн үү, зөвхөн харуулсан уу?’ гэж асуу.",
        "Diff pager нээгдэж дэлгэц (END) дээр гацвал q дарж гарахыг demo-гийн өмнө хэл. q нь commit-ийг cancel хийдэггүй, viewer-ээс гарна.",
      ],
      takeaway: "Commit хийх урсгал: status → diff → explicit add → staged diff → commit → status + log verification.",
    },
    {
      id: "commit-design",
      number: "05",
      title: "Сайн commit нэг логик өөрчлөлтийг тайлбарладаг",
      eyebrow: "Atomic scope ба message",
      duration: "7–9 минут",
      whyItMatters:
        "Жижиг, логик commit review хийх, bug хаана орсныг олох, шаардлагатай өөрчлөлтийг буцаахад хялбар. ‘update’, ‘fix stuff’ зэрэг message түүхийг уншдаг дараагийн хүнд бодит context өгдөггүй.",
      explanation: [
        "Atomic commit гэдэг нь техникээр заавал нэг file гэсэн үг биш. Нэг зорилгыг бүрэн гүйцээсэн, бусад хамааралгүй зорилгоос салгасан commit гэсэн санаа. Нэг feature-д HTML ба CSS хоёул шаардлагатай бол хамт орж болно.",
        "Commit message нь юу өөрчилснийг товч, тодорхой хэлнэ. Энэ курсэд English imperative style ашиглаж болно: Add setup notes, Explain Git workflow, Fix navigation label. Message-ээс өөрчлөлтийн scope ойлгогдох ёстой.",
        "Commit хийхээс өмнө staged diff-ээ нэг өгүүлбэрээр summary хий. Нэг өгүүлбэрт ‘and’ ашиглан хоёр хамааралгүй зорилго холбож байвал staging-ээ салгах дохио байж болно.",
      ],
      mentalModel: {
        title: "Номын chapter-ийн гарчиг",
        explanation:
          "Commit message бол түүхийн chapter title шиг: уншигч дотор нь юу болохыг таамаглаж чадна. Гэхдээ message ганцаараа evidence биш; exact content-ийг diff/show-оор шалгана.",
      },
      example: {
        title: "Бүдэг ба тодорхой message",
        explanation:
          "Message нь activity биш outcome/intent-ийг нэрлэнэ. Доорх эхний хоёр message дараа нь хайхад тус болохгүй.",
        code: "BAD:  update\nBAD:  fix stuff\nMIXED: Add README and change editor settings\nGOOD: Explain repository purpose\nGOOD: Document basic Git commands",
        language: "text",
      },
      diagram: {
        label: "Өөрчлөлтийг логик scope-оор хуваах",
        nodes: [
          { title: "ALL CHANGES", detail: "README + commands + settings" },
          { title: "COMMIT 1", detail: "Repository purpose" },
          { title: "COMMIT 2", detail: "Git command notes" },
          { title: "LEAVE OUT", detail: "Unrelated settings" },
        ],
      },
      questions: [
        { question: "Atomic commit заавал нэг file агуулдаг уу?", answer: "Үгүй. Нэг логик зорилгод шаардлагатай хэд хэдэн file байж болно." },
        { question: "‘Update files’ message яагаад сул вэ?", answer: "Ямар өөрчлөлт, ямар зорилго байсныг түүх уншигчид хэлэхгүй." },
      ],
      misconceptions: [
        { claim: "Олон жижиг commit үргэлж сайн, нэг мөр бүр commit байх ёстой.", correction: "Commit бүр meaningful, working logical unit байх нь чухал; механикаар хамгийн жижиг болгох зорилго биш." },
        { claim: "Commit message diff-ийг орлож чадна.", correction: "Message intent summary; actual changed content-ийг staged diff эсвэл git show нотолно." },
      ],
      teachingNotes: [
        "Сурагчдаар mixed change жишээг хоёр commit message болгон задлуул. Нэг зөв wording шаардахгүй, scope ойлгогдож байгаа эсэхийг шалга.",
        "Conventional Commits-ийг одоохондоо дүрэм болгохгүй. Message clarity-г эхэлж тогтоо; нарийн convention-ийг project context-тэй дараа үзэж болно.",
      ],
      takeaway: "Commit бүр нэг тайлбарлаж болох зорилготой, message нь тэр зорилгыг diff-тэй нийцүүлэн нэрлэсэн байна.",
    },
    {
      id: "branch-and-remote",
      number: "06",
      title: "Branch бол ажлын шугам, remote бол өөр repository-ийн холбоос",
      eyebrow: "Local history-аас collaboration руу",
      duration: "6–8 минут",
      whyItMatters:
        "Сурагчид branch үүсгэхийг GitHub дээр project copy хийхтэй, push-ийг commit хийхтэй андуурах нь элбэг. Local болон remote үйлдлийн хил тодорхой бол authentication/network error-ийг Git history-ийн алдаанаас салгана.",
      explanation: [
        "Branch бол commit history-ийн хөдөлгөөнт нэр буюу тусдаа ажлын шугам. git switch -c notes-update шинэ branch үүсгээд түүн рүү шилжинэ. Branch үүсгэхэд GitHub эсвэл Internet заавал хэрэггүй.",
        "Remote бол өөр repository location-д өгсөн nickname. origin гэдэг нь түгээмэл нэр боловч тусгай ид шидтэй server биш. git remote add origin <URL> local repo-д холбоос/config нэмнэ; commit-уудыг хараахан upload хийхгүй.",
        "git push local commit-уудыг remote руу илгээнэ. Push хийхээс өмнө commit аль хэдийн local history-д байх ёстой. Authentication browser, credential manager, SSH зэрэг орчноос хамаарч болно; password/token-оо command, commit, screenshot-д бичихгүй.",
        "Энэ хичээлийн success criterion нь local хоёр commit. GitHub remote бол цаг, account, authentication бэлэн багт optional stretch бөгөөд local mental model-ийг алдагдуулах ёсгүй.",
      ],
      mentalModel: {
        title: "Local зам ба remote уулзвар",
        explanation:
          "Branch-ийг нэг газрын зураг дээрх өөр ажлын зам, remote-ийг өөр хотод буй repository руу холбох хаяг гэж төсөөл. Push нь зам өөрөө биш, local commit-уудыг тэр хаяг руу дамжуулах үйлдэл.",
      },
      example: {
        title: "Local branch, optional remote",
        explanation:
          "Эхний гурван command offline ажиллана. Remote/push хэсэгт GitHub дээр урьдчилан үүсгэсэн хоосон repository-ийн бодит HTTPS URL хэрэгтэй.",
        code: "git switch -c notes-update\ngit branch\ngit status\ngit switch -\n\n# Optional GitHub remote\ngit branch -M main\ngit remote add origin https://github.com/USERNAME/git-practice.git\ngit remote -v\ngit push -u origin main",
        language: "bash",
      },
      diagram: {
        label: "Local commit-оос remote хүртэл",
        nodes: [
          { title: "LOCAL BRANCH", detail: "main / notes-update" },
          { title: "LOCAL COMMITS", detail: "Offline history" },
          { title: "origin", detail: "Remote URL nickname" },
          { title: "PUSH", detail: "Commits илгээх" },
        ],
      },
      questions: [
        { question: "Branch үүсгэхэд GitHub account хэрэгтэй юу?", answer: "Үгүй. Branch local Git concept." },
        { question: "git remote add origin commit-уудыг upload хийдэг үү?", answer: "Үгүй. Remote URL холбоно; git push commit-уудыг илгээнэ." },
      ],
      misconceptions: [
        { claim: "Commit ба push нэг үйлдэл.", correction: "Commit local snapshot үүсгэнэ; push өмнө үүссэн local commit-уудыг remote руу илгээнэ." },
        { claim: "main branch нэр бүх Git installation дээр автоматаар ижил.", correction: "Default branch нэр configuration/version-оос шалтгаалж main эсвэл master байж болно. git branch/status output-оо уншина." },
      ],
      teachingNotes: [
        "Optional push demo хийх бол GitHub дээр README/license-гүй хоосон repository үүсгэ. Remote history conflict-ийг энэ beginner lesson-д зориуд бүү оруул.",
        "Branch merge, pull request, rebase-ийг зөвхөн нэрлээд өнгөр. Өнөөдрийн зорилго branch/local/remote хил.",
      ],
      takeaway: "Branch local history-ийн ажлын шугам; remote өөр repository-ийн URL; push local commit-уудыг remote руу дамжуулна.",
    },
  ],
  liveDemo: {
    title: "Зөв folder-оос verified first commit хүртэл",
    duration: "20 минут",
    goal:
      "Багш install/setup evidence gate, repository үүсгэхээс өмнөх path check, Git identity, working/staged diff, commit, clean status, log verification-ийг нэг ч state transition алгасалгүй үзүүлнэ.",
    setup: [
      "ai-frontend-course/week-01 эсвэл тусгай demo parent folder-оо terminal-д нээж, pwd/Get-Location output-оор батал.",
      "git-practice-demo folder өмнө нь байхгүйг ls/Get-ChildItem-ээр шалга. Existing data-г class дээр устгахгүй.",
      "macOS/Linux/Windows install command-ийг өөрийн OS-ийн official page-тай тулга. Student device бүр дээр бүх OS-ийн command ажиллуулахгүй.",
      "git --version, executable path, config origin, user.name/user.email output-ийг урьдчилан шалга; projector дээр demo identity ашиглах эсвэл private email-ээ нуухыг шийд.",
      "VS Code-ийн Source Control UI-г хааж, эхний demo-г command output-оор явуул. UI бол дараа нь Git state-ийн өөр view гэж холбоно.",
    ],
    steps: [
      {
        title: "Path ба Git installation-ийг verify хийх",
        instruction: "Current folder-оо чангаар уншаад Git version шалга. Home/Documents root биш, зориуд сонгосон course parent дотор байгааг батал.",
        code: { title: "Preflight checks", language: "bash", code: "pwd                 # macOS / Linux\nGet-Location        # Windows PowerShell\n\ngit --version\ncommand -v git      # macOS / Linux\nGet-Command git     # Windows PowerShell", note: "Path болон executable шалгахдаа өөрийн OS-д тохирох command-ийн зөвхөн нэгийг ажиллуул." },
        observe: "Path нь course workspace руу зааж, Git version string болон executable-ийн бодит path харагдана.",
        explain: "Version/path setup-ийг, current folder дараагийн git init-ийн scope-ийг нотолно. Аль аль нь safety gate." },
      {
        title: "Commit identity-г шалгах",
        instruction: "Одоогийн Git author name/email-ийг унш. Хоосон бол хувийн төхөөрөмж дээр бодит утгаа нэг удаа тохируул; shared төхөөрөмж дээр багшийн дүрмийг дага.",
        code: { title: "Git identity check", language: "bash", code: "git config --global --get user.name\ngit config --global --get user.email\n\n# Хоосон үед, зөвхөн өөрийн төхөөрөмж дээр:\ngit config --global user.name \"Өөрийн нэр\"\ngit config --global user.email \"өөрийн@email.com\"\ngit config --global init.defaultBranch main\n\n# Active value хаанаас ирснийг шалга:\ngit config --show-origin --get user.name\ngit config --show-origin --get user.email\ngit config --show-origin --get init.defaultBranch", note: "Password/token бүү бич. Shared computer дээр repository үүсгэсний дараа --global-гүй local config болон багшийн policy ашигла." },
        observe: "Name/email value болон тэдгээрийг өгсөн config file source харагдана.",
        explain: "Commit author metadata GitHub authentication биш. --global нь тухайн computer user-ийн бүх repository-д үйлчилнэ." },
      {
        title: "Тусгаарласан folder үүсгээд repository эхлүүлэх",
        instruction: "Demo folder үүсгэж дотогш орсны дараа path-аа дахин шалга. Тэгээд л git init ажиллуул.",
        code: { title: "Initialize local repository", language: "bash", code: "mkdir git-practice-demo\ncd git-practice-demo\npwd            # macOS / Linux\nGet-Location   # Windows PowerShell\ngit init\ngit status", note: "Өөрийн shell-д тохирох path command-ийн зөвхөн нэгийг ажиллуул." },
        observe: "Initialized empty Git repository message, branch нэр, no commits yet гэсэн status харагдана.",
        explain: "Project file хараахан нэмээгүй; .git metadata үүссэн. Branch main эсвэл master байж болно." },
      {
        title: "Working tree-д README үүсгэх",
        instruction: "code . ажиллуулаад README.md үүсгэж project-ийн зорилгыг 2–3 мөрөөр бичин Save хий. Дараа нь status шалга.",
        code: { title: "Open workspace and inspect", language: "bash", code: "code .\ngit status" },
        observe: "README.md untracked files хэсэгт харагдана.",
        explain: "Editor Save нь working tree-г өөрчилсөн. Git add/commit хараахан болоогүй; untracked file-ийн full content ердийн git diff-д харагдахгүй байж болно." },
      {
        title: "File-ийг explicit stage хийх",
        instruction: "README content-ийг editor дээр review хийсний дараа зөвхөн тэр file-ийг add хийгээд status-ийг дахин унш.",
        code: { title: "Stage one file", language: "bash", code: "git add README.md\ngit status\ngit diff --staged -- README.md" },
        observe: "README changes to be committed хэсэгт орж, staged diff нь бүх шинэ мөрийг + тэмдэгтэй харуулна.",
        explain: "git add . ашиглаагүй: scope-оо explicit сонгож байна. Staged diff бол дараагийн commit-ийн preview." },
      {
        title: "Staged diff-ийг үгээр тайлбарлах",
        instruction: "Commit хийхээс өмнө diff-ийг зогсоож, сурагчдаар ‘ямар file, ямар зорилго, ямар мөр?’ гэсэн гурван асуултад хариулуул.",
        observe: "Diff header, new file marker, + мөрүүд болон pager гарвал q ашиглах.",
        explain: "Green өнгө зөв гэсэн үг биш; нэмэгдсэн мөр гэдгийг л заана. Content ба intent-ийг хүн review хийнэ." },
      {
        title: "First commit үүсгэх",
        instruction: "Diff summary-тэй нийцсэн message сонгоод commit хий.",
        code: { title: "Create the snapshot", language: "bash", code: "git commit -m \"Explain repository purpose\"" },
        observe: "Root commit/commit ID, file count, insertion count бүхий summary гарна.",
        explain: "Commit local history-д snapshot үүсгэлээ. GitHub руу юу ч илгээгээгүй." },
      {
        title: "Post-condition-оо хоёр command-аар verify хийх",
        instruction: "Working state болон history-г тус тус шалга. Output-ийг environment/notes file-д evidence болгон хадгалж болно.",
        code: { title: "Verify the result", language: "bash", code: "git status\ngit log --oneline --decorate -3" },
        observe: "Working tree clean болон message-тэй нэг commit, current branch pointer харагдана.",
        explain: "Status нь одоогийн uncommitted state, log нь түүхийг нотолж байна. Нэг command бүх claim-ийг батлахгүй." },
    ],
    expectedOutput: [
      "git --version version string, OS-д тохирох path command executable location буцаасан байна.",
      "user.name/user.email хоосон биш бөгөөд config origin нь хувийн эсвэл classroom policy-тэй тохирсон байна.",
      "git init зөвхөн git-practice-demo folder дотор .git metadata үүсгэсэн байна.",
      "README.md эхлээд untracked, add хийсний дараа staged болсон байна.",
      "git diff --staged README-ийн бодит content-ийг commit-ээс өмнө харуулсан байна.",
      "git log --oneline-д Explain repository purpose message бүхий нэг commit харагдана.",
      "git status эцэстээ working tree clean гэж харуулна.",
    ],
    recovery: [
      "macOS — git байхгүй: xcode-select --install эсвэл Homebrew аль хэдийн байгаа бол brew install git гэсэн нэг official зам сонго; terminal restart → git --version → command -v git.",
      "Linux — git байхгүй: cat /etc/os-release-ээр distro-оо таньж official package manager command ашигла; install дараа terminal restart → git --version → command -v git.",
      "Windows — git байхгүй: winget install --id Git.Git -e --source winget эсвэл official Git for Windows installer ашигла; PowerShell/VS Code restart → git --version → Get-Command git.",
      "Installer дууссан ч command not found: дахин дахин install хийхгүй. Terminal/VS Code restart, executable path, installer completion/PATH option-ийг evidence-ээр шалга.",
      "Author identity unknown: error доторх suggested user.name/user.email тохиргоог унш. Хувийн төхөөрөмж бол бодит identity, shared төхөөрөмж бол local/config policy ашигла.",
      "Буруу author харагдсан: git config --show-origin --get user.name болон user.email ажиллуулж system/global/local аль source ялсныг ол; blind overwrite хийхгүй.",
      "Folder already exists: устгахгүй. Contents болон .git байгаа эсэхийг шалгаад git-practice-demo-02 зэрэг шинэ нэр сонго.",
      "fatal: not a git repository: git status ажиллуулсан current path-аа шалга; repo folder руу cd хийсэн эсэхийг батал.",
      "Nothing to commit: status, Save болсон эсэх, file зөв workspace дотор байгаа эсэх, staged state-ийг шалга.",
      "Diff viewer гацсан мэт: q дарж pager-ээс гар; Ctrl+C-ийг random давтахгүй.",
    ],
  },
  guidedPractice: {
    title: "Нэг project, хоёр логик commit",
    duration: "16 минут",
    goal:
      "Хос бүр өөрийн git-practice repository үүсгэж README.md болон commands.md-ийг тусдаа scope болгон stage, review, commit хийгээд history-г output-оор нотолно.",
    instructions: [
      "Driver terminal/editor ажиллуулж, Navigator command бүрийн өмнө current state болон expected output-ийг хэлнэ.",
      "ai-frontend-course/week-01 дотор git-practice folder үүсгэ; pwd/Get-Location-оор зөв path-аа баталсны дараа git init хий.",
      "README.md үүсгэж repository-ийн зорилгыг 3 мөрөөр өөрийн үгээр бичээд хадгал.",
      "git status → content review → git add README.md → git diff --staged дарааллаар эхний commit-ийн scope-ийг шалга.",
      "Explain repository purpose эсвэл ижил тодорхой intent бүхий message-ээр эхний commit хий; status ба log-оор verify хий.",
      "commands.md үүсгэж өнөөдрийн 5 Git command болон command бүрийн хариулах асуултыг бич.",
      "Зөвхөн commands.md-ийг stage хийгээд staged diff-ээ Navigator-аар аман summary хийлгэсний дараа хоёр дахь commit хий.",
      "git log --oneline -2 болон final git status output-оо хадгалаад Driver/Navigator үүргээ сольж rubric-ээр шалга.",
    ],
    constraints: [
      "git init-ийг home, Documents эсвэл course root дээр таамгаар ажиллуулахгүй; dedicated git-practice folder ашиглана.",
      "git add . ашиглахгүй; commit бүрт explicit file name хэрэглэнэ.",
      "Staged diff-ээ уншаагүй бол commit хийхгүй.",
      "README болон commands content-ийг нэг commit-д хольж болохгүй.",
      "reset, clean, checkout --, force болон file deletion command ашиглахгүй.",
      "GitHub account, remote, push шаардахгүй — local history нь үндсэн deliverable.",
      "AI ашиглахгүй — AI Lab эхлэх хүртэл message болон summary-гаа өөрсдөө бичнэ.",
    ],
    hints: [
      "fatal: not a git repository гарвал pwd/Get-Location болон git-practice folder руу cd хийсэн эсэхээ шалга.",
      "git diff хоосон боловч status staged гэж байвал git diff --staged ашигла.",
      "Шинэ untracked file-ийн content ердийн diff-д харагдахгүй бол editor-оор content-ээ уншаад add хийсний дараа staged diff үз.",
      "Commit identity error гарвал багшийн setup заавраар user.name/user.email-ээ шалга; secret бүү оруул.",
      "Message сонгохдоо ‘Энэ commit юу хийв?’ гэсэн асуултад verb + object хэлбэрээр хариул.",
    ],
    expectedResult: [
      "git-practice folder өөрийн .git metadata бүхий local repository болсон байна.",
      "git log --oneline -2 дээр хоёр өөр, утгатай commit message харагдана.",
      "Эхний commit зөвхөн README.md, хоёр дахь commit зөвхөн commands.md агуулна.",
      "Commit бүрийн өмнө staged diff review хийсэн evidence багийн тайлбарт байна.",
      "Final git status working tree clean гэж харуулна.",
    ],
    stretchTask:
      "commands.md-ийг stage хийсний дараа нэг шинэ мөр нэмж Save хийгээд git status, git diff, git diff --staged гурвыг харьцуул. File яагаад staged болон unstaged хоёр хэсэгт зэрэг харагдаж болохыг тайлбарла; ойлгох хүртлээ нэмэлт commit бүү хий.",
    debriefQuestions: [
      { question: "Staging area танай хоёр commit-ийг салгахад яг яаж тусалсан бэ?", answer: "Дараагийн snapshot-д зөвхөн нэг логик file/content-ийг explicit сонгох боломж өгсөн." },
      { question: "Final clean status болон two-line log тус тус юу нотолсон бэ?", answer: "Clean status uncommitted tracked change үлдээгүйг; log хоёр snapshot history-д орсныг нотолсон." },
    ],
  },
  aiLab: {
    title: "AI-ийн diff summary-г Git evidence-ээр review хийх",
    duration: "6 минут",
    goal:
      "Сурагч AI-аас diff summary болон commit message санал авах боловч file, line, scope claim бүрийг git diff output-той тулгаж, эцсийн message-ийг өөрөө шийднэ.",
    prompt: `Би Git сурч буй beginner frontend developer.

Доорх output бол миний local repository-ийн git diff эсвэл git diff --staged output:

--- DIFF START ---
[өөрийн diff output-оо энд хуул]
--- DIFF END ---

Надад:
1. File бүрт яг ямар өөрчлөлт орсныг beginner-friendly Монгол хэлээр summary хий.
2. Diff дотор шууд харагдахгүй зорилго, file, behavior-ийг бүү зохио.
3. Энэ өөрчлөлт нэг логик commit мөн эсэхийг тайлбарла.
4. English imperative style-тай 3 commit message санал болго.
5. Эргэлзэж буй зүйлээ тусад нь нэрлэ.

Command ажиллуулах, file өөрчлөх, commit хийх заавар бүү өг.`,
    steps: [
      { title: "AI-аас өмнө diff-ээ өөрсдөө унших", instruction: "File count, нэмэгдсэн/хасагдсан гол мөр, өөрчлөлтийн нэг өгүүлбэр summary, өөрийн message-ээ эхлээд бич.", observe: "Сурагч AI-гүй baseline prediction-тэй болсон байна.", explain: "AI саналтай харьцуулах reference байхгүй бол response-ийг шууд зөв мэт хүлээж авах эрсдэлтэй." },
      { title: "Share хийх diff-ээ аюулгүй болгох", instruction: "git diff эсвэл git diff --staged output-оос token, email, path, secret байгаа эсэхийг шалгаад prompt-д оруул.", observe: "Diff boundary тодорхой, private data байхгүй байна.", explain: "Git diff source code болон config secret агуулж болно; AI-д илгээхээс өмнөх review заавал." },
      { title: "AI claim-үүдийг line evidence-тэй тулгах", instruction: "AI summary дахь file/action бүрийн ард diff-ийн аль header эсвэл мөр нотолж байгааг тэмдэглэ.", observe: "Diff-д байхгүй intent/behavior claim тусдаа ‘батлагдаагүй’ гэж тэмдэглэгдэнэ.", explain: "AI-ийн fluent summary Git object биш; source evidence нь бодит diff." },
      { title: "Commit scope болон message-ээ өөрсдөө шийдэх", instruction: "AI-ийн 3 message-ээс сохроор сонгохгүй. Өөрийн baseline-тай нэгтгээд staged diff-тэй нийцэх final message бич.", observe: "Message өөрчлөлтийн зорилгыг нэрлэж, diff-д байхгүй claim агуулаагүй.", explain: "AI зөвлөх; staged content болон repository history-д оруулах шийдвэр инженерийнх." },
      { title: "Post-commit evidence авах", instruction: "Commit хийсэн бол git show --stat --oneline HEAD болон git status ашиглан AI-д review хийлгэсэн scope history-д зөв орсныг батал.", expected: "HEAD summary expected file count-тэй таарч, status clean эсвэл зориуд үлдээсэн өөрчлөлтийг тайлбарласан байна." },
    ],
    verificationTable: [
      { claim: "AI зөв file-уудыг нэрлэсэн", evidence: "git diff --name-only эсвэл diff header", pass: "Нэмээгүй/орхисон file claim байхгүй" },
      { claim: "AI line change-ийг зөв summary хийсэн", evidence: "git diff / git diff --staged-ийн + ба - мөр", pass: "Summary source line-ийн утгатай нийцсэн" },
      { claim: "Нэг логик commit мөн", evidence: "Staged diff-ийн бүх change нэг өгүүлбэр intent-д багтаж байгаа эсэх", pass: "Хамааралгүй settings/notes холилдоогүй" },
      { claim: "Final commit expected scope-тэй", evidence: "git show --stat --oneline HEAD + git status", pass: "Message, file count, final state төлөвлөсөнтэй таарсан" },
    ],
    teacherNotes: [
      "Diff маш богино байсан ч verification workflow-г алгасахгүй. Зорилго hallucination заавал барих биш, claim → source line холбоо хийх.",
      "Untracked file ердийн git diff-д харагдахгүй байвал staged diff ашиглах эсвэл багшийн бэлдсэн diff snippet өг.",
      "Сурагч AI-д бүх repository-г upload хийх шаардлагагүй. Хамгийн бага хэрэгтэй diff context болон secret review-ийн дадлыг онцол.",
    ],
  },
  checkpoint: {
    duration: "5 минут",
    instructions:
      "AI болон terminal ашиглахгүйгээр эхний хариугаа бич. Application асуултад command нэрээс гадна expected evidence-ийг тайлбарла.",
    questions: [
      { type: "concept", question: "Working tree, staging area, commit гурвыг тус бүр нэг өгүүлбэрээр ялга.", answer: "Working tree одоо засаж буй file state; staging area дараагийн snapshot-д сонгосон content; commit staged content-оос үүссэн local history snapshot." },
      { type: "concept", question: "Git болон GitHub-ийн ялгаа юу вэ?", answer: "Git local/distributed version-control tool; GitHub Git repository host хийж collaboration өгдөг remote service." },
      { type: "concept", question: "git add README.md яг юу хийдэг, юу хийхгүй вэ?", answer: "README-ийн одоогийн content-ийг staging area-д сонгоно; commit үүсгэхгүй, GitHub руу push хийхгүй." },
      { type: "application", question: "git diff хоосон боловч git status ‘changes to be committed’ гэж байна. Дараа нь юу шалгах вэ?", answer: "git diff --staged ажиллуулна. Өөрчлөлт working tree биш staging area-д байгаа." },
      { type: "application", question: "README ба editor settings зэрэг хамааралгүй хоёр өөрчлөлт staged байна. Commit-ээс өмнө ямар шийдвэр гаргах вэ?", answer: "Staged diff-ээ review хийгээд логик scope-оор тусдаа commit болгоно; ойлгоогүй reset command хэрэглэхгүй, багшийн аюулгүй unstaging guidance авна." },
      { type: "application", question: "‘Би энэ өөрчлөлтийг аюулгүй commit хийсэн’ гэдгээ өөрийн үгээр ямар evidence-ээр тайлбарлах вэ?", answer: "Жишиг: commit-ээс өмнө status/staged diff зөв scope харуулсан, commit-ийн дараа log expected message агуулсан, final status clean эсвэл үлдсэн change-ээ тайлбарласан. Rubric: pre-check + history + post-check гурвыг холбоно." },
    ],
  },
  wrapUp: {
    summary: [
      "Git local project-ийн intentional өөрчлөлтийн түүх үүсгэнэ.",
      "GitHub бол Git repository-ийн remote hosting/collaboration service, Git өөрөө биш.",
      "Working tree, staging area, commit нь гурван өөр state.",
      "git status state summary, git diff line-level evidence өгнө.",
      "git add content сонгоно; git diff --staged commit-ийн preview болно.",
      "Сайн commit нэг логик зорилготой, message нь staged diff-тэй нийцнэ.",
      "Branch local ажлын шугам; remote URL холбоос; push local commit-ыг илгээнэ.",
      "AI-ийн Git summary/message нь source diff, status, log-оор verify хийх санал төдий.",
    ],
    abilities: [
      "Dedicated project folder дотор local repository аюулгүй үүсгэх",
      "Working, staged, committed state-ийг command output-оор унших",
      "Хоёр логик өөрчлөлтийг тусдаа commit болгон хадгалах",
      "Commit-ийн өмнө staged diff, дараа нь status/log-оор verify хийх",
      "Local Git ба optional GitHub remote workflow-г ялгах",
    ],
    beforeNextLesson: [
      "git-practice repository-д README.md, commands.md, хамгийн багадаа 2 commit үлдээ",
      "git log --oneline -2 болон final git status output-оо lesson notes-д хадгал",
      "Optional: learning-log.md-д working tree, staging area, commit-ийг өөрийн үгээр тус бүр 2 өгүүлбэрээр тайлбарлаж гурав дахь commit хий",
      "GitHub push хийгээгүй бол асуудал биш; Lesson 04-т local clean repository байхад хангалттай",
    ],
    finalModel:
      "Edit → git status → git diff → git add <specific-file> → git diff --staged → git commit → git status + git log → optional push",
    exitTicket: [
      { question: "Commit хийхээс яг өмнөх review gate юу вэ?", answer: "git diff --staged — дараагийн snapshot-д орох exact line-уудыг унших." },
      { question: "Commit ба push-ийн ялгааг нэг өгүүлбэрээр хэл.", answer: "Commit local history snapshot үүсгэнэ; push тэр local commit-уудыг remote repository руу илгээнэ." },
      { question: "AI өөрчлөлт санал болгоход Git ямар хамгаалалтын тор өгөх вэ?", answer: "Өмнөх clean commit, exact diff, жижиг reviewable snapshot, log-аар юу өөрчлөгдсөнийг харах боломж өгнө; зөв эсэхийг test/review мөн шаардлагатай." },
    ],
    nextLesson: {
      title: "Lesson 04 — LLM гэж яг юу вэ",
      connection:
        "Git-ээр өөрчлөлт бүрийг харагддаг, жижиг, буцааж шинжилж болох snapshot болгож сурлаа. Дараагийн хичээлээр AI яагаад итгэлтэй боловч буруу output үүсгэж чаддагийг ойлгоод, AI-тай ажиллахдаа Git diff ба verification-ийг хамгаалалтын workflow болгон ашиглана.",
    },
    teacherClose:
      "“Git command олон мэдэх нь гол биш. Яг одоо repository ямар state-тэй, дараагийн commit-д юу орохыг evidence-ээр хэлж чаддаг байх нь инженерийн чадвар.” гэж хичээлийг хаа.",
  },
};
