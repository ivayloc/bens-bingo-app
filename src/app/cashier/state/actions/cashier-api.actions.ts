import { createAction, props } from '@ngrx/store';
import { CashOutStatus } from '../../models/cash-out-status';
import { DepositLimits } from '../../models/deposit-limits';
import { PaymentMethod } from '../../models/payment-method';

export const getPaymentMethodsSuccess = createAction(
  '[Cashier/Deposits API] Load payment methods Success',
  props<{ paymentMethods: PaymentMethod[] }>()
);

export const getPaymentMethodsFailure = createAction(
  '[Cashier/Deposits API] Load payment methods Failure',
  props<{ error: string }>()
);

export const getCashOutMethodsSuccess = createAction(
  '[Cashier/Withdrawal API] Load cash-out methods Success',
  props<{ cashOutMethods: PaymentMethod[] }>()
);

export const getCashOutMethodsFailure = createAction(
  '[Cashier/Withdrawal API] Load cash-out methods Failure',
  props<{ error: string }>()
);

export const getCashOutStatusSuccess = createAction(
  '[Cashier/Withdrawal API] Get cash-out status Success',
  props<{ cashOutStatus: CashOutStatus }>()
);

export const getCashOutStatusFailure = createAction(
  '[Cashier/Withdrawal API] Get cash-out status Failure',
  props<{ error: string }>()
);

export const getCashOutDetailsSuccess = createAction(
  '[Cashier/Withdrawal API] Get cash-out details Success',
  props<{ cashOutStatus: CashOutStatus; cashOutMethods: PaymentMethod[] }>()
);

export const getCashOutDetailsFailure = createAction(
  '[Cashier/Withdrawal API] Get cash-out details Failure',
  props<{ error: string }>()
);

export const setDepositLimitSuccess = createAction(
  '[Cashier/Limits API] Set deposit limit Success',
  props<{ success: boolean }>()
);

export const setDepositLimitFailure = createAction(
  '[Cashier/Limits API] Set deposit limit Failure',
  props<{ error: string }>()
);

export const removeDepositLimitsSuccess = createAction(
  '[Cashier/Limits API] Remove deposit limits Success',
  props<{ success: boolean }>()
);

export const removeDepositLimitsFailure = createAction(
  '[Cashier/Limits API] Remove deposit limits Failure',
  props<{ error: string }>()
);

export const getDepositLimitsSuccess = createAction(
  '[Cashier/Limits API] Get deposit limits Success',
  props<{ depositLimits: DepositLimits }>()
);

export const getDepositLimitsFailure = createAction(
  '[Cashier/Limits API] Get deposit limits Failure',
  props<{ error: string }>()
);
export const redeemBonusCodeSuccess = createAction(
  '[Cashier/BonusCode API] Redeem bonus code Success',
  props<{ success: boolean }>()
);

export const redeemBonusCodeFailure = createAction(
  '[Cashier/BonusCode API] Redeem bonus code Failure',
  props<{ error: string }>()
);

export const makeDepositSuccess = createAction(
  '[Cashier/Deposit API] Make a deposit Success',
  props<{ success: boolean }>()
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
