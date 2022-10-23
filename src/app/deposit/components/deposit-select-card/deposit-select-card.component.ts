import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, Observable, tap } from 'rxjs';
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
import { DepositAddEditCardComponent } from '../deposit-add-edit-card/deposit-add-edit-card.component';

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

  getSelectedDepositMethod$ = new Observable<PaymentMethod>();
  getUserInfo$ = new Observable<UserInfo>();
  getDepositReceipt$ = new Observable<DepositReceipt>();

  displayedColumns = [
    'select',
    'type',
    'number',
    'nameOnCard',
    'expiry',
    'action',
  ];
  selection = new SelectionModel<PaymentMethodAccount>(false, []);

  constructor(
    private store: Store,
    private fb: UntypedFormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getSelectedDepositMethod$ = this.store
      .select(selectSelectedDepositMethod)
      .pipe(
        tap((paymentMethod) => {
          if (paymentMethod?.accounts) {
            this.accountField.setValue(paymentMethod?.accounts[0]);
          }
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

    this.selectCard().subscribe();
  }

  continue() {
    this.showCardsStep = true;
  }

  selectCard() {
    return this.accountField.valueChanges.pipe(
      distinctUntilChanged(),
      tap<PaymentMethodAccount>((selectedCard) => {
        this.store.dispatch(
          DepositsPageActions.depositSelectedCard({ selectedCard })
        );
      })
    );
  }

  checkboxLabel(row?: any): string {
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
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

  editCardDetails(paymentMethod: PaymentMethod, account: PaymentMethodAccount) {
    this.dialog.open(DepositAddEditCardComponent, {
      width: '100%',
      data: {
        paymentMethod,
        account,
      },
    });
  }

  addDepositAccount(paymentMethod: PaymentMethod) {
    this.dialog.open(DepositAddEditCardComponent, {
      width: '100%',
      data: {
        paymentMethod,
      },
    });
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
