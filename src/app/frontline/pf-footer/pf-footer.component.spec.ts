import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfFooterComponent } from './pf-footer.component';

describe('PfFooterComponent', () => {
  let component: PfFooterComponent;
  let fixture: ComponentFixture<PfFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
