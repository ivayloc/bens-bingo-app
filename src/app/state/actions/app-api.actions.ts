import { createAction, props } from '@ngrx/store';
import { RecentWinners } from 'src/app/shared/models/recent-winners';
import { ResetPasswordMethods } from 'src/app/shared/models/reset-password-methods';
import { UserInfo } from 'src/app/shared/models/user-info';

export const loadUserInfoSuccess = createAction(
  '[Account API] Load user info SUCCESS',
  props<{ userInfo: UserInfo }>()
);

export const loadUserInfoFailure = createAction(
  '[Account API] Load user info FAILURE',
  props<{ error: string }>()
);

export const loadCasinoRecentWinnersSuccess = createAction(
  '[RecentWinners API] Load casino recent winners Success',
  props<{ recentWinners: RecentWinners[] }>()
);

export const loadCasinoRecentWinnersFailure = createAction(
  '[RecentWinners API] Load casino recent winners Failure',
  props<{ error: string }>()
);

export const loadBingoRecentWinnersSuccess = createAction(
  '[RecentWinners API] Load bingo recent winners Success',
  props<{ recentWinners: RecentWinners[] }>()
);

export const loadBingoRecentWinnersFailure = createAction(
  '[RecentWinners API] Load bingo recent winners Failure',
  props<{ error: string }>()
);

export const userRegistrationSuccess = createAction(
  '[Register API] User registration Success',
  props<{ success: boolean }>()
);

export const userRegistrationFailure = createAction(
  '[Register API] User registration Failure',
  props<{ error: string }>()
);

export const userLoginSuccess = createAction(
  '[Login API] User login Success',
  props<{ success: boolean }>()
);

export const userLoginFailure = createAction(
  '[Login API] User login Failure',
  props<{ error: string }>()
);

export const userLogoutSuccess = createAction(
  '[Logout API] User logout Success',
  props<{ success: boolean }>()
);

export const userLogoutFailure = createAction(
  '[Logout API] User logout Failure',
  props<{ error: string }>()
);

export const resetPasswordInquirySuccess = createAction(
  '[ResetPassword API] Get reset password methods Success',
  props<{ resetPasswordMethods: ResetPasswordMethods }>()
);

export const resetPasswordInquiryFailure = createAction(
  '[ResetPassword API] Get reset password methods Failure',
  props<{ error: string }>()
);

export const getPasswordResetCodeSuccess = createAction(
  '[ResetPassword API] Get reset password code Success',
  props<{ success: boolean }>()
);

export const getPasswordResetCodeFailure = createAction(
  '[ResetPassword API] Get reset password code Failure',
  props<{ error: string }>()
);

export const sendPasswordResetKeySuccess = createAction(
  '[ResetPassword API] Send password reset key Success',
  props<{ success: boolean }>()
);

export const sendPasswordResetKeyFailure = createAction(
  '[ResetPassword API] Send password reset key Failure',
  props<{ error: string }>()
);
