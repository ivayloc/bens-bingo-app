import { createAction, props } from '@ngrx/store';

export const loadCasinoDetails = createAction(
  '[Casino Page] Load Casino Details'
);

export const loadSlotsGamesPage = createAction(
  '[Casino/HotSlots Page] Load page with slots games',
  props<{ page: number }>()
);

export const loadNewReleasesGamesPage = createAction(
  '[Casino/NewReleasesGames Page] Load page with newly released games',
  props<{ page: number }>()
);

export const loadJackpotGamesPage = createAction(
  '[Casino/JackpotsGames Page] Load page with jackpots games',
  props<{ page: number }>()
);

export const loadTableGamesPage = createAction(
  '[Casino/TableGames Page] Load page with table games',
  props<{ page: number }>()
);

export const loadAllSlotsGamesPage = createAction(
  '[Casino/AllSlots Page] Load page with all slots games',
  props<{ page: number }>()
);
