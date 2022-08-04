import { createReducer, on } from '@ngrx/store';
import { PaymentMethod } from '../models/payment-method';
import { CashierApiActions } from './actions';

export interface CashierState {
  paymentMethods: PaymentMethod[];
  cashOutMethods: PaymentMethod[];
  error: string;
}

const initialState: CashierState = {
  paymentMethods: [],
  cashOutMethods: [],
  error: '',
};

export const cashierReducer = createReducer<CashierState>(
  initialState,
  on(
    CashierApiActions.loadPaymentMethodsSuccess,
    (state, { paymentMethods }): CashierState => {
      return {
        ...state,
        paymentMethods,
        error: '',
      };
    }
  ),
  on(
    CashierApiActions.loadPaymentMethodsFailure,
    (state, action): CashierState => {
      return {
        ...state,
        paymentMethods: [],
        error: action.error,
      };
    }
  ),
  on(
    CashierApiActions.loadCashOutMethodsSuccess,
    (state, { cashOutMethods }): CashierState => {
      return {
        ...state,
        cashOutMethods,
        error: '',
      };
    }
  ),
  on(
    CashierApiActions.loadCashOutMethodsFailure,
    (state, action): CashierState => {
      return {
        ...state,
        cashOutMethods: [],
        error: action.error,
      };
    }
  )
);
