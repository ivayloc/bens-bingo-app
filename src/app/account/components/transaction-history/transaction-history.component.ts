import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss'],
})
export class TransactionHistoryComponent {
  searchTransactionsForm = this.fb.group({
    enddate: '2022-06-29',
    numrecords: 100,
    startdate: '2022-04-01',
    type: '',
  });

  constructor(private fb: FormBuilder) {}
}
