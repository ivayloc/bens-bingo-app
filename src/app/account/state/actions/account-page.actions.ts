import { createAction, props } from '@ngrx/store';
import { BingoHistoryRequest } from '../../models/bingo-history-request';
import { TransactionsHistoryRequest } from '../../models/transactions-history-request';

export const loadTransactionsHistory = createAction(
  '[Account Page] Load Transactions history',
  props<{ payload: TransactionsHistoryRequest }>()
);

export const loadGameHistory = createAction(
  '[Account Page] Load Bingo history',
  props<{ payload: BingoHistoryRequest }>()
);
