import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, forkJoin, map, mergeMap, of, switchMap } from 'rxjs';
import { CasinoService } from 'src/app/shared/services/casino.service';
import { AccountService } from '../services/account.service';
import { AccountApiActions, AccountPageActions } from './actions';

@Injectable()
export class AccountEffects {
  constructor(
    private actions$: Actions,
    private accountService: AccountService,
    private casinoService: CasinoService
  ) {}

  loadTransactions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountPageActions.loadTransactionsHistory),
      mergeMap(({ payload }) =>
        this.accountService.getTransactionsHistory(payload).pipe(
          map((transactionsHistory) =>
            AccountApiActions.loadTransactionsHistorySuccess({
              transactionsHistory,
            })
          ),
          catchError((error) =>
            of(AccountApiActions.loadTransactionsHistoryFailure({ error }))
          )
        )
      )
    );
  });
  loadGameHistory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountPageActions.loadGameHistory),
      mergeMap(({ payload }) =>
        this.accountService.getGameHistory(payload).pipe(
          map((gameHistory) =>
            AccountApiActions.loadGameHistorySuccess({
              gameHistory,
            })
          ),
          catchError((error) =>
            of(AccountApiActions.loadGameHistoryFailure({ error }))
          )
        )
      )
    );
  });
  loadUserInfo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountPageActions.loadUserInfo),
      mergeMap(() =>
        this.accountService.getUserInfo().pipe(
          map((userInfo) =>
            AccountApiActions.loadUserInfoSuccess({
              userInfo,
            })
          ),
          catchError((error) =>
            of(AccountApiActions.loadUserInfoFailure({ error }))
          )
        )
      )
    );
  });
  loadFriends$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountPageActions.loadFriends),
      mergeMap(() =>
        this.accountService.getUserFriendsList().pipe(
          map((userFriends) =>
            AccountApiActions.loadUserFriendsSuccess({ userFriends })
          ),
          catchError((error) =>
            of(AccountApiActions.loadUserFriendsFailure({ error }))
          )
        )
      )
    );
  });
  removeFriend$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountPageActions.removeFriend),
      mergeMap(({ friendalias }) =>
        this.accountService.removeUserFriend(friendalias).pipe(
          map(() => AccountApiActions.removeUserFriendSuccess({ friendalias })),
          catchError((error) =>
            of(AccountApiActions.removeUserFriendFailure({ error }))
          )
        )
      )
    );
  });
  declinePendingFriend$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountPageActions.declinePendingFriendRequest),
      mergeMap(({ friendalias }) =>
        this.accountService.declinePendingFriendRequest(friendalias).pipe(
          map(() =>
            AccountApiActions.declinePendingFriendSuccess({ friendalias })
          ),
          catchError((error) =>
            of(AccountApiActions.declinePendingFriendFailure({ error }))
          )
        )
      )
    );
  });
  showUserProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountPageActions.showUserProfile),
      mergeMap(({ friendalias }) =>
        this.accountService.showUserProfile(friendalias).pipe(
          map((selectedUserProfile) =>
            AccountApiActions.showUserProfileSuccess({
              selectedUserProfile,
              friendalias,
            })
          ),
          catchError((error) =>
            of(AccountApiActions.showUserProfileFailure({ error }))
          )
        )
      )
    );
  });
  searchUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountPageActions.searchUser),
      mergeMap(({ friendalias }) =>
        this.accountService.searchUser(friendalias).pipe(
          map((searchUserResult) =>
            AccountApiActions.searchUserSuccess({
              searchUserResult,
            })
          ),
          catchError((error) =>
            of(AccountApiActions.searchUserFailure({ error }))
          )
        )
      )
    );
  });
  addFriend$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountPageActions.addFriend),
      mergeMap(({ friendalias }) =>
        this.accountService.addFriend(friendalias).pipe(
          switchMap(() => [
            AccountPageActions.loadFriends(),
            AccountPageActions.resetSearchUser(),
          ]),
          catchError((error) =>
            of(AccountApiActions.addFriendFailure({ error }))
          )
        )
      )
    );
  });
  cancelOutgoingFriendRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountPageActions.cancelOutgoingFriendRequest),
      mergeMap(({ friendalias }) =>
        this.accountService.cancelOutgoingFriendRequest(friendalias).pipe(
          map(() => AccountPageActions.loadFriends()),
          catchError((error) =>
            of(AccountApiActions.cancelOutgoingFriendRequestFailure({ error }))
          )
        )
      )
    );
  });
}
