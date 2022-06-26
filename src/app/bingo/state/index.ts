import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from '../../state/app.states';
import { BingoState } from './bingo.reducers';

export interface State extends AppState.State {
  bingoGames: BingoState;
}

const getBingoGamesState = createFeatureSelector<BingoState>('bingo-games');

export const getBingoGames = createSelector(
  getBingoGamesState,
  (state) => state.bingoGames
);

export const getRecentWinners = createSelector(
  getBingoGamesState,
  (state) => state.recentWinners
);
