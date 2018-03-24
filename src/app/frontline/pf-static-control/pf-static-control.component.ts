import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pf-static-control',
  templateUrl: './pf-static-control.component.html',
  styleUrls: ['./pf-static-control.component.css']
})
export class PfStaticControlComponent implements OnInit {

  @Input() value: string;
  @Input() label: string;
  @Input() mask: string;

  // aplicar mascara

  constructor() { }

  ngOnInit() {
  }

}
