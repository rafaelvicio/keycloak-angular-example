import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfInputMaskComponent } from './pf-input-mask.component';

describe('PfInputMaskComponent', () => {
  let component: PfInputMaskComponent;
  let fixture: ComponentFixture<PfInputMaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfInputMaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfInputMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
