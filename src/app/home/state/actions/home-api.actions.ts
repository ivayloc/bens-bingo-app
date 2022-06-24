import { createAction, props } from '@ngrx/store';
import { HomeDetails } from '../../models/home-details';

export const loadHomeDetailsSuccess = createAction(
  '[Home API] Load Home Details Success',
  props<{ homeDetails: HomeDetails }>()
);

export const loadHomeDetailsFailure = createAction(
  '[Home API] Load Home Details Failure',
  props<{ error: string }>()
);
