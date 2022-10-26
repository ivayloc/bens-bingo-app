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
import { Store } from '@ngrx/store';
import { delay, Observable, tap } from 'rxjs';
import { PaymentMethod } from 'src/app/shared/models/payment-method';
import { PaymentMethodTypes } from 'src/app/shared/models/payment-method-types';
import { DepositActionPayload } from '../../models/deposit-action-payload';
import { DepositSteps } from '../../models/deposit-steps.enum';
import {
  selectCurrentDepositStep,
  selectSelectedAccountId,
  selectSelectedDepositMethod,
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
  paymentMethodTypes = PaymentMethodTypes;

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

  getSelectedDepositMethod$ = new Observable<PaymentMethod | undefined>();
  getCurrentDepositStep$ = new Observable<DepositSteps>();
  getSelectedAccountId$ = new Observable<number>();

  constructor(private store: Store, private fb: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.getSelectedDepositMethod$ = this.store
      .select(selectSelectedDepositMethod)
      .pipe(
        tap((paymentMethod) => {
          this.depositAmountField.setValue(paymentMethod?.default);
        })
      );

    this.getSelectedAccountId$ = this.store.select(selectSelectedAccountId);
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

  submitDepositAmount(paymentMethod: PaymentMethod) {
    // if (paymentMethod.accounts?.length) {

    //   this.store.dispatch(DepositsPageActions.submitDepositAmount());
    // }
    this.store.dispatch(DepositsPageActions.submitDepositAmount());
  }

  submitDeposit(processorid: number, accountId?: number) {
    const payload: DepositActionPayload = {
      processorid,
      accountid: accountId,
      amount: this.depositAmountField.value,
    };

    if (this.cvvField.value) {
      payload.cvv = this.cvvField.value;
    }

    this.store.dispatch(DepositsPageActions.makeDeposit({ payload }));
  }
}
