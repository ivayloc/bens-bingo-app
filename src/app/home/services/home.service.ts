import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Game } from 'src/app/shared/models/game';
import { ResponseOf } from 'src/app/shared/models/response-of';
import { environment } from 'src/environments/environment';
import { BingoGame } from '../../shared/models/bingo-game';
import { Jackpot } from '../models/jackpots';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getBingoGames(): Observable<BingoGame[]> {
    return this.http.get<BingoGame[]>('/assets/mock/bingo-games.json');
  }

  getJackpots(): Observable<Jackpot[]> {
    return this.http
      .get<ResponseOf<Jackpot[]>>(
        `${environment.apiDomain}/jackpots?currency=EUR&limit=1&best=true`
      )
      .pipe(map(({ data }) => data));
  }

  getNewGames(): Observable<Game[]> {
    return this.http.get<Game[]>('/assets/mock/new-games.json');
  }
}
