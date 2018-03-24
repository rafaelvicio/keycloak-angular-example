import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfInputCpfComponent } from './pf-input-cpf.component';

describe('PfInputCpfComponent', () => {
  let component: PfInputCpfComponent;
  let fixture: ComponentFixture<PfInputCpfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfInputCpfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfInputCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
