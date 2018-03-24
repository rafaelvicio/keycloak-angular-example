import { PfServiceCnpjService } from './services/pf-service-cnpj.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pf-input-cnpj',
  templateUrl: './pf-input-cnpj.component.html',
  styleUrls: ['./pf-input-cnpj.component.css'],
  providers: [PfServiceCnpjService]
})
export class PfInputCnpjComponent implements OnInit {

  @Input() id: string;
  @Input() name: string;
  @Input() value: string;
  @Input() label: string;
  @Input() minlength: string;

  @Input() placeholder: string;
  @Input() disabled: boolean;
  @Input() required: boolean;

  private cnpjService: PfServiceCnpjService;

  flagCnpjInvalido = false;

  constructor(cnpjService: PfServiceCnpjService) {
    this.cnpjService = cnpjService;
    this.value = '';
  }

  ngOnInit() {
  }

  ngDoCheck() {
    if (!this.cnpjService.validarCNPJ(this.value)) {
      this.flagCnpjInvalido = true;
    }else {
      this.flagCnpjInvalido = false;
    }
  }
}
