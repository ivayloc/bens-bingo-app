import { createAction, props } from '@ngrx/store';
import { BingoGame } from '../../models/bingo-game';
import { SlotsGame } from '../../models/slots-game';

export const loadBingoGamesSuccess = createAction(
  '[Home API] Load Bingo Games Success',
  props<{ bingoGames: BingoGame[] }>()
);

export const loadBingoGamesFailure = createAction(
  '[Home API] Load Bingo Games Failure',
  props<{ error: string }>()
);

export const loadSlotsGamesSuccess = createAction(
  '[Home API] Load Slots Games Success',
  props<{ slotsGames: SlotsGame[] }>()
);

export const loadSlotsGamesFailure = createAction(
  '[Home API] Load Slots Games Failure',
  props<{ error: string }>()
);
