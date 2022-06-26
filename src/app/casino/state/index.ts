import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from '../../state/app.states';
import { CasinoState } from './casino.reducers';

export interface State extends AppState.State {
  casinoGames: CasinoState;
}

const getCasinoGamesState = createFeatureSelector<CasinoState>('casino-games');

export const getCasinoGames = createSelector(
  getCasinoGamesState,
  (state) => state.casinoGames
);

export const getNewGames = createSelector(
  getCasinoGamesState,
  (state) => state.newGames
);
