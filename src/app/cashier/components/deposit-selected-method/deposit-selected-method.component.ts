import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { PaymentMethod } from '../../models/payment-method';
import { PaymentMethodAccount } from '../../models/payment-method-account';
import {
  selectSelectedDepositMethod,
  selectSelectedDepositMethodAccountMatData,
} from '../../state';

@Component({
  selector: 'app-deposit-selected-method',
  templateUrl: './deposit-selected-method.component.html',
  styleUrls: ['./deposit-selected-method.component.scss'],
})
export class DepositSelectedMethodComponent implements OnInit {
  showCardsStep = false;
  depositForm = this.fb.group({
    amount: ['', Validators.required],
  });
  getSelectedDepositMethodAccounts$ = new Observable<
    MatTableDataSource<PaymentMethodAccount>
  >();

  public get depositAmountField(): FormControl {
    return this.depositForm.get('amount') as FormControl;
  }

  getSelectedDepositMethod$ = new Observable<PaymentMethod>();
  displayedColumns = [
    'type',
    'number',
    'nameOnCard',
    'Expiry',
    'type',
    'action',
    'transactionid',
    'result',
  ];
  constructor(private store: Store, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getSelectedDepositMethod$ = this.store
      .select(selectSelectedDepositMethod)
      .pipe(
        tap((paymentMethod) => {
          this.depositAmountField.setValue(paymentMethod?.default);
        })
      );

    this.getSelectedDepositMethodAccounts$ = this.store.select(
      selectSelectedDepositMethodAccountMatData
    );
  }

  continue() {
    this.showCardsStep = true;
  }
}
