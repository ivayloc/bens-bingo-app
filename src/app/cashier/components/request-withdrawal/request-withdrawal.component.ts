import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PaymentMethod } from '../../models/payment-method';
import { selectSelectedCashOutMethod } from '../../state';

@Component({
  selector: 'app-request-withdrawal',
  templateUrl: './request-withdrawal.component.html',
  styleUrls: ['./request-withdrawal.component.scss'],
})
export class RequestWithdrawalComponent implements OnInit {
  getSelectedPaymentMethod$ = new Observable<PaymentMethod>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getSelectedPaymentMethod$ = this.store.select(
      selectSelectedCashOutMethod
    );
  }
}
