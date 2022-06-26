import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, forkJoin, map, mergeMap, of } from 'rxjs';
import { BingoService } from '../services/bingo.service';
import { BingoApiActions, BingoPageActions } from './actions';

@Injectable()
export class BingoEffects {
  constructor(private actions$: Actions, private bingoService: BingoService) {}

  loadBingoDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BingoPageActions.loadBingoDetails),
      mergeMap(() =>
        forkJoin({
          bingoGames: this.bingoService.getBingoGames(),
          comingUp: this.bingoService.getComingUp(),
          recentWinners: this.bingoService.getRecentWinners(),
          chatModerators: this.bingoService.getChatModerators(),
        }).pipe(
          map((bingoDetails) =>
            BingoApiActions.loadBingoDetailsSuccess({
              bingoDetails,
            })
          ),
          catchError((error) =>
            of(BingoApiActions.loadBingoDetailsFailure({ error }))
          )
        )
      )
    );
  });
}
