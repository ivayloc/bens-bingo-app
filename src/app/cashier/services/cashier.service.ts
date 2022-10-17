import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ResponseOf } from 'src/app/shared/models/response-of';
import { Success } from 'src/app/shared/models/success';
import { environment } from 'src/environments/environment';
import { CashOutStatus } from '../models/cash-out-status';
import { ConfirmedDepositResponse } from '../models/confirmed-deposit-response';
import { DepositAccount } from '../models/deposit-account';
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
        `${environment.apiDomainUser}/deposit`
      )
      .pipe(map(({ data }) => data.items));
  }

  getCashOutMethods(): Observable<PaymentMethod[]> {
    return this.http
      .get<ResponseOf<PaymentMethodsResponse>>(
        `${environment.apiDomainUser}/cashout/processorlist`
      )
      .pipe(map(({ data }) => data.items));
  }

  getCashOutStatus(): Observable<CashOutStatus> {
    return this.http
      .get<ResponseOf<CashOutStatus>>(`${environment.apiDomainUser}/cashout`)
      .pipe(map(({ data }) => data));
  }

  getDepositLimits(): Observable<DepositLimits> {
    return this.http
      .get<ResponseOf<DepositLimits>>(
        `${environment.apiDomainUser}/limits/transaction?transactiontype=credit&transactionaction=deposit`
      )
      .pipe(map(({ data }) => data));
  }

  setDepositLimit(duration: string, sum: number): Observable<Success> {
    return this.http
      .post<ResponseOf<Success>>(
        `${environment.apiDomainUser}/limits/transaction/add`,
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
        `${environment.apiDomainUser}/limits/transaction/remove`
      )
      .pipe(map(({ data }) => data));
  }

  redeemBonusCode(code: string): Observable<Success> {
    return this.http
      .post<ResponseOf<Success>>(`${environment.apiDomainUser}/coupon`, {
        code,
      })
      .pipe(map(({ data }) => data));
  }

  makeDeposit({
    processorid,
    accountid,
    amount,
    cvv,
  }: DepositActionPayload): Observable<DepositAccount> {
    return this.http
      .post<ResponseOf<DepositAccount>>(
        `${environment.apiDomainUser}/deposit/processor/${processorid}/account/${accountid}`,
        { amount, cvv2: cvv }
      )
      .pipe(map(({ data }) => data));
  }

  depositAddAccount(payload: DepositAddAccountRequest): Observable<Success> {
    return this.http
      .post<ResponseOf<Success>>(
        `${environment.apiDomainUser}/deposit/processor/${payload.paymentmethodid}/account`,
        payload
      )
      .pipe(map(({ data }) => data));
  }

  depositUpdateAccount(
    payload: DepositUpdateAccountRequest
  ): Observable<Success> {
    return this.http
      .put<ResponseOf<Success>>(
        `${environment.apiDomainUser}/deposit/processor/${payload.processorid}/account/${payload.accountid}`,
        payload
      )
      .pipe(map(({ data }) => data));
  }

  confirmDeposit(transactionId: number): Observable<ConfirmedDepositResponse> {
    return this.http
      .get<ResponseOf<ConfirmedDepositResponse>>(
        `${environment.apiDomainUser}/transaction/${transactionId}`
      )
      .pipe(map(({ data }) => data));
  }
}
