import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import format from 'date-fns/format';
import { map, Observable } from 'rxjs';
import { AuthService } from 'src/app/core/service/auth.service';
import { ResponseOf } from 'src/app/shared/models/response-of';
import { Success } from 'src/app/shared/models/success';
import { environment } from 'src/environments/environment';
import { AddFriendResponse } from '../models/add-friend-response';
import { AddFriendResult } from '../models/add-friend-result';
import { BingoHistoryRequest } from '../models/bingo-history-request';
import { FriendRequestResult } from '../models/friend-request-result';
import { FriendsList } from '../models/friends-list-response';
import { GameHistory } from '../models/game-history';
import { GamesHistory } from '../models/games-history';
import { SearchUserResponse } from '../models/search-user-response';
import { SearchUserResult } from '../models/search-user-result';
import { Transaction } from '../models/transaction';
import { TransactionsHistory } from '../models/transactions-history';
import { TransactionsHistoryRequest } from '../models/transactions-history-request';
import { UpdatedUserInfo } from '../models/updated-user-info';
import { UserProfile } from '../models/user-profile';

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

    return this.http
      .get<ResponseOf<TransactionsHistory>>(
        `${environment.apiDomain}//user/current/history/transaction`,
        {
          params,
        }
      )
      .pipe(map(({ data }) => data.items));
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

    return this.http
      .get<ResponseOf<GamesHistory>>(
        `${environment.apiDomain}/user/current/history/game`,
        {
          params,
        }
      )
      .pipe(map(({ data }) => data.items));
  }

  updateUserInfo(updatedUserInfo: UpdatedUserInfo): Observable<Success> {
    return this.http
      .put<ResponseOf<Success>>(
        `${environment.apiDomain}/user/current/info`,
        updatedUserInfo
      )
      .pipe(map(({ data }) => data));
  }

  getUserFriendsList(): Observable<FriendsList> {
    const params = new HttpParams({
      fromObject: {
        siteid: 95,
      },
    });

    return this.http
      .get<ResponseOf<FriendsList>>(
        `${environment.apiDomain}/user/current/friends/list`
      )
      .pipe(map(({ data }) => data));
  }
  removeUserFriend(friendalias: string): Observable<FriendsList> {
    const params = new HttpParams({
      fromObject: {
        friendalias,
      },
    });
    return this.http
      .get<ResponseOf<FriendsList>>(
        `${environment.apiDomain}/user/current/friends/remove`,
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
    return this.http
      .get<ResponseOf<FriendsList>>(
        `${environment.apiDomain}/user/current/friends/decline`,
        { params }
      )
      .pipe(map(({ data }) => data));
  }
  showUserProfile(friendalias: string): Observable<UserProfile> {
    return this.http
      .get<ResponseOf<UserProfile>>(
        `${environment.apiDomain}/profile/${friendalias}`
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
        `${environment.apiDomain}/user/current/friends/search`,
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
        `${environment.apiDomain}/user/current/friends/invite`,
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
      `${environment.apiDomain}/user/current/friends/cancel`,
      { body }
    );
  }

  approveFriendRequest(friendalias: string): Observable<FriendRequestResult> {
    const body = {
      friendalias,
    };

    return this.http.post<FriendRequestResult>(
      `${environment.apiDomain}/user/current/friends/approve`,
      body
    );
  }
}
