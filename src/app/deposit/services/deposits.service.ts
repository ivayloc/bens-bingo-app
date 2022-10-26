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
import { DepositAccountForm } from '../models/deposit-account-form';
import { DepositActionPayload } from '../models/deposit-action-payload';

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
    let accountIdVariable = `/account/${accountid}`;
    if (!accountid) {
      accountIdVariable = '';
    }
    return this.http
      .post<ResponseOf<DepositAccount>>(
        `${environment.apiDomainUser}/deposit/processor/${processorid}${accountIdVariable}`,
        { amount, cvv2: cvv }
      )
      .pipe(map(({ data }) => data));
  }

  depositAddAccount(payload: any): Observable<Success> {
    return this.http
      .post<ResponseOf<Success>>(
        `${environment.apiDomainUser}/deposit/processor/${payload.processorid}/account`,
        payload
      )
      .pipe(map(({ data }) => data));
  }

  depositUpdateAccount(payload: any): Observable<Success> {
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

  submitFormData(form: DepositAccountForm): Observable<any> {
    const formData = new FormData();

    form.items.forEach(({ name, value }) => {
      formData.append(name, value.toString());
    });

    return this.http.post<any>(form.action, formData);
  }
}
