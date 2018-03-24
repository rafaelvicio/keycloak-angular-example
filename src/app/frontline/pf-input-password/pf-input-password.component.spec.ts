import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfInputPasswordComponent } from './pf-input-password.component';

describe('PfInputPasswordComponent', () => {
  let component: PfInputPasswordComponent;
  let fixture: ComponentFixture<PfInputPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfInputPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfInputPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
