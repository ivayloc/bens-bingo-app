import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Member } from '../models/member';
import { MembersResponse } from '../models/members-response';
import { ResponseOf } from '../models/response-of';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  constructor(private http: HttpClient) {}

  getChatModerators(): Observable<Member[]> {
    return this.http
      .get<ResponseOf<MembersResponse>>(
        `${environment.apiDomain}/members/cm?pageIndex=1`
      )
      .pipe(map(({ data }) => data.items));
  }
}
