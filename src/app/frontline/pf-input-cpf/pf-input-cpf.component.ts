import { PfServiceCpfService } from './services/pf-service-cpf.service';
import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'pf-input-cpf',
  templateUrl: './pf-input-cpf.component.html',
  styleUrls: ['./pf-input-cpf.component.scss'],
  providers: [PfServiceCpfService]
})
export class PfInputCpfComponent implements OnInit {

  private cpfService: PfServiceCpfService;

  @Input() id: string;
  @Input() name: string;
  @Input() value: string;
  @Input() label: string;
  @Input() minlength: string;

  @Input() placeholder: string;
  @Input() disabled: boolean;
  @Input() required: boolean;

  flagCpfInvalido = false;

  constructor(cpfService: PfServiceCpfService) {
    this.cpfService = cpfService;
    this.value = '';
  }

  ngOnInit() {
  }

  ngDoCheck() {
    if (!this.cpfService.validarCPF(this.value)) {
      this.flagCpfInvalido = true;
    }else {
      this.flagCpfInvalido = false;
    }
  }
}
