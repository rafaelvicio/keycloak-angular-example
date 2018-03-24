import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pf-text-area',
  templateUrl: './pf-text-area.component.html',
  styleUrls: ['./pf-text-area.component.scss']
})
export class PfTextAreaComponent implements OnInit {

  @Input() value: string;
  @Input() placeholder: string;
  @Input() label: string;

  // rows, trim

  constructor() { }

  ngOnInit() {
  }

}
