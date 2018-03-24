import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { IMyDpOptions } from 'mydatepicker';

@Component({
  selector: 'app-pf-input-date',
  templateUrl: './pf-input-date.component.html',
  styleUrls: ['./pf-input-date.component.css']
})
export class PfInputDateComponent implements OnInit {

  @Output() click = new EventEmitter();
  @Output() blur = new EventEmitter();
  @Output() change = new EventEmitter();
  @Output() paste = new EventEmitter();

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dayLabels: { su: 'Dom', mo: 'Seg', tu: 'Ter', we: 'Qua', th: 'Qui', fr: 'Sex', sa: 'Sab' },
    monthLabels: { 1: 'Jan', 2: 'Fev', 3: 'Mar', 4: 'Abr', 5: 'Mai', 6: 'Jun', 7: 'Jul', 8: 'Ago', 9: 'Set', 10: 'Out', 11: 'Nov', 12: 'Dez' },
    dateFormat: 'dd/mm/yyyy',
    todayBtnTxt: 'Hoje',
    firstDayOfWeek: 'su',
    sunHighlight: true,
  };

  // Initialized to specific date (09.10.2018).
  public model: any = { date: { year: 2018, month: 10, day: 9 } };

  constructor() { }

  ngOnInit() {
  }

}
