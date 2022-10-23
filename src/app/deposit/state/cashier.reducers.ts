import { createReducer, on } from '@ngrx/store';
import { PaymentMethod } from '../../shared/models/payment-method';
import { ConfirmedDepositResponse } from '../models/confirmed-deposit-response';
import { DepositAccount } from '../models/deposit-account';
import { PaymentMethodAccount } from '../models/payment-method-account';
import { CashierApiActions, CashierPageActions } from './actions';

export interface CashierState {
  paymentMethods: PaymentMethod[];
  selectedPaymentMethodId: number;
  depositAccount: DepositAccount;
  depositSelectedCard: PaymentMethodAccount;
  confirmedDeposit: ConfirmedDepositResponse;
  error: string;
}

const initialState: CashierState = {
  paymentMethods: [],
  selectedPaymentMethodId: 0,
  depositAccount: {} as DepositAccount,
  depositSelectedCard: {} as PaymentMethodAccount,
  confirmedDeposit: {} as ConfirmedDepositResponse,
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
    CashierPageActions.setSelectedDepositMethod,
    (state, { id }): CashierState => {
      return {
        ...state,
        selectedPaymentMethodId: id,
        error: '',
      };
    }
  ),
  on(
    CashierApiActions.makeDepositSuccess,
    (state, { depositAccount }): CashierState => {
      return {
        ...state,
        depositAccount,
        error: '',
      };
    }
  ),
  on(CashierApiActions.makeDepositFailure, (state, action): CashierState => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(
    CashierPageActions.depositSelectedCard,
    (state, { selectedCard }): CashierState => {
      return {
        ...state,
        depositSelectedCard: selectedCard,
      };
    }
  ),
  on(
    CashierApiActions.confirmDepositSuccess,
    (state, { confirmedDeposit }): CashierState => {
      return {
        ...state,
        confirmedDeposit,
        error: '',
      };
    }
  ),
  on(CashierApiActions.confirmDepositFailure, (state, action): CashierState => {
    return {
      ...state,
      confirmedDeposit: {} as ConfirmedDepositResponse,
      error: action.error,
    };
  })
);
