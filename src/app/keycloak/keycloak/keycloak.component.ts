import { Component, OnInit } from '@angular/core';

import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-keycloak',
  templateUrl: './keycloak.component.html',
  styleUrls: ['./keycloak.component.css']
})
export class KeycloakComponent implements OnInit {

  constructor(private keycloakService: KeycloakService) { }

  ngOnInit() {
  }

  async doLogout() {
    await this.keycloakService.logout();
  }

}
