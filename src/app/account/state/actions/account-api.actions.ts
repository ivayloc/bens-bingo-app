import { createAction, props } from '@ngrx/store';
import { Transaction } from '../../models/transaction';

export const loadAccountDetailsSuccess = createAction(
  '[Account API] Load Transaction History  Success',
  props<{ transactionsHistory: Transaction[] }>()
);

export const loadAccountDetailsFailure = createAction(
  '[Account API] Load Transaction History Failure',
  props<{ error: string }>()
);
