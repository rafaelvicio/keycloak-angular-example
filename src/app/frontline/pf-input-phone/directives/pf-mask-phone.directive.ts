import { Directive, HostListener, Input } from '@angular/core';

import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[appPfMaskPhone]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: PfMaskPhoneDirective,
    multi: true
  }]
})
export class PfMaskPhoneDirective {

  onTouched: any;
  onChange: any;

  @Input('appPfMaskPhone') appPfMaskPhone: string;

  constructor() { }

  @HostListener('keyup', ['$event'])
  onKeyup($event: any) {
    if ($event.target.value.length <= 13)
    this.appPfMaskPhone = '(99)9999-9999';
    else
    this.appPfMaskPhone = '(99)99999-9999';

    //Setando variaveis 
    //Remove pontos
    let value = $event.target.value.replace(/\D/g, '');

    //Add _
    let pad = this.appPfMaskPhone.replace(/\D/g, '').replace(/9/g, '_');

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
    for (let i = 0; i < this.appPfMaskPhone.length; i++) {
      if (isNaN(parseInt(this.appPfMaskPhone.charAt(i)))) {
        value += this.appPfMaskPhone.charAt(i);
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
    if ($event.target.value.length == this.appPfMaskPhone.length) {
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
