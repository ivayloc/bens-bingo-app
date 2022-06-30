import { createReducer, on } from '@ngrx/store';
import { SlotsGame } from 'src/app/shared/models/slots-game';
import { CasinoNewGame } from '../models/casino-new-game';
import { CasinoApiActions } from './actions';

export interface CasinoState {
  slotsGames: SlotsGame[];
  newGames: SlotsGame[];
  error: string;
}

const initialState: CasinoState = {
  slotsGames: [],
  newGames: [],
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
  )
);
