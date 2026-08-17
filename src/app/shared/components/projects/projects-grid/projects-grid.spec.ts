import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ProjectsGrid } from './projects-grid';
import { portfolioPersonalProjects } from '../../../data/projects/portfolio-personal.data';

describe('ProjectsGrid', () => {
  let component: ProjectsGrid;
  let fixture: ComponentFixture<ProjectsGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsGrid],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsGrid);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('projects', portfolioPersonalProjects);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a card for each project', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('app-project-card');
    expect(cards.length).toBe(portfolioPersonalProjects.length);
  });
});
