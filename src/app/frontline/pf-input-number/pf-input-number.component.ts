import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pf-input-number',
  templateUrl: './pf-input-number.component.html',
  styleUrls: ['./pf-input-number.component.css']
})
export class PfInputNumberComponent implements OnInit {

  @Input() name: string;
  @Input() placeholder: string;
  @Input() maxlength: string;

  @Input() value: string;
  @Input() label: string;

  @Output() click = new EventEmitter();
  @Output() blur = new EventEmitter();
  @Output() change = new EventEmitter();
  @Output() paste = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
