import { createReducer, on } from '@ngrx/store';
import { Game } from 'src/app/shared/models/game';
import { GamesData } from 'src/app/shared/models/games-data';
import { CasinoApiActions } from './actions';

export interface CasinoState {
  jackpotGames: Game[];
  newGames: Game[];
  newReleases: Game[];
  slotsGames: Game[];
  slotsGamesPage: GamesData;
  error: string;
}

const initialState: CasinoState = {
  jackpotGames: [],
  newGames: [],
  newReleases: [],
  slotsGames: [],
  slotsGamesPage: {} as GamesData,
  error: '',
};

export const casinoReducer = createReducer<CasinoState>(
  initialState,
  on(
    CasinoApiActions.loadCasinoDetailsSuccess,
    (state, action): CasinoState => {
      return {
        ...state,
        ...action.casinoDetails,
        error: '',
      };
    }
  ),
  on(
    CasinoApiActions.loadCasinoDetailsFailure,
    (state, action): CasinoState => {
      return {
        ...state,
        ...initialState,
        error: action.error,
      };
    }
  ),
  on(
    CasinoApiActions.loadSlotsGamesPageSuccess,
    (state, { slotsGamesPage }): CasinoState => {
      return {
        ...state,
        slotsGamesPage,
        error: '',
      };
    }
  ),
  on(
    CasinoApiActions.loadSlotsGamesPageFailure,
    (state, action): CasinoState => {
      return {
        ...state,
        ...initialState,
        error: action.error,
      };
    }
  )
);
