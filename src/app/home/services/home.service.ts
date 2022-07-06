import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/shared/models/game';
import { BingoGame } from '../../shared/models/bingo-game';
import { RecentWinners } from '../../shared/models/recent-winners';
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
    return this.http.get<Jackpot[]>('/assets/mock/jackpots.json');
  }

  getRecentWinners(): Observable<RecentWinners[]> {
    return this.http.get<RecentWinners[]>('/assets/mock/recent-winners.json');
  }

  getNewGames(): Observable<Game[]> {
    return this.http.get<Game[]>('/assets/mock/new-games.json');
  }
}
