import { Component, Input } from '@angular/core';
import { PaymentMethod } from '../../models/payment-method';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss'],
})
export class PaymentMethodComponent {
  @Input() getPaymentMethods: PaymentMethod[] | null = [];
  @Input() onlyDefaultPaymentMethod = false;

  constructor() {}
}
