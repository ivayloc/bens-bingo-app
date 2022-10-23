import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { PaymentMethod } from 'src/app/shared/models/payment-method';
import { PaymentMethodAccount } from '../../models/payment-method-account';
import { selectSelectedDepositMethod } from '../../state';

@Component({
  selector: 'app-deposit-select-neteller',
  templateUrl: './deposit-select-neteller.component.html',
  styleUrls: ['./deposit-select-neteller.component.scss'],
})
export class DepositSelectNetellerComponent implements OnInit {
  depositForm = this.fb.group({
    amount: ['', Validators.required],
    account: ['', Validators.required],
  });

  get depositAmountField(): FormControl<number> {
    return this.depositForm.get('amount') as FormControl;
  }
  get accountField(): FormControl<PaymentMethodAccount> {
    return this.depositForm.get('account') as FormControl;
  }
  getSelectedDepositMethod$ = new Observable<PaymentMethod | undefined>();

  constructor(private store: Store, private fb: NonNullableFormBuilder) {}

  ngOnInit(): void {
    this.getSelectedDepositMethod$ = this.store
      .select(selectSelectedDepositMethod)
      .pipe(
        tap((paymentMethod) => {
          if (paymentMethod?.accounts) {
            this.accountField.setValue(paymentMethod?.accounts[0]);
          }
          if (paymentMethod?.default) {
            this.depositAmountField.setValue(paymentMethod?.default);
          }
        })
      );
  }
}
