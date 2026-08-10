import { Component } from '@angular/core';

@Component({
  selector: 'app-divider',
  standalone: true,
  template: '<section class="divisor" aria-hidden="true"></section>',
  styleUrl: './divider.scss',
})
export class Divider {}
