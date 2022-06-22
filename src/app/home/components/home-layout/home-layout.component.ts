import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BingoGame } from '../../models/bingo-game';
import { Jackpot } from '../../models/jackpots';
import { RecentWinners } from '../../models/recent-winners';
import { SlotsGame } from '../../models/slots-game';
import {
  getBingoGames,
  getJackpots,
  getRecentWinners,
  getSlotsGames,
  State,
} from '../../state';
import { HomePageActions } from '../../state/actions';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
})
export class HomeLayoutComponent implements OnInit {
  getBingoGames$ = new Observable<BingoGame[]>();
  getSlotsGames$ = new Observable<SlotsGame[]>();
  getJackpots$ = new Observable<Jackpot[]>();
  getRecentWinners$ = new Observable<RecentWinners[]>();

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(HomePageActions.loadBingoGames());
    this.store.dispatch(HomePageActions.loadSlotsGames());
    this.store.dispatch(HomePageActions.loadJackpots());
    this.store.dispatch(HomePageActions.loadRecentWinners());

    this.getBingoGames$ = this.store.select(getBingoGames);
    this.getSlotsGames$ = this.store.select(getSlotsGames);
    this.getJackpots$ = this.store.select(getJackpots);
    this.getRecentWinners$ = this.store.select(getRecentWinners);
  }
}
