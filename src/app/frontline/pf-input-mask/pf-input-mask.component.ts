import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pf-input-mask',
  templateUrl: './pf-input-mask.component.html',
  styleUrls: ['./pf-input-mask.component.css']
})
export class PfInputMaskComponent implements OnInit {

  @Input() id: string;
  @Input() name: string;
  @Input() value: string;
  @Input() placeholder: string;

  @Input() inputMask: string;

  @Output() click = new EventEmitter();
  @Output() blur = new EventEmitter();
  @Output() change = new EventEmitter();
  @Output() paste = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
