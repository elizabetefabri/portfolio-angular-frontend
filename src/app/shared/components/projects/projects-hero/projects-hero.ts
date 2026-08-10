import { Component, input } from '@angular/core';

@Component({
  selector: 'app-projects-hero',
  standalone: true,
  templateUrl: './projects-hero.html',
  styleUrl: './projects-hero.scss',
})
export class ProjectsHero {
  readonly title = input.required<string>();
  readonly subtitle = input.required<string>();
}
