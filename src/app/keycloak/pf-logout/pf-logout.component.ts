import { Component, OnInit } from '@angular/core';

import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-pf-logout',
  templateUrl: './pf-logout.component.html',
  styleUrls: ['./pf-logout.component.css']
})
export class PfLogoutComponent implements OnInit {

  constructor(private keycloakService: KeycloakService) { }

  ngOnInit() {
  }

  async doLogout() {
    await this.keycloakService.logout();
  }

}
