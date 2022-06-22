import { createAction, props } from '@ngrx/store';
import { BingoGame } from '../../models/bingo-game';

export const loadBingoGamesSuccess = createAction(
  '[Home API] Load Bingo Games Success',
  props<{ bingoGames: BingoGame[] }>()
);

export const loadBingoGamesFailure = createAction(
  '[Home API] Load Bingo Games Failure',
  props<{ error: string }>()
);
