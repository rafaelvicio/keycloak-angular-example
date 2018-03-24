import { Component, OnInit, Input, keyframes, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pf-checkbox',
  templateUrl: './pf-checkbox.component.html',
  styleUrls: ['./pf-checkbox.component.css'],
})
export class PfCheckboxComponent implements OnInit {

  @Input() value: boolean;
  @Input() name: string;

  @Input() disabled: boolean;
  @Input() required: boolean;

  //true-value e false-value
  //Text
  //cp-chage

  @Output() click = new EventEmitter();
  @Output() blur = new EventEmitter();
  @Output() change = new EventEmitter();
  @Output() paste = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

}
