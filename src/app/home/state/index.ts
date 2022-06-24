import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from '../../state/app.states';
import { HomeState } from './home.reducers';

export interface State extends AppState.State {
  home: HomeState;
}

const getHomeDetailsState = createFeatureSelector<HomeState>('home-details');

export const getBingoGames = createSelector(
  getHomeDetailsState,
  (state) => state.bingoGames
);

export const getSlotsGames = createSelector(
  getHomeDetailsState,
  (state) => state.slotsGames
);

export const getJackpots = createSelector(
  getHomeDetailsState,
  (state) => state.jackpots
);

export const getRecentWinners = createSelector(
  getHomeDetailsState,
  (state) => state.recentWinners
);