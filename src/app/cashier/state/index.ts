import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PaymentMethod } from 'src/app/shared/models/payment-method';
import * as AppState from '../../state/app.states';
import { CashierState } from './cashier.reducers';

export interface State extends AppState.State {
  cashierGames: CashierState;
}

const selectCashierState = createFeatureSelector<CashierState>('cashier');

export const selectCashOutMethods = createSelector(
  selectCashierState,
  (state) => state.cashOutMethods
);

export const selectCashOutStatus = createSelector(
  selectCashierState,
  (state) => state.cashOutStatus
);

export const selectSelectedPaymentMethod = createSelector(
  selectCashierState,
  (state) => state.selectedPaymentMethodId
);

export const selectSelectedCashOutMethod = createSelector(
  selectCashierState,
  selectSelectedPaymentMethod,
  (state, id) => {
    return state.cashOutMethods.find(
      (method) => method.id === id
    ) as PaymentMethod;
  }
);

export const selectDepositLimitsPlayerDuration = createSelector(
  selectCashierState,
  (state) => state.depositLimits?.playerEntries?.duration
);
