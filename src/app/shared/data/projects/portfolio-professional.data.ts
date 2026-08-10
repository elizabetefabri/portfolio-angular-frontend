import { Project } from '../../types/project.interface';

export const portfolioProfessionalProjects: Project[] = [
  {
    slug: 'iudev-docs',
    title: 'IUDev Docs',
    description:
      'Documentação técnica com estrutura escalável e navegação consistente.',
    category: 'Estudos',
    techs: ['Next.js', 'TypeScript', 'Design System'],
    image: {
      src: '/images/projects/logo-comandaflow.png',
      alt: 'Preview IUDev Docs',
    },
    repoUrl: 'https://github.com/elizabetefabri/iudev-docs',
    problem: 'Centralizar guias e reduzir fricção para onboarding e setup.',
    solution:
      'Páginas com dados tipados e componentes reaproveitáveis para seções e alertas.',
    technicalDecisions: [
      'Separação de conteúdo (data) e renderização (components)',
      'Navegação por rotas do App Router',
      'Padronização de estilos com variáveis globais',
    ],
  },
];
