import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PaymentMethod } from 'src/app/shared/models/payment-method';
import { CashOutStatus } from '../../models/cash-out-status';
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

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.store.dispatch(CashierPageActions.loadCashOutDetails());
    this.getCashOutMethods$ = this.store.select(selectCashOutMethods);
    this.getCashOutStatus$ = this.store.select(selectCashOutStatus);

    this.loadSelectedPaymentMethodOnLoad();
  }

  private loadSelectedPaymentMethodOnLoad() {
    if (this.route.snapshot.firstChild?.params['id']) {
      const id = +this.route.snapshot.firstChild?.params['id'];
      this.store.dispatch(CashierPageActions.setSelectedCashOutMethod({ id }));
    }
  }

  selectPaymentMethod({ id }: PaymentMethod) {
    this.store.dispatch(CashierPageActions.setSelectedCashOutMethod({ id }));
  }
}
