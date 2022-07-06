import { createReducer, on } from '@ngrx/store';
import { BingoGame } from '../../shared/models/bingo-game';
import { Jackpot } from '../models/jackpots';
import { RecentWinners } from '../../shared/models/recent-winners';
import { SlotsGame } from '../../shared/models/slots-game';
import { HomeApiActions } from './actions';
import { Game } from 'src/app/shared/models/game';

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
  })
);
