import { createReducer, on } from '@ngrx/store';

import { Transaction } from '../models/transaction';
import { AccountApiActions } from './actions';

export interface AccountState {
  transactionsHistory: Transaction[];
  error: any;
}

const initialState: AccountState = {
  transactionsHistory: [],
  error: {},
};

export const accountReducer = createReducer<AccountState>(
  initialState,
  on(
    AccountApiActions.loadAccountDetailsSuccess,
    (state, { transactionsHistory }): AccountState => {
      return {
        ...state,
        transactionsHistory,
        error: '',
      };
    }
  ),
  on(
    AccountApiActions.loadAccountDetailsFailure,
    (state, action): AccountState => {
      return {
        ...state,
        transactionsHistory: [],
        error: action.error,
      };
    }
  )
);
