import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfAlertComponent } from './pf-alert.component';

describe('PfAlertComponent', () => {
  let component: PfAlertComponent;
  let fixture: ComponentFixture<PfAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
