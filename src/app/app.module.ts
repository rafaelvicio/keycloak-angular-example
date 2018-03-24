import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpModule } from "@angular/http";
import { FrontlineModule } from './frontline/frontline.module';
import { KeycloakModule } from './keycloak/keycloak.module';

import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { initializer } from './app-init';

import { KeycloakGuardService } from './keycloak-guard.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FrontlineModule,
    KeycloakModule,
    KeycloakAngularModule,
    RouterModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    KeycloakGuardService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
