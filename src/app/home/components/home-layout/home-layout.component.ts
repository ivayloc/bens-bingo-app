import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BingoGame } from '../../../shared/models/bingo-game';
import { Jackpot } from '../../models/jackpots';
import { RecentWinners } from '../../../shared/models/recent-winners';
import { SlotsGame } from '../../../shared/models/slots-game';
import {
  getBingoGames,
  getJackpots,
  getRecentWinners,
  getSlotsGames,
  State,
} from '../../state';
import { HomePageActions } from '../../state/actions';
import Parallax from 'parallax-js';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
})
export class HomeLayoutComponent implements OnInit, AfterViewInit {
  @ViewChild('parallaxScene') parallaxScene!: ElementRef<HTMLDivElement>;
  getBingoGames$ = new Observable<BingoGame[]>();
  getSlotsGames$ = new Observable<SlotsGame[]>();
  getJackpots$ = new Observable<Jackpot[]>();
  getRecentWinners$ = new Observable<RecentWinners[]>();

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(HomePageActions.loadHomeDetails());

    this.getBingoGames$ = this.store.select(getBingoGames);
    this.getSlotsGames$ = this.store.select(getSlotsGames);
    this.getJackpots$ = this.store.select(getJackpots);
    this.getRecentWinners$ = this.store.select(getRecentWinners);
  }

  ngAfterViewInit(): void {
    new Parallax(this.parallaxScene.nativeElement, {
      selector: '.parallax-layer',
    });
  }
}
