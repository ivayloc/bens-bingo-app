import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { NavigationItem } from 'src/app/shared/models/navigation-item';
import { SlotsGame } from 'src/app/shared/models/slots-game';
import { GameCategoriesNames } from '../models/game-categories-names';

@Injectable({
  providedIn: 'root',
})
export class CasinoService {
  navigationLinks: NavigationItem[] = [
    { url: '/casino-games/hot-slots', title: 'Hot Slots' },
    { url: '/casino-games/new-releases', title: 'New Releases' },
    { url: '/casino-games/jackpot-games', title: 'Jackpot Games' },
    { url: '/casino-games/all-slots', title: 'All Slots' },
    { url: '/casino-games/table-games', title: 'Table Games' },
  ];

  gameCategoriesNames: GameCategoriesNames = {
    'hot-slots': 'Hot Slots',
    'new-releases': 'New Releases',
    'jackpot-games': 'Jackpot Games',
    'all-slots': 'All Games',
    'table-games': 'Table Games',
  };
  constructor(private http: HttpClient) {}

  getSlotsGames(): Observable<SlotsGame[]> {
    return this.http.get<SlotsGame[]>('/assets/mock/hot-slots.json');
  }
  getNewGames(): Observable<SlotsGame[]> {
    return this.http.get<SlotsGame[]>('/assets/mock/new-games.json');
  }
}
