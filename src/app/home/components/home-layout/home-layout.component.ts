import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { BingoGame } from '../../models/bingo-game';
import { SlotsGame } from '../../models/slots-game';
import { getBingoGames, getSlotsGames, State } from '../../state';
import { HomePageActions } from '../../state/actions';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
})
export class HomeLayoutComponent implements OnInit {
  getBingoGames$ = new Observable<BingoGame[]>();
  getSlotsGames$ = new Observable<SlotsGame[]>();

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(HomePageActions.loadBingoGames());
    this.store.dispatch(HomePageActions.loadSlotsGames());

    this.getBingoGames$ = this.store.select(getBingoGames).pipe(
      tap((data) => {
        console.log(data);
      })
    );

    this.getSlotsGames$ = this.store.select(getSlotsGames).pipe(
      tap((data) => {
        console.log(data);
      })
    );
  }
}
