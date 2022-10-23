import { MatTableDataSource } from '@angular/material/table';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectUserInfoBalance } from 'src/app/state';
import { PaymentMethod } from '../../shared/models/payment-method';
import * as AppState from '../../state/app.states';
import { DepositsState } from './deposits.reducers';

export interface State extends AppState.State {
  deposits: DepositsState;
}

const selectDepositsState = createFeatureSelector<DepositsState>('deposits');

export const selectPaymentMethods = createSelector(
  selectDepositsState,
  (state) => state.paymentMethods
);

export const selectSelectedPaymentMethod = createSelector(
  selectDepositsState,
  (state) => state.selectedPaymentMethodId
);

export const selectSelectedDepositMethod = createSelector(
  selectDepositsState,
  selectSelectedPaymentMethod,
  (state, id) => {
    return state.paymentMethods.find(
      (method) => method.id === id
    ) as PaymentMethod;
  }
);

export const selectSelectedDepositMethodAccountMatData = createSelector(
  selectDepositsState,
  selectSelectedPaymentMethod,
  (state, id) => {
    const dataSource = state.paymentMethods.find(
      (method) => method.id === id
    )?.accounts;

    return new MatTableDataSource(dataSource);
  }
);

export const selectTransactionId = createSelector(
  selectDepositsState,
  (state) => state.depositAccount.transactionId
);

export const selectDepositReceipt = createSelector(
  selectDepositsState,
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
