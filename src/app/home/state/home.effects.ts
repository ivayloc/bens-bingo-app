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
        forkJoin({
          bingoGames: this.homeService.getBingoGames(),
          slotsGames: this.homeService.getSlotsGames(),
          jackpots: this.homeService.getJackpots(),
          recentWinners: this.homeService.getRecentWinners(),
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
}
