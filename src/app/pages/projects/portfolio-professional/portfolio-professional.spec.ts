import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PortfolioProfessional } from './portfolio-professional';
import { portfolioProfessionalProjects } from '../../../shared/data/projects/portfolio-professional.data';

describe('PortfolioProfessional', () => {
  let component: PortfolioProfessional;
  let fixture: ComponentFixture<PortfolioProfessional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioProfessional],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioProfessional);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with "Todos" filter and all projects', () => {
    expect(component.filter()).toBe('Todos');
    expect(component.filteredProjects()).toEqual(portfolioProfessionalProjects);
  });
});
