import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PfServiceCpfcnpjService } from './services/pf-service-cpfcnpj.service'

@Component({
  selector: 'pf-input-cpfcnpj',
  templateUrl: './pf-input-cpfcnpj.component.html',
  styleUrls: ['./pf-input-cpfcnpj.component.css'],
  providers: [PfServiceCpfcnpjService]
})
export class PfInputCpfcnpjComponent implements OnInit {

  private cpfCnpjService: PfServiceCpfcnpjService;

  @Input() id: string;
  @Input() name: string;
  @Input() value: string;
  @Input() label: string;
  @Input() minlength: string;

  @Input() placeholder: string;
  @Input() disabled: boolean;
  @Input() required: boolean;

  @Output() click = new EventEmitter();
  @Output() blur = new EventEmitter();
  @Output() change = new EventEmitter();
  @Output() paste = new EventEmitter();

  flagCpfCnpjInvalido = false;

  constructor(cpfCnpjService: PfServiceCpfcnpjService) {
    this.cpfCnpjService = cpfCnpjService;
    this.value = '';
  }

  ngOnInit() {
  }

  ngDoCheck() {
    if (!this.cpfCnpjService.validarCPFCNPJ(this.value)) {
      this.flagCpfCnpjInvalido = false;
    }else {
      this.flagCpfCnpjInvalido = true;
    }
  }

}
