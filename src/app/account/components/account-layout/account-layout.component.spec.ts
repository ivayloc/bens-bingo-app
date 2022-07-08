import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPortalLayoutComponent } from './account-layout.component';

describe('CustomerPortalLayoutComponent', () => {
  let component: CustomerPortalLayoutComponent;
  let fixture: ComponentFixture<CustomerPortalLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerPortalLayoutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPortalLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
