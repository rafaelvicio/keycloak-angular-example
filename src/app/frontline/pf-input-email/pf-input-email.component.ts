import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pf-input-email',
  templateUrl: './pf-input-email.component.html',
  styleUrls: ['./pf-input-email.component.scss']
})
export class PfInputEmailComponent implements OnInit {

  @Input() id: string;
  @Input() name: string;
  @Input() value: string;
  @Input() placeholder: string;
  @Input() label: string;

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
