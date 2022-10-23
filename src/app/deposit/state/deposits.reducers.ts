import { createReducer, on } from '@ngrx/store';
import { PaymentMethod } from '../../shared/models/payment-method';
import { ConfirmedDepositResponse } from '../models/confirmed-deposit-response';
import { DepositAccount } from '../models/deposit-account';
import { PaymentMethodAccount } from '../models/payment-method-account';
import { DepositsApiActions, DepositsPageActions } from './actions';

export interface DepositsState {
  paymentMethods: PaymentMethod[];
  selectedPaymentMethodId: number;
  depositAccount: DepositAccount;
  depositSelectedCard: PaymentMethodAccount;
  confirmedDeposit: ConfirmedDepositResponse;
  error: string;
}

const initialState: DepositsState = {
  paymentMethods: [],
  selectedPaymentMethodId: 0,
  depositAccount: {} as DepositAccount,
  depositSelectedCard: {} as PaymentMethodAccount,
  confirmedDeposit: {} as ConfirmedDepositResponse,
  error: '',
};

export const depositsReducer = createReducer<DepositsState>(
  initialState,
  on(
    DepositsApiActions.getPaymentMethodsSuccess,
    (state, { paymentMethods }): DepositsState => {
      return {
        ...state,
        paymentMethods,
        error: '',
      };
    }
  ),
  on(
    DepositsApiActions.getPaymentMethodsFailure,
    (state, action): DepositsState => {
      return {
        ...state,
        paymentMethods: [],
        error: action.error,
      };
    }
  ),

  on(
    DepositsPageActions.setSelectedDepositMethod,
    (state, { id }): DepositsState => {
      return {
        ...state,
        selectedPaymentMethodId: id,
        error: '',
      };
    }
  ),
  on(
    DepositsApiActions.makeDepositSuccess,
    (state, { depositAccount }): DepositsState => {
      return {
        ...state,
        depositAccount,
        error: '',
      };
    }
  ),
  on(DepositsApiActions.makeDepositFailure, (state, action): DepositsState => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(
    DepositsPageActions.depositSelectedCard,
    (state, { selectedCard }): DepositsState => {
      return {
        ...state,
        depositSelectedCard: selectedCard,
      };
    }
  ),
  on(
    DepositsApiActions.confirmDepositSuccess,
    (state, { confirmedDeposit }): DepositsState => {
      return {
        ...state,
        confirmedDeposit,
        error: '',
      };
    }
  ),
  on(
    DepositsApiActions.confirmDepositFailure,
    (state, action): DepositsState => {
      return {
        ...state,
        confirmedDeposit: {} as ConfirmedDepositResponse,
        error: action.error,
      };
    }
  )
);
