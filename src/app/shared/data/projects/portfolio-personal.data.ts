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
      src: '/images/projects/logo-dose-certa.png',
      alt: 'Logo do Dose Certa',
    },
    repoUrl: 'https://github.com/elizabetefabri/dose-certa-frontend',
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
        src: '/images/projects/dose-certa-dashboard.png',
        alt: 'Dashboard com doses do dia',
      },
      {
        src: '/images/projects/dose-certa-medicamentos.png',
        alt: 'Tela de gerenciamento de medicamentos',
      },
      {
        src: '/images/projects/dose-certa-metricas.png',
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
      src: '/images/projects/logo-caderno-inteligente.png',
      alt: 'Logo do Caderno Inteligente',
    },
    repoUrl: 'https://github.com/elizabetefabri/tech-book-frontend',
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
        src: '/images/projects/caderno-inteligente-dashboard.png',
        alt: 'Dashboard do Caderno Inteligente',
      },
      {
        src: '/images/projects/caderno-inteligente-estudos.png',
        alt: 'Módulo de estudos e trilhas',
      },
      {
        src: '/images/projects/caderno-inteligente-culinaria.png',
        alt: 'Módulo de receitas e culinária',
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
      src: '/images/projects/logo-rollout-service.png',
      alt: 'Logo do Rollout Service',
    },
    repoUrl: 'https://github.com/elizabetefabri/rollout-service',
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
        src: '/images/projects/rollout-service-dashboard.png',
        alt: 'Dashboard do Rollout Service',
      },
      {
        src: '/images/projects/rollout-service-agendamentos.png',
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
      src: '/images/projects/logo-dose-certa-backend.png',
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
        src: '/images/projects/dose-certa-backend-arquitetura.png',
        alt: 'Diagrama da arquitetura do backend',
      },
      {
        src: '/images/projects/dose-certa-backend-swagger.png',
        alt: 'Documentação dos endpoints',
      },
    ],
  },
  {
    slug: 'caderno-inteligente-backend',
    title: 'Caderno Inteligente — Backend',
    description:
      'API REST para o painel pessoal de estudos, projetos, culinária e quiz, usando Go e MongoDB.',
    category: 'Backend',
    techs: ['Go 1.22', 'MongoDB', 'Docker', 'Clean Architecture'],
    image: {
      src: '/images/projects/logo-caderno-inteligente-backend.png',
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
        src: '/images/projects/caderno-inteligente-backend-arquitetura.png',
        alt: 'Diagrama da arquitetura do backend',
      },
      {
        src: '/images/projects/caderno-inteligente-backend-autenticacao.png',
        alt: 'Fluxo de autenticação JWT',
      },
    ],
  },
  {
    slug: 'rollout-service-backend',
    title: 'Rollout Service — Backend',
    description:
      'Backend em planejamento para suportar agendamentos, releases, rollback, score e observabilidade.',
    category: 'Backend',
    techs: ['Go 1.22', 'MongoDB', 'Docker', 'Clean Architecture'],
    image: {
      src: '/images/projects/logo-rollout-service-backend.png',
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
        src: '/images/projects/rollout-service-backend-arquitetura.png',
        alt: 'Diagrama da arquitetura do backend',
      },
    ],
  },
];
