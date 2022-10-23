import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, filter, Observable, of, switchMap } from 'rxjs';
import { selectPaymentMethods } from '../state';
import { DepositsPageActions } from '../state/actions';

@Injectable({
  providedIn: 'root',
})
export class PaymentMethodsGuard implements CanActivate {
  constructor(private store: Store) {}
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.store.dispatch(DepositsPageActions.loadPaymentMethods());
    return this.waitForData().pipe(
      switchMap(() => {
        return of(true);
      }),
      catchError(() => of(false))
    );
  }

  waitForData() {
    return this.store
      .select(selectPaymentMethods)
      .pipe(filter((paymentMethods) => !!paymentMethods));
  }
}
