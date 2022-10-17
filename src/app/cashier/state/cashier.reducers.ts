import { createReducer, on } from '@ngrx/store';
import { CashOutStatus } from '../models/cash-out-status';
import { ConfirmedDepositResponse } from '../models/confirmed-deposit-response';
import { DepositAccount } from '../models/deposit-account';
import { DepositLimits } from '../models/deposit-limits';
import { PaymentMethod } from '../models/payment-method';
import { PaymentMethodAccount } from '../models/payment-method-account';
import { CashierApiActions, CashierPageActions } from './actions';

export interface CashierState {
  paymentMethods: PaymentMethod[];
  cashOutMethods: PaymentMethod[];
  cashOutStatus: CashOutStatus;
  selectedPaymentMethodId: number;
  depositLimits: DepositLimits;
  depositAccount: DepositAccount;
  depositSelectedCard: PaymentMethodAccount;
  confirmedDeposit: ConfirmedDepositResponse;
  error: string;
}

const initialState: CashierState = {
  paymentMethods: [],
  cashOutMethods: [],
  cashOutStatus: {} as CashOutStatus,
  selectedPaymentMethodId: 0,
  depositLimits: {} as DepositLimits,
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
  ),
  on(
    CashierApiActions.getDepositLimitsSuccess,
    (state, { depositLimits }): CashierState => {
      return {
        ...state,
        depositLimits,
        error: '',
      };
    }
  ),
  on(
    CashierApiActions.getDepositLimitsFailure,
    (state, action): CashierState => {
      return {
        ...state,
        depositLimits: {} as DepositLimits,
        error: action.error,
      };
    }
  ),
  on(
    CashierApiActions.redeemBonusCodeSuccess,
    (state, { success }): CashierState => {
      return {
        ...state,
        error: '',
      };
    }
  ),
  on(
    CashierApiActions.redeemBonusCodeFailure,
    (state, action): CashierState => {
      return {
        ...state,
        error: action.error,
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
