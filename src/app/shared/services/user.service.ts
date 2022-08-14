import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseOf } from '../models/response-of';
import { UserInfo } from '../models/user-info';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserInfo(): Observable<UserInfo> {
    return this.http
      .get<ResponseOf<UserInfo>>(`${environment.apiDomain}/user/current/info`)
      .pipe(map(({ data }) => data));
  }
}
