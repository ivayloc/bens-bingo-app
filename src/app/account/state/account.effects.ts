import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, forkJoin, map, mergeMap, of, switchMap } from 'rxjs';
import { CasinoService } from 'src/app/shared/services/casino.service';
import { GamesService } from 'src/app/shared/services/games.service';
import { AccountService } from '../services/account.service';
import { AccountApiActions, AccountPageActions } from './actions';

@Injectable()
export class AccountEffects {
  constructor(
    private actions$: Actions,
    private accountService: AccountService,
    private casinoService: CasinoService,
    private gamesService: GamesService
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

  updateUserInfo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountPageActions.updateUserInfo),
      mergeMap(({ payload }) =>
        this.accountService.updateUserInfo(payload).pipe(
          map(({ success }) =>
            AccountApiActions.updateUserInfoSuccess({
              success,
            })
          ),
          catchError((error) =>
            of(AccountApiActions.updateUserInfoFailure({ error }))
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
  saveUserProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountPageActions.saveUserProfile),
      mergeMap(({ payload }) =>
        this.accountService.saveUserProfile(payload).pipe(
          map((success) => AccountApiActions.saveUserProfileSuccess(success)),
          catchError((error) =>
            of(AccountApiActions.saveUserProfileFailure({ error }))
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
  approveFriendRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountPageActions.approveFriendRequest),
      mergeMap(({ friendalias }) =>
        this.accountService.approveFriendRequest(friendalias).pipe(
          map(() => AccountPageActions.loadFriends()),
          catchError((error) =>
            of(AccountApiActions.approveFriendRequestFailure({ error }))
          )
        )
      )
    );
  });

  getUserProfilePicture$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountApiActions.showUserProfileSuccess),
      mergeMap(({ friendalias }) =>
        this.accountService.getUserProfilePicture(friendalias).pipe(
          map((userProfilePicture) =>
            AccountApiActions.getUserProfilePictureSuccess({
              userProfilePicture,
            })
          ),
          catchError((error) =>
            of(AccountApiActions.getUserProfilePictureFailure({ error }))
          )
        )
      )
    );
  });

  saveUserProfilePicture$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountPageActions.saveUserProfilePicture),
      mergeMap(({ picture, alias }) =>
        this.accountService.saveUserProfilePicture(picture, alias).pipe(
          map((userProfilePicture) =>
            AccountApiActions.saveUserProfilePictureSuccess({
              userProfilePicture,
            })
          ),
          catchError((error) =>
            of(AccountApiActions.saveUserProfilePictureFailure({ error }))
          )
        )
      )
    );
  });

  // setUserProfilePicture$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(AccountApiActions.showUserProfileSuccess),
  //     mergeMap(({ friendalias }) =>
  //       this.accountService.getUserProfilePicture(friendalias).pipe(
  //         map((userProfilePicture) =>
  //           AccountApiActions.getUserProfilePictureSuccess({
  //             userProfilePicture,
  //           })
  //         ),
  //         catchError((error) =>
  //           of(AccountApiActions.getUserProfilePictureFailure({ error }))
  //         )
  //       )
  //     )
  //   );
  // });

  loadTop5Games$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountPageActions.loadTop5Games),
      mergeMap(() =>
        forkJoin({
          newestGames: this.gamesService.getNewestGames(),
          mostPlayedGames: this.gamesService.getMostPlayedGames(),
          jackpots: this.gamesService.getJackpots(),
        }).pipe(
          map((top5Games) =>
            AccountApiActions.loadTop5GamesSuccess({
              top5Games,
            })
          ),
          catchError((error) =>
            of(AccountApiActions.loadTop5GamesFailure({ error }))
          )
        )
      )
    );
  });
}
