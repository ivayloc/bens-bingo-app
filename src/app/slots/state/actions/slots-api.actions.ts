import { createAction, props } from '@ngrx/store';
import { SlotsDetails } from '../../models/slots-details';

export const loadSlotsDetailsSuccess = createAction(
  '[Slots API] Load Slots Details Success',
  props<{ slotsDetails: SlotsDetails }>()
);

export const loadSlotsDetailsFailure = createAction(
  '[Slots API] Load Slots Details Failure',
  props<{ error: string }>()
);
