import { createAction, props } from '@ngrx/store';

export const loadCashOutMethods = createAction(
  '[Cashier/Withdrawal Page] Load cash-out methods'
);

export const loadCashOutStatus = createAction(
  '[Cashier/Withdrawal Page] Load cash-out status'
);

export const loadCashOutDetails = createAction(
  '[Cashier/Withdrawal Page] Load cash-out details'
);

export const setSelectedCashOutMethod = createAction(
  '[Cashier Page] Set selected cash-out method',
  props<{ id: number }>()
);

export const setDepositLimit = createAction(
  '[Cashier/Limits Page] Set deposit limit',
  props<{ duration: string; sum: number }>()
);

export const removeDepositLimits = createAction(
  '[Cashier/Limits Page] Remove deposit limits'
);

export const getDepositLimits = createAction(
  '[Cashier/Limits Page] Get deposit limits'
);

export const redeemBonusCode = createAction(
  '[Cashier/BonusCode Page] Redeem bonus code',
  props<{ code: string }>()
);
