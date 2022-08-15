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
  props<{ slotsGamesPage: GamesData }>()
);

export const loadGamesPageFailure = createAction(
  '[Casino API] Load page with games Failure',
  props<{ error: string }>()
);

// export const loadNewReleasesGamesPageSuccess = createAction(
//   '[Casino/NewReleases API] Load page with newly released games Success',
//   props<{ slotsGamesPage: GamesData }>()
// );

// export const loadNewReleasesGamesPageFailure = createAction(
//   '[Casino/NewReleases API] Load page with newly released games Failure',
//   props<{ error: string }>()
// );
