import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

export const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent,
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
