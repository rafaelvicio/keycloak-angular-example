import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pf-radio',
  templateUrl: './pf-radio.component.html',
  styleUrls: ['./pf-radio.component.css']
})
export class PfRadioComponent implements OnInit {

  @Input() value: string;
  @Input() name: string;
  @Input() label: string;
  @Input() placeholder: string;

  @Input() items;

  @Input() inline: boolean;

  @Input() disabled: boolean;
  @Input() required: boolean;

  constructor() {
    if (this.inline === null) {
      this.inline = false;
    }
  }

  ngOnInit() {
  }

}
