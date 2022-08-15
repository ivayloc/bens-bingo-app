import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap, timer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InvalidPassword } from '../models/invalid-password';
import { ResponseOf } from '../models/response-of';
import { ValidPassword } from '../models/valid-password';

@Injectable({
  providedIn: 'root',
})
export class UserRegistrationService {
  constructor(private http: HttpClient) {}

  register(userData: any): Observable<any> {
    return this.http.post(`${environment.apiDomain}/`, {});
  }
  // : Observable<ValidationErrors | null>
  validatePassword(password: string) {
    return timer(600).pipe(
      switchMap(() =>
        this.http
          .get<ResponseOf<InvalidPassword | ValidPassword>>(
            `${environment.apiDomain}/validate/password`,
            {
              params: { q: password },
            }
          )
          .pipe(
            map(({ data }) => data),
            map((data) => {
              if ('message' in data && !data.valid) {
                return { password: data.message };
              }
              return null;
            })
          )
      )
    );
  }
}
