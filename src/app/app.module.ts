import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { HttpModule } from "@angular/http";

import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { initializer } from './utils/app-init';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    KeycloakAngularModule,
    HttpModule
  ],
  providers: [
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
