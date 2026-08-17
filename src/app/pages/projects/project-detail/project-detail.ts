import { Component, OnInit, computed, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProjectStore } from '../../../core/services/projects/project-store.service';
import { TechBadge } from '../../../shared/components/projects/tech-badge/tech-badge';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink, TechBadge],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
  host: {
    '(document:keydown)': 'onKeydown($event)',
  },
})
export class ProjectDetail implements OnInit {
  private readonly projectStore = inject(ProjectStore);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly slug = signal<string>('');
  readonly currentIndex = signal<number>(0);
  readonly lightboxOpen = signal<boolean>(false);
  readonly lightboxIndex = signal<number>(0);
  readonly activeTab = signal<'images' | 'info'>('images');

  readonly project = computed(() => this.projectStore.findProjectBySlug(this.slug()));

  readonly portfolioUrl = computed(() => {
    if (!this.project()) return '/projects/portfolio-personal';
    return this.projectStore.getPortfolioOf(this.slug()) === 'portfolio-personal'
      ? '/projects/portfolio-personal'
      : '/projects/portfolio-professional';
  });

  readonly galleryImages = computed(() => {
    const project = this.project();
    if (!project) return [];
    return project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];
  });

  readonly hasMultipleImages = computed(() => this.galleryImages().length > 1);
  readonly activeImage = computed(() => {
    const images = this.galleryImages();
    const index = this.currentIndex();
    return images[index] ?? images[0];
  });

  readonly activeLightboxImage = computed(() => {
    const images = this.galleryImages();
    const index = this.lightboxIndex();
    return images[index] ?? images[0];
  });

  readonly hasBackend = computed(
    () => this.project()?.category === 'Backend' && !!this.project()?.backendContext,
  );

  readonly imageCounter = computed(() => {
    const total = this.galleryImages().length;
    if (total === 0) return '';
    return `${this.currentIndex() + 1} / ${total}`;
  });

  constructor() {
    effect(() => {
      const images = this.galleryImages();
      if (this.currentIndex() >= images.length) {
        this.currentIndex.set(0);
      }
    });
  }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.slug.set(slug);

    if (!this.project()) {
      this.router.navigate(['/']);
    }
  }

  nextImage(): void {
    const count = this.galleryImages().length;
    if (count === 0) return;
    this.currentIndex.update((i) => (i + 1) % count);
  }

  previousImage(): void {
    const count = this.galleryImages().length;
    if (count === 0) return;
    this.currentIndex.update((i) => (i - 1 + count) % count);
  }

  selectImage(index: number): void {
    this.currentIndex.set(index);
  }

  openLightbox(index: number): void {
    this.lightboxIndex.set(index);
    this.lightboxOpen.set(true);
  }

  closeLightbox(): void {
    this.lightboxOpen.set(false);
  }

  nextLightboxImage(): void {
    const count = this.galleryImages().length;
    if (count === 0) return;
    this.lightboxIndex.update((i) => (i + 1) % count);
  }

  previousLightboxImage(): void {
    const count = this.galleryImages().length;
    if (count === 0) return;
    this.lightboxIndex.update((i) => (i - 1 + count) % count);
  }

  setTab(tab: 'images' | 'info'): void {
    this.activeTab.set(tab);
  }

  onKeydown(event: KeyboardEvent): void {
    if (this.lightboxOpen()) {
      if (event.key === 'ArrowRight') this.nextLightboxImage();
      if (event.key === 'ArrowLeft') this.previousLightboxImage();
      if (event.key === 'Escape') this.closeLightbox();
      return;
    }

    if (this.hasMultipleImages()) {
      if (event.key === 'ArrowRight') this.nextImage();
      if (event.key === 'ArrowLeft') this.previousImage();
    }
  }
}
