import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CashOutStatus } from '../../models/cash-out-status';
import { PaymentMethod } from '../../models/payment-method';
import { getCashOutMethods, getCashOutStatus, State } from '../../state';
import { CashierPageActions } from '../../state/actions';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.scss'],
})
export class WithdrawalComponent implements OnInit {
  getCashOutMethods$ = new Observable<PaymentMethod[]>();
  getCashOutStatus$ = new Observable<CashOutStatus>();

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(CashierPageActions.loadCashOutMethods());
    this.getCashOutMethods$ = this.store.select(getCashOutMethods);
    this.store.dispatch(CashierPageActions.loadCashOutStatus());
    this.getCashOutStatus$ = this.store.select(getCashOutStatus);
  }
}
