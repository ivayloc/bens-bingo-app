import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PaymentMethod } from 'src/app/shared/models/payment-method';
import { selectSelectedCashOutMethod } from '../../state';

@Component({
  selector: 'app-request-withdrawal',
  templateUrl: './withdrawal-request.component.html',
  styleUrls: ['./withdrawal-request.component.scss'],
})
export class WithdrawalRequestComponent implements OnInit {
  getSelectedPaymentMethod$ = new Observable<PaymentMethod>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getSelectedPaymentMethod$ = this.store.select(
      selectSelectedCashOutMethod
    );
  }
}
