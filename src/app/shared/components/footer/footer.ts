import { Component } from '@angular/core';
import { Divider } from '../divider/divider';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [Divider],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly footerCopyright = 'Copyright © 2025';
  readonly footerTextoLink = 'Elizabete de Sousa Fabri';
  readonly footerFrase = '"Nada substitui a persistência, nem mesmo o talento."';
}
