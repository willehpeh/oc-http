import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'housing', loadComponent: () => import('./housing/components/housing-list/housing-list.component').then(m => m.HousingListComponent) },
  { path: 'housing/:id', loadComponent: () => import('./housing/components/housing-detail/housing-detail.component').then(m => m.HousingDetailComponent) },
  { path: '', redirectTo: 'housing', pathMatch: 'full' }
];
