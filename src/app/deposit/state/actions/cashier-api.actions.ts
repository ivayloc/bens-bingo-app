import { createAction, props } from '@ngrx/store';
import { PaymentMethod } from 'src/app/shared/models/payment-method';
import { ConfirmedDepositResponse } from '../../models/confirmed-deposit-response';
import { DepositAccount } from '../../models/deposit-account';

export const getPaymentMethodsSuccess = createAction(
  '[Cashier/Deposits API] Load payment methods Success',
  props<{ paymentMethods: PaymentMethod[] }>()
);

export const getPaymentMethodsFailure = createAction(
  '[Cashier/Deposits API] Load payment methods Failure',
  props<{ error: string }>()
);
export const makeDepositSuccess = createAction(
  '[Cashier/Deposit API] Make a deposit Success',
  props<{ depositAccount: DepositAccount }>()
);

export const makeDepositFailure = createAction(
  '[Cashier/Deposit API] Make a deposit Failure',
  props<{ error: string }>()
);

export const depositAddAccountSuccess = createAction(
  '[Cashier/Deposit API] Add account to payment method Success',
  props<{ success: boolean }>()
);

export const depositAddAccountFailure = createAction(
  '[Cashier/Deposit API] Add account to payment method Failure',
  props<{ error: string }>()
);

export const depositUpdateAccountSuccess = createAction(
  '[Cashier/Deposit API] Update account to payment method Success',
  props<{ success: boolean }>()
);

export const depositUpdateAccountFailure = createAction(
  '[Cashier/Deposit API] Update account to payment method Failure',
  props<{ error: string }>()
);

export const updateUserDepositDetailsSuccess = createAction(
  '[Cashier/Deposit API] Update user details Success',
  props<{ success: boolean }>()
);

export const updateUserDepositDetailsFailure = createAction(
  '[Cashier/Deposit API] Update user details Failure',
  props<{ error: string }>()
);

export const confirmDepositSuccess = createAction(
  '[Cashier/Deposit API] Confirm deposit Success',
  props<{ confirmedDeposit: ConfirmedDepositResponse }>()
);

export const confirmDepositFailure = createAction(
  '[Cashier/Deposit API] Confirm deposit Failure',
  props<{ error: string }>()
);
