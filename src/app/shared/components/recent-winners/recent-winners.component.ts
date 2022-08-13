import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RecentWinners } from 'src/app/shared/models/recent-winners';
import { selectRecentWinners } from 'src/app/state';
import { AppPageActions } from 'src/app/state/actions';
import { RecentWinnersType } from '../../models/recent-winners-type';

@Component({
  selector: 'app-recent-winners',
  templateUrl: './recent-winners.component.html',
  styleUrls: ['./recent-winners.component.scss'],
})
export class RecentWinnersComponent implements OnInit {
  @Input() type = RecentWinnersType.casino;
  getRecentWinners$ = new Observable<RecentWinners[]>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    if (this.type === RecentWinnersType.casino) {
      this.store.dispatch(AppPageActions.loadCasinoRecentWinners());
      this.getRecentWinners$ = this.store.select(selectRecentWinners);
    }
    if (this.type === RecentWinnersType.bingo) {
      this.store.dispatch(AppPageActions.loadBingoRecentWinners());
      this.getRecentWinners$ = this.store.select(selectRecentWinners);
    }
  }
}
