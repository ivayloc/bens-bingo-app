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
