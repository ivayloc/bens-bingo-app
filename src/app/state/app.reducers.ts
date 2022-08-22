import { createReducer, on } from '@ngrx/store';
import { Member } from '../shared/models/member';
import { RecentWinners } from '../shared/models/recent-winners';
import { ResetPasswordMethods } from '../shared/models/reset-password-methods';
import { UserInfo } from '../shared/models/user-info';
import { AppApiActions, AppPageActions } from './actions';

export interface AppState {
  recentWinners: RecentWinners[];
  userLoggedIn: boolean;
  userInfo: UserInfo;
  resetPasswordMethods: ResetPasswordMethods;
  resetPasswordCodeSend: boolean;
  chatModerators: Member[];
  error: string;
}

const initialState: AppState = {
  recentWinners: [],
  userLoggedIn: false,
  userInfo: {} as UserInfo,
  resetPasswordMethods: {} as ResetPasswordMethods,
  resetPasswordCodeSend: false,
  chatModerators: [],
  error: '',
};

export const appReducer = createReducer<AppState>(
  initialState,
  on(AppApiActions.loadUserInfoSuccess, (state, { userInfo }): AppState => {
    return {
      ...state,
      userInfo,
      error: '',
    };
  }),
  on(AppApiActions.loadUserInfoFailure, (state, action): AppState => {
    return {
      ...state,
      userInfo: {} as UserInfo,
      error: action.error,
    };
  }),
  on(
    AppApiActions.loadCasinoRecentWinnersSuccess,
    (state, { recentWinners }): AppState => {
      return {
        ...state,
        recentWinners,
        error: '',
      };
    }
  ),
  on(
    AppApiActions.loadCasinoRecentWinnersFailure,
    (state, { error }): AppState => {
      return {
        ...state,
        recentWinners: [],
        error,
      };
    }
  ),
  on(
    AppApiActions.loadBingoRecentWinnersSuccess,
    (state, { recentWinners }): AppState => {
      return {
        ...state,
        recentWinners,
        error: '',
      };
    }
  ),
  on(
    AppApiActions.loadBingoRecentWinnersFailure,
    (state, { error }): AppState => {
      return {
        ...state,
        recentWinners: [],
        error,
      };
    }
  ),
  on(AppApiActions.userLoginSuccess, (state, { success }): AppState => {
    return {
      ...state,
      userLoggedIn: success,
      error: '',
    };
  }),
  on(AppPageActions.userIsLoggedIn, (state, action): AppState => {
    return {
      ...state,
      userLoggedIn: true,
      error: '',
    };
  }),
  on(AppApiActions.userLoginFailure, (state, { error }): AppState => {
    return {
      ...state,
      userLoggedIn: false,
      error,
    };
  }),
  on(AppApiActions.userLogoutSuccess, (state, { success }): AppState => {
    return {
      ...state,
      userLoggedIn: !success,
      error: '',
    };
  }),
  on(AppApiActions.userLogoutFailure, (state, { error }): AppState => {
    return {
      ...state,
      userLoggedIn: false,
      error,
    };
  }),
  on(
    AppApiActions.resetPasswordInquirySuccess,
    (state, { resetPasswordMethods }): AppState => {
      return {
        ...state,
        resetPasswordMethods,
        error: '',
      };
    }
  ),
  on(
    AppApiActions.resetPasswordInquiryFailure,
    (state, { error }): AppState => {
      return {
        ...state,
        resetPasswordMethods: {} as ResetPasswordMethods,
        error,
      };
    }
  ),
  on(
    AppApiActions.getPasswordResetCodeSuccess,
    (state, { success }): AppState => {
      return {
        ...state,
        resetPasswordCodeSend: success,
        error: '',
      };
    }
  ),
  on(
    AppApiActions.getPasswordResetCodeFailure,
    (state, { error }): AppState => {
      return {
        ...state,
        resetPasswordCodeSend: false,
        error,
      };
    }
  ),
  on(
    AppApiActions.getChatModeratorsSuccess,
    (state, { chatModerators }): AppState => {
      return {
        ...state,
        chatModerators,
        error: '',
      };
    }
  ),
  on(AppApiActions.getChatModeratorsFailure, (state, { error }): AppState => {
    return {
      ...state,
      chatModerators: [],
      error,
    };
  }),
  on(AppPageActions.clearPasswordResetsMethods, (state): AppState => {
    return {
      ...state,
      resetPasswordMethods: {} as ResetPasswordMethods,
    };
  })
);
