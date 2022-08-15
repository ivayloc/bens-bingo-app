import { createAction, props } from '@ngrx/store';
import { GamesData } from 'src/app/shared/models/games-data';
import { CasinoDetails } from '../../models/casino-details';

export const loadCasinoDetailsSuccess = createAction(
  '[Casino API] Load Casino Details Success',
  props<{ casinoDetails: CasinoDetails }>()
);

export const loadCasinoDetailsFailure = createAction(
  '[Casino API] Load Casino Details Failure',
  props<{ error: string }>()
);

export const loadSlotsGamesPageSuccess = createAction(
  '[Casino API] Load page with slots games Success',
  props<{ slotsGamesPage: GamesData }>()
);

export const loadSlotsGamesPageFailure = createAction(
  '[Casino API] Load page with slots games Failure',
  props<{ error: string }>()
);
