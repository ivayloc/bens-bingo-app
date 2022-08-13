import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, forkJoin, map, mergeMap, of } from 'rxjs';
import { CasinoService } from 'src/app/shared/services/casino.service';
import { HomeService } from '../services/home.service';
import { HomeApiActions, HomePageActions } from './actions';

@Injectable()
export class HomeEffects {
  constructor(
    private actions$: Actions,
    private homeService: HomeService,
    private casinoService: CasinoService
  ) {}

  loadBingoGames$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomePageActions.loadHomeDetails),
      mergeMap(() =>
        forkJoin({
          bingoGames: this.homeService.getBingoGames(),
          slotsGames: this.casinoService.getSlotsGames(),
          jackpots: this.homeService.getJackpots(),
          newGames: this.homeService.getNewGames(),
        }).pipe(
          map((homeDetails) =>
            HomeApiActions.loadHomeDetailsSuccess({
              homeDetails,
            })
          ),
          catchError((error) =>
            of(HomeApiActions.loadHomeDetailsFailure({ error }))
          )
        )
      )
    );
  });

  loadJackpots$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomePageActions.loadJackpots),
      mergeMap(() =>
        this.homeService.getJackpots().pipe(
          map((jackpots) =>
            HomeApiActions.loadJackpotsSuccess({
              jackpots,
            })
          ),
          catchError((error) =>
            of(HomeApiActions.loadJackpotsFailure({ error }))
          )
        )
      )
    );
  });
}
