import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BingoGame } from 'src/app/shared/models/bingo-game';
import { RecentWinners } from 'src/app/shared/models/recent-winners';
import { getBingoGames, getRecentWinners, State } from '../../state';
import { BingoPageActions } from '../../state/actions';

@Component({
  selector: 'app-bingo-shell',
  templateUrl: './bingo-shell.component.html',
  styleUrls: ['./bingo-shell.component.scss'],
})
export class BingoShellComponent implements OnInit {
  getBingoGames$ = new Observable<BingoGame[]>();
  getRecentWinners$ = new Observable<RecentWinners[]>();

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(BingoPageActions.loadBingoDetails());
    this.getBingoGames$ = this.store.select(getBingoGames);
    this.getRecentWinners$ = this.store.select(getRecentWinners);
  }
}
