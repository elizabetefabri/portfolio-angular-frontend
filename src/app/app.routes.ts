import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'projects/portfolio-personal',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'projects/portfolio-personal',
    loadComponent: () =>
      import('./pages/projects/portfolio-personal/portfolio-personal').then(
        (m) => m.PortfolioPersonal,
      ),
  },
  {
    path: 'projects/portfolio-professional',
    loadComponent: () =>
      import('./pages/projects/portfolio-professional/portfolio-professional').then(
        (m) => m.PortfolioProfessional,
      ),
  },
  {
    path: 'projects/:slug',
    loadComponent: () =>
      import('./pages/projects/project-detail/project-detail').then((m) => m.ProjectDetail),
  },
  {
    path: 'qr-message',
    loadComponent: () => import('./pages/qr-message/qr-message').then((m) => m.QrMessage),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then((m) => m.Login),
  },
  { path: '**', redirectTo: '' },
];
