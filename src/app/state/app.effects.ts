import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { BingoService } from '../bingo/services/bingo.service';
import { CasinoService } from '../shared/services/casino.service';
import { AppApiActions, AppPageActions } from './actions';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private casinoService: CasinoService,
    private bingoService: BingoService
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
}
