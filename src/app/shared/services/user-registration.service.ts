import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap, timer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InvalidField } from '../models/invalid-field';
import { ResponseOf } from '../models/response-of';
import { UserRegistrationQuick } from '../models/user-registration-quick';
import { ValidField } from '../models/valid-field';

@Injectable({
  providedIn: 'root',
})
export class UserRegistrationService {
  constructor(private http: HttpClient) {}

  register(payload: UserRegistrationQuick): Observable<any> {
    return this.http.post(`${environment.apiDomain}/user/register`, payload);
  }
  validatePassword(password: string): Observable<InvalidField | ValidField> {
    return timer(600).pipe(
      switchMap(() =>
        this.http
          .get<ResponseOf<InvalidField | ValidField>>(
            `${environment.apiDomain}/validate/password`,
            {
              params: { q: password },
            }
          )
          .pipe(map(({ data }) => data))
      )
    );
  }
  validateEmail(password: string): Observable<InvalidField | ValidField> {
    return timer(600).pipe(
      switchMap(() =>
        this.http
          .get<ResponseOf<InvalidField | ValidField>>(
            `${environment.apiDomain}/validate/email`,
            {
              params: { q: password },
            }
          )
          .pipe(map(({ data }) => data))
      )
    );
  }
  validateUsername(password: string): Observable<InvalidField | ValidField> {
    return timer(600).pipe(
      switchMap(() =>
        this.http
          .get<ResponseOf<InvalidField | ValidField>>(
            `${environment.apiDomain}/validate/alias`,
            {
              params: { q: password },
            }
          )
          .pipe(map(({ data }) => data))
      )
    );
  }
}
