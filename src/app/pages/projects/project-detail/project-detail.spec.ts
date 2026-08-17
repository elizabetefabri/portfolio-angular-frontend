import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ProjectDetail } from './project-detail';
import { portfolioPersonalProjects } from '../../../shared/data/projects/portfolio-personal.data';

const firstProject = portfolioPersonalProjects[0];
const backendProject = portfolioPersonalProjects.find((p) => p.category === 'Backend')!;

describe('ProjectDetail', () => {
  let component: ProjectDetail;
  let fixture: ComponentFixture<ProjectDetail>;

  beforeEach(async () => {
    const navigate = vi.fn();
    await TestBed.configureTestingModule({
      imports: [ProjectDetail],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => firstProject.slug,
              },
            },
          },
        },
        { provide: Router, useValue: { navigate } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the project by slug', () => {
    expect(component.project()).toEqual(firstProject);
    expect(component.portfolioUrl()).toBe('/projects/portfolio-personal');
  });

  it('should navigate through carousel', () => {
    component.nextImage();
    expect(component.currentIndex()).toBe(1);
    component.previousImage();
    expect(component.currentIndex()).toBe(0);
  });

  it('should loop carousel navigation', () => {
    const lastIndex = component.galleryImages().length - 1;
    component.selectImage(0);
    component.previousImage();
    expect(component.currentIndex()).toBe(lastIndex);
    component.nextImage();
    expect(component.currentIndex()).toBe(0);
  });

  it('should select image by index', () => {
    component.selectImage(2);
    expect(component.currentIndex()).toBe(2);
  });

  it('should open and close lightbox', () => {
    component.openLightbox(1);
    expect(component.lightboxOpen()).toBe(true);
    expect(component.lightboxIndex()).toBe(1);
    component.closeLightbox();
    expect(component.lightboxOpen()).toBe(false);
  });

  it('should navigate through lightbox', () => {
    component.openLightbox(0);
    component.nextLightboxImage();
    expect(component.lightboxIndex()).toBe(1);
    component.previousLightboxImage();
    expect(component.lightboxIndex()).toBe(0);
  });

  it('should navigate home for unknown slug', () => {
    const navigate = vi.fn();
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      imports: [ProjectDetail],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 'unknown',
              },
            },
          },
        },
        { provide: Router, useValue: { navigate } },
      ],
    }).compileComponents();

    const unknownFixture = TestBed.createComponent(ProjectDetail);
    unknownFixture.detectChanges();

    expect(navigate).toHaveBeenCalledWith(['/']);
  });

  it('should show backend context for backend project', () => {
    const navigate = vi.fn();
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      imports: [ProjectDetail],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => backendProject.slug,
              },
            },
          },
        },
        { provide: Router, useValue: { navigate } },
      ],
    }).compileComponents();

    const backendFixture = TestBed.createComponent(ProjectDetail);
    const backendComponent = backendFixture.componentInstance;
    backendFixture.detectChanges();

    expect(backendComponent.project()).toEqual(backendProject);
    expect(backendComponent.hasBackend()).toBe(true);
  });
});
