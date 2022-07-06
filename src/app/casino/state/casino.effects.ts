import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, forkJoin, map, mergeMap, of } from 'rxjs';
import { CasinoService } from 'src/app/shared/services/casino.service';
import { CasinoApiActions, CasinoPageActions } from './actions';

@Injectable()
export class CasinoEffects {
  constructor(
    private actions$: Actions,
    private casinoService: CasinoService
  ) {}

  loadCasinoDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CasinoPageActions.loadCasinoDetails),
      mergeMap(() =>
        forkJoin({
          slotsGames: this.casinoService.getSlotsGames(),
          newGames: this.casinoService.getNewGames(),
        }).pipe(
          map((casinoDetails) =>
            CasinoApiActions.loadCasinoDetailsSuccess({
              casinoDetails,
            })
          ),
          catchError((error) =>
            of(CasinoApiActions.loadCasinoDetailsFailure({ error }))
          )
        )
      )
    );
  });
}
