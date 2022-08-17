import { MatTableDataSource } from '@angular/material/table';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from '../../state/app.states';
import { PaymentMethod } from '../models/payment-method';
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
  (state) => state.selectedPaymentMethodId
);

export const selectSelectedCashOutMethod = createSelector(
  selectCashierGamesState,
  selectSelectedPaymentMethod,
  (state, id) => {
    return state.cashOutMethods.find(
      (method) => method.id === id
    ) as PaymentMethod;
  }
);

export const selectSelectedDepositMethod = createSelector(
  selectCashierGamesState,
  selectSelectedPaymentMethod,
  (state, id) => {
    return state.paymentMethods.find(
      (method) => method.id === id
    ) as PaymentMethod;
  }
);

export const selectSelectedDepositMethodAccountMatData = createSelector(
  selectCashierGamesState,
  selectSelectedPaymentMethod,
  (state, id) => {
    const dataSource = state.paymentMethods.find(
      (method) => method.id === id
    )?.accounts;

    return new MatTableDataSource(dataSource);
  }
);

export const selectDepositLimitsPlayerDuration = createSelector(
  selectCashierGamesState,
  (state) => state.depositLimits?.playerEntries?.duration
);
