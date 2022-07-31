import { createAction, props } from '@ngrx/store';
import { BingoHistoryRequest } from '../../models/bingo-history-request';
import { TransactionsHistoryRequest } from '../../models/transactions-history-request';

export const loadTransactionsHistory = createAction(
  '[Account Page] Load Transactions history',
  props<{ payload: TransactionsHistoryRequest }>()
);

export const loadGameHistory = createAction(
  '[Account Page] Load Bingo history',
  props<{ payload: BingoHistoryRequest }>()
);

export const loadUserInfo = createAction('[Account Page] Load user info');

export const loadFriends = createAction(
  '[Account/Buddy Page] Load user buddies'
);

export const removeFriend = createAction(
  '[Account/Buddy Page] Remove user buddies',
  props<{ friendalias: string }>()
);

export const declinePendingFriendRequest = createAction(
  '[Account/Buddy Page] Decline pending friend request',
  props<{ friendalias: string }>()
);

export const showUserProfile = createAction(
  '[Account/Buddy Page] Show user profile',
  props<{ friendalias: string }>()
);

export const searchUser = createAction(
  '[Account/Buddy Page] Search for user profile',
  props<{ friendalias: string }>()
);

export const resetSearchUser = createAction(
  '[Account/Buddy Page] Reset search user'
);

export const addFriend = createAction(
  '[Account/Buddy Page] Add friend',
  props<{ friendalias: string }>()
);

export const cancelOutgoingFriendRequest = createAction(
  '[Account/Buddy Page] Cancel pending outgoing friend request',
  props<{ friendalias: string }>()
);

export const approveFriendRequest = createAction(
  '[Account/Buddy Page] Approve friend request',
  props<{ friendalias: string }>()
);
