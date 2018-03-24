import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfLogoutComponent } from './pf-logout.component';

describe('PfLogoutComponent', () => {
  let component: PfLogoutComponent;
  let fixture: ComponentFixture<PfLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
