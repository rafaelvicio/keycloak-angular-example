import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pf-dropdown',
  templateUrl: './pf-dropdown.component.html',
  styleUrls: ['./pf-dropdown.component.scss']
})
export class PfDropdownComponent implements OnInit {

  @Input() value: string;
  @Input() label: string;
  @Input() placeholder: string;

  @Input() items;
  @Input() teste: string;

  @Input() pesquisar: boolean;

  @Input() disabled: boolean;
  @Input() required: boolean;

  // options, key, value, valueFormat, placeholder, search-enbaled, limit

  @Output() click = new EventEmitter();
  @Output() blur = new EventEmitter();
  @Output() change = new EventEmitter();
  @Output() paste = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
