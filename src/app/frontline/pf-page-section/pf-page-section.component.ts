import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pf-page-section',
  templateUrl: './pf-page-section.component.html',
  styleUrls: ['./pf-page-section.component.css']
})
export class PfPageSectionComponent implements OnInit {

  @Input() value: string;

  constructor() { }

  ngOnInit() {
  }

}
