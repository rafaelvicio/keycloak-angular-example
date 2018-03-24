import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pf-select',
  templateUrl: './pf-select.component.html',
  styleUrls: ['./pf-select.component.css']
})
export class PfSelectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() selectedValue;

  @Input() items;

  //key, value
  //default-element
  //show default-element

}
