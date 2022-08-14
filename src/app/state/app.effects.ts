import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { BingoService } from '../bingo/services/bingo.service';
import { AuthService } from '../core/service/auth.service';
import { LoginDialogComponent } from '../shared/components/login-dialog/login-dialog.component';
import { CasinoService } from '../shared/services/casino.service';
import { UserRegistrationService } from '../shared/services/user-registration.service';
import { AppApiActions, AppPageActions } from './actions';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private casinoService: CasinoService,
    private bingoService: BingoService,
    private userRegistration: UserRegistrationService,
    private authService: AuthService,
    private dialog: MatDialog,
    private router: Router
  ) {}

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
}
