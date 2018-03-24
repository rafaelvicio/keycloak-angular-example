import { TestBed, inject } from '@angular/core/testing';

import { PfServiceCpfcnpjService } from './pf-service-cpfcnpj.service';

describe('PfServiceCpfcnpjService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PfServiceCpfcnpjService]
    });
  });

  it('should be created', inject([PfServiceCpfcnpjService], (service: PfServiceCpfcnpjService) => {
    expect(service).toBeTruthy();
  }));
});
