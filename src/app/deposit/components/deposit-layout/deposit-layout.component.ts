import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PaymentMethod } from 'src/app/shared/models/payment-method';
import { selectPaymentMethods } from '../../state';
import { DepositsPageActions } from '../../state/actions';

@Component({
  selector: 'app-deposit-layout',
  templateUrl: './deposit-layout.component.html',
  styleUrls: ['./deposit-layout.component.scss'],
})
export class DepositLayoutComponent implements OnInit {
  getPaymentMethods$ = new Observable<PaymentMethod[]>();

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getPaymentMethods$ = this.store.select(selectPaymentMethods);
  }

  selectPaymentMethod(paymentMethod: PaymentMethod) {
    this.store.dispatch(
      DepositsPageActions.selectPaymentMethod({ paymentMethod })
    );
  }
}
