import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from '../../state/app.states';
import { CashierState } from './cashier.reducers';

export interface State extends AppState.State {
  cashierGames: CashierState;
}

const getCashierGamesState = createFeatureSelector<CashierState>('cashier');

export const getPaymentMethods = createSelector(
  getCashierGamesState,
  (state) => state.paymentMethods
);
