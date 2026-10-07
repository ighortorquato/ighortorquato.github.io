import type { Lang } from './translations';

export type Localized = string | { pt: string; en: string };
export const loc = (v: Localized, lang: Lang) => (typeof v === 'string' ? v : v[lang]);

export interface Project {
  id: string;
  name: string;
  description: { pt: string; en: string };
  stack: string[];
  github?: string;
  demo?: string;
  caseStudy?: string;
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
  bullets: { pt: string[]; en: string[] };
  stack: Localized[];
}

export interface SkillGroup {
  key: string;
  skills: Localized[];
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
      pt: 'Marketplace de delivery de três lados (clientes, restaurantes, entregadores) em monorepo Turborepo: API Express/Prisma/PostgreSQL/Redis, app React Native (Expo), PWAs em React e apps de impressão ESC/POS (Electron + Android). Split de pagamentos com Pagar.me (Pix + cartão), despacho de até 4 pedidos simultâneos por entregador, rastreamento ao vivo e rotas via OSRM.',
      en: 'Three-sided delivery marketplace (customers, restaurants, drivers) in a Turborepo monorepo: Express/Prisma/PostgreSQL/Redis API, React Native (Expo) app, React PWAs and ESC/POS printer apps (Electron + Android). Split payments with Pagar.me (Pix + card), driver dispatch for up to 4 concurrent orders, live tracking and OSRM routing.',
    },
    stack: ['TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Redis', 'Socket.io', 'React Native', 'Expo', 'React', 'Electron', 'Zustand', 'React Query', 'Cloudflare R2', 'Pagar.me', 'Sentry', 'Turborepo'],
    // TODO(ighor): case study — set `caseStudy` to the URL; the "Read the case study" link only renders once it exists.
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
];

export const experience: ExperienceItem[] = [
  {
    company: '4Zoom Business Solution (client: Nestlé)',
    role: { pt: 'Desenvolvedor Full-Stack', en: 'Full-Stack Developer' },
    period: { pt: 'Mar 2025 — presente', en: 'Mar 2025 — present' },
    location: { pt: 'Remoto', en: 'Remote' },
    // TODO(ighor): sistemas construídos, escala/usuários, algo liderado ou melhorado — add impact bullets for 4Zoom/Nestlé.
    bullets: {
      pt: [
        'Desenvolvimento full-stack de plataformas web e mobile para a Nestlé (React, React Native, TypeScript, SQL Server, Azure), da prototipação no Figma e integração de APIs até a entrega em produção.',
        'Criei o CollectIssuesSonar, uma CLI interna que automatiza a exportação de issues do SonarQube (filtros por severidade, 500+ issues com paginação), usada em produção no projeto Nestlé.',
      ],
      en: [
        'Full-stack development of web and mobile platforms for Nestlé (React, React Native, TypeScript, SQL Server, Azure), from Figma prototyping and API integration to production delivery.',
        'Built CollectIssuesSonar, an internal CLI that automates SonarQube issue export (severity filters, 500+ issues with pagination), used in production on the Nestlé project.',
      ],
    },
    stack: ['React', 'React Native', 'TypeScript', 'SQL Server', 'Azure', 'Docker', 'Swagger', 'Tailwind', 'Figma'],
  },
  {
    company: 'ItapoFood',
    role: { pt: 'Fundador & Engenheiro Líder', en: 'Founder & Lead Engineer' },
    // TODO(ighor): data de início — empty period renders no date until filled (e.g. 'MMM YYYY — present').
    period: { pt: '', en: '' },
    location: { pt: 'Remoto', en: 'Remote' },
    bullets: {
      pt: [
        'Projetei e construí um marketplace de delivery de três lados como monorepo Turborepo: API Express/Prisma/PostgreSQL/Redis, app React Native (Expo) para clientes e entregadores, PWAs em React para restaurantes e admins, e apps de impressora ESC/POS (Electron + Android).',
        'Implementei split de pagamentos com Pagar.me (Pix + cartão), alocando valores para restaurante, entregador e plataforma por transação, retendo repasses até a entrega e executando pagamentos em lote agendados.',
        'Construí o despacho de entregadores com até 4 pedidos simultâneos em 2 restaurantes, com rastreamento ao vivo (Socket.io) e rotas via OSRM.',
        'Segurança e plataforma: autenticação JWT própria com 2FA TOTP, Cloudflare Turnstile, uploads presigned para o Cloudflare R2, feature flags e Sentry.',
      ],
      en: [
        'Designed and built a three-sided delivery marketplace as a Turborepo monorepo: Express/Prisma/PostgreSQL/Redis API, React Native (Expo) app for customers and drivers, React PWAs for restaurants and admins, and ESC/POS printer apps (Electron + Android).',
        'Implemented split payments with Pagar.me (Pix + card), allocating funds to restaurant, driver and platform per transaction, holding transfers until delivery and running scheduled batch payouts.',
        'Built driver dispatch supporting up to 4 concurrent orders across 2 restaurants, with live tracking (Socket.io) and OSRM-based routing.',
        'Security and platform: custom JWT auth with TOTP 2FA, Cloudflare Turnstile, presigned uploads to Cloudflare R2, feature flags and Sentry.',
      ],
    },
    stack: ['TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Redis', 'Socket.io', 'React Native', 'Expo', 'React', 'Electron', 'Cloudflare R2', 'Pagar.me', 'Turborepo'],
  },
  {
    company: 'Rede de Farmácias Estrela',
    role: { pt: 'Analista de Infraestrutura de TI', en: 'IT Infrastructure Analyst' },
    period: { pt: '2023 — 2025', en: '2023 — 2025' },
    location: { pt: 'Cascavel, Paraná · Presencial', en: 'Cascavel, Paraná · On-site' },
    bullets: {
      pt: ['Suporte a sistemas corporativos, redes e infraestrutura Windows Server; apoio em integrações e suporte a aplicações internas.'],
      en: ['Supported corporate systems, networks and Windows Server infrastructure; assisted with integrations and internal application support.'],
    },
    stack: [
      { pt: 'Infraestrutura', en: 'Infrastructure' },
      { pt: 'Suporte TI', en: 'IT Support' },
      'Windows Server',
      { pt: 'Redes', en: 'Networking' },
    ],
  },
  {
    company: 'Tribunal de Justiça do Estado do Paraná · Estágio',
    role: { pt: 'Estagiário de TI', en: 'IT Intern' },
    period: { pt: 'Jul 2021 — Set 2022', en: 'Jul 2021 — Sep 2022' },
    location: { pt: 'Foz do Iguaçu, Paraná · Presencial', en: 'Foz do Iguaçu, Paraná · On-site' },
    bullets: {
      pt: ['Suporte técnico, redes, telefonia IP e manutenção da intranet.'],
      en: ['Technical support, networking, IP telephony and intranet maintenance.'],
    },
    stack: [
      { pt: 'Suporte TI', en: 'IT Support' },
      { pt: 'Redes', en: 'Networking' },
      'Windows',
      'Intranet',
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  { key: 'languages', skills: ['TypeScript', 'JavaScript', 'Go', 'Python', 'SQL', 'HTML', 'CSS'] },
  { key: 'frontend', skills: ['React', 'Next.js', 'React Native', 'Expo', 'Electron', 'Angular', 'Vite', 'Tailwind CSS', 'Zustand', 'React Query', 'XState', 'Bootstrap'] },
  { key: 'backend', skills: ['Node.js', 'Express.js', 'Gin', 'Flask', 'Prisma ORM', 'Sequelize', 'GORM', 'Zod', 'JWT', 'Socket.io', 'Pagar.me (payments)', 'OSRM'] },
  { key: 'databases', skills: ['PostgreSQL', 'SQL Server', 'MongoDB', 'Redis', 'SQLite', 'Firebase', 'Cloudflare R2 (S3-compatible)'] },
  { key: 'devops', skills: ['Azure', 'AWS', 'Docker', 'ArgoCD', 'Railway', 'Vercel', 'Sentry', 'GitHub Actions', 'Azure Pipelines'] },
  { key: 'tools', skills: ['Git', 'GitHub', 'Jest', 'SonarQube', 'Swagger', 'Figma', 'Postman', 'Confluence', 'ServiceNow', 'Grafana', 'Turborepo', 'pnpm'] },
  {
    key: 'idioms',
    skills: [
      { pt: 'Português (nativo)', en: 'Portuguese (native)' },
      { pt: 'Inglês (avançado)', en: 'English (advanced)' },
      { pt: 'Espanhol (intermediário)', en: 'Spanish (intermediate)' },
    ],
  },
];

export const education: EducationItem[] = [
  {
    institution: 'UNIOESTE',
    tag: { pt: 'Bacharelado', en: 'B.Sc.' },
    degree: { pt: 'Engenharia Mecânica', en: 'Mechanical Engineering' },
    period: { pt: '2018 — 2022', en: '2018 — 2022' },
  },
  {
    institution: 'UNINTER',
    tag: { pt: 'Tecnólogo', en: 'Associate degree' },
    degree: { pt: 'Análise e Desenvolvimento de Sistemas', en: 'Systems Analysis & Development' },
    period: { pt: '2021 — 2024', en: '2021 — 2024' },
  },
  {
    institution: 'Udemy',
    tag: { pt: 'Cursos', en: 'Courses' },
    degree: { pt: 'Go, Desenvolvimento Web, JavaScript', en: 'Go, Web Development, JavaScript' },
    period: { pt: '', en: '' },
  },
];

// ---- AI-native engineering ----
export const aiSteps: AIStep[] = [
  {
    n: '01',
    title: { pt: 'Spec versionada', en: 'Versioned spec' },
    desc: {
      pt: 'Uma spec de arquitetura viva (v1.0 → v1.10 no ItapoFood) é a fonte de verdade para regras de domínio, contratos e convenções.',
      en: 'A living architecture spec (v1.0 → v1.10 on ItapoFood) is the source of truth for domain rules, contracts and conventions.',
    },
  },
  {
    n: '02',
    title: { pt: 'Convenções para agentes', en: 'Agent conventions' },
    desc: {
      pt: 'Um CLAUDE.md com regras do monorepo, tipos compartilhados e padrões de commit mantém os agentes consistentes entre os apps — ajustado para manter o contexto enxuto.',
      en: 'A CLAUDE.md with monorepo rules, shared types and commit standards keeps agents consistent across apps — tuned to keep context lean.',
    },
  },
  {
    n: '03',
    title: { pt: 'Execução delimitada', en: 'Scoped execution' },
    desc: {
      pt: 'Os agentes recebem specs de tarefa autocontidas: mudanças em vários arquivos, migrações e testes chegam como diffs revisáveis.',
      en: 'Agents receive self-contained task specs: multi-file changes, migrations and tests arrive as reviewable diffs.',
    },
  },
  {
    n: '04',
    title: { pt: 'Responsabilidade humana', en: 'Human ownership' },
    desc: {
      pt: 'A IA acelera a execução; arquitetura, trade-offs e responsabilidade continuam comigo.',
      en: 'AI accelerates execution; architecture, trade-offs and accountability stay with me.',
    },
  },
];

export const aiTools: AITool[] = [
  {
    name: 'Claude Code',
    tag: { pt: 'Agente principal', en: 'Primary agent' },
    desc: {
      pt: 'Execução: tarefas bem delimitadas sob as convenções do projeto.',
      en: 'Execution: well-scoped tasks under the project conventions.',
    },
  },
  {
    name: 'Claude',
    tag: { pt: 'Arquitetura & spec', en: 'Architecture & spec' },
    desc: {
      pt: 'Desenho de arquitetura e da spec.',
      en: 'Architecture and spec design.',
    },
  },
];
