import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from '../../state/app.states';
import { SlotsState } from './slots.reducers';

export interface State extends AppState.State {
  slotsGames: SlotsState;
}

const getSlotsGamesState = createFeatureSelector<SlotsState>('slots-games');

export const getSlotsGames = createSelector(
  getSlotsGamesState,
  (state) => state.slotsGames
);

export const getNewGames = createSelector(
  getSlotsGamesState,
  (state) => state.newGames
);
