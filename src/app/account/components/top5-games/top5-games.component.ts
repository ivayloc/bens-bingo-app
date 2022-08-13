import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AccountPageActions } from '../../state/actions';

@Component({
  selector: 'app-top5-games',
  templateUrl: './top5-games.component.html',
  styleUrls: ['./top5-games.component.scss'],
})
export class Top5GamesComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(AccountPageActions.loadTop5Games());
  }
}
