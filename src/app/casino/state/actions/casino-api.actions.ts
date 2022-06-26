import { createAction, props } from '@ngrx/store';
import { CasinoDetails } from '../../models/casino-details';

export const loadCasinoDetailsSuccess = createAction(
  '[Casino API] Load Casino Details Success',
  props<{ casinoDetails: CasinoDetails }>()
);

export const loadCasinoDetailsFailure = createAction(
  '[Casino API] Load Casino Details Failure',
  props<{ error: string }>()
);
