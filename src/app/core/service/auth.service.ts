import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, switchMap, tap } from 'rxjs/operators';
import { LoginResponse } from '../models/login-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<LoginResponse> {
    return this.apiLogin().pipe(
      switchMap(() => {
        return this.http.post<LoginResponse>('api/slim/v1/user/login', {
          username,
          password,
          siteid: 95,
        });
      }),

      shareReplay()
    );
  }

  apiLogin() {
    return this.http
      .post<LoginResponse>('/api/slim/login', {
        username: 'api_test',
        password: 'test1234a',
      })
      .pipe(
        tap(({ access_token, expires_in }) => {
          localStorage.setItem('jwt', access_token);
          const timeNow = new Date().getTime() + expires_in;
          localStorage.setItem('jwtExpirationTime', timeNow.toString());
        })
      );
  }
}