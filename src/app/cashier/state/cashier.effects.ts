import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, forkJoin, map, mergeMap, of, tap } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
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
        ofType(CashierPageActions.setSelectedCashOutMethod),
        tap(({ type, id }) => {
          // if (type === '[Cashier Page] Set selected cash-out method') {
          this.router.navigate(['/cashier/withdrawal/', id]);
          // }
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

  redeemBonusCode$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CashierPageActions.redeemBonusCode),
      mergeMap(({ code }) =>
        this.cashierService.redeemBonusCode(code).pipe(
          map((success) => CashierApiActions.redeemBonusCodeSuccess(success)),
          catchError((error) =>
            of(CashierApiActions.redeemBonusCodeFailure({ error }))
          )
        )
      )
    );
  });
}
