import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../../types/project.interface';
import { TechBadge } from '../tech-badge/tech-badge';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterLink, TechBadge],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  readonly project = input.required<Project>();
}
