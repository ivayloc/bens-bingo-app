import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PaymentMethod } from '../../models/payment-method';
import { selectSelectedDepositMethod } from '../../state';

@Component({
  selector: 'app-deposit-wtih-payment-method',
  templateUrl: './deposit-wtih-payment-method.component.html',
  styleUrls: ['./deposit-wtih-payment-method.component.scss'],
})
export class DepositWtihPaymentMethodComponent implements OnInit {
  getSelectedDepositMethod$ = new Observable<PaymentMethod>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getSelectedDepositMethod$ = this.store.select(
      selectSelectedDepositMethod
    );
  }
}
