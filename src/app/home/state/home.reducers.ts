import { createReducer, on } from '@ngrx/store';
import { Game } from 'src/app/shared/models/game';
import { BingoGame } from '../../shared/models/bingo-game';
import { RecentWinners } from '../../shared/models/recent-winners';
import { Jackpot } from '../models/jackpots';
import { HomeApiActions } from './actions';

export interface HomeState {
  bingoGames: BingoGame[];
  slotsGames: Game[];
  newGames: Game[];
  jackpots: Jackpot[];
  recentWinners: RecentWinners[];
  error: any;
}

const initialState: HomeState = {
  bingoGames: [],
  slotsGames: [],
  newGames: [],
  jackpots: [],
  recentWinners: [],
  error: {},
};

export const homeReducer = createReducer<HomeState>(
  initialState,
  on(HomeApiActions.loadHomeDetailsSuccess, (state, action): HomeState => {
    return {
      ...state,
      ...action.homeDetails,
      error: '',
    };
  }),
  on(HomeApiActions.loadHomeDetailsFailure, (state, action): HomeState => {
    return {
      ...state,
      ...initialState,
      error: action.error,
    };
  }),
  on(HomeApiActions.loadJackpotsSuccess, (state, { jackpots }): HomeState => {
    return {
      ...state,
      jackpots,
      error: '',
    };
  }),
  on(HomeApiActions.loadJackpotsFailure, (state, action): HomeState => {
    return {
      ...state,
      jackpots: [],
      error: action.error,
    };
  })
);
