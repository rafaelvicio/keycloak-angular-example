import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfModalComponent } from './pf-modal.component';

describe('PfModalComponent', () => {
  let component: PfModalComponent;
  let fixture: ComponentFixture<PfModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
