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
  '[Deposits/Deposit API] Make a deposit Success',
  props<{ depositAccount: DepositAccount }>()
);

export const makeDepositFailure = createAction(
  '[Deposits/Deposit API] Make a deposit Failure',
  props<{ error: string }>()
);

export const depositAddAccountSuccess = createAction(
  '[Deposits/Deposit API] Add account to payment method Success',
  props<{ success: boolean }>()
);

export const depositAddAccountFailure = createAction(
  '[Deposits/Deposit API] Add account to payment method Failure',
  props<{ error: string }>()
);

export const depositAddNetellerAccountSuccess = createAction(
  '[Deposits/Deposit API] Add Neteller account to payment method Success',
  props<{ success: boolean }>()
);

export const depositAddNetellerAccountFailure = createAction(
  '[Deposits/Deposit API] Add Neteller account to payment method Failure',
  props<{ error: string }>()
);

export const depositUpdateAccountSuccess = createAction(
  '[Deposits/Deposit API] Update account to payment method Success',
  props<{ success: boolean }>()
);

export const depositUpdateAccountFailure = createAction(
  '[Deposits/Deposit API] Update account to payment method Failure',
  props<{ error: string }>()
);

export const depositUpdateNetellerAccountSuccess = createAction(
  '[Deposits/Deposit API] Update Neteller account to payment method Success',
  props<{ success: boolean }>()
);

export const depositUpdateNetellerAccountFailure = createAction(
  '[Deposits/Deposit API] Update Neteller account to payment method Failure',
  props<{ error: string }>()
);

export const updateUserDepositDetailsSuccess = createAction(
  '[Deposits/Deposit API] Update user details Success',
  props<{ success: boolean }>()
);

export const updateUserDepositDetailsFailure = createAction(
  '[Deposits/Deposit API] Update user details Failure',
  props<{ error: string }>()
);

export const confirmDepositSuccess = createAction(
  '[Deposits/Deposit API] Confirm deposit Success',
  props<{ confirmedDeposit: ConfirmedDepositResponse }>()
);

export const confirmDepositFailure = createAction(
  '[Deposits/Deposit API] Confirm deposit Failure',
  props<{ error: string }>()
);
