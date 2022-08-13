import { createAction, props } from '@ngrx/store';

export const loadTermsAndConditions = createAction(
  '[SiteInfo/TermsAndConditions Page] Load terms and conditions'
);

export const loadAboutUs = createAction(
  '[SiteInfo/AboutUs Page] Load about us'
);

export const loadPageContent = createAction(
  '[SiteInfo] Load page content',
  props<{ page: string }>()
);
