import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import format from 'date-fns/format';
import { map, Observable, switchMap } from 'rxjs';
import { AuthService } from 'src/app/core/service/auth.service';
import { ResponseOf } from 'src/app/shared/models/response-of';
import { environment } from 'src/environments/environment';
import { GameHistory } from '../models/game-history';
import { BingoHistoryRequest } from '../models/bingo-history-request';
import { Transaction } from '../models/transaction';
import { TransactionsHistoryRequest } from '../models/transactions-history-request';
import { UserInfo } from '../models/user-info';
import { GamesHistory } from '../models/games-history';
import { TransactionsHistory } from '../models/transactions-history';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getTransactionsHistory({
    startdate,
    enddate,
    type,
  }: TransactionsHistoryRequest): Observable<Transaction[]> {
    const params = new HttpParams({
      fromObject: {
        startdate: format(startdate, 'yyy-MM-dd'),
        enddate: format(enddate, 'yyy-MM-dd'),
        numrecords: '100',
      },
    });

    const getTransactionsHistory$ = this.http.get<
      ResponseOf<TransactionsHistory>
    >(
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

  getGameHistory({
    startdate,
    enddate,
    gametype,
  }: BingoHistoryRequest): Observable<GameHistory[]> {
    const params = new HttpParams({
      fromObject: {
        startdate: format(startdate, 'yyy-MM-dd'),
        enddate: format(enddate, 'yyy-MM-dd'),
        numrecords: '100',
        gametype,
      },
    });

    const getBingoHistory$ = this.http.get<ResponseOf<GamesHistory>>(
      `${environment.apiDomain}/api/slim/v1/user/current/history/game`,
      {
        params,
      }
    );
    return this.authService
      .apiLogin()
      .pipe(switchMap(() => this.authService.login()))
      .pipe(
        switchMap(() => getBingoHistory$),
        map(({ data }) => data.items)
      );
  }
  getUserInfo(): Observable<UserInfo> {
    const getBingoHistory$ = this.http.get<ResponseOf<UserInfo>>(
      `${environment.apiDomain}/api/slim/v1/user/current/info`
    );
    return this.authService
      .apiLogin()
      .pipe(switchMap(() => this.authService.login()))
      .pipe(
        switchMap(() => getBingoHistory$),
        map(({ data }) => data)
      );
  }
}
