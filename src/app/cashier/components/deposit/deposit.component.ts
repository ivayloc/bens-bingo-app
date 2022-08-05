import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PaymentMethod } from '../../models/payment-method';
import { selectPaymentMethods, State } from '../../state';
import { CashierPageActions } from '../../state/actions';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss'],
})
export class DepositComponent implements OnInit {
  getPaymentMethods$ = new Observable<PaymentMethod[]>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(CashierPageActions.loadPaymentMethods());
    this.getPaymentMethods$ = this.store.select(selectPaymentMethods);
  }
}
