import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserBalance } from '../../models/user-balance';
import { UserCurrency } from '../../models/user-currency';
import { getUserInfoBalance } from '../../state';
import { AccountPageActions } from '../../state/actions';

@Component({
  selector: 'app-account-funds',
  templateUrl: './account-funds.component.html',
  styleUrls: ['./account-funds.component.scss'],
})
export class AccountFundsComponent implements OnInit {
  getUserInfoBalance$ = new Observable<{
    balance: UserBalance;
    currency: UserCurrency;
  }>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(AccountPageActions.loadUserInfo());
    this.getUserInfoBalance$ = this.store.select(getUserInfoBalance);
  }
}
