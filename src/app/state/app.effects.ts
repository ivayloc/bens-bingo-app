import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  exhaustMap,
  map,
  mergeMap,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { BingoService } from '../bingo/services/bingo.service';
import { AuthService } from '../core/service/auth.service';
import { LoginDialogComponent } from '../shared/components/login-dialog/login-dialog.component';
import { CasinoService } from '../shared/services/casino.service';
import { MembersService } from '../shared/services/members.service';
import { UserRegistrationService } from '../shared/services/user-registration.service';
import { UserService } from '../shared/services/user.service';
import { AppApiActions, AppPageActions } from './actions';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private casinoService: CasinoService,
    private bingoService: BingoService,
    private userRegistration: UserRegistrationService,
    private authService: AuthService,
    private membersService: MembersService,
    private dialog: MatDialog,
    private router: Router,
    private userService: UserService
  ) {}

  loadUserInfo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppPageActions.loadUserInfo),
      exhaustMap(() =>
        this.userService.getUserInfo().pipe(
          map((userInfo) =>
            AppApiActions.loadUserInfoSuccess({
              userInfo,
            })
          ),
          catchError((error) =>
            of(AppApiActions.loadUserInfoFailure({ error }))
          )
        )
      )
    );
  });

  loadCasinoRecentWinners$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppPageActions.loadCasinoRecentWinners),
      mergeMap(() =>
        this.casinoService.getRecentWinners().pipe(
          map((recentWinners) =>
            AppApiActions.loadCasinoRecentWinnersSuccess({
              recentWinners,
            })
          ),
          catchError((error) =>
            of(AppApiActions.loadCasinoRecentWinnersFailure({ error }))
          )
        )
      )
    );
  });

  loadBingoRecentWinners$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppPageActions.loadBingoRecentWinners),
      mergeMap(() =>
        this.bingoService.getRecentWinners().pipe(
          map((recentWinners) =>
            AppApiActions.loadBingoRecentWinnersSuccess({
              recentWinners,
            })
          ),
          catchError((error) =>
            of(AppApiActions.loadBingoRecentWinnersFailure({ error }))
          )
        )
      )
    );
  });

  userRegistration$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppPageActions.userRegistration),
      mergeMap(({ payload }) =>
        this.userRegistration.register(payload).pipe(
          map((success) =>
            AppApiActions.userRegistrationSuccess({
              success,
            })
          ),
          catchError((error) =>
            of(AppApiActions.userRegistrationFailure({ error }))
          )
        )
      )
    );
  });

  userLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppPageActions.userLogin),
      mergeMap(({ payload }) =>
        this.authService.login(payload.email, payload.password).pipe(
          map((success) =>
            AppApiActions.userLoginSuccess({
              success,
            })
          ),
          catchError((error) => of(AppApiActions.userLoginFailure({ error })))
        )
      )
    );
  });

  userLogout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppPageActions.userLogout),
      mergeMap(() =>
        this.authService.userLogout().pipe(
          map(({ success }) =>
            AppApiActions.userLogoutSuccess({
              success,
            })
          ),
          catchError((error) => of(AppApiActions.userLogoutFailure({ error })))
        )
      )
    );
  });

  resetPasswordInquiry$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppPageActions.resetPasswordInquiry),
      mergeMap(({ accountIdentifier }) =>
        this.authService.resetPasswordInquiry(accountIdentifier).pipe(
          map((resetPasswordMethods) =>
            AppApiActions.resetPasswordInquirySuccess({ resetPasswordMethods })
          ),
          catchError((error) =>
            of(AppApiActions.resetPasswordInquiryFailure({ error }))
          )
        )
      )
    );
  });

  getPasswordResetCode$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppPageActions.getPasswordResetCode),
      mergeMap(({ accountIdentifier, method }) =>
        this.authService.getPasswordResetCode(method, accountIdentifier).pipe(
          map(({ success }) =>
            AppApiActions.getPasswordResetCodeSuccess({ success })
          ),
          catchError((error) =>
            of(AppApiActions.getPasswordResetCodeFailure({ error }))
          )
        )
      )
    );
  });

  sendPasswordResetKey$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppPageActions.sendPasswordResetKey),
      mergeMap(({ accountIdentifier, resetKey }) =>
        this.authService.sendPasswordResetKey(resetKey, accountIdentifier).pipe(
          map(({ success }) =>
            AppApiActions.sendPasswordResetKeySuccess({ success })
          ),
          catchError((error) =>
            of(AppApiActions.sendPasswordResetKeyFailure({ error }))
          )
        )
      )
    );
  });

  getChatModerators$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppPageActions.getChatModerators),
      mergeMap(() =>
        this.membersService.getChatModerators().pipe(
          map((chatModerators) =>
            AppApiActions.getChatModeratorsSuccess({ chatModerators })
          ),
          catchError((error) =>
            of(AppApiActions.getChatModeratorsFailure({ error }))
          )
        )
      )
    );
  });

  userIsLoggedIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppPageActions.userIsLoggedIn, AppApiActions.userLoginSuccess),
      switchMap(() => of(AppPageActions.loadUserInfo()))
    );
  });

  showLogin$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AppPageActions.showLogin),
        tap(() => {
          this.dialog.open(LoginDialogComponent, {
            id: 'loginDialog',
            disableClose: true,
          });
        })
      );
    },
    { dispatch: false }
  );

  hydeLogin$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AppPageActions.hydeLogin, AppApiActions.userLoginSuccess),
        tap(() => {
          this.dialog.getDialogById('loginDialog')?.close();
        })
      );
    },
    { dispatch: false }
  );

  userLogoutClearStorage$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AppApiActions.userLogoutSuccess),
        tap(() => {
          localStorage.removeItem('usersessionid');
          this.router.navigateByUrl('/');
        })
      );
    },
    { dispatch: false }
  );

  redirectOnLogin$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AppApiActions.userLoginSuccess),
        tap(() => {
          const path = localStorage.getItem('redirectTo') as string;
          this.router.navigateByUrl(path);
        })
      );
    },
    { dispatch: false }
  );
}
