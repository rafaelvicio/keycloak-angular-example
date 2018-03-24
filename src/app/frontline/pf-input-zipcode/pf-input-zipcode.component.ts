import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pf-input-zipcode',
  templateUrl: './pf-input-zipcode.component.html',
  styleUrls: ['./pf-input-zipcode.component.css']
})
export class PfInputZipcodeComponent implements OnInit {

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

  constructor() {
    this.value = '';
  }

  ngOnInit() {
  }

}
