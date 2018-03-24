import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfBadgeComponent } from './pf-badge.component';

describe('PfBadgeComponent', () => {
  let component: PfBadgeComponent;
  let fixture: ComponentFixture<PfBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
