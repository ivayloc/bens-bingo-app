import { createAction, props } from '@ngrx/store';
import { BingoGame } from '../../models/bingo-game';
import { Jackpot } from '../../models/jackpots';
import { RecentWinners } from '../../models/recent-winners';
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

export const loadJackpotsSuccess = createAction(
  '[Home API] Load Jackpots Success',
  props<{ jackpots: Jackpot[] }>()
);

export const loadJackpotsFailure = createAction(
  '[Home API] Load Jackpots Failure',
  props<{ error: string }>()
);

export const loadRecentWinnersSuccess = createAction(
  '[Home API] Load Recent Winners Success',
  props<{ recentWinners: RecentWinners[] }>()
);

export const loadRecentWinnersFailure = createAction(
  '[Home API] Load Recent Winners Failure',
  props<{ error: string }>()
);
