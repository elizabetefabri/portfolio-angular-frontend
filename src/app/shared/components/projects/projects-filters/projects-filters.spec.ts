import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsFilters } from './projects-filters';
import { CategoryFilter, PROJECT_CATEGORIES } from '../../../data/projects/categories';

describe('ProjectsFilters', () => {
  let component: ProjectsFilters;
  let fixture: ComponentFixture<ProjectsFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsFilters],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsFilters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all filter chips', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const chips = compiled.querySelectorAll('.chip');
    const expected = ['Todos', ...PROJECT_CATEGORIES];
    expect(chips.length).toBe(expected.length);
  });

  it('should emit selected filter', () => {
    const emitted: CategoryFilter[] = [];
    component.valueChange.subscribe((value) => emitted.push(value));
    component.select('Backend');
    expect(emitted).toEqual(['Backend']);
  });
});
