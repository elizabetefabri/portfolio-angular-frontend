import { Injectable } from '@angular/core';
import { PortfolioKey, Project } from '../../../shared/types/project.interface';
import { portfolioPersonalProjects } from '../../../shared/data/projects/portfolio-personal.data';
import { portfolioProfessionalProjects } from '../../../shared/data/projects/portfolio-professional.data';

@Injectable({
  providedIn: 'root',
})
export class ProjectStore {
  private readonly projectsByPortfolio: Record<PortfolioKey, Project[]> = {
    'portfolio-personal': portfolioPersonalProjects,
    'portfolio-professional': portfolioProfessionalProjects,
  };

  getProjectsByPortfolio(portfolio: PortfolioKey): Project[] {
    return this.projectsByPortfolio[portfolio];
  }

  getAllProjects(): Project[] {
    return [...portfolioPersonalProjects, ...portfolioProfessionalProjects];
  }

  findProjectBySlug(slug: string): Project | undefined {
    return this.getAllProjects().find((project) => project.slug === slug);
  }

  getPortfolioOf(slug: string): PortfolioKey {
    return portfolioPersonalProjects.some((project) => project.slug === slug)
      ? 'portfolio-personal'
      : 'portfolio-professional';
  }
}
