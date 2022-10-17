import { MatTableDataSource } from '@angular/material/table';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectUserInfoBalance } from 'src/app/state';
import * as AppState from '../../state/app.states';
import { PaymentMethod } from '../models/payment-method';
import { CashierState } from './cashier.reducers';

export interface State extends AppState.State {
  cashierGames: CashierState;
}

const selectCashierState = createFeatureSelector<CashierState>('cashier');

export const selectPaymentMethods = createSelector(
  selectCashierState,
  (state) => state.paymentMethods
);

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

export const selectSelectedDepositMethod = createSelector(
  selectCashierState,
  selectSelectedPaymentMethod,
  (state, id) => {
    return state.paymentMethods.find(
      (method) => method.id === id
    ) as PaymentMethod;
  }
);

export const selectSelectedDepositMethodAccountMatData = createSelector(
  selectCashierState,
  selectSelectedPaymentMethod,
  (state, id) => {
    const dataSource = state.paymentMethods.find(
      (method) => method.id === id
    )?.accounts;

    return new MatTableDataSource(dataSource);
  }
);

export const selectDepositLimitsPlayerDuration = createSelector(
  selectCashierState,
  (state) => state.depositLimits?.playerEntries?.duration
);

export const selectTransactionId = createSelector(
  selectCashierState,
  (state) => state.depositAccount.transactionId
);

export const selectDepositReceipt = createSelector(
  selectCashierState,
  selectUserInfoBalance,
  (state, userBalance) => {
    return {
      amount: state.confirmedDeposit.amount,
      date: state.confirmedDeposit.details?.items[1].date,
      status: state.confirmedDeposit.latest_result,
      transactionId: state.confirmedDeposit.id,
      totalCash: userBalance.balance?.cash,
      currency: state.depositAccount.currency,
      trackId: state.depositAccount.trackId,
    };
  }
);
