import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import format from 'date-fns/format';
import { map, Observable, of, switchMap } from 'rxjs';
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
import { FriendsList } from '../models/friends-list-response';
import { UserProfile } from '../models/user-profile';
import { SearchUserResult } from '../models/search-user-result';
import { SearchUserResponse } from '../models/search-user-response';
import { AddFriendResult } from '../models/add-friend-result';
import { AddFriendResponse } from '../models/add-friend-response';
import { FriendRequestResult } from '../models/friend-request-result';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient, private authService: AuthService) { }

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
    return this.authService.login().pipe(
      switchMap(() => getBingoHistory$),
      map(({ data }) => data)
    );
  }
  getUserFriendsList(): Observable<FriendsList> {
    const params = new HttpParams({
      fromObject: {
        siteid: 95,
      },
    });

    return this.http
      .get<ResponseOf<FriendsList>>(
        `${environment.apiDomain}/api/slim/v1/user/current/friends/list`
      )
      .pipe(map(({ data }) => data));
  }
  removeUserFriend(friendalias: string): Observable<FriendsList> {
    const params = new HttpParams({
      fromObject: {
        friendalias,
      },
    });
    return of({} as FriendsList);
    return this.http
      .get<ResponseOf<FriendsList>>(
        `${environment.apiDomain}/api/slim/v1/user/current/friends/remove`,
        { params }
      )
      .pipe(map(({ data }) => data));
  }
  declinePendingFriendRequest(friendalias: string): Observable<FriendsList> {
    const params = new HttpParams({
      fromObject: {
        friendalias,
      },
    });
    return of({} as FriendsList);
    return this.http
      .get<ResponseOf<FriendsList>>(
        `${environment.apiDomain}/api/slim/v1/user/current/friends/decline`,
        { params }
      )
      .pipe(map(({ data }) => data));
  }
  showUserProfile(friendalias: string): Observable<UserProfile> {
    return this.http
      .get<ResponseOf<UserProfile>>(
        `${environment.apiDomain}/api/slim/v1/profile/${friendalias}`
      )
      .pipe(map(({ data }) => data));
  }
  searchUser(friendalias: string): Observable<SearchUserResult> {
    const params = new HttpParams({
      fromObject: {
        friendalias,
      },
    });

    return this.http
      .get<ResponseOf<SearchUserResponse>>(
        `${environment.apiDomain}/api/slim/v1/user/current/friends/search`,
        { params }
      )
      .pipe(map(({ data }) => data.result));
  }
  addFriend(friendalias: string): Observable<AddFriendResult> {
    const body = {
      friendalias,
    };

    return this.http
      .post<ResponseOf<AddFriendResponse>>(
        `${environment.apiDomain}/api/slim/v1/user/current/friends/invite`,
        body
      )
      .pipe(map(({ data }) => data.result));
  }

  cancelOutgoingFriendRequest(
    friendalias: string
  ): Observable<FriendRequestResult> {
    const body = {
      friendalias,
    };

    return this.http.delete<FriendRequestResult>(
      `${environment.apiDomain}/api/slim/v1/user/current/friends/cancel`,
      { body }
    );
  }

  approveFriendRequest(
    friendalias: string
  ): Observable<FriendRequestResult> {
    const body = {
      friendalias,
    };

    return this.http.post<FriendRequestResult>(
      `${environment.apiDomain}/api/slim/v1/user/current/friends/approve`,
      body
    );
  }
}
