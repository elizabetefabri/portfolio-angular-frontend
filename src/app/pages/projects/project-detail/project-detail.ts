import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProjectStore } from '../../../core/services/projects/project-store.service';
import { TechBadge } from '../../../shared/components/projects/tech-badge/tech-badge';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink, TechBadge],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail implements OnInit {
  private readonly projectStore = inject(ProjectStore);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly slug = signal<string>('');

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

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.slug.set(slug);

    if (!this.project()) {
      this.router.navigate(['/']);
    }
  }
}
