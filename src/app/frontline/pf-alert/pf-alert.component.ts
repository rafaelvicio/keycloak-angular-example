import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pf-alert',
  templateUrl: './pf-alert.component.html',
  styleUrls: ['./pf-alert.component.scss']
})
export class PfAlertComponent implements OnInit {

  @Input() value: string;
  @Input() layout: string;

  constructor() {
    if (this.layout == null) {
      this.layout = 'success';
    }
  }

  ngOnInit() {
  }

}
