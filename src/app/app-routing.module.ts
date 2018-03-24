import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';

import { KeycloakGuardService as AuthGuard } from './keycloak-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'index', component: IndexComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/index' }
];

@NgModule({
  imports: [
    CommonModule,
    [ RouterModule.forRoot(routes) ]
  ],
  declarations: []
})
export class AppRoutingModule { }
