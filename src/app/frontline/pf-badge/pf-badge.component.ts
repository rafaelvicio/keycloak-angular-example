import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pf-badge',
  templateUrl: './pf-badge.component.html',
  styleUrls: ['./pf-badge.component.scss'],
})
export class PfBadgeComponent implements OnInit {

  @Input() value: string;
  @Input() layout: string;

  constructor() {
    if (this.layout == null) {
      this.layout = 'default';
    }
  }

  ngOnInit() {
  }

}
