import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, forkJoin, map, mergeMap, of } from 'rxjs';
import { CasinoService } from 'src/app/shared/services/casino.service';
import { AccountService } from '../services/account.service';
import { AccountApiActions, AccountPageActions } from './actions';

@Injectable()
export class AccountEffects {
  constructor(
    private actions$: Actions,
    private accountService: AccountService,
    private casinoService: CasinoService
  ) {}

  loadTransactions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountPageActions.loadTransactionsHistory),
      mergeMap(({ payload }) =>
        this.accountService.getTransactionsHistory(payload).pipe(
          map((transactionsHistory) =>
            AccountApiActions.loadTransactionsHistorySuccess({
              transactionsHistory,
            })
          ),
          catchError((error) =>
            of(AccountApiActions.loadTransactionsHistoryFailure({ error }))
          )
        )
      )
    );
  });
  loadGameHistory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountPageActions.loadGameHistory),
      mergeMap(({ payload }) =>
        this.accountService.getGameHistory(payload).pipe(
          map((gameHistory) =>
            AccountApiActions.loadGameHistorySuccess({
              gameHistory,
            })
          ),
          catchError((error) =>
            of(AccountApiActions.loadGameHistoryFailure({ error }))
          )
        )
      )
    );
  });
}
