import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaymentMethod } from 'src/app/shared/models/payment-method';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss'],
})
export class PaymentMethodComponent {
  @Input() paymentMethod = {} as PaymentMethod;
  @Input() buttonLabel = '';
  @Output() submittedDepositAmount = new EventEmitter<PaymentMethod>();
  showCardsStep = false;

  constructor() {}

  submitDepositAmount() {
    this.submittedDepositAmount.emit();
  }
}
