import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, forkJoin, map, mergeMap, of, tap } from 'rxjs';
import { CashierService } from '../services/cashier.service';
import { CashierApiActions, CashierPageActions } from './actions';

@Injectable()
export class CashierEffects {
  constructor(
    private actions$: Actions,
    private cashierService: CashierService,
    private router: Router,
    private route: ActivatedRoute
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

  loadCashOutMethods$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CashierPageActions.loadCashOutMethods),
      mergeMap(() =>
        this.cashierService.getCashOutMethods().pipe(
          map((cashOutMethods) =>
            CashierApiActions.getCashOutMethodsSuccess({
              cashOutMethods,
            })
          ),
          catchError((error) =>
            of(CashierApiActions.getCashOutMethodsFailure({ error }))
          )
        )
      )
    );
  });

  loadCashOutStatus$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CashierPageActions.loadCashOutStatus),
      mergeMap(() =>
        this.cashierService.getCashOutStatus().pipe(
          map((cashOutStatus) =>
            CashierApiActions.getCashOutStatusSuccess({
              cashOutStatus,
            })
          ),
          catchError((error) =>
            of(CashierApiActions.getCashOutStatusFailure({ error }))
          )
        )
      )
    );
  });

  loadCashOutDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CashierPageActions.loadCashOutDetails),
      mergeMap(() =>
        forkJoin([
          this.cashierService.getCashOutStatus(),
          this.cashierService.getCashOutMethods(),
        ]).pipe(
          map(([cashOutStatus, cashOutMethods]) =>
            CashierApiActions.getCashOutDetailsSuccess({
              cashOutStatus,
              cashOutMethods,
            })
          ),
          catchError((error) =>
            of(CashierApiActions.getCashOutDetailsFailure({ error }))
          )
        )
      )
    );
  });

  navigateToSelectedState$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          CashierPageActions.setSelectedDepositMethod,
          CashierPageActions.setSelectedCashOutMethod
        ),
        tap(({ type, id }) => {
          if (type === '[Cashier Page] Set selected deposit method') {
            this.router.navigate(['/cashier/deposit/', id]);
          }
          if (type === '[Cashier Page] Set selected cash-out method') {
            this.router.navigate(['/cashier/withdrawal/', id]);
          }
        })
      );
    },
    { dispatch: false }
  );

  getDepositLimits$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CashierPageActions.getDepositLimits),
      mergeMap(() =>
        this.cashierService.getDepositLimits().pipe(
          map((depositLimits) =>
            CashierApiActions.getDepositLimitsSuccess({
              depositLimits,
            })
          ),
          catchError((error) =>
            of(CashierApiActions.getDepositLimitsFailure({ error }))
          )
        )
      )
    );
  });

  setDepositLimit$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CashierPageActions.setDepositLimit),
      mergeMap(({ duration, sum }) =>
        this.cashierService.setDepositLimit(duration, sum).pipe(
          map((success) => CashierApiActions.setDepositLimitSuccess(success)),
          catchError((error) =>
            of(CashierApiActions.setDepositLimitFailure({ error }))
          )
        )
      )
    );
  });

  removeDepositLimits$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CashierPageActions.removeDepositLimits),
      mergeMap(() =>
        this.cashierService.removeDepositLimits().pipe(
          map((success) =>
            CashierApiActions.removeDepositLimitsSuccess(success)
          ),
          catchError((error) =>
            of(CashierApiActions.removeDepositLimitsFailure({ error }))
          )
        )
      )
    );
  });
}
