import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfInputPhoneComponent } from './pf-input-phone.component';

describe('PfInputPhoneComponent', () => {
  let component: PfInputPhoneComponent;
  let fixture: ComponentFixture<PfInputPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfInputPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfInputPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
