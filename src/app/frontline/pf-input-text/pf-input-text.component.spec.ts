import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfInputTextComponent } from './pf-input-text.component';

describe('PfInputTextComponent', () => {
  let component: PfInputTextComponent;
  let fixture: ComponentFixture<PfInputTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfInputTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
