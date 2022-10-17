import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DepositLimitsDuration } from '../../models/deposit-limits-duration';
import { selectDepositLimitsPlayerDuration } from '../../state';
import { CashierPageActions } from '../../state/actions';

@Component({
  selector: 'app-deposit-limit',
  templateUrl: './deposit-limit.component.html',
  styleUrls: ['./deposit-limit.component.scss'],
})
export class DepositLimitComponent implements OnInit {
  depositLimitForm = this.fb.group({
    sum: [null, Validators.required],
    duration: ['day', Validators.required],
  });

  public get depositLimitSumField(): UntypedFormControl {
    return this.depositLimitForm.get('sum') as UntypedFormControl;
  }

  getDepositLimitsPlayerDuration$ = new Observable<DepositLimitsDuration[]>();

  constructor(private store: Store, private fb: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.store.dispatch(CashierPageActions.getDepositLimits());
    this.getDepositLimitsPlayerDuration$ = this.store.select(
      selectDepositLimitsPlayerDuration
    );
  }

  setDepositLimit() {
    this.store.dispatch(
      CashierPageActions.setDepositLimit(this.depositLimitForm.value)
    );
    if (this.depositLimitForm.valid) {
      this.depositLimitForm.reset({
        duration: 'day',
        sum: null,
      });
    }
  }

  removeDepositLimits() {
    this.store.dispatch(CashierPageActions.removeDepositLimits());
  }
}
