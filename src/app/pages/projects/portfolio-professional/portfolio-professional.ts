import { Component, computed, inject, signal } from '@angular/core';
import { CategoryFilter, DEFAULT_FILTER } from '../../../shared/data/projects/categories';
import { ProjectStore } from '../../../core/services/projects/project-store.service';
import { ProjectsCTA } from '../../../shared/components/projects/projects-cta/projects-cta';
import { ProjectsFilters } from '../../../shared/components/projects/projects-filters/projects-filters';
import { ProjectsGrid } from '../../../shared/components/projects/projects-grid/projects-grid';
import { ProjectsHero } from '../../../shared/components/projects/projects-hero/projects-hero';

@Component({
  selector: 'app-portfolio-professional',
  standalone: true,
  imports: [ProjectsHero, ProjectsFilters, ProjectsGrid, ProjectsCTA],
  templateUrl: './portfolio-professional.html',
  styleUrl: './portfolio-professional.scss',
})
export class PortfolioProfessional {
  private readonly projectStore = inject(ProjectStore);

  readonly filter = signal<CategoryFilter>(DEFAULT_FILTER);

  readonly filteredProjects = computed(() => {
    const projects = this.projectStore.getProjectsByPortfolio('portfolio-professional');
    const activeFilter = this.filter();
    return activeFilter === 'Todos'
      ? projects
      : projects.filter((project) => project.category === activeFilter);
  });
}
