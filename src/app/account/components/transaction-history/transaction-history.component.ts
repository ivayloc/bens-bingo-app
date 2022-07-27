import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { Transaction } from '../../models/transaction';
import { getTransactionsHistory, State } from '../../state';
import { AccountPageActions } from '../../state/actions';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss'],
})
export class TransactionHistoryComponent implements OnInit {
  searchTransactionsForm = this.fb.group({
    startdate: new Date('2022-03-31T21:00:00.000Z'),
    enddate: new Date('2022-05-31T21:00:00.000Z'),
    type: '',
  });
  displayedColumns = [
    'id',
    'date',
    'amount',
    'method',
    'type',
    'action',
    'transactionid',
    'result',
    // 'merchant_transactionid',
    // 'currency',
  ];
  getTransactionsHistory$ = new Observable<MatTableDataSource<Transaction>>();
  @ViewChild(MatSort) sort!: MatSort;
  showTable = false;

  constructor(private store: Store<State>, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getTransactionsHistory$ = this.store
      .select(getTransactionsHistory)
      .pipe(
        map((matTableDataSource) => {
          matTableDataSource.sort = this.sort;
          return matTableDataSource;
        })
      );
  }

  getTransactionsHistory() {
    this.store.dispatch(
      AccountPageActions.loadTransactionsHistory({
        payload: this.searchTransactionsForm.value,
      })
    );
    this.showTable = true;
  }
}
