import { TestBed, inject } from '@angular/core/testing';

import { PfServiceCnpjService } from './pf-service-cnpj.service';

describe('PfServiceCnpjService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PfServiceCnpjService]
    });
  });

  it('should be created', inject([PfServiceCnpjService], (service: PfServiceCnpjService) => {
    expect(service).toBeTruthy();
  }));
});
