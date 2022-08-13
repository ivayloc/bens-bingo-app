import { createReducer, on } from '@ngrx/store';
import { RecentWinners } from '../shared/models/recent-winners';
import { AppApiActions } from './actions';

export interface AppState {
  recentWinners: RecentWinners[];
  error: string;
}

const initialState: AppState = {
  recentWinners: [],
  error: '',
};

export const appReducer = createReducer<AppState>(
  initialState,
  on(
    AppApiActions.loadCasinoRecentWinnersSuccess,
    (state, { recentWinners }): AppState => {
      return {
        ...state,
        recentWinners,
        error: '',
      };
    }
  ),
  on(
    AppApiActions.loadCasinoRecentWinnersFailure,
    (state, { error }): AppState => {
      return {
        ...state,
        recentWinners: [],
        error,
      };
    }
  ),
  on(
    AppApiActions.loadBingoRecentWinnersSuccess,
    (state, { recentWinners }): AppState => {
      return {
        ...state,
        recentWinners,
        error: '',
      };
    }
  ),
  on(
    AppApiActions.loadBingoRecentWinnersFailure,
    (state, { error }): AppState => {
      return {
        ...state,
        recentWinners: [],
        error,
      };
    }
  )
);
