import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, forkJoin, map, mergeMap, of } from 'rxjs';
import { HomeService } from '../services/home.service';
import { HomeApiActions, HomePageActions } from './actions';

@Injectable()
export class HomeEffects {
  constructor(private actions$: Actions, private homeService: HomeService) {}

  loadBingoGames$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomePageActions.loadHomeDetails),
      mergeMap(() =>
        forkJoin([
          this.homeService.getBingoGames(),
          this.homeService.getSlotsGames(),
          this.homeService.getJackpots(),
          this.homeService.getRecentWinners(),
        ]).pipe(
          map(([bingoGames, slotsGames, jackpots, recentWinners]) =>
            HomeApiActions.loadHomeDetailsSuccess({
              homeDetails: { bingoGames, slotsGames, jackpots, recentWinners },
            })
          ),
          catchError((error) =>
            of(HomeApiActions.loadHomeDetailsFailure({ error }))
          )
        )
      )
    );
  });
}
