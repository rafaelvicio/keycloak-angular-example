import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfPageSectionComponent } from './pf-page-section.component';

describe('PfPageSectionComponent', () => {
  let component: PfPageSectionComponent;
  let fixture: ComponentFixture<PfPageSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfPageSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfPageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
