import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { BingoService } from '../services/bingo.service';
import { BingoApiActions, BingoPageActions } from './actions';

@Injectable()
export class BingoEffects {
  constructor(private actions$: Actions, private bingoService: BingoService) {}

  loadBingoGames$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BingoPageActions.loadBingoGames),
      mergeMap(() =>
        this.bingoService.getBingoGames().pipe(
          map((bingoGames) =>
            BingoApiActions.loadBingoGamesSuccess({
              bingoGames,
            })
          ),
          catchError((error) =>
            of(BingoApiActions.loadBingoGamesFailure({ error }))
          )
        )
      )
    );
  });
}
