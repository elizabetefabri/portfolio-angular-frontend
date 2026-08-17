import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsCTA } from './projects-cta';

describe('ProjectsCTA', () => {
  let component: ProjectsCTA;
  let fixture: ComponentFixture<ProjectsCTA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsCTA],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsCTA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render GitHub CTA link', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const link = compiled.querySelector('a');
    expect(link).toBeTruthy();
    expect(link?.getAttribute('href')).toBe('https://github.com/elizabetefabri');
    expect(link?.textContent).toContain('Acessar GitHub');
  });
});
