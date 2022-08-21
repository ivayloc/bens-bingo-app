import { MatTableDataSource } from '@angular/material/table';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from '../../state/app.states';
import { AccountState } from './account.reducers';

export interface State extends AppState.State {
  account: AccountState;
}

const getAccountState = createFeatureSelector<AccountState>('account');

export const getTransactionsHistory = createSelector(
  getAccountState,
  (state) => new MatTableDataSource(state.transactionsHistory)
);

export const getBingoHistory = createSelector(
  getAccountState,
  (state) => new MatTableDataSource(state.gameHistory)
);

export const getFriends = createSelector(
  getAccountState,
  (state) => new MatTableDataSource(state.friends)
);

export const getPendingFriendsRequest = createSelector(
  getAccountState,
  (state) => new MatTableDataSource(state.pendingFriends)
);

export const getPendingOutgoingFriendsRequest = createSelector(
  getAccountState,
  (state) => new MatTableDataSource(state.pendingOutgoing)
);

export const selectSelectedUserprofileForEdit = createSelector(
  getAccountState,
  ({ selectedUserProfile }) => {
    return {
      ...selectedUserProfile,
    };
  }
);

export const getSelectedUserProfile = createSelector(
  getAccountState,
  ({ selectedUserProfile }) => {
    return {
      ...selectedUserProfile,
      profile: new Map(Object.entries(selectedUserProfile?.profile || {})),
    };
  }
);

export const getSelectedUserAlias = createSelector(
  getAccountState,
  (state) => state.selectedUserAlias
);

export const getSearchUserResult = createSelector(
  getAccountState,
  (state) => state.searchUserResult
);

export const selectTop5NewestGames = createSelector(
  getAccountState,
  (state) => state.top5Games?.newestGames
);

export const selectTop5MostPlayedGames = createSelector(
  getAccountState,
  (state) => state.top5Games?.mostPlayedGames
);

export const selectTop5JackpotGames = createSelector(
  getAccountState,
  (state) => state.top5Games?.jackpots
);
