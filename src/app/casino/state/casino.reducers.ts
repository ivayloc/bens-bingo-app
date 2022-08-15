import { createReducer, on } from '@ngrx/store';
import { Game } from 'src/app/shared/models/game';
import { GamesData } from 'src/app/shared/models/games-data';
import { CasinoApiActions } from './actions';

export interface CasinoState {
  jackpotGames: Game[];
  // newGames: Game[];
  newReleases: Game[];
  slotsGames: Game[];
  gamesCategoryPage: GamesData;
  allGames: GamesData;
  error: string;
}

const initialState: CasinoState = {
  jackpotGames: [],
  // newGames: [],
  newReleases: [],
  slotsGames: [],
  gamesCategoryPage: {} as GamesData,
  allGames: {} as GamesData,
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
    CasinoApiActions.loadGamesPageSuccess,
    (state, { gamesCategoryPage }): CasinoState => {
      return {
        ...state,
        gamesCategoryPage,
        error: '',
      };
    }
  ),
  on(CasinoApiActions.loadGamesPageFailure, (state, action): CasinoState => {
    return {
      ...state,
      gamesCategoryPage: {} as GamesData,
      error: action.error,
    };
  }),
  on(
    CasinoApiActions.loadAllGamesSuccess,
    (state, { allGames }): CasinoState => {
      return {
        ...state,
        allGames,
        error: '',
      };
    }
  ),
  on(CasinoApiActions.loadAllGamesFailure, (state, action): CasinoState => {
    return {
      ...state,
      allGames: {} as GamesData,
      error: action.error,
    };
  })
);
