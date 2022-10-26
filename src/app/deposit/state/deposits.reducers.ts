import { createReducer, on } from '@ngrx/store';
import { PaymentMethod } from '../../shared/models/payment-method';
import { ConfirmedDepositResponse } from '../models/confirmed-deposit-response';
import { DepositAccount } from '../models/deposit-account';
import { DepositSteps } from '../models/deposit-steps.enum';
import { PaymentMethodAccount } from '../models/payment-method-account';
import { DepositsApiActions, DepositsPageActions } from './actions';

export interface DepositsState {
  paymentMethods: PaymentMethod[];
  depositAccount: DepositAccount;
  selectedAccount: PaymentMethodAccount;
  confirmedDeposit: ConfirmedDepositResponse;
  currentDepositStep: DepositSteps;
  paymentMethod: PaymentMethod;
  error: string;
}

const initialState: DepositsState = {
  paymentMethods: [],
  depositAccount: {} as DepositAccount,
  selectedAccount: {} as PaymentMethodAccount,
  confirmedDeposit: {} as ConfirmedDepositResponse,
  currentDepositStep: DepositSteps.SelectDepositAmount,
  paymentMethod: {} as PaymentMethod,
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
    DepositsApiActions.makeDepositSuccess,
    (state, { depositAccount }): DepositsState => {
      return {
        ...state,
        currentDepositStep: DepositSteps.ConfirmDepositDetails,
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
    DepositsPageActions.depositSelectedAccount,
    (state, { selectedAccount }): DepositsState => {
      return {
        ...state,
        selectedAccount,
      };
    }
  ),
  on(
    DepositsApiActions.confirmDepositSuccess,
    (state, { confirmedDeposit }): DepositsState => {
      return {
        ...state,
        confirmedDeposit,
        currentDepositStep: DepositSteps.DepositReceipt,
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
  ),
  on(
    DepositsPageActions.submitDepositAmount,
    (state, action): DepositsState => {
      return {
        ...state,
        currentDepositStep: DepositSteps.ChooseDepositCard,
        error: '',
      };
    }
  ),
  on(
    DepositsPageActions.selectPaymentMethod,
    (state, { paymentMethod }): DepositsState => {
      return {
        ...state,
        currentDepositStep: DepositSteps.SelectDepositAmount,
        error: '',
      };
    }
  )
);
