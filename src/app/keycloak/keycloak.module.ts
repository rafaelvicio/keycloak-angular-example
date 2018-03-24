import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KeycloakComponent } from './keycloak/keycloak.component';
import { PfLogoutComponent } from './pf-logout/pf-logout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    KeycloakComponent,
    PfLogoutComponent
  ],
  exports: [
    KeycloakComponent,
    PfLogoutComponent
  ]
})
export class KeycloakModule { }
