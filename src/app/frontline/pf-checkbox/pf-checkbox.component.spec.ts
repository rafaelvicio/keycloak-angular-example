import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfCheckboxComponent } from './pf-checkbox.component';

describe('PfCheckboxComponent', () => {
  let component: PfCheckboxComponent;
  let fixture: ComponentFixture<PfCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
