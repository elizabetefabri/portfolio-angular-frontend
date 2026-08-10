import { Project } from '../../types/project.interface';

export const portfolioPersonalProjects: Project[] = [
  {
    slug: 'caderno-inteligente',
    title: 'Caderno Inteligênte',
    description:
      'Aplicação web com foco em UI, performance e boas práticas de frontend.',
    category: 'Frontend',
    techs: ['Angular v22', 'TypeScript'],
    image: {
      src: '/images/projects/logo-comandaflow.png',
      alt: 'Preview Caderno Inteligênte',
    },
    repoUrl:
      'https://github.com/elizabetefabri/personal-platform/tree/main/comandaflow/frontend',
    demoUrl: 'https://comandaflow.elizabetesousafabri.com.br/login/',
    problem:
      'Organizar pedidos e melhorar a experiência do usuário com navegação fluida.',
    solution:
      'Interface responsiva com componentes reutilizáveis e rotas bem definidas.',
    technicalDecisions: [
      'Componentização pensando em reuso entre páginas',
      'CSS Modules com variáveis do globals.css',
      'Imagens otimizadas com next/image',
    ],
    gallery: [
      {
        src: '/images/projects/logo-comandaflow.png',
        alt: 'Tela inicial',
      },
      { src: '/images/projects/comandaflow-login-page.png', alt: 'Login' },
    ],
  },

];
