import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ResponseOf } from 'src/app/shared/models/response-of';
import { environment } from 'src/environments/environment';
import { HelpDeskChat } from '../models/help-desk-chat';
import { HelpDeskMessage } from '../models/help-desk-message';
import { HelpDeskReply } from '../models/help-desk-reply';

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

  getOutboxMessages(): Observable<HelpDeskMessage[]> {
    return this.http
      .get<ResponseOf<HelpDeskMessage[]>>(
        `${environment.apiDomain}/api/slim/v1/user/current/help/outbox`
      )
      .pipe(map(({ data }) => data));
  }

  getArchivedMessages(): Observable<HelpDeskMessage[]> {
    return this.http
      .get<ResponseOf<HelpDeskMessage[]>>(
        `${environment.apiDomain}/api/slim/v1/user/current/help/archived`
      )
      .pipe(map(({ data }) => data));
  }

  getCustomerServiceMessages(): Observable<HelpDeskMessage[]> {
    return this.http
      .get<ResponseOf<HelpDeskMessage[]>>(
        `${environment.apiDomain}/api/slim/v1/user/current/help/admin`
      )
      .pipe(map(({ data }) => data));
  }

  getHelpDeskChat(id: number, isFromAdmin: boolean): Observable<HelpDeskChat> {
    let messageDetailsUrl = `api/slim/v1/user/current/help/ticket/${id}`;
    if (isFromAdmin) {
      messageDetailsUrl = `api/slim/v1/user/current/help/admin/${id}`;
    }

    return this.http
      .get<ResponseOf<HelpDeskChat>>(
        `${environment.apiDomain}${messageDetailsUrl}`
      )
      .pipe(map(({ data }) => data));
  }

  archiveHelpDeskChat(id: number): Observable<HelpDeskChat> {
    return this.http
      .post<ResponseOf<HelpDeskChat>>(
        `${environment.apiDomain}/api/slim/v1/user/current/help/ticket/${id}/archive`,
        {}
      )
      .pipe(map(({ data }) => data));
  }

  helpDeskChatReply({
    id,
    body,
    returnticket,
  }: HelpDeskReply): Observable<HelpDeskChat> {
    return this.http
      .post<ResponseOf<HelpDeskChat>>(
        `${environment.apiDomain}/api/slim/v1/user/current/help/ticket/${id}/reply`,
        {
          body,
          returnticket,
        }
      )
      .pipe(map(({ data }) => data));
  }
}
