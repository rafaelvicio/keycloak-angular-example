import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfTextAreaComponent } from './pf-text-area.component';

describe('PfTextAreaComponent', () => {
  let component: PfTextAreaComponent;
  let fixture: ComponentFixture<PfTextAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfTextAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
