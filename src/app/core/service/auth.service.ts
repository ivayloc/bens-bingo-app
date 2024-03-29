import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addSeconds, isAfter } from 'date-fns';
import { Observable } from 'rxjs';
import { shareReplay, switchMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../models/login-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(
    username: string = 'bencasino',
    password: string = '123456abc'
  ): Observable<LoginResponse> {
    return this.apiLogin().pipe(
      switchMap(() => {
        return this.http.post<LoginResponse>(
          `${environment.apiDomain}/api/slim/v1/user/login`,
          {
            username,
            password,
            siteid: 95,
          }
        );
      }),

      shareReplay()
    );
  }

  apiLogin() {
    const expirationTime = localStorage.getItem('jwtExpirationTime');
    if (expirationTime) {
      isAfter(new Date(), new Date(expirationTime));
    }
    return this.http
      .post<LoginResponse>(`${environment.apiDomain}/api/slim/login`, {
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
    return this.http.post<LoginResponse>(
      `${environment.apiDomain}/api/slim/refresh`,
      {}
    );
  }
}
