import { createReducer, on } from '@ngrx/store';
import { BingoGame } from 'src/app/shared/models/bingo-game';
import { BingoApiActions } from './actions';

export interface BingoState {
  bingoGames: BingoGame[];
  error: string;
}

const initialState: BingoState = {
  bingoGames: [],
  error: '',
};

export const bingoReducer = createReducer<BingoState>(
  initialState,
  on(
    BingoApiActions.loadBingoGamesSuccess,
    (state, { bingoGames }): BingoState => {
      return {
        ...state,
        bingoGames,
        error: '',
      };
    }
  ),
  on(BingoApiActions.loadBingoGamesFailure, (state, action): BingoState => {
    return {
      ...state,
      bingoGames: [],
      error: action.error,
    };
  })
);
