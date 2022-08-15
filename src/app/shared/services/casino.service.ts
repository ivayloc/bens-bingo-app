import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AuthService } from 'src/app/core/service/auth.service';
import { Game } from 'src/app/shared/models/game';
import { NavigationItem } from 'src/app/shared/models/navigation-item';
import { environment } from 'src/environments/environment';
import { GameCategoriesNames } from '../models/game-categories-names';
import { GamesData } from '../models/games-data';
import { GamesResponse } from '../models/games-response';
import { RecentWinners } from '../models/recent-winners';
import { ResponseOf } from '../models/response-of';

@Injectable({
  providedIn: 'root',
})
export class CasinoService {
  navigationLinks: NavigationItem[] = [
    { url: '/casino-games/hot-slots', title: 'Hot Slots' },
    { url: '/casino-games/new-releases', title: 'New Releases' },
    { url: '/casino-games/jackpot-games', title: 'Jackpot Games' },
    { url: '/casino-games/all-games', title: 'All Games' },
    { url: '/casino-games/table-games', title: 'Table Games' },
  ];

  gameCategoriesNames: GameCategoriesNames = {
    'hot-slots': 'Hot Slots',
    'new-releases': 'New Releases',
    'jackpot-games': 'Jackpot Games',
    'all-games': 'All Games',
    'table-games': 'Table Games',
  };
  constructor(private http: HttpClient, private authService: AuthService) {}

  getSlotsGames(): Observable<Game[]> {
    const params = new HttpParams().appendAll({
      siteid: '95',
      groups: 'slots',
      formfactor: 'desktop',
      platform: 'html',
      limit: 10,
    });

    return this.http
      .get<GamesResponse>(`${environment.apiDomain}/instantgames/all`, {
        params,
      })
      .pipe(map(({ data }) => data.items));
  }

  getSlotsGamesPage(pageIndex: number): Observable<GamesData> {
    const params = new HttpParams().appendAll({
      siteid: '95',
      groups: 'slots',
      formfactor: 'desktop',
      platform: 'html',
      pageIndex,
    });

    return this.http
      .get<ResponseOf<GamesData>>(`${environment.apiDomain}/instantgames/all`, {
        params,
      })
      .pipe(map(({ data }) => data));
  }

  getNewReleasesGamesPage(pageIndex: number): Observable<GamesData> {
    const params = new HttpParams().appendAll({
      siteid: '95',
      formfactor: 'desktop',
      platform: 'html',
      pageIndex,
      order: 'created',
    });

    return this.http
      .get<ResponseOf<GamesData>>(`${environment.apiDomain}/instantgames/all`, {
        params,
      })
      .pipe(map(({ data }) => data));
  }

  getTableGamesPage(pageIndex: number): Observable<GamesData> {
    const params = new HttpParams().appendAll({
      siteid: '95',
      groups: 'baccarat,blackjack,craps,poker,roulette,war',
      formfactor: 'desktop',
      platform: 'html',
      pageIndex,
    });

    return this.http
      .get<ResponseOf<GamesData>>(`${environment.apiDomain}/instantgames/all`, {
        params,
      })
      .pipe(map(({ data }) => data));
  }

  getAllSlotsGamesPage(pageIndex: number): Observable<GamesData> {
    const params = new HttpParams().appendAll({
      siteid: '95',
      groups: 'slots',
      formfactor: 'desktop',
      platform: 'html',
      pageIndex,
    });

    return this.http
      .get<ResponseOf<GamesData>>(`${environment.apiDomain}/instantgames/all`, {
        params,
      })
      .pipe(map(({ data }) => data));
  }

  getAllGamesPage(pageIndex: number): Observable<GamesData> {
    const params = new HttpParams().appendAll({
      siteid: '95',
      // groups: 'slots',
      formfactor: 'desktop',
      platform: 'html',
      pageIndex,
    });

    return this.http
      .get<ResponseOf<GamesData>>(`${environment.apiDomain}/instantgames/all`, {
        params,
      })
      .pipe(map(({ data }) => data));
  }
  getJackpotGamesPage(pageIndex: number): Observable<GamesData> {
    const params = new HttpParams().appendAll({
      siteid: '95',
      groups: 'slots',
      formfactor: 'desktop',
      platform: 'html',
      pageIndex,
      order: 'created',
    });

    return this.http
      .get<ResponseOf<GamesData>>(`${environment.apiDomain}/instantgames/all`, {
        params,
      })
      .pipe(map(({ data }) => data));
  }

  getNewGames(): Observable<Game[]> {
    return this.http.get<Game[]>('/assets/mock/new-games.json');
  }

  getRecentWinners(): Observable<RecentWinners[]> {
    return this.http
      .get<ResponseOf<RecentWinners[]>>(
        `${environment.apiDomain}/winners/slots/type:?limit=2`
      )
      .pipe(map(({ data }) => data));
  }
}
