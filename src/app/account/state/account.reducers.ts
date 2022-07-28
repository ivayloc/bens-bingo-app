import { createReducer, on } from '@ngrx/store';
import { Friend } from '../models/friend';
import { FriendsList } from '../models/friends-list-response';
import { GameHistory } from '../models/game-history';
import { SearchUserResult } from '../models/search-user-result';

import { Transaction } from '../models/transaction';
import { UserInfo } from '../models/user-info';
import { UserProfile } from '../models/user-profile';
import { AccountApiActions } from './actions';

export interface AccountState {
  transactionsHistory: Transaction[];
  gameHistory: GameHistory[];
  userInfo: UserInfo;
  pendingFriends: Friend[];
  pendingOutgoing: Friend[];
  friends: Friend[];
  selectedUserProfile: UserProfile;
  selectedUserAlias: string;
  searchUserResult: SearchUserResult;
  error: any;
}

const initialState: AccountState = {
  transactionsHistory: [],
  gameHistory: [],
  userInfo: {} as UserInfo,
  pendingFriends: {} as Friend[],
  pendingOutgoing: {} as Friend[],
  friends: {} as Friend[],
  selectedUserProfile: {} as UserProfile,
  selectedUserAlias: '',
  searchUserResult: {} as SearchUserResult,
  error: {},
};

export const accountReducer = createReducer<AccountState>(
  initialState,
  on(
    AccountApiActions.loadTransactionsHistorySuccess,
    (state, { transactionsHistory }): AccountState => {
      return {
        ...state,
        transactionsHistory,
        error: '',
      };
    }
  ),
  on(
    AccountApiActions.loadTransactionsHistoryFailure,
    (state, action): AccountState => {
      return {
        ...state,
        transactionsHistory: [],
        error: action.error,
      };
    }
  ),
  on(
    AccountApiActions.loadGameHistorySuccess,
    (state, { gameHistory }): AccountState => {
      return {
        ...state,
        gameHistory,
        error: '',
      };
    }
  ),
  on(
    AccountApiActions.loadGameHistoryFailure,
    (state, action): AccountState => {
      return {
        ...state,
        gameHistory: [],
        error: action.error,
      };
    }
  ),
  on(
    AccountApiActions.loadUserInfoSuccess,
    (state, { userInfo }): AccountState => {
      return {
        ...state,
        userInfo,
        error: '',
      };
    }
  ),
  on(AccountApiActions.loadUserInfoFailure, (state, action): AccountState => {
    return {
      ...state,
      userInfo: {} as UserInfo,
      error: action.error,
    };
  }),
  on(
    AccountApiActions.loadUserFriendsSuccess,
    (state, { userFriends }): AccountState => {
      return {
        ...state,
        ...userFriends,
        error: '',
      };
    }
  ),
  on(
    AccountApiActions.loadUserFriendsFailure,
    (state, action): AccountState => {
      return {
        ...state,
        userInfo: {} as UserInfo,
        error: action.error,
      };
    }
  ),
  on(
    AccountApiActions.removeUserFriendSuccess,
    (state, { friendalias }): AccountState => {
      const friends = state.friends.filter(
        (friend) => friend.alias !== friendalias
      );

      return {
        ...state,
        friends,
        error: '',
      };
    }
  ),
  on(
    AccountApiActions.removeUserFriendFailure,
    (state, action): AccountState => {
      return {
        ...state,
        error: action.error,
      };
    }
  ),
  on(
    AccountApiActions.declinePendingFriendSuccess,
    (state, { friendalias }): AccountState => {
      const pendingFriends = state.pendingFriends.filter(
        (friend) => friend.alias !== friendalias
      );

      return {
        ...state,
        pendingFriends,
        error: '',
      };
    }
  ),
  on(
    AccountApiActions.declinePendingFriendFailure,
    (state, action): AccountState => {
      return {
        ...state,
        error: action.error,
      };
    }
  ),
  on(
    AccountApiActions.showUserProfileSuccess,
    (state, { selectedUserProfile, friendalias }): AccountState => {
      return {
        ...state,
        selectedUserProfile,
        selectedUserAlias: friendalias,
        error: '',
      };
    }
  ),
  on(
    AccountApiActions.showUserProfileFailure,
    (state, action): AccountState => {
      return {
        ...state,
        selectedUserProfile: {} as UserProfile,
        selectedUserAlias: '',
        error: action.error,
      };
    }
  ),
  on(
    AccountApiActions.searchUserSuccess,
    (state, { searchUserResult }): AccountState => {
      return {
        ...state,
        searchUserResult,
        error: '',
      };
    }
  ),
  on(AccountApiActions.searchUserFailure, (state, action): AccountState => {
    return {
      ...state,
      selectedUserProfile: {} as UserProfile,
      searchUserResult: {} as SearchUserResult,
      error: action.error,
    };
  })
);
