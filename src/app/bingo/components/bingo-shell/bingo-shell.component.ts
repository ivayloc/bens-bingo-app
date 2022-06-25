import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BingoGame } from 'src/app/shared/models/bingo-game';
import { getBingoGames, State } from '../../state';
import { BingoPageActions } from '../../state/actions';

@Component({
  selector: 'app-bingo-shell',
  templateUrl: './bingo-shell.component.html',
  styleUrls: ['./bingo-shell.component.scss'],
})
export class BingoShellComponent implements OnInit {
  getBingoGames$ = new Observable<BingoGame[]>();

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(BingoPageActions.loadBingoGames());
    this.getBingoGames$ = this.store.select(getBingoGames);
  }
}
