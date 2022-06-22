import { createReducer, on } from '@ngrx/store';
import { HomeApiActions } from './actions';

export interface HomeState {
  bingoGames: any[];
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
  })
);
