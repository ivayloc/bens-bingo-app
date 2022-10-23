import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, tap } from 'rxjs';
import { PaymentMethod } from 'src/app/shared/models/payment-method';
import { PaymentMethodAccount } from '../../models/payment-method-account';
import { DepositsPageActions } from '../../state/actions';
import { DepositAddEditCardComponent } from '../deposit-add-edit-card/deposit-add-edit-card.component';

@Component({
  selector: 'app-deposit-method-accounts-list',
  templateUrl: './deposit-method-accounts-list.component.html',
  styleUrls: ['./deposit-method-accounts-list.component.scss'],
})
export class DepositMethodAccountsListComponent implements OnInit {
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
  selection = new SelectionModel<PaymentMethodAccount>(false, []);

  constructor(
    private dialog: MatDialog,
    private store: Store,
    private fb: NonNullableFormBuilder
  ) {}

  ngOnInit(): void {
    this.selectCard().subscribe();
    this.accountField.setValue(this.accounts?.data[0]);
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
    this.dialog.open(DepositAddEditCardComponent, {
      width: '100%',
      data: {
        paymentMethod,
      },
    });
  }
}
