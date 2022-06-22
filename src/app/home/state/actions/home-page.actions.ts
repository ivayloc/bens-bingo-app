import { createAction } from '@ngrx/store';

export const loadBingoGames = createAction('[Home Page] Load Bingo Games');
export const loadSlotsGames = createAction('[Home Page] Load Slots Games');
export const loadJackpots = createAction('[Home Page] Load Jackpots');
export const loadRecentWinners = createAction(
  '[Home Page] Load Recent Winners'
);
