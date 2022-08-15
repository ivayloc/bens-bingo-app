import { createAction, props } from '@ngrx/store';

export const loadCasinoDetails = createAction(
  '[Casino Page] Load Casino Details'
);

export const loadSlotsGamesPage = createAction(
  '[HotSlots Page] Load page with slots games',
  props<{ page: number }>()
);
