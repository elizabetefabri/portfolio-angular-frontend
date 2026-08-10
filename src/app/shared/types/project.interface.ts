export type ProjectCategory = 'Frontend' | 'Backend' | 'Cloud' | 'Estudos';

export type PortfolioKey = 'portfolio-personal' | 'portfolio-professional';

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  techs: string[];
  image: ProjectImage;
  repoUrl: string;
  demoUrl?: string;
  problem: string;
  solution: string;
  technicalDecisions: string[];
  gallery?: ProjectImage[];
}
