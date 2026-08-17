import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PortfolioPersonal } from './portfolio-personal';
import { portfolioPersonalProjects } from '../../../shared/data/projects/portfolio-personal.data';

describe('PortfolioPersonal', () => {
  let component: PortfolioPersonal;
  let fixture: ComponentFixture<PortfolioPersonal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioPersonal],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioPersonal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with "Todos" filter and all projects', () => {
    expect(component.filter()).toBe('Todos');
    expect(component.filteredProjects()).toEqual(portfolioPersonalProjects);
  });

  it('should filter projects by category', () => {
    component.filter.set('Backend');
    const backendProjects = portfolioPersonalProjects.filter((p) => p.category === 'Backend');
    expect(component.filteredProjects()).toEqual(backendProjects);
  });
});
