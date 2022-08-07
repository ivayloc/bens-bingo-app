import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PaymentMethod } from '../../models/payment-method';
import { selectSelectedDepositMethod } from '../../state';

@Component({
  selector: 'app-deposit-selected-method',
  templateUrl: './deposit-selected-method.component.html',
  styleUrls: ['./deposit-selected-method.component.scss'],
})
export class DepositSelectedMethodComponent implements OnInit {
  getSelectedDepositMethod$ = new Observable<PaymentMethod>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getSelectedDepositMethod$ = this.store.select(
      selectSelectedDepositMethod
    );
  }
}
