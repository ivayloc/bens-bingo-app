import {
  formatDate,
  FormStyle,
  getLocaleMonthNames,
  TranslationWidth,
} from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { PaymentMethod } from '../../models/payment-method';
import { PaymentMethodAccount } from '../../models/payment-method-account';
import { CashierPageActions } from '../../state/actions';

@Component({
  selector: 'app-deposit-add-edit-card',
  templateUrl: './deposit-add-edit-card.component.html',
  styleUrls: ['./deposit-add-edit-card.component.scss'],
})
export class DepositAddEditCardComponent implements OnInit {
  years = [...Array(2036 - 2015 + 1).keys()].map((x) => x + 2015);
  months = getLocaleMonthNames(
    this.localeId,
    FormStyle.Format,
    TranslationWidth.Wide
  );
  cardForm = this.fb.group({
    nameoncard: ['', Validators.required],
    accountnumber: ['', Validators.required],
    expmonth: [
      +formatDate(new Date(), 'M', this.localeId),
      Validators.required,
    ],
    expyear: [
      +formatDate(new Date(), 'yyyy', this.localeId),
      Validators.required,
    ],
    frommonth: [
      +formatDate(new Date(), 'M', this.localeId),
      Validators.required,
    ],
    fromyear: [
      +formatDate(new Date(), 'yyyy', this.localeId),
      Validators.required,
    ],
    issue: ['', Validators.required],
  });
  editMode = false;

  public get dialogTitle(): string {
    if (!this.editMode) {
      return `Add new ${this.data.paymentMethod.name} Card`;
    }
    return `Edit ${this.data.paymentMethod.name} Card`;
  }

  constructor(
    private store: Store,
    @Inject(LOCALE_ID) private localeId: string,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA)
    private data: {
      paymentMethod: PaymentMethod;
      account: PaymentMethodAccount;
    },
    private dialogRef: MatDialogRef<DepositAddEditCardComponent>
  ) {}

  ngOnInit(): void {
    if (this.data.account) {
      this.editMode = true;
      this.cardForm.patchValue({
        ...this.data.account,
        accountnumber: this.data.account.masked_accountnumber,
      });
      this.cardForm.get('accountnumber')?.disable();
      this.cardForm.get('nameoncard')?.disable();
    }
  }

  submit() {
    let payload = {
      ...this.cardForm.getRawValue(),
    };

    if (this.editMode) {
      payload.processorid = this.data.paymentMethod.id;
      payload.accountid = this.data.account.id;
      this.store.dispatch(CashierPageActions.depositUpdateAccount({ payload }));
    } else {
      payload.paymentmethodid = this.data.paymentMethod.id;
      this.store.dispatch(CashierPageActions.depositAddAccount({ payload }));
    }

    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }
}
