import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfInputNumberComponent } from './pf-input-number.component';

describe('PfInputNumberComponent', () => {
  let component: PfInputNumberComponent;
  let fixture: ComponentFixture<PfInputNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfInputNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfInputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
