import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SiteInfoService {
  constructor(private http: HttpClient) {}

  getTermsAndConditions(): Observable<string> {
    return this.http.get<string>('/assets/mock/terms-and-conditions.json');
  }
}
