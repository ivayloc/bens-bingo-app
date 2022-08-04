import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ResponseOf } from 'src/app/shared/models/response-of';
import { environment } from 'src/environments/environment';
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
        `${environment.apiDomain}/api/slim/v1/user/current/deposit/processorlist`
      )
      .pipe(map(({ data }) => data.items));
  }

  getCashOutMethods(): Observable<PaymentMethod[]> {
    return this.http
      .get<ResponseOf<PaymentMethodsResponse>>(
        `${environment.apiDomain}/api/slim/v1/user/current/cashout/processorlist`
      )
      .pipe(map(({ data }) => data.items));
  }
}
