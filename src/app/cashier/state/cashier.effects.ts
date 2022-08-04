import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, forkJoin, map, mergeMap, of } from 'rxjs';
import { CashierService } from '../services/cashier.service';
import { CashierApiActions, CashierPageActions } from './actions';

@Injectable()
export class CashierEffects {
  constructor(
    private actions$: Actions,
    private cashierService: CashierService
  ) {}

  // loadCashierDetails$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(CashierPageActions.loadCashierDetails),
  //     mergeMap(() =>
  //       forkJoin({
  //         cashierGames: this.cashierService.getCashierGames(),
  //         comingUp: this.cashierService.getComingUp(),
  //         recentWinners: this.cashierService.getRecentWinners(),
  //         chatModerators: this.cashierService.getChatModerators(),
  //         newGames: this.cashierService.getNewGames(),
  //       }).pipe(
  //         map((cashierDetails) =>
  //           CashierApiActions.loadCashierDetailsSuccess({
  //             cashierDetails,
  //           })
  //         ),
  //         catchError((error) =>
  //           of(CashierApiActions.loadCashierDetailsFailure({ error }))
  //         )
  //       )
  //     )
  //   );
  // });
}
