import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfInputCnpjComponent } from './pf-input-cnpj.component';

describe('PfInputCnpjComponent', () => {
  let component: PfInputCnpjComponent;
  let fixture: ComponentFixture<PfInputCnpjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfInputCnpjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfInputCnpjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
