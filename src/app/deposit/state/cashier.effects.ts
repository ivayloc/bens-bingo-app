import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
import { selectTransactionId } from '.';
import { CashierService } from '../services/cashier.service';
import { CashierApiActions, CashierPageActions } from './actions';

@Injectable()
export class CashierEffects {
  constructor(
    private actions$: Actions,
    private cashierService: CashierService,
    private router: Router,
    private userService: UserService,
    private store: Store
  ) {}

  loadPaymentMethods$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CashierPageActions.loadPaymentMethods),
      mergeMap(() =>
        this.cashierService.getPaymentMethods().pipe(
          map((paymentMethods) =>
            CashierApiActions.getPaymentMethodsSuccess({
              paymentMethods,
            })
          ),
          catchError((error) =>
            of(CashierApiActions.getPaymentMethodsFailure({ error }))
          )
        )
      )
    );
  });

  navigateToSelectedState$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(CashierPageActions.setSelectedDepositMethod),
        tap(({ type, id }) => {
          this.router.navigate(['/cashier/deposit/', id]);
        })
      );
    },
    { dispatch: false }
  );

  makeDeposit$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CashierPageActions.makeDeposit),

      mergeMap(({ payload }) =>
        this.cashierService.makeDeposit(payload).pipe(
          map((depositAccount) =>
            CashierApiActions.makeDepositSuccess({ depositAccount })
          ),
          catchError((error) =>
            of(CashierApiActions.makeDepositFailure({ error }))
          )
        )
      )
    );
  });

  depositAddAccount$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CashierPageActions.depositAddAccount),
      mergeMap(({ payload }) =>
        this.cashierService.depositAddAccount(payload).pipe(
          map((success) => CashierApiActions.depositAddAccountSuccess(success)),
          catchError((error) =>
            of(CashierApiActions.depositAddAccountFailure({ error }))
          )
        )
      )
    );
  });

  depositUpdateAccount$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CashierPageActions.depositUpdateAccount),
      mergeMap(({ payload }) =>
        this.cashierService.depositUpdateAccount(payload).pipe(
          map((success) =>
            CashierApiActions.depositUpdateAccountSuccess(success)
          ),
          catchError((error) =>
            of(CashierApiActions.depositUpdateAccountFailure({ error }))
          )
        )
      )
    );
  });

  updateUserDepositDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CashierPageActions.updateUserDepositDetails),
      mergeMap(({ payload }) =>
        this.userService.updateUserInfo(payload).pipe(
          map((success) =>
            CashierApiActions.updateUserDepositDetailsSuccess(success)
          ),
          catchError((error) =>
            of(CashierApiActions.updateUserDepositDetailsFailure({ error }))
          )
        )
      )
    );
  });

  confirmDeposit$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CashierPageActions.confirmDeposit),
      concatLatestFrom(() => this.store.select(selectTransactionId)),
      mergeMap(([type, transactionId]) =>
        this.cashierService.confirmDeposit(transactionId).pipe(
          map((confirmedDeposit) =>
            CashierApiActions.confirmDepositSuccess({ confirmedDeposit })
          ),
          catchError((error) =>
            of(CashierApiActions.confirmDepositFailure({ error }))
          )
        )
      )
    );
  });

  reloadPaymentMethods$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        CashierApiActions.depositAddAccountSuccess,
        CashierApiActions.depositUpdateAccountSuccess
      ),
      map(() => CashierPageActions.loadPaymentMethods())
    );
  });
}
