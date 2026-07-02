export interface Project {
  id: string;
  name: string;
  description: { pt: string; en: string };
  stack: string[];
  github?: string;
  demo?: string;
  isPrivate: boolean;
  isFeatured: boolean;
  language: string;
  languageColor: string;
}

export interface ExperienceItem {
  company: string;
  role: { pt: string; en: string };
  period: { pt: string; en: string };
  location: { pt: string; en: string };
  description: { pt: string; en: string };
  stack: string[];
}

export interface SkillGroup {
  key: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  tag: { pt: string; en: string };
  degree: { pt: string; en: string };
  period: { pt: string; en: string };
}

export interface AIStep {
  n: string;
  title: { pt: string; en: string };
  desc: { pt: string; en: string };
}

export interface AITool {
  name: string;
  tag: { pt: string; en: string };
  desc: { pt: string; en: string };
}

export const projects: Project[] = [
  {
    id: 'itapofood',
    name: 'ItapoFood',
    description: {
      pt: 'Plataforma completa de delivery local. Monorepo (Turborepo) com backend Node.js/Express/Prisma, apps React Native para clientes e entregadores, painel PWA para restaurantes, admin e apps de impressão (Electron + Android). Notificações em tempo real via Socket.io. Deploy em Railway + Vercel.',
      en: 'Complete local delivery platform. Turborepo monorepo with a Node.js/Express/Prisma backend, React Native apps for customers and couriers, a PWA panel for restaurants, admin and printing apps (Electron + Android). Real-time notifications via Socket.io. Deployed on Railway + Vercel.',
    },
    stack: ['TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Redis', 'Socket.io', 'React Native', 'Expo', 'React', 'Electron', 'Zustand', 'React Query', 'AWS S3', 'Sentry', 'Turborepo'],
    demo: 'https://itapofood.com.br',
    isPrivate: true,
    isFeatured: true,
    language: 'TypeScript',
    languageColor: '#3178c6',
  },
  {
    id: 'meucampo',
    name: 'Meu Campo',
    description: {
      pt: 'Sistema de reserva de campos esportivos. App React Native com GPS automático e filtros; web admin com infra GitOps — Docker e ArgoCD para deploy contínuo.',
      en: 'Sports field booking system. React Native app with automatic GPS and filters; web admin with GitOps infra — Docker and ArgoCD for continuous deployment.',
    },
    stack: ['TypeScript', 'React Native', 'Expo', 'Firebase', 'Docker', 'ArgoCD'],
    isPrivate: true,
    isFeatured: false,
    language: 'TypeScript',
    languageColor: '#3178c6',
  },
  {
    id: 'collectissuessonar',
    name: 'CollectIssuesSonar',
    description: {
      pt: 'CLI profissional para exportar issues do SonarQube em CSV. Filtra por severidade, pagina 500+ issues. Desenvolvida e usada em produção em projeto Nestlé.',
      en: 'Professional CLI to export SonarQube issues to CSV. Filters by severity, paginates 500+ issues. Built and used in production at Nestlé project.',
    },
    stack: ['TypeScript', 'Node.js', 'Axios', 'dotenv'],
    github: 'https://github.com/ighortorquato/CollectIssuesSonar',
    isPrivate: false,
    isFeatured: false,
    language: 'TypeScript',
    languageColor: '#3178c6',
  },
  {
    id: 'goprogram',
    name: 'GoProgram',
    description: {
      pt: 'API RESTful em Go para gestão de vagas. CRUD completo com SQLite, framework Gin e documentação Swagger gerada via Swaggo.',
      en: 'RESTful API in Go for job-vacancy management. Full CRUD with SQLite, the Gin framework and Swagger docs generated via Swaggo.',
    },
    stack: ['Go', 'Gin', 'GORM', 'SQLite', 'Swagger'],
    github: 'https://github.com/ighortorquato/GoProgram',
    isPrivate: false,
    isFeatured: false,
    language: 'Go',
    languageColor: '#00ADD8',
  },
  {
    id: 'controleacervo',
    name: 'controle_acervo',
    description: {
      pt: 'Sistema web de controle de acervo bibliográfico em Flask. Interface Jinja2 com CRUD completo, busca por título e persistência em SQLite.',
      en: 'Web system for managing a library collection in Flask. Jinja2 interface with full CRUD, title search and SQLite persistence.',
    },
    stack: ['Python', 'Flask', 'SQLite', 'Jinja2'],
    github: 'https://github.com/ighortorquato/controle_acervo',
    isPrivate: false,
    isFeatured: false,
    language: 'Python',
    languageColor: '#3572A5',
  },
  {
    id: 'controleimpressoras',
    name: 'ControleImpressoras',
    description: {
      pt: 'Sistema em Python para controle e monitoramento de impressoras em ambiente corporativo.',
      en: 'Python system for controlling and monitoring printers in a corporate environment.',
    },
    stack: ['Python'],
    isPrivate: true,
    isFeatured: false,
    language: 'Python',
    languageColor: '#3572A5',
  },
  {
    id: 'learning',
    name: 'Calculadora & Mini-Menu',
    description: {
      pt: 'Projetos de estudo: calculadora web responsiva e componente de menu dropdown animado — HTML, CSS e JavaScript vanilla.',
      en: 'Study projects: a responsive web calculator and an animated dropdown menu component — vanilla HTML, CSS and JavaScript.',
    },
    stack: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/ighortorquato',
    isPrivate: false,
    isFeatured: false,
    language: 'JavaScript',
    languageColor: '#f1e05a',
  },
];

export const experience: ExperienceItem[] = [
  {
    company: '4Zoom Business Solution',
    role: { pt: 'Desenvolvedor Full Stack', en: 'Full Stack Developer' },
    period: { pt: 'Mar 2025 — presente', en: 'Mar 2025 — present' },
    location: { pt: 'São Paulo, Brasil · Remoto', en: 'São Paulo, Brazil · Remote' },
    description: {
      pt: 'Desenvolvimento full stack em projeto para a Nestlé. Construção e evolução de plataformas web e mobile escaláveis com React, React Native, TypeScript, SQL Server e Azure. Atuação da arquitetura à entrega em produção — prototipação no Figma, integração de APIs, testes e uso intenso do ecossistema Azure e GitHub.',
      en: 'Full stack development on a project for Nestlé. Building and evolving scalable web and mobile platforms with React, React Native, TypeScript, SQL Server and Azure. Involved from architecture to production delivery — prototyping in Figma, API integration, testing and heavy use of the Azure ecosystem and GitHub.',
    },
    stack: ['React', 'React Native', 'TypeScript', 'SQL Server', 'Azure', 'Docker', 'Swagger', 'Tailwind', 'Figma'],
  },
  {
    company: 'Rede de Farmácias Estrela',
    role: { pt: 'Analista de Infraestrutura de TI', en: 'IT Infrastructure Analyst' },
    period: { pt: '2023 — 2025', en: '2023 — 2025' },
    location: { pt: 'Cascavel, Paraná · Presencial', en: 'Cascavel, Paraná · On-site' },
    description: {
      pt: 'Suporte a sistemas corporativos e infraestrutura. Apoio técnico em integrações e sustentação de aplicações internas. Atuação na análise e resolução de problemas técnicos complexos.',
      en: 'Support for corporate systems and infrastructure. Technical assistance with integrations and maintenance of internal applications. Analysis and resolution of complex technical issues.',
    },
    stack: ['Infraestrutura', 'Suporte TI', 'Windows Server', 'Redes'],
  },
  {
    company: 'Tribunal de Justiça do Estado do Paraná · Estágio',
    role: { pt: 'Estagiário de TI', en: 'IT Intern' },
    period: { pt: 'Jul 2021 — Set 2022', en: 'Jul 2021 — Sep 2022' },
    location: { pt: 'Foz do Iguaçu, Paraná · Presencial', en: 'Foz do Iguaçu, Paraná · On-site' },
    description: {
      pt: 'Suporte técnico a computadores, impressoras, scanners e telefonia, como também manutenção da intranet do tribunal. Suporte ao usuário.',
      en: 'Technical support for computers, printers, scanners and telephony, as well as maintenance of the court intranet. End-user support.',
    },
    stack: ['Suporte TI', 'Redes', 'Windows', 'Intranet'],
  },
];

export const skillGroups: SkillGroup[] = [
  { key: 'languages', skills: ['TypeScript', 'JavaScript', 'Go', 'Python', 'SQL', 'HTML', 'CSS'] },
  { key: 'frontend', skills: ['React', 'Next.js', 'React Native', 'Expo', 'Electron', 'Angular', 'Vite', 'Tailwind CSS', 'Zustand', 'React Query', 'XState', 'Bootstrap'] },
  { key: 'backend', skills: ['Node.js', 'Express.js', 'Gin', 'Flask', 'Prisma ORM', 'Sequelize', 'GORM', 'Zod', 'JWT', 'Socket.io'] },
  { key: 'databases', skills: ['PostgreSQL', 'SQL Server', 'MongoDB', 'Redis', 'SQLite', 'Firebase', 'AWS S3'] },
  { key: 'devops', skills: ['Azure', 'AWS', 'Docker', 'ArgoCD', 'Railway', 'Vercel', 'Sentry', 'GitHub Actions', 'Azure Pipelines'] },
  { key: 'tools', skills: ['Git', 'GitHub', 'Jest', 'SonarQube', 'Swagger', 'Figma', 'Postman', 'Confluence', 'ServiceNow', 'Grafana', 'Turborepo', 'pnpm'] },
  { key: 'idioms', skills: ['Português (nativo)', 'Inglês (avançado)', 'Espanhol (intermediário)'] },
];

export const education: EducationItem[] = [
  {
    institution: 'UNIOESTE',
    tag: { pt: 'Bacharelado', en: "Bachelor's" },
    degree: { pt: 'Engenharia Mecânica', en: 'Mechanical Engineering' },
    period: { pt: '2018 — 2022', en: '2018 — 2022' },
  },
  {
    institution: 'UNINTER',
    tag: { pt: 'Tecnólogo', en: 'Associate Degree' },
    degree: { pt: 'Análise e Desenvolvimento de Sistemas', en: 'Systems Analysis & Development' },
    period: { pt: '2021 — 2024', en: '2021 — 2024' },
  },
  {
    institution: 'Udemy',
    tag: { pt: 'Cursos', en: 'Courses' },
    degree: { pt: 'Go, Web Dev, JavaScript e mais', en: 'Go, Web Dev, JavaScript & more' },
    period: { pt: '', en: '' },
  },
];

// ---- AI-assisted engineering ----
export const aiSteps: AIStep[] = [
  {
    n: '01',
    title: { pt: 'Regras de projeto', en: 'Project rules' },
    desc: {
      pt: 'Arquivos de regra (.cursor/rules, .mdc) descrevem convenções do monorepo, stack e padrões de commit — o agente segue o mesmo guideline em todos os apps.',
      en: 'Rule files (.cursor/rules, .mdc) describe monorepo conventions, stack and commit standards — the agent follows the same guideline across every app.',
    },
  },
  {
    n: '02',
    title: { pt: 'Contexto & indexação', en: 'Context & indexing' },
    desc: {
      pt: 'A indexação da base de código dá contexto real ao agente: ele encontra os tipos compartilhados em packages/types e reutiliza hooks e componentes em vez de duplicar.',
      en: 'Codebase indexing gives the agent real context: it finds shared types in packages/types and reuses hooks and components instead of duplicating.',
    },
  },
  {
    n: '03',
    title: { pt: 'Agent mode & MCP', en: 'Agent mode & MCP' },
    desc: {
      pt: 'No modo agente, edições multi-arquivo, geração de testes e migrações chegam como diff. Servidores MCP (Prisma, GitHub) conectam o agente ao schema e ao repositório.',
      en: 'In agent mode, multi-file edits, test generation and migrations arrive as diffs. MCP servers (Prisma, GitHub) connect the agent to the schema and the repo.',
    },
  },
  {
    n: '04',
    title: { pt: 'Revisão humana', en: 'Human review' },
    desc: {
      pt: 'Cada sugestão passa por revisão e testes antes do merge. A IA acelera; a decisão técnica e a responsabilidade continuam minhas.',
      en: 'Every suggestion goes through review and tests before merge. AI accelerates; the technical decision and ownership stay mine.',
    },
  },
];

export const aiTools: AITool[] = [
  {
    name: 'Cursor',
    tag: { pt: 'Agente principal', en: 'Primary agent' },
    desc: {
      pt: 'Editor com agente: edições multi-arquivo, contexto do codebase e regras de projeto para tarefas complexas no monorepo.',
      en: 'Agent-first editor: multi-file edits, codebase context and project rules for complex monorepo tasks.',
    },
  },
  {
    name: 'GitHub Copilot',
    tag: { pt: 'Autocomplete', en: 'Autocomplete' },
    desc: {
      pt: 'Sugestões inline em tempo real — boilerplate, testes e funções utilitárias direto no fluxo de digitação.',
      en: 'Real-time inline suggestions — boilerplate, tests and utility functions right in the typing flow.',
    },
  },
  {
    name: 'Claude',
    tag: { pt: 'Arquitetura & revisão', en: 'Architecture & review' },
    desc: {
      pt: 'Apoio em decisões de arquitetura, refactors maiores, documentação e revisão crítica de trechos sensíveis.',
      en: 'Support for architecture decisions, larger refactors, documentation and critical review of sensitive code.',
    },
  },
];
