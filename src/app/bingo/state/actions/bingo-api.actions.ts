import { createAction, props } from '@ngrx/store';
import { BingoGame } from 'src/app/shared/models/bingo-game';
import { BingoDetails } from '../../models/bingo-details';

export const loadBingoDetailsSuccess = createAction(
  '[Bingo API] Load Bingo Details Success',
  props<{ bingoDetails: BingoDetails }>()
);

export const loadBingoDetailsFailure = createAction(
  '[Bingo API] Load Bingo Details Failure',
  props<{ error: string }>()
);
