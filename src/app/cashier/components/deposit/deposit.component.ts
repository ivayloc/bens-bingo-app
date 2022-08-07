import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PaymentMethod } from '../../models/payment-method';
import { selectPaymentMethods } from '../../state';
import { CashierPageActions } from '../../state/actions';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss'],
})
export class DepositComponent implements OnInit {
  getPaymentMethods$ = new Observable<PaymentMethod[]>();

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.store.dispatch(CashierPageActions.loadPaymentMethods());
    this.getPaymentMethods$ = this.store.select(selectPaymentMethods);

    this.loadSelectedPaymentMethodOnLoad();
  }

  selectPaymentMethod({ id }: PaymentMethod) {
    this.store.dispatch(CashierPageActions.setSelectedDepositMethod({ id }));
  }

  private loadSelectedPaymentMethodOnLoad() {
    if (this.route.snapshot.firstChild?.params['id']) {
      const id = +this.route.snapshot.firstChild?.params['id'];
      this.store.dispatch(CashierPageActions.setSelectedDepositMethod({ id }));
    }
  }
}
