import { Component, input } from '@angular/core';
import { Skill } from '../../types/skill.interface';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.scss',
})
export class SkillsSection {
  readonly skills = input.required<Skill[]>();
}
