import { createAction, props } from '@ngrx/store';
import { BingoGame } from 'src/app/shared/models/bingo-game';

export const loadBingoGamesSuccess = createAction(
  '[Bingo API] Load Bingo Games Success',
  props<{ bingoGames: BingoGame[] }>()
);

export const loadBingoGamesFailure = createAction(
  '[Bingo API] Load Bingo Games Failure',
  props<{ error: string }>()
);
