import { createAction, props } from '@ngrx/store';
import { UpdatedUserInfo } from 'src/app/account/models/updated-user-info';
import { DepositActionPayload } from '../../models/deposit-action-payload';
import { DepositAddAccountRequest } from '../../models/deposit-add-account-request';
import { DepositUpdateAccountRequest } from '../../models/deposit-update-account-request';

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

export const makeDeposit = createAction(
  '[Cashier/Deposits] Make a deposit',
  props<{
    payload: DepositActionPayload;
  }>()
);

export const depositUpdateAccount = createAction(
  '[Cashier/Deposits] Save account',
  props<{
    payload: DepositUpdateAccountRequest;
  }>()
);

export const depositAddAccount = createAction(
  '[Cashier/Deposits] Add account',
  props<{
    payload: DepositAddAccountRequest;
  }>()
);

export const updateUserDepositDetails = createAction(
  '[Cashier/Deposits] Update user details',
  props<{
    payload: UpdatedUserInfo;
  }>()
);

export const confirmDeposit = createAction(
  '[Cashier/Deposits] Confirm deposit'
);
