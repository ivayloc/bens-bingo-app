import { createAction, props } from '@ngrx/store';
import { RecentWinners } from 'src/app/shared/models/recent-winners';

export const loadCasinoRecentWinnersSuccess = createAction(
  '[RecentWinners API] Load casino recent winners Success',
  props<{ recentWinners: RecentWinners[] }>()
);

export const loadCasinoRecentWinnersFailure = createAction(
  '[RecentWinners API] Load casino recent winners Failure',
  props<{ error: string }>()
);

export const loadBingoRecentWinnersSuccess = createAction(
  '[RecentWinners API] Load bingo recent winners Success',
  props<{ recentWinners: RecentWinners[] }>()
);

export const loadBingoRecentWinnersFailure = createAction(
  '[RecentWinners API] Load bingo recent winners Failure',
  props<{ error: string }>()
);
