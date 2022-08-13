import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from '../../state/app.states';
import { SiteInfoState } from './site-info.reducers';

export interface State extends AppState.State {
  siteInfo: SiteInfoState;
}

const selectSiteInfoState = createFeatureSelector<SiteInfoState>('site-info');

export const selectTermsAndConditions = createSelector(
  selectSiteInfoState,
  (state) => state.termsAndConditions
);

export const selectAboutUs = createSelector(
  selectSiteInfoState,
  (state) => state.aboutUs
);

export const selectPageContent = createSelector(
  selectSiteInfoState,
  (state) => state.pageContent
);
