import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NonNullableFormBuilder,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, Observable, tap } from 'rxjs';
import { PaymentMethod } from 'src/app/shared/models/payment-method';
import { PaymentMethodAccount } from '../../models/payment-method-account';
import {
  selectSelectedDepositMethod,
  selectSelectedDepositMethodAccountMatData,
} from '../../state';
import { DepositsPageActions } from '../../state/actions';
import { DepositAddEditCardComponent } from '../deposit-add-edit-card/deposit-add-edit-card.component';

@Component({
  selector: 'app-deposit-method-accounts-list',
  templateUrl: './deposit-method-accounts-list.component.html',
  styleUrls: ['./deposit-method-accounts-list.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DepositMethodAccountsListComponent,
      multi: true,
    },
  ],
})
export class DepositMethodAccountsListComponent
  implements OnInit, ControlValueAccessor
{
  @Input() accounts!: MatTableDataSource<PaymentMethodAccount>;
  @Input() paymentMethod!: PaymentMethod;

  accountField = this.fb.control({} as PaymentMethodAccount);
  displayedColumns = [
    'select',
    'type',
    'number',
    'nameOnCard',
    'expiry',
    'action',
  ];
  fieldValue!: PaymentMethodAccount;
  selection = new SelectionModel<PaymentMethodAccount>(false, []);
  onChange!: (val: any) => void;
  onTouched!: () => void;
  getSelectedDepositMethodAccounts$ = new Observable<
    MatTableDataSource<PaymentMethodAccount>
  >();
  getSelectedDepositMethod$ = new Observable<PaymentMethod | undefined>();

  constructor(
    private dialog: MatDialog,
    private store: Store,
    private fb: NonNullableFormBuilder
  ) {}

  ngOnInit(): void {
    this.getSelectedDepositMethodAccounts$ = this.store.select(
      selectSelectedDepositMethodAccountMatData
    );

    this.getSelectedDepositMethod$ = this.store.select(
      selectSelectedDepositMethod
    );
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

  selectCard() {
    return this.accountField.valueChanges.pipe(
      distinctUntilChanged(),
      tap((selectedAccount) => {
        this.store.dispatch(
          DepositsPageActions.depositSelectedAccount({
            selectedAccount,
          })
        );
      })
    );
  }

  checkboxLabel(row?: any): string {
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }
  addDepositAccount(paymentMethod: PaymentMethod) {
    this.dialog.open(DepositAddEditCardComponent, {
      width: '100%',
      data: {
        paymentMethod,
      },
    });
  }

  writeValue(selectedAccount: PaymentMethodAccount): void {
    this.fieldValue = selectedAccount;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  changed(selectedAccount: PaymentMethodAccount) {
    this.store.dispatch(
      DepositsPageActions.depositSelectedAccount({
        selectedAccount,
      })
    );
    this.onChange(selectedAccount);
  }
}
