import { createAction, props } from '@ngrx/store';
import { UserRegistrationQuick } from 'src/app/shared/models/user-registration-quick';

export const loadUserInfo = createAction(
  '[Account/PrivateInfo Page] Load user info'
);

export const loadCasinoRecentWinners = createAction(
  '[RecentWinners Page] Load casino recent winners'
);

export const loadBingoRecentWinners = createAction(
  '[RecentWinners Page] Load bingo recent winners'
);

export const userRegistration = createAction(
  '[Register Page] Register a user',
  props<{ payload: UserRegistrationQuick }>()
);

export const showLogin = createAction('[Login PAGE] Show user login');
export const hydeLogin = createAction('[Login PAGE] Hyde user login');
export const userIsLoggedIn = createAction('[Login PAGE] User is logged in');
export const userLogin = createAction(
  '[Login PAGE] User login',
  props<{ payload: { email: string; password: string } }>()
);
export const userLogout = createAction('[Logout PAGE] User logout');

export const resetPasswordInquiry = createAction(
  '[ResetPassword Page] Reset the password',
  props<{ accountIdentifier: string }>()
);

export const clearPasswordResetsMethods = createAction(
  '[ResetPassword Page] Clear password reset methods'
);
