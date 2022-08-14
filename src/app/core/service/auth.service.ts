import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addSeconds } from 'date-fns';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ResponseOf } from 'src/app/shared/models/response-of';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../models/login-response';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(
    username: string = 'bencasino',
    password: string = '123456abc'
  ): Observable<ResponseOf<User>> {
    return this.http
      .post<ResponseOf<User>>(`${environment.apiDomain}/user/login`, {
        username,
        password,
      })
      .pipe(
        tap(({ data }) => {
          localStorage.setItem('usersessionid', data.usersessionid);
        })
      );
  }

  apiLogin() {
    // const expirationTime = localStorage.getItem('jwtExpirationTime');
    // if (expirationTime) {
    //   isAfter(new Date(), new Date(expirationTime));
    // }
    return this.http
      .post<LoginResponse>(`${environment.apiLogin}/login`, {
        username: 'api_test',
        password: 'test1234a',
        siteid: 95,
      })
      .pipe(
        tap(({ access_token, expires_in }) => {
          localStorage.setItem('jwt', access_token);
          const jwtExpirationTime = addSeconds(new Date(), expires_in);
          localStorage.setItem(
            'jwtExpirationTime',
            jwtExpirationTime.getTime().toString()
          );
        })
      );
  }

  apiRefreshToken() {
    return this.http.post<LoginResponse>(`${environment.apiLogin}/refresh`, {});
  }

  getAuthToken() {
    return localStorage.getItem('jwt');
  }

  refreshAuthToken() {
    return this.http
      .post<LoginResponse>(`${environment.apiLogin}/refresh`, {})
      .pipe(map(({ access_token }) => access_token));
  }
}
