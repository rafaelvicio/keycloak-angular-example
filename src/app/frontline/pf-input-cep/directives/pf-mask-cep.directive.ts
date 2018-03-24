import { Directive, HostListener, Input } from '@angular/core';

import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[pfMaskCep]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: PfMaskCepDirective,
    multi: true
  }]
})
export class PfMaskCepDirective {

  onTouched: any;
  onChange: any;

  @Input('pfMaskCep') pfMaskCep: string;

  constructor() { }

  @HostListener('keyup', ['$event'])
  onKeyup($event: any) {
    if (!this.pfMaskCep) {
      this.pfMaskCep = '99999-999';
    }

    //Setando variaveis 
    //Remove pontos
    let value = $event.target.value.replace(/\D/g, '');

    //Add _
    let pad = this.pfMaskCep.replace(/\D/g, '').replace(/9/g, '_');

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
    for (let i = 0; i < this.pfMaskCep.length; i++) {
      if (isNaN(parseInt(this.pfMaskCep.charAt(i)))) {
        value += this.pfMaskCep.charAt(i);
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
    if ($event.target.value.length == this.pfMaskCep.length) {
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
