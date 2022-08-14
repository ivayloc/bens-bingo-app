import { createReducer, on } from '@ngrx/store';
import { Friend } from '../models/friend';
import { GameHistory } from '../models/game-history';
import { SearchUserResult } from '../models/search-user-result';
import { Top5Games } from '../models/top5-games';
import { Transaction } from '../models/transaction';
import { UserProfile } from '../models/user-profile';
import { AccountApiActions, AccountPageActions } from './actions';

export interface AccountState {
  transactionsHistory: Transaction[];
  gameHistory: GameHistory[];
  pendingFriends: Friend[];
  pendingOutgoing: Friend[];
  friends: Friend[];
  selectedUserProfile: UserProfile;
  selectedUserAlias: string;
  searchUserResult: SearchUserResult;
  top5Games: Top5Games;
  error: any;
}

const initialState: AccountState = {
  transactionsHistory: [],
  gameHistory: [],
  pendingFriends: {} as Friend[],
  pendingOutgoing: {} as Friend[],
  friends: {} as Friend[],
  selectedUserProfile: {} as UserProfile,
  selectedUserAlias: '',
  searchUserResult: {} as SearchUserResult,
  top5Games: {} as Top5Games,
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
        pendingFriends: [],
        pendingOutgoing: [],
        friends: [],
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
      searchUserResult: {} as SearchUserResult,
      error: action.error,
    };
  }),
  on(AccountPageActions.resetSearchUser, (state): AccountState => {
    return {
      ...state,
      searchUserResult: {} as SearchUserResult,
    };
  }),
  on(
    AccountApiActions.loadTop5GamesSuccess,
    (state, { top5Games }): AccountState => {
      return {
        ...state,
        top5Games,
        error: '',
      };
    }
  ),
  on(AccountApiActions.loadTop5GamesFailure, (state, action): AccountState => {
    return {
      ...state,
      top5Games: {} as Top5Games,
      error: action.error,
    };
  })
);
