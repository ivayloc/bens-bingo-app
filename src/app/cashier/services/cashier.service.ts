import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ResponseOf } from 'src/app/shared/models/response-of';
import { Success } from 'src/app/shared/models/success';
import { environment } from 'src/environments/environment';
import { CashOutStatus } from '../models/cash-out-status';
import { DepositActionPayload } from '../models/deposit-action-payload';
import { DepositAddAccountRequest } from '../models/deposit-add-account-request';
import { DepositLimits } from '../models/deposit-limits';
import { DepositUpdateAccountRequest } from '../models/deposit-update-account-request';
import { PaymentMethod } from '../models/payment-method';
import { PaymentMethodsResponse } from '../models/payment-methods-response';

@Injectable({
  providedIn: 'root',
})
export class CashierService {
  constructor(private http: HttpClient) {}

  getPaymentMethods(): Observable<PaymentMethod[]> {
    return this.http
      .get<ResponseOf<PaymentMethodsResponse>>(
        `${environment.apiDomain}/user/current/deposit`
      )
      .pipe(map(({ data }) => data.items));
  }

  getCashOutMethods(): Observable<PaymentMethod[]> {
    return this.http
      .get<ResponseOf<PaymentMethodsResponse>>(
        `${environment.apiDomain}/user/current/cashout/processorlist`
      )
      .pipe(map(({ data }) => data.items));
  }

  getCashOutStatus(): Observable<CashOutStatus> {
    return this.http
      .get<ResponseOf<CashOutStatus>>(
        `${environment.apiDomain}/user/current/cashout`
      )
      .pipe(map(({ data }) => data));
  }

  getDepositLimits(): Observable<DepositLimits> {
    return this.http
      .get<ResponseOf<DepositLimits>>(
        `${environment.apiDomain}/user/current/limits/transaction?transactiontype=credit&transactionaction=deposit`
      )
      .pipe(map(({ data }) => data));
  }

  setDepositLimit(duration: string, sum: number): Observable<Success> {
    return this.http
      .post<ResponseOf<Success>>(
        `${environment.apiDomain}/user/current/limits/transaction/add`,
        {
          duration,
          sum,
          expirydays: 100,
        }
      )
      .pipe(map(({ data }) => data));
  }

  removeDepositLimits(): Observable<Success> {
    return this.http
      .delete<ResponseOf<Success>>(
        `${environment.apiDomain}/user/current/limits/transaction/remove`
      )
      .pipe(map(({ data }) => data));
  }

  redeemBonusCode(code: string): Observable<Success> {
    return this.http
      .post<ResponseOf<Success>>(
        `${environment.apiDomain}/user/current/coupon`,
        { code }
      )
      .pipe(map(({ data }) => data));
  }

  makeDeposit({
    processorid,
    accountid,
    amount,
    cvv,
  }: DepositActionPayload): Observable<Success> {
    return this.http
      .post<ResponseOf<Success>>(
        `${environment.apiDomain}/user/current/deposit/processor/${processorid}/account/${accountid}`,
        { amount, cvv }
      )
      .pipe(map(({ data }) => data));
  }

  depositAddAccount(payload: DepositAddAccountRequest): Observable<Success> {
    return this.http
      .post<ResponseOf<Success>>(
        `${environment.apiDomain}/user/current/deposit/processor/${payload.paymentmethodid}/account`,
        payload
      )
      .pipe(map(({ data }) => data));
  }

  depositUpdateAccount(
    payload: DepositUpdateAccountRequest
  ): Observable<Success> {
    return this.http
      .put<ResponseOf<Success>>(
        `${environment.apiDomain}/user/current/deposit/processor/${payload.processorid}/account/${payload.accountid}`,
        payload
      )
      .pipe(map(({ data }) => data));
  }
}
