import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pf-input-password',
  templateUrl: './pf-input-password.component.html',
  styleUrls: ['./pf-input-password.component.css']
})
export class PfInputPasswordComponent implements OnInit {


  @Input() id: string;
  @Input() name: string;
  @Input() value: string;
  @Input() placeholder: string;

  @Output() click = new EventEmitter();
  @Output() blur = new EventEmitter();
  @Output() change = new EventEmitter();
  @Output() paste = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
