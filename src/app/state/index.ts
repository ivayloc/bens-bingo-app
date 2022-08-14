import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.reducers';

const selectAppState = createFeatureSelector<AppState>('app');

export const selectRecentWinners = createSelector(
  selectAppState,
  (state) => state.recentWinners
);

export const selectIsUserLoggedIn = createSelector(
  selectAppState,
  (state) => state.userLoggedIn
);
