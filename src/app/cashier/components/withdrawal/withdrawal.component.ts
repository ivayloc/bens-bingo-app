import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PaymentMethod } from '../../models/payment-method';
import { getCashOutMethods, State } from '../../state';
import { CashierPageActions } from '../../state/actions';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.scss'],
})
export class WithdrawalComponent implements OnInit {
  getCashOutMethods$ = new Observable<PaymentMethod[]>();

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(CashierPageActions.loadCashOutMethods());
    this.getCashOutMethods$ = this.store.select(getCashOutMethods);
  }
}
