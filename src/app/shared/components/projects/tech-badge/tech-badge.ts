import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tech-badge',
  standalone: true,
  template: '<span class="badge">{{ tech() }}</span>',
  styleUrl: './tech-badge.scss',
})
export class TechBadge {
  readonly tech = input.required<string>();
}
