import { TestBed } from '@angular/core/testing';
import { ProjectStore } from './project-store.service';
import { portfolioPersonalProjects } from '../../../shared/data/projects/portfolio-personal.data';
import { portfolioProfessionalProjects } from '../../../shared/data/projects/portfolio-professional.data';

describe('ProjectStore', () => {
  let service: ProjectStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return portfolio-personal projects', () => {
    expect(service.getProjectsByPortfolio('portfolio-personal')).toEqual(portfolioPersonalProjects);
  });

  it('should return portfolio-professional projects', () => {
    expect(service.getProjectsByPortfolio('portfolio-professional')).toEqual(
      portfolioProfessionalProjects,
    );
  });

  it('should return all projects', () => {
    expect(service.getAllProjects()).toEqual([
      ...portfolioPersonalProjects,
      ...portfolioProfessionalProjects,
    ]);
  });

  it('should find a project by slug', () => {
    const project = portfolioPersonalProjects[0];
    expect(service.findProjectBySlug(project.slug)).toEqual(project);
  });

  it('should return undefined for an unknown slug', () => {
    expect(service.findProjectBySlug('unknown')).toBeUndefined();
  });

  it('should return the portfolio of a slug', () => {
    expect(service.getPortfolioOf(portfolioPersonalProjects[0].slug)).toBe('portfolio-personal');
    expect(service.getPortfolioOf(portfolioProfessionalProjects[0].slug)).toBe(
      'portfolio-professional',
    );
    expect(service.getPortfolioOf('unknown')).toBe('portfolio-professional');
  });
});
