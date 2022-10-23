import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { delay, Observable, tap } from 'rxjs';
import { PaymentMethod } from 'src/app/shared/models/payment-method';
import { DepositSteps } from '../../models/deposit-steps.enum';
import { PaymentMethodAccount } from '../../models/payment-method-account';
import {
  selectCurrentDepositStep,
  selectSelectedDepositMethod,
  selectSelectedDepositMethodAccountMatData,
} from '../../state';
import { DepositsPageActions } from '../../state/actions';

@Component({
  selector: 'app-deposit-select-card',
  templateUrl: './deposit-select-card.component.html',
  styleUrls: ['./deposit-select-card.component.scss'],
})
export class DepositSelectCardComponent implements OnInit, AfterViewInit {
  @ViewChild('scrollToAnchor') scrollToAnchor!: ElementRef<HTMLDivElement>;
  depositSteps = DepositSteps;
  depositForm = this.fb.group({
    amount: ['', Validators.required],
    cvv: ['', Validators.required],
    account: ['', Validators.required],
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

  getSelectedDepositMethod$ = new Observable<PaymentMethod | undefined>();
  getCurrentDepositStep$ = new Observable<DepositSteps>();

  constructor(private store: Store, private fb: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.getSelectedDepositMethod$ = this.store
      .select(selectSelectedDepositMethod)
      .pipe(
        tap((paymentMethod) => {
          this.depositAmountField.setValue(paymentMethod?.default);
        })
      );

    this.getSelectedDepositMethodAccounts$ = this.store
      .select(selectSelectedDepositMethodAccountMatData)
      .pipe(
        tap((paymentAccounts) => {
          this.accountField.setValue(paymentAccounts.data[0]);
        })
      );
  }

  ngAfterViewInit(): void {
    this.getCurrentDepositStep$ = this.store
      .select(selectCurrentDepositStep)
      .pipe(
        delay(0),
        tap((depositStep) => {
          if (depositStep === DepositSteps.ConfirmDepositDetails) {
            this.depositAmountField.disable();
          }
          if (depositStep !== DepositSteps.SelectDepositAmount) {
            setTimeout(() => {
              this.scrollToAnchor.nativeElement.scrollIntoView();
            }, 300);
          }
        })
      );
  }

  submitDepositAmount() {
    this.store.dispatch(DepositsPageActions.submitDepositAmount());
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

  confirmDeposit() {
    this.store.dispatch(DepositsPageActions.confirmDeposit());
  }
}
