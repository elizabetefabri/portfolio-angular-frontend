import { Component, input } from '@angular/core';
import { Project } from '../../../types/project.interface';
import { ProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-projects-grid',
  standalone: true,
  imports: [ProjectCard],
  templateUrl: './projects-grid.html',
  styleUrl: './projects-grid.scss',
})
export class ProjectsGrid {
  readonly projects = input.required<Project[]>();
}
