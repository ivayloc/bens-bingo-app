import { createAction } from '@ngrx/store';

export const loadPaymentMethods = createAction(
  '[Cashier/Deposits Page] Load payment methods'
);

export const loadCashOutMethods = createAction(
  '[Cashier/Withdrawal Page] Load cash-out methods'
);
