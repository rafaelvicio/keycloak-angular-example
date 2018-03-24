import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pf-input-text',
  templateUrl: './pf-input-text.component.html',
  styleUrls: ['./pf-input-text.component.scss']
})
export class PfInputTextComponent implements OnInit {

  @Input() id: string;
  @Input() name: string;
  @Input() value: string;
  @Input() placeholder: string;

  //falta trim

  @Input() maxlength: string;
  @Input() minlength: string;

  @Input() disabled: boolean;
  @Input() required: boolean;

  @Output() click = new EventEmitter();
  @Output() blur = new EventEmitter();
  @Output() change = new EventEmitter();
  @Output() paste = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
