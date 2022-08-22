import { createAction, props } from '@ngrx/store';
import { BingoHistoryRequest } from '../../models/bingo-history-request';
import { ChangePasswordRequest } from '../../models/change-password-request';
import { TransactionsHistoryRequest } from '../../models/transactions-history-request';
import { UpdateUserProfileRequest } from '../../models/update-user-profile-request';
import { UpdatedUserInfo } from '../../models/updated-user-info';

export const loadTransactionsHistory = createAction(
  '[Account Page] Load Transactions history',
  props<{ payload: TransactionsHistoryRequest }>()
);

export const loadGameHistory = createAction(
  '[Account Page] Load Bingo history',
  props<{ payload: BingoHistoryRequest }>()
);

export const updateUserInfo = createAction(
  '[Account/PrivateInfo Page] Update user info',
  props<{ payload: UpdatedUserInfo }>()
);

export const changePassword = createAction(
  '[Account/PrivateInfo Page] Change password',
  props<{ payload: ChangePasswordRequest }>()
);

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

export const saveUserProfile = createAction(
  '[Account/PublicProfile Page] Save User profile',
  props<{ payload: UpdateUserProfileRequest }>()
);

export const saveUserProfilePicture = createAction(
  '[Account/PublicProfileEdit Page] Save User profile',
  props<{ picture: string; alias: string }>()
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

export const loadTop5Games = createAction(
  '[Account/Dashboard] Get top 5 games'
);

export const getUserProfilePicture = createAction(
  '[Account/Profile Page] Get user profile picture',
  props<{ alias: string }>()
);
