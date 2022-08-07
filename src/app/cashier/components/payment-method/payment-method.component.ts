import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaymentMethod } from '../../models/payment-method';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss'],
})
export class PaymentMethodComponent implements OnInit {
  @Input() paymentMethod = {} as PaymentMethod;
  @Output() selectedPaymentMethod = new EventEmitter<PaymentMethod>();

  constructor() {}

  ngOnInit(): void {}

  selectPaymentMethod(paymentMethod: PaymentMethod) {
    this.selectedPaymentMethod.emit(paymentMethod);
  }
}
