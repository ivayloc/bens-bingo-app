import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PaymentMethodsResponse } from 'src/app/shared/models/payment-methods-response';
import { ResponseOf } from 'src/app/shared/models/response-of';
import { Success } from 'src/app/shared/models/success';
import { environment } from 'src/environments/environment';
import { ConfirmedDepositResponse } from '../../deposit/models/confirmed-deposit-response';
import { PaymentMethod } from '../../shared/models/payment-method';
import { DepositAccount } from '../models/deposit-account';
import { DepositActionPayload } from '../models/deposit-action-payload';
import { DepositAddAccountRequest } from '../models/deposit-add-account-request';
import { DepositUpdateAccountRequest } from '../models/deposit-update-account-request';

@Injectable({
  providedIn: 'root',
})
export class DepositsService {
  constructor(private http: HttpClient) {}

  getPaymentMethods(): Observable<PaymentMethod[]> {
    return this.http
      .get<ResponseOf<PaymentMethodsResponse>>(
        `${environment.apiDomainUser}/deposit`
      )
      .pipe(map(({ data }) => data.items));
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
