import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { HomeService } from '../services/home.service';
import { HomeApiActions, HomePageActions } from './actions';

@Injectable()
export class HomeEffects {
  constructor(private actions$: Actions, private homeService: HomeService) {}

  loadBingoGames$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomePageActions.loadBingoGames),
      mergeMap(() =>
        this.homeService.getBingoGames().pipe(
          map((bingoGames) =>
            HomeApiActions.loadBingoGamesSuccess({ bingoGames })
          ),
          catchError((error) =>
            of(HomeApiActions.loadBingoGamesFailure({ error }))
          )
        )
      )
    );
  });

  loadSlotsGames$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomePageActions.loadSlotsGames),
      mergeMap(() =>
        this.homeService.getSlotsGames().pipe(
          map((slotsGames) =>
            HomeApiActions.loadSlotsGamesSuccess({ slotsGames })
          ),
          catchError((error) =>
            of(HomeApiActions.loadSlotsGamesFailure({ error }))
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
          map((jackpots) => HomeApiActions.loadJackpotsSuccess({ jackpots })),
          catchError((error) =>
            of(HomeApiActions.loadJackpotsFailure({ error }))
          )
        )
      )
    );
  });

  loadRecentWinners$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomePageActions.loadRecentWinners),
      mergeMap(() =>
        this.homeService.getRecentWinners().pipe(
          map((recentWinners) =>
            HomeApiActions.loadRecentWinnersSuccess({ recentWinners })
          ),
          catchError((error) =>
            of(HomeApiActions.loadRecentWinnersFailure({ error }))
          )
        )
      )
    );
  });
}
