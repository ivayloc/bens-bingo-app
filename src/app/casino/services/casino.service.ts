import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationItem } from 'src/app/shared/models/navigation-item';
import { SlotsGame } from 'src/app/shared/models/slots-game';

@Injectable({
  providedIn: 'root',
})
export class CasinoService {
  navigationLinks: NavigationItem[] = [
    { url: '/hot-casino', title: 'Hot Casino' },
    { url: '/new-releases', title: 'New Releases' },
    { url: '/jackpot-games', title: 'Jackpot Games' },
    { url: '/all-casino', title: 'All Casino' },
    { url: '/table-games', title: 'Table Games' },
  ];
  constructor(private http: HttpClient) {}

  getSlotsGames(): Observable<SlotsGame[]> {
    return this.http.get<SlotsGame[]>('/assets/mock/hot-slots.json');
  }
  getNewGames() {}
}
