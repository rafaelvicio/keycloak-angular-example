import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfDropdownComponent } from './pf-dropdown.component';

describe('PfDropdownComponent', () => {
  let component: PfDropdownComponent;
  let fixture: ComponentFixture<PfDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
