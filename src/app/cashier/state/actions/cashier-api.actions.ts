import { createAction, props } from '@ngrx/store';
import { CashOutStatus } from '../../models/cash-out-status';
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
