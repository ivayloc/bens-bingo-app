import { createAction, props } from '@ngrx/store';
import { UpdatedUserInfo } from 'src/app/account/models/updated-user-info';
import { DepositActionPayload } from '../../models/deposit-action-payload';
import { DepositAddAccountRequest } from '../../models/deposit-add-account-request';
import { DepositUpdateAccountRequest } from '../../models/deposit-update-account-request';
import { PaymentMethodAccount } from '../../models/payment-method-account';

export const loadPaymentMethods = createAction(
  '[Cashier/Deposits Page] Load payment methods'
);

export const setSelectedDepositMethod = createAction(
  '[Cashier Page] Set selected deposit method',
  props<{ id: number }>()
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

export const depositSelectedCard = createAction(
  '[Cashier/Deposits] Credit card is selected',
  props<{
    selectedCard: PaymentMethodAccount;
  }>()
);
