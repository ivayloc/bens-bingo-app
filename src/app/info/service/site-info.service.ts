import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { map, Observable } from 'rxjs';
import { ResponseOf } from 'src/app/shared/models/response-of';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SiteInfoService {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  getTermsAndConditions(): Observable<SafeHtml> {
    return this.http
      .get<ResponseOf<string>>(`${environment.apiDomain}/content/en_GB/terms`)
      .pipe(
        map(({ data }) => {
          return this.sanitizer.bypassSecurityTrustHtml(data);
        })
      );
  }

  getAboutUs(): Observable<SafeHtml> {
    return this.http
      .get<ResponseOf<string>>(`${environment.apiDomain}/content/en_GB/about`)
      .pipe(
        map(({ data }) => {
          return this.sanitizer.bypassSecurityTrustHtml(data);
        })
      );
  }

  getPageContent(page: string): Observable<SafeHtml> {
    return this.http
      .get<ResponseOf<string>>(`${environment.apiDomain}/content/en_GB/${page}`)
      .pipe(
        map(({ data }) => {
          return this.sanitizer.bypassSecurityTrustHtml(data);
        })
      );
  }
}
