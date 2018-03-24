import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PfButtonComponent } from './pf-button/pf-button.component';
import { PfDropdownComponent } from './pf-dropdown/pf-dropdown.component';
import { PfFooterComponent } from './pf-footer/pf-footer.component';
import { PfInputCpfComponent } from './pf-input-cpf/pf-input-cpf.component';
import { PfInputEmailComponent } from './pf-input-email/pf-input-email.component';
import { PfInputTextComponent } from './pf-input-text/pf-input-text.component';
import { PfTextAreaComponent } from './pf-text-area/pf-text-area.component';
import { PfLabelComponent } from './pf-label/pf-label.component';
import { PfAlertComponent } from './pf-alert/pf-alert.component';
import { PfBadgeComponent } from './pf-badge/pf-badge.component';
import { PfStaticControlComponent } from './pf-static-control/pf-static-control.component';
import { PfInputNumberComponent } from './pf-input-number/pf-input-number.component';
import { PfMaskCpfDirective } from './pf-input-cpf/directives/pf-mask-cpf.directive';
import { PfInputCnpjComponent } from './pf-input-cnpj/pf-input-cnpj.component';
import { PfMaskCnpjDirective } from './pf-input-cnpj/directives/pf-mask-cnpj.directive';
import { PfInputCpfcnpjComponent } from './pf-input-cpfcnpj/pf-input-cpfcnpj.component';

import { PfServiceCpfService } from './pf-input-cpf/services/pf-service-cpf.service';
import { PfServiceCnpjService } from './pf-input-cnpj/services/pf-service-cnpj.service';
import { PfMaskCpfcnpjDirective } from './pf-input-cpfcnpj/directives/pf-mask-cpfcnpj.directive';
import { PfInputCepComponent } from './pf-input-cep/pf-input-cep.component';
import { PfMaskCepDirective } from './pf-input-cep/directives/pf-mask-cep.directive';
import { PfInputZipcodeComponent } from './pf-input-zipcode/pf-input-zipcode.component';
import { PfMaskZipcodeDirective } from './pf-input-zipcode/directives/pf-mask-zipcode.directive';
import { PfPageSectionComponent } from './pf-page-section/pf-page-section.component';
import { PfInputMaskComponent } from './pf-input-mask/pf-input-mask.component';
import { PfMaskInputMaskDirective } from './pf-input-mask/directives/pf-mask-input-mask.directive';
import { PfInputPasswordComponent } from './pf-input-password/pf-input-password.component';
import { PfInputDateComponent } from './pf-input-date/pf-input-date.component';

import { MyDatePickerModule } from 'mydatepicker';
import { PfInputPhoneComponent } from './pf-input-phone/pf-input-phone.component';
import { PfMaskPhoneDirective } from './pf-input-phone/directives/pf-mask-phone.directive';
import { PfSelectComponent } from './pf-select/pf-select.component';
import { PfRadioComponent } from './pf-radio/pf-radio.component';
import { PfCheckboxComponent } from './pf-checkbox/pf-checkbox.component';
import { PfModalComponent } from './pf-modal/pf-modal.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MyDatePickerModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'pt',

  },
    PfServiceCpfService,
    PfServiceCnpjService
  ],
  declarations: [
    PfButtonComponent,
    PfDropdownComponent,
    PfFooterComponent,
    PfInputEmailComponent,
    PfInputTextComponent,
    PfTextAreaComponent,
    PfLabelComponent,
    PfAlertComponent,
    PfBadgeComponent,
    PfStaticControlComponent,
    PfInputNumberComponent,
    PfInputCpfComponent,
    PfMaskCpfDirective,
    PfInputCnpjComponent,
    PfMaskCnpjDirective,
    PfInputCpfcnpjComponent,
    PfMaskCpfcnpjDirective,
    PfInputCepComponent,
    PfMaskCepDirective,
    PfInputZipcodeComponent,
    PfMaskZipcodeDirective,
    PfPageSectionComponent,
    PfInputMaskComponent,
    PfMaskInputMaskDirective,
    PfInputPasswordComponent,
    PfInputDateComponent,
    PfInputPhoneComponent,
    PfMaskPhoneDirective,
    PfSelectComponent,
    PfRadioComponent,
    PfCheckboxComponent,
    PfModalComponent
  ],
  exports: [
    PfButtonComponent,
    PfDropdownComponent,
    PfFooterComponent,
    PfInputEmailComponent,
    PfInputTextComponent,
    PfTextAreaComponent,
    PfLabelComponent,
    PfAlertComponent,
    PfBadgeComponent,
    PfStaticControlComponent,
    PfInputNumberComponent,
    PfInputCpfComponent,
    PfMaskCpfDirective,
    PfInputCnpjComponent,
    PfMaskCnpjDirective,
    PfInputCpfcnpjComponent,
    PfMaskCpfcnpjDirective,
    PfInputCepComponent,
    PfMaskCepDirective,
    PfInputZipcodeComponent,
    PfMaskZipcodeDirective,
    PfPageSectionComponent,
    PfInputMaskComponent,
    PfMaskInputMaskDirective,
    PfInputPasswordComponent,
    PfInputDateComponent,
    PfInputPhoneComponent,
    PfMaskPhoneDirective,
    PfSelectComponent,
    PfRadioComponent,
    PfCheckboxComponent,
    PfModalComponent  
  ]
})
export class FrontlineModule { }
