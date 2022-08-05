import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from '../../state/app.states';
import { CashierState } from './cashier.reducers';

export interface State extends AppState.State {
  cashierGames: CashierState;
}

const selectCashierGamesState = createFeatureSelector<CashierState>('cashier');

export const selectPaymentMethods = createSelector(
  selectCashierGamesState,
  (state) => state.paymentMethods
);

export const selectCashOutMethods = createSelector(
  selectCashierGamesState,
  (state) => state.cashOutMethods
);

export const selectCashOutStatus = createSelector(
  selectCashierGamesState,
  (state) => state.cashOutStatus
);

export const selectSelectedPaymentMethod = createSelector(
  selectCashierGamesState,
  (state) => state.cashOutStatus
);
