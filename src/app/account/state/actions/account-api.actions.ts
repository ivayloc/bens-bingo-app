import { createAction, props } from '@ngrx/store';
import { GameHistory } from '../../models/game-history';
import { Transaction } from '../../models/transaction';

export const loadTransactionsHistorySuccess = createAction(
  '[Account API] Load Transaction History  Success',
  props<{ transactionsHistory: Transaction[] }>()
);

export const loadTransactionsHistoryFailure = createAction(
  '[Account API] Load Transaction History Failure',
  props<{ error: string }>()
);

export const loadGameHistorySuccess = createAction(
  '[Account API] Load Bingo History Success',
  props<{ gameHistory: GameHistory[] }>()
);

export const loadGameHistoryFailure = createAction(
  '[Account API] Load Bingo History Failure',
  props<{ error: string }>()
);
