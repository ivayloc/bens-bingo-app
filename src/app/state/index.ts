import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.reducers';

const selectAppState = createFeatureSelector<AppState>('app');

export const selectRecentWinners = createSelector(
  selectAppState,
  (state) => state.recentWinners
);

export const selectIsUserLoggedIn = createSelector(
  selectAppState,
  (state) => state.userLoggedIn
);

export const selectUserInfo = createSelector(
  selectAppState,
  (state) => state.userInfo
);

export const selectUserInfoBalance = createSelector(
  selectAppState,
  (state) => ({
    balance: state.userInfo.balance,
    currency: state.userInfo.currency,
  })
);

export const selectResetPasswordCodeSend = createSelector(
  selectAppState,
  (state) => ({ resetPasswordCodeSend: state.resetPasswordCodeSend })
);

export const selectResetPasswordMethods = createSelector(
  selectAppState,
  (state) => {
    return Object.entries(state.resetPasswordMethods).map(([value, label]) => ({
      label,
      value,
    }));
  }
);
