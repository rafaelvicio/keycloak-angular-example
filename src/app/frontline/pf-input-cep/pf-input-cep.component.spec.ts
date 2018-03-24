import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfInputCepComponent } from './pf-input-cep.component';

describe('PfInputCepComponent', () => {
  let component: PfInputCepComponent;
  let fixture: ComponentFixture<PfInputCepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfInputCepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfInputCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
