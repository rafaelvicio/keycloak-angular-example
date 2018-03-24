import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfInputZipcodeComponent } from './pf-input-zipcode.component';

describe('PfInputZipcodeComponent', () => {
  let component: PfInputZipcodeComponent;
  let fixture: ComponentFixture<PfInputZipcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfInputZipcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfInputZipcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
