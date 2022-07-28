import { createAction, props } from '@ngrx/store';
import { FriendsList } from '../../models/friends-list-response';
import { GameHistory } from '../../models/game-history';
import { Transaction } from '../../models/transaction';
import { UserInfo } from '../../models/user-info';
import { UserProfile } from '../../models/user-profile';

export const loadTransactionsHistorySuccess = createAction(
  '[Account API] Load transaction history  SUCCESS',
  props<{ transactionsHistory: Transaction[] }>()
);

export const loadTransactionsHistoryFailure = createAction(
  '[Account API] Load transaction history FAILURE',
  props<{ error: string }>()
);

export const loadGameHistorySuccess = createAction(
  '[Account API] Load bingo history SUCCESS',
  props<{ gameHistory: GameHistory[] }>()
);

export const loadGameHistoryFailure = createAction(
  '[Account API] Load bingo history FAILURE',
  props<{ error: string }>()
);

export const loadUserInfoSuccess = createAction(
  '[Account API] Load user info SUCCESS',
  props<{ userInfo: UserInfo }>()
);

export const loadUserInfoFailure = createAction(
  '[Account API] Load user info FAILURE',
  props<{ error: string }>()
);

export const loadUserFriendsSuccess = createAction(
  '[Account API] Load user buddies SUCCESS',
  props<{ userFriends: FriendsList }>()
);

export const loadUserFriendsFailure = createAction(
  '[Account API] Load user buddies FAILURE',
  props<{ error: string }>()
);

export const removeUserFriendSuccess = createAction(
  "[Account/Buddies API] Remove user's buddies SUCCESS",
  props<{ friendalias: string }>()
);

export const removeUserFriendFailure = createAction(
  "[Account/Buddies API] Remove user's buddies FAILURE",
  props<{ error: string }>()
);

export const declinePendingFriendSuccess = createAction(
  '[Account/Buddies API] Decline panding friend request SUCCESS',
  props<{ friendalias: string }>()
);

export const declinePendingFriendFailure = createAction(
  '[Account/Buddies API] Decline panding friend request FAILURE',
  props<{ error: string }>()
);
export const showUserProfileSuccess = createAction(
  '[Account/Buddies API] Show user profile SUCCESS',
  props<{ selectedUserProfile: UserProfile; friendalias: string }>()
);

export const showUserProfileFailure = createAction(
  '[Account/Buddies API] Show user profile FAILURE',
  props<{ error: string }>()
);
