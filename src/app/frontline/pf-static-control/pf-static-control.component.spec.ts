import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfStaticControlComponent } from './pf-static-control.component';

describe('PfStaticControlComponent', () => {
  let component: PfStaticControlComponent;
  let fixture: ComponentFixture<PfStaticControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfStaticControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfStaticControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
