import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pf-label',
  templateUrl: './pf-label.component.html',
  styleUrls: ['./pf-label.component.scss']
})
export class PfLabelComponent implements OnInit {

  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
