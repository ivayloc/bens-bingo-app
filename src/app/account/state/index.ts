import { MatTableDataSource } from '@angular/material/table';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from '../../state/app.states';
import { AccountState } from './account.reducers';

export interface State extends AppState.State {
  account: AccountState;
}

const getAccountState = createFeatureSelector<AccountState>('account');

export const getTransactionsHistory = createSelector(
  getAccountState,
  (state) => new MatTableDataSource(state.transactionsHistory)
);
