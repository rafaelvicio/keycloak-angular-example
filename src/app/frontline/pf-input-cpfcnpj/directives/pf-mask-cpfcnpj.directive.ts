import { Directive, HostListener, Input } from '@angular/core';

import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[pfMaskCpfCnpj]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: PfMaskCpfcnpjDirective,
    multi: true
  }]
})
export class PfMaskCpfcnpjDirective {

  onTouched: any;
  onChange: any;

  @Input('pfMaskCpfCnpj') pfMaskCpfCnpj: string;

  constructor() { }

  @HostListener('keyup', ['$event'])
  onKeyup($event: any) {
    if ($event.target.value.length <= 14)
      this.pfMaskCpfCnpj = '999.999.999-99';
    else
     this.pfMaskCpfCnpj = '99.999.999/9999-99';

    //Setando variaveis 
    //Remove pontos
    let value = $event.target.value.replace(/\D/g, '');

    //Add _
    let pad = this.pfMaskCpfCnpj.replace(/\D/g, '').replace(/9/g, '_');

    //Add numero no lugar do _. 
    let valueMask = value + pad.substring(0, pad.length - value.length);

    // retorna caso seja digitado o backspace
    if ($event.keyCode === 8) {
      this.onChange(value);
      return;
    }

    if (value.length <= pad.length) {
      this.onChange(value);
    }

    //Logica para transformar em cpf.
    let valueMaskPos = 0;
    value = '';
    for (let i = 0; i < this.pfMaskCpfCnpj.length; i++) {
      if (isNaN(parseInt(this.pfMaskCpfCnpj.charAt(i)))) {
        value += this.pfMaskCpfCnpj.charAt(i);
      } else {
        value += valueMask[valueMaskPos++];
      }
    }

    if (value.indexOf('_') > -1) {
      value = value.substr(0, value.indexOf('_'));
    }

    $event.target.value = value;
  }

  @HostListener('blur', ['$event'])
  onBlur($event: any) {
    if ($event.target.value.length == this.pfMaskCpfCnpj.length) {
      return;
    }

    this.onChange('');
    $event.target.value = '';
  }

  registerOnChange(objectFn: any): void {
    this.onChange = objectFn;
  }

  registerOnTouched(objectFn: any): void {
    this.onTouched = objectFn;
  }

  writeValue(value: any): void {
  }

}
