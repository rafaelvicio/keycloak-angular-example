import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfButtonComponent } from './pf-button.component';

describe('PfButtonComponent', () => {
  let component: PfButtonComponent;
  let fixture: ComponentFixture<PfButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
