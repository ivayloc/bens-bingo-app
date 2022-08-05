import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CashOutStatus } from '../../models/cash-out-status';
import { selectSelectedPaymentMethod } from '../../state';

@Component({
  selector: 'app-request-withdrawal',
  templateUrl: './request-withdrawal.component.html',
  styleUrls: ['./request-withdrawal.component.scss'],
})
export class RequestWithdrawalComponent implements OnInit {
  getSelectedPaymentMethod = new Observable<CashOutStatus>();
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getSelectedPaymentMethod = this.store.select(
      selectSelectedPaymentMethod
    );
  }
}
