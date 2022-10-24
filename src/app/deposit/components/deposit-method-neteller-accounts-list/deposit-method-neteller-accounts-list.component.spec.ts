import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositMethodNetellerAccountsListComponent } from './deposit-method-neteller-accounts-list.component';

describe('DepositMethodNetellerAccountsListComponent', () => {
  let component: DepositMethodNetellerAccountsListComponent;
  let fixture: ComponentFixture<DepositMethodNetellerAccountsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositMethodNetellerAccountsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositMethodNetellerAccountsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
