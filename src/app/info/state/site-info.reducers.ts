import { SafeHtml } from '@angular/platform-browser';
import { createReducer, on } from '@ngrx/store';
import { SiteInfoApiActions } from './actions';

export interface SiteInfoState {
  termsAndConditions: SafeHtml;
  aboutUs: SafeHtml;
  pageContent: SafeHtml;
  error: string;
}

const initialState: SiteInfoState = {
  termsAndConditions: {} as SafeHtml,
  aboutUs: {} as SafeHtml,
  pageContent: {} as SafeHtml,
  error: '',
};

export const siteInfoReducer = createReducer<SiteInfoState>(
  initialState,
  on(
    SiteInfoApiActions.loadTermsAndConditionsSuccess,
    (state, { termsAndConditions }): SiteInfoState => {
      return {
        ...state,
        termsAndConditions,
        error: '',
      };
    }
  ),
  on(
    SiteInfoApiActions.loadTermsAndConditionsFailure,
    (state, action): SiteInfoState => {
      return {
        ...state,
        termsAndConditions: '',
        error: action.error,
      };
    }
  ),
  on(
    SiteInfoApiActions.loadAboutUsSuccess,
    (state, { aboutUs }): SiteInfoState => {
      return {
        ...state,
        aboutUs,
        error: '',
      };
    }
  ),
  on(SiteInfoApiActions.loadAboutUsFailure, (state, action): SiteInfoState => {
    return {
      ...state,
      termsAndConditions: {} as SafeHtml,
      error: action.error,
    };
  }),
  on(
    SiteInfoApiActions.loadPageContentSuccess,
    (state, { pageContent }): SiteInfoState => {
      return {
        ...state,
        pageContent,
        error: '',
      };
    }
  ),
  on(
    SiteInfoApiActions.loadPageContentFailure,
    (state, action): SiteInfoState => {
      return {
        ...state,
        pageContent: {} as SafeHtml,
        error: action.error,
      };
    }
  )
);
