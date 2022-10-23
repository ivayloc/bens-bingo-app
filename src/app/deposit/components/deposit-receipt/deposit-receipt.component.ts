import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PaymentMethod } from 'src/app/shared/models/payment-method';
import { DepositReceipt } from '../../models/deposit-receipt';
import { selectDepositReceipt } from '../../state';

@Component({
  selector: 'app-deposit-receipt',
  templateUrl: './deposit-receipt.component.html',
  styleUrls: ['./deposit-receipt.component.scss'],
})
export class DepositReceiptComponent implements OnInit {
  @Input() paymentMethod!: PaymentMethod;
  getDepositReceipt$ = new Observable<DepositReceipt>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getDepositReceipt$ = this.store.select(selectDepositReceipt);
  }
  printReceipt() {
    window.print();
  }
}
