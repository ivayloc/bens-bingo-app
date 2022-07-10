import { createReducer, on } from '@ngrx/store';
import { TermsAndConditions } from '../models/terms-and-conditions';
import { SiteInfoApiActions } from './actions';

export interface SiteInfoState {
  termsAndConditions: TermsAndConditions;
  error: string;
}

const initialState: SiteInfoState = {
  termsAndConditions: { text: '' },
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
        ...initialState,
        error: action.error,
      };
    }
  )
);
