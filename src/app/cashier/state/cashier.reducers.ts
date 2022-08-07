import { createReducer, on } from '@ngrx/store';
import { CashOutStatus } from '../models/cash-out-status';
import { PaymentMethod } from '../models/payment-method';
import { CashierApiActions, CashierPageActions } from './actions';

export interface CashierState {
  paymentMethods: PaymentMethod[];
  cashOutMethods: PaymentMethod[];
  cashOutStatus: CashOutStatus;
  selectedPaymentMethodId: number;
  error: string;
}

const initialState: CashierState = {
  paymentMethods: [],
  cashOutMethods: [],
  cashOutStatus: {} as CashOutStatus,
  selectedPaymentMethodId: 0,
  error: '',
};

export const cashierReducer = createReducer<CashierState>(
  initialState,
  on(
    CashierApiActions.getPaymentMethodsSuccess,
    (state, { paymentMethods }): CashierState => {
      return {
        ...state,
        paymentMethods,
        error: '',
      };
    }
  ),
  on(
    CashierApiActions.getPaymentMethodsFailure,
    (state, action): CashierState => {
      return {
        ...state,
        paymentMethods: [],
        error: action.error,
      };
    }
  ),
  on(
    CashierApiActions.getCashOutMethodsSuccess,
    (state, { cashOutMethods }): CashierState => {
      return {
        ...state,
        cashOutMethods,
        error: '',
      };
    }
  ),
  on(
    CashierApiActions.getCashOutMethodsFailure,
    (state, action): CashierState => {
      return {
        ...state,
        cashOutMethods: [],
        error: action.error,
      };
    }
  ),
  on(
    CashierApiActions.getCashOutStatusSuccess,
    (state, { cashOutStatus }): CashierState => {
      return {
        ...state,
        cashOutStatus,
        error: '',
      };
    }
  ),
  on(
    CashierApiActions.getCashOutStatusFailure,
    (state, action): CashierState => {
      return {
        ...state,
        cashOutStatus: {} as CashOutStatus,
        error: action.error,
      };
    }
  ),
  on(
    CashierApiActions.getCashOutDetailsSuccess,
    (state, { cashOutStatus, cashOutMethods }): CashierState => {
      return {
        ...state,
        cashOutStatus,
        cashOutMethods,
        error: '',
      };
    }
  ),
  on(
    CashierApiActions.getCashOutDetailsFailure,
    (state, action): CashierState => {
      return {
        ...state,
        cashOutMethods: [],
        cashOutStatus: {} as CashOutStatus,
        error: action.error,
      };
    }
  ),
  on(
    CashierPageActions.setSelectedDepositMethod,
    CashierPageActions.setSelectedCashOutMethod,
    (state, { id }): CashierState => {
      return {
        ...state,
        selectedPaymentMethodId: id,
        error: '',
      };
    }
  )
);