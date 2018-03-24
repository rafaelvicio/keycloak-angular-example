import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfInputCpfcnpjComponent } from './pf-input-cpfcnpj.component';

describe('PfInputCpfcnpjComponent', () => {
  let component: PfInputCpfcnpjComponent;
  let fixture: ComponentFixture<PfInputCpfcnpjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfInputCpfcnpjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfInputCpfcnpjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
