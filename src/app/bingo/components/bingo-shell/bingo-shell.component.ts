import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BingoGame } from 'src/app/shared/models/bingo-game';
import { NavigationItem } from 'src/app/shared/models/navigation-item';
import { RecentWinnersType } from 'src/app/shared/models/recent-winners-type';
import { getBingoGames, getNewGames } from '../../state';
import { BingoPageActions } from '../../state/actions';

@Component({
  selector: 'app-bingo-shell',
  templateUrl: './bingo-shell.component.html',
  styleUrls: ['./bingo-shell.component.scss'],
})
export class BingoShellComponent implements OnInit {
  recentWinnersType = RecentWinnersType;
  navigationLinks: NavigationItem[] = [
    { url: '/bingo-games', title: 'Current Games' },
    { url: '/casino-games', title: 'How to Play' },
    { url: '/register', title: 'Chat' },
    { url: '/help', title: 'Coming Up' },
  ];
  getBingoGames$ = new Observable<BingoGame[]>();
  getNewGames$ = new Observable<BingoGame[]>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(BingoPageActions.loadBingoDetails());
    this.getBingoGames$ = this.store.select(getBingoGames);
    this.getNewGames$ = this.store.select(getNewGames);
  }
}
