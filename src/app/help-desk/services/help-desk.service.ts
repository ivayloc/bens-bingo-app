import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ResponseOf } from 'src/app/shared/models/response-of';
import { environment } from 'src/environments/environment';
import { HelpDeskChat } from '../models/help-desk-chat';
import { HelpDeskMessage } from '../models/help-desk-message';

@Injectable({
  providedIn: 'root',
})
export class HelpDeskService {
  constructor(private http: HttpClient) {}

  getInboxMessages(): Observable<HelpDeskMessage[]> {
    return this.http
      .get<ResponseOf<HelpDeskMessage[]>>(
        `${environment.apiDomain}/api/slim/v1/user/current/help/inbox`
      )
      .pipe(map(({ data }) => data));
  }

  getSelectedInboxMessage(id: number): Observable<HelpDeskChat> {
    return this.http
      .get<ResponseOf<HelpDeskChat>>(
        `${environment.apiDomain}/api/slim/v1/user/current/help/ticket/${id}`
      )
      .pipe(map(({ data }) => data));
  }
}
