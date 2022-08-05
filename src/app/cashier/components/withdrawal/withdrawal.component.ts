import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CashOutStatus } from '../../models/cash-out-status';
import { PaymentMethod } from '../../models/payment-method';
import { selectCashOutMethods, selectCashOutStatus } from '../../state';
import { CashierPageActions } from '../../state/actions';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.scss'],
})
export class WithdrawalComponent implements OnInit {
  getCashOutMethods$ = new Observable<PaymentMethod[]>();
  getCashOutStatus$ = new Observable<CashOutStatus>();
  selectedPaymentMethod = {} as PaymentMethod;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store.dispatch(CashierPageActions.loadCashOutDetails());
    this.getCashOutMethods$ = this.store.select(selectCashOutMethods);
    this.getCashOutStatus$ = this.store.select(selectCashOutStatus);

    this.loadSelectedPaymentMethodOnLoad();
  }

  private loadSelectedPaymentMethodOnLoad() {
    if (this.route.snapshot.firstChild?.params['id']) {
      const id = +this.route.snapshot.firstChild?.params['id'];
      this.store.dispatch(CashierPageActions.setSelectedPaymentMethod({ id }));
    }
  }

  selectPaymentMethod({ id }: PaymentMethod) {
    this.store.dispatch(CashierPageActions.setSelectedPaymentMethod({ id }));
  }
}
