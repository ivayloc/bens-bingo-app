import { createAction, props } from '@ngrx/store';

export const loadBingoGamesSuccess = createAction(
  '[Home API] Load Bingo Games Success',
  props<{ bingoGames: any[] }>()
);

export const loadBingoGamesFailure = createAction(
  '[Home API] Load Bingo Games Failure',
  props<{ error: string }>()
);
