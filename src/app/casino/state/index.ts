import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from '../../state/app.states';
import { CasinoState } from './casino.reducers';

export interface State extends AppState.State {
  casinoGames: CasinoState;
}

const getCasinoGamesState = createFeatureSelector<CasinoState>('casino-games');

export const getSlotsGames = createSelector(
  getCasinoGamesState,
  (state) => state.slotsGames
);

export const getHotSlotsGames = createSelector(
  getCasinoGamesState,
  (state) => state.slotsGames
);

export const getNewReleasesGames = createSelector(
  getCasinoGamesState,
  (state) => state.newGames
);

export const getJackpotGames = createSelector(
  getCasinoGamesState,
  (state) => state.slotsGames
);

export const getNewGames = createSelector(
  getCasinoGamesState,
  (state) => state.newGames
);
