import { createReducer, on } from '@ngrx/store';
import { GameHistory } from '../models/game-history';

import { Transaction } from '../models/transaction';
import { AccountApiActions } from './actions';

export interface AccountState {
  transactionsHistory: Transaction[];
  gameHistory: GameHistory[];
  error: any;
}

const initialState: AccountState = {
  transactionsHistory: [],
  gameHistory: [],
  error: {},
};

export const accountReducer = createReducer<AccountState>(
  initialState,
  on(
    AccountApiActions.loadTransactionsHistorySuccess,
    (state, { transactionsHistory }): AccountState => {
      return {
        ...state,
        transactionsHistory,
        error: '',
      };
    }
  ),
  on(
    AccountApiActions.loadTransactionsHistoryFailure,
    (state, action): AccountState => {
      return {
        ...state,
        transactionsHistory: [],
        error: action.error,
      };
    }
  ),
  on(
    AccountApiActions.loadGameHistorySuccess,
    (state, { gameHistory }): AccountState => {
      return {
        ...state,
        gameHistory,
        error: '',
      };
    }
  ),
  on(
    AccountApiActions.loadGameHistoryFailure,
    (state, action): AccountState => {
      return {
        ...state,
        gameHistory: [],
        error: action.error,
      };
    }
  )
);
