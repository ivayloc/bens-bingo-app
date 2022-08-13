import { createAction } from '@ngrx/store';

export const loadCasinoRecentWinners = createAction(
  '[RecentWinners Page] Load casino recent winners'
);

export const loadBingoRecentWinners = createAction(
  '[RecentWinners Page] Load bingo recent winners'
);
