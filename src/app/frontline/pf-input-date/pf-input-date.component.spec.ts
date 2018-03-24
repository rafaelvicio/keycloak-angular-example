import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfInputDateComponent } from './pf-input-date.component';

describe('PfInputDateComponent', () => {
  let component: PfInputDateComponent;
  let fixture: ComponentFixture<PfInputDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfInputDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfInputDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
