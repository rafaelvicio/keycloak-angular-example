import { Injectable } from '@angular/core';

import { PfServiceCpfService } from '../../pf-input-cpf/services/pf-service-cpf.service';
import { PfServiceCnpjService } from '../../pf-input-cnpj/services/pf-service-cnpj.service';

@Injectable()
export class PfServiceCpfcnpjService {

  private cpfService: PfServiceCpfService;
  private cnpjService: PfServiceCnpjService;

  constructor(cpfService: PfServiceCpfService, cnpjService: PfServiceCnpjService) { 
    this.cpfService = cpfService;
    this.cnpjService = cnpjService;
  }

  public validarCPFCNPJ(cpfcnpj: string): boolean {
    if(!this.cpfService.validarCPF(cpfcnpj) && !this.cnpjService.validarCNPJ(cpfcnpj)){
      console.log('true');
      return true;
    } else {
      console.log('false');
      return false;
    }
  }

}
