import { createAction, props } from '@ngrx/store';
import { UpdatedUserInfo } from 'src/app/account/models/updated-user-info';
import { PaymentMethod } from 'src/app/shared/models/payment-method';
import { DepositActionPayload } from '../../models/deposit-action-payload';
import { DepositAddAccountRequest } from '../../models/deposit-add-account-request';
import { DepositUpdateAccountNetellerRequest } from '../../models/deposit-update-account-neteller-request';
import { DepositUpdateAccountRequest } from '../../models/deposit-update-account-request';
import { PaymentMethodAccount } from '../../models/payment-method-account';

export const loadPaymentMethods = createAction(
  '[Cashier/Deposits Page] Load payment methods'
);

export const selectPaymentMethod = createAction(
  '[Deposits Page] Set selected deposit method',
  props<{ paymentMethod: PaymentMethod }>()
);

export const makeDeposit = createAction(
  '[Cashier/Deposits] Make a deposit',
  props<{
    payload: DepositActionPayload;
  }>()
);

export const depositUpdateAccount = createAction(
  '[Cashier/Deposits] Update account',
  props<{
    payload: DepositUpdateAccountRequest;
  }>()
);

export const depositUpdateNetellerAccount = createAction(
  '[Cashier/Deposits] Update Neteller account',
  props<{
    payload: DepositUpdateAccountNetellerRequest;
  }>()
);

export const depositAddNetellerAccount = createAction(
  '[Cashier/Deposits] Add Neteller account',
  props<{
    payload: DepositUpdateAccountNetellerRequest;
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

export const submitDepositAmount = createAction(
  '[Cashier/Deposits] Submit deposit amount'
);

export const depositSelectedCard = createAction(
  '[Cashier/Deposits] Credit card is selected',
  props<{
    selectedCard: PaymentMethodAccount;
  }>()
);
