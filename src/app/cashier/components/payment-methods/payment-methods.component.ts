import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaymentMethod } from '../../models/payment-method';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss'],
})
export class PaymentMethodsComponent {
  @Input() getPaymentMethods: PaymentMethod[] | null = [];
  @Input() onlyDefaultPaymentMethod = false;
  @Output() selectedPaymentMethod = new EventEmitter<PaymentMethod>();

  constructor() {}

  selectPaymentMethod(paymentMethod: PaymentMethod) {
    this.selectedPaymentMethod.emit(paymentMethod);
  }
}
