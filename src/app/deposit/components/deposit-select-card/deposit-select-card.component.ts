import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { UpdatedUserInfo } from 'src/app/account/models/updated-user-info';
import { PaymentMethod } from 'src/app/shared/models/payment-method';
import { UserInfo } from 'src/app/shared/models/user-info';
import { selectUserInfo } from 'src/app/state';
import { DepositReceipt } from '../../models/deposit-receipt';
import { PaymentMethodAccount } from '../../models/payment-method-account';
import {
  selectDepositReceipt,
  selectSelectedDepositMethod,
  selectSelectedDepositMethodAccountMatData,
} from '../../state';
import { DepositsPageActions } from '../../state/actions';

@Component({
  selector: 'app-deposit-select-card',
  templateUrl: './deposit-select-card.component.html',
  styleUrls: ['./deposit-select-card.component.scss'],
})
export class DepositSelectCardComponent implements OnInit {
  showCardsStep = false;
  depositForm = this.fb.group({
    amount: ['', Validators.required],
    cvv: ['', Validators.required],
    account: ['', Validators.required],
  });

  confirmDepositDetailsForm = this.fb.group({
    userdata: this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.required],
      birthdate: ['', Validators.required],
    }),
    signuptype: 'depositupdate',
  });

  get depositAmountField(): UntypedFormControl {
    return this.depositForm.get('amount') as UntypedFormControl;
  }

  get cvvField(): UntypedFormControl {
    return this.depositForm.get('cvv') as UntypedFormControl;
  }

  get accountField(): UntypedFormControl {
    return this.depositForm.get('account') as UntypedFormControl;
  }

  getSelectedDepositMethodAccounts$ = new Observable<
    MatTableDataSource<PaymentMethodAccount>
  >();

  getSelectedDepositMethod$ = new Observable<PaymentMethod | undefined>();
  getUserInfo$ = new Observable<UserInfo>();
  getDepositReceipt$ = new Observable<DepositReceipt>();

  constructor(private store: Store, private fb: UntypedFormBuilder) {}

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

    this.getUserInfo$ = this.store.select(selectUserInfo).pipe(
      tap((userInfo) => {
        this.createUserDetailsForm(userInfo);
      })
    );
    this.getDepositReceipt$ = this.store.select(selectDepositReceipt);
  }

  continue() {
    this.showCardsStep = true;
  }

  submitDeposit(processorid: number) {
    const payload = {
      processorid,
      accountid: this.accountField.value.id,
      amount: this.depositAmountField.value,
      cvv: this.cvvField.value,
    };
    this.store.dispatch(DepositsPageActions.makeDeposit({ payload }));
  }

  updateUserDetails() {
    if (this.confirmDepositDetailsForm.invalid) {
      return;
    }
    const payload =
      this.confirmDepositDetailsForm.getRawValue() as UpdatedUserInfo;

    this.store.dispatch(
      DepositsPageActions.updateUserDepositDetails({
        payload,
      })
    );
  }
  createUserDetailsForm(userInfo: UserInfo) {
    const userdata = this.confirmDepositDetailsForm.get(
      'userdata'
    ) as UntypedFormGroup;
    userdata.patchValue(userInfo);
    Object.entries(userdata.controls).forEach(([controlName, { value }]) => {
      if (value) {
        userdata.get(controlName)?.disable();
      }
    });
  }

  confirmDeposit() {
    this.store.dispatch(DepositsPageActions.confirmDeposit());
  }

  printReceipt() {
    window.print();
  }
}
