import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsHero } from './projects-hero';

describe('ProjectsHero', () => {
  let component: ProjectsHero;
  let fixture: ComponentFixture<ProjectsHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsHero],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsHero);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('title', 'Portfólio Pessoal');
    fixture.componentRef.setInput('subtitle', 'Projetos de estudo');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title and subtitle', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.title')?.textContent).toContain('Portfólio Pessoal');
    expect(compiled.querySelector('.subtitle')?.textContent).toContain('Projetos de estudo');
  });
});
