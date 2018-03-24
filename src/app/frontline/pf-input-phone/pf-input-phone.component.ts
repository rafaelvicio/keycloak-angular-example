import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pf-input-phone',
  templateUrl: './pf-input-phone.component.html',
  styleUrls: ['./pf-input-phone.component.css']
})
export class PfInputPhoneComponent implements OnInit {

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
