import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import format from 'date-fns/format';
import { map, Observable, switchMap } from 'rxjs';
import { AuthService } from 'src/app/core/service/auth.service';
import { ResponseOf } from 'src/app/shared/models/response-of';
import { environment } from 'src/environments/environment';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getTransactionsHistory(
    startdate: Date,
    enddate: Date,
    type?: string
  ): Observable<Transaction[]> {
    const params = new HttpParams({
      fromObject: {
        startdate: format(startdate, 'yyy-MM-dd'),
        enddate: format(enddate, 'yyy-MM-dd'),
        numrecords: '100',
      },
    });

    const getTransactionsHistory$ = this.http.get<ResponseOf<Transaction[]>>(
      `${environment.apiDomain}/api/slim/v1//user/current/history/transaction`,
      {
        params,
      }
    );
    return this.authService
      .apiLogin()
      .pipe(switchMap(() => this.authService.login()))
      .pipe(
        switchMap(() => getTransactionsHistory$),
        map(({ data }) => data.items)
      );
  }
}
