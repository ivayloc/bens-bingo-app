import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import Parallax from 'parallax-js';
import { Observable } from 'rxjs';
import { Game } from 'src/app/shared/models/game';
import { BingoGame } from '../../../shared/models/bingo-game';
import { RecentWinners } from '../../../shared/models/recent-winners';
import { Jackpot } from '../../models/jackpots';
import {
  getBingoGames,
  getJackpots,
  getNewGames,
  getRecentWinners,
  getSlotsGames,
} from '../../state';
import { HomePageActions } from '../../state/actions';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
})
export class HomeLayoutComponent implements OnInit, AfterViewInit {
  @ViewChild('parallaxScene') parallaxScene!: ElementRef<HTMLDivElement>;
  getBingoGames$ = new Observable<BingoGame[]>();
  getSlotsGames$ = new Observable<Game[]>();
  getJackpots$ = new Observable<Jackpot[]>();
  getRecentWinners$ = new Observable<RecentWinners[]>();
  getNewGames$ = new Observable<Game[]>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(HomePageActions.loadHomeDetails());

    this.getBingoGames$ = this.store.select(getBingoGames);
    this.getSlotsGames$ = this.store.select(getSlotsGames);
    this.getJackpots$ = this.store.select(getJackpots);
    this.getRecentWinners$ = this.store.select(getRecentWinners);
    this.getNewGames$ = this.store.select(getNewGames);
  }

  ngAfterViewInit(): void {
    new Parallax(this.parallaxScene.nativeElement, {
      selector: '.parallax-layer',
    });
  }
}
