import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addSeconds } from 'date-fns';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ResetPasswordInquiryResponse } from 'src/app/shared/models/reset-password-inquiry-response';
import { ResetPasswordMethods } from 'src/app/shared/models/reset-password-methods';
import { ResponseOf } from 'src/app/shared/models/response-of';
import { Success } from 'src/app/shared/models/success';
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
  ): Observable<boolean> {
    return this.http
      .post<ResponseOf<User>>(`${environment.apiDomain}/user/login`, {
        username,
        password,
      })
      .pipe(
        tap(({ data }) => {
          localStorage.setItem('usersessionid', data.usersessionid);
        }),
        map(({ success }) => success)
      );
  }

  apiLogin() {
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
    console.log('refresh');

    return this.http
      .post<LoginResponse>(`${environment.apiLogin}/refresh`, {})
      .pipe(map(({ access_token }) => access_token));
  }

  userLogout(): Observable<Success> {
    return this.http.post<Success>(`${environment.apiDomainUser}/logout`, {});
  }

  resetPasswordInquiry(
    accountIdentifier: string
  ): Observable<ResetPasswordMethods> {
    return this.http
      .get<ResponseOf<ResetPasswordInquiryResponse>>(
        `${environment.apiDomain}/user/resetpassword`,
        {
          params: { account_identifier: accountIdentifier, siteid: 95 },
        }
      )
      .pipe(map(({ data }) => data.methods));
  }

  getPasswordResetCode(
    method: string,
    accountIdentifier: string
  ): Observable<Success> {
    return this.http.post<Success>(
      `${environment.apiDomain}/user/resetpassword/${method}`,
      { account_identifier: accountIdentifier, siteid: 95 }
    );
  }

  sendPasswordResetKey(
    key: string,
    accountIdentifier: string
  ): Observable<Success> {
    return this.http
      .post<ResponseOf<Success>>(
        `${environment.apiDomain}/user/resetpassword`,
        { account_identifier: accountIdentifier, key }
      )
      .pipe(map(({ data }) => data));
  }
}
