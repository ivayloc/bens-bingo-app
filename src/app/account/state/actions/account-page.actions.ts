import { createAction, props } from '@ngrx/store';
import { TransactionsHistoryRequest } from '../../models/transactions-history-request';

export const loadAccountDetails = createAction(
  '[Account Page] Load Transactions history',
  props<TransactionsHistoryRequest>()
);
