import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable } from 'rxjs';
import { Jackpot } from 'src/app/home/models/jackpots';
import { environment } from 'src/environments/environment';
import { BingoGameDetailsDialogComponent } from '../components/bingo-game-details-dialog/bingo-game-details-dialog.component';
import { BingoGame } from '../models/bingo-game';
import { Game } from '../models/game';
import { GamesData } from '../models/games-data';
import { ResponseOf } from '../models/response-of';
import { SlotsGame } from '../models/slots-game';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor(private dialog: MatDialog, private http: HttpClient) {}

  showBingoGameDetails(game: BingoGame | SlotsGame): void {
    this.dialog.open(BingoGameDetailsDialogComponent, {
      minWidth: '',
      maxWidth: 'unset',
      panelClass: 'site-details-dialog',
      data: game,
    });
  }

  getNewestGames(): Observable<Game[]> {
    return this.http
      .get<ResponseOf<GamesData>>(
        `${environment.apiDomain}/instantgames/all/%20?formfactor=desktop&platform=html&limit=4&order=created`
      )
      .pipe(map(({ data }) => data.items));
  }

  getMostPlayedGames(): Observable<Game[]> {
    return this.http
      .get<ResponseOf<GamesData>>(
        `${environment.apiDomain}/instantgames/all/%20?formfactor=desktop&platform=html&filtertype=popular&limit=4`
      )
      .pipe(map(({ data }) => data.items));
  }

  getJackpots(): Observable<Jackpot[]> {
    return this.http
      .get<ResponseOf<Jackpot[]>>(
        `${environment.apiDomain}/jackpots?currency=EUR&limit=1&best=true`
      )
      .pipe(map(({ data }) => data));
  }
}
