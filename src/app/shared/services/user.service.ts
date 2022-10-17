import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UpdatedUserInfo } from 'src/app/account/models/updated-user-info';
import { environment } from 'src/environments/environment';
import { ResponseOf } from '../models/response-of';
import { Success } from '../models/success';
import { UserInfo } from '../models/user-info';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserInfo(): Observable<UserInfo> {
    return this.http
      .get<ResponseOf<UserInfo>>(`${environment.apiDomain}/user/_current/info`)
      .pipe(map(({ data }) => data));
  }

  updateUserInfo(updatedUserInfo: UpdatedUserInfo): Observable<Success> {
    return this.http
      .put<ResponseOf<Success>>(
        `${environment.apiDomainUser}/info`,
        updatedUserInfo
      )
      .pipe(map(({ data }) => data));
  }
}
