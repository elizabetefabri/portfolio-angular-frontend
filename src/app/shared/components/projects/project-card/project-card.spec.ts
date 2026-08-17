import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ProjectCard } from './project-card';
import { portfolioPersonalProjects } from '../../../data/projects/portfolio-personal.data';

describe('ProjectCard', () => {
  let component: ProjectCard;
  let fixture: ComponentFixture<ProjectCard>;
  const project = portfolioPersonalProjects[0];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCard],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('project', project);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render project title and description', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.title')?.textContent).toContain(project.title);
    expect(compiled.querySelector('.description')?.textContent).toContain(project.description);
  });

  it('should link to project detail', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const link = compiled.querySelector('.btnPrimary');
    expect(link?.getAttribute('href')).toBe(`/projects/${project.slug}`);
  });
});
