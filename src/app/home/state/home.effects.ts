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
}
