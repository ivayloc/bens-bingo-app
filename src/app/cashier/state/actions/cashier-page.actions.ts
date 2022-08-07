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

export const setSelectedDepositMethod = createAction(
  '[Cashier Page] Set selected deposit method',
  props<{ id: number }>()
);

export const setSelectedCashOutMethod = createAction(
  '[Cashier Page] Set selected cash-out method',
  props<{ id: number }>()
);
