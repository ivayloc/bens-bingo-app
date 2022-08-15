import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from '../../state/app.states';
import { CasinoState } from './casino.reducers';

export interface State extends AppState.State {
  casinoGames: CasinoState;
}

const getCasinoGamesState = createFeatureSelector<CasinoState>('casino-games');

export const getAllGames = createSelector(getCasinoGamesState, (state) =>
  state.slotsGames.slice(0, 10)
);

export const getHotSlotsGames = createSelector(getCasinoGamesState, (state) =>
  state.slotsGames.slice(0, 20)
);

export const getNewReleasesGames = createSelector(
  getCasinoGamesState,
  (state) => state.newReleases
);

export const getJackpotGames = createSelector(
  getCasinoGamesState,
  (state) => state.jackpotGames
);

export const getNewGames = createSelector(
  getCasinoGamesState,
  (state) => state.newGames
);

export const selectSlotsGamesPage = createSelector(
  getCasinoGamesState,
  (state) => state.slotsGamesPage
);
