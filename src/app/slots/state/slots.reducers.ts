import { createReducer, on } from '@ngrx/store';
import { SlotsGame } from 'src/app/shared/models/slots-game';
import { NewGame } from '../models/new-game';
import { SlotsApiActions } from './actions';

export interface SlotsState {
  slotsGames: SlotsGame[];
  newGames: NewGame[];
  error: string;
}

const initialState: SlotsState = {
  slotsGames: [],
  newGames: [],
  error: '',
};

export const slotsReducer = createReducer<SlotsState>(
  initialState,
  on(SlotsApiActions.loadSlotsDetailsSuccess, (state, action): SlotsState => {
    return {
      ...state,
      ...action.slotsDetails,
      error: '',
    };
  }),
  on(SlotsApiActions.loadSlotsDetailsFailure, (state, action): SlotsState => {
    return {
      ...state,
      ...initialState,
      error: action.error,
    };
  })
);
