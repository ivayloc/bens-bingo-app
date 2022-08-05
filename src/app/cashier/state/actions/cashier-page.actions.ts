import { createAction, props } from '@ngrx/store';

export const loadPaymentMethods = createAction(
  '[Cashier/Deposits Page] Load payment methods'
);

export const loadCashOutMethods = createAction(
  '[Cashier/Withdrawal Page] Load cash-out methods'
);

export const loadCashOutStatus = createAction(
  '[Cashier/Withdrawal Page] Load cash-out status'
);

export const loadCashOutDetails = createAction(
  '[Cashier/Withdrawal Page] Load cash-out details'
);

export const setSelectedPaymentMethod = createAction(
  '[Cashier Page] Set selected payment method',
  props<{ id: number }>()
);
