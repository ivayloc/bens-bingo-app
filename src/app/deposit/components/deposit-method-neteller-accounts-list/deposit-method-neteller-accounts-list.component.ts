import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { first, Observable, tap } from 'rxjs';
import { PaymentMethod } from 'src/app/shared/models/payment-method';
import { PaymentMethodAccount } from '../../models/payment-method-account';
import {
  selectSelectedDepositMethod,
  selectSelectedDepositMethodAccountMatData,
} from '../../state';
import { DepositsPageActions } from '../../state/actions';
import { DepositAddEditNetellerComponent } from '../deposit-add-edit-neteller/deposit-add-edit-neteller.component';

@Component({
  selector: 'app-deposit-method-neteller-accounts-list',
  templateUrl: './deposit-method-neteller-accounts-list.component.html',
  styleUrls: ['./deposit-method-neteller-accounts-list.component.scss'],
})
export class DepositMethodNetellerAccountsListComponent implements OnInit {
  getSelectedDepositMethodAccounts$ = new Observable<
    MatTableDataSource<PaymentMethodAccount>
  >();
  getSelectedDepositMethod$ = new Observable<PaymentMethod | undefined>();

  displayedColumns = ['select', 'number', 'action'];
  selection = new SelectionModel<PaymentMethodAccount>(false, []);

  constructor(private dialog: MatDialog, private store: Store) {}

  ngOnInit(): void {
    this.getSelectedDepositMethodAccounts$ = this.store
      .select(selectSelectedDepositMethodAccountMatData)
      .pipe(
        first(),
        tap((accounts) => {
          if (accounts.data.length) {
            this.changed(accounts.data[0]);
          }
        })
      );

    this.getSelectedDepositMethod$ = this.store.select(
      selectSelectedDepositMethod
    );
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

  changed(selectedCard: PaymentMethodAccount) {
    this.store.dispatch(
      DepositsPageActions.depositSelectedAccount({
        selectedAccount: selectedCard,
      })
    );
  }
}
