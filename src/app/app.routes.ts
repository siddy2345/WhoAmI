import { Routes } from '@angular/router';
import { ABOUTME_ROUTE_NAME } from './app.models';

export const routes: Routes = [
  { path: '', redirectTo: ABOUTME_ROUTE_NAME, pathMatch: 'full' },
  {
    path: ABOUTME_ROUTE_NAME,
    loadComponent: () =>
      import('./aboutme/aboutme.component').then((c) => c.AboutmeComponent),
  },
  { path: '**', redirectTo: ABOUTME_ROUTE_NAME },
];
