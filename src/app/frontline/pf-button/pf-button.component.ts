import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pf-button',
  templateUrl: './pf-button.component.html',
  styleUrls: ['./pf-button.component.scss']
})
export class PfButtonComponent implements OnInit {

  @Input() value: string;
  @Input() layout: string;
  @Input() size: string;
  @Input() style: string;

  @Output() click = new EventEmitter();
  @Output() blur = new EventEmitter();
  @Output() change = new EventEmitter();
  @Output() paste = new EventEmitter();

  constructor() {
    if (this.layout == null) {
      this.layout = 'primary';
    }
  }

  ngOnInit() {
  }

}
