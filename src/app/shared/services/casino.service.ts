import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iif, map, Observable, switchMap } from 'rxjs';
import { AuthService } from 'src/app/core/service/auth.service';
import { Game } from 'src/app/shared/models/game';
import { NavigationItem } from 'src/app/shared/models/navigation-item';
import { GameCategoriesNames } from '../models/game-categories-names';
import { GamesResponse } from '../models/games-response';

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
  constructor(private http: HttpClient, private authService: AuthService) {}

  getSlotsGames(): Observable<Game[]> {
    const params = new HttpParams().appendAll({
      siteid: '95',
      groups: 'jackpot',
      formfactor: 'desktop',
      platform: 'html',
    });

    const getGames$ = this.http.get<GamesResponse>(
      '/api/slim/v1/instantgames/slots',
      { params }
    );

    return iif<GamesResponse, GamesResponse>(
      () => !!localStorage.getItem('jwt'),
      getGames$,
      this.authService.apiLogin().pipe(switchMap(() => getGames$))
    ).pipe(map(({ data }) => data.items));
  }

  getNewGames(): Observable<Game[]> {
    return this.http.get<Game[]>('/assets/mock/new-games.json');
  }
}