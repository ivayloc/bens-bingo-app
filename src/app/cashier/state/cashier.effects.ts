import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
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
    private userService: UserService
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

  makeDeposit$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CashierPageActions.makeDeposit),
      mergeMap(({ payload }) =>
        this.cashierService.makeDeposit(payload).pipe(
          map((success) => CashierApiActions.makeDepositSuccess(success)),
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
