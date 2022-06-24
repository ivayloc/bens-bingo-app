import { createReducer, on } from '@ngrx/store';
import { BingoGame } from '../models/bingo-game';
import { Jackpot } from '../models/jackpots';
import { RecentWinners } from '../models/recent-winners';
import { SlotsGame } from '../models/slots-game';
import { HomeApiActions } from './actions';

export interface HomeState {
  bingoGames: BingoGame[];
  slotsGames: SlotsGame[];
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
  })
);
