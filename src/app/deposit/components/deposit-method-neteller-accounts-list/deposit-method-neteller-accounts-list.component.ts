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
import { distinctUntilChanged, tap } from 'rxjs';
import { PaymentMethod } from 'src/app/shared/models/payment-method';
import { PaymentMethodAccount } from '../../models/payment-method-account';
import { DepositsPageActions } from '../../state/actions';
import { DepositAddEditNetellerComponent } from '../deposit-add-edit-neteller/deposit-add-edit-neteller.component';

@Component({
  selector: 'app-deposit-method-neteller-accounts-list',
  templateUrl: './deposit-method-neteller-accounts-list.component.html',
  styleUrls: ['./deposit-method-neteller-accounts-list.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DepositMethodNetellerAccountsListComponent,
      multi: true,
    },
  ],
})
export class DepositMethodNetellerAccountsListComponent
  implements OnInit, ControlValueAccessor
{
  @Input() accounts!: MatTableDataSource<PaymentMethodAccount>;
  @Input() paymentMethod!: PaymentMethod;

  accountField = this.fb.control({} as PaymentMethodAccount);

  displayedColumns = ['select', 'number', 'id', 'action'];
  fieldValue!: PaymentMethodAccount;
  selection = new SelectionModel<PaymentMethodAccount>(false, []);
  onChange!: (val: any) => void;
  onTouched!: () => void;

  constructor(
    private dialog: MatDialog,
    private store: Store,
    private fb: NonNullableFormBuilder
  ) {}

  ngOnInit(): void {
    this.fieldValue = this.accounts?.data[0];
  }

  editCardDetails(paymentMethod: PaymentMethod, account: PaymentMethodAccount) {
    this.dialog.open(DepositAddEditNetellerComponent, {
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
      tap((selectedCard) => {
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
  addDepositAccount(paymentMethod: PaymentMethod) {
    this.dialog.open(DepositAddEditNetellerComponent, {
      width: '100%',
      data: {
        paymentMethod,
      },
    });
  }

  writeValue(selectedCard: PaymentMethodAccount): void {
    this.fieldValue = selectedCard;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  changed(selectedCard: PaymentMethodAccount) {
    this.store.dispatch(
      DepositsPageActions.depositSelectedCard({ selectedCard })
    );
    this.onChange(selectedCard);
  }
}
