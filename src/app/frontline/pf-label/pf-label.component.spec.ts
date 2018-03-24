import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfLabelComponent } from './pf-label.component';

describe('PfLabelComponent', () => {
  let component: PfLabelComponent;
  let fixture: ComponentFixture<PfLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
