import { createAction, props } from '@ngrx/store';

export const loadCasinoDetails = createAction(
  '[Casino Page] Load Casino Details'
);

export const loadSlotsGamesPage = createAction(
  '[Casino/HotSlots Page] Load page with slots games',
  props<{ page: number }>()
);

export const loadNewReleasesGamesPage = createAction(
  '[Casino/NewReleases Page] Load page with newly released games',
  props<{ page: number }>()
);
