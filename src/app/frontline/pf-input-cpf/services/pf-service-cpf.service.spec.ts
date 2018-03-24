import { TestBed, inject } from '@angular/core/testing';

import { PfServiceCpfService } from './pf-service-cpf.service';

describe('PfServiceCpfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PfServiceCpfService]
    });
  });

  it('should be created', inject([PfServiceCpfService], (service: PfServiceCpfService) => {
    expect(service).toBeTruthy();
  }));
});
