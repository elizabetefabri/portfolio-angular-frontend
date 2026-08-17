export type ProjectCategory = 'Frontend' | 'Backend' | 'Cloud' | 'Estudos';

export type PortfolioKey = 'portfolio-personal' | 'portfolio-professional';

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface BackendContext {
  context: string;
  database: string;
  architecture: string[];
  endpoints: string[];
  diagram: string;
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
  backendContext?: BackendContext;
}
