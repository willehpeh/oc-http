import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'housing', loadComponent: () => import('./housing/components/housing-list/housing-list.component').then(m => m.HousingListComponent) },
  { path: '', redirectTo: 'housing', pathMatch: 'full' }
];
