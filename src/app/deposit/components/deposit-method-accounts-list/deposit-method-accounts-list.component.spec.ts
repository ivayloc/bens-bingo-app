import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositMethodAccountsListComponent } from './deposit-method-accounts-list.component';

describe('DepositMethodAccountsListComponent', () => {
  let component: DepositMethodAccountsListComponent;
  let fixture: ComponentFixture<DepositMethodAccountsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositMethodAccountsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositMethodAccountsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
