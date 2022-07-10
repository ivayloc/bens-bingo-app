import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from '../../state/app.states';
import { SiteInfoState } from './info.reducers';

export interface State extends AppState.State {
  siteInfo: SiteInfoState;
}

const getSiteInfoState = createFeatureSelector<SiteInfoState>('site-info');

export const getTermsAndConditions = createSelector(
  getSiteInfoState,
  (state) => state.termsAndConditions.text
);
