import { createAction, props } from '@ngrx/store';
import { UserRegistrationQuick } from 'src/app/shared/models/user-registration-quick';

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

export const showLogin = createAction('[App Page] Show user login');
export const hydeLogin = createAction('[App Page] Hyde user login');
export const userLogin = createAction(
  '[App Page] User login',
  props<{ payload: { email: string; password: string } }>()
);
