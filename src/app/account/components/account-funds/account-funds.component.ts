import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUserInfoBalance } from 'src/app/state';
import { AppPageActions } from 'src/app/state/actions';
import { UserBalance } from '../../models/user-balance';
import { UserCurrency } from '../../models/user-currency';

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
    this.store.dispatch(AppPageActions.loadUserInfo());
    this.getUserInfoBalance$ = this.store.select(selectUserInfoBalance);
  }
}
