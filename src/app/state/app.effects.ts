import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { BingoService } from '../bingo/services/bingo.service';
import { CasinoService } from '../shared/services/casino.service';
import { UserRegistrationService } from '../shared/services/user-registration.service';
import { AppApiActions, AppPageActions } from './actions';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private casinoService: CasinoService,
    private bingoService: BingoService,
    private userRegistration: UserRegistrationService
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
}
