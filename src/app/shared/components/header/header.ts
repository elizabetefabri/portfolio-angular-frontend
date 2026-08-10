import { Component, computed, inject, input, OnDestroy, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnDestroy {
  private readonly router = inject(Router);

  readonly showLogo = input(true);
  readonly isMenuOpen = signal(false);
  readonly isProjectsOpen = signal(false);
  readonly pathname = signal(this.router.url);

  readonly isProjectsActive = computed(() => this.pathname().startsWith('/projects'));

  private readonly sub = new Subscription();

  constructor() {
    this.sub.add(
      this.router.events
        .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
        .subscribe((event) => this.pathname.set(event.urlAfterRedirects)),
    );
  }

  toggleMenu(): void {
    this.isMenuOpen.update((value) => !value);
  }

  toggleProjects(): void {
    this.isProjectsOpen.update((value) => !value);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  closeAll(): void {
    this.isMenuOpen.set(false);
    this.isProjectsOpen.set(false);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
