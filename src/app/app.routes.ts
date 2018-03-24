import { Routes, CanActivate } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AppAuthGuard as AuthGuard } from './AppAuthGuard';
export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard] 
  },
  { path: '**', redirectTo: '' }
];