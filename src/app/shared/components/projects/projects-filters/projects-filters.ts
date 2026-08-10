import { Component, input, output } from '@angular/core';
import { CategoryFilter, DEFAULT_FILTER, PROJECT_CATEGORIES } from '../../../data/projects/categories';

@Component({
  selector: 'app-projects-filters',
  standalone: true,
  templateUrl: './projects-filters.html',
  styleUrl: './projects-filters.scss',
})
export class ProjectsFilters {
  readonly value = input<CategoryFilter>(DEFAULT_FILTER);
  readonly valueChange = output<CategoryFilter>();

  readonly items: CategoryFilter[] = ['Todos', ...PROJECT_CATEGORIES];

  select(item: CategoryFilter): void {
    this.valueChange.emit(item);
  }
}
