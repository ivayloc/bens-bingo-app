import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BingoGame } from 'src/app/shared/models/bingo-game';
import { ComingUp } from 'src/app/shared/models/coming-up';
import { RecentWinners } from 'src/app/shared/models/recent-winners';
import { ChatModerators } from '../models/chat-moderators';

@Injectable({
  providedIn: 'root',
})
export class BingoService {
  constructor(private http: HttpClient) {}

  getBingoGames(): Observable<BingoGame[]> {
    return this.http.get<BingoGame[]>('/assets/mock/bingo-games.json');
  }

  getComingUp() {
    return this.http.get<ComingUp[]>('/assets/mock/bingo-games.json');
  }

  getRecentWinners() {
    return this.http.get<RecentWinners[]>('/assets/mock/recent-winners.json');
  }

  getChatModerators() {
    return this.http.get<ChatModerators[]>('/assets/mock/bingo-games.json');
  }

  getNewGames() {
    return this.http.get<BingoGame[]>('/assets/mock/new-games.json');
  }
}
