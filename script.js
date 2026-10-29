const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const themeToggle = document.querySelector(".theme-toggle");
const langToggle = document.querySelector("#lang-toggle");
const root = document.documentElement;
const themeFixes = document.createElement("style");
themeFixes.textContent = `[data-theme="dark"] .tags span{background:#2a3039;color:#b8c7dc}[data-theme="dark"] .theme-toggle,[data-theme="dark"] .lang-toggle{background:#202329;border-color:#383d45;color:#f1f3f5}[data-theme="dark"] .theme-toggle i{background:#303640}.lang-toggle{border:1px solid var(--line);background:var(--surface);color:var(--muted);border-radius:4px;padding:6px 9px;font:10px var(--mono);cursor:pointer}.project-detail{margin-top:8px!important}.portrait{width:150px;height:150px;border-radius:50%;margin:0 auto;box-shadow:0 0 0 6px var(--surface),0 0 0 7px var(--line)}.portrait:before,.portrait:after,.portrait-caption{display:none}.portrait-photo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 27%;z-index:1}`;
document.head.appendChild(themeFixes);
const portrait = document.querySelector(".portrait");
if (portrait) {
  const image = document.createElement("img");
  image.className = "portrait-photo";
  image.src = "pedro-papa.jpg";
  image.alt = "Pedro Papa";
  portrait.prepend(image);
  portrait.querySelector(".portrait-mark")?.remove();
}

const translations = {
  pt: {
    navHome: "Home",
    navExperience: "Experiência",
    navProjects: "Projetos",
    navLinks: "Links",
    hello: "Olá <span>👋</span>, eu sou",
    bio1: "Sou estudante de <strong>Ciência da Computação</strong> na USCS, com formação prevista para dezembro de 2026. Construo aplicações web e experiências digitais com foco em clareza e resultado.",
    bio2: "Tenho interesse por desenvolvimento full-stack, consumo e integração de APIs, testes e tecnologia aplicada a problemas reais.",
    available: "Disponível para novas oportunidades",
    githubSmall: "Veja meu código",
    linkedinSmall: "Vamos nos conectar",
    stakeSmall: "Conheça meu projeto",
    experienceTitle: "Experiência",
    cloudbedsTitle: "Jovem Aprendiz <span>·</span> Cloudbeds",
    cloudbedsText:
      "Apoio à coordenação e à diretoria, organização de atividades internas, participação em reuniões e aplicação de conhecimentos técnicos em atividades profissionais.",
    testing: "Testes",
    teamwork: "Trabalho em equipe",
    degreeTitle: "Bacharelado em Ciência da Computação",
    degreeText: "Universidade Municipal de São Caetano do Sul (USCS). Formação prevista para dezembro de 2026.",
    inProgress: "Em andamento",
    wizardTitle: "Formação em inglês <span>·</span> Wizard",
    wizardText:
      "Curso de inglês concluído na Wizard, com fluência desenvolvida para comunicação acadêmica e profissional.",
    fluency: "Fluência",
    courseTitle: "Curso de Front-end <span>·</span> Udemy",
    courseText:
      "Curso de 400 horas com HTML, CSS, JavaScript, TypeScript, React, Node.js, EJS, Git, GitHub, consumo de APIs e fundamentos de testes.",
    projectsTitle: "Projetos em destaque",
    stakeType: "Projeto autoral · Full-stack",
    stakeText:
      "Plataforma de gestão e análise de apostas com front-end, back-end, banco de dados, API própria e deploy.",
    stakeDetail:
      "Inclui bot no Telegram integrado ao Google Gemini para interpretar apostas em linguagem natural e automatizar seus registros.",
    githubType: "Mais projetos no",
    githubText: "Veja meus estudos, experimentos e projetos em desenvolvimento.",
    closing: "Eu trago ideias à vida <span>🧠</span><br>e transformo café em código <span>☕</span>",
    location: "São Caetano do Sul · SP",
  },
  en: {
    navHome: "Home",
    navExperience: "Experience",
    navProjects: "Projects",
    navLinks: "Links",
    hello: "Hello <span>👋</span>, I am",
    bio1: "I am a <strong>Computer Science</strong> student at USCS, graduating in December 2026. I build web applications and digital experiences focused on clarity and impact.",
    bio2: "I am interested in full-stack development, API consumption and integration, testing, and technology applied to real-world problems.",
    available: "Available for new opportunities",
    githubSmall: "See my code",
    linkedinSmall: "Let’s connect",
    stakeSmall: "Explore my project",
    experienceTitle: "Experience",
    cloudbedsTitle: "Apprentice <span>·</span> Cloudbeds",
    cloudbedsText:
      "Supported coordination and leadership, organized internal activities, participated in meetings, and applied technical knowledge to professional tasks.",
    testing: "Testing",
    teamwork: "Teamwork",
    degreeTitle: "Bachelor’s Degree in Computer Science",
    degreeText: "Municipal University of São Caetano do Sul (USCS). Expected graduation: December 2026.",
    inProgress: "In progress",
    wizardTitle: "English studies <span>·</span> Wizard",
    wizardText: "Completed English studies at Wizard, developing fluency for academic and professional communication.",
    fluency: "Fluent",
    courseTitle: "Front-end Course <span>·</span> Udemy",
    courseText:
      "400-hour course covering HTML, CSS, JavaScript, TypeScript, React, Node.js, EJS, Git, GitHub, API consumption, and testing fundamentals.",
    projectsTitle: "Featured projects",
    stakeType: "Personal project · Full-stack",
    stakeText:
      "Betting management and analytics platform with front-end, back-end, database, custom API, and deployment.",
    stakeDetail:
      "Includes a Telegram bot integrated with Google Gemini to interpret bets in natural language and automate their registration.",
    githubType: "More projects on",
    githubText: "Explore my studies, experiments, and projects in progress.",
    closing: "I bring ideas to life <span>🧠</span><br>and turn coffee into code <span>☕</span>",
    location: "São Caetano do Sul · Brazil",
  },
};
translations.pt.stakeExperienceTitle = "Desenvolvedor Full-stack <span>·</span> StakeFlow";
translations.pt.stakeExperienceText =
  "Projeto autoral desenvolvido de ponta a ponta: front-end, back-end, banco de dados, API própria, deploy e integração com inteligência artificial.";
translations.en.stakeExperienceTitle = "Full-stack Developer <span>·</span> StakeFlow";
translations.en.stakeExperienceText =
  "End-to-end personal project covering front-end, back-end, database, custom API, deployment, and artificial intelligence integration.";

const setLanguage = (language) => {
  document.documentElement.lang = language === "en" ? "en" : "pt-BR";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translations[language][element.dataset.i18n];
    if (value) element.innerHTML = value;
  });
  const stakeDate = document.querySelector("#experiencia .experience-item .date");
  if (stakeDate) stakeDate.textContent = language === "en" ? "Personal project" : "Projeto autoral";
  langToggle.textContent = language === "pt" ? "EN" : "PT";
  try {
    localStorage.setItem("portfolio-language", language);
  } catch {}
};

let currentLanguage = "pt";
try {
  currentLanguage = localStorage.getItem("portfolio-language") === "en" ? "en" : "pt";
} catch {}
setLanguage(currentLanguage);
langToggle?.addEventListener("click", () => {
  currentLanguage = currentLanguage === "pt" ? "en" : "pt";
  setLanguage(currentLanguage);
});

const applyTheme = (isDark) => {
  root.style.setProperty("--bg", isDark ? "#17191d" : "#f4f5f7");
  root.style.setProperty("--surface", isDark ? "#202329" : "#fff");
  root.style.setProperty("--text", isDark ? "#f1f3f5" : "#202328");
  root.style.setProperty("--muted", isDark ? "#a2a8b0" : "#757b84");
  root.style.setProperty("--line", isDark ? "#383d45" : "#e2e5e8");
  root.style.setProperty("--blue", isDark ? "#30425c" : "#cddffc");
  root.style.setProperty("--blue-deep", isDark ? "#9bbbe9" : "#5076b2");
  root.dataset.theme = isDark ? "dark" : "light";
  try {
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  } catch {}
};
try {
  applyTheme(localStorage.getItem("portfolio-theme") === "dark");
} catch {
  applyTheme(false);
}
themeToggle?.addEventListener("click", () => applyTheme(root.dataset.theme !== "dark"));
menu?.addEventListener("click", () => {
  const open = nav.classList.toggle("mobile-open");
  nav.style.display = open ? "flex" : "";
});
document
  .querySelectorAll("nav a")
  .forEach((link) => link.addEventListener("click", () => nav.classList.remove("mobile-open")));
