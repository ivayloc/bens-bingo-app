import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BingoGame } from '../../shared/models/bingo-game';
import { Jackpot } from '../models/jackpots';
import { RecentWinners } from '../models/recent-winners';
import { SlotsGame } from '../models/slots-game';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getBingoGames(): Observable<BingoGame[]> {
    return this.http.get<BingoGame[]>('/assets/mock/bingo-games.json');
  }

  getSlotsGames(): Observable<SlotsGame[]> {
    return this.http.get<SlotsGame[]>('/assets/mock/hot-slots.json');
  }

  getJackpots(): Observable<Jackpot[]> {
    return this.http.get<Jackpot[]>('/assets/mock/jackpots.json');
  }

  getRecentWinners(): Observable<RecentWinners[]> {
    return this.http.get<RecentWinners[]>('/assets/mock/recent-winners.json');
  }
}
