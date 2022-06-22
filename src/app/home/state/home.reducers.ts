import { createReducer, on } from '@ngrx/store';
import { BingoGame } from '../models/bingo-game';
import { HomeApiActions } from './actions';

export interface HomeState {
  bingoGames: BingoGame[];
  slotsGames: any[];
  newGames: any[];
  error: string;
}

const initialState: HomeState = {
  bingoGames: [],
  slotsGames: [],
  newGames: [],
  error: '',
};

export const homeReducer = createReducer<HomeState>(
  initialState,
  on(HomeApiActions.loadBingoGamesSuccess, (state, action): HomeState => {
    return {
      ...state,
      bingoGames: action.bingoGames,
      error: '',
    };
  }),
  on(HomeApiActions.loadBingoGamesFailure, (state, action): HomeState => {
    return {
      ...state,
      bingoGames: [],
      error: action.error,
    };
  }),
  on(HomeApiActions.loadSlotsGamesSuccess, (state, action): HomeState => {
    return {
      ...state,
      slotsGames: action.slotsGames,
      error: '',
    };
  }),
  on(HomeApiActions.loadSlotsGamesFailure, (state, action): HomeState => {
    return {
      ...state,
      slotsGames: [],
      error: action.error,
    };
  })
);
