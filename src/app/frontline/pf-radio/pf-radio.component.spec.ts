import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfRadioComponent } from './pf-radio.component';

describe('PfRadioComponent', () => {
  let component: PfRadioComponent;
  let fixture: ComponentFixture<PfRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
