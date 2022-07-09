import { createReducer, on } from '@ngrx/store';
import { SiteInfoApiActions } from './actions';

export interface SiteInfoState {
  termsAndConditions: string;
  error: string;
}

const initialState: SiteInfoState = {
  termsAndConditions: '',
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
