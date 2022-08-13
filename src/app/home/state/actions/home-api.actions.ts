import { createAction, props } from '@ngrx/store';
import { HomeDetails } from '../../models/home-details';
import { Jackpot } from '../../models/jackpots';

export const loadHomeDetailsSuccess = createAction(
  '[Home API] Load Home Details Success',
  props<{ homeDetails: HomeDetails }>()
);

export const loadHomeDetailsFailure = createAction(
  '[Home API] Load Home Details Failure',
  props<{ error: string }>()
);

export const loadJackpotsSuccess = createAction(
  '[Home API] Load jackpots Success',
  props<{ jackpots: Jackpot[] }>()
);

export const loadJackpotsFailure = createAction(
  '[Home API] Load jackpots Failure',
  props<{ error: string }>()
);
