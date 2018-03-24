import { TestBed, inject } from '@angular/core/testing';

import { KeycloakGuardService } from './keycloak-guard.service';

describe('KeycloakGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeycloakGuardService]
    });
  });

  it('should be created', inject([KeycloakGuardService], (service: KeycloakGuardService) => {
    expect(service).toBeTruthy();
  }));
});
