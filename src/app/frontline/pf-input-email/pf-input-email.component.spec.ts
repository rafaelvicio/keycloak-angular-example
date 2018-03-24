import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfInputEmailComponent } from './pf-input-email.component';

describe('PfInputEmailComponent', () => {
  let component: PfInputEmailComponent;
  let fixture: ComponentFixture<PfInputEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfInputEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfInputEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
