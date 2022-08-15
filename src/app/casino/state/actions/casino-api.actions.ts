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

export const loadGamesPageSuccess = createAction(
  '[Casino API] Load page with games Success',
  props<{ gamesCategoryPage: GamesData }>()
);

export const loadGamesPageFailure = createAction(
  '[Casino API] Load page with games Failure',
  props<{ error: string }>()
);

export const loadAllGamesSuccess = createAction(
  '[Casino API] Load all games Success',
  props<{ allGames: GamesData }>()
);

export const loadAllGamesFailure = createAction(
  '[Casino API] Load all games Failure',
  props<{ error: string }>()
);
