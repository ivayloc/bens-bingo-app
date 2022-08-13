import { SafeHtml } from '@angular/platform-browser';
import { createAction, props } from '@ngrx/store';

export const loadTermsAndConditionsSuccess = createAction(
  '[SiteInfo/TermsAndConditions API] Load terms and conditions Success',
  props<{ termsAndConditions: SafeHtml }>()
);

export const loadTermsAndConditionsFailure = createAction(
  '[SiteInfo/TermsAndConditions API] Load terms and conditions Failure',
  props<{ error: string }>()
);

export const loadAboutUsSuccess = createAction(
  '[SiteInfo/TermsAndConditions API] Load about us Success',
  props<{ aboutUs: SafeHtml }>()
);

export const loadAboutUsFailure = createAction(
  '[SiteInfo/TermsAndConditions API] Load about us Failure',
  props<{ error: string }>()
);

export const loadPageContentSuccess = createAction(
  '[SiteInfo] Load page content Success',
  props<{ pageContent: SafeHtml }>()
);

export const loadPageContentFailure = createAction(
  '[SiteInfo] Load page content Failure',
  props<{ error: string }>()
);
