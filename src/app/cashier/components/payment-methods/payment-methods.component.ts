import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PaymentMethod } from '../../models/payment-method';
import { State } from '../../state';
import { CashierPageActions } from '../../state/actions';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss'],
})
export class PaymentMethodComponent {
  @Input() getPaymentMethods: PaymentMethod[] | null = [];
  @Input() onlyDefaultPaymentMethod = false;
  @Input() cashOutPaymentMethod = {} as PaymentMethod;
  @Output() selectedPaymentMethod = new EventEmitter<PaymentMethod>();

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  selectPaymentMethod(paymentMethod: PaymentMethod) {
    this.selectedPaymentMethod.emit(paymentMethod);
  }
}
