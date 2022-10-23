import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PaymentMethod } from 'src/app/shared/models/payment-method';
import { selectPaymentMethods } from '../../state';
import { DepositsPageActions } from '../../state/actions';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss'],
})
export class DepositComponent implements OnInit {
  getPaymentMethods$ = new Observable<PaymentMethod[]>();

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.store.dispatch(DepositsPageActions.loadPaymentMethods());
    this.getPaymentMethods$ = this.store.select(selectPaymentMethods);

    this.loadSelectedPaymentMethodOnLoad();
  }

  selectPaymentMethod({ id }: PaymentMethod) {
    this.store.dispatch(DepositsPageActions.setSelectedDepositMethod({ id }));
  }

  private loadSelectedPaymentMethodOnLoad() {
    if (this.route.snapshot.firstChild?.params['id']) {
      const id = +this.route.snapshot.firstChild?.params['id'];
      this.store.dispatch(DepositsPageActions.setSelectedDepositMethod({ id }));
    }
  }
}
