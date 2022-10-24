import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, filter, map, mergeMap, of, tap } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
import { selectPaymentMethods, selectTransactionId } from '.';
import { DepositsService } from '../services/deposits.service';
import { DepositsApiActions, DepositsPageActions } from './actions';

@Injectable()
export class DepositsEffects {
  constructor(
    private actions$: Actions,
    private depositsService: DepositsService,
    private router: Router,
    private userService: UserService,
    private store: Store
  ) {}

  loadPaymentMethods$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DepositsPageActions.loadPaymentMethods),
      concatLatestFrom(() => this.store.select(selectPaymentMethods)),
      filter(([type, paymentMethods]) => !paymentMethods.length),
      mergeMap(() =>
        this.depositsService.getPaymentMethods().pipe(
          map((paymentMethods) =>
            DepositsApiActions.getPaymentMethodsSuccess({
              paymentMethods,
            })
          ),
          catchError((error) =>
            of(DepositsApiActions.getPaymentMethodsFailure({ error }))
          )
        )
      )
    );
  });

  navigateToSelectedState$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(DepositsPageActions.setSelectedDepositMethod),
        tap(({ id }) => {
          this.router.navigate(['/cashier/deposit/card', id]);
        })
      );
    },
    { dispatch: false }
  );

  makeDeposit$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DepositsPageActions.makeDeposit),

      mergeMap(({ payload }) =>
        this.depositsService.makeDeposit(payload).pipe(
          map((depositAccount) =>
            DepositsApiActions.makeDepositSuccess({ depositAccount })
          ),
          catchError((error) =>
            of(DepositsApiActions.makeDepositFailure({ error }))
          )
        )
      )
    );
  });

  depositAddAccount$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DepositsPageActions.depositAddAccount),
      mergeMap(({ payload }) =>
        this.depositsService.depositAddAccount(payload).pipe(
          map((success) =>
            DepositsApiActions.depositAddAccountSuccess(success)
          ),
          catchError((error) =>
            of(DepositsApiActions.depositAddAccountFailure({ error }))
          )
        )
      )
    );
  });

  depositUpdateAccount$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DepositsPageActions.depositUpdateAccount),
      mergeMap(({ payload }) =>
        this.depositsService.depositUpdateAccount(payload).pipe(
          map((success) =>
            DepositsApiActions.depositUpdateAccountSuccess(success)
          ),
          catchError((error) =>
            of(DepositsApiActions.depositUpdateAccountFailure({ error }))
          )
        )
      )
    );
  });

  updateUserDepositDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DepositsPageActions.updateUserDepositDetails),
      mergeMap(({ payload }) =>
        this.userService.updateUserInfo(payload).pipe(
          map((success) =>
            DepositsApiActions.updateUserDepositDetailsSuccess(success)
          ),
          catchError((error) =>
            of(DepositsApiActions.updateUserDepositDetailsFailure({ error }))
          )
        )
      )
    );
  });

  confirmDeposit$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DepositsApiActions.updateUserDepositDetailsSuccess),
      concatLatestFrom(() => this.store.select(selectTransactionId)),
      mergeMap(([type, transactionId]) =>
        this.depositsService.confirmDeposit(transactionId).pipe(
          map((confirmedDeposit) =>
            DepositsApiActions.confirmDepositSuccess({ confirmedDeposit })
          ),
          catchError((error) =>
            of(DepositsApiActions.confirmDepositFailure({ error }))
          )
        )
      )
    );
  });

  reloadPaymentMethods$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        DepositsApiActions.depositAddAccountSuccess,
        DepositsApiActions.depositUpdateAccountSuccess
      ),
      map(() => DepositsPageActions.loadPaymentMethods())
    );
  });
}
