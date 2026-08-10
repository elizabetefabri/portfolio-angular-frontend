import { Component, input } from '@angular/core';
import { SocialMediaLink } from '../../types/social-media-link.interface';

@Component({
  selector: 'app-social-media',
  standalone: true,
  templateUrl: './social-media.html',
  styleUrl: './social-media.scss',
})
export class SocialMedia {
  readonly contatoTitle = input.required<string>();
  readonly links = input.required<SocialMediaLink[]>();
}
