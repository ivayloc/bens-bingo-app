import { createAction, props } from '@ngrx/store';
import { TermsAndConditions } from '../../models/terms-and-conditions';

export const loadTermsAndConditionsSuccess = createAction(
  '[Site Info API] Load Terms and Conditions Success',
  props<{ termsAndConditions: TermsAndConditions }>()
);

export const loadTermsAndConditionsFailure = createAction(
  '[Site Info API] Load Terms and Conditions Failure',
  props<{ error: string }>()
);
