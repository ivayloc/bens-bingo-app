import { createReducer, on } from '@ngrx/store';
import { BingoGame } from '../models/bingo-game';
import { Jackpot } from '../models/jackpots';
import { RecentWinners } from '../models/recent-winners';
import { HomeApiActions } from './actions';

export interface HomeState {
  bingoGames: BingoGame[];
  slotsGames: any[];
  newGames: any[];
  jackpots: Jackpot[];
  recentWinners: RecentWinners[];
  error: string;
}

const initialState: HomeState = {
  bingoGames: [],
  slotsGames: [],
  newGames: [],
  jackpots: [],
  recentWinners: [],
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
  }),
  on(HomeApiActions.loadJackpotsSuccess, (state, action): HomeState => {
    return {
      ...state,
      jackpots: action.jackpots,
      error: '',
    };
  }),
  on(HomeApiActions.loadJackpotsFailure, (state, action): HomeState => {
    return {
      ...state,
      jackpots: [],
      error: action.error,
    };
  }),
  on(HomeApiActions.loadRecentWinnersSuccess, (state, action): HomeState => {
    return {
      ...state,
      recentWinners: action.recentWinners,
      error: '',
    };
  }),
  on(HomeApiActions.loadRecentWinnersFailure, (state, action): HomeState => {
    return {
      ...state,
      recentWinners: [],
      error: action.error,
    };
  })
);
