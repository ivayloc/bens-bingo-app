import { createAction, props } from '@ngrx/store';

export const loadTermsAndConditionsSuccess = createAction(
  '[Site Info API] Load Terms and Conditions Success',
  props<{ termsAndConditions: string }>()
);

export const loadTermsAndConditionsFailure = createAction(
  '[Site Info API] Load Terms and Conditions Failure',
  props<{ error: string }>()
);
