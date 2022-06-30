import { createReducer, on } from '@ngrx/store';
import { BingoGame } from 'src/app/shared/models/bingo-game';
import { ComingUp } from 'src/app/shared/models/coming-up';
import { RecentWinners } from 'src/app/shared/models/recent-winners';
import { ChatModerators } from '../models/chat-moderators';
import { BingoApiActions } from './actions';

export interface BingoState {
  bingoGames: BingoGame[];
  chatModerators: ChatModerators[];
  comingUp: ComingUp[];
  newGames: BingoGame[];
  recentWinners: RecentWinners[];
  error: string;
}

const initialState: BingoState = {
  bingoGames: [],
  chatModerators: [],
  comingUp: [],
  newGames: [],
  recentWinners: [],
  error: '',
};

export const bingoReducer = createReducer<BingoState>(
  initialState,
  on(BingoApiActions.loadBingoDetailsSuccess, (state, action): BingoState => {
    return {
      ...state,
      ...action.bingoDetails,
      error: '',
    };
  }),
  on(BingoApiActions.loadBingoDetailsFailure, (state, action): BingoState => {
    return {
      ...state,
      ...initialState,
      error: action.error,
    };
  })
);
