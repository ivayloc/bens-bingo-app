import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaymentMethod } from 'src/app/shared/models/payment-method';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss'],
})
export class PaymentMethodComponent implements OnInit {
  @Input() paymentMethod = {} as PaymentMethod;
  @Input() buttonLabel = '';
  @Output() selectedPaymentMethod = new EventEmitter<PaymentMethod>();

  constructor() {}

  ngOnInit(): void {}

  selectPaymentMethod(paymentMethod: PaymentMethod) {
    this.selectedPaymentMethod.emit(paymentMethod);
  }
}
