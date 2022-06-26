import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, forkJoin, map, mergeMap, of } from 'rxjs';
import { SlotsService } from '../services/slots.service';
import { SlotsApiActions, SlotsPageActions } from './actions';

@Injectable()
export class SlotsEffects {
  constructor(private actions$: Actions, private slotsService: SlotsService) {}

  loadSlotsDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SlotsPageActions.loadSlotsDetails),
      mergeMap(() =>
        forkJoin({
          slotsGames: this.slotsService.getSlotsGames(),
          chatModerators: this.slotsService.getNewGames(),
        }).pipe(
          map((slotsDetails) =>
            SlotsApiActions.loadSlotsDetailsSuccess({
              slotsDetails,
            })
          ),
          catchError((error) =>
            of(SlotsApiActions.loadSlotsDetailsFailure({ error }))
          )
        )
      )
    );
  });
}
