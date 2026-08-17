import { Project } from '../../types/project.interface';

export const portfolioPersonalProjects: Project[] = [
  {
    slug: 'dose-certa',
    title: 'Dose Certa',
    description:
      'Aplicação web para controle pessoal de medicação, exames e medidas de saúde, com lembretes por período do dia.',
    category: 'Frontend',
    techs: ['Angular 21', 'TypeScript', 'SCSS', 'PrimeNG', 'NgRx', 'Jest'],
    image: {
      src: '/images/projects/logo-dose-certa.svg',
      alt: 'Logo do Dose Certa',
    },
    repoUrl: 'https://github.com/elizabetefabri/dose-certa-frontend',
    demoUrl: 'https://dose-certa-elizabetefabri.vercel.app',
    problem:
      'Dificuldade em acompanhar horários de medicação, resultados de exames e evolução de peso em um só lugar.',
    solution:
      'Interface responsiva com dashboard de doses, cadastro de remédios, registro de exames e gráfico de peso.',
    technicalDecisions: [
      'Design system próprio com tokens SCSS e temas claro/escuro',
      'Componentização reutilizável de cards, tabelas e ações',
      'Integração com API Go por serviço genérico',
      'Rotas standalone e injeção de dependências moderna',
      'Jest para testes unitários com cobertura',
    ],
    gallery: [
      {
        src: '/images/projects/dose-certa-dashboard.svg',
        alt: 'Dashboard com doses do dia',
      },
      {
        src: '/images/projects/dose-certa-medicamentos.svg',
        alt: 'Tela de gerenciamento de medicamentos',
      },
      {
        src: '/images/projects/dose-certa-metricas.svg',
        alt: 'Métricas e gráficos de saúde',
      },
    ],
  },
  {
    slug: 'caderno-inteligente',
    title: 'Caderno Inteligente',
    description:
      'Painel pessoal de estudos, projetos, quiz e culinária, com organização por módulos e autenticação JWT.',
    category: 'Frontend',
    techs: ['Angular 21', 'TypeScript', 'SCSS', 'PrimeNG', 'Lucide', 'NgRx', 'Jest'],
    image: {
      src: '/images/projects/logo-caderno-inteligente.svg',
      alt: 'Logo do Caderno Inteligente',
    },
    repoUrl: 'https://github.com/elizabetefabri/tech-book-frontend',
    demoUrl: 'https://caderno-inteligente-elizabetefabri.vercel.app',
    problem:
      'Centralizar anotações de estudo, receitas, projetos pessoais e quizzes em uma única experiência.',
    solution:
      'SPA Angular com módulos temáticos, autenticação JWT e componentes padronizados com PrimeNG.',
    technicalDecisions: [
      'Standalone components e rotas lazy-loaded',
      'NgRx para estado global quando necessário',
      'Ícones Lucide via componente próprio',
      'PrimeNG com tema Aura e responsividade',
      'Testes unitários com Jest sem zones',
    ],
    gallery: [
      {
        src: '/images/projects/caderno-inteligente-dashboard.svg',
        alt: 'Dashboard do Caderno Inteligente',
      },
      {
        src: '/images/projects/caderno-inteligente-estudos.svg',
        alt: 'Módulo de estudos e trilhas',
      },
      {
        src: '/images/projects/caderno-inteligente-culinaria.svg',
        alt: 'Módulo de receitas e culinária',
      },
    ],
  },
  {
    slug: 'agenda-gourmet',
    title: 'Agenda Gourmet',
    description:
      'Agenda semanal de receitas e planejamento de refeições, com lista de compras, categorias e favoritos.',
    category: 'Frontend',
    techs: ['Angular 21', 'TypeScript', 'SCSS', 'PrimeNG', 'Jest'],
    image: {
      src: '/images/projects/logo-agenda-gourmet.svg',
      alt: 'Logo do Agenda Gourmet',
    },
    repoUrl: 'https://github.com/elizabetefabri/agenda-gourmet',
    demoUrl: 'https://agenda-gourmet-elizabetefabri.vercel.app',
    problem:
      'Dificuldade de organizar o cardápio da semana, repetir receitas favoritas e montar a lista de compras de forma prática.',
    solution:
      'Interface limpa para montar a agenda semanal, favoritar receitas e exportar a lista de compras.',
    technicalDecisions: [
      'Componentes standalone para carregamento sob demanda',
      'Cards de receita com imagem, tempo e categoria',
      'LocalStorage como cache inicial de favoritos',
      'Responsividade mobile-first para uso na cozinha',
      'Jest para garantir cobertura dos utilitários',
    ],
    gallery: [
      {
        src: '/images/projects/agenda-gourmet-home.svg',
        alt: 'Home da Agenda Gourmet',
      },
      {
        src: '/images/projects/agenda-gourmet-receitas.svg',
        alt: 'Catálogo de receitas',
      },
      {
        src: '/images/projects/agenda-gourmet-menu.svg',
        alt: 'Menu da semana',
      },
    ],
  },
  {
    slug: 'rollout-service',
    title: 'Rollout Service',
    description:
      'Projeto em MVP para estudo e documentação de score gradual, agendamentos, releases, rollback e observabilidade.',
    category: 'Frontend',
    techs: ['Angular 21', 'TypeScript', 'SCSS', 'PrimeNG', 'Jest'],
    image: {
      src: '/images/projects/logo-rollout-service.svg',
      alt: 'Logo do Rollout Service',
    },
    repoUrl: 'https://github.com/elizabetefabri/rollout-service',
    demoUrl: 'https://rollout-service-elizabetefabri.vercel.app',
    problem:
      'Organizar o rollout de releases com controle de score, agendamentos e rollback de forma previsível.',
    solution:
      'Frontend para gestão de releases, planejamento de rollouts e acompanhamento de status.',
    technicalDecisions: [
      'Angular como base do frontend (stack em definição)',
      'Estrutura de pastas inspirada nos projetos padrão',
      'Componentes reutilizáveis e design system compartilhado',
      'Suporte a temas claro e escuro desde o início',
      'Testes com Jest conforme padrão dos projetos pessoais',
    ],
    gallery: [
      {
        src: '/images/projects/rollout-service-dashboard.svg',
        alt: 'Dashboard do Rollout Service',
      },
      {
        src: '/images/projects/rollout-service-agendamentos.svg',
        alt: 'Tela de agendamentos de release',
      },
    ],
  },
  {
    slug: 'dose-certa-backend',
    title: 'Dose Certa — Backend',
    description:
      'API REST para gestão de medicações, doses, exames e registros de peso, com arquitetura limpa em Go.',
    category: 'Backend',
    techs: ['Go 1.22', 'MongoDB', 'Docker', 'Clean Architecture'],
    image: {
      src: '/images/projects/logo-dose-certa.svg',
      alt: 'Logo do backend do Dose Certa',
    },
    repoUrl: 'https://github.com/elizabetefabri/dose-certa-backend',
    problem: 'Fornecer dados seguros e normalizados para o frontend de controle de saúde.',
    solution:
      'API em Go com net/http, Clean Architecture, MongoDB e Docker Compose para desenvolvimento.',
    technicalDecisions: [
      'Go net/http com pattern matching nativo, sem framework externo',
      'MongoDB como banco de documentos para flexibilidade dos dados',
      'Separação em entity, repository, usecase e handler',
      'Envelope de resposta padronizado para todos os endpoints',
      'Testes unitários com cobertura e Makefile automatizado',
    ],
    gallery: [
      {
        src: '/images/projects/dose-certa-backend-arquitetura.svg',
        alt: 'Diagrama da arquitetura do backend',
      },
      {
        src: '/images/projects/dose-certa-backend-swagger.svg',
        alt: 'Documentação dos endpoints',
      },
    ],
    backendContext: {
      context:
        'API REST que centraliza o controle de saúde pessoal: cadastro de usuários, medicamentos, doses, exames e registros de peso. Foi desenhada para ser stateless, leve e fácil de containerizar.',
      database:
        'MongoDB em container Docker. Cada domínio (users, medications, exams, weights) vive em sua própria collection, aproveitando a flexibilidade de documentos JSON para evolução rápida do schema.',
      architecture: [
        'HTTP handler: recebe a requisição e chama o use case',
        'Use case: contém as regras de negócio e orquestra os repositories',
        'Repository: abstrai a comunicação com MongoDB',
        'Entity: representa os modelos de domínio puros',
      ],
      endpoints: [
        'GET /health — verificação de saúde do serviço',
        'POST /api/v1/users — criação de usuário',
        'GET /api/v1/medications — listar medicamentos',
        'POST /api/v1/doses — registrar dose tomada',
        'GET /api/v1/exams — histórico de exames',
      ],
      diagram: `Cliente (Angular)
       │
       ▼
  HTTP Handler
       │
       ▼
   Use Case
       │
       ▼
  Repository
       │
       ▼
   MongoDB`,
    },
  },
  {
    slug: 'caderno-inteligente-backend',
    title: 'Caderno Inteligente — Backend',
    description:
      'API REST para o painel pessoal de estudos, projetos, culinária e quiz, usando Go e MongoDB.',
    category: 'Backend',
    techs: ['Go 1.22', 'MongoDB', 'Docker', 'Clean Architecture'],
    image: {
      src: '/images/projects/logo-caderno-inteligente.svg',
      alt: 'Logo do backend do Caderno Inteligente',
    },
    repoUrl: 'https://github.com/elizabetefabri/tech-book-backend',
    problem:
      'Persistir e servir conteúdos de estudo, receitas, projetos e quizzes com autenticação.',
    solution: 'API em Go com Clean Architecture, autenticação JWT, MongoDB e Docker Compose.',
    technicalDecisions: [
      'Go net/http e driver oficial do MongoDB',
      'Arquitetura em camadas com use cases e repositories',
      'JWT para autenticação e middleware de CORS',
      'Docker Compose com MongoDB e Mongo Express',
      'Testes unitários e integração conforme plano de qualidade',
    ],
    gallery: [
      {
        src: '/images/projects/caderno-inteligente-backend-arquitetura.svg',
        alt: 'Diagrama da arquitetura do backend',
      },
      {
        src: '/images/projects/caderno-inteligente-backend-autenticacao.svg',
        alt: 'Fluxo de autenticação JWT',
      },
    ],
    backendContext: {
      context:
        'Backend multi-domínio que serve os módulos do Caderno Inteligente: conteúdos de estudo, receitas, projetos pessoais e quizzes. Implementa autenticação JWT para proteger recursos privados.',
      database:
        'MongoDB em Docker. Cada módulo possui collection própria e índices para otimizar consultas por usuário e categoria.',
      architecture: [
        'Router com middlewares (CORS, auth, logging)',
        'Handler traduz HTTP para DTOs de entrada',
        'Use case aplica regras de negócio e permissões',
        'Repository persiste em MongoDB via driver oficial',
      ],
      endpoints: [
        'POST /api/v1/auth/login — autenticação e geração de JWT',
        'GET /api/v1/studies — conteúdos de estudo',
        'POST /api/v1/recipes — cadastrar receita',
        'GET /api/v1/projects — projetos pessoais',
        'POST /api/v1/quizzes — responder quiz',
      ],
      diagram: `Cliente (Angular)
       │
       ▼
   Middleware
       │
       ▼
  HTTP Handler
       │
       ▼
   Use Case
       │
       ▼
  Repository
       │
       ▼
   MongoDB`,
    },
  },
  {
    slug: 'rollout-service-backend',
    title: 'Rollout Service — Backend',
    description:
      'Backend em planejamento para suportar agendamentos, releases, rollback, score e observabilidade.',
    category: 'Backend',
    techs: ['Go 1.22', 'MongoDB', 'Docker', 'Clean Architecture'],
    image: {
      src: '/images/projects/logo-rollout-service.svg',
      alt: 'Logo do backend do Rollout Service',
    },
    repoUrl: 'https://github.com/elizabetefabri/rollout-service-backend',
    problem: 'Gerenciar o ciclo de vida de releases com dados consistentes e rastreáveis.',
    solution:
      'API REST em Go com arquitetura limpa, persistência em MongoDB e orquestração via Docker.',
    technicalDecisions: [
      'Template de backend Go + MongoDB + Docker já validado nos outros projetos',
      'Entidades voltadas a release, agendamento, score e rollback',
      'Endpoints com envelope de resposta padronizado',
      'Makefile e docker-compose para subida local',
      'Testes unitários desde o início do MVP',
    ],
    gallery: [
      {
        src: '/images/projects/rollout-service-backend-arquitetura.svg',
        alt: 'Diagrama da arquitetura do backend',
      },
    ],
    backendContext: {
      context:
        'API em elaboração para controlar releases, agendamentos, score gradual, rollback e sinais de observabilidade. Reutiliza o template Go + MongoDB com foco em previsibilidade.',
      database:
        'MongoDB em Docker. Collections previstas: releases, schedules, scores, rollbacks e logs.',
      architecture: [
        'HTTP handler expõe endpoints versionados em /api/v1',
        'Use case orquestra regras de rollout e rollback',
        'Repository abstrai a persistência em MongoDB',
        'Logger/observabilidade futuros serão plugados nos handlers',
      ],
      endpoints: [
        'GET /health — saúde do serviço',
        'POST /api/v1/releases — criar release',
        'GET /api/v1/schedules — listar agendamentos',
        'PATCH /api/v1/scores/:id — atualizar score',
        'POST /api/v1/rollbacks — executar rollback',
      ],
      diagram: `Cliente / CI
       │
       ▼
  HTTP Handler
       │
       ▼
   Use Case
       │
       ▼
  Repository
       │
       ▼
   MongoDB
       │
       ▼
  Logs futuros`,
    },
  },
];
