import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PaymentMethod } from 'src/app/shared/models/payment-method';
import { PaymentMethodsResponse } from 'src/app/shared/models/payment-methods-response';
import { ResponseOf } from 'src/app/shared/models/response-of';
import { Success } from 'src/app/shared/models/success';
import { environment } from 'src/environments/environment';
import { CashOutStatus } from '../models/cash-out-status';
import { DepositLimits } from '../models/deposit-limits';

@Injectable({
  providedIn: 'root',
})
export class CashierService {
  constructor(private http: HttpClient) {}

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
}
