import { ProjectCategory } from '../../types/project.interface';

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  'Frontend',
  'Backend',
  'Cloud',
  'Estudos',
];

export type CategoryFilter = 'Todos' | ProjectCategory;
export const DEFAULT_FILTER: CategoryFilter = 'Todos';
