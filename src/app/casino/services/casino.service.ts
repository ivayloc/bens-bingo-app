import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SlotsGame } from 'src/app/shared/models/slots-game';

@Injectable({
  providedIn: 'root',
})
export class CasinoService {
  constructor(private http: HttpClient) {}

  getSlotsGames(): Observable<SlotsGame[]> {
    return this.http.get<SlotsGame[]>('/assets/mock/hot-slots.json');
  }
  getNewGames() {}
}
