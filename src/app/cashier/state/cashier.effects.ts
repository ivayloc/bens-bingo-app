import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { CashierService } from '../services/cashier.service';
import { CashierApiActions, CashierPageActions } from './actions';

@Injectable()
export class CashierEffects {
  constructor(
    private actions$: Actions,
    private cashierService: CashierService
  ) {}

  loadPaymentMethods$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CashierPageActions.loadPaymentMethods),
      mergeMap(() =>
        this.cashierService.getPaymentMethods().pipe(
          map((paymentMethods) =>
            CashierApiActions.loadPaymentMethodsSuccess({
              paymentMethods,
            })
          ),
          catchError((error) =>
            of(CashierApiActions.loadPaymentMethodsFailure({ error }))
          )
        )
      )
    );
  });

  loadCashOutMethods$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CashierPageActions.loadCashOutMethods),
      mergeMap(() =>
        this.cashierService.getCashOutMethods().pipe(
          map((cashOutMethods) =>
            CashierApiActions.loadCashOutMethodsSuccess({
              cashOutMethods,
            })
          ),
          catchError((error) =>
            of(CashierApiActions.loadCashOutMethodsFailure({ error }))
          )
        )
      )
    );
  });
}
