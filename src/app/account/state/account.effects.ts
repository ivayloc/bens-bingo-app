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

  loadBingoGames$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountPageActions.loadAccountDetails),
      mergeMap(({ startdate, enddate }) =>
        this.accountService.getTransactionsHistory(startdate, enddate).pipe(
          map((transactionsHistory) =>
            AccountApiActions.loadAccountDetailsSuccess({
              transactionsHistory,
            })
          ),
          catchError((error) =>
            of(AccountApiActions.loadAccountDetailsFailure({ error }))
          )
        )
      )
    );
  });
}
