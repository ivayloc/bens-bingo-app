import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import {
  FormControl,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { PaymentMethod } from 'src/app/shared/models/payment-method';
import { DepositUpdateAccountNetellerRequest } from '../../models/deposit-update-account-neteller-request';
import { PaymentMethodAccount } from '../../models/payment-method-account';
import { DepositsPageActions } from '../../state/actions';
import { DepositAddEditCardComponent } from '../deposit-add-edit-card/deposit-add-edit-card.component';

@Component({
  selector: 'app-deposit-add-edit-neteller',
  templateUrl: './deposit-add-edit-neteller.component.html',
  styleUrls: ['./deposit-add-edit-neteller.component.scss'],
})
export class DepositAddEditNetellerComponent implements OnInit {
  netellerAccountForm = this.fb.group({
    accountnumber: ['', [Validators.required, Validators.email]],
    id: [0, [Validators.required, Validators.minLength(6)]],
  });
  editMode = false;

  public get accountnumberField(): FormControl<string> {
    return this.netellerAccountForm.get('accountnumber') as FormControl<string>;
  }

  public get idField(): FormControl<number> {
    return this.netellerAccountForm.get('id') as FormControl<number>;
  }

  public get dialogTitle(): string {
    if (!this.editMode) {
      return `Add new ${this.data.paymentMethod.name} Card`;
    }
    return `Edit ${this.data.paymentMethod.name} Card`;
  }

  constructor(
    private store: Store,
    @Inject(LOCALE_ID) private localeId: string,
    private fb: NonNullableFormBuilder,
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
      this.netellerAccountForm.patchValue({
        id: this.data.account.id,
        accountnumber: this.data.account.masked_accountnumber,
      });
      this.netellerAccountForm.get('accountnumber')?.disable();
    }
  }

  submit() {
    let payload = {
      processorid: this.data.paymentMethod.id,
      accountnumber: this.accountnumberField.value,
      pin: this.idField.value,
    } as DepositUpdateAccountNetellerRequest;

    if (this.editMode) {
      payload.accountid = this.data.account.id;
      this.store.dispatch(
        DepositsPageActions.depositUpdateNetellerAccount({ payload })
      );
    } else {
      this.store.dispatch(
        DepositsPageActions.depositAddNetellerAccount({ payload })
      );
    }

    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }
}
