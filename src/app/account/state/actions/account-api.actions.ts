import { createAction, props } from '@ngrx/store';
import { AddFriendResult } from '../../models/add-friend-result';
import { FriendRequestResult } from '../../models/friend-request-result';
import { FriendsList } from '../../models/friends-list-response';
import { GameHistory } from '../../models/game-history';
import { SearchUserResult } from '../../models/search-user-result';
import { Top5Games } from '../../models/top5-games';
import { Transaction } from '../../models/transaction';
import { UserProfile } from '../../models/user-profile';
import { UserProfilePicture } from '../../models/user-profile-picture';

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
export const searchUserSuccess = createAction(
  '[Account/Buddies API] Search for a user SUCCESS',
  props<{ searchUserResult: SearchUserResult }>()
);

export const searchUserFailure = createAction(
  '[Account/Buddies API] Search for a user FAILURE',
  props<{ error: string }>()
);
export const addFriendSuccess = createAction(
  '[Account/Buddies API] Add friend SUCCESS',
  props<{ addFriendResult: AddFriendResult }>()
);

export const addFriendFailure = createAction(
  '[Account/Buddies API] Add friend FAILURE',
  props<{ error: string }>()
);
export const cancelOutgoingFriendRequestSuccess = createAction(
  '[Account/Buddies API] Cancel outgoing friend request SUCCESS',
  props<{
    cancelOutgoingFriendRequestResult: FriendRequestResult;
  }>()
);

export const cancelOutgoingFriendRequestFailure = createAction(
  '[Account/Buddies API] Cancel outgoing friend request FAILURE',
  props<{ error: string }>()
);
export const approveFriendRequestSuccess = createAction(
  '[Account/Buddies API] Approve friend request SUCCESS',
  props<{
    cancelOutgoingFriendRequestResult: FriendRequestResult;
  }>()
);

export const approveFriendRequestFailure = createAction(
  '[Account/Buddies API] Approve friend request FAILURE',
  props<{ error: string }>()
);
export const loadTop5GamesSuccess = createAction(
  '[Account/Dashboard API] Get top 5 games SUCCESS',
  props<{
    top5Games: Top5Games;
  }>()
);

export const loadTop5GamesFailure = createAction(
  '[Account/Dashboard API] Get top 5 games FAILURE',
  props<{ error: string }>()
);

export const updateUserInfoSuccess = createAction(
  '[Account/PrivateInfo API] Update user info SUCCESS',
  props<{
    success: boolean;
  }>()
);

export const updateUserInfoFailure = createAction(
  '[Account/PrivateInfo API] Update user info FAILURE',
  props<{ error: string }>()
);

export const saveUserProfileSuccess = createAction(
  '[Account/PublicProfile API] Save public profile SUCCESS',
  props<{
    success: boolean;
  }>()
);

export const saveUserProfileFailure = createAction(
  '[Account/PublicProfile API] Save public profile FAILURE',
  props<{ error: string }>()
);

export const getUserProfilePictureSuccess = createAction(
  '[Account/Profile API] Get user profile picture SUCCESS',
  props<{
    userProfilePicture: UserProfilePicture;
  }>()
);

export const getUserProfilePictureFailure = createAction(
  '[Account/Profile API] Get user profile picture FAILURE',
  props<{ error: string }>()
);

export const saveUserProfilePictureSuccess = createAction(
  '[Account/PublicProfileEdit API] Save user profile picture SUCCESS',
  props<{
    userProfilePicture: UserProfilePicture;
  }>()
);

export const saveUserProfilePictureFailure = createAction(
  '[Account/PublicProfileEdit API] Save user profile picture FAILURE',
  props<{ error: string }>()
);

export const changePasswordSuccess = createAction(
  '[Account/PrivateInfo API] Change password SUCCESS',
  props<{
    success: boolean;
  }>()
);

export const changePasswordFailure = createAction(
  '[Account/PrivateInfo API] Change password FAILURE',
  props<{ error: string }>()
);
