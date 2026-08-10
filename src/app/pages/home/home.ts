import { Component } from '@angular/core';
import { About } from '../../features/about/about';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [About],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
