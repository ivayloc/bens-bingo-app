import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountFundsComponent } from './account-funds.component';

describe('AccountFundsComponent', () => {
  let component: AccountFundsComponent;
  let fixture: ComponentFixture<AccountFundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountFundsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
