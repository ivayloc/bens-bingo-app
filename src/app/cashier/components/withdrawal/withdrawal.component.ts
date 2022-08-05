import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CashOutStatus } from '../../models/cash-out-status';
import { PaymentMethod } from '../../models/payment-method';
import { selectCashOutMethods, selectCashOutStatus, State } from '../../state';
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
  }

  selectPaymentMethod({ id }: PaymentMethod) {
    // this.selectedPaymentMethod = paymentMethod;
    // this.router.navigate([id], { relativeTo: this.route });
  }
}
