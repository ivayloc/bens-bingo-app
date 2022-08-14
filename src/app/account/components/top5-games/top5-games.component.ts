import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Jackpot } from 'src/app/home/models/jackpots';
import { Game } from 'src/app/shared/models/game';
import {
  selectTop5JackpotGames,
  selectTop5MostPlayedGames,
  selectTop5NewestGames,
} from '../../state';
import { AccountPageActions } from '../../state/actions';

@Component({
  selector: 'app-top5-games',
  templateUrl: './top5-games.component.html',
  styleUrls: ['./top5-games.component.scss'],
})
export class Top5GamesComponent implements OnInit {
  getNewestGames$ = new Observable<Game[]>();
  getMostPlayedGames$ = new Observable<Game[]>();
  getJackpots$ = new Observable<Jackpot[]>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(AccountPageActions.loadTop5Games());
    this.getNewestGames$ = this.store.select(selectTop5NewestGames);
    this.getMostPlayedGames$ = this.store.select(selectTop5MostPlayedGames);
    this.getJackpots$ = this.store.select(selectTop5JackpotGames);
  }

  gotToGame(url: string) {
    window.open(url, '_blank');
  }
}
