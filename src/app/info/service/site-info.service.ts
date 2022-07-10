import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TermsAndConditions } from '../models/terms-and-conditions';

@Injectable({
  providedIn: 'root',
})
export class SiteInfoService {
  constructor(private http: HttpClient) {}

  getTermsAndConditions(): Observable<TermsAndConditions> {
    return this.http.get<TermsAndConditions>(
      '/assets/mock/terms-and-conditions.json'
    );
  }
}
