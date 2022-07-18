import { createAction, props } from '@ngrx/store';
import { GameHistory } from '../../models/game-history';
import { Transaction } from '../../models/transaction';
import { UserInfo } from '../../models/user-info';

export const loadTransactionsHistorySuccess = createAction(
  '[Account API] Load transaction history  SUCCESS',
  props<{ transactionsHistory: Transaction[] }>()
);

export const loadTransactionsHistoryFailure = createAction(
  '[Account API] Load transaction history FAILURE',
  props<{ error: string }>()
);

export const loadGameHistorySuccess = createAction(
  '[Account API] Load bingo history SUCCESS',
  props<{ gameHistory: GameHistory[] }>()
);

export const loadGameHistoryFailure = createAction(
  '[Account API] Load bingo history FAILURE',
  props<{ error: string }>()
);

export const loadUserInfoSuccess = createAction(
  '[Account API] Load user info SUCCESS',
  props<{ userInfo: UserInfo }>()
);

export const loadUserInfoFailure = createAction(
  '[Account API] Load user info FAILURE',
  props<{ error: string }>()
);
